# uglify-demo

使用uglify压缩javascript.

## 1. node.js方式

- 安装Node运行环境
- 安装uglifyjs
``` bash
npm install uglify-js -g
```
- 压缩
``` bash
uglifyjs file.js -m -o file.min.js
```

## 2. bat脚本批处理

运行 `auto.bat`

## 3. 使用 gulp

- 安装gulp
``` bash
npm install gulp-cli -g
npm install gulp -D
npx -p touch nodetouch gulpfile.js
gulp --help
```
- 编写gulpfile.js
- 执行压缩
``` bash
gulp
```