@echo off
:: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
SET JSFOLDER=input
echo 正在查找JS文件
chdir /d %JSFOLDER%
for /r . %%a in (*.js) do (
@echo 正在压缩 %%~a …
uglifyjs %%~fa -m -o %%~DPNa.min.js
)
echo 完成!
pause & exit