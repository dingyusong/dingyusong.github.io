(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return o})),r.d(a,"metadata",(function(){return g})),r.d(a,"toc",(function(){return s})),r.d(a,"default",(function(){return p}));var t=r(3),i=r(7),n=(r(0),r(330)),c=["components"],o={},g={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages",id:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages",isDocsHomePage:!1,title:"cmake-packages",description:"cmake-packages",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/1-\u6784\u5efa/CMake/cmake-packages.md",version:"current"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Using Packages",id:"using-packages",children:[{value:"Config-file Packages",id:"config-file-packages",children:[]},{value:"Find-module Packages",id:"find-module-packages",children:[]}]},{value:"Package Layout",id:"package-layout",children:[{value:"Package Configuration File",id:"package-configuration-file",children:[]},{value:"Package Version File",id:"package-version-file",children:[]}]},{value:"Creating Packages",id:"creating-packages",children:[{value:"Creating a Package Configuration File",id:"creating-a-package-configuration-file",children:[]},{value:"Creating Relocatable Packages",id:"creating-relocatable-packages",children:[]}]},{value:"Package Registry",id:"package-registry",children:[{value:"User Package Registry",id:"user-package-registry",children:[]},{value:"System Package Registry",id:"system-package-registry",children:[]},{value:"Disabling the Package Registry",id:"disabling-the-package-registry",children:[]},{value:"Package Registry Example",id:"package-registry-example",children:[]},{value:"Package Registry Ownership",id:"package-registry-ownership",children:[]}]}],l={toc:s};function p(e){var a=e.components,r=Object(i.a)(e,c);return Object(n.b)("wrapper",Object(t.a)({},l,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"cmake-packages"},"cmake-packages"),Object(n.b)("p",null,"[toc]"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Packages provide dependency information to CMake based buildsystems. Packages are found with the find_package() command. The result of using find_package() is either a set of IMPORTED targets, or a set of variables corresponding to build-relevant information."),Object(n.b)("h2",{id:"using-packages"},"Using Packages"),Object(n.b)("h3",{id:"config-file-packages"},"Config-file Packages"),Object(n.b)("h3",{id:"find-module-packages"},"Find-module Packages"),Object(n.b)("h2",{id:"package-layout"},"Package Layout"),Object(n.b)("h3",{id:"package-configuration-file"},"Package Configuration File"),Object(n.b)("h3",{id:"package-version-file"},"Package Version File"),Object(n.b)("h2",{id:"creating-packages"},"Creating Packages"),Object(n.b)("h3",{id:"creating-a-package-configuration-file"},"Creating a Package Configuration File"),Object(n.b)("h4",{id:"creating-a-package-configuration-file-for-the-build-tree"},"Creating a Package Configuration File for the Build Tree"),Object(n.b)("h3",{id:"creating-relocatable-packages"},"Creating Relocatable Packages"),Object(n.b)("h2",{id:"package-registry"},"Package Registry"),Object(n.b)("h3",{id:"user-package-registry"},"User Package Registry"),Object(n.b)("h3",{id:"system-package-registry"},"System Package Registry"),Object(n.b)("h3",{id:"disabling-the-package-registry"},"Disabling the Package Registry"),Object(n.b)("h3",{id:"package-registry-example"},"Package Registry Example"),Object(n.b)("h3",{id:"package-registry-ownership"},"Package Registry Ownership"))}p.isMDXComponent=!0},330:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return k}));var t=r(0),i=r.n(t);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function c(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?c(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function g(e,a){if(null==e)return{};var r,t,i=function(e,a){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var a=i.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=l(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,c=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),p=l(r),d=t,k=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return r?i.a.createElement(k,o(o({ref:a},s),{},{components:r})):i.a.createElement(k,o({ref:a},s))}));function k(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,c=new Array(n);c[0]=d;var o={};for(var g in a)hasOwnProperty.call(a,g)&&(o[g]=a[g]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var s=2;s<n;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);