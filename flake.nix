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
            watchman
            androidComposition.androidsdk
            jdk
            gradle
            cmake
            gnumake
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

            echo "React Native development environment ready!"
            echo "Android SDK: $ANDROID_HOME"
            echo "Android AVD Home: $ANDROID_AVD_HOME"
            echo "Java Home: $JAVA_HOME ($(java -version 2>&1 | head -n 1))"
            echo "Node version: $(node -v)"
            echo "NPM version: $(npm -v)"

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
            echo "6. $ expo start"
            echo -e "\nTo run your Expo project with automatic emulator setup:"
            echo "$ expo-android             # Automatically sets up and starts emulator if needed"
            echo -e "\nOr follow these steps:"
            echo "1. $ install_system_image  # First time only"
            echo "2. $ setup_android_emulator # First time only"
            echo "3. $ start_android_emulator"
            echo "5. $ expo start"
          '';
        };
      in {
        devShells.default = devShell;
        devShell = devShell;
      });
}
