(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(356)),c=["components"],a={},s={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3",id:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3",isDocsHomePage:!1,title:"08-\u8d2a\u5fc3",description:"10-1 \u8d2a\u5fc3\u57fa\u7840",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/08-\u8d2a\u5fc3.md",version:"current"},u=[{value:"10-1 \u8d2a\u5fc3\u57fa\u7840",id:"10-1-\u8d2a\u5fc3\u57fa\u7840",children:[]},{value:"10-2 \u8d2a\u5fc3\u7b97\u6cd5\u4e0e\u52a8\u6001\u89c4\u5212\u7684\u5173\u7cfb Non-overlapping Intervals",id:"10-2-\u8d2a\u5fc3\u7b97\u6cd5\u4e0e\u52a8\u6001\u89c4\u5212\u7684\u5173\u7cfb-non-overlapping-intervals",children:[]},{value:"10-3 \u8d2a\u5fc3\u9009\u62e9\u6027\u8d28\u7684\u8bc1\u660e",id:"10-3-\u8d2a\u5fc3\u9009\u62e9\u6027\u8d28\u7684\u8bc1\u660e",children:[]}],l={toc:u};function p(e){var n=e.components,t=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"10-1-\u8d2a\u5fc3\u57fa\u7840"},"10-1 \u8d2a\u5fc3\u57fa\u7840"),Object(o.b)("h4",{id:"455-\u5206\u53d1\u997c\u5e72"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/assign-cookies/"},"455. \u5206\u53d1\u997c\u5e72")),Object(o.b)("p",null,"\u5c40\u90e8\u6700\u4f18\u89e3:\u5f53\u524d\u6700\u5927\u7684\u997c\u5e72\uff0c\u53bb\u5c1d\u8bd5\u6ee1\u8db3\u5f53\u524d\u6700\u5927\u7684\u5c0f\u670b\u53cb\u7684\u80c3\u53e3\uff0c\u5982\u679c\u6700\u5927\u7684\u997c\u5e72\u8fd8\u6ee1\u8db3\u4e0d\u4e86\u4ed6\uff0c\u90a3\u4e48\u4ed6\u5c31\u4e0d\u80fd\u88ab\u6ee1\u8db3\u4e86\uff0c\u5bfb\u627e\u4e0b\u4e00\u4f4d\u80c3\u53e3\u6b21\u5927\u7684\u5c0f\u670b\u53cb\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int findContentChildren(vector<int>& g, vector<int>& s) {\n\n        sort(g.begin(), g.end(), greater<int>());   //\u5bf9g\u8fdb\u884c\u6392\u5e8f \u80c3\u53e3\n        sort(s.begin(), s.end(), greater<int>());   //\u5bf9s\u8fdb\u884c\u6392\u5e8f \u997c\u5e72 \n\n        vector<int>::iterator g_i = g.begin();\n        vector<int>::iterator s_i = s.begin();\n\n        int count = 0;\n        while(g_i != g.end() && s_i != s.end()) {\n            while(*s_i < *g_i && g_i != g.end()) {\n                g_i++;\n            }\n            s_i++;   //\u6307\u5411\u4e0b\u4e00\u5757\u5f85\u5206\u914d\u7684\u997c\u5e72\n            if(g_i != g.end()) {                \n                g_i++;//\u6307\u5411\u4e0b\u4e00\u4e2a\u5f85\u5206\u914d\u7684\u5c0f\u670b\u53cb\n                count++;\n            }\n        }\n        return count;\n    }\n};\n")),Object(o.b)("h4",{id:"392-\u5224\u65ad\u5b50\u5e8f\u5217"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/is-subsequence/"},"392. \u5224\u65ad\u5b50\u5e8f\u5217")),Object(o.b)("p",null," \u4ece\u5269\u4e0b\u7684\u90e8\u5206\u627e\u5230\u5408\u9002\u7684\u89e3\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        int n_sub = s.size();\n        int n = t.size();\n        int index_sub = 0,index = 0;\n        while(index_sub < n_sub && index < n) {\n            while(s[index_sub] != t[index] && index < n) {\n                index++;\n            }\n            if(index == n) {\n                return false;\n            }\n            //\u8003\u5bdf\u4e0b\u4e00\u4e2a\u5b57\u7b26\n            index_sub++;\n            index++;\n        }\n        return index_sub == n_sub;\n    }\n};\n")),Object(o.b)("h3",{id:"10-2-\u8d2a\u5fc3\u7b97\u6cd5\u4e0e\u52a8\u6001\u89c4\u5212\u7684\u5173\u7cfb-non-overlapping-intervals"},"10-2 \u8d2a\u5fc3\u7b97\u6cd5\u4e0e\u52a8\u6001\u89c4\u5212\u7684\u5173\u7cfb Non-overlapping Intervals"),Object(o.b)("h3",{id:"10-3-\u8d2a\u5fc3\u9009\u62e9\u6027\u8d28\u7684\u8bc1\u660e"},"10-3 \u8d2a\u5fc3\u9009\u62e9\u6027\u8d28\u7684\u8bc1\u660e"))}p.isMDXComponent=!0},356:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?i.a.createElement(f,a(a({ref:n},u),{},{components:t})):i.a.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);