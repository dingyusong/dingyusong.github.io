(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(7),a=(r(0),r(330)),o=["components"],p={},i={unversionedId:"Apple/\u9006\u5411/Cycript",id:"Apple/\u9006\u5411/Cycript",isDocsHomePage:!1,title:"Cycript",description:"Cycript",source:"@site/docs/Apple/\u9006\u5411/Cycript.md",slug:"/Apple/\u9006\u5411/Cycript",permalink:"/docs/Apple/\u9006\u5411/Cycript",editUrl:"dys-typora-open://mine/survival/docs/Apple/\u9006\u5411/Cycript.md",version:"current"},u=[],s={toc:u};function l(e){var t=e.components,p=Object(c.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,p,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"cycript"},"Cycript"),Object(a.b)("p",null,"\u5982\u679c\u77e5\u9053\u4e86\u4e00\u4e2a\u5bf9\u8c61\u5728\u5185\u5b58\u4e2d\u7684\u5730\u5740\uff0c\u53ef\u4ee5\u901a\u8fc7#\u64cd\u4f5c\u7b26\u6765\u83b7\u53d6\u8fd9\u4e2a\u5bf9\u8c61\u3002"),Object(a.b)("p",null,'In the previous section, we saw that objects were output as strings prefixed with #. This is because Cycript shows you the object\'s "description", which all objects in Objective-C are supposed to provide. However, to differentiate these descriptions from actual strings, # is used instead of @. The # represents "an object" in Cycript.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'cy# UIApp\n#"<SpringBoard: 0x10e803490>"\ncy# s = #0x10e803490\n#"<SpringBoard: 0x10e803490>"\ncy# #0\nnil\ncy# #4\nSegmentation fault: 11\n')),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.cycript.org/manual/"},"http://www.cycript.org/manual/")),Object(a.b)("p",null,"\u901a\u8fc7Cydia\u5b89\u88c5cycript"),Object(a.b)("p",null,"\u901a\u8fc7Cydia\u5b89\u88c5adv-cmds"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20210919110531584",src:r(559).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ps\u547d\u4ee4\u662fprocess status\u7684\u7f29\u5199\uff0c\u4f7f\u7528ps\u547d\u4ee4\u53ef\u4ee5\u5217\u51fa\u7cfb\u7edf\u5f53\u524d\u7684\u8fdb\u7a0b\n\u5217\u51fa\u6240\u6709\u7684\u8fdb\u7a0b\nps \u2013A\nps aux"),Object(a.b)("li",{parentName:"ul"},"\u641c\u7d22\u5173\u952e\u8bcd\nps \u2013A | grep \u5173\u952e\u8bcd")))}l.isMDXComponent=!0},330:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,y=l["".concat(o,".").concat(f)]||l[f]||b[f]||a;return r?c.a.createElement(y,p(p({ref:t},u),{},{components:r})):c.a.createElement(y,p({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},559:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image-20210919110531584-e87133675da10a83a52f39a4ad4de023.png"}}]);