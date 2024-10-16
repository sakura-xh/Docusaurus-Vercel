## 前言

Windows的默认编码一直都是GBK，这就导致很多UTF-8编码的内容如果直接输出大概率会是乱码的，例如Windows的通知和命令行输出，都是乱码的集中地点，例如当我们使用默认的编码去访问一个UTF-8的页面时，返回的内容就会变成这样

![image-20241016221422264](./../图片/Pwsh中文乱码/image-20241016221422264.png)

## 解决办法

解决办法很简单，就是让`pwsh`的输出和输入内容都变成UTF-8，虽然也可以修改系统全局编码为UTF-8，但是那个方式太暴力，很多的Windows软件对于UTF-8的支持是很差的

首先打开`pwsh`的`profile`文件，如果没有就执行

```powershell
if (!(Test-Path -Path $PROFILE)) {  
    New-Item -ItemType File -Path $PROFILE -Force  
}
```

执行上述命令后，可以使用`$profile`来查看`profile`文件的位置

然后写入下面的内容来设置`pwsh`的默认编码为UTF-8

```powershell
$OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = [Text.UTF8Encoding]::UTF8
```

然后我们重启Windows Terminal，再次执行`curl`命令查看返回内容

![image-20241016222025124](./../图片/Pwsh中文乱码/image-20241016222025124.png)

可以看到已经没有任何乱码了