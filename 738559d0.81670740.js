(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(7),l=(r(0),r(328)),b=["components"],c={},p={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16",id:"\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16",isDocsHomePage:!1,title:"arm\u6c47\u7f16",description:"ARM\u6c47\u7f16",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16.md",slug:"/\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u8bed\u8a00/\u6c47\u7f16/arm\u6c47\u7f16.md",version:"current"},i=[{value:"iOS\u6c47\u7f16",id:"ios\u6c47\u7f16",children:[]},{value:"\u751f\u6210\u6c47\u7f16",id:"\u751f\u6210\u6c47\u7f16",children:[]},{value:"\u5bc4\u5b58\u5668",id:"\u5bc4\u5b58\u5668",children:[]},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",children:[]},{value:"\u51fd\u6570\u5806\u6808",id:"\u51fd\u6570\u5806\u6808",children:[]},{value:"RTFM",id:"rtfm",children:[]}],u={toc:i};function o(e){var t=e.components,r=Object(n.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"arm\u6c47\u7f16"},"ARM\u6c47\u7f16"),Object(l.b)("p",null,"\u627e\u4e00\u4efd\u6c47\u7f16\u548c\u673a\u5668\u7801\u5bf9\u5e94\u7684manual\u3002"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"http://jyywiki.cn/ICS/2020/slides/7.slides#/3/1"},"\u5bc4\u5b58\u5668 (1)\uff1a\u7ee7\u627f\u81ea IA32")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.cs.cmu.edu/~fp/courses/15213-s07/misc/asm64-handout.pdf"},"x86-64 Machine-Level Programming")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.csdn.net/bytxl/article/details/49883103"},"https://blog.csdn.net/bytxl/article/details/49883103"))),Object(l.b)("p",null,"ARM\u67b6\u6784\u7248\u672c\u4eceARMv3\u5230ARMv7\u652f\u630132\u4f4d\u7a7a\u95f4\u548c32\u4f4d\u7b97\u6570\u8fd0\u7b97\uff0c\u5927\u90e8\u5206\u67b6\u6784\u7684\u6307\u4ee4\u4e3a\u5b9a\u957f32\u4f4d\uff08Thumb\u6307\u4ee4\u96c6\u652f\u6301\u53d8\u957f\u7684\u6307\u4ee4\u96c6\uff0c\u63d0\u4f9b\u5bf932\u4f4d\u548c16\u4f4d\u6307\u4ee4\u96c6\u7684\u652f\u6301\uff09\uff0c\u800c2011\u5e74\u53d1\u5e03\u7684ARMv8-A\u67b6\u6784\u6dfb\u52a0\u4e86\u5bf964\u4f4d\u7a7a\u95f4\u548c64\u4f4d\u7b97\u672f\u8fd0\u7b97\u7684\u652f\u6301\uff0c\u540c\u65f6\u4e5f\u66f4\u65b0\u4e8632\u4f4d\u5b9a\u957f\u6307\u4ee4\u96c6\u3002"),Object(l.b)("p",null,"2011\u5e7411\u6708\uff0cARM\u516c\u53f8\u53d1\u5e03\u4e86\u65b0\u4e00\u4ee3\u5904\u7406\u5668\u67b6\u6784",Object(l.b)("strong",{parentName:"p"},"ARMv8"),"\u7684\u90e8\u5206\u6280\u672f\u7ec6\u8282\u3002\u8fd9\u662fARM\u516c\u53f8\u7684",Object(l.b)("strong",{parentName:"p"},"\u9996\u6b3e\u652f\u630164\u4f4d"),"\u6307\u4ee4\u96c6\u7684\u5904\u7406\u5668\u67b6\u6784\u3002"),Object(l.b)("p",null,"ARM\u67b6\u6784\uff0c\u8fc7\u53bb\u79f0\u4f5c\u9ad8\u7ea7\u7cbe\u7b80\u6307\u4ee4\u96c6\u673a\u5668\uff08\u82f1\u8bed\uff1aAdvanced RISC Machine\uff0c\u66f4\u65e9\u79f0\u4f5c\u827e\u5eb7\u7cbe\u7b80\u6307\u4ee4\u96c6\u673a\u5668\uff0cAcorn RISC Machine\uff09\uff0c\u662f\u4e00\u4e2a\u7cbe\u7b80\u6307\u4ee4\u96c6\uff08RISC\uff09\u5904\u7406\u5668\u67b6\u6784\u5bb6\u65cf\uff0c\u5176\u5e7f\u6cdb\u5730\u4f7f\u7528\u5728\u8bb8\u591a\u5d4c\u5165\u5f0f\u7cfb\u7edf\u8bbe\u8ba1\u3002"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/ARM%E6%9E%B6%E6%A7%8B"},"ARM\u67b6\u6784")),Object(l.b)("p",null,"\u4e0b\u9762\u6211\u4eec\u4ee5 \u4e09\u661f\u7684Exynos\uff08\u730e\u6237\u5ea7\uff09 4412 SCP\u4e3a\u4f8b\uff0c\u6765\u8bb2\u89e3\u8fd9\u51e0\u4e2a\u6982\u5ff5\u3002"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u4e09\u661f\u7684Exynos 4412 SCP \u662f\u4e00\u6b3e\u57fa\u4e8eCortex-A9\u7684SOC\uff1b"),Object(l.b)("li",{parentName:"ol"},"\u5982\u4e0b\u56fe\u6240\u793a\uff0cExynos 4412\u5305\u542b\u4e864\u4e2aCortex-A9\u7684\u5904\u7406\u5668\uff08\u6838\uff09\uff1b"),Object(l.b)("li",{parentName:"ol"},"Cortex-A9\u662f\u57fa\u4e8eARMv7-A\u67b6\u6784\uff08\u6307\u4ee4\u96c6\uff09\u7684\u3002")),Object(l.b)("p",null,"\u4e0b\u9762\u6211\u4eec\u603b\u7ed3\u4e0b\u8fd9\u4e9b\u6982\u5ff5\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"ARM\u516c\u53f8\u7684\u540d\u5b57\uff0c\u53ebARM\uff1aAdvanced RISC Machines\uff1b"),Object(l.b)("li",{parentName:"ol"},"ARM\u524d\u8eabAcorn\u516c\u53f8\u8bbe\u8ba1\u7684\u7b2c\u4e00\u6b3e\u5fae\u5904\u7406\u5668\uff0c\u53ebARM\uff1aAcorn RISC Machine\uff1b"),Object(l.b)("li",{parentName:"ol"},"ARM\u5904\u7406\u5668\u540d\u5b57\uff1a\n\u4ee5\u524d\u53ebARM9\u3001ARM11,\n\u65b0\u7684\u547d\u540d\u89c4\u5219\u6539\u4ee5Cortex\u547d\u540d\uff0c\u5206\u522b\u662fCortex-A\uff0cCortex-R\uff0cCortex-M\uff1b\n\u8fd9\u4e09\u4e2a\u5b57\u6bcd",Object(l.b)("strong",{parentName:"li"},"A\u3001R\u3001M"),"\u5408\u5230\u4e00\u8d77\u53c8\u662fARM\u3002"),Object(l.b)("li",{parentName:"ol"},"ARM\u6307\u4ee4\u96c6\uff0c\u5c31\u662fARM\u67b6\u6784\uff0c\u6bd4\u5982ARMv8\uff0c\u6bcf\u4e2a\u5904\u7406\u5668\u90fd\u9700\u8981\u4f9d\u8d56\u4e00\u5b9a\u7684ARM\u67b6\u6784\u6765\u8bbe\u8ba1\uff1b"),Object(l.b)("li",{parentName:"ol"},"SOC\uff1a\u5404\u5927\u5382\u5546\u4e70\u6765ARM\u7684\u6388\u6743\uff0c\u5f97\u5230ARM\u5904\u7406\u5668\u7684\u6e90\u4ee3\u7801\uff0c\u800c\u540e\u81ea\u5df1\u641e\u4e00\u4e9b\u5916\u56f4\u8bbe\u5907\u7684IP\uff08\u6216\u8005\u4e70\u6216\u8005\u81ea\u5df1\u8bbe\u8ba1\uff09\uff0c\u7ec4\u6210\u4e00\u4e2aSOC\uff0c\u6bd4\u5982\u4e09\u661f\u7684Exynos 4412\uff0c\u534e\u4e3a\u7684\u9e92\u9e9f990\u3002")),Object(l.b)("h2",{id:"ios\u6c47\u7f16"},"iOS\u6c47\u7f16"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u771f\u673a\uff1aarm64\u6c47\u7f16"),Object(l.b)("li",{parentName:"ul"},"\u6a21\u62df\u5668\uff1ax86-64\u6c47\u7f16")),Object(l.b)("h2",{id:"\u751f\u6210\u6c47\u7f16"},"\u751f\u6210\u6c47\u7f16"),Object(l.b)("h2",{id:"\u5bc4\u5b58\u5668"},"\u5bc4\u5b58\u5668"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u901a\u7528\u5bc4\u5b58\u5668"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"64\u4f4d\uff1ax0~x28"),Object(l.b)("li",{parentName:"ul"},"32\u4f4d\uff1aw0~w28(x0~x28\u7684\u4f4e32\u4f4d)"),Object(l.b)("li",{parentName:"ul"},"x0-x7 \u901a\u5e38\u7528\u6765\u5b58\u653e\u51fd\u6570\u53c2\u6570\uff0c\u66f4\u591a\u7684\u53c2\u6570\u7528\u5806\u6808\u6765\u4f20\u9012"),Object(l.b)("li",{parentName:"ul"},"x0 \u901a\u5e38\u7528\u6765\u5b58\u653e\u8fd4\u56de\u503c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7a0b\u5e8f\u8ba1\u6570\u5668"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pc(program count) "),Object(l.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u7740cpu\u5f53\u524d\u6267\u884c\u7684\u662f\u54ea\u4e00\u6761\u6307\u4ee4"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7740cpu\u6b63\u5728\u6267\u884c\u7684\u6307\u4ee4\u7684\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e8086\u6c47\u7f16\u7684ip\u5bc4\u5b58\u5668"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5806\u6808\u6307\u9488"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sp(stack pointer)"),Object(l.b)("li",{parentName:"ul"},"fp(frame pointer) \u4e5f\u5c31\u662fx29"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u94fe\u63a5\u5bc4\u5b58\u5668"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"lr(link regisger),\u4e5f\u5c31\u662fx30"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7740\u51fd\u6570\u7684\u8fd4\u56de\u5730\u5740"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u7a0b\u5e8f\u72b6\u6001\u5bc4\u5b58\u5668"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cprs\uff08current program register status\uff09"),Object(l.b)("li",{parentName:"ul"},"sprs\uff08saved program register status\uff09\u5f02\u5e38\u72b6\u6001\u4e0b\u4f7f\u7528")))),Object(l.b)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),Object(l.b)("p",null,"\u8bbf\u95ee\u4fe1\u606f\uff08load and store\uff09"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"load",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ldr\uff0cldur"))),Object(l.b)("li",{parentName:"ul"},"store")),Object(l.b)("p",null,"\u7b97\u672f\u548c\u903b\u8f91\u64cd\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"- add\n- sub\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cmp",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"- \u5c06\u4e24\u4e2a\u5bc4\u5b58\u5668\u76f8\u51cf\n- \u76f8\u51cf\u7684\u7ed3\u679c\u5370\u8c61cpsr\u5bc4\u5b58\u5668\u6807\u5fd7\u4f4d\n")))),Object(l.b)("p",null,"\u63a7\u5236"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8df3\u8f6c\u6307\u4ee4"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5e26\u6761\u4ef6\u8df3\u8f6c\uff0c\u4e00\u822c\u8ddfcmp\u914d\u5408\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"bl",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e26\u8fd4\u56de\u7684\u8df3\u8f6c\u6307\u4ee4"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u7684\u64cd\u4f5c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c06\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740\u653e\u5230lr(x30)\u4e2d"),Object(l.b)("li",{parentName:"ul"},"\u8df3\u8f6c\u5230\u6807\u8bb0\u5904\u5f00\u59cb\u6267\u884c\u4ee3\u7801"))))),Object(l.b)("li",{parentName:"ul"},"\u6761\u4ef6\u57df",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"EQ"),Object(l.b)("li",{parentName:"ul"},"NE"),Object(l.b)("li",{parentName:"ul"},"GT"),Object(l.b)("li",{parentName:"ul"},"GE"),Object(l.b)("li",{parentName:"ul"},"LT"),Object(l.b)("li",{parentName:"ul"},"LE")))),Object(l.b)("p",null,"\u8fc7\u7a0b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bl"),Object(l.b)("li",{parentName:"ul"},"ret")),Object(l.b)("h2",{id:"\u51fd\u6570\u5806\u6808"},"\u51fd\u6570\u5806\u6808"),Object(l.b)("p",null,"\u51fd\u6570\u7684\u7c7b\u578b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53f6\u5b50\u51fd\u6570"),Object(l.b)("li",{parentName:"ul"},"\u975e\u53f6\u5b50\u51fd\u6570")),Object(l.b)("h2",{id:"rtfm"},"RTFM"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://developer.arm.com/architectures/instruction-sets"},"https://developer.arm.com/architectures/instruction-sets"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://developer.arm.com/architectures/instruction-sets/base-isas/a64"},"https://developer.arm.com/architectures/instruction-sets/base-isas/a64"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://developer.arm.com/architectures/cpu-architecture/a-profile/docs"},"https://developer.arm.com/architectures/cpu-architecture/a-profile/docs"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://www.cnblogs.com/yikoulinux/p/13824324.html"},"\u5230\u5e95\u4ec0\u4e48\u662fCortex\u3001ARMv8\u3001arm\u67b6\u6784\u3001ARM\u6307\u4ee4\u96c6\u3001soc\uff1f\u4e00\u6587\u5e2e\u4f60\u68b3\u7406\u57fa\u7840\u6982\u5ff5\u3010\u79d1\u666e\u3011"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/ARM%E6%9E%B6%E6%A7%8B"},"https://zh.wikipedia.org/wiki/ARM%E6%9E%B6%E6%A7%8B")))))}o.isMDXComponent=!0},328:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},o=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),o=u(r),O=a,j=o["".concat(b,".").concat(O)]||o[O]||m[O]||l;return r?n.a.createElement(j,c(c({ref:t},i),{},{components:r})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);