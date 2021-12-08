(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(331)),c=["components"],s={},i={unversionedId:"\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH",id:"\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH",isDocsHomePage:!1,title:"SSH",description:"SSH",source:"@site/docs/\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH.md",slug:"/\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH",permalink:"/docs/\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH",editUrl:"dys-typora-open://mine/survival/docs/\u5de5\u5177/\u547d\u4ee4\u884c\u5de5\u5177/SSH.md",version:"current"},p=[{value:"\u751f\u6210ssh\u516c\u79c1\u94a5\u5bf9",id:"\u751f\u6210ssh\u516c\u79c1\u94a5\u5bf9",children:[]},{value:"git ssh \u914d\u7f6e",id:"git-ssh-\u914d\u7f6e",children:[]},{value:"\u670d\u52a1\u5668\u767b\u5f55",id:"\u670d\u52a1\u5668\u767b\u5f55",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ssh"},"SSH"),Object(a.b)("h2",{id:"\u751f\u6210ssh\u516c\u79c1\u94a5\u5bf9"},"\u751f\u6210ssh\u516c\u79c1\u94a5\u5bf9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh-keygen -t rsa\n")),Object(a.b)("p",null,"\u4e00\u8defenter\u4e0b\u53bb\u751f\u6210\u5373\u53ef"),Object(a.b)("p",null,"\u62ff\u5230\u516c\u94a5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cat ~/.ssh/id_rsa.pub\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"\u279c  .ssh cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC7ome3+b/6ZMByAPiPl9OatwtQnE4YB7C0x4v97qMKy8y0r+melLkYtctZoP+i1oMBStoI401X8ORB4SmsPnTurYKVsFG6aWf0mKan2QPK4EzYWZ1J/HzPzOSSwEyrvVpUbLOFhjqbToaqrLR5yn6WD6B9yDFRG/2Ux3XjD/Ff90/Pxeo4zB4GSkpg5/0BGpgY2VDNUSrqSRSshiPrHnjxEzRaGzRisLAbXZyWb68gSVCk6VTwt9PpjWZcp6TOz5ruaZI+j5MvA18tqEdv1aOeSWxReHTsH1+NUcuiYJBm0ERHwocgIy4qSJugTOOrFpSe/leGX/r3U+CXz49x9mFCmNgOl1c5P0Fk8BgsbY3XQH9b2zcXR0Y7uOnbJcqbiPIhJ+O9B5ippSCtab1bU7xmwbCnqOn1JgqH3X1XYQe7Hz887cGPfpG1YidAkEEzg3sNP/UA6bn+lQHiv4YgwWoAcRZpRh6woW/VQkOqIBLpk0opKn3BFLli0Wge7eCUB98= dys@dys-ubuntu-desktop\n")),Object(a.b)("h2",{id:"git-ssh-\u914d\u7f6e"},"git ssh \u914d\u7f6e"),Object(a.b)("p",null,"\u7c98\u8d34\u54cd\u5e94\u7ed3\u679c\u5230\u5bf9\u5e94\u7f51\u7ad9\u8bbe\u7f6e\u5373\u53ef\u3002"),Object(a.b)("h2",{id:"\u670d\u52a1\u5668\u767b\u5f55"},"\u670d\u52a1\u5668\u767b\u5f55"),Object(a.b)("p",null,"\u914d\u7f6e\u514d\u5bc6\u767b\u5f55"),Object(a.b)("p",null,"Ubuntu\u4e0aSSH\u514d\u5bc6\u767b\u5f55:",Object(a.b)("a",{parentName:"p",href:"https://www.jianshu.com/p/7c86ee080e18"},"https://www.jianshu.com/p/7c86ee080e18")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5c06\u516c\u94a5\u590d\u5236\u5230\u670d\u52a1\u5668")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ruby"},"sudo vim ~/.ssh/authorized_keys\n#\u5982\u679c\u6ca1\u6709\u6743\u9650\u5219chmod 600 ~/.ssh/authorized_keys\n")),Object(a.b)("p",null,"\u4f7f\u7528vim\u7f16\u8f91\u5668\u6253\u5f00.ssh\u76ee\u5f55\u4e0b\u7684",Object(a.b)("inlineCode",{parentName:"p"},"authorized_keys"),"\uff0c\u5e76\u4e14\u5c06\u672c\u5730\u7684",Object(a.b)("strong",{parentName:"p"},"id_rsa.pub"),"\u5185\u5bb9\u590d\u5236\u8fdb\u53bb\uff0c\u5982\u6709\u591a\u4e2a\u516c\u94a5\u5219\u6362\u884c\u5373\u53ef\uff0c\u5e76\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"wq"),"\u547d\u4ee4\u4fdd\u5b58\u9000\u51fa\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ssh-copy-id")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'\u279c  ~ ssh-copy-id root@192.168.253.175\n/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/Users/dingyusong/.ssh/id_rsa.pub"\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\nroot@192.168.253.175\'s password:\n\nNumber of key(s) added:        1\n\nNow try logging into the machine, with:   "ssh \'root@192.168.253.175\'"\nand check to make sure that only the key(s) you wanted were added.\n\n\u279c  ~ ssh root@192.168.253.175\n')))}b.isMDXComponent=!0},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,O=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return n?o.a.createElement(O,s(s({ref:t},p),{},{components:n})):o.a.createElement(O,s({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);