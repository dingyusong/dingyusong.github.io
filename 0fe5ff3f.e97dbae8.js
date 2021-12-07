(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{328:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,u(u({ref:t},l),{},{components:n})):r.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(328)),a=["components"],u={},s={unversionedId:"\u97f3\u89c6\u9891/Audio/AudioSession",id:"\u97f3\u89c6\u9891/Audio/AudioSession",isDocsHomePage:!1,title:"AudioSession",description:"AudioSession",source:"@site/docs/\u97f3\u89c6\u9891/Audio/AudioSession.md",slug:"/\u97f3\u89c6\u9891/Audio/AudioSession",permalink:"/docs/\u97f3\u89c6\u9891/Audio/AudioSession",editUrl:"dys-typora-open://mine/survival/docs/\u97f3\u89c6\u9891/Audio/AudioSession.md",version:"current"},l=[{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"audiosession"},"AudioSession"),Object(i.b)("p",null,"Communicate to the system how you intend to use audio in your app."),Object(i.b)("p",null,"VoIP\u7c7bAPP\u7684\u64cd\u4f5c\u3002"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioGuidelinesByAppType/AudioGuidelinesByAppType.html#//apple_ref/doc/uid/TP40007875-CH11-SW4"},"Audio Guidelines for VoIP and Chat Apps")),Object(i.b)("p",null,"VoIP and chat apps require that both input and output routes are available. These types of apps use the ",Object(i.b)("inlineCode",{parentName:"p"},"AVAudioSessionCategoryPlayAndRecord")," category and do not mix with other apps."),Object(i.b)("p",null,"Here are some recommended guidelines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only activate an audio session when the user answers or initiates a call."),Object(i.b)("li",{parentName:"ul"},"Update the UI to reflect that the call\u2019s audio has been interrupted after an interruption notification."),Object(i.b)("li",{parentName:"ul"},"Do not activate an audio session after an interruption until the user answers or initiates a call."),Object(i.b)("li",{parentName:"ul"},"Deactivate the audio session after a call ends, using the ",Object(i.b)("inlineCode",{parentName:"li"},"AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation")," constant."),Object(i.b)("li",{parentName:"ul"},"Ignore all route changes unless the app specifically needs to pay attention to them. For instance, route changes may result in changes to the session\u2019s sample rate, buffer duration, or latency. If these values are relevant to your app, query them after a route change to get their latest state."),Object(i.b)("li",{parentName:"ul"},"For VoIP apps, use Apple's Voice Processing I/O audio unit."),Object(i.b)("li",{parentName:"ul"},"Ensure that the audio ",Object(i.b)("inlineCode",{parentName:"li"},"UIBackgroundModes")," flag is set."),Object(i.b)("li",{parentName:"ul"},"Use an ",Object(i.b)("inlineCode",{parentName:"li"},"MPVolumeView")," object for the volume slide and route picker."),Object(i.b)("li",{parentName:"ul"},"Ask the user for permission to record input, using the ",Object(i.b)("inlineCode",{parentName:"li"},"requestRecordPermission:")," method. Don\u2019t rely on the operating system to prompt the user.")),Object(i.b)("p",null,"Starting in iOS 10, to build VoIP apps with the same features and capabilities found in built-in telephony apps (Phone and FaceTime apps), use the CallKit framework. For more information, see ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",{parentName:"em",href:"https://developer.apple.com/documentation/callkit"},"CallKit Framework Reference")),"."),Object(i.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(i.b)("p",null,"Apple\u5b98\u65b9\u6587\u6863\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html"},"Audio Session Programming Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/%E9%9F%B3%E8%A7%86%E9%A2%91/%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99/%E6%95%99%E7%A8%8B/Audio-Session-Programming-Guide"},"Audio Session Programming Guide \u7b14\u8bb0 "))),Object(i.b)("p",null,"KKBOX-AudioSession"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://zonble.gitbooks.io/kkbox-ios-dev/content/audio_apis/audio_session.html"},"https://zonble.gitbooks.io/kkbox-ios-dev/content/audio_apis/audio_session.html"))))}p.isMDXComponent=!0}}]);