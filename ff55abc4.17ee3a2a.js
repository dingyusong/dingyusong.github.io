(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1035:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210815090328178-bc176724ebfb33f11ca2659d6958375f.png"},1036:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210815090410502-f87bff04a507023931a7d05a75802e4e.png"},324:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(329)),l=["components"],c={},i={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB",id:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB",isDocsHomePage:!1,title:"GDB",description:"GDB",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/2-\u7a0b\u5e8f\u7684\u8fd0\u884c/\u8c03\u8bd5\u5de5\u5177/GDB.md",version:"current"},p=[{value:"\u6e90\u7801\u5c55\u793a",id:"\u6e90\u7801\u5c55\u793a",children:[]},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[]},{value:"gdb \u5e38\u7528\u547d\u4ee4",id:"gdb-\u5e38\u7528\u547d\u4ee4",children:[]},{value:"RTFM",id:"rtfm",children:[]}],u={toc:p};function o(e){var t=e.components,c=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"gdb"},"GDB"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://www.gnu.org/software/gdb/"},"https://www.gnu.org/software/gdb/")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://www.gnu.org/software/gdb/documentation/"},"https://www.gnu.org/software/gdb/documentation/")),Object(b.b)("p",null,"\u5b98\u65b9\u5728\u7ebf\u6587\u6863\uff1a",Object(b.b)("a",{parentName:"p",href:"http://sourceware.org/gdb/current/onlinedocs/gdb/"},"http://sourceware.org/gdb/current/onlinedocs/gdb/")," \u6700\u5b98\u65b9\uff0c\u6700\u5b9e\u7528\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},' nemu git:(pa1) \u2717 gdb ./build/x86-nemu-interpreter\nGNU gdb (Debian 8.2.1-2+b3) 8.2.1\nCopyright (C) 2018 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\nType "show copying" and "show warranty" for details.\nThis GDB was configured as "x86_64-linux-gnu".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n<http://www.gnu.org/software/gdb/bugs/>.\nFind the GDB manual and other documentation resources online at:\n    <http://www.gnu.org/software/gdb/documentation/>.\n\nFor help, type "help".\nType "apropos word" to search for commands related to "word"...\nReading symbols from ./build/x86-nemu-interpreter...done.\n(gdb) r\nStarting program: /home/dys/ics2020/nemu/build/x86-nemu-interpreter \n[Thread debugging using libthread_db enabled]\nUsing host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".\n\nProgram received signal SIGSEGV, Segmentation fault.\nparse_args (argv=0x7fffffffe088, argc=1) at src/monitor/monitor.c:88\n88        *((int*)0) = 0;\n(gdb) bt\n#0  parse_args (argv=0x7fffffffe088, argc=1) at src/monitor/monitor.c:88\n#1  init_monitor (argc=1, argv=0x7fffffffe088) at src/monitor/monitor.c:95\n#2  0x0000555555557219 in main (argc=<optimized out>, argv=<optimized out>) at src/main.c:7\n(gdb) layout asm\n')),Object(b.b)("h3",{id:"\u6e90\u7801\u5c55\u793a"},"\u6e90\u7801\u5c55\u793a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"layout\uff1a\u7528\u4e8e\u5206\u5272\u7a97\u53e3\uff0c\u53ef\u4ee5\u4e00\u8fb9\u67e5\u770b\u4ee3\u7801\uff0c\u4e00\u8fb9\u6d4b\u8bd5\u3002\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u79cd\u7528\u6cd5\uff1a\nlayout src\uff1a\u663e\u793a\u6e90\u4ee3\u7801\u7a97\u53e3\nlayout asm\uff1a\u663e\u793a\u6c47\u7f16\u7a97\u53e3\nlayout regs\uff1a\u663e\u793a\u6e90\u4ee3\u7801/\u6c47\u7f16\u548c\u5bc4\u5b58\u5668\u7a97\u53e3\nlayout split\uff1a\u663e\u793a\u6e90\u4ee3\u7801\u548c\u6c47\u7f16\u7a97\u53e3\nlayout next\uff1a\u663e\u793a\u4e0b\u4e00\u4e2alayout\nlayout prev\uff1a\u663e\u793a\u4e0a\u4e00\u4e2alayout\nCtrl + L\uff1a\u5237\u65b0\u7a97\u53e3\nCtrl + x\uff0c\u518d\u63091\uff1a\u5355\u7a97\u53e3\u6a21\u5f0f\uff0c\u663e\u793a\u4e00\u4e2a\u7a97\u53e3\nCtrl + x\uff0c\u518d\u63092\uff1a\u53cc\u7a97\u53e3\u6a21\u5f0f\uff0c\u663e\u793a\u4e24\u4e2a\u7a97\u53e3\nCtrl + x\uff0c\u518d\u6309a\uff1a\u56de\u5230\u4f20\u7edf\u6a21\u5f0f\uff0c\u5373\u9000\u51falayout\uff0c\u56de\u5230\u6267\u884clayout\u4e4b\u524d\u7684\u8c03\u8bd5\u7a97\u53e3\u3002\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300czhangjs0322\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC 4.0 BY-SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002\n\u539f\u6587\u94fe\u63a5\uff1ahttps://blog.csdn.net/zhangjs0322/article/details/10152279\n")),Object(b.b)("h4",{id:"\u5c55\u793a\u6e90\u7801"},"\u5c55\u793a\u6e90\u7801"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"layout src\n")),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210815090328178",src:n(1035).default})),Object(b.b)("h4",{id:"\u5c55\u793a\u6c47\u7f16"},"\u5c55\u793a\u6c47\u7f16"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"layout src\n")),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20210815090410502",src:n(1036).default})),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'gdb\nThe GNU Debugger.More information: https://www.gnu.org/software/gdb.\n\n - Debug an executable:\n   gdb {{executable}}\n\n - Attach a process to gdb:\n   gdb -p {{procID}}\n\n - Debug with a core file:\n   gdb -c {{core}} {{executable}}\n\n - Execute given GDB commands upon start:\n   gdb -ex "{{commands}}" {{executable}}\n\n - Start gdb and pass arguments to the executable:\n   gdb --args {{executable}} {{argument1}} {{argument2}}\n')),Object(b.b)("h4",{id:"\u9000\u51fa\u5c55\u793a"},"\u9000\u51fa\u5c55\u793a"),Object(b.b)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),Object(b.b)("h3",{id:"gdb-\u5e38\u7528\u547d\u4ee4"},"gdb \u5e38\u7528\u547d\u4ee4"),Object(b.b)("h4",{id:"1\uff0c\u542f\u52a8\u7a0b\u5e8f"},"1\uff0c\u542f\u52a8\u7a0b\u5e8f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"r(un)\uff1a\u6267\u884c\u7a0b\u5e8f\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u65ad\u70b9\uff0c\u5219\u76f4\u63a5\u628a\u7a0b\u5e8f\u90fd\u6267\u884c\u5b8c"),Object(b.b)("li",{parentName:"ul"},"start\uff1a\u6267\u884c\u7a0b\u5e8f\u5230main\u51fd\u6570\u540e\uff0c\u505c\u4f4f\u3002")),Object(b.b)("h4",{id:"2\uff0c\u5e38\u7528\u547d\u4ee4"},"2\uff0c\u5e38\u7528\u547d\u4ee4"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"n(ext)\uff1a\u4e0b\u4e00\u6761\u6307\u4ee4\uff08\u4e0d\u8fdb\u5165\u51fd\u6570\uff09"),Object(b.b)("li",{parentName:"ul"},"s(tep)\uff1a\u8fdb\u5165\u51fd\u6570"),Object(b.b)("li",{parentName:"ul"},"\u56de\u8f66\uff1a\u6267\u884c\u4e0a\u4e00\u6761\u547d\u4ee4"),Object(b.b)("li",{parentName:"ul"},"c\uff1a\u6267\u884c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\u505c\u4f4f\uff0c\u5982\u679c\u540e\u9762\u6ca1\u6709\u65ad\u70b9\uff0c\u7a0b\u5e8f\u6267\u884c\u7ed3\u675f\u3002"),Object(b.b)("li",{parentName:"ul"},"q\uff1a\u9000\u51fagdb")),Object(b.b)("h4",{id:"3\uff0c\u8bbe\u7f6e\u65ad\u70b9"},"3\uff0c\u8bbe\u7f6e\u65ad\u70b9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"b(reak)\uff1a\u8bbe\u7f6e\u65ad\u70b9\uff0cb\u540e\u9762\u6307\u5b9a\u884c\u53f7\u3002"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u884c\u53f7"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6587\u4ef6\u540d:\u884c\u53f7"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a \u51fd\u6570"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6587\u4ef6\u540d:\u51fd\u6570"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6709\u4e2a\u5faa\u73af\uff0c\u5f53\u53ea\u60f3\u5728\u5faa\u73af\u53d8\u91cfi=2\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u505c\u4f4f\uff1a\u3010b \u884c\u53f7 if i == 2\u3011"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-shell"},"(gdb) info b\nNum     Type           Disp Enb Address            What\n1       breakpoint     keep y   0x0000555555554748 in main at main.c:10\n    stop only if i == 2\n"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u4e34\u65f6\u65ad\u70b9\uff1atbreak args\n\u8bbe\u7f6e\u4e00\u4e2a\u53ea\u4e2d\u65ad\u4e00\u6b21\u7684\u65ad\u70b9\u3002args \u548cbreak \u547d\u4ee4\u91cc\u7684\u53c2\u6570\u4e00\u6837\uff0c\u65ad\u70b9\u8bbe\u7f6e\u4e5f\u4e00\u6837\uff0c\u4f46\u65ad\u70b9\u5728\u7b2c\u4e00\u6b21\u7a0b\u5e8f\u4e2d\u65ad\u540e\u81ea\u52a8 \u5220\u9664\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u65ad\u7535\uff1arbreak regex\n\u5728\u6240\u6709\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0fregex \u7684\u51fd\u6570\u4e0a\u8bbe\u7f6e\u65ad\u70b9\u3002\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728\u6240\u6709\u5339\u914d\u7684\u51fd\u6570\u4e0a\u8bbe\u7f6e\u65e0\u6761\u4ef6\u7684\u65ad\u70b9\uff0c\u4e5f\u6253\u5370\u8bbe\u7f6e\u7684\u65ad\u70b9\u5217\u8868\n\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u662f\u6807\u51c6\u7684\uff0c\u5c31\u5982",Object(b.b)("inlineCode",{parentName:"p"},"grep"),"\u5de5\u5177\u7528\u7684\u4e00\u6837\u3002\u6ce8\u610f\uff0c\u548cshell\u7528\u7684\u4e0d\u4e00\u6837\uff0c\u4f8b\u5982foo",Object(b.b)("em",{parentName:"p"},"\u5339\u914d\u5f00\u5934\u662ffo\uff0c\u63a5\u4e0b\u6765\u67090 \u6216\u8005\u591a\u4e2ao \u7684\u51fd\u6570\u3002\u5728\u4f60\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5f00\u5934\u548c\u7ed3\u5c3e\u6709\u4e2a\u9690\u542b\u7684."),",\u6240\u4ee5\u8981\u60f3\u53ea\u5339\u914dfoo \u5f00\u5934\u7684\u51fd\u6570\uff0c\u7528^foo.\u5728\u8c03\u8bd5C++\u7a0b\u5e8f\uff0c\u5728\u975e\u7279\u5b9a\u7c7b\u7684\u6210\u5458\u51fd\u6570\u7684\u91cd\u8f7d\u51fd\u6570\u7684\u8bbe\u7f6e\u65ad\u70b9\u4e0a\uff0crbreak \u5f88\u6709\u7528\u3002\n\u76f4\u63a5\u8fd0\u884crbreak\uff1a\u5728\u6240\u6709\u51fd\u6570\u4e0a\u8bbe\u7f6e\u65ad\u70b9\u3002"))),Object(b.b)("h4",{id:"4\uff0c\u67e5\u770b\u6e90\u6587\u4ef6"},"4\uff0c\u67e5\u770b\u6e90\u6587\u4ef6"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"l(list)\uff1a\u67e5\u770b\u6e90\u6587\u4ef6",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u884c\u53f7"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6587\u4ef6\u540d:\u884c\u53f7"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a \u51fd\u6570"),Object(b.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6587\u4ef6\u540d:\u51fd\u6570")))),Object(b.b)("h4",{id:"5\uff0c\u67e5\u770b\u8bbe\u7f6e\u4e86\u54ea\u4e9b\u65ad\u70b9"},"5\uff0c\u67e5\u770b\u8bbe\u7f6e\u4e86\u54ea\u4e9b\u65ad\u70b9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"info b")),Object(b.b)("h4",{id:"6\uff0c\u5220\u9664\u65ad\u70b9"},"6\uff0c\u5220\u9664\u65ad\u70b9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"d (el)\u65ad\u70b9\u7684\u53f7\u7801")),Object(b.b)("p",null,"\u4f8b\u5b50\uff1a\u5148\u7528info b\u67e5\u770b\u6709\u54ea\u4e9b\u65ad\u70b9\uff0c\u6ce8\u610fNum\u5217\uff0c\u5982\u679c\u60f3\u5220\u9664\u3010src/add.c:4\u3011\u5904\u7684\u65ad\u70b9\uff0c\u5c31\u6267\u884c\u3010d 2\u3011"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"(gdb) info b\nNum     Type           Disp Enb Address            What\n2       breakpoint     keep y   0x0000555555554667 in add at src/add.c:4\n3       breakpoint     keep y   0x000055555555468b in main at main.c:5\n")),Object(b.b)("p",null,"\u5220\u96643\u53f7\uff08src/add.c:4\u5904\u7684\uff09\u65ad\u70b9\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"(gdb) d 2\n")),Object(b.b)("p",null,"\u518d\u7528info b\u770b\u770b,\u53d1\u73b02\u53f7\u65ad\u70b9\u6ca1\u6709\u4e86\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"(gdb) info b\nNum     Type           Disp Enb Address            What\n3       breakpoint     keep y   0x000055555555468b in main at main.c:5\n")),Object(b.b)("h4",{id:"7\uff0c\u67e5\u770b\u53d8\u91cf\u7684\u503c\u548c\u53d8\u91cf\u7684\u7c7b\u578b"},"7\uff0c\u67e5\u770b\u53d8\u91cf\u7684\u503c\u548c\u53d8\u91cf\u7684\u7c7b\u578b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u67e5\u770b\u4efb\u4f55\u4e1c\u897f\uff08\u53d8\u91cf/\u51fd\u6570\u7b49\uff09\u7684\u503c\uff1ap"),Object(b.b)("li",{parentName:"ul"},"\u67e5\u770b\u4efb\u4f55\u4e1c\u897f\uff08\u53d8\u91cf/\u51fd\u6570\u7b49\uff09\u7684\u7c7b\u578b\uff1aptype")),Object(b.b)("h4",{id:"8\uff0c\u8bbe\u7f6e\u7a0b\u5e8f\u7684\u542f\u52a8\u53c2\u6570"},"8\uff0c\u8bbe\u7f6e\u7a0b\u5e8f\u7684\u542f\u52a8\u53c2\u6570"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5148\u6267\u884c\u3010set args \u53c2\u65701]\uff0c\u7136\u540e\u3010r\u3011"),Object(b.b)("li",{parentName:"ul"},"\u76f4\u63a5\u6267\u884c\u3010r \u53c2\u65701\u3011")),Object(b.b)("h4",{id:"9\uff0c\u4fee\u6539\u53d8\u91cf\u7684\u503c"},"9\uff0c\u4fee\u6539\u53d8\u91cf\u7684\u503c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"set var \u53d8\u91cf=newValue")),Object(b.b)("h4",{id:"10\uff0c\u67e5\u770b\u5e2e\u52a9"},"10\uff0c\u67e5\u770b\u5e2e\u52a9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"help \u547d\u4ee4\u540d\u5b57\uff1a\u6bd4\u5982\u67e5\u770bset\u547d\u4ee4\u7684\u5177\u4f53\u7528\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u7528\u3010help set\u3011")),Object(b.b)("h4",{id:"11\uff0c\u6bcf\u6b21\u5355\u6b65\u6267\u884c\u90fd\u60f3\u89c2\u5bdf\u53d8\u91cf\u7684\u503c"},"11\uff0c\u6bcf\u6b21\u5355\u6b65\u6267\u884c\u90fd\u60f3\u89c2\u5bdf\u53d8\u91cf\u7684\u503c"),Object(b.b)("p",null,"\u6bcf\u6b21\u5355\u6b65\u6267\u884c\u90fd\u60f3\u89c2\u5bdf\u53d8\u91cf\u7684\u503c,\u8bf7\u4f7f\u7528\u3010display\u3011\uff0c\u4e0d\u60f3\u770b\u4e86\uff0c\u5c31\u7528\u3010undisplay\u3011\u52a0Num\u7684\u53f7\u7801"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"display \u53d8\u91cf\u7684\u540d\u5b57"),Object(b.b)("li",{parentName:"ul"},"undisplay Num\uff08\u53f7\u7801\uff09"),Object(b.b)("li",{parentName:"ul"},"info display\uff1a\u53ef\u4ee5\u67e5\u770bdisplay\u7684Num\uff08\u53f7\u7801\uff09")),Object(b.b)("h4",{id:"12\uff0c\u8c03\u8bd5core\u6587\u4ef6"},"12\uff0c\u8c03\u8bd5core\u6587\u4ef6"),Object(b.b)("p",null,"\u8c03\u8bd5core\u6587\u4ef6,\u5f53\u51fa\u73b0\uff1a\u6bb5\u9519\u8bef\uff08\u6838\u5fc3\u5df2\u8f6c\u50a8\uff09","[Segmentation fault (core dumped)]","\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u3010gdb \u7a0b\u5e8f\u540d core\u6587\u4ef6\u540d\u3011\u540e\uff0c\u5c31\u80fd\u76f4\u63a5\u770b\u5230\u5728\u54ea\u884c\u51fa\u9519\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u53ef\u4ee5\u8f93\u5165\u3010where\u3011\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u4f4d\u5230\u54ea\u884c\u51fa\u9519\u3002"),Object(b.b)("p",null,"\u4f46\u662fcore\u6587\u4ef6\u9ed8\u8ba4\u662f\u4e0d\u88ab\u751f\u6210\u7684\uff0c\u5982\u4f55\u8ba9\u5b83\u751f\u6210\u5462\uff0c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9996\u5148\u786e\u8ba4\u5f53\u524d\u72b6\u6001\uff1a\u3010ulimit -c\u3011\uff0c\u5982\u679c\u7ed3\u679c\u4e3a0\uff0c\u8bf4\u660e\u4e0d\u80fd\u751f\u6210core\u6587\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u90a3\u4e48\u5c31\u8bbe\u7f6ecore\u6587\u4ef6\u7684\u5141\u8bb8\u5927\u5c0f\uff1a\u3010ulimit -c unlimited\u3011\uff0c\u4e5f\u5c31\u662fcore\u6587\u4ef6\u5927\u5c0f\u6ca1\u6709\u9650\u5236\uff0c\u8fd9\u6837\u8bbe\u7f6e\u7684\u597d\u5904\u662f\u5f53core\u6587\u4ef6\u7279\u522b\u5927\u7684\u65f6\u5019\u4e5f\u80fd\u591f\u88ab\u751f\u6210\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u7684\u5927\u5c0f\u3010ulimit -c 1024000\u3011\u7b49\u3002")),Object(b.b)("p",null,"\u4e4b\u540e\u5c31\u6709\u4e86\u4e0b\u9762\u7684\u95ee\u9898\uff1a"),Object(b.b)("p",null,"\u7a0b\u5e8f\u7b2c\u4e00\u6b21\u6267\u884c\u51fa\u4e86","[Segmentation fault]","\u9519\u8bef\u540e\uff0c\u5c31\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a\u540d\u5b57\u4e3a\u3010core\u3011\u7684\u6587\u4ef6\uff0c\u95ee\u9898\u6765\u4e86\uff0c\u5982\u679c\u53c8\u6267\u884c\u4e86\u4e00\u6b21\uff0c\u53c8\u51fa\u4e86","[Segmentation fault]","\u9519\u8bef\u540e\uff0c\u53c8\u4f1a\u751f\u6210\u4e00\u4e2a\u3010core\u3011\uff0c\u8fd9\u6b21\u7684\u3010core\u3011\u5c31\u4f1a\u8986\u76d6\u6389\u4e0a\u6b21\u7684\u3010core\u3011\uff0c\u6240\u4ee5\u5c31\u9700\u8981\u8bbe\u7f6e\u5982\u4f55\u751f\u6210\u3010core\u3011\u7684\u6587\u4ef6\u540d\uff0c\u8fbe\u5230\u6bcf\u6b21\u751f\u6210\u7684\u3010core\u3011\u7684\u540d\u5b57\u90fd\u4e0d\u76f8\u540c\uff0c\u5c31\u4e0d\u4f1a\u8986\u76d6\u6389\u4e0a\u6b21\u7684core\u6587\u4ef6\u4e86\u3002"),Object(b.b)("p",null,"\u9009\u9879\u5982\u4e0b\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"%p\uff1ainsert pid into filename \u6dfb\u52a0pid\n%u\uff1ainsert current uid into filename \u6dfb\u52a0\u5f53\u524d\u7684uid\n%g\uff1ainsert current gid into filename \u6dfb\u52a0\u5f53\u524d\u7684gid\n%s\uff1ainsert signal that caused the coredump into the filename \u6dfb\u52a0\u5bfc\u81f4\u4ea7\u751fcore\u7684\u4fe1\u53f7\n%t\uff1ainsert UNIX time that the coredump occurred into filename \u6dfb\u52a0core\u6587\u4ef6\u751f\u6210\u65f6\u95f4\u7684unix\u65f6\u95f4\n%h\uff1ainsert hostname where the coredump happened into filename \u6dfb\u52a0\u4e3b\u673a\u540d\u5b57\n%e\uff1ainsert coredumping executable name into filename \u6dfb\u52a0\u7a0b\u5e8f\u540d\n")),Object(b.b)("p",null,"\u4fee\u6539\u529e\u6cd5\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5207\u6362\u5230root\u7528\u6237"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-shell"},"sudo su\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7f16\u8f91/proc/sys/kernel/core_pattern\u6587\u4ef6\uff0c\u53ea\u80fd\u7528\u4e0b\u9762\u7684\u65b9\u6cd5"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-shell"},'echo "core-%e-%t" > /proc/sys/kernel/core_pattern\n')),Object(b.b)("p",{parentName:"li"},"\u7136\u540e\u751f\u6210\u7684core\u6587\u4ef6\u7684\u540d\u5b57\u5c31\u53d8\u4e3a\uff1a\u3010core-app-1555987945\u3011\uff0c\u6ce8\u610f\u7a0b\u5e8f\u7684\u540d\u5b57\u4e3aapp\u3002"))),Object(b.b)("p",null,"\u5c06\u65ad\u70b9\u6253\u5230\u67d0\u4e2a\u51fd\u6570\u90a3\u91cc"),Object(b.b)("p",null,"ui_mainloop"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'Type "apropos word" to search for commands related to "word"...\nReading symbols from ./build/x86-nemu-interpreter...done.\n(gdb) break ui_mainloop\nBreakpoint 1 at 0x4da0: file src/monitor/debug/ui.c, line 81.\n(gdb) r\nStarting program: /home/dys/ics2020/nemu/build/x86-nemu-interpreter\n[Thread debugging using libthread_db enabled]\nUsing host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".\n[src/monitor/monitor.c,38,load_img] No image is given. Use the default build-in image.\n[src/monitor/monitor.c,28,welcome] Debug: OFF\n[src/monitor/monitor.c,31,welcome] Build time: 10:05:18, Aug 15 2021\nWelcome to x86-NEMU!\nFor help, type "help"\n\nBreakpoint 1, ui_mainloop () at src/monitor/debug/ui.c:81\n81        if (is_batch_mode()) {\n(gdb)\n')),Object(b.b)("h4",{id:"\u5185\u5b58\u64cd\u4f5c"},"\u5185\u5b58\u64cd\u4f5c"),Object(b.b)("p",null,"\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'   \u250289          /* extract the first token as the command */\n   \u250290          char *cmd = strtok(str, " ");\n   \u250291          if (cmd == NULL) { continue; }\n   \u250292\n   \u250293          /* treat the remaining string as the arguments,\n   \u250294           * which may need further parsing\n   \u250295           */\n   \u250296          char *args = cmd + strlen(cmd) + 1;\n')),Object(b.b)("p",null,"cmd \u7b2c\u4e00\u4e2a\u5b57\u7b26\u6307\u9488\uff0c\u4e5f\u5c31\u662f\u5b57\u7b26\u4e32\u3002"),Object(b.b)("p",null,"*cmd \u662f\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u3002char\u7c7b\u578b\u7684h\uff0c10\u8fdb\u5236\u662f104\uff0c16\u8fdb\u5236\u662f0x68\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"(gdb) p cmd\n$7 = 0x55555d783150 \"help\"\n(gdb) p strlen(cmd)\n$8 = 4\n(gdb) p *cmd\n$9 = 104 'h'\n(gdb) x 0x55555d783150\n0x55555d783150: 0x706c6568\n(gdb) x/d 0x55555d783150\n0x55555d783150: 1886152040\n(gdb) x/db 0x55555d783150\n0x55555d783150: 104\n(gdb) x/xb 0x55555d783150\n0x55555d783150: 0x68\n")),Object(b.b)("p",null,"\u7c7b\u578b\uff1a\u5bf9\u4e00\u6bb5\u5185\u5b58\u7684\u89e3\u8bfb\u65b9\u5f0f\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"C \u7a0b\u5e8f\u6267\u884c\u7684\u4e24\u4e2a\u89c6\u89d2")),Object(b.b)("p",null,"\u9759\u6001\uff1aC \u4ee3\u7801\u7684\u8fde\u7eed\u4e00\u6bb5\u603b\u80fd\u5bf9\u5e94\u5230\u4e00\u6bb5\u8fde\u7eed\u7684\u673a\u5668\u6307\u4ee4"),Object(b.b)("p",null,"\u52a8\u6001\uff1aC \u4ee3\u7801\u6267\u884c\u7684\u72b6\u6001\u603b\u80fd\u5bf9\u5e94\u5230\u673a\u5668\u7684\u72b6\u6001"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\u89c6\u89d2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u51fd\u6570\u3001\u53d8\u91cf\u3001\u6307\u9488\u2026\u2026"))),Object(b.b)("li",{parentName:"ul"},"\u673a\u5668\u6307\u4ee4\u89c6\u89d2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5bc4\u5b58\u5668\u3001\u5185\u5b58\u3001\u5730\u5740\u2026\u2026")))),Object(b.b)("hr",null),Object(b.b)("p",null,"\u4e24\u4e2a\u89c6\u89d2\u7684\u5171\u540c\u4e4b\u5904\uff1a\u5185\u5b58"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7801\u3001\u53d8\u91cf (\u6e90\u4ee3\u7801\u89c6\u89d2) = \u5730\u5740 + \u957f\u5ea6 (\u673a\u5668\u6307\u4ee4\u89c6\u89d2)"),Object(b.b)("li",{parentName:"ul"},"(\u4e0d\u592a\u4e25\u8c28\u5730) \u5185\u5b58 = \u4ee3\u7801 + \u6570\u636e + \u5806\u6808",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u56e0\u6b64\u7406\u89e3 C \u7a0b\u5e8f\u6267\u884c\u6700\u91cd\u8981\u7684\u5c31\u662f\u5185\u5b58\u6a21\u578b")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u4ece ",Object(b.b)("inlineCode",{parentName:"strong"},"main")," \u51fd\u6570\u5f00\u59cb\u6267\u884c")),Object(b.b)("p",null,"\u6807\u51c6\u89c4\u5b9a C \u7a0b\u5e8f\u4ece ",Object(b.b)("inlineCode",{parentName:"p"},"main")," \u5f00\u59cb\u6267\u884c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"(\u601d\u8003\u9898\uff1a\u8c01\u8c03\u7528\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"main"),"\uff1f\u8fdb\u7a0b\u6267\u884c\u7684\u7b2c\u4e00\u6761\u6307\u4ee4\u662f\u4ec0\u4e48\uff1f)")),Object(b.b)("hr",null),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"int main(int argc, char *argv[]);\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"argc (argument count): \u53c2\u6570\u4e2a\u6570"),Object(b.b)("li",{parentName:"ul"},"argv (argument vector): \u53c2\u6570\u5217\u8868 (NULL\u7ed3\u675f)")),Object(b.b)("hr",null),Object(b.b)("p",null,"\u4e0a\u6b21\u8bfe\u5df2\u7ecf\u6f14\u793a\u8fc7"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"ls -al")," (",Object(b.b)("inlineCode",{parentName:"li"},'argc = 2, argv = ["ls", "-al", NULL]'),")")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"main"),", ",Object(b.b)("inlineCode",{parentName:"strong"},"argc")," \u548c ",Object(b.b)("inlineCode",{parentName:"strong"},"argv"))),Object(b.b)("p",null,"\u4e00\u5207\u7686\u53ef\u53d6\u5730\u5740\uff01"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'void printptr(void *p) {\n  printf("p = %p;  *p = %016lx\\n", p, *(long *)p);\n}\nint x;\nint main(int argc, char *argv[]) {\n  printptr(main);  // \u4ee3\u7801\n  printptr(&main);\n  printptr(&x);    // \u6570\u636e\n  printptr(&argc); // \u5806\u6808\n  printptr(argv);\n  printptr(&argv);\n  printptr(argv[0]);\n}\n')),Object(b.b)("p",null,"\u7c7b\u578b\uff1a\u5bf9\u4e00\u6bb5\u5185\u5b58\u7684\u89e3\u8bfb\u65b9\u5f0f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u975e\u5e38 \u201c\u6c47\u7f16\u201d\u2014\u2014\u6ca1\u6709 class, polymorphism, type traits, ..."),Object(b.b)("li",{parentName:"ul"},"C \u91cc\u6240\u6709\u7684\u6570\u636e\u90fd\u53ef\u4ee5\u7406\u89e3\u6210\u662f\u5730\u5740 (\u6307\u9488) + \u7c7b\u578b (\u5bf9\u5730\u5740\u7684\u89e3\u8bfb)")),Object(b.b)("p",null,"\u8fdb\u5165gdb"),Object(b.b)("p",null,"\u8c03\u8bd5\u7a0b\u5e8f\u65f6\uff0c\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5728gdb\u4e0b\u8fd0\u884c\u4f60\u7684\u7a0b\u5e8f\uff1a"),Object(b.b)("p",null,"gdb \u4f60\u7684\u7a0b\u5e8f"),Object(b.b)("p",null,"\u8fdb\u5165gdb\u540e\uff0c\u8f93\u5165run(\u7b80\u5199r) {arg1} {arg2} \u2026 {argN}"),Object(b.b)("p",null,"gdb \u2013args \u4f60\u7684\u7a0b\u5e8f arg1 arg2 \u2026 argN \u8fdb\u5165gdb\u540e\uff0c\u8fd0\u884crun\u3002"),Object(b.b)("p",null,"gdb\u8fdb\u5165gdb\u540e\uff0c\u8f93\u5165file \u4f60\u7684\u7a0b\u5e8f\u3002"),Object(b.b)("p",null,"\u7136\u540e\u4f7f\u7528set args arg1 arg2 \u2026 argN \u8bbe\u5b9a\u597d\u4f60\u7684\u7a0b\u5e8f\u53c2\u6570\uff0c\u518d\u8fd0\u884crun\u3002"),Object(b.b)("p",null,"\u8c03\u8bd5\u6b63\u5728\u8fd0\u884c\u7684\u7a0b\u5e8f\uff1a"),Object(b.b)("p",null,"gdb \u4f60\u7684\u7a0b\u5e8f \u7a0b\u5e8fpid"),Object(b.b)("p",null,"\u67e5core\uff1agdb \u4f60\u7684\u7a0b\u5e8f core\u6587\u4ef6"),Object(b.b)("p",null,"\u9000\u51fagdb"),Object(b.b)("p",null,"\u8f93\u5165quit\u6216\u8005\u6309\u4e0bCtrl-d\u9000\u51fa"),Object(b.b)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300cHonei_X\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC 4.0 BY-SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002\n\u539f\u6587\u94fe\u63a5\uff1a",Object(b.b)("a",{parentName:"p",href:"https://blog.csdn.net/xiongxinlei/article/details/78119714"},"https://blog.csdn.net/xiongxinlei/article/details/78119714")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u8868 10.1. gdb\u57fa\u672c\u547d\u4ee41")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),Object(b.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"backtrace\uff08\u6216bt\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5404\u7ea7\u51fd\u6570\u8c03\u7528\u53ca\u53c2\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"finish"),Object(b.b)("td",{parentName:"tr",align:null},"\u8fde\u7eed\u8fd0\u884c\u5230\u5f53\u524d\u51fd\u6570\u8fd4\u56de\u4e3a\u6b62\uff0c\u7136\u540e\u505c\u4e0b\u6765\u7b49\u5f85\u547d\u4ee4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"frame\uff08\u6216f\uff09 \u5e27\u7f16\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6808\u5e27")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"info\uff08\u6216i\uff09 locals"),Object(b.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5f53\u524d\u6808\u5e27\u5c40\u90e8\u53d8\u91cf\u7684\u503c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"list\uff08\u6216l\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6e90\u4ee3\u7801\uff0c\u63a5\u7740\u4e0a\u6b21\u7684\u4f4d\u7f6e\u5f80\u4e0b\u5217\uff0c\u6bcf\u6b21\u521710\u884c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"list \u884c\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u5217\u51fa\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u7684\u6e90\u4ee3\u7801")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"list \u51fd\u6570\u540d"),Object(b.b)("td",{parentName:"tr",align:null},"\u5217\u51fa\u67d0\u4e2a\u51fd\u6570\u7684\u6e90\u4ee3\u7801")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"next\uff08\u6216n\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u6267\u884c\u4e0b\u4e00\u884c\u8bed\u53e5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"print\uff08\u6216p\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u6253\u5370\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u901a\u8fc7\u8868\u8fbe\u5f0f\u53ef\u4ee5\u4fee\u6539\u53d8\u91cf\u7684\u503c\u6216\u8005\u8c03\u7528\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"quit\uff08\u6216q\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u9000\u51fa",Object(b.b)("inlineCode",{parentName:"td"},"gdb"),"\u8c03\u8bd5\u73af\u5883")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"set var"),Object(b.b)("td",{parentName:"tr",align:null},"\u4fee\u6539\u53d8\u91cf\u7684\u503c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"start"),Object(b.b)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u6267\u884c\u7a0b\u5e8f\uff0c\u505c\u5728",Object(b.b)("inlineCode",{parentName:"td"},"main"),"\u51fd\u6570\u7b2c\u4e00\u884c\u8bed\u53e5\u524d\u9762\u7b49\u5f85\u547d\u4ee4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"step\uff08\u6216s\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u6267\u884c\u4e0b\u4e00\u884c\u8bed\u53e5\uff0c\u5982\u679c\u6709\u51fd\u6570\u8c03\u7528\u5219\u8fdb\u5165\u5230\u51fd\u6570\u4e2d")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u8868 10.2. gdb\u57fa\u672c\u547d\u4ee42")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),Object(b.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"break\uff08\u6216b\uff09 \u884c\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u5728\u67d0\u4e00\u884c\u8bbe\u7f6e\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"break \u51fd\u6570\u540d"),Object(b.b)("td",{parentName:"tr",align:null},"\u5728\u67d0\u4e2a\u51fd\u6570\u5f00\u5934\u8bbe\u7f6e\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"break ... if ..."),Object(b.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"continue\uff08\u6216c\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u4ece\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\u8fde\u7eed\u8fd0\u884c\u7a0b\u5e8f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"delete breakpoints \u65ad\u70b9\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u5220\u9664\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"display \u53d8\u91cf\u540d"),Object(b.b)("td",{parentName:"tr",align:null},"\u8ddf\u8e2a\u67e5\u770b\u67d0\u4e2a\u53d8\u91cf\uff0c\u6bcf\u6b21\u505c\u4e0b\u6765\u90fd\u663e\u793a\u5b83\u7684\u503c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"disable breakpoints \u65ad\u70b9\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u7981\u7528\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enable \u65ad\u70b9\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u542f\u7528\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"info\uff08\u6216i\uff09 breakpoints"),Object(b.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e\u4e86\u54ea\u4e9b\u65ad\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"run\uff08\u6216r\uff09"),Object(b.b)("td",{parentName:"tr",align:null},"\u4ece\u5934\u5f00\u59cb\u8fde\u7eed\u8fd0\u884c\u7a0b\u5e8f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"undisplay \u8ddf\u8e2a\u663e\u793a\u53f7"),Object(b.b)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u8ddf\u8e2a\u663e\u793a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u8868 10.3. gdb\u57fa\u672c\u547d\u4ee43")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),Object(b.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"watch"),Object(b.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u89c2\u5bdf\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"info\uff08\u6216i\uff09 watchpoints"),Object(b.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e\u4e86\u54ea\u4e9b\u89c2\u5bdf\u70b9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x"),Object(b.b)("td",{parentName:"tr",align:null},"\u4ece\u67d0\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u6253\u5370\u5b58\u50a8\u5355\u5143\u7684\u5185\u5bb9\uff0c\u5168\u90e8\u5f53\u6210\u5b57\u8282\u6765\u770b\uff0c\u800c\u4e0d\u533a\u5206\u54ea\u4e2a\u5b57\u8282\u5c5e\u4e8e\u54ea\u4e2a\u53d8\u91cf")))),Object(b.b)("p",null,"\u53c2\u8003\uff1a",Object(b.b)("a",{parentName:"p",href:"https://docs.huihoo.com/c/linux-c-programming/ch10.html"},"https://docs.huihoo.com/c/linux-c-programming/ch10.html")),Object(b.b)("h2",{id:"rtfm"},"RTFM"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"https://www.gnu.org/software/gdb/documentation/"},"GDB: The GNU Project Debugger"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"https://sourceware.org/gdb/current/onlinedocs/gdb/"},"https://sourceware.org/gdb/current/onlinedocs/gdb/")))))}o.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(n),m=a,O=o["".concat(l,".").concat(m)]||o[m]||d[m]||b;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);