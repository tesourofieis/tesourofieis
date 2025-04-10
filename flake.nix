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

        # Use JDK 17 for Android tools compatibility
        jdk = pkgs.jdk17;

        # Android SDK configuration with system images for emulator
        androidComposition = pkgs.androidenv.composeAndroidPackages {
          toolsVersion = "26.1.1";
          platformToolsVersion = "33.0.3";
          buildToolsVersions = [ "33.0.2" "30.0.3" ];
          platformVersions = [ "33" "30" ];
          includeSources = false;
          includeSystemImages = true;
          systemImageTypes = [ "google_apis" "google_apis_playstore" ];
          abiVersions = [ "x86" "x86_64" ];
          cmakeVersions = [ "3.22.1" ];
          ndkVersions = [ "25.2.9519653" ];
          includeEmulator = true;
          emulatorVersion = "31.3.14";
        };

        # Define the development shell with all necessary packages
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and package managers
            nodejs_18
            nodePackages.npm
            pnpm
            watchman
            # iOS development (for macOS)
            (lib.optional stdenv.isDarwin [
              cocoapods
              xcodeenv.composeXcodeWrapper
              {
                version = "14.2";
                xcodewrapperArgs.xcodebuildVersions = { };
              }
            ])

            # Android development - using JDK 17
            androidComposition.androidsdk
            jdk
            gradle

            # Additional dependencies for emulator on Linux
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
            ])

            # General development tools
            git
            which
            curl
            gnumake
            bash
          ];

          # Environment variables
          shellHook = ''
            # Android SDK setup
            export ANDROID_HOME=${androidComposition.androidsdk}/libexec/android-sdk
            export ANDROID_SDK_ROOT=$ANDROID_HOME
            export ANDROID_AVD_HOME=$HOME/.android/avd
            export PATH=$PATH:$ANDROID_HOME/emulator
            export PATH=$PATH:$ANDROID_HOME/tools
            export PATH=$PATH:$ANDROID_HOME/tools/bin
            export PATH=$PATH:$ANDROID_HOME/platform-tools
            export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
            export JAVA_HOME=${jdk}

            # Ensure directories exist
            mkdir -p $HOME/.android
            mkdir -p $HOME/.android/avd

            # Override JDK version check for Android tools
            export SKIP_JDK_VERSION_CHECK=1

            # Node.js setup
            export NODE_PATH=$NODE_PATH:$(npm root -g)

            # For iOS development on macOS
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

            # Setup wrapper for Expo to ensure it finds the emulator
            expo_with_emulator() {
              # Check if an emulator is running
              if ! adb devices | grep -q "emulator"; then
                echo "No Android emulator detected. Starting one..."
                # Check if we have any AVDs
                if [ -z "$(emulator -list-avds)" ]; then
                  echo "No Android Virtual Devices found. Creating one..."
                  create_and_setup_emulator
                fi
                # Start the first available AVD
                start_first_avd
                # Wait for emulator to boot
                wait_for_emulator
              fi
              
              # Start Expo
              expo "$@"
            }

            # Create a simple default emulator if none exists
            create_and_setup_emulator() {
              echo "Installing system image..."
              yes | sdkmanager "system-images;android-30;google_apis;x86_64"
              
              echo "Creating Android Virtual Device..."
              echo "no" | avdmanager create avd --name "default_emulator" --package "system-images;android-30;google_apis;x86_64" --device "pixel_5"
              
              # Fix config to ensure emulator works well
              CONFIG_FILE="$ANDROID_AVD_HOME/default_emulator.avd/config.ini"
              if [ -f "$CONFIG_FILE" ]; then
                echo "Optimizing emulator configuration..."
                echo "hw.keyboard=yes" >> "$CONFIG_FILE"
                echo "hw.ramSize=2048" >> "$CONFIG_FILE"
                echo "disk.dataPartition.size=4096M" >> "$CONFIG_FILE"
              fi
            }

            # Start the first available AVD
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

            # Wait for emulator to fully boot
            wait_for_emulator() {
              echo "Waiting for emulator to boot..."
              adb wait-for-device
              
              # Wait until the device is fully booted
              while [ "$(adb shell getprop sys.boot_completed 2>/dev/null)" != "1" ]; do
                echo "."
                sleep 2
              done
              
              echo "Emulator is ready!"
            }

            # Helper functions for Android emulator
            install_system_image() {
              echo "Installing system image for Android 30 with Google APIs..."
              yes | sdkmanager "system-images;android-30;google_apis;x86_64"
            }

            setup_android_emulator() {
              echo "Creating Android emulator..."
              echo "no" | avdmanager create avd --name "react-native-emulator" --package "system-images;android-30;google_apis;x86_64" --device "pixel_5"
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

            # Create convenient aliases
            alias expo-android="expo_with_emulator"

            # Print help information
            echo -e "\nUseful commands:"
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
            echo "4. $ expo start"
          '';
        };
      in {
        devShells.default = devShell;

        # For compatibility with older versions of nix
        devShell = devShell;
      });
}
