# Atomic Package - CSS


### css npm package install

```
$ npm install @atomic-package/css
```

## include dist files

```
dist/
├── atomic-package
│   ├── atomic-package.scss
│   ├── atomic-package.css
│   └── atomic-package.min.css
├── atomic-package-theme
│   ├── atomic-package-theme.scss
│   ├── atomic-package-theme.css
│   └── atomic-package-theme.min.css
└── font
    ├── FontAwesome.otf
    ├── fontawesome-webfont.ttf
    ├── fontawesome-webfont.woff
    └── fontawesome-webfont.woff2
```

### import SCSS File

```
@import '/node_modules/@atomic-package/css';
```

or 

```
@import "~@atomic-package/css";
```


css file import
```
@import "~@atomic-package/css/dist/atomic-package.css";
```


## Style Guide 

#### Atomic Package Style Guide Page

https://atomic-package.github.io/css/

**directory**

```
docs/
```

![2019-02-04 16 20 18](https://user-images.githubusercontent.com/1584153/52194860-e7c38000-2898-11e9-8757-5e4679bc122f.png)



## develop SCSS directory details

### scss atomic-package directory

```
src/scss/atomic-package
├── _common_inc.scss
├── _parts.scss
├── atomic-package.scss
├── base
│   ├── _base.scss
│   ├── _helper.scss
│   ├── _mixin.scss
│   ├── _reset.scss
│   └── _setting.scss
├── pages
│   ├── _pages_inc.scss
│   └── _top.scss
└── parts
    ├── _animation.scss
    ├── _base.scss
    ├── _bg.scss
    ├── _box.scss
    ├── _button.scss
    ├── _footer.scss
    ├── _form.scss
    ├── _header.scss
    ├── _icon.scss
    ├── _list.scss
    ├── _media_queries.scss
    ├── _modal.scss
    ├── _navigation_menu.scss
    ├── _paragraph.scss
    ├── _separate.scss
    ├── _table.scss
    └── _title.scss
```    



### scss all directory

```
src/scss/
├── atomic-package
│   ├── _common_inc.scss
│   ├── _parts.scss
│   ├── atomic-package.scss
│   ├── base
│   │   ├── _base.scss
│   │   ├── _helper.scss
│   │   ├── _mixin.scss
│   │   ├── _reset.scss
│   │   └── _setting.scss
│   ├── pages
│   │   ├── _pages_inc.scss
│   │   └── _top.scss
│   └── parts
│       ├── _animation.scss
│       ├── _base.scss
│       ├── _bg.scss
│       ├── _box.scss
│       ├── _button.scss
│       ├── _footer.scss
│       ├── _form.scss
│       ├── _header.scss
│       ├── _icon.scss
│       ├── _list.scss
│       ├── _media_queries.scss
│       ├── _modal.scss
│       ├── _navigation_menu.scss
│       ├── _paragraph.scss
│       ├── _separate.scss
│       ├── _table.scss
│       └── _title.scss
└── atomic-package-theme
    ├── _common_inc.scss
    ├── _parts.scss
    ├── atomic-package-theme.scss
    ├── base
    │   ├── _base.scss
    │   ├── _mixin.scss
    │   ├── _reset.scss
    │   └── _setting.scss
    ├── pages
    │   ├── _pages_inc.scss
    │   └── _top.scss
    └── parts
        ├── _animation.scss
        ├── _bg.scss
        ├── _box.scss
        ├── _button.scss
        ├── _footer.scss
        ├── _form.scss
        ├── _header.scss
        ├── _icon.scss
        ├── _list.scss
        ├── _media_queries.scss
        ├── _modal.scss
        ├── _navigation_menu.scss
        ├── _paragraph.scss
        ├── _separate.scss
        └── _title.scss
```

## Start Develop

```
$ npm run dev
```

Open http://localhost:3000 in your browser.

Using fractal Style Guide.

## Build Fractal Style Guide. Document Files


```
$ npm run docs.build
```