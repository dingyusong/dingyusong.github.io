(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),o=(n(0),n(329)),a=["components"],i={},l={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898",id:"\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898",isDocsHomePage:!1,title:"C++\u9762\u8bd5\u9898",description:"[toc]",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898.md",slug:"/\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u8bed\u8a00/CPP/C++\u9762\u8bd5\u9898.md",version:"current"},p=[{value:"\u65b9\u6cd5\u91cd\u8f7d",id:"\u65b9\u6cd5\u91cd\u8f7d",children:[{value:"\u5de6\u79fb\u8fd0\u7b97\u7b26\u91cd\u8f7d",id:"\u5de6\u79fb\u8fd0\u7b97\u7b26\u91cd\u8f7d",children:[]}]},{value:"\u5bf9\u8c61\u521b\u5efa",id:"\u5bf9\u8c61\u521b\u5efa",children:[{value:"placement new",id:"placement-new",children:[]}]},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[{value:"\u7ee7\u627f\u7684\u5185\u5b58\u5e03\u5c40",id:"\u7ee7\u627f\u7684\u5185\u5b58\u5e03\u5c40",children:[]}]},{value:"\u591a\u6001-\u865a\u51fd\u6570-\u52a8\u6001\u7ed1\u5b9a",id:"\u591a\u6001-\u865a\u51fd\u6570-\u52a8\u6001\u7ed1\u5b9a",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(c.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"[toc]"),Object(o.b)("h1",{id:"\u9762\u5411\u5bf9\u8c61"},"\u9762\u5411\u5bf9\u8c61"),Object(o.b)("h2",{id:"\u65b9\u6cd5\u91cd\u8f7d"},"\u65b9\u6cd5\u91cd\u8f7d"),Object(o.b)("h3",{id:"\u5de6\u79fb\u8fd0\u7b97\u7b26\u91cd\u8f7d"},"\u5de6\u79fb\u8fd0\u7b97\u7b26\u91cd\u8f7d"),Object(o.b)("h2",{id:"\u5bf9\u8c61\u521b\u5efa"},"\u5bf9\u8c61\u521b\u5efa"),Object(o.b)("h3",{id:"placement-new"},"placement new"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://blog.csdn.net/linuxheik/article/details/80449059"},"C++\u4e2d\u4f7f\u7528placement new")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"void* operator new (std::size_t size) throw (std::bad_alloc);  \nvoid* operator new (std::size_t size, const std::nothrow_t& nothrow_constant) throw();  \nvoid* operator new (std::size_t size, void* ptr) throw();  \n")),Object(o.b)("p",null,"placement \u6709\u5b89\u7f6e\u7684\u610f\u601d\u3002\u7b2c\u4e09\u79cd\u662fplacement new\u7248\u672c\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u5bf9operator new\u7684\u91cd\u8f7d\uff0c\u5b9a\u4e49\u4e8e",Object(o.b)("inlineCode",{parentName:"p"},"#include <new>"),"\u4e2d\u3002\u5b83\u4e0d\u5206\u914d\u5185\u5b58\uff0c\u8c03\u7528\u5408\u9002\u7684\u6784\u9020\u51fd\u6570\u5728ptr\u6240\u6307\u7684\u5730\u65b9\u6784\u9020\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e4b\u540e\u8fd4\u56de\u5b9e\u53c2\u6307\u9488ptr\u3002 "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5b83\u4e0d\u5206\u914d\u5185\u5b58"),Object(o.b)("li",{parentName:"ol"},"\u5728ptr\u6240\u6307\u7684\u5730\u65b9\u6784\u9020\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e4b\u540e\u8fd4\u56de\u5b9e\u53c2\u6307\u9488ptr\u3002 ")),Object(o.b)("p",null,"\u5229\u7528\u5df2\u7ecf\u8bf7\u597d\u7684\u7a7a\u95f4\uff0c\u771f\u6b63\u7684\u7533\u8bf7\u7a7a\u95f4\u7684\u5de5\u4f5c\u662f\u5728\u6b64\u4e4b\u524d\u5b8c\u6210\u7684\u3002 \u4f46\u662f\u7531\u4e8e\u5bf9\u8c61\u7684\u7a7a\u95f4\u4e0d\u4f1a\u81ea\u52a8\u91ca\u653e\uff08\u5bf9\u8c61\u5b9e\u9645\u4e0a\u662f\u501f\u7528\u522b\u4eba\u7684\u7a7a\u95f4\uff09\uff0c\u6240\u4ee5\u5fc5\u987b\u663e\u793a\u7684\u8c03\u7528\u7c7b\u7684\u6790\u6784\u51fd\u6570\uff0c\u5982\u672c\u4f8b\u4e2d\u7684p->~A()\u3002 "),Object(o.b)("p",null,"\u51cf\u5c11\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u5185\u5b58\u5f00\u9500\u3002"),Object(o.b)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),Object(o.b)("h3",{id:"\u7ee7\u627f\u7684\u5185\u5b58\u5e03\u5c40"},"\u7ee7\u627f\u7684\u5185\u5b58\u5e03\u5c40"),Object(o.b)("p",null,"\u79c1\u6709\u6210\u5458\u53ea\u662f\u88ab\u7f16\u8bd1\u5668\u9690\u85cf\u4e86\uff0c\u4f46\u662f\u8fd8\u662f\u4f1a\u7ee7\u627f\u4e0b\u53bb\u3002"),Object(o.b)("h2",{id:"\u591a\u6001-\u865a\u51fd\u6570-\u52a8\u6001\u7ed1\u5b9a"},"\u591a\u6001-\u865a\u51fd\u6570-\u52a8\u6001\u7ed1\u5b9a"),Object(o.b)("p",null,"\u865a\u6307\u9488\u548c\u865a\u51fd\u6570\u8868\u3002"),Object(o.b)("h1",{id:"\u9762\u8bd5\u9898\u94fe\u63a5"},"\u9762\u8bd5\u9898\u94fe\u63a5"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.nowcoder.com/discuss/813215?type=2&channel=-1&source_id=discuss_terminal_discuss_hot_nctrack"},"\u817e\u8baf\u5929\u7f8eC++\u540e\u53f0\u4e00\u9762\u51c9\u7ecf")))}b.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,O=b["".concat(a,".").concat(s)]||b[s]||d[s]||o;return n?c.a.createElement(O,i(i({ref:t},p),{},{components:n})):c.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);