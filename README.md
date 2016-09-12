
Minimal THREEJS/Clojurescript example
----

> In addition to http://clojurescript.org/guides/quick-start

### Usage

```bash
boot build
open target/index.html
```

You will see a transparent, spinning cube.  It's probably best to view with Chrome/FF.

### Folders

```text
=>> tree . -I target
.
├── README.md
├── assets
│   └── index.html
├── build.boot
└── src
    └── minimal_cljs
        └── core.cljs

3 directories, 4 files
```

### About Boot

http://boot-clj.com/

Installation on OS X:

```bash
brew install boot-clj
```

Other platforms https://github.com/boot-clj/boot#install

### License

MIT
