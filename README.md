# About

此分支是部署到 [HeroKu](https://www.heroku.com/) 的文件. HeroKu 会监听当前分支变动自动部署.

## 项目部署流程

1. master 分支改动
2. CI 自动构建 master 分支, 最终将可用于部署的代码 push 到 gh-pages 分支
3. HeroKu 监听 gh-pages 分支变动, 自动部署代码到线上环境
4. 用户即可通过 https://text-formatter.herokuapp.com/ 访问线上代码
