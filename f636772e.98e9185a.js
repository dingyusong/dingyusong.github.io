(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var c=n(3),r=n(7),b=(n(0),n(356)),l=["components"],p={},a={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC",id:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC",isDocsHomePage:!1,title:"GCC",description:"GCC",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/\u7f16\u8bd1\u5668/GCC.md",version:"current"},o=[{value:"1.\u7f16\u8bd1\u8fc7\u7a0b",id:"1\u7f16\u8bd1\u8fc7\u7a0b",children:[]},{value:"2.\u8c03\u8bd5",id:"2\u8c03\u8bd5",children:[]},{value:"3.\u4f18\u5316\u7f16\u8bd1",id:"3\u4f18\u5316\u7f16\u8bd1",children:[]},{value:"4.\u68c0\u9519",id:"4\u68c0\u9519",children:[]},{value:"5.\u5e93\u6587\u4ef6",id:"5\u5e93\u6587\u4ef6",children:[{value:"\u7f16\u8bd1\u52a8\u6001\u5e93",id:"\u7f16\u8bd1\u52a8\u6001\u5e93",children:[]},{value:"\u7f16\u8bd1\u9759\u6001\u5e93",id:"\u7f16\u8bd1\u9759\u6001\u5e93",children:[]}]},{value:"6.\u5b8f",id:"6\u5b8f",children:[]},{value:"7.\u5934\u6587\u4ef6\u4f9d\u8d56",id:"7\u5934\u6587\u4ef6\u4f9d\u8d56",children:[]},{value:"RTFM",id:"rtfm",children:[]}],i={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"gcc"},"GCC"),Object(b.b)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u6e90\u6587\u4ef6\u53ef\u4ee5\u76f4\u63a5\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc test.c\n")),Object(b.b)("p",null,"\u9ed8\u8ba4\u751f\u6210a.out, -o\u6307\u5b9a\u751f\u6210\u7684\u6587\u4ef6\u540d"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc test.c  -o test\n")),Object(b.b)("p",null,"\u5b9e\u8d28\u4e0a\uff0c\u4e0a\u8ff0\u7f16\u8bd1\u8fc7\u7a0b\u662f\u5206\u4e3a\u56db\u4e2a\u9636\u6bb5\u8fdb\u884c\u7684\uff0c\u5305\u62ec\u9884\u5904\u7406(Preprocessing)\u3001\u7f16\u8bd1(Compilation)\u3001\u6c47\u7f16 (Assembly)\u548c\u94fe\u63a5(Linking)\u3002"),Object(b.b)("h2",{id:"1\u7f16\u8bd1\u8fc7\u7a0b"},"1.\u7f16\u8bd1\u8fc7\u7a0b"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1.1\u9884\u5904\u7406")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -E test.c -o test.i\n")),Object(b.b)("p",null,"-E\u6307\u5b9agcc\u9884\u5904\u7406\u7ed3\u675f\u5c31\u505c\u4e0b\u6765\uff0c\u4e3b\u8981\u5b8c\u6210\u5305\u542b\u5934\u6587\u4ef6\u3001\u53bb\u9664\u6ce8\u91ca\u3001\u66ff\u6362\u5b8f\u7b49\u5de5\u4f5c"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1.2\u7f16\u8bd1")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -S test.i -o test.s\n")),Object(b.b)("p",null,"-S\u5c06\u6e90\u6587\u4ef6\u7f16\u8bd1\u6210\u6c47\u7f16\u4ee3\u7801"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1.3\u6c47\u7f16")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -c test.s -o test.o\n")),Object(b.b)("p",null,"gas\u6c47\u7f16\u5668\u8d1f\u8d23\u5c06\u6c47\u7f16\u4ee3\u7801\u7f16\u8bd1\u4e3a\u673a\u5668\u4ee3\u7801"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"1.4\u94fe\u63a5")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc test.o \u2013o test\n")),Object(b.b)("h2",{id:"2\u8c03\u8bd5"},"2.\u8c03\u8bd5"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -g test.c \u2013o test\n")),Object(b.b)("p",null,"-g\u751f\u4ea7\u4f9bgdb\u8c03\u8bd5\u7528\u7684debug\u4fe1\u606f\uff0c\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5927\uff0c\u6267\u884c\u6548\u7387\u4f4e"),Object(b.b)("p",null,"strip\u53ef\u4ee5\u5220\u9664\u5176\u4e2d\u7684debug\u4fe1\u606f"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"strip test\n")),Object(b.b)("h2",{id:"3\u4f18\u5316\u7f16\u8bd1"},"3.\u4f18\u5316\u7f16\u8bd1"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -O test.c -o test\n")),Object(b.b)("p",null,"-O\u4f7f\u7f16\u8bd1\u5668\u5bf9\u4ee3\u7801\u8fdb\u884c\u81ea\u52a8\u4f18\u5316\u7f16\u8bd1\uff0c\u751f\u4ea7\u6548\u7387\u66f4\u9ad8\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u53e6\u5916"),Object(b.b)("p",null,"-O0  \u4e0d\u4f18\u5316"),Object(b.b)("p",null,"-O|-O1\uff0c \u9ed8\u8ba4\u4f18\u5316"),Object(b.b)("p",null,"-O2 -O3 \u66f4\u9ad8\u7ea7\u522b\u4f18\u5316"),Object(b.b)("h2",{id:"4\u68c0\u9519"},"4.\u68c0\u9519"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc -Wall test.c \u2013o  test\n")),Object(b.b)("p",null,"-Wall\uff0c\u5c06\u6240\u6709\u7684\u8b66\u544a\u4fe1\u606f\u5168\u5f00"),Object(b.b)("h2",{id:"5\u5e93\u6587\u4ef6"},"5.\u5e93\u6587\u4ef6"),Object(b.b)("h3",{id:"\u7f16\u8bd1\u52a8\u6001\u5e93"},"\u7f16\u8bd1\u52a8\u6001\u5e93"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc \u2013shared \u2013fPIC  test.o \u2013o libtest.so\n")),Object(b.b)("p",null,"-shared \u8868\u793a\u751f\u4ea7\u52a8\u6001\u94fe\u63a5\u5e93"),Object(b.b)("p",null,"-f\u540e\u9762\u8ddf\u4e00\u4e9b\u7f16\u8bd1\u9009\u9879\uff0cPIC\u8868\u793a\u751f\u4ea7\u4f4d\u7f6e\u65e0\u5173\u4ee3\u7801\uff08Position Independent Code\uff09\uff0c\u5373\u53ef\u4ee5\u5728\u8fdb\u7a0b\u7684\u4efb\u610f\u5185\u5b58\u4f4d\u7f6e\u6267\u884c\u7684\u76ee\u6807\u7801"),Object(b.b)("h3",{id:"\u7f16\u8bd1\u9759\u6001\u5e93"},"\u7f16\u8bd1\u9759\u6001\u5e93"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"ar cr libtest.a test.o\n")),Object(b.b)("p",null,"-c\u8868\u793a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5e93\uff0c-r\u8868\u793a\u63d2\u5165\u6587\u4ef6\u53f7\u7801\u5230\u5e93\u4e2d"),Object(b.b)("p",null,"\u94fe\u63a5\u5e93\u6587\u4ef6"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"gcc test.c -L/path/lib -lxxx -I/path/include\n")),Object(b.b)("p",null,"-I, \u6307\u5b9a\u5934\u6587\u4ef6\u6240\u5728\u7684\u6587\u4ef6\u5939"),Object(b.b)("p",null,"-l, \u6307\u5b9a\u6240\u4f7f\u7528\u5230\u7684\u51fd\u6570\u5e93\u3002\u9ed8\u8ba4\u4f18\u5148\u4f7f\u7528\u52a8\u6001\u5e93libxxx.so\uff0c-static\u9009\u9879\u53ef\u4ee5\u7981\u6b62\u4f7f\u7528\u52a8\u6001\u5e93"),Object(b.b)("p",null,"-L\uff0c\u6307\u5b9a\u51fd\u6570\u5e93\u6240\u5728\u7684\u6587\u4ef6\u5939"),Object(b.b)("p",null,"(\u6307\u5b9a\u5927L\uff0c\u662f\u8981\u77e5\u9053\u53bb\u54ea\u91cc\u627e\u90a3\u4e2a\u5e93\uff0c\u6307\u5b9a\u5c0fl\u662f\u786e\u5b9a\u8981\u94fe\u63a5\u54ea\u4e2a\u5e93\uff0c\u6307\u5b9aI\u662f\u4e3a\u4e86\u6307\u660e\u4ece\u54ea\u91cc\u627e\u5230\u5934\u6587\u4ef6\uff0c\u65b9\u4fbf\u5728\u9884\u7f16\u8bd1\u7684\u65f6\u5019\u5bfc\u5165)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u52a8\u6001\u5e93\u94fe\u63a5\u65f6\u641c\u7d22\u8def\u5f84\u987a\u5e8f:")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u7f16\u8bd1\u76ee\u6807\u4ee3\u7801\u65f6-L\u6307\u5b9a\u7684\u52a8\u6001\u5e93\u641c\u7d22\u8def\u5f84")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u73af\u5883\u53d8\u91cfLD_LIBRARY_PATH\uff08\u52a8\u6001\u5e93\u641c\u7d22\u8def\u5f84\uff09")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6/etc/ld.so.conf\u4e2d\u6307\u5b9a\u7684\u52a8\u6001\u5e93\u641c\u7d22\u8def\u5f84")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684\u52a8\u6001\u5e93\u641c\u7d22\u8def\u5f84/lib\u3001/usr/lib"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u9759\u6001\u5e93\u94fe\u63a5\u65f6\u641c\u7d22\u8def\u5f84\u987a\u5e8f\uff1a")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u53c2\u6570-L\u6307\u5b9a\u8def\u5f84")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u73af\u5883\u53d8\u91cfLIBRARY_PATH(\u6307\u5b9a\u7a0b\u5e8f\u9759\u6001\u94fe\u63a5\u5e93\u6587\u4ef6\u641c\u7d22\u8def\u5f84)")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u9ed8\u8ba4\u76ee\u5f55 /lib \u3001/usr/lib\u3001 /usr/local/lib"))),Object(b.b)("h2",{id:"6\u5b8f"},"6.\u5b8f"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"-Dmacro\n")),Object(b.b)("p",null,"\u76f8\u5f53\u4e8e#define macro"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"-Dmacro=defn\n")),Object(b.b)("p",null,"\u76f8\u5f53\u4e8e#define macro=defn"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"-Umacro\n")),Object(b.b)("p",null,"\u76f8\u5f53\u4e8e#undef macro"),Object(b.b)("h2",{id:"7\u5934\u6587\u4ef6\u4f9d\u8d56"},"7.\u5934\u6587\u4ef6\u4f9d\u8d56"),Object(b.b)("p",null,"-M\uff0c\u751f\u6210\u6587\u4ef6\u5173\u8054\u7684\u4fe1\u606f\uff0c\u5305\u542b\u76ee\u6807\u6587\u4ef6\u6240\u4f9d\u8d56\u7684\u6240\u6709\u5934\u6587\u4ef6"),Object(b.b)("p",null,"-MM\uff0c\u540c\u4e0a\uff0c\u4f46\u5ffd\u7565\u7531",Object(b.b)("inlineCode",{parentName:"p"},"#include<file>"),"\u9020\u6210\u7684\u4f9d\u8d56\u5173\u7cfb"),Object(b.b)("p",null,"-MD\uff0c\u548c-M\u76f8\u540c\uff0c\u4f46\u662f\u8f93\u51fa\u5c06\u5bfc\u5165\u5230.d\u7684\u6587\u4ef6\u91cc\u9762"),Object(b.b)("p",null,"-MMD\uff0c\u548c-MM\u76f8\u540c\uff0c\u4f46\u662f\u8f93\u51fa\u5c06\u5bfc\u5165\u5230.d\u7684\u6587\u4ef6\u91cc\u9762"),Object(b.b)("h2",{id:"rtfm"},"RTFM"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://gcc.gnu.org/"},"https://gcc.gnu.org/")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/"},"https://gcc.gnu.org/onlinedocs/")))}u.isMDXComponent=!0},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,l=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),u=i(n),j=c,d=u["".concat(l,".").concat(j)]||u[j]||O[j]||b;return n?r.a.createElement(d,p(p({ref:t},o),{},{components:n})):r.a.createElement(d,p({ref:t},o))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,l=new Array(b);l[0]=j;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:c,l[1]=p;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);