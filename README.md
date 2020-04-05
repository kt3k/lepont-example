# lepont-example

> An example usage of [lepont][] native bridge library.

`lepont` (Le Pont, "the bridge" in french) is a bridging library between react-native and browser.

This example repository demonstrates the usages of [lepont][] itself, [@lepont/share][], and [@lepont/async-storage][].

# How to run

You need to have Xcode, Cocoapods, JDK, and Android Studio installed.

```
git clone https://github.com/kt3k/lepont-example.git
cd lepont-example
yarn
cd ios
pod install
cd ..
yarn ios     # => this should start example app in your ios simulator
yarn android # => this should start example app in your android simulator
```

# License

MIT

[lepont]: https://github.com/kt3k/lepont
[@lepont/share]: https://github.com/kt3k/lepont-share
[@lepont/async-storage]: https://github.com/kt3k/lepont-async-storage
