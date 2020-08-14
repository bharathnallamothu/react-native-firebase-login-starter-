

- Add your remote.

  cd .android
  emulator -avd Pixel_3a_API_29

  npm run lint

  react-native run-android --variant=release

react-native run-android
react-native start --reset-cache
react-native init --verbose
react-native start
ctrl+m
adb logcat | grep ReactNativeJS
http://localhost:8081/debugger-ui/


//device permissions plugin
https://github.com/react-native-community/react-native-permissions

On Android shake the device or press hardware menu button (available on older devices and in most of the emulators, e.g. in genymotion you can press ⌘ + m or F2 to simulate hardware menu button click). You can also install Frappé, a tool for OS X, which allows you to emulate shaking of devices remotely. You can use ⌘ + Shift + R as a shortcut to trigger a shake from Frappé.

Go to root directly of your react native project and run following commands:
cd android &&
./gradlew cleanBuildCache

adb logcat -c
adb logcat -b all -c
adb logcat \*:E
