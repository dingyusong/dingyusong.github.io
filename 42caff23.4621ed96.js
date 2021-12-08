(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),c=t(7),o=(t(0),t(331)),i=["components"],a={},p={unversionedId:"Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once",id:"Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once",isDocsHomePage:!1,title:"dispatch_once",description:"`c",source:"@site/docs/Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once.md",slug:"/Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once",permalink:"/docs/Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once",editUrl:"dys-typora-open://mine/survival/docs/Apple/\u5e76\u53d1\u7f16\u7a0b/dispatch_once.md",version:"current"},l=[],d={toc:l};function s(e){var n=e.components,t=Object(c.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"//dispatch_once_t \u5c31\u662flong\ntypedef intptr_t dispatch_once_t;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'void\ndispatch_once(dispatch_once_t *predicate,\n        DISPATCH_NOESCAPE dispatch_block_t block);\n#define dispatch_once _dispatch_once\n\n//\u5b9e\u9645\u8c03\u7528\nvoid\n_dispatch_once(dispatch_once_t *predicate,\n        DISPATCH_NOESCAPE dispatch_block_t block)\n{\n  //DISPATCH_EXPECT(*predicate, ~0l) \u5c31\u662f *predicate \u7b2c\u4e00\u6b21\u8fdb\u5165\u5c31\u662f0l\n    if (DISPATCH_EXPECT(*predicate, ~0l) != ~0l) {\n        dispatch_once(predicate, block);\n    } else {\n        dispatch_compiler_barrier();\n    }\n    DISPATCH_COMPILER_CAN_ASSUME(*predicate == ~0l);\n}\n\n#if __GNUC__\n#define DISPATCH_EXPECT(x, v) __builtin_expect((x), (v))\n#define dispatch_compiler_barrier()  __asm__ __volatile__("" ::: "memory")\n#else\n#define DISPATCH_EXPECT(x, v) (x)\n#define dispatch_compiler_barrier()  do { } while (0)\n#endif\n\n/***********/\nvoid\ndispatch_once(dispatch_once_t *val, dispatch_block_t block)\n{\n  /**\n  _dispatch_Block_invoke(block)\n  \u7b49\u4ef7\u4e8e\uff1a\n  ((struct Block_layout *)bb) = block;\n  ((dispatch_function_t)bb->invoke)\n  \n  dispatch_function_t \u5c31\u662f void *  \u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u6307\u9488\uff01\n  */\n    dispatch_once_f(val, block, _dispatch_Block_invoke(block));\n}\n\n#define _dispatch_Block_invoke(bb) \\\n        ((dispatch_function_t)((struct Block_layout *)bb)->invoke)\n\nstruct Block_layout {\n    void *isa;\n    volatile int32_t flags; // contains ref count\n    int32_t reserved; \n    void (*invoke)(void *, ...);\n    struct Block_descriptor_1 *descriptor;\n    // imported variables\n};\ntypedef void (*dispatch_function_t)(void *_Nullable);\n')))}s.isMDXComponent=!0},331:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),d=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},u=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||_[u]||o;return t?c.a.createElement(f,a(a({ref:n},l),{},{components:t})):c.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);