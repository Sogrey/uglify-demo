@echo off
:: ����ѹ��JS�ļ��ĸ�Ŀ¼���ű����Զ�������β��Һ�ѹ�����е�JS
SET JSFOLDER=input
echo ���ڲ���JS�ļ�
chdir /d %JSFOLDER%
for /r . %%a in (*.js) do (
@echo ����ѹ�� %%~a ��
uglifyjs %%~fa -m -o %%~DPNa.min.js
)
echo ���!
pause & exit