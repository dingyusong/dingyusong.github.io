(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return _})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),b=(n(0),n(328)),c=["components"],o={},_={unversionedId:"Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode",id:"Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode",isDocsHomePage:!1,title:"bitcode",description:"bitcode",source:"@site/docs/Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode.md",slug:"/Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode",permalink:"/docs/Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode",editUrl:"dys-typora-open://mine/survival/docs/Apple/\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03/bitcode.md",version:"current"},s=[],i={toc:s};function l(e){var t=e.components,o=Object(a.a)(e,c);return Object(b.b)("wrapper",Object(r.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"bitcode"},"bitcode"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210909174659068",src:n(971).default})),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210909174747899",src:n(972).default})),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210909174805882",src:n(973).default})),Object(b.b)("p",null,"Archive \u7684appstore\u7684\u5305\u53ea\u6709\u4e00\u4e2asection"),Object(b.b)("p",null,"Sections64\uff1a __LLVM"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210910092721366",src:n(974).default})),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"\u279c  binary lipo RZGMS -thin arm64 -output RZGMS_arm64\n\u279c  binary jtool2 --pages RZGMS_arm64 | grep LLVM \n0x38000-0x3c000 __LLVM  (16384 bytes)\n        0x38000-0x38001 __LLVM.__bundle (1 bytes)\n\u279c  binary jtool2 --pages bitcode-demo-release-fastlane-appstore-enable | grep LLVM \n0x62d8-0x1a2d8 __LLVM   (81920 bytes)\n        0x62d8-0x176aa __LLVM.__bundle  (70610 bytes)\n")),Object(b.b)("p",null,"\u4f7f\u7528build\u5bfc\u51fa\u7684framework"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"LLVM\u7684section\u662f\u7a7a\u7684\uff0c\u53ea\u6709\u4e00\u5b57\u8282")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"\u279c  bitcode_demo_framework.framework jtool2 --pages bitcode_demo_framework | grep LLVM\n0x10000-0x14000 __LLVM  (16384 bytes)\n        0x10000-0x10001 __LLVM.__bundle (1 bytes)\n")),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"\u88ab\u5176\u4ed6\u9879\u76ee\u4f9d\u8d56\u7684\u65f6\u5019\uff0c\u5982\u679c\u5176\u4ed6\u9879\u76ee\u5f00\u542fbitcode\u5219\u4e0d\u80fd\u652f\u6301\uff01")),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210910103241966",src:n(975).default})),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"\u279c  binary lipo RZGMS -thin arm64 -output RZGMS_arm64\n\u279c  binary jtool2 --pages RZGMS_arm64 | grep LLVM \n0x38000-0x3c000 __LLVM  (16384 bytes)\n        0x38000-0x38001 __LLVM.__bundle (1 bytes)\n\u279c  binary jtool2 --pages bitcode-demo-release-fastlane-appstore-enable | grep LLVM \n0x62d8-0x1a2d8 __LLVM   (81920 bytes)\n        0x62d8-0x176aa __LLVM.__bundle  (70610 bytes)\n\u279c  binary lipo RZPaas_iOS -thin arm64 -output Paas_arm64 \n\u279c  binary jtool2 --pages Paas_arm64  | grep LLVM 0x12f4000-0x63d4000 __LLVM      (84803584 bytes)\n        0x12f4000-0x63d0378 __LLVM.__bundle     (84788088 bytes)\n")),Object(b.b)("p",null,"xcodebuild \u6dfb\u52a0 ",Object(b.b)("inlineCode",{parentName:"p"},"BITCODE_GENERATION_MODE=bitcode "),"\u8fd9\u4e2a\u7f16\u8bd1\u9009\u9879\uff0c\u5c31\u53ef\u4ee5\u4e86"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'    xcodebuild BITCODE_GENERATION_MODE=bitcode -workspace "${workspace_name}" -scheme "RZGMS" ${no_debug} ONLY_ACTIVE_ARCH=NO -configuration \'Release\' -sdk iphoneos BUILD_DIR="${BUILD_DIR}" clean build\n    # build simulator\n    xcodebuild BITCODE_GENERATION_MODE=bitcode -workspace "${workspace_name}" -scheme "RZGMS" ${no_debug} ONLY_ACTIVE_ARCH=NO -configuration \'Release\' -sdk iphonesimulator BUILD_DIR="${BUILD_DIR}" clean build\n\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"0x38000-0x3c000 __LLVM  (16384 bytes)\n        0x38000-0x38001 __LLVM.__bundle (1 bytes)\n\u279c  binary jtool2 --pages RZGMS_arm64_bitcode  | grep LLVM \n0x38000-0x158000 __LLVM (1179648 bytes)\n        0x38000-0x157956 __LLVM.__bundle        (1177942 bytes)\n")),Object(b.b)("p",null,"xcode\u6253\u5305"),Object(b.b)("p",null,"-fembed-bitcode"),Object(b.b)("p",null,"RZGMS\u6dfb\u52a0bitcode\u540e\u6253\u51fa\u7684\u5305\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"\u279c  RZGMS.framework git:(develop) file RZGMS\nRZGMS: Mach-O universal binary with 2 architectures: [arm_v7:Mach-O dynamically linked shared library arm_v7] [arm64]\nRZGMS (for architecture armv7): Mach-O dynamically linked shared library arm_v7\nRZGMS (for architecture arm64): Mach-O 64-bit dynamically linked shared library arm64\n\u279c  RZGMS.framework git:(develop) lipo RZGMS -thin arm64 -output gms-arm64\n\u279c  RZGMS.framework git:(develop) jtool2 --pages gms-arm64\n0x0-0x2c000 __TEXT  (180224 bytes)\n    0x645c-0x25088 __TEXT.__text    (125996 bytes)\n    0x25088-0x25334 __TEXT.__stubs  (684 bytes)\n    0x25334-0x255f8 __TEXT.__stub_helper    (708 bytes)\n    0x255f8-0x25650 __TEXT.__const  (88 bytes)\n    0x25650-0x27078 __TEXT.__cstring    (6696 bytes)\n    0x27078-0x2a9fd __TEXT.__objc_methname  (14725 bytes)\n    0x2a9fd-0x2ad64 __TEXT.__objc_classname (871 bytes)\n    0x2ad64-0x2b484 __TEXT.__objc_methtype  (1824 bytes)\n    0x2b484-0x2b9e0 __TEXT.__gcc_except_tab (1372 bytes)\n    0x2b9e0-0x2b9f0 __TEXT.__ustring    (16 bytes)\n    0x2b9f0-0x2c000 __TEXT.__unwind_info    (1552 bytes)\n0x2c000-0x38000 __DATA  (49152 bytes)\n    0x2c000-0x2c0a8 __DATA.__got    (168 bytes)\n    0x2c0a8-0x2c270 __DATA.__la_symbol_ptr  (456 bytes)\n    0x2c270-0x2c950 __DATA.__const  (1760 bytes)\n    0x2c950-0x2e530 __DATA.__cfstring   (7136 bytes)\n    0x2e530-0x2e670 __DATA.__objc_classlist (320 bytes)\n    0x2e670-0x2e698 __DATA.__objc_catlist   (40 bytes)\n    0x2e698-0x2e6c8 __DATA.__objc_protolist (48 bytes)\n    0x2e6c8-0x2e6d0 __DATA.__objc_imageinfo (8 bytes)\n    0x2e6d0-0x35820 __DATA.__objc_const (29008 bytes)\n    0x35820-0x36490 __DATA.__objc_selrefs   (3184 bytes)\n    0x36490-0x36690 __DATA.__objc_classrefs (512 bytes)\n    0x36690-0x36710 __DATA.__objc_superrefs (128 bytes)\n    0x36710-0x36900 __DATA.__objc_ivar  (496 bytes)\n    0x36900-0x37580 __DATA.__objc_data  (3200 bytes)\n    0x37580-0x377c8 __DATA.__data   (584 bytes)\n0x38000-0x158000 __LLVM (1179648 bytes)\n    0x38000-0x157956 __LLVM.__bundle    (1177942 bytes)\n0x158000-0x182678 __LINKEDIT    (173688 bytes)\n    0x158000-0x158528 Rebase info       (opcodes)   (1320 bytes)\n    0x158528-0x158ca8 Binding info      (opcodes)   (1920 bytes)\n    0x158ca8-0x159298 Lazy Binding info (opcodes)   (1520 bytes)\n    0x159298-0x1599e0 Exports   (1864 bytes)\n    0x1599e0-0x159d18 Function Starts   (824 bytes)\n    0x159d18-0x16a998 Symbol Table  (68736 bytes)\n    0x16abb8-0x182678 String Table  (96960 bytes)\n\u279c  RZGMS.framework git:(develop)\n")))}l.isMDXComponent=!0},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,s=_(e,["components","mdxType","originalType","parentName"]),l=i(n),d=r,u=l["".concat(c,".").concat(d)]||l[d]||p[d]||b;return n?a.a.createElement(u,o(o({ref:t},s),{},{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var o={};for(var _ in t)hasOwnProperty.call(t,_)&&(o[_]=t[_]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<b;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},971:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210909174659068-5ea24cce6da135bbd25d0525a11bb0a6.png"},972:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210909174747899-d0fd4e17b320f7cba02abe813b6cb956.png"},973:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210909174805882-12b55d10c0b439e72412bf9eab4fde08.png"},974:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210910092721366-86bf0d9c2fe5884355724e23d1d4c077.png"},975:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210910103241966-aed14613339353b1a24cd11e0621893d.png"}}]);