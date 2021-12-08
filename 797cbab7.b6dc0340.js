(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(331)),l=["components"],c={},o={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O",id:"\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O",isDocsHomePage:!1,title:"Mach-O",description:"Mach-O",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u8ba1\u7b97\u673a\u7cfb\u7edf\u57fa\u7840/1-\u7a0b\u5e8f/2-\u4e8c\u8fdb\u5236\u683c\u5f0f/Mach-O.md",version:"current"},s=[{value:"Objective-C",id:"objective-c",children:[]},{value:"Mach-O",id:"mach-o-1",children:[{value:"Mach header",id:"mach-header",children:[]},{value:"Load Commands",id:"load-commands",children:[]},{value:"Symbol Table",id:"symbol-table",children:[]},{value:"Dynamic Symbol Table",id:"dynamic-symbol-table",children:[]},{value:"String Table",id:"string-table",children:[]},{value:"otool",id:"otool",children:[]},{value:"\u7b26\u53f7\u751f\u6210\u89c4\u5219",id:"\u7b26\u53f7\u751f\u6210\u89c4\u5219",children:[]},{value:"\u7b26\u53f7\u7684\u79cd\u7c7b",id:"\u7b26\u53f7\u7684\u79cd\u7c7b",children:[]},{value:"\u53ef\u89c1\u6027",id:"\u53ef\u89c1\u6027",children:[]}]},{value:"segments and sections",id:"segments-and-sections",children:[]},{value:"\u5e93\u6587\u4ef6",id:"\u5e93\u6587\u4ef6",children:[]},{value:"C++Static\u53d8\u91cf\u52a0\u8f7d\u95ee\u9898",id:"cstatic\u53d8\u91cf\u52a0\u8f7d\u95ee\u9898",children:[]},{value:"RTFM",id:"rtfm",children:[]}],b={toc:s};function m(e){var t=e.components,c=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"mach-o"},"Mach-O"),Object(i.b)("p",null,"Mach-Object"),Object(i.b)("h1",{id:"\u7b26\u53f7\u8868"},"\u7b26\u53f7\u8868"),Object(i.b)("h3",{id:"objective-c"},"Objective-C"),Object(i.b)("p",null,"The dynamic nature of Objective-C complicates things slightly. Because the code that implements a method is not determined until the method is actually called, Objective-C does not define linker symbols for methods. Linker symbols are only defined for classes."),Object(i.b)("p",null,"For example, if main.m includes the code ",Object(i.b)("inlineCode",{parentName:"p"},"[[FooClass alloc] initWithBar:nil];")," then ",Object(i.b)("inlineCode",{parentName:"p"},"main.o")," will contain an undefined symbol for ",Object(i.b)("inlineCode",{parentName:"p"},"FooClass"),", but no linker symbols for the ",Object(i.b)("inlineCode",{parentName:"p"},"-initWithBar:")," method will be in ",Object(i.b)("inlineCode",{parentName:"p"},"main.o"),"."),Object(i.b)("p",null,'Since categories are a collection of methods, using a category\'s method does not generate an undefined symbol. This means the linker does not know to load an object file defining the category, if the class itself is already defined. This causes the same "selector not recognized" runtime exception you would see for any unimplemented method.'),Object(i.b)("p",null,"\u53c2\u8003\uff1a"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/qa/qa1490/_index.html"},"https://developer.apple.com/library/archive/qa/qa1490/_index.html")),Object(i.b)("p",null,"\u56e0\u4e3a\u5b9e\u73b0\u65b9\u6cd5\u7684\u4ee3\u7801\u76f4\u5230\u65b9\u6cd5\u88ab\u5b9e\u9645\u8c03\u7528\u65f6\u624d\u786e\u5b9a\uff0cObjective-C \u6ca1\u6709\u4e3a\u65b9\u6cd5\u5b9a\u4e49\u94fe\u63a5\u5668\u7b26\u53f7\u3002\u94fe\u63a5\u5668\u7b26\u53f7\u4ec5\u4e3a\u7c7b\u5b9a\u4e49\u3002"),Object(i.b)("p",null,"dys_ios_framework\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/Users/dingyusong/mine/github/dys_ios_framework_staticlib/demo2/dys_ios_framework/dys_ios_framework/DYSFrameWorkClass.h\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework nm -g dys_ios_framework\n\ndys_ios_framework_vers.o:\n0000000000000040 R _dys_ios_frameworkVersionNumber\n0000000000000000 R _dys_ios_frameworkVersionString\n\nDYSFrameWorkClass.o:\n                 U _NSLog\n0000000000000280 T _OBJC_CLASS_$_DYSFrameWorkClass\n                 U _OBJC_CLASS_$_NSObject\n0000000000000258 T _OBJC_METACLASS_$_DYSFrameWorkClass\n                 U _OBJC_METACLASS_$_NSObject\n                 U ___CFConstantStringClassReference\n                 U __objc_empty_cache\n")),Object(i.b)("p",null,"DYSFrameWorkClass.h"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@interface DYSFrameWorkClass : NSObject\n\n+ (void)dys_test;\n- (void)dys_test1;\n@end\n")),Object(i.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u7b26\u53f7\u53ea\u6709\u7c7b\uff0c\u6ca1\u6709\u65b9\u6cd5\u3002\u9a8c\u8bc1\u4e86\u4e0a\u9762\u7684\u65b9\u6cd5\u3002"),Object(i.b)("p",null,"\u6dfb\u52a0\u4e86helloc.c \u548c helloc2.c\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework nm -g dys_ios_framework\n\ndys_ios_framework_vers.o:\n0000000000000040 R _dys_ios_frameworkVersionNumber\n0000000000000000 R _dys_ios_frameworkVersionString\n\nhelloc.o:\n0000000000000000 T _my_c_print\n                 U _printf\n\nhelloc2.o:\n0000000000000000 T _my_c_print_in\n                 U _printf\n\nDYSFrameWorkClass.o:\n                 U _NSLog\n0000000000000280 T _OBJC_CLASS_$_DYSFrameWorkClass\n                 U _OBJC_CLASS_$_NSObject\n0000000000000258 T _OBJC_METACLASS_$_DYSFrameWorkClass\n                 U _OBJC_METACLASS_$_NSObject\n                 U ___CFConstantStringClassReference\n                 U __objc_empty_cache\n                 U _my_c_print_in\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"-g\u6216\u2013extern-only\uff1a\u4ec5\u663e\u793a\u5916\u90e8\u7b26\u53f7\u3002")),Object(i.b)("h2",{id:"mach-o-1"},"Mach-O"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"gcc -g a.c -o a\n")),Object(i.b)("p",null,"\u6ce8\u610f-g\u53c2\u6570\uff0c\u5728\u5176\u4ed6unix\u7cfb\u7edf\u4e2d\uff0c\u901a\u5e38\u5c06\u7b26\u53f7\u4fe1\u606f\u5185\u5d4c\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u4f46\u662f\u5728osx\u4e2d\uff0c\u8fd9\u4e9b\u4fe1\u606f\u90fd\u653e\u5728\u4e00\u4e2a\u8f85\u52a9\u6587\u4ef6dSYM\u4e2d\u3002"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://h3adsh0tzz.com/2020/01/macho-file-format/"},"Mach-O File Format: Introduction")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Performance/Conceptual/CodeFootprint/Articles/MachOOverview.html"},"Overview of the Mach-O Executable Format")),Object(i.b)("h3",{id:"mach-header"},"Mach header"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"//EXTERNAL_HEADERS/mach-o/loader.h\nstruct mach_header {\n        uint32_t            magic;          // mach magic number\n        cpu_type_t          cputype;        // cpu specifier\n        cpu_subtype_t       cpusubtype;     // cpu subtype specifier\n        uint32_t            filetype;       // type of mach-o e.g. exec, dylib ...\n        uint32_t            ncmds;          // number of load commands\n        uint32_t            sizeofcmds;     // size of load command region\n        uint32_t            flags;          // flags\n        uint32_t            reserved;       // *64-bit only* reserved\n    };\n    \n/* Constant for the magic field of the mach_header_64 (64-bit architectures) */\n#define MH_MAGIC_64 0xfeedfacf /* the 64-bit mach magic number */\n#define MH_CIGAM_64 0xcffaedfe /* NXSwapInt(MH_MAGIC_64) */\n\n\n\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework otool -h dys_ios_framework \ndys_ios_framework:\nMach header\n      magic  cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags\n 0xfeedfacf 16777228          0  0x00           6    21       2536 0x00100085\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210818153407343",src:n(609).default})),Object(i.b)("h3",{id:"load-commands"},"Load Commands"),Object(i.b)("p",null,"\u52a0\u8f7d\u547d\u4ee4\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"header\u4e2d\u8fd9\u4e24\u4e2a\u5b57\u6bb5\uff0c\u662f\u5173\u4e8e\u52a0\u8f7d\u7684\u3002\nuint32_t            ncmds;          // number of load commands\nuint32_t            sizeofcmds;     // size of load command region\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"   struct load_command {\n        uint32_t      cmd;      // type of load command\n        uint32_t      cmdsize;    // size of load command\n    };\n")),Object(i.b)("h3",{id:"symbol-table"},"Symbol Table"),Object(i.b)("p",null,"\u7b26\u53f7\u8868\u5b58\u50a8\u4e86\u5f53\u524d\u6587\u4ef6\u7684\u7b26\u53f7\u4fe1\u606f\uff0c\u9759\u6001\u94fe\u63a5\u5668(ld)\u548c\u52a8\u6001\u94fe\u63a5\u5668(dyld)\u5728\u94fe\u63a5\u7684\u8fc7\u7a0b\u4e2d\u90fd\u4f1a\u8bfb\u53d6\u7b26\u53f7\u8868\uff0c\u53e6\u5916\u8c03\u8bd5\u5668\u4e5f\u4f1a\u7528\u7b26\u53f7\u8868\u6765\u628a\u7b26\u53f7\u6620\u5c04\u5230\u6e90\u6587\u4ef6\u3002"),Object(i.b)("p",null,".symtab\u7b26\u53f7\u8868\u4e0d\u5305\u542b\u5c40\u90e8\u53d8\u91cf\u7684\u6761\u76ee\u3002"),Object(i.b)("h3",{id:"dynamic-symbol-table"},"Dynamic Symbol Table"),Object(i.b)("p",null,"\u4f7f\u7528 ",Object(i.b)("strong",{parentName:"p"},"*otool","*"," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u52a8\u6001\u7b26\u53f7\u8868\u4e2d\u7684\u7b26\u53f7\u4f4d\u4e8e\u7b26\u53f7\u8868\u4e2d\u7684\u4e0b\u6807\u3002\u56e0\u6b64\u52a8\u6001\u7b26\u53f7\u4e5f\u53eb\u505a ","*","*","*","Indirect symbols","*","\u3002","*","*")),Object(i.b)("p",null,"***","*","\u52a8\u6001\u7b26\u53f7\u8868\uff0c","*","*","*","Dynamic Symbol Table","*"," \uff0c\u5176\u4e2d ","*","*","*","\u4ec5\u5b58\u50a8\u4e86\u7b26\u53f7\u4f4d\u4e8eSymbol Table\u4e2d\u7684\u4e0b\u6807","*"," \uff0c\u800c\u975e\u7b26\u53f7\u6570\u636e\u7ed3\u6784\uff0c\u56e0\u4e3a\u7b26\u53f7\u7684\u7ed3\u6784\u4ec5\u5b58\u50a8\u5728 ","*","*","*","Symbol Table","*"," \u800c\u5df2\u3002","*","*","*","*"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210817172804282",src:n(610).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210817172203838",src:n(611).default})),Object(i.b)("h3",{id:"string-table"},"String Table"),Object(i.b)("p",null,"\u4e8c\u8fdb\u5236\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u4e32\u90fd\u5b58\u50a8\u5728 ","*","*","*","String Table","*"," \u4e2d\u3002","*","*","*","*","*","***"),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(612).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210817172107039",src:n(613).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210817172356296",src:n(614).default})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework strings dys_ios_framework\n")),Object(i.b)("h3",{id:"otool"},"otool"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework otool --help\nerror: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/otool: unknown char `-' in flag --help\n\nUsage: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/otool [-arch arch_type] [-fahlLDtdorSTMRIHGvVcXmqQjCP] [-mcpu=arg] [--version] <object file> ...\n        -f print the fat headers\n        -a print the archive header\n        -h print the mach header\n        -l print the load commands\n        -L print shared libraries used\n        -D print shared library id name\n        -t print the text section (disassemble with -v)\n        -x print all text sections (disassemble with -v)\n        -p <routine name>  start dissassemble from routine name\n        -s <segname> <sectname> print contents of section\n        -d print the data section\n        -o print the Objective-C segment\n        -r print the relocation entries\n        -S print the table of contents of a library (obsolete)\n        -T print the table of contents of a dynamic shared library (obsolete)\n        -M print the module table of a dynamic shared library (obsolete)\n        -R print the reference table of a dynamic shared library (obsolete)\n        -I print the indirect symbol table\n        -H print the two-level hints table (obsolete)\n        -G print the data in code table\n        -v print verbosely (symbolically) when possible\n        -V print disassembled operands symbolically\n        -c print argument strings of a core file\n        -X print no leading addresses or headers\n        -m don't use archive(member) syntax\n        -B force Thumb disassembly (ARM objects only)\n        -q use llvm's disassembler (the default)\n        -Q use otool(1)'s disassembler\n        -mcpu=arg use `arg' as the cpu for disassembly\n        -j print opcode bytes\n        -P print the info plist section as strings\n        -C print linker optimization hints\n        --version print the version of /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/otool\n\u279c  dys_ios_framework.framework \n")),Object(i.b)("p",null,"-I print the indirect symbol table"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  dys_ios_framework.framework otool -I dys_ios_framework \ndys_ios_framework:\nIndirect symbols for (__TEXT,__stubs) 2 entries\naddress            index\n0x0000000000007e70    58 \n0x0000000000007e7c    63 \nIndirect symbols for (__DATA_CONST,__got) 1 entries\naddress            index\n0x0000000000008000    64 \nIndirect symbols for (__DATA,__la_symbol_ptr) 2 entries\naddress            index\n0x000000000000c000    58 \n0x000000000000c008    63 \n\u279c  dys_ios_framework.framework \n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210817173651023",src:n(615).default})),Object(i.b)("h3",{id:"\u7b26\u53f7\u751f\u6210\u89c4\u5219"},"\u7b26\u53f7\u751f\u6210\u89c4\u5219"),Object(i.b)("h4",{id:"c\u8bed\u8a00"},"C\u8bed\u8a00"),Object(i.b)("p",null,"C\u7684\u7b26\u53f7\u751f\u6210\u89c4\u5219\u6bd4\u8f83\u7b80\u5355\uff0c\u4e00\u822c\u7684\u7b26\u53f7\u90fd\u662f\u5728\u51fd\u6570\u540d\u4e0a\u52a0\u4e0a\u4e0b\u5212\u7ebf\uff0c\u6bd4\u5982main.c\u91cc\u5305\u542bmian\u548cmylog\u4e24\u4e2aC\u51fd\u6570\uff0c\u5bf9\u5e94\u7b26\u53f7\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  link-test nm a.o\n0000000000000000 T _foo\n\u279c  link-test nm b.o\n0000000000000000 D _x\n0000000000000004 D _y\n\u279c  link-test nm a.out\n0000000100008008 d __dyld_private\n0000000100000000 T __mh_execute_header\n0000000100003f10 T _foo\n0000000100003f30 T _main\n                 U _printf\n0000000100008010 D _x\n0000000100008014 D _y\n                 U dyld_stub_binder\n")),Object(i.b)("h4",{id:"c"},"C++"),Object(i.b)("p",null,"C++\u56e0\u4e3a\u652f\u6301\u547d\u540d\u7a7a\u95f4\uff0c\u51fd\u6570\u91cd\u8f7d\u7b49\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3a\u4e86\u907f\u514d\u7b26\u53f7\u51b2\u7a81\uff0c\u6240\u4ee5\u7f16\u8bd1\u5668\u5bf9C++\u7b26\u53f7\u505a\u4e86Symbol Mangling(\u4e0d\u540c\u7f16\u8bd1\u5668\u7684\u89c4\u5219\u4e0d\u4e00\u6837)\u3002"),Object(i.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"namespace MyNameSpace {\n    class MyClass{\n    public:\n        static int myFunc(int);\n        static double myFunc(double);\n    };\n}\n")),Object(i.b)("p",null,"\u7f16\u8bd1\u540e\uff0c\u5206\u522b\u5bf9\u5e94\u7b26\u53f7"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"0000000000000008 T __ZN11MyNameSpace7MyClass6myFuncEd\n0000000000000000 T __ZN11MyNameSpace7MyClass6myFuncEi\n")),Object(i.b)("p",null,"\u5176\u5b9e\uff0cSymbol Mangling\u89c4\u5219\u5e76\u4e0d\u96be\uff0c\u521a\u521a\u7684\u4e24\u4e2a\u7b26\u53f7\u662f\u6309\u7167\u5982\u4e0b\u89c4\u5219\u751f\u6210\u7684\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4ee5_Z\u5f00\u5934"),Object(i.b)("li",{parentName:"ul"},"\u8ddf\u7740C\u8bed\u8a00\u7684\u4fdd\u7559\u5b57\u7b26\u4e32N"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8enamespace\u7b49\u5d4c\u5957\u7684\u540d\u79f0\uff0c\u63a5\u4e0b\u4f9d\u6b21\u62fc\u63a5\u540d\u79f0\u957f\u5ea6\uff0c\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},"\u7136\u540e\u662f\u7ed3\u675f\u5b57\u7b26E"),Object(i.b)("li",{parentName:"ul"},"\u6700\u540e\u662f\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u6bd4\u5982int\u662fi\uff0cdouble\u662fd")),Object(i.b)("h4",{id:"objective-c-1"},"Objective C"),Object(i.b)("p",null,"Objective C\u7684\u7b26\u53f7\u66f4\u7b80\u5355\u4e00\u4e9b\uff0c\u6bd4\u5982\u65b9\u6cd5\u7684\u7b26\u53f7\u662f",Object(i.b)("inlineCode",{parentName:"p"},"+-[Class_name(category_name) method:name:]"),"\uff0c\u9664\u4e86\u8fd9\u4e9b\uff0cObjective C\u8fd8\u4f1a\u751f\u6210\u4e00\u4e9bRuntime\u5143\u6570\u636e\u7684\u7b26\u53f7"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                 U _OBJC_CLASS_$_BTDRouteBuilder\n                 U _OBJC_CLASS_$_BTDRouter\n                 U _OBJC_CLASS_$_UIViewController\n0000000000000458 S _OBJC_CLASS_$_ViewController\n                 U _OBJC_METACLASS_$_NSObject\n                 U _OBJC_METACLASS_$_UIViewController\n0000000000000480 S _OBJC_METACLASS_$_ViewController\n")),Object(i.b)("p",null,"\u6240\u4ee5\u5f53\u94fe\u63a5\u7684\u65f6\u5019\u7c7b\u627e\u4e0d\u5230\u4e86\uff0c\u4f1a\u62a5\u9519\u7b26\u53f7","*","OBJC_CLASS","*","$_CLASSNAME\u627e\u4e0d\u5230"),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:n(616).default})),Object(i.b)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u7c7b\u7684\u7b26\u53f7\u6ca1\u6709\u88ab\u88c1\u51cf\u6389\uff0c\u8fd0\u884c\u65f6\u5c31\u7528","*","OBJC_CLASS","*","$_CLASSNAME\u4f5c\u4e3a\u53c2\u6570\uff0c\u901a\u8fc7dlsym\u6765\u83b7\u53d6\u7c7b\u6307\u9488\u3002"),Object(i.b)("h3",{id:"\u7b26\u53f7\u7684\u79cd\u7c7b"},"\u7b26\u53f7\u7684\u79cd\u7c7b"),Object(i.b)("p",null,"\u6309\u7167\u4e0d\u540c\u7684\u65b9\u5f0f\u53ef\u4ee5\u5bf9\u7b26\u53f7\u8fdb\u884c\u4e0d\u540c\u7684\u5206\u7c7b\uff0c\u6bd4\u5982\u6309\u7167\u53ef\u89c1\u6027\u5212\u5206"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5168\u5c40\u7b26\u53f7(Global Symbol) \u5bf9\u5176\u4ed6\u7f16\u8bd1\u5355\u5143\u53ef\u89c1"),Object(i.b)("li",{parentName:"ul"},"\u672c\u5730\u7b26\u53f7(Local Symbol) \u53ea\u5bf9\u5f53\u524d\u7f16\u8bd1\u5355\u5143\u53ef\u89c1")),Object(i.b)("p",null,"\u6309\u7167\u4f4d\u7f6e\u5212\u5206"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5916\u90e8\u7b26\u53f7\uff0c\u7b26\u53f7\u4e0d\u5728\u5f53\u524d\u6587\u4ef6\uff0c\u9700\u8981ld\u6216\u8005dyld\u5728\u94fe\u63a5\u7684\u65f6\u5019\u89e3\u51b3"),Object(i.b)("li",{parentName:"ul"},"\u975e\u5916\u90e8\u7b26\u53f7\uff0c\u5373\u5f53\u524d\u6587\u4ef6\u5185\u7684\u7b26\u53f7")),Object(i.b)("p",null,"nm\u547d\u4ee4\u91cc\u7684\u5c0f\u5199\u5b57\u6bcd\u5bf9\u5e94\u7740\u672c\u5730\u7b26\u53f7\uff0c\u5927\u5199\u5b57\u6bcd\u8868\u793a\u5168\u5c40\u7b26\u53f7\uff1bU\u8868\u793aundefined\uff0c\u5373\u672a\u5b9a\u4e49\u7684\u5916\u90e8\u7b26\u53f7"),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:n(617).default})),Object(i.b)("h3",{id:"\u53ef\u89c1\u6027"},"\u53ef\u89c1\u6027"),Object(i.b)("p",null,"\u6709\u4e2a\u5f88\u5e38\u89c1\u7684case\uff0c\u5c31\u662f\u4f60\u67091000\u4e2a\u51fd\u6570\uff0c\u4f46\u53ea\u670910\u4e2a\u51fd\u6570\u662f\u516c\u5f00\u7684\uff0c\u5e0c\u671b\u6700\u540e\u751f\u6210\u7684\u52a8\u6001\u5e93\u91cc\u4e0d\u5305\u542b\u5176\u4ed6990\u4e2a\u51fd\u6570\u7684\u7b26\u53f7\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u7528clang\u7684attribute\u6765\u5b9e\u73b0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'//\u7b26\u53f7\u53ef\u88ab\u5916\u90e8\u94fe\u63a5\n__attribute__((visibility("default")))\n//\u7b26\u53f7\u4e0d\u4f1a\u88ab\u653e\u5230Dynamic Symbol Table\u91cc\uff0c\u610f\u5473\u7740\u4e0d\u53ef\u4ee5\u518d\u88ab\u5176\u4ed6\u7f16\u8bd1\u5355\u5143\u94fe\u63a5\n__attribute__((visibility("hidden")))\n')),Object(i.b)("p",null,"clang\u6765\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u7684\u5f00\u5173\uff0c\u7528\u6765\u8bbe\u7f6e\u7b26\u53f7\u7684\u9ed8\u8ba4\u53ef\u89c1\u6027\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:n(618).default})),Object(i.b)("p",null,"\u63a7\u5236\u7b26\u53f7\u7684\u53ef\u89c1\u6027"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/CppRuntimeEnv/Articles/SymbolVisibility.html#//apple_ref/doc/uid/TP40001670-CJBGBHEJ"},"Apple\uff1a Controlling Symbol Visibility")),Object(i.b)("h2",{id:"segments-and-sections"},"segments and sections"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210819164759981",src:n(619).default})),Object(i.b)("p",null,"\u6bb5\uff08segment\uff09\u6709\u65f6\u5019\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5206\u89e3\u4e3a\u533a\uff08section\uff09\u3002"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210819162807327",src:n(620).default})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  mach-o size dys_ios_framework_demo\n__TEXT  __DATA  __OBJC  others  dec     hex\n32768   16384   0       4295016448      4295065600      100018000\n")),Object(i.b)("p",null,"\u6587\u4ef6\u5934\uff0c\u4ee3\u7801\u6bb5\uff0c\u6570\u636e\u6bb5\uff0c\u7b26\u53f7\u8868\u7b49\u5176\u4ed6\u4fe1\u606f"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210819173553884",src:n(621).default})),Object(i.b)("p",null,"section\u4e3b\u8981\u63d0\u4f9b\u7ed9Linker\u4f7f\u7528\uff0c \u800csegment\u63d0\u4f9b\u7ed9Loader\u7528\uff0cLinker\u9700\u8981\u5173\u5fc3.text, .rel.text, .data, .rodata\u7b49\u7b49\uff0c\u5173\u952e\u662fLinker\u9700\u8981\u505arelocation\u3002\u800cLoader\u53ea\u9700\u8981\u77e5\u9053Read/Write/Execute\u7684\u5c5e\u6027\u3002"),Object(i.b)("p",null,"\u53c2\u8003:",Object(i.b)("a",{parentName:"p",href:"https://www.cnblogs.com/feng9exe/p/6899136.html"},"https://www.cnblogs.com/feng9exe/p/6899136.html")),Object(i.b)("p",null,"\u53c2\u8003:",Object(i.b)("a",{parentName:"p",href:"http://rk700.github.io/2014/10/26/ELF-segments-and-sections/"},"ELF segments and sections")),Object(i.b)("h2",{id:"\u5e93\u6587\u4ef6"},"\u5e93\u6587\u4ef6"),Object(i.b)("p",null,"\u751f\u6210\u5e93\u6587\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"libtool -static -o libmylib.a add.o\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 vi main.c\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 clang main.c add.c\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 ./a.out\nadd(3,3)=6\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 clang -c add.c\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 ll\ntotal 136\n-rwxr-xr-x  1 Ding  staff    48K 10  6 21:49 a.out\n-rw-r--r--  1 Ding  staff    40B 10  6 21:46 add.c\n-rw-r--r--  1 Ding  staff    22B 10  6 21:45 add.h\n-rw-r--r--  1 Ding  staff   624B 10  6 21:49 add.o\n-rw-r--r--  1 Ding  staff   118B 10  6 21:49 main.c\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 libtool -static -o libmyadd.a add.o\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 ll\ntotal 144\n-rwxr-xr-x  1 Ding  staff    48K 10  6 21:49 a.out\n-rw-r--r--  1 Ding  staff    40B 10  6 21:46 add.c\n-rw-r--r--  1 Ding  staff    22B 10  6 21:45 add.h\n-rw-r--r--  1 Ding  staff   624B 10  6 21:49 add.o\n-rw-r--r--  1 Ding  staff   808B 10  6 21:50 libmyadd.a\n-rw-r--r--  1 Ding  staff   118B 10  6 21:49 main.c\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 clang -g -o main main.c -I . -L . -l myadd\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 ll\ntotal 248\n-rwxr-xr-x  1 Ding  staff    48K 10  6 21:49 a.out\n-rw-r--r--  1 Ding  staff    40B 10  6 21:46 add.c\n-rw-r--r--  1 Ding  staff    22B 10  6 21:45 add.h\n-rw-r--r--  1 Ding  staff   624B 10  6 21:49 add.o\n-rw-r--r--  1 Ding  staff   808B 10  6 21:50 libmyadd.a\n-rwxr-xr-x  1 Ding  staff    49K 10  6 21:51 main\n-rw-r--r--  1 Ding  staff   118B 10  6 21:49 main.c\ndrwxr-xr-x  3 Ding  staff    96B 10  6 21:51 main.dSYM\n\u279c  /Users/Ding/mine/gitee/clab/compile-as-ld/04-static-lib git:(master) \u2717 ./main\nadd(3,3)=6\n")),Object(i.b)("h2",{id:"cstatic\u53d8\u91cf\u52a0\u8f7d\u95ee\u9898"},"C++Static\u53d8\u91cf\u52a0\u8f7d\u95ee\u9898"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20211105164810704",src:n(622).default})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Other Linker Flags \u6dfb\u52a0-all_load \u53ef\u4ee5\u89e3\u51b3\uff01"),Object(i.b)("li",{parentName:"ol"},"\u751f\u6210\u4e34\u65f6\u53d8\u91cf\u4e5f\u53ef\u4ee5\u89e3\u51b3\uff01")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"IRZLogan* CreateRZLogan(const LoganConfig* cfg) {\n    RZTransportationHttp module1;\n    RZFileStorage module2;\n//    RZCompressZlib module3;\n    RZControlFlowV1 module4;\n    RZEncryptionV1 module5;\n    RZFileNode module6;\n    LoganConfig* newCfg = (LoganConfig*)cfg;\n    if (!checkConfig(newCfg)) {\n        assert(0);\n        return nullptr;\n    }\n\n    return new RZLoganV1(*newCfg);\n}\n")),Object(i.b)("h2",{id:"rtfm"},"RTFM"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/technotes/tn2206/_index.html"},"[1] Apple Technical Note - TN2206: Mac OS X Code Signing In Depth")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.nextop.de/NeXTstep_3.3_Developer_Documentation/DevTools/14_MachO/MachO.htmld/index.html"},'[2] NeXTSTEP 3,3 DevTools documentation, Chapter 14, Mach Object Files" -- Documents the\noriginal Mach-O format (which remains largely unchanged in OS X).')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.cs.miami.edu/home/burt/learning/Csc521.091/docs/MachOTopics.pdf"},"[3] Apple Developer: Mach-O Programming Topics - - Basic architecture and loading")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/aidansteele/osx-abi-macho-file-format-reference"},"[4] Apple Developer: Mac OS x ABI Mach-O File Format Reference -- Discussion on load commands")),Object(i.b)("li",{parentName:"ul"},"[5]"," Dream Team Absinthe and Corona Jailbreaks for iOS 5.0.l: ",Object(i.b)("a",{parentName:"li",href:"http://onference.hitb.org/hitbsecconf2012ams/materials/"},"http://onference.hitb.org/hitbsecconf2012ams/materials/")),Object(i.b)("li",{parentName:"ul"},"[6]"," Apple Developer: Memory Management- Discusses memory management from the user mode perspective"),Object(i.b)("li",{parentName:"ul"},"[7]"," Apple Developer: Grand Central Dispatcher Reference"),Object(i.b)("li",{parentName:"ul"},"[8]"," Apple Developer: Concurrency Programming Guide"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/Performance/Conceptual/CodeFootprint/Articles/MachOOverview.html"},"Apple Developer:Overview of the Mach-O Executable Format")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.nextop.de/NeXTstep_3.3_Developer_Documentation/"},"https://www.nextop.de/NeXTstep_3.3_Developer_Documentation/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.nextop.de/"},"https://www.nextop.de/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/MachOTopics/0-Introduction/introduction.html#//apple_ref/doc/uid/TP40001519"},"Mach-O Programming Topics"))))}m.isMDXComponent=!0},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},609:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210818153407343-1379df3a7f30768ac1d14903a7f9baaf.png"},610:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210817172804282-7599e91265cb45f110a9fbeb9228a556.png"},611:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210817172203838-76ea04ff6e826509b5f944461ca4dba1.png"},612:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17231f081b953bf4~tplv-t2oaga2asx-watermark-e9c2fc748948b0a99a4b1fb2e40f3b2f.awebp"},613:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210817172107039-c1487f2ec5b85b97689e4acf4ec56e0c.png"},614:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210817172356296-39e9ae1d1b04f39245d9682f23d2f794.png"},615:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210817173651023-1d1fc1b15cafe895d2231f6af4ff9ceb.png"},616:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20191130225957319-3877695318309d16b4a3256be9bb46c7.png"},617:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9sZW9tb2JpbGVkZXZlbG9wZXIuYmxvZy5jc2RuLm5ldA==,size_16,color_FFFFFF,t_70-1ef08279f0a31d06741bb2d5e87d98e9.png"},618:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-2bb401d8c4f16c284117bd8eca376271.png"},619:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210819164759981-7dfbf97a69aa778c57fd9dbaf1f837f0.png"},620:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210819162807327-2c79c16a9b5bdfe72255057831d99690.png"},621:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20210819173553884-f7263539ae0e5ff5208823f5c019035a.png"},622:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image-20211105164810704-0a43f711e4c1917f91fc062a36bdee95.png"}}]);