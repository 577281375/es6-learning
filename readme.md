## es6 webpack
    yarn
    yarn add package-name -D（package-name 为下面四个依赖包）
    hot-module-replacement html-webpack-plugin
    webpack
    webpack-cli
    webpack-dev-server

    touch webpack.config.js
    然后 复制粘贴
    webpack.config.js
    package.json 内 script命令行

    启动：npm start


## MobX
![an in-depth explanation of MobX](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)



quiz:
    1.写一个这样的组建 我觉得是需要的 业务场景
        业务需求：
            modal的visible根据配置文件 按照顺序执行 弹出顺序
        设计思想
            类似 vue 路由
            modal组建的 visible onchange 提出来
            onchange -> 类似 router.push |  router.back | router.go (点击下一步)
            visible -> 把visible 拦截 储存在 组建内部扭转
            是否进行下一步回调 router监听
                beforeRouteEnter (to, from, next) 请求数据
                beforeRouteUpdate (to, from, next) 组件实例会被复用。而这个钩子就会在这个情况下被调用
                beforeRouteLeave (to, from, next) 可以访问组件实例 `this` 获取form表单填写信息 提交表单

    2.open browser 定制 plugin 如果我打开过浏览器 直接在原页面上启动项目 不再开启新窗口

    3.可以把 每个模块单独写一个store 数据单独维护 然后最后挂在在 rootstore上 保证唯一通信 但是store间如何通信就可以通过 inject获取

