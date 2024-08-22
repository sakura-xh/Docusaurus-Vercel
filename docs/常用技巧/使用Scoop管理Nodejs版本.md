## 安装 Nodejs
使用 Scoop 这个工具可以很方便的安装和管理多个版本的 Nodejs，例如想要安装最新的 Nodejs 的 LTS 版本，只需要执行
```bash
scoop install nodejs-lts
```
:::info

需要注意的是，Scoop 中只包含每个大版本的最新的 Nodejs，这是因为 Scoop 的拉取机制决定的

:::

## 列出已安装的 Nodejs

当忘记安装了什么版本的 Nodejs 时，可以执行
```bash
scoop list node

Installed apps matching 'node':

Name       Version Source Updated             Info
----       ------- ------ -------             ----
nodejs     22.6.0  spc    2024-08-13 11:07:42
nodejs-lts 20.16.0 spc    2024-08-21 14:15:21
```
## 切换 Nodejs 版本
当安装了多个 Nodejs 版本是，使用以下命令可以快速切换
```bash
scoop reset nodejs<version>
```
例如
```bash
> node -v
v22.6.0
> scoop reset nodejs-lts
Resetting nodejs-lts (20.16.0).
Linking ~\scoop\apps\nodejs-lts\current => ~\scoop\apps\nodejs-lts\20.16.0
Removing ~\scoop\apps\nodejs-lts\current\bin from your path.
Removing ~\scoop\apps\nodejs-lts\current from your path.
Adding ~\scoop\apps\nodejs-lts\current\bin to your path.
Adding ~\scoop\apps\nodejs-lts\current to your path.
Persisting bin
Persisting cache
> node -v
v20.16.0
```
可以看到 Nodejs 版本切换很方便