(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(332)),i=["components"],u={},l={unversionedId:"\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video",id:"\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video",isDocsHomePage:!1,title:"Core-Video",description:"Core Video",source:"@site/docs/\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video.md",slug:"/\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video",permalink:"/docs/\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video",editUrl:"dys-typora-open://mine/survival/docs/\u97f3\u89c6\u9891/\u5b66\u4e60\u8d44\u6599/\u6559\u7a0b/Core-Video.md",version:"current"},a=[{value:"CVPixelBuffer",id:"cvpixelbuffer",children:[]}],p={toc:a};function b(e){var t=e.components,u=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},p,u,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"core-video"},"Core Video"),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20210127150938866",src:r(917).default})),Object(c.b)("p",null,"Apple Doc: ",Object(c.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corevideo"},"https://developer.apple.com/documentation/corevideo")),Object(c.b)("h2",{id:"cvpixelbuffer"},"CVPixelBuffer"),Object(c.b)("p",null,"YUV420"),Object(c.b)("p",null,"YUV 4:2:0\u91c7\u6837\uff0c\u6bcf\u56db\u4e2aY\u5171\u7528\u4e00\u7ec4UV\u5206\u91cf\u4e00\u4e2aYUV\u53608+2+2 = 12bits 1.5\u4e2a\u5b57\u8282\u3002"),Object(c.b)("p",null,"NV12:"),Object(c.b)("p",null,"NV12\u662f\u82f1\u7279\u5c14\u5b9a\u4e49\u7684\u89c6\u9891\u683c\u5f0f\uff0c\u5b83\u5728\u82f1\u7279\u5c14\u786c\u4ef6\u5e73\u53f0\u4e0a\u662f\u539f\u751f\u6001\u652f\u6301"),Object(c.b)("p",null,"NV12:IOS\u53ea\u6709\u8fd9\u4e00\u79cd\u6a21\u5f0f\u3002\u5b58\u50a8\u987a\u5e8f\u662f\u5148\u5b58Y\uff0c\u518dUV\u4ea4\u66ff\u5b58\u50a8\u3002"),Object(c.b)("p",null,"IOS\u53ea\u652f\u6301NV12\u4e5f\u5c31\u662fYUV420\u4e2d\u7684\u4e00\u79cd\u3002"),Object(c.b)("p",null,"I420:\u53c8\u53ebYU12\uff0c\u5b89\u5353\u7684\u6a21\u5f0f\u3002\u5b58\u50a8\u987a\u5e8f\u662f\u5148\u5b58Y\uff0c\u518d\u5b58U\uff0c\u6700\u540e\u5b58V\u3002YYYYUUUVVV"),Object(c.b)("p",null,"Google libyuv \u5f00\u6e90\u5e93\uff1a"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/libyuv/libyuv/"},"https://chromium.googlesource.com/libyuv/libyuv/")),Object(c.b)("p",null,"\u6587\u6863\uff1a",Object(c.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/libyuv/libyuv/+/HEAD/docs"},"https://chromium.googlesource.com/libyuv/libyuv/+/HEAD/docs")),Object(c.b)("p",null,"Get and build the libyuv code"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/libyuv/libyuv/+/HEAD/docs/getting_started.md"},"https://chromium.googlesource.com/libyuv/libyuv/+/HEAD/docs/getting_started.md")))}b.isMDXComponent=!0},332:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),p=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||c;return r?o.a.createElement(m,u(u({ref:t},a),{},{components:r})):o.a.createElement(m,u({ref:t},a))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var a=2;a<c;a++)i[a]=r[a];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},917:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image-20210127150938866-604cd2459bc00f5fede54c04679a1bbe.png"}}]);