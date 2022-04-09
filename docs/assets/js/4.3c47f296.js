(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"jui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jui","aria-hidden":"true"}},[a._v("#")]),a._v(" JUI")]),a._v(" "),r("p",[a._v("JUI是为开发者/设计师/产品经理准备的快速开发中后台应用的综合解决方案。基于众多业务、及业内中后台应用场景，提炼出典型、通用的物料组件或模板资源，并集成业内先进的工程化开发最佳实践，作为开发中后台应用的统一标准的生产线，以便后续积木式快速搭建业务系统和页面，减少重复开发和设计工作，大规模、高效率的生产高质量的中后台WEB应用。")]),a._v(" "),r("h3",{attrs:{id:"应用背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用背景","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用背景")]),a._v(" "),r("p",[a._v("随着互联网WEB应用技术的发展，在电商业务的信息、交易、数据支持等辅助类的中后台项目的应用开发过程中，经历了“体验一致性”、“设计效率/开发效率”、“多端适配” 等诸多问题。当业务演进到 “平台化、垂直市场” 阶段时，也会面临“周期性业务的品牌更新”，“不同品牌的多种垂直业务同期构建”，“众多相似的后台系统构建”，“跨业务/部门的设计、前端、后端协作”等诸多问题。面对诸多问题，需要一套完整最佳实践解决方案来支撑，解决用户体验一致性问题、解决一群设计师与工程师如何规模化的生产各种业务产品的问题、解决众多中后台项目开发和产品迭代的效率问题。")]),a._v(" "),r("h3",{attrs:{id:"统一ui组件库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一ui组件库","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一UI组件库")]),a._v(" "),r("p",[a._v("随着WEB前端技术的发展，业内各种优秀的UI框架层出不穷，团队内部可以选择一种或多种UI框架作为基础应用的开发方案。JUI使用业内优秀的基于MIT协议开源的AntDesign作为基础组件库，并秉承其优秀的设计价值观，在其设计规范的基础上融合专业设计师的产品设计理念，形成更加贴合京东业务的独特视觉风格。")]),a._v(" "),r("h3",{attrs:{id:"统一主界面布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一主界面布局","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一主界面布局")]),a._v(" "),r("p",[a._v("主界面布局是一个产品最外层的框架结构，往往会包含顶部导航、侧边栏导航、页脚、以及内容区域等，为适应业务需求场景，也需要支持多种布局模式，在真实项目中，主界面布局通常统领整个应用的视觉和交互，有非常重要的作用。")]),a._v(" "),r("h3",{attrs:{id:"统一页面和路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一页面和路由","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一页面和路由")]),a._v(" "),r("p",[a._v("页面和路由是组织起一个应用的关键骨架，两者结合实现界面的跳转，需要统一规划、配置和管理，要新建一个页面，通常只需要在统一规划的路由基础上进行简单的配置。与之相关的所有资源以组件化分治的原则就近管理，更加简洁、快速的提供后续功能的扩展。")]),a._v(" "),r("h3",{attrs:{id:"统一新增业务组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一新增业务组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一新增业务组件")]),a._v(" "),r("p",[a._v("对于一些可能被多处引用的功能模块，需提炼成业务组件统一管理，如：只负责一块相对独立，稳定的功能，没有单独的路由配置，可能是纯静态的，也可能包含自己的 state但不涉及共享的数据流仅受父组件传递参数控制的功能组件。")]),a._v(" "),r("h3",{attrs:{id:"统一样式编写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一样式编写","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一样式编写")]),a._v(" "),r("p",[a._v("为了避免全局样式的污染、及应对复杂的选择器，JUI使用CSS Modules并使用LESS语言来编写业务样式代码。并根据功能不同，划分为不同的类别。")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("页面级别的全局样式文件（index.less）：进行一些项目的通用的全局设置，比如布局样式、字号，颜色，行高等，所以在这里，你只需要关注自己的个性化需求即可，不用进行大量的 reset。")])]),a._v(" "),r("li",[r("p",[a._v("组件级别的样式：页面中重复使用的片段或相对独立的功能，你可以提炼成组件，相关的样式也应该提炼出来放在组件中，而不是混淆在页面里。")])]),a._v(" "),r("li",[r("p",[a._v("模块级别样式：针对某个模块生效的文件，或者由于业务的个性化需求，我们经常会遇到需要覆盖组件样式的情况（可就近部署）。")])]),a._v(" "),r("li",[r("p",[a._v("工具函数类别文件（utils.less）：放置一些工具函数供调用，比如清除浮动、圆角、阴影等。")])])]),a._v(" "),r("h3",{attrs:{id:"统一页面或组件间的状态管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一页面或组件间的状态管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一页面或组件间的状态管理")]),a._v(" "),r("p",[a._v("前端变革的一个核心路线就是从以操作DOM为核心到以控制State为核心，这样也就能将逻辑控制、渲染与交互给分离开来。需要统一规划组件间状态管理和数据的通信，并且要保持组件内部的状态独立，为开发大型、复杂的WEB应用程序提供支持。")]),a._v(" "),r("h3",{attrs:{id:"统一与服务端的通信和交互"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一与服务端的通信和交互","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一与服务端的通信和交互")]),a._v(" "),r("p",[a._v("目前业业内优秀的WEB应用都是基于前后端分离的开发模式，前后端常常是各成体系与团队，那么前后端的沟通也就成了项目开发中的主要矛盾之一。考虑到业务需求的经常变更，后台接口也会发生频繁变动。此时就需要前端能够建立专门的接口服务层（service层）对上屏蔽这种变化，保证UI界面层的稳定性。")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("封装通用HTTP请求：便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。")])]),a._v(" "),r("li",[r("p",[a._v("规划Service服务层：为了界面层的稳定、易于扩展和维护，同时避免异步请求导致的回调地狱，统一使用异步编程（Async/Await）的方式对请求逻辑进行封装或数据的再加工。")])])]),a._v(" "),r("h3",{attrs:{id:"统一mock和联调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一mock和联调","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一MOCK和联调")]),a._v(" "),r("p",[a._v("Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。")]),a._v(" "),r("h3",{attrs:{id:"统一工程化的开发、构建和发布"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一工程化的开发、构建和发布","aria-hidden":"true"}},[a._v("#")]),a._v(" 统一工程化的开发、构建和发布")]),a._v(" "),r("p",[a._v("使用统一的包括研发环境、生产发布、样式编译、字体/图标/图片等静态资源处理、版本管理、CDN发布等工程流程。")])])}],!1,null,null,null);t.default=s.exports}}]);