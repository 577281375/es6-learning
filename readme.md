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

![Redux vs MobX](https://www.sitepoint.com/redux-vs-mobx-which-is-best/)
![Easy MobX and Redux Comparison](https://www.leighhalliday.com/easy-mobx-redux-comparison)

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



## redux、mobx、rxjs这三款数据流管理工具在你项目中是如何取舍的
这三个其实并不冲突，甚至可以放到一起用。
redux for global state：作为全局状态管理
rxjs for redux-middleware：rxjs 管理所有输入的 input -> redux action 的调度过程
mobx for component-state：作为组件局部状态管理器来用。

1）当你的项目数据复杂度很低，用 react 自带的 component-state 就可以
2）当你的项目数据复杂度一般，lift state 到 root component，然后通过 props 传递来管理
3）当你的项目数据复杂度较高，mobx + react 是好的选择
4）当你的项目数据复杂度很高，redux + react 可以帮助你维持可预测性和可维护性的下降曲线不那么陡。所有 state 变化都由 action 规范化。
5）当你的项目数据复杂度很高且数据来源很杂，rxjs 可以帮助你把所有 input 规范化为 observable/stream，可以用统一的方式处理。

思路其实很简单：
1）当 UI 变化很复杂时，用 component 归一化处理；
2）当 state 变化很复杂时，用 action/state 归一化处理；
3）当 data-input 很复杂时，用 rxjs/observable 归一化处理；任意问题，只要足够普遍和复杂，就值得抽象出专门化的机制