## 起因
6 月份因为审查问题，国内的 docker 镜像源关的关，跑路的跑路，没多少能用的了，首先已知的是上交大的肯定不能用了，然后阿里云的还行，但是速度慢而且镜像更新很慢，最新的镜像迟迟扒不下来，以前 dockerhub 多少还可以直连，但现在被 DNS 污染后全国访问大概就是这个样子

![image-20240826153553856](https://webp.317966.xyz/Images/2024/08/Docker%E5%9B%BD%E5%86%85%E6%97%A0%E6%B3%95%E8%AE%BF%E9%97%AE/IwvhO6QN36.jpeg)

所以考虑采用网友搭建的第三方镜像源。

## 解决方案
### 第三方镜像加速
这个方法简单，去网上找就完事了
```bash
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'

{

    "registry-mirrors": [

    	"https://dockerpull.com",

        "https://docker.anyhub.us.kg",

        "https://dockerhub.jobcher.com",

        "https://dockerhub.icu",

        "https://docker.awsl9527.cn"

    ]

}

EOF

sudo systemctl daemon-reload && sudo systemctl restart docker
```
直接执行替换，然后重启 `docker` 就完事了，快得很，缺点是鬼知道什么时候停止服务，之前用的 `uuuadc` 突然就没了

### 自建加速器
这个简单，多的是现成的项目一搭就完事了，有用自己海外服务器的，还有直接用大善人的 Worker 的，但我个人不准备使用这个方法，一是因为大善人那我薅了不少羊毛了，但都是低请求项目，`docker` 加速器绝对算是高请求的项目，最近因为这个也封了不少号了，保守起见先不整这个方案，但可以留个链接，万一哪天想了再说
[GitHub - cmliu/CF-Workers-docker.io: 这个项目是一个基于 Cloudflare Workers 的 Docker 镜像代理工具。它能够中转对 Docker 官方镜像仓库的请求，解决一些访问限制和加速访问的问题。](https://github.com/cmliu/CF-Workers-docker.io?tab=readme-ov-file#%E7%AC%AC%E4%B8%89%E6%96%B9-dockerhub-%E9%95%9C%E5%83%8F%E6%9C%8D%E5%8A%A1)

### 科学
这个不用说，放弃所有的加速器，直接翻墙，这个效果最好，效率最高，好点的梯子跑满宽带不成问题，缺点是要钱，花费总得有点

## 总结
总结了下几种方案的利弊

| 方案     | 优点                           | 缺点            |
| ------ | ---------------------------- | ------------- |
| 第三方加速器 | 不要钱，到处都是                     | 容易随时失效，得经常换   |
| 自建     | 服务稳定，大善人的服务器质量很不错            | 这玩意流量太大，号容易玩没 |
| 科学上网   | 速度飞快，服务稳定，因为直接对接 docker 官方镜像 | 要钱，要配置        |
## 选择
想了想，最后的选择是，自己的虚拟机上用第三方加速器，虚拟机不图稳定，方便就行，不能用了换一批就是了，然后偶尔用个机场的全局下一下，自建不考虑，公司开发环境也用第三方，反正那个服务器随便造。