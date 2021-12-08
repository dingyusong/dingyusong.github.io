(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(331)),o=["components"],i={},l={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b",id:"\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b",isDocsHomePage:!1,title:"\u5e76\u53d1\u7f16\u7a0b",description:"`c",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b.md",slug:"/\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u8bed\u8a00/C/\u5e76\u53d1\u7f16\u7a0b.md",version:"current"},b=[{value:"Memory Barrier",id:"memory-barrier",children:[{value:"memory order",id:"memory-order",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],m={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <threads.h>\n#include <stdatomic.h>\n \natomic_int acnt;\nint cnt;\n \nint f(void* thr_data)\n{\n    for(int n = 0; n < 1000; ++n) {\n        ++cnt;\n        ++acnt;\n        // for this example, relaxed memory order is sufficient, e.g.\n        // atomic_fetch_add_explicit(&acnt, 1, memory_order_relaxed);\n    }\n    return 0;\n}\n \nint main(void)\n{\n    thrd_t thr[10];\n    for(int n = 0; n < 10; ++n)\n        thrd_create(&thr[n], f, NULL);\n    for(int n = 0; n < 10; ++n)\n        thrd_join(thr[n], NULL);\n \n    printf("The atomic counter is %u\\n", acnt);\n    printf("The non-atomic counter is %u\\n", cnt);\n}\n')),Object(c.b)("p",null,"Possible output:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"The atomic counter is 10000\nThe non-atomic counter is 8644\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"memory-barrier"},"Memory Barrier"),Object(c.b)("h3",{id:"memory-order"},"memory order"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"memory order"),Object(c.b)("th",{parentName:"tr",align:"left"},"\u4f5c\u7528"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_relaxed"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u65e0fencing\u4f5c\u7528\uff0ccpu\u548c\u7f16\u8bd1\u5668\u53ef\u4ee5\u91cd\u6392\u6307\u4ee4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_consume"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u540e\u9762\u4f9d\u8d56\u6b64\u539f\u5b50\u53d8\u91cf\u7684\u8bbf\u5b58\u6307\u4ee4\u52ff\u91cd\u6392\u81f3\u6b64\u6761\u6307\u4ee4\u4e4b\u524d")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_acquire"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u540e\u9762\u8bbf\u5b58\u6307\u4ee4\u52ff\u91cd\u6392\u81f3\u6b64\u6761\u6307\u4ee4\u4e4b\u524d")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_release"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u524d\u9762\u7684\u8bbf\u5b58\u6307\u4ee4\u52ff\u6392\u5230\u6b64\u6761\u6307\u4ee4\u4e4b\u540e\u3002\u5f53\u6b64\u6761\u6307\u4ee4\u7684\u7ed3\u679c\u88ab\u540c\u6b65\u5230\u5176\u4ed6\u6838\u7684cache\u4e2d\u65f6\uff0c\u4fdd\u8bc1\u524d\u9762\u7684\u6307\u4ee4\u4e5f\u5df2\u7ecf\u88ab\u540c\u6b65\u3002")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_acq_rel"),Object(c.b)("td",{parentName:"tr",align:"left"},"acquare + release")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"memory_order_seq_cst"),Object(c.b)("td",{parentName:"tr",align:"left"},"acq_rel + \u6240\u6709\u4f7f\u7528seq_cst\u7684\u6307\u4ee4\u6709\u4e25\u683c\u7684\u5168\u5e8f\u5173\u7cfb")))),Object(c.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"// thread 1\n// ready was initialized to false\np.init();\nready = true;\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"// thread 2\nif(ready) {\n p.bar();\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"// Thread1\n// ready was initialized to false\np.init();\nready.store(true, std::memory_order_release);\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"// Thread2\nif (ready.load(std::memory_order_acquire)) {\n  p.bar();\n}\n")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://www.zhihu.com/question/24301047/answer/85844428"},"\u5982\u4f55\u7406\u89e3 C++11 \u7684\u516d\u79cd memory order\uff1f")),Object(c.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://www.jb51.net/article/194239.htm"},"\u6d45\u8c08\u5173\u4e8eC++memory_order\u7684\u7406\u89e3"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/45566448"},"\u5185\u5b58\u987a\u5e8f\uff08Memory Order\uff09")))))}p.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,s=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return r?a.a.createElement(s,i(i({ref:t},b),{},{components:r})):a.a.createElement(s,i({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);