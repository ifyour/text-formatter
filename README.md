# Text-formatter

[![](https://data.jsdelivr.com/v1/package/gh/ifyour/text-formatter/badge)](https://www.jsdelivr.com/package/gh/ifyour/text-formatter) [![Build Status](https://travis-ci.org/ifyour/text-formatter.svg?branch=master)](https://travis-ci.org/ifyour/text-formatter)
> Another text formatting tool.

## Preview

[Live Demo →](https://text-formatter.herokuapp.com/)

> 提示: 因为服务托管在 Heroku, 首次访问可能需要 30 秒唤醒服务.

## Q & A

```text
Q: 为什么会有这个项目?
A: 写博客的时候, 频繁切换输入法很繁琐, 所以做了个小工具用来格式化文本统一风格.

Q: 具体功能是?
A: 替换中文标点, 中英文之间添加空格.

Q: 如何自定义规则?
A: 替换 `format` 方法中的正则, 欢迎 PR 贡献代码.

Q: 开发注意事项?
A: 在 `dev` 分支开发, `master` 分支会直接影响线上代码, 确保 `dev` 分支 OK 后再合并到 `master` 分支.
```

## Todo

* [x] 中英文之间添加空格
* [x] 标点符号修复
* [x] CI 支持，自动构建输出到 `gh-pages` 分支中的 `public` 目录
* [ ] 可配置项: 替换标点

## Contribution

```bash
# dev
$ yarn dev

# build
$ yarn build

# manual release to HeroKu
$ yarn run publish
```

Any types of contribution are welcome. Thanks.

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
