(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(7),a=(n(0),n(333)),r=["components"],u={},c={unversionedId:"\u97f3\u89c6\u9891/Audio/Audio",id:"\u97f3\u89c6\u9891/Audio/Audio",isDocsHomePage:!1,title:"Audio",description:"Audio",source:"@site/docs/\u97f3\u89c6\u9891/Audio/Audio.md",slug:"/\u97f3\u89c6\u9891/Audio/Audio",permalink:"/docs/\u97f3\u89c6\u9891/Audio/Audio",editUrl:"dys-typora-open://mine/survival/docs/\u97f3\u89c6\u9891/Audio/Audio.md",version:"current",sidebar:"\u97f3\u89c6\u9891",previous:{title:"\u97f3\u89c6\u9891",permalink:"/docs/\u97f3\u89c6\u9891/\u97f3\u89c6\u9891"},next:{title:"\u97f3\u9891\u91c7\u96c6",permalink:"/docs/\u97f3\u89c6\u9891/Audio/\u97f3\u9891\u91c7\u96c6"}},l=[{value:"\u58f0\u97f3\u7684\u4e09\u8981\u7d20",id:"\u58f0\u97f3\u7684\u4e09\u8981\u7d20",children:[]},{value:"\u91cd\u91c7\u6837",id:"\u91cd\u91c7\u6837",children:[]},{value:"\u7f16\u7801",id:"\u7f16\u7801",children:[{value:"aac",id:"aac",children:[]}]},{value:"\u89e3\u7801",id:"\u89e3\u7801",children:[]},{value:"\u64ad\u653e",id:"\u64ad\u653e",children:[]},{value:"Core Audio Types",id:"core-audio-types",children:[{value:"AudioBufferList",id:"audiobufferlist",children:[]},{value:"CoreAudioType Structures",id:"coreaudiotype-structures",children:[]}]},{value:"Audio Toolbox",id:"audio-toolbox",children:[{value:"Extended Audio File Services",id:"extended-audio-file-services",children:[]},{value:"Audio Components",id:"audio-components",children:[]},{value:"Audio Queue Services",id:"audio-queue-services",children:[]},{value:"Audio Unit v2 (C) API",id:"audio-unit-v2-c-api",children:[]},{value:"Deprecated Symbols",id:"deprecated-symbols",children:[]}]},{value:"\u5173\u4e8eOSStatus",id:"\u5173\u4e8eosstatus",children:[]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],b={toc:l};function d(e){var t=e.components,u=Object(o.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},b,u,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audio"},"Audio"),Object(a.b)("h2",{id:"\u58f0\u97f3\u7684\u4e09\u8981\u7d20"},"\u58f0\u97f3\u7684\u4e09\u8981\u7d20"),Object(a.b)("p",null,"\u97f3\u8c03\uff1a\u97f3\u9891\u7684\u5feb\u6162"),Object(a.b)("p",null,"\u97f3\u91cf\uff1a\u9707\u52a8\u7684\u5e45\u5ea6"),Object(a.b)("p",null,"\u97f3\u8272\uff1a\u8c10\u6ce2"),Object(a.b)("p",null,"\u5b58\u50a8\u5e38\u89c1\u95ee\u9898\uff1f"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u9ed8\u8ba4\u65e0\u538b\u7f29\u7684\u5b58\u50a8\u683c\u5f0f\u662f\u4ec0\u4e48\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u5982\u4f55\u5b58\u5230\u6587\u4ef6\uff1f")),Object(a.b)("p",null,"\u7f16\u7801\u5e38\u89c1\u95ee\u9898?"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u7f16\u7801\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u90a3\u79cd\u538b\u7f29\u7b97\u6cd5\uff0c\u6570\u636e\u5c0f\uff0c\u4e14\u8d28\u91cf\u597d\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u600e\u4e48\u538b\u7f29\uff0c\u7528\u4ec0\u4e48\u5e93\uff1f")),Object(a.b)("p",null,"\u89e3\u7801\u5e38\u89c1\u95ee\u9898\uff1f"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u89e3\u7801\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u600e\u4e48\u89e3\u7801\uff0c\u7528\u4ec0\u4e48\u5de5\u5177\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u89e3\u7801\u540e\u7684\u6587\u4ef6\u5982\u4f55\u64ad\u653e\uff1f")),Object(a.b)("hr",null),Object(a.b)("p",null,"\u97f3\u9891\u4e09\u5143\u7ec4"),Object(a.b)("p",null,"\u97f3\u9891\u4e09\u5143\u7ec4\uff08\u91c7\u6837\u7387\uff0c\u91c7\u6837\u5927\u5c0f\uff0c\u901a\u9053\u6570\uff09"),Object(a.b)("h2",{id:"\u91cd\u91c7\u6837"},"\u91cd\u91c7\u6837"),Object(a.b)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),Object(a.b)("h3",{id:"aac"},"aac"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ffmpeg\u751f\u6210aac\u6587\u4ef6")),Object(a.b)("p",null,Object(a.b)("img",{alt:"2021-3-28-10-21-25",src:n(653).default})),Object(a.b)("h2",{id:"\u89e3\u7801"},"\u89e3\u7801"),Object(a.b)("h2",{id:"\u64ad\u653e"},"\u64ad\u653e"),Object(a.b)("h2",{id:"core-audio-types"},"Core Audio Types"),Object(a.b)("h3",{id:"audiobufferlist"},"AudioBufferList"),Object(a.b)("h3",{id:"coreaudiotype-structures"},"CoreAudioType Structures"),Object(a.b)("h4",{id:"audiostreambasicdescription"},"AudioStreamBasicDescription"),Object(a.b)("h2",{id:"audio-toolbox"},"Audio Toolbox"),Object(a.b)("h3",{id:"extended-audio-file-services"},"Extended Audio File Services"),Object(a.b)("p",null,"\u53c2\u9605\uff1aApple API\uff1aExtended Audio File Services"),Object(a.b)("p",null,"Read and write compressed files and linear PCM audio files"),Object(a.b)("p",null,"\u6253\u5f00\u6587\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus ExtAudioFileOpenURL(CFURLRef inURL, ExtAudioFileRef  _Nullable *outExtAudioFile);\n")),Object(a.b)("p",null,"\u6301\u6709\u6587\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ExtAudioFileRef\nAn opaque structure representing an extended audio file object.\n")),Object(a.b)("p",null,"\u83b7\u53d6\u6587\u4ef6\u5c5e\u6027\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus ExtAudioFileGetProperty(ExtAudioFileRef inExtAudioFile, ExtAudioFilePropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);\n")),Object(a.b)("p",null,"\u8bbe\u7f6e\u6587\u4ef6\u5c5e\u6027\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus ExtAudioFileSetProperty(ExtAudioFileRef inExtAudioFile, ExtAudioFilePropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);\n")),Object(a.b)("p",null,"\u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus ExtAudioFileRead(ExtAudioFileRef inExtAudioFile, UInt32 *ioNumberFrames, AudioBufferList *ioData);\n")),Object(a.b)("blockquote",null,Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",{parentName:"pre"},"ioNumberFrames\n")),Object(a.b)("p",{parentName:"blockquote"},"On input, the number of frames to read from the file. On output, the number of frames actually read. Fewer frames may be read than were requested. For example, the supplied buffers may not be large enough to accommodate the requested data. If ",Object(a.b)("inlineCode",{parentName:"p"},"0")," frames are returned, end-of-file was reached."),Object(a.b)("p",{parentName:"blockquote"},"\u8f93\u5165\u65f6\uff0c\u662f\u4ece\u6587\u4ef6\u8bfb\u53d6\u7684\u5e27\u6570\u3002 \u8f93\u51fa\u65f6\uff0c\u5b9e\u9645\u8bfb\u53d6\u7684\u5e27\u6570\u3002 \u53ef\u80fd\u8bfb\u53d6\u7684\u5e27\u5c11\u4e8e\u8bf7\u6c42\u7684\u5e27\u3002 \u4f8b\u5982\uff0c\u63d0\u4f9b\u7684\u7f13\u51b2\u533a\u53ef\u80fd\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u8bf7\u6c42\u7684\u6570\u636e\u3002 \u5982\u679c\u8fd4\u56de0\u5e27\uff0c\u5219\u5230\u8fbe\u6587\u4ef6\u672b\u5c3e\u3002")),Object(a.b)("p",null,"Disposes of an extended audio file object and closes the associated file."),Object(a.b)("p",null,"\u5904\u7f6e\u6269\u5c55\u7684\u97f3\u9891\u6587\u4ef6\u5bf9\u8c61\u5e76\u5173\u95ed\u5173\u8054\u7684\u6587\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"OSStatus ExtAudioFileDispose(ExtAudioFileRef inExtAudioFile);\n")),Object(a.b)("h3",{id:"audio-components"},"Audio Components"),Object(a.b)("p",null,"Find, load, and configure audio components, such as Audio Units and audio codecs."),Object(a.b)("p",null,"\u67e5\u627e\uff0c\u52a0\u8f7d\u548c\u914d\u7f6e\u97f3\u9891\u7ec4\u4ef6\uff0c\u4f8b\u5982\u97f3\u9891\u5355\u5143\u548c\u97f3\u9891\u7f16\u89e3\u7801\u5668\u3002"),Object(a.b)("h4",{id:"audiocomponentsdescription"},"AudioComponentsDescription"),Object(a.b)("p",null,"identifying information for audio component."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"componentSubType")),Object(a.b)("p",null,"A 4-byte code that you can use to indicate the purpose of a component. For example, you could use ",Object(a.b)("inlineCode",{parentName:"p"},"lpas")," or ",Object(a.b)("inlineCode",{parentName:"p"},"lowp")," as a mnemonic indication that an audio unit is a low-pass filter."),Object(a.b)("p",null,"\u4e00\u4e2a4\u5b57\u8282\u7684\u4ee3\u7801\uff0c\u53ef\u7528\u4e8e\u6307\u793a\u7ec4\u4ef6\u7684\u7528\u9014\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528lpas\u6216lowp\u4f5c\u4e3a\u8868\u793a\u97f3\u9891\u5355\u5143\u662f\u4f4e\u901a\u6ee4\u6ce2\u5668\u7684\u52a9\u8bb0\u7b26\u3002"),Object(a.b)("h3",{id:"audio-queue-services"},"Audio Queue Services"),Object(a.b)("h4",{id:"aurendercallbackstruct"},"AURenderCallbackStruct"),Object(a.b)("h3",{id:"audio-unit-v2-c-api"},"Audio Unit v2 (C) API"),Object(a.b)("h4",{id:"aurendercallback"},"AURenderCallback"),Object(a.b)("p",null,"Called by the system when an audio unit requires input samples, or before and after a render operation."),Object(a.b)("p",null,"\u5f53\u97f3\u9891\u5355\u5143\u9700\u8981\u8f93\u5165\u91c7\u6837\u65f6\uff0c\u6216\u5728\u6e32\u67d3\u64cd\u4f5c\u4e4b\u524d\u548c\u4e4b\u540e\uff0c\u7531\u7cfb\u7edf\u8c03\u7528\u3002"),Object(a.b)("h3",{id:"deprecated-symbols"},"Deprecated Symbols"),Object(a.b)("h4",{id:"audio-unit-processing-graph-services"},"Audio Unit Processing Graph Services"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NewAUGraph")),Object(a.b)("p",null,"Creates a new audio processing graph"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"OSStatus NewAUGraph(AUGraph  _Nullable *outGraph);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AUGraphAddNode")),Object(a.b)("p",null,"Adds a node to an audio processing graph."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus AUGraphAddNode(AUGraph inGraph, const AudioComponentDescription *inDescription, AUNode *outNode);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AUGraphConnectNodeInput")),Object(a.b)("p",null,"Connects one node\u2019s output to another node\u2019s input."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus AUGraphConnectNodeInput(AUGraph inGraph, AUNode inSourceNode, UInt32 inSourceOutputNumber, AUNode inDestNode, UInt32 inDestInputNumber);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AUGraphOpen")),Object(a.b)("p",null,"Opens an audio progressing graph"),Object(a.b)("p",null,"Specifically No resource allocation occurs  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus AUGraphOpen(AUGraph inGraph);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AUGraphNodeInfo")),Object(a.b)("p",null,"Returns information about a node object."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"OSStatus AUGraphNodeInfo(AUGraph inGraph, AUNode inNode, AudioComponentDescription *outDescription, AudioUnit  _Nullable *outAudioUnit);\n")),Object(a.b)("h2",{id:"\u5173\u4e8eosstatus"},"\u5173\u4e8eOSStatus"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21064696/what-is-osstatus"},"https://stackoverflow.com/questions/21064696/what-is-osstatus")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"As you've said, it's the result code of the function."),Object(a.b)("p",{parentName:"blockquote"},"Hovewer, different functions have different result codes that you can handle as you wish. for example, for Audio services, the current OSStatus codes are give in the ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/AudioToolbox/Reference/SystemSoundServicesReference/Reference/reference.html#//apple_ref/doc/uid/TP40007916-CH7a-SW1"},"documentation")," as:"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("img",{alt:"enter image description here",src:n(654).default})),Object(a.b)("p",{parentName:"blockquote"},"So as you call your functions, you check the returnes ",Object(a.b)("inlineCode",{parentName:"p"},"OSStatus")," and if it's ",Object(a.b)("inlineCode",{parentName:"p"},"noErr")," (which is what ",Object(a.b)("inlineCode",{parentName:"p"},"0")," is), then you can continue with your next call, otherwise you handle the error accordingly.")),Object(a.b)("p",null,"\u5982\u679c\u4e00\u4e2a\u8fd4\u56de\u503c\u7c7b\u578b \u662f OSStatus\uff0c\u5982\u679c\u662f\u6ca1\u6709\u95ee\u9898\uff0c\u5219\u8fd4\u56de0(\u5b8f\u662f noErr)\u3002\u9488\u5bf9\u5904\u7406"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objective-c"},'enum {\n  noErr                         = 0\n};\n\nstatic OSStatus renderInput(void *inRefCon, AudioUnitRenderActionFlags *ioActionFlags, const AudioTimeStamp *inTimeStamp, UInt32 inBusNumber, UInt32 inNumberFrames, AudioBufferList *ioData)\n{\n    SoundBufferPtr sndbuf = (SoundBufferPtr)inRefCon;    \n        ...\n    \n    //printf("bus %d sample %d\\n", (unsigned int)inBusNumber, (unsigned int)sample);    \n    return noErr;\n}\n\n\n')),Object(a.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(a.b)("p",null,"Apple\u5b98\u65b9\u6587\u6863"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/MusicAudio/Conceptual/AudioUnitHostingGuide_iOS/Introduction/Introduction.html"},"https://developer.apple.com/library/archive/documentation/MusicAudio/Conceptual/AudioUnitHostingGuide_iOS/Introduction/Introduction.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/audiotoolbox/deprecated_symbols/audio_unit_processing_graph_services?language=objc"},"https://developer.apple.com/documentation/audiotoolbox/deprecated_symbols/audio_unit_processing_graph_services?language=objc")),Object(a.b)("li",{parentName:"ul"},"Dash\uff1aApple Api Reference\uff1aAudio Unit Processing Graph Services"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#//apple_ref/doc/uid/TP40009767-CH2-SW4"},"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#//apple_ref/doc/uid/TP40009767-CH2-SW4"))),Object(a.b)("p",null,"\u4e09\u65b9\u5e93"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"AudioKit\u6e90\u7801\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/AudioKit/AudioKit"},"https://github.com/AudioKit/AudioKit"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"AudioKitDemo\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/AudioKit/Cookbook"},"https://github.com/AudioKit/Cookbook"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"AudioKitDemo\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/AudioKit/AudioKit/tree/main/docs"},"https://github.com/AudioKit/AudioKit/tree/main/docs"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"chromium \u6e90\u7801 ",Object(a.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/external/webrtc/trunk/webrtc/+/f54860e9ef0b68e182a01edc994626d21961bc4b/modules/audio_device/ios/voice_processing_audio_unit.mm"},"https://chromium.googlesource.com/external/webrtc/trunk/webrtc/+/f54860e9ef0b68e182a01edc994626d21961bc4b/modules/audio_device/ios/voice_processing_audio_unit.mm")))),Object(a.b)("p",null,"\u672c\u5730\u8d44\u6e90"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"audio_reference \u6587\u4ef6\u5939\u7684: UsinganAUGraphwiththeMulti-ChannelMixerandRemoteIOAudioUnit.zip")),Object(a.b)("p",null,"\u535a\u5ba2\u53c2\u8003"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/yxibng/learn-Audio"},"https://github.com/yxibng/learn-Audio")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://blog.csdn.net/leixiaohua1020/article/details/18893769"},"[\u603b\u7ed3]\u89c6\u97f3\u9891\u7f16\u89e3\u7801\u6280\u672f\u96f6\u57fa\u7840\u5b66\u4e60\u65b9\u6cd5")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://xiaodongxie1024.github.io/2019/05/11/20190511_AudioUnit_capture/"},"Audio Unit\u91c7\u96c6\u97f3\u9891\u5b9e\u6218"))),Object(a.b)("p",null,"\u89c6\u9891\u8d44\u6e90\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1dv411C7vx"},"https://www.bilibili.com/video/BV1dv411C7vx"))),Object(a.b)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u89c6\u9891\uff0c\u548c\u697c\u4e3b\u7684\u601d\u8def\u7c7b\u4f3c\uff1a\u5b8c\u6574\u4ecb\u7ecd\u4e86\u6574\u4e2a\u97f3\u89c6\u9891\u6280\u672f\u3002\u4ece\u91c7\u6837\u5230\u7f16\u7801\u3001\u5c01\u88c5\u3001\u4f20\u8f93\u534f\u8bae\uff1b \u7136\u540e\u6839\u636e\u793a\u4f8b\u4ee3\u7801\u642d\u5efa\u4e86\u4e00\u5957\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u6a21\u578b\uff0c\u6700\u540e\u8bb2\u4e86\u4e0b\u5546\u4e1a\u76f4\u64ad\u5e73\u53f0\u548c\u666e\u901a\u6a21\u578b\u7684\u5dee\u5f02\u3002 \u503c\u5f97\u770b\u770b"))}d.isMDXComponent=!0},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),s=i,m=d["".concat(r,".").concat(s)]||d[s]||p[s]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},653:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2021-3-28-10-21-25-acb19de3add2348f29c27962ed86e3c2.png"},654:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/FsFkO-73df342a6aa5bbd4a46b7cb8014a1bdf.png"}}]);