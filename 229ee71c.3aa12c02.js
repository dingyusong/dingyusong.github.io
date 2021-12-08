(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(333)),o=["components"],c={},l={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation",id:"\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation",isDocsHomePage:!1,title:"Foundation",description:"Files and Data Persistance",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation.md",slug:"/\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u8bed\u8a00/Objective-C/Foundation/Foundation.md",version:"current"},s=[{value:"Files and Data Persistance",id:"files-and-data-persistance",children:[{value:"Archives and Serialization",id:"archives-and-serialization",children:[]}]}],u={toc:s};function d(e){var t=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"files-and-data-persistance"},"Files and Data Persistance"),Object(i.b)("h3",{id:"archives-and-serialization"},"Archives and Serialization"),Object(i.b)("h4",{id:"json"},"JSON"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NSJSONSerialization")),Object(i.b)("p",null,"Object to NSData cause memory leak!"),Object(i.b)("p",null,"[",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsjsonserialization/1413636-datawithjsonobject?language=occ"},"NSJSONSerialization\u2019s dataWithJSONObject: options: error:"),"]"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210208095736572",src:n(471).default})),Object(i.b)("p",null,"In apple\u2018s document ",Object(i.b)("inlineCode",{parentName:"p"},"NSData:A static byte buffer in memory.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"["),Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsdata/1410616-bytes"},Object(i.b)("strong",{parentName:"a"},"NSData bytes")),Object(i.b)("strong",{parentName:"p"},"] is a pointer to the data object\u2019s contents"),". "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@property(readonly) const void *bytes;\n")),Object(i.b)("p",null,"Objective-C is still a kind of C, with many C behaviors. The C string is a byte array that requires ",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," in the tail. For example, \u201cHello\u201d, the actual The representation in the memory will be ",Object(i.b)("inlineCode",{parentName:"p"},"0x48 0x65 0x6c 0x6c 0x6f 0x00"),". If there is no ending ",Object(i.b)("inlineCode",{parentName:"p"},"0x00"),", then C language will think that the string has not ended, so it looks down."),Object(i.b)("p",null,"But [",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsjsonserialization/1413636-datawithjsonobject?language=occ"},"NSJSONSerialization\u2019s dataWithJSONObject: options: error:"),"] didn\u2019t say the NSData it returns is a null-terminated C string, and then it is not \u2026"),Object(i.b)("p",null,"Because NSData is \u201cA static byte buffer in memory\u201d, ","[NSData bytes]"," directly returns this buffer. When the program wants to get a JSON string, it did not encounter ",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," after reading the JSON String in data, it did not encounter 0x00, so it continued to go down."),Object(i.b)("p",null,"And the latter memory just contains other data, so it was put in together, and it didn\u2019t end until it encountered ",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," luckily! That is a very typical buffer overflow error."),Object(i.b)("p",null,"Reference\uff1a",Object(i.b)("a",{parentName:"p",href:"https://hanru-yeh.medium.com/information-leaks-on-nsjsonserialization-datawithjsonobject-data-2f8df25a8827"},"https://hanru-yeh.medium.com/information-leaks-on-nsjsonserialization-datawithjsonobject-data-2f8df25a8827")),Object(i.b)("p",null,"\u7b80\u5355\u8bf4\uff1ac\u5b57\u7b26\u4e32\u5728\u5185\u5b58\u4e2d\u4ee5 ",Object(i.b)("inlineCode",{parentName:"p"},"0x00"),"\uff0c\u7a0b\u5e8f\u7528\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," \u6765\u5224\u65ad\u5b57\u7b26\u4e32\u7ed3\u675f\uff0c\u4f46\u662f [",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsjsonserialization/1413636-datawithjsonobject?language=occ"},"NSJSONSerialization\u2019s dataWithJSONObject: options: error:"),"]  \u8fd4\u56de\u7684NSData \u6ca1\u6709\u4ee5 ",Object(i.b)("inlineCode",{parentName:"p"},"0x00")," \u7ed3\u5c3e\uff0c\u6240\u4ee5\u7a0b\u5e8f\u8ba4\u4e3a\u4ed6\u8fd8\u6ca1\u7ed3\u675f\uff0c\u6240\u4ee5\u5c31\u4e0d\u91ca\u653e\uff01\u3002"),Object(i.b)("p",null,"NSNotification \u7684userinfo NSNumber *"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-objective-c"},'- (instancetype)initWithURL:(NSString *)urlString filePath:(NSString *)filePath {\n    if (self = [super init]) {\n        BOOL isValid = [self rz_isValidPath:filePath];\n        if (!isValid) {\n            _logFilePath = [self rz_defaultLogFilePath];\n            _logDirPath = [self rz_defaultLogDirPath];\n            \n            [self rz_createDir:_logDirPath];\n            [self rz_createFile:_logFilePath];\n        }\n        _urlString = urlString;\n        _queue = dispatch_queue_create("com.rz.paas.sdk.data.collect.queue", DISPATCH_QUEUE_SERIAL);\n        [self changeLogPath];\n        self.currentStatus = [RZReachabilityManager sharedManager].networkReachabilityStatus;\n        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(rz_observerNetworkStatus:) name:RZReachabilityDidChangeNotification object:nil];\n    }\n    return self;\n}\n\n- (void)rz_observerNetworkStatus:(NSNotification*)noti {\n    self.currentStatus = [((NSNumber *)noti.userInfo[RZReachabilityNotificationStatusItem]) integerValue];;\n}\n\n')))}d.isMDXComponent=!0},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210208095736572-7113918c1d286e975bb0cfd65656cf7a.png"}}]);