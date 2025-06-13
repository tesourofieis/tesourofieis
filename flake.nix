{
  description =
    "Complete React Native development environment with Android emulator integration";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            android_sdk.accept_license = true;
            allowUnfree = true;
          };
        };

        jdk = pkgs.jdk17;

        androidComposition = pkgs.androidenv.composeAndroidPackages {
          toolsVersion = "26.1.1";
          platformToolsVersion = "36.0.0";
          buildToolsVersions = [ "36.0.0" ];
          platformVersions = [ "36" ];
          includeSources = false;
          includeSystemImages = true;
          systemImageTypes = [ "google_apis" ];
          abiVersions = [ "x86_64" ];
          cmakeVersions = [ "3.22.1" ];
          includeEmulator = true;
          emulatorVersion = "36.1.2";
        };

        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.npm
            pnpm
            watchman
            (lib.optional stdenv.isDarwin [
              cocoapods
              xcodeenv.composeXcodeWrapper
              {
                version = "14.2";
                xcodewrapperArgs.xcodebuildVersions = { };
              }
            ])

            androidComposition.androidsdk
            jdk
            gradle
            cmake  # Add CMake from nixpkgs as backup

            (lib.optionals stdenv.isLinux [
              libGL
              libpulseaudio
              xorg.libX11
              xorg.libXcomposite
              xorg.libXcursor
              xorg.libXdamage
              xorg.libXext
              xorg.libXfixes
              xorg.libXi
              xorg.libXrandr
              xorg.libXrender
              xorg.libXtst
              xorg.libxcb
              nss
              nspr
              fontconfig
              freetype
              # Additional libraries needed for patching Android tools
              glibc
              gcc-unwrapped
              patchelf
              file
              binutils
            ])

            git
            which
            curl
            gnumake
            bash
          ];

          shellHook = ''
            export ANDROID_HOME=${androidComposition.androidsdk}/libexec/android-sdk
            export ANDROID_SDK_ROOT=$ANDROID_HOME
            export ANDROID_AVD_HOME=$HOME/.android/avd
            export PATH=$PATH:$ANDROID_HOME/emulator
            export PATH=$PATH:$ANDROID_HOME/tools
            export PATH=$PATH:$ANDROID_HOME/tools/bin
            export PATH=$PATH:$ANDROID_HOME/platform-tools
            export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
            export JAVA_HOME=${jdk}
            export SKIP_JDK_VERSION_CHECK=1
            export NODE_PATH=$NODE_PATH:$(npm root -g)

            mkdir -p $HOME/.android
            mkdir -p $HOME/.android/avd

            ${if pkgs.stdenv.isDarwin then ''
              export DEVELOPER_DIR=${pkgs.xcodeenv.composeXcodeWrapper}/Contents/Developer
              export PATH=$PATH:$DEVELOPER_DIR/Applications
            '' else
              ""}

            echo "React Native development environment ready!"
            echo "Android SDK: $ANDROID_HOME"
            echo "Android AVD Home: $ANDROID_AVD_HOME"
            echo "Java Home: $JAVA_HOME ($(java -version 2>&1 | head -n 1))"
            echo "Node version: $(node -v)"
            echo "NPM version: $(npm -v)"

            # Fix Android build tools for NixOS
            fix_android_tools() {
              echo "Fixing Android build tools for NixOS..."
              
              # Patch CMake binaries in Android SDK
              if [ -d "$ANDROID_HOME/cmake" ]; then
                find "$ANDROID_HOME/cmake" -type f -executable -name "cmake*" | while read -r cmake_binary; do
                  if file "$cmake_binary" | grep -q "ELF.*dynamically linked"; then
                    echo "Patching CMake binary: $cmake_binary"
                    patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" "$cmake_binary" 2>/dev/null || true
                    patchelf --set-rpath "${pkgs.lib.makeLibraryPath [ 
                      pkgs.stdenv.cc.cc.lib 
                      pkgs.zlib 
                      pkgs.glibc 
                      pkgs.ncurses
                    ]}" "$cmake_binary" 2>/dev/null || true
                  fi
                done
              fi
              
              # Also check for CMake in the NDK
              if [ -d "$ANDROID_HOME/ndk" ]; then
                find "$ANDROID_HOME/ndk" -type f -executable -name "cmake*" | while read -r cmake_binary; do
                  if file "$cmake_binary" | grep -q "ELF.*dynamically linked"; then
                    echo "Patching NDK CMake binary: $cmake_binary"
                    patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" "$cmake_binary" 2>/dev/null || true
                    patchelf --set-rpath "${pkgs.lib.makeLibraryPath [ 
                      pkgs.stdenv.cc.cc.lib 
                      pkgs.zlib 
                      pkgs.glibc 
                      pkgs.ncurses
                    ]}" "$cmake_binary" 2>/dev/null || true
                  fi
                done
              fi
              
              # Patch Android SDK emulator binaries
              if [ -d "$ANDROID_HOME/emulator" ]; then
                find "$ANDROID_HOME/emulator" -type f -executable | while read -r emulator_binary; do
                  if file "$emulator_binary" | grep -q "ELF.*dynamically linked"; then
                    echo "Patching emulator binary: $emulator_binary"
                    patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" "$emulator_binary" 2>/dev/null || true
                    patchelf --set-rpath "${pkgs.lib.makeLibraryPath [ 
                      pkgs.stdenv.cc.cc.lib 
                      pkgs.zlib 
                      pkgs.glibc 
                      pkgs.libGL 
                      pkgs.libpulseaudio 
                      pkgs.xorg.libX11 
                      pkgs.xorg.libXext 
                      pkgs.xorg.libXi 
                      pkgs.xorg.libXrandr 
                      pkgs.xorg.libXrender 
                      pkgs.xorg.libXtst 
                      pkgs.xorg.libxcb 
                      pkgs.fontconfig 
                      pkgs.freetype
                    ]}" "$emulator_binary" 2>/dev/null || true
                  fi
                done
              fi
              
              # Find and patch AAPT2 binaries
              find ~/.gradle/caches -name "aapt2" -type f 2>/dev/null | while read -r aapt2_path; do
                if file "$aapt2_path" | grep -q "ELF.*dynamically linked"; then
                  echo "Patching $aapt2_path"
                  patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" "$aapt2_path" 2>/dev/null || true
                  patchelf --set-rpath "${pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib pkgs.zlib pkgs.glibc ]}" "$aapt2_path" 2>/dev/null || true
                fi
              done
              
              # Also patch any other problematic Android tools
              for tool_dir in ~/.gradle/caches/transforms-*/transformed/*/; do
                if [ -d "$tool_dir" ]; then
                  find "$tool_dir" -type f -executable 2>/dev/null | while read -r tool_path; do
                    if file "$tool_path" | grep -q "ELF.*dynamically linked"; then
                      echo "Patching $tool_path"
                      patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" "$tool_path" 2>/dev/null || true
                      patchelf --set-rpath "${pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib pkgs.zlib pkgs.glibc ]}" "$tool_path" 2>/dev/null || true
                    fi
                  done
                fi
              done
              
              echo "Android tools patching complete"
            }

            # Alternative approach - use system cmake instead of Android SDK cmake
            use_system_cmake() {
              echo "Setting up to use system CMake instead of Android SDK CMake..."
              export CMAKE_BIN="$(which cmake)"
              echo "Using CMake from: $CMAKE_BIN"
              echo "CMake version: $(cmake --version | head -n 1)"
              
              # Create a wrapper script to override Android SDK cmake
              if [ -d "$ANDROID_HOME/cmake/3.22.1/bin" ]; then
                echo "Creating CMake wrapper..."
                cp "$CMAKE_BIN" "$ANDROID_HOME/cmake/3.22.1/bin/cmake.nixos"
                cat > "$ANDROID_HOME/cmake/3.22.1/bin/cmake" << 'EOF'
#!/bin/bash
exec "$(dirname "$0")/cmake.nixos" "$@"
EOF
                chmod +x "$ANDROID_HOME/cmake/3.22.1/bin/cmake"
                echo "CMake wrapper created successfully"
              fi
            }

            # Debug emulator issues
            debug_emulator() {
              echo "Debugging emulator setup..."
              echo "Available AVDs:"
              emulator -list-avds
              echo ""
              echo "Emulator binary location: $ANDROID_HOME/emulator/emulator"
              echo "Testing emulator binary:"
              ldd "$ANDROID_HOME/emulator/emulator" 2>&1 | head -10 || echo "ldd failed - this is normal on NixOS"
              echo ""
              echo "GPU info:"
              glxinfo | grep "OpenGL" | head -3 2>/dev/null || echo "No GPU acceleration info available"
            }

            expo_with_emulator() {
              if ! adb devices | grep -q "emulator"; then
                echo "No Android emulator detected. Starting one..."
                if [ -z "$(emulator -list-avds)" ]; then
                  echo "No Android Virtual Devices found. Creating one..."
                  create_and_setup_emulator
                fi
                start_first_avd
                wait_for_emulator
              fi
              
              expo "$@"
            }

            create_and_setup_emulator() {
              echo "Installing system image..."
              yes | sdkmanager "system-images;android-36;google_apis;x86_64"
              
              echo "Creating Android Virtual Device..."
              echo "no" | avdmanager create avd --name "default_emulator" --package "system-images;android-36;google_apis;x86_64" --device "pixel_5"
              
              CONFIG_FILE="$ANDROID_AVD_HOME/default_emulator.avd/config.ini"
              if [ -f "$CONFIG_FILE" ]; then
                echo "Optimizing emulator configuration..."
                echo "hw.keyboard=yes" >> "$CONFIG_FILE"
                echo "hw.ramSize=2048" >> "$CONFIG_FILE"
                echo "disk.dataPartition.size=4096M" >> "$CONFIG_FILE"
              fi
            }

            start_first_avd() {
              AVD_NAME=$(emulator -list-avds | head -n 1)
              if [ -n "$AVD_NAME" ]; then
                echo "Starting emulator '$AVD_NAME'..."
                nohup emulator -avd "$AVD_NAME" -no-boot-anim -no-audio -no-snapshot-load > /dev/null 2>&1 &
                return 0
              else
                echo "No AVDs available to start!"
                return 1
              fi
            }

            wait_for_emulator() {
              echo "Waiting for emulator to boot..."
              adb wait-for-device
              
              while [ "$(adb shell getprop sys.boot_completed 2>/dev/null)" != "1" ]; do
                echo "."
                sleep 2
              done
              
              echo "Emulator is ready!"
            }

            install_system_image() {
              echo "Installing system image for Android 36 with Google APIs..."
              yes | sdkmanager "system-images;android-36;google_apis;x86_64"
            }

            setup_android_emulator() {
              echo "Creating Android emulator..."
              echo "no" | avdmanager create avd --name "react-native-emulator" --package "system-images;android-36;google_apis;x86_64" --device "pixel_5"
              echo "Android emulator created. Start it with: start_android_emulator"
            }

            list_system_images() {
              echo "Available system images:"
              sdkmanager --list | grep system-images
            }

            start_android_emulator() {
              echo "Starting Android emulator..."
              nohup emulator -avd "react-native-emulator" -no-boot-anim -no-snapshot-load > /dev/null 2>&1 &
              wait_for_emulator
            }

            list_avds() {
              echo "Available Android Virtual Devices:"
              emulator -list-avds
            }

            alias expo-android="expo_with_emulator"

            echo -e "\nUseful commands:"
            echo "$ fix_android_tools        # Fix Android build tools for NixOS (run before building)"
            echo "$ use_system_cmake         # Use system CMake instead of Android SDK CMake"
            echo "$ debug_emulator           # Debug emulator issues"
            echo "$ install_system_image     # Install necessary system image"
            echo "$ list_system_images       # List available system images"
            echo "$ setup_android_emulator   # Create Android emulator"
            echo "$ start_android_emulator   # Start Android emulator"
            echo "$ list_avds                # List available Android emulators"
            echo "$ expo-android             # Start Expo with automatic emulator launch"
            echo -e "\nTo run your Expo project with automatic emulator setup:"
            echo "$ expo-android             # Automatically sets up and starts emulator if needed"
            echo -e "\nOr follow these steps:"
            echo "1. $ install_system_image  # First time only"
            echo "2. $ setup_android_emulator # First time only"
            echo "3. $ start_android_emulator"
            echo "4. $ fix_android_tools     # Run this if you get AAPT2/CMake errors"
            echo "5. $ use_system_cmake      # Alternative CMake fix"
            echo "6. $ expo start"
            echo -e "\nTo run your Expo project with automatic emulator setup:"
            echo "$ expo-android             # Automatically sets up and starts emulator if needed"
            echo -e "\nOr follow these steps:"
            echo "1. $ install_system_image  # First time only"
            echo "2. $ setup_android_emulator # First time only"
            echo "3. $ start_android_emulator"
            echo "4. $ fix_android_tools     # Run this if you get AAPT2 errors"
            echo "5. $ expo start"
          '';
        };
      in {
        devShells.default = devShell;
        devShell = devShell;
      });
}
