(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{316:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return d})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(331)),c=["components"],i={},d={unversionedId:"Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash",id:"Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash",isDocsHomePage:!1,title:"\u5e76\u53d1\u5bfc\u81f4\u7684Crash",description:"\u73b0\u8c61",source:"@site/docs/Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash.md",slug:"/Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash",permalink:"/docs/Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash",editUrl:"dys-typora-open://mine/survival/docs/Apple/\u5d29\u6e83\u5206\u6790/\u5e76\u53d1\u5bfc\u81f4\u7684Crash.md",version:"current"},s=[],p={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u73b0\u8c61"),Object(o.b)("p",null,"\u6211\u4eec\u6b63\u5728\u7f16\u5199\u7684\u5e94\u7528\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u4e3b\u52a8\u5f15\u53d1\u5d29\u6e83\u3002\u8fd9\u901a\u5e38\u901a\u8fc7\u6211\u4eec\u4ee3\u7801\u4e2d\u7684\u65ad\u8a00\u8c03\u7528\u6765\u5b8c\u6210\u7684\u3002\u4efb\u4f55\u65ad\u8a00\u7684\u5931\u8d25\uff0c\u8fd9\u4e9b\u8c03\u7528\u90fd\u4f1a\u8981\u6c42\u64cd\u4f5c\u73af\u5883\u7acb\u5373\u7ec8\u6b62\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u7136\u540e\u64cd\u4f5c\u73af\u5883\u5c31\u7ec8\u6b62\u4e86\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u90a3\u4e48\u5728\u5d29\u6e83\u62a5\u544a\u4e2d\u6211\u4eec\u4f1a\u5f97\u5230\u8fd9\u6837\u4e00\u4e2a\u7c7b\u578b:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Exception Type: EXC_CRASH (SIGABRT)\n")),Object(o.b)("p",null,"\u8868\u660e\u5e94\u7528\u7a0b\u5e8f\u5728\u7b2c\u4e00\u65f6\u95f4\u4e3b\u52a8\u89e6\u53d1\u5d29\u6e83\u3002"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"EXC_CRASH (SIGABRT)")),Object(o.b)("th",{parentName:"tr",align:null},"\u6211\u4eec\u7684\u7a0b\u5e8f\u89e6\u53d1\u4e86\u4e00\u4e2a\u7f16\u7a0b\u8bed\u8a00\u5f02\u5e38\uff0c\u4f8b\u5982\u5931\u8d25\u7684\u65ad\u8a00\uff0c\u8fd9\u5bfc\u81f4\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u6b62\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Application Specific Information:\n*** Terminating app due to uncaught exception 'std::__1::system_error', reason: 'mutex lock failed: Invalid argument'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"//RZVideoBufferTypeRawData\n- (void)consumeRawData:(void *_Nonnull)rawData\n           pixelFormat:(RZVideoPixelFormat)pixelFormat\n                  size:(CGSize)size\n             timestamp:(uint32_t)timestamp {\n    \n    if (!_consumer) {\n        return;\n    }\n    \n    _consumer->consumeVideoFrame((const unsigned char *)rawData,\n                                 VIDEO_PIXEL_FORMAT(pixelFormat),\n                                 size.width, size.height,\n                                 timestamp);\n    \n}\n\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"0   libsystem_kernel.dylib              0x00000001948c86b8 _kernelrpc_mach_vm_deallocate_trap + 8\n1   libsystem_kernel.dylib              0x00000001948d1e1c mach_vm_deallocate + 88\n2   libsystem_malloc.dylib              0x00000001947ea0f4 mvm_deallocate_pages + 84\n3   RZPaas_iOS                          0x00000001059b2884 x264_8_frame_delete + 32\n4   RZPaas_iOS                          0x0000000104e74a14 DuoBei::H264Codec::~H264Codec() + 985620 (H264Codec.cpp:16)\n5   RZPaas_iOS                          0x0000000104e905d4 rz::DefaultVideoEncoder::Release() + 1099220 (DefaultVideoEncoder.cpp:43)\n6   RZPaas_iOS                          0x0000000104e8f968 rz::DefaultVideoEncoder::~DefaultVideoEncoder() + 1096040 (DefaultVideoEncoder.cpp:22)\n7   RZPaas_iOS                          0x0000000104e8fa9c rz::DefaultVideoEncoder::~DefaultVideoEncoder() + 1096348 (DefaultVideoEncoder.cpp:19)\n8   RZPaas_iOS                          0x0000000104ef5c28 std::__1::__shared_ptr_pointer<rz::VideoEncoder*, rz::StructureFactory::createVideoEncoder(rz::VIDEO_CODEC_TYPE, rz::VideoEncoderConfig&, rz::VideoEncodeEventHandler*)::$_39, std::__1::allocator<rz::VideoEncoder> >::__on_zero_shared() + 1514536 (memory:2598)\n9   RZPaas_iOS                          0x0000000104e7f8c4 rz::VideoEncodecManage::~VideoEncodecManage() + 1030340 (VideoCodecManage.h:97)\n10  RZPaas_iOS                          0x0000000104e7f5d8 rz::VideoEncodecManage::~VideoEncodecManage() + 1029592 (VideoCodecManage.h:97)\n11  RZPaas_iOS                          0x0000000104ef6ad8 std::__1::__shared_ptr_pointer<rz::VideoEncodecManage*, rz::StructureFactory::createVideoEncoderManage(rz::CODEC_PRIORITY, rz::VideoEncoderConfig, rz::VideoEncodeManageEventHandler*)::$_48, std::__1::allocator<rz::VideoEncodecManage> >::__on_zero_shared() + 1518296 (memory:2598)\n12  RZPaas_iOS                          0x0000000104e65b28 rz::PubVideoStream::~PubVideoStream() + 924456 (PubVideoStream.cpp:129)\n13  RZPaas_iOS                          0x0000000104e65f00 rz::PubVideoStream::~PubVideoStream() + 925440 (PubVideoStream.cpp:105)\n14  RZPaas_iOS                          0x0000000104ef72b8 std::__1::__shared_ptr_pointer<rz::PubVideoStream*, rz::StructureFactory::createPubVideoStream(rz::PubVideoStreamInfo const&, rz::IVideoSource*, rz::PubVideoStreamEventHandler*, std::__1::function<void ()>, bool)::$_56, std::__1::allocator<rz::PubVideoStream> >::__on_zero_shared() + 1520312 (memory:2597)\n15  RZPaas_iOS                          0x0000000104eb1f80 rz::RtcEngineBase::localStreamCreate(std::__1::shared_ptr<rz::LocalVideoStreamContext>) + 1236864 (RtcEngineBase.cpp:632)\n16  RZPaas_iOS                          0x0000000104ec2034 rz::RtcEngineBase::unpublish(bool, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&) + 1302580 (RtcEngineBase.cpp:2747)\n17  RZPaas_iOS                          0x0000000104e5b5f8 rz::InteractiveManage::workFun() + 882168 (InteractiveManage.cpp:45)\n18  RZPaas_iOS                          0x0000000104d8fe74 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (*)()> >(void*) + 48756 (thread:299)\n19  libsystem_pthread.dylib             0x00000001948098fc _pthread_start + 168\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'PubVideoStream::~PubVideoStream() {\n    //\u505c\u6b62\u6570\u636e\u6e90\n    if (sourceDataProducer)\n        sourceDataProducer->Stop();\n    if (videoSource) {\n        videoSource->onDispose();\n    }\n    if (videoISource) {\n        //onStop\u91cd\u590d\u8c03\u7528,\u53ef\u80fd\u662f\u9020\u6210\u5d29\u6e83\u7684\u539f\u56e0, \u53d6\u51b3\u4e8e\u7528\u6237\u5bf9\u4e8eIVideoSource\u7684\u5b9e\u73b0\n        videoISource->onDispose();\n    }\n    if (previewProcess)\n        previewProcess->stopPreview();\n\n    //\u91ca\u653edataFlow\n    pubVideoStreamFlow.reset();\n    \n    printf("kkkkfff-%s-before\\n",__FUNCTION__);\n    sourceDataProducer.reset();\n    printf("kkkkfff-%s-after\\n",__FUNCTION__);\n\n    \n    videoCaptureFilter.reset();\n    scaleCropProcess.reset();\n    previewProcess.reset();\n    mirrorModeProcess.reset();\n    videoDualStreamProcess.reset();\n    videoPreEncoderFilter.reset();\n    encorderProcess.reset();\n    solSendDataConsumer.reset();\n\n    pubVideoStreamMonitor.reset();\n}\n')),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://zentao.duobeiyun.com/index.php?m=bug&f=view&bugID=4108"},"https://zentao.duobeiyun.com/index.php?m=bug&f=view&bugID=4108")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"https://apm.umeng.com/platform/611c67641fee2e303c273044/error_analysis/crash/detail/5029770407068?errorId=5029770407068&startDay=20211013%20170000&endDay=20211015%20165959&version=[]&errorAbstract=&status=&orderBy=happenTimes&timeUnit=recent48Hour&onlyNew=&noSystemError=&onlyHarmonyOS=&errorType=crash&carrier=[]&device=[]&os=[]&areaType=&channel=[]&area=[]&crashType=&dateRange=[%2220211013%20170000%22,%2220211015%20165959%22]&dateType=last48Hours")))}l.isMDXComponent=!0},331:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},_=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(t),_=n,b=l["".concat(c,".").concat(_)]||l[_]||u[_]||o;return t?a.a.createElement(b,i(i({ref:r},s),{},{components:t})):a.a.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=_;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}_.displayName="MDXCreateElement"}}]);