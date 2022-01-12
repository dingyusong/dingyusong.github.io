(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),b=t(7),l=(t(0),t(356)),a=["components"],c={},p={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5",id:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5",isDocsHomePage:!1,title:"\u7b97\u6cd5\u9762\u8bd5",description:"\u7b2c\u5341\u4e00\u7ae0\uff1a\u8bfe\u7a0b\u7ed3\u8bed",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5.md",version:"current"},i=[{value:"\u7b2c\u5341\u4e00\u7ae0\uff1a\u8bfe\u7a0b\u7ed3\u8bed",id:"\u7b2c\u5341\u4e00\u7ae0\uff1a\u8bfe\u7a0b\u7ed3\u8bed",children:[]},{value:"\u6570\u5b66",id:"\u6570\u5b66",children:[]},{value:"\u4f4d\u8fd0\u7b97",id:"\u4f4d\u8fd0\u7b97",children:[]},{value:"\u5e76\u67e5\u96c6",id:"\u5e76\u67e5\u96c6",children:[]},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",children:[]},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]}],o={toc:i};function u(e){var n=e.components,t=Object(b.a)(e,a);return Object(l.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:""}),Object(l.b)("h2",{id:"\u7b2c\u5341\u4e00\u7ae0\uff1a\u8bfe\u7a0b\u7ed3\u8bed"},"\u7b2c\u5341\u4e00\u7ae0\uff1a\u8bfe\u7a0b\u7ed3\u8bed"),Object(l.b)("p",null,"11-1 \u7ed3\u8bed\t"),Object(l.b)("h2",{id:"\u6570\u5b66"},"\u6570\u5b66"),Object(l.b)("h4",{id:"9-\u56de\u6587\u6570"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/palindrome-number/"},"9. \u56de\u6587\u6570")),Object(l.b)("p",null,"\u89e3\u6cd51\uff1a\u5b57\u7b26\u4e32\u7ffb\u8f6c"),Object(l.b)("p",null,"\u89e3\u6cd52\uff1a\u53d6\u4f59\uff0c\u76f8\u9664\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def isPalindrome(self, x):\n        """\n        :type x: int\n        :rtype: bool\n        """\n        #\u7279\u6b8a\u60c5\u51b5\u5904\u7406\n        #1. \u8d1f\u6570\u4e0d\u53ef\u80fd\u56de\u6587 2. \u5c3e\u6570\u4e3a0\u7684\u6570\u5b57\uff0c\u5982\u679c\u4e0d\u662f0 \u5219\u4e5f\u4e0d\u53ef\u80fd\u56de\u6587\n        if x < 0 or (x%10 == 0 and x != 0):\n            return False\n        \n        revertedNumber = 0\n        #\u4f4d\u6570\u8d85\u8fc7\u4e00\u534a\n        while x > revertedNumber:\n            revertedNumber = revertedNumber*10 + x%10\n            x = x//10\n        \n        #\u6570\u5b57\u957f\u5ea6\u4e3a\u5947\u6570\u65f6,revertedNumber \u5305\u542b\u4e86\u4e2d\u95f4\u7684\u90a3\u4f4d\u6570\uff0c\u9700\u8981\u9664\u4ee510\u5904\u7406\u6389 \u5982\u679c\u662f\u5076\u6570\u5219\u667e\u7740\u4f4d\u6570\u76f8\u7b49\uff0c\u4e0d\u7528\u5904\u7406\n        return x == revertedNumber or x == revertedNumber//10\n')),Object(l.b)("h4",{id:"292-nim-\u6e38\u620f"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/nim-game/"},"292. Nim \u6e38\u620f")),Object(l.b)("p",null,"\u96be\u5ea6\u7b80\u5355348\u6536\u85cf\u5206\u4eab\u5207\u6362\u4e3a\u82f1\u6587\u5173\u6ce8\u53cd\u9988"),Object(l.b)("p",null,"\u4f60\u548c\u4f60\u7684\u670b\u53cb\uff0c\u4e24\u4e2a\u4eba\u4e00\u8d77\u73a9 ",Object(l.b)("a",{parentName:"p",href:"https://baike.baidu.com/item/Nim%E6%B8%B8%E6%88%8F/6737105"},"Nim \u6e38\u620f"),"\uff1a\u684c\u5b50\u4e0a\u6709\u4e00\u5806\u77f3\u5934\uff0c\u6bcf\u6b21\u4f60\u4eec\u8f6e\u6d41\u62ff\u6389 1 - 3 \u5757\u77f3\u5934\u3002 \u62ff\u6389\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u4eba\u5c31\u662f\u83b7\u80dc\u8005\u3002\u4f60\u4f5c\u4e3a\u5148\u624b\u3002"),Object(l.b)("p",null,"\u4f60\u4eec\u662f\u806a\u660e\u4eba\uff0c\u6bcf\u4e00\u6b65\u90fd\u662f\u6700\u4f18\u89e3\u3002 \u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u6765\u5224\u65ad\u4f60\u662f\u5426\u53ef\u4ee5\u5728\u7ed9\u5b9a\u77f3\u5934\u6570\u91cf\u7684\u60c5\u51b5\u4e0b\u8d62\u5f97\u6e38\u620f\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b:"),"   "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 4\n\u8f93\u51fa: false \n\u89e3\u91ca: \u5982\u679c\u5806\u4e2d\u6709 4 \u5757\u77f3\u5934\uff0c\u90a3\u4e48\u4f60\u6c38\u8fdc\u4e0d\u4f1a\u8d62\u5f97\u6bd4\u8d5b\uff1b\n     \u56e0\u4e3a\u65e0\u8bba\u4f60\u62ff\u8d70 1 \u5757\u30012 \u5757 \u8fd8\u662f 3 \u5757\u77f3\u5934\uff0c\u6700\u540e\u4e00\u5757\u77f3\u5934\u603b\u662f\u4f1a\u88ab\u4f60\u7684\u670b\u53cb\u62ff\u8d70\u3002\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def canWinNim(self, n):\n        """\n        :type n: int\n        :rtype: bool\n        """\n        if(n % 4 == 0): \n            return False\n        else:\n            return True;\n\n')),Object(l.b)("h4",{id:"7-\u6574\u6570\u53cd\u8f6c"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/reverse-integer/"},"7. \u6574\u6570\u53cd\u8f6c")),Object(l.b)("p",null,"\u96be\u5ea6\u7b80\u53552088"),Object(l.b)("p",null,"\u7ed9\u51fa\u4e00\u4e2a 32 \u4f4d\u7684\u6709\u7b26\u53f7\u6574\u6570\uff0c\u4f60\u9700\u8981\u5c06\u8fd9\u4e2a\u6574\u6570\u4e2d\u6bcf\u4f4d\u4e0a\u7684\u6570\u5b57\u8fdb\u884c\u53cd\u8f6c\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 123\n\u8f93\u51fa: 321\n")),Object(l.b)("p",null," ",Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: -123\n\u8f93\u51fa: -321\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 120\n\u8f93\u51fa: 21\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f:")),Object(l.b)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u73af\u5883\u53ea\u80fd\u5b58\u50a8\u5f97\u4e0b 32 \u4f4d\u7684\u6709\u7b26\u53f7\u6574\u6570\uff0c\u5219\u5176\u6570\u503c\u8303\u56f4\u4e3a ","[\u2212231, 231 \u2212 1]","\u3002\u8bf7\u6839\u636e\u8fd9\u4e2a\u5047\u8bbe\uff0c\u5982\u679c\u53cd\u8f6c\u540e\u6574\u6570\u6ea2\u51fa\u90a3\u4e48\u5c31\u8fd4\u56de 0\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'class Solution:\n    def reverse(self, x):\n        """\n        :type x: int\n        :rtype: int\n        """ \n        mUnit = 1\n        if x < 0:\n            mUnit = -1\n        \n        #\u6570\u5b57\u62c6\u5206\u4e3a\u6570\u7ec4\n        x = abs(x)                \n        numList = []\n        while x:\n            k = x%10\n            numList.append(k)\n            x = x//10\n            \n        #\u5012\u5e8f\u76f8\u4e58\n        unit = 1\n        num = 0\n        while len(numList):\n            num += numList.pop() * unit\n            unit *= 10\n            \n        if -2**31 < num*mUnit < 2**31-1:\n            return num*mUnit\n    \n        return 0\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"class Solution {\n    public int reverse(int x) {\n        int res = 0;\n        while(x!=0) {\n            //\u6bcf\u6b21\u53d6\u672b\u5c3e\u6570\u5b57\n            int tmp = x%10;\n            //\u5224\u65ad\u662f\u5426 \u5927\u4e8e \u6700\u592732\u4f4d\u6574\u6570\n            if (res>214748364 || (res==214748364 && tmp>7)) {\n                return 0;\n            }\n            //\u5224\u65ad\u662f\u5426 \u5c0f\u4e8e \u6700\u5c0f32\u4f4d\u6574\u6570\n            if (res<-214748364 || (res==-214748364 && tmp<-8)) {\n                return 0;\n            }\n            res = res*10 + tmp;\n            x /= 10;\n        }\n        return res;\n    }\n}           \n\n\u4f5c\u8005\uff1awang_ni_ma\n\u94fe\u63a5\uff1ahttps://leetcode-cn.com/problems/reverse-integer/solution/tu-jie-7-zheng-shu-fan-zhuan-by-wang_ni_ma/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n")),Object(l.b)("p",null,"\u53d6\u4f59\u53cd\u5411\u5faa\u73af\u3002\u6700\u503c\u5904\u7406\u3002"),Object(l.b)("h4",{id:"238-\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/product-of-array-except-self/"},"238. \u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef")),Object(l.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",Object(l.b)("em",{parentName:"p"},"n")," \u7684\u6574\u6570\u6570\u7ec4 ",Object(l.b)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u5176\u4e2d ",Object(l.b)("em",{parentName:"p"},"n")," > 1\uff0c\u8fd4\u56de\u8f93\u51fa\u6570\u7ec4 ",Object(l.b)("inlineCode",{parentName:"p"},"output")," \uff0c\u5176\u4e2d ",Object(l.b)("inlineCode",{parentName:"p"},"output[i]")," \u7b49\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"nums")," \u4e2d\u9664 ",Object(l.b)("inlineCode",{parentName:"p"},"nums[i]")," \u4e4b\u5916\u5176\u4f59\u5404\u5143\u7d20\u7684\u4e58\u79ef\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: [1,2,3,4]\n\u8f93\u51fa: [24,12,8,6]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a"),"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u6570\u7ec4\u4e4b\u4e2d\u4efb\u610f\u5143\u7d20\u7684\u5168\u90e8\u524d\u7f00\u5143\u7d20\u548c\u540e\u7f00\uff08\u751a\u81f3\u662f\u6574\u4e2a\u6570\u7ec4\uff09\u7684\u4e58\u79ef\u90fd\u5728 32 \u4f4d\u6574\u6570\u8303\u56f4\u5185\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8bf4\u660e:")," \u8bf7",Object(l.b)("strong",{parentName:"p"},"\u4e0d\u8981\u4f7f\u7528\u9664\u6cd5\uff0c"),"\u4e14\u5728 O(",Object(l.b)("em",{parentName:"p"},"n"),") \u65f6\u95f4\u590d\u6742\u5ea6\u5185\u5b8c\u6210\u6b64\u9898\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a"),"\n\u4f60\u53ef\u4ee5\u5728\u5e38\u6570\u7a7a\u95f4\u590d\u6742\u5ea6\u5185\u5b8c\u6210\u8fd9\u4e2a\u9898\u76ee\u5417\uff1f\uff08 \u51fa\u4e8e\u5bf9\u7a7a\u95f4\u590d\u6742\u5ea6\u5206\u6790\u7684\u76ee\u7684\uff0c\u8f93\u51fa\u6570\u7ec4",Object(l.b)("strong",{parentName:"p"},"\u4e0d\u88ab\u89c6\u4e3a"),"\u989d\u5916\u7a7a\u95f4\u3002\uff09"),Object(l.b)("p",null,"\u901a\u8fc7\u6b21\u657072,606"),Object(l.b)("p",null,"\u63d0\u4ea4\u6b21\u6570102,810"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int[] res = new int[nums.length];\n        int k = 1;\n        for(int i = 0; i < res.length; i++){\n            res[i] = k;\n            k = k * nums[i]; // \u6b64\u65f6\u6570\u7ec4\u5b58\u50a8\u7684\u662f\u9664\u53bb\u5f53\u524d\u5143\u7d20\u5de6\u8fb9\u7684\u5143\u7d20\u4e58\u79ef\n        }\n        k = 1;\n        for(int i = res.length - 1; i >= 0; i--){\n            res[i] *= k; // k\u4e3a\u8be5\u6570\u53f3\u8fb9\u7684\u4e58\u79ef\u3002\n            k *= nums[i]; // \u6b64\u65f6\u6570\u7ec4\u7b49\u4e8e\u5de6\u8fb9\u7684 * \u8be5\u6570\u53f3\u8fb9\u7684\u3002\n        }\n        return res;\n    }\n}\n\n")),Object(l.b)("h4",{id:"43-\u5b57\u7b26\u4e32\u76f8\u4e58"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/multiply-strings/"},"43. \u5b57\u7b26\u4e32\u76f8\u4e58")),Object(l.b)("p",null,"\u96be\u5ea6\u4e2d\u7b49406"),Object(l.b)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8868\u793a\u7684\u975e\u8d1f\u6574\u6570 ",Object(l.b)("inlineCode",{parentName:"p"},"num1")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"num2"),"\uff0c\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"p"},"num1")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"num2")," \u7684\u4e58\u79ef\uff0c\u5b83\u4eec\u7684\u4e58\u79ef\u4e5f\u8868\u793a\u4e3a\u5b57\u7b26\u4e32\u5f62\u5f0f\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'\u8f93\u5165: num1 = "2", num2 = "3"\n\u8f93\u51fa: "6"\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'\u8f93\u5165: num1 = "123", num2 = "456"\n\u8f93\u51fa: "56088"\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"num1")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"num2")," \u7684\u957f\u5ea6\u5c0f\u4e8e110\u3002"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"num1")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"num2")," \u53ea\u5305\u542b\u6570\u5b57 ",Object(l.b)("inlineCode",{parentName:"li"},"0-9"),"\u3002"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"num1")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"num2")," \u5747\u4e0d\u4ee5\u96f6\u5f00\u5934\uff0c\u9664\u975e\u662f\u6570\u5b57 0 \u672c\u8eab\u3002"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\u4e0d\u80fd\u4f7f\u7528\u4efb\u4f55\u6807\u51c6\u5e93\u7684\u5927\u6570\u7c7b\u578b\uff08\u6bd4\u5982 BigInteger\uff09"),"\u6216",Object(l.b)("strong",{parentName:"li"},"\u76f4\u63a5\u5c06\u8f93\u5165\u8f6c\u6362\u4e3a\u6574\u6570\u6765\u5904\u7406"),"\u3002")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"class Solution:\n    def multiply(self, num1, num2):\n        \"\"\"\n        :type num1: str\n        :type num2: str\n        :rtype: str\n        \"\"\"\n        value1 = self.numOfString(num1)\n        value2 = self.numOfString(num2)\n        value = value1 * value2\n        return \"%d\" % (value)\n    \n    def numOfString(self, str):\n        n = len(str)\n        value, unit = 0, 1\n        for i in range(n):\n            value += self.metaNumOfString(str[n-1-i]) * unit\n            unit *= 10\n        return value\n        \n    def metaNumOfString(self, str):\n        if str == '0':\n            return 0\n        elif str == '1':\n            return 1\n        elif str == '2':\n            return 2\n        elif str == '3':\n            return 3\n        elif str == '4':\n            return 4\n        elif str == '5':\n            return 5\n        elif str == '6':\n            return 6\n        elif str == '7':\n            return 7\n        elif str == '8':\n            return 8\n        elif str == '9':\n            return 9        \n")),Object(l.b)("p",null,"\u5207\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u6570\u5b57\uff0c\u8ba1\u7b97\u51fa\u54cd\u5e94\u7684\u6574\u6570\uff0c\u7136\u540e\u76f8\u4e58\u3002"),Object(l.b)("h4",{id:"8-\u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570-atoi"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/string-to-integer-atoi/"},"8. \u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570 (atoi)")),Object(l.b)("p",null,"\u8bf7\u4f60\u6765\u5b9e\u73b0\u4e00\u4e2a atoi \u51fd\u6570\uff0c\u4f7f\u5176\u80fd\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u6574\u6570\u3002"),Object(l.b)("p",null,"\u9996\u5148\uff0c\u8be5\u51fd\u6570\u4f1a\u6839\u636e\u9700\u8981\u4e22\u5f03\u65e0\u7528\u7684\u5f00\u5934\u7a7a\u683c\u5b57\u7b26\uff0c\u76f4\u5230\u5bfb\u627e\u5230\u7b2c\u4e00\u4e2a\u975e\u7a7a\u683c\u7684\u5b57\u7b26\u4e3a\u6b62\u3002\u63a5\u4e0b\u6765\u7684\u8f6c\u5316\u89c4\u5219\u5982\u4e0b\uff1a"),Object(l.b)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u4e3a\u6b63\u6216\u8005\u8d1f\u53f7\u65f6\uff0c\u5219\u5c06\u8be5\u7b26\u53f7\u4e0e\u4e4b\u540e\u9762\u5c3d\u53ef\u80fd\u591a\u7684\u8fde\u7eed\u6570\u5b57\u5b57\u7b26\u7ec4\u5408\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a\u6709\u7b26\u53f7\u6574\u6570\u3002\n\u5047\u5982\u7b2c\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u662f\u6570\u5b57\uff0c\u5219\u76f4\u63a5\u5c06\u5176\u4e0e\u4e4b\u540e\u8fde\u7eed\u7684\u6570\u5b57\u5b57\u7b26\u7ec4\u5408\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a\u6574\u6570\u3002\n\u8be5\u5b57\u7b26\u4e32\u5728\u6709\u6548\u7684\u6574\u6570\u90e8\u5206\u4e4b\u540e\u4e5f\u53ef\u80fd\u4f1a\u5b58\u5728\u591a\u4f59\u7684\u5b57\u7b26\uff0c\u90a3\u4e48\u8fd9\u4e9b\u5b57\u7b26\u53ef\u4ee5\u88ab\u5ffd\u7565\uff0c\u5b83\u4eec\u5bf9\u51fd\u6570\u4e0d\u5e94\u8be5\u9020\u6210\u5f71\u54cd\u3002\n\u6ce8\u610f\uff1a\u5047\u5982\u8be5\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u975e\u7a7a\u683c\u5b57\u7b26\u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u6574\u6570\u5b57\u7b26\u3001\u5b57\u7b26\u4e32\u4e3a\u7a7a\u6216\u5b57\u7b26\u4e32\u4ec5\u5305\u542b\u7a7a\u767d\u5b57\u7b26\u65f6\uff0c\u5219\u4f60\u7684\u51fd\u6570\u4e0d\u9700\u8981\u8fdb\u884c\u8f6c\u6362\uff0c\u5373\u65e0\u6cd5\u8fdb\u884c\u6709\u6548\u8f6c\u6362\u3002"),Object(l.b)("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0c\u82e5\u51fd\u6570\u4e0d\u80fd\u8fdb\u884c\u6709\u6548\u7684\u8f6c\u6362\u65f6\uff0c\u8bf7\u8fd4\u56de 0 \u3002"),Object(l.b)("p",null,"\u63d0\u793a\uff1a"),Object(l.b)("p",null,"\u672c\u9898\u4e2d\u7684\u7a7a\u767d\u5b57\u7b26\u53ea\u5305\u62ec\u7a7a\u683c\u5b57\u7b26 ' ' \u3002\n\u5047\u8bbe\u6211\u4eec\u7684\u73af\u5883\u53ea\u80fd\u5b58\u50a8 32 \u4f4d\u5927\u5c0f\u7684\u6709\u7b26\u53f7\u6574\u6570\uff0c\u90a3\u4e48\u5176\u6570\u503c\u8303\u56f4\u4e3a ","[\u2212231,  231 \u2212 1]","\u3002\u5982\u679c\u6570\u503c\u8d85\u8fc7\u8fd9\u4e2a\u8303\u56f4\uff0c\u8bf7\u8fd4\u56de  INT_MAX (231 \u2212 1) \u6216 INT_MIN (\u2212231) \u3002"),Object(l.b)("p",null,"\u793a\u4f8b 1:"),Object(l.b)("p",null,'\u8f93\u5165: "42"\n\u8f93\u51fa: 42\n\u793a\u4f8b 2:'),Object(l.b)("p",null,"\u8f93\u5165: \"   -42\"\n\u8f93\u51fa: -42\n\u89e3\u91ca: \u7b2c\u4e00\u4e2a\u975e\u7a7a\u767d\u5b57\u7b26\u4e3a '-', \u5b83\u662f\u4e00\u4e2a\u8d1f\u53f7\u3002\n\u6211\u4eec\u5c3d\u53ef\u80fd\u5c06\u8d1f\u53f7\u4e0e\u540e\u9762\u6240\u6709\u8fde\u7eed\u51fa\u73b0\u7684\u6570\u5b57\u7ec4\u5408\u8d77\u6765\uff0c\u6700\u540e\u5f97\u5230 -42 \u3002\n\u793a\u4f8b 3:"),Object(l.b)("p",null,"\u8f93\u5165: \"4193 with words\"\n\u8f93\u51fa: 4193\n\u89e3\u91ca: \u8f6c\u6362\u622a\u6b62\u4e8e\u6570\u5b57 '3' \uff0c\u56e0\u4e3a\u5b83\u7684\u4e0b\u4e00\u4e2a\u5b57\u7b26\u4e0d\u4e3a\u6570\u5b57\u3002\n\u793a\u4f8b 4:"),Object(l.b)("p",null,"\u8f93\u5165: \"words and 987\"\n\u8f93\u51fa: 0\n\u89e3\u91ca: \u7b2c\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u662f 'w', \u4f46\u5b83\u4e0d\u662f\u6570\u5b57\u6216\u6b63\u3001\u8d1f\u53f7\u3002\n\u56e0\u6b64\u65e0\u6cd5\u6267\u884c\u6709\u6548\u7684\u8f6c\u6362\u3002\n\u793a\u4f8b 5:"),Object(l.b)("p",null,'\u8f93\u5165: "-91283472332"\n\u8f93\u51fa: -2147483648\n\u89e3\u91ca: \u6570\u5b57 "-91283472332" \u8d85\u8fc7 32 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\u8303\u56f4\u3002\n\u56e0\u6b64\u8fd4\u56de INT_MIN (\u2212231) \u3002'),Object(l.b)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",Object(l.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/string-to-integer-atoi"},"https://leetcode-cn.com/problems/string-to-integer-atoi"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def myAtoi(self, str):\n        """\n        :type str: str\n        :rtype: int\n        """\n        # \u5bfc\u5165\u6b63\u5219\u6a21\u5757\n        import re\n        # \u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u5168\u90e8\u7b26\u5408\u6761\u4ef6\u7684\u6574\u6570\uff0c\u8fd4\u56de\u7684\u662f\u5217\u8868\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6b63\u5219\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5b57\u7b26\u4e32\n        # strip()\u5b57\u7b26\u4e32\u53bb\u7a7a\u683c\n        ret = re.findall(r"^[-+]?\\d+", str.strip())\n        # \u5224\u65ad\u662f\u5426\u6709\u5339\u914d\u7684\u503c\uff0c\u6ca1\u6709\u7684\u8bdd\u8fd4\u56de0\uff0c\u4f8b\u5982"word values 987"\uff0c\u5339\u914d\u4e0d\u5230\uff0c\u8fd4\u56de0\n        if ret:\n            ret_str = ret[0]  # \u5339\u914d\u7684\u6570\u5b57\u7684\u5b57\u7b26\u4e32\n            ret_str2 = ""  # \u8bb0\u5f55\u53bb\u7b26\u53f7\u7684\u5b57\u7b26\u4e32\uff0cret_str\u540e\u9762\u8fd8\u8981\u4f7f\u7528\uff0c\u6240\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\u8bb0\u5f55\n            # \u5224\u65ad\u662f\u5426\u5e26\u6709\u7b26\u53f7 + or -\n            if ret_str[0] == "-" or ret_str[0] == "+":\n                ret_str2 = ret_str[1:]\n            else:\n                ret_str2 = ret_str\n            # str\u8f6cint\n            ret_int = int(ret_str2)\n            # \u5224\u65ad\u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f\u5426\u4e3a\u8d1f\u53f7\n            if ret_str[0] == "-":\n                # \u4e09\u76ee\u8fd0\u7b97\u7b26\uff0c\u5224\u65ad\u662f\u5426\u6ea2\u51fa\n                # \u5982\u679cret_int <= 2**31\u5219\u8fd4\u56de-ret_int\uff0c\u5426\u5219\u8fd4\u56de-2**31\n                return -ret_int if ret_int <= 2**31 else -2**31\n            else:\n                return ret_int if ret_int < 2**31 else 2**31-1\n        else:\n            return 0\n\n')),Object(l.b)("h4",{id:"\u6700\u5927\u516c\u7ea6\u6570"},"\u6700\u5927\u516c\u7ea6\u6570"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"/** 1.\u76f4\u63a5\u904d\u5386\u6cd5 */\nint maxCommonDivisor(int a, int b) {\n    int max = 0;\n    for (int i = 1; i <=b; i++) {\n        if (a % i == 0 && b % i == 0) {\n            max = i;\n        }\n    }\n    return max;\n}\n/** 2.\u8f97\u8f6c\u76f8\u9664\u6cd5 */\nint maxCommonDivisor(int a, int b) {\n    int r;\n    while(a % b > 0) {\n        r = a % b;\n        a = b;\n        b = r;\n    }\n    return b;\n}\n \n// \u6269\u5c55\uff1a\u6700\u5c0f\u516c\u500d\u6570 = (a * b)/\u6700\u5927\u516c\u7ea6\u6570\n\n")),Object(l.b)("h2",{id:"\u4f4d\u8fd0\u7b97"},"\u4f4d\u8fd0\u7b97"),Object(l.b)("h4",{id:"136-\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u6570\u5b57"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/single-number/"},"136. \u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u6570\u5b57")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def singleNumber(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: int\n        """\n        #\u5f02\u6216\u8fd0\u7b97  \u76f8\u540c\u4e3a0 \uff0c\u4e0d\u540c\u4e3a1\uff0c\u4e24\u4e2a\u76f8\u540c\u7684\u6570\u5f02\u6216\u4e3a0\uff0c0\u548c\u4efb\u4f55\u6570\u5f02\u6216\u8fd8\u5f97\u4efb\u4f55\u6570        \n        result = 0\n        for num in nums:\n            result ^= num\n        return result\n')),Object(l.b)("p",null,"\u601d\u8def1\uff1a\u6700\u7b80\u7b54\u7684\u66b4\u529b\u6cd5\u5faa\u73af\u4e00\u904d\u3002"),Object(l.b)("p",null,"\u601d\u8def2 \uff1a\u6570\u7ec4\u5faa\u73af\u53d6\u5f02\u6216\u3002\u6700\u540e\u5f97\u5230\u7684\u662f\u54ea\u4e2a\u5355\u7740\u7684\u503c\u3002"),Object(l.b)("h4",{id:"231-2-\u7684\u5e42"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/power-of-two/"},"231. 2 \u7684\u5e42")),Object(l.b)("p",null,"\u96be\u5ea6\u7b80\u5355228"),Object(l.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u5224\u65ad\u5b83\u662f\u5426\u662f 2 \u7684\u5e42\u6b21\u65b9\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 1\n\u8f93\u51fa: true\n\u89e3\u91ca: 20 = 1\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 16\n\u8f93\u51fa: true\n\u89e3\u91ca: 24 = 16\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: 218\n\u8f93\u51fa: false\n")),Object(l.b)("p",null,"\u89e3\u9898\u601d\u8def\uff1a\n\u82e5 n = 2^xn=2\nx\n\u4e14 xx \u4e3a\u81ea\u7136\u6570\uff08\u5373 nn \u4e3a 22 \u7684\u5e42\uff09\uff0c\u5219\u4e00\u5b9a\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a\n\u6052\u6709 n & (n - 1) == 0\uff0c\u8fd9\u662f\u56e0\u4e3a\uff1a\nnn \u4e8c\u8fdb\u5236\u6700\u9ad8\u4f4d\u4e3a 11\uff0c\u5176\u4f59\u6240\u6709\u4f4d\u4e3a 00\uff1b\nn - 1n\u22121 \u4e8c\u8fdb\u5236\u6700\u9ad8\u4f4d\u4e3a 00\uff0c\u5176\u4f59\u6240\u6709\u4f4d\u4e3a 11\uff1b\n\u4e00\u5b9a\u6ee1\u8db3 n > 0\u3002\n\u56e0\u6b64\uff0c\u901a\u8fc7 n > 0 \u4e14 n & (n - 1) == 0 \u5373\u53ef\u5224\u5b9a\u662f\u5426\u6ee1\u8db3 n = 2^xn=2\n\u4ee3\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def isPowerOfTwo(self, n):\n        """\n        :type n: int\n        :rtype: bool\n        """\n        #2\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u662f1\u4f4d\uff0c\u800c\u51cf1\u5219\u662f\u90a3\u4e00\u4f4d\u4e4b\u540e\u4e3a0\uff0c\u76f8\u4e0e\u64cd\u4f5c\u4e3a0.\u4f8b\u5982 4&3  100&011 = 000\n        return n > 0 and not (n & (n - 1))\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e")),Object(l.b)("p",null,"\u5728\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c\u6bcf\u4e00\u884c\u90fd\u6309\u7167\u4ece\u5de6\u5230\u53f3\u9012\u589e\u7684\u987a\u5e8f\u6392\u5e8f\uff0c\u6bcf\u4e00\u5217\u90fd\u6309\u7167\u4ece\u4e0a\u5230\u4e0b\u9012\u589e\u7684\u987a\u5e8f\u6392\u5e8f\u3002\u8bf7\u5b8c\u6210\u4e00\u4e2a\u51fd\u6570\uff0c\u8f93\u5165\u8fd9\u6837\u7684\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u548c\u4e00\u4e2a\u6574\u6570\uff0c\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u542b\u6709\u8be5\u6574\u6570\u3002"),Object(l.b)("p",null,"\u4f8b\u5982\u4e0b\u9762\u7684\u4e8c\u7ef4\u6570\u7ec4\u5c31\u662f\u6bcf\u884c\u3001\u6bcf\u5217\u90fd\u9012\u589e\u6392\u5e8f\u3002\u5982\u679c\u5728\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b577\uff0c\u5219\u8fd4\u56detrue\uff1b\u5982\u679c\u67e5\u627e\u6570\u5b575\uff0c\u7531\u4e8e\u6570\u7ec4\u4e0d\u542b\u6709\u8be5\u6570\u5b57\uff0c\u5219\u8fd4\u56defalse\u3002"),Object(l.b)("p",null,"1\uff0c2\uff0c8\uff0c9"),Object(l.b)("p",null,"2\uff0c4\uff0c9\uff0c12"),Object(l.b)("p",null,"4\uff0c7\uff0c10\uff0c13"),Object(l.b)("p",null,"6\uff0c8\uff0c11\uff0c15"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"bool Find(int* matrix, int rowNo, int columnNo, int num) {\n    bool find = false;\n  int row = 0;\n  int column = columnNo -1;\n  while(row>=0 && row<rowNo && colomn >=0 && colomn < colomnNo) {\n            if(matrix[row*columnNo + column] == num) {\n        return true;\n      }  \n        else if (matrix[row*columnNo + column] > num) {\n            --colomn;\n      }else {\n            ++row;\n      }\n  }\n  return find;\n}\n\n\n")),Object(l.b)("p",null,"\u89e3\u9898\u601d\u8def\uff1a\u4ece\u4e00\u4e2a\u9876\u70b9\u5165\u624b\u3002\u4ece\u5177\u4f53\u7684\u6848\u4f8b\u5165\u624b\uff0c\u4e00\u70b9\u4e00\u70b9\u5206\u6790\u3002\u7136\u540e\u5f62\u6210\u89e3\u51b3\u65b9\u6848\u3002"),Object(l.b)("h2",{id:"\u5e76\u67e5\u96c6"},"\u5e76\u67e5\u96c6"),Object(l.b)("h4",{id:"200-\u5c9b\u5c7f\u6570\u91cf"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/number-of-islands/"},"200. \u5c9b\u5c7f\u6570\u91cf")),Object(l.b)("h4",{id:"128-\u6700\u957f\u8fde\u7eed\u5e8f\u5217"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/longest-consecutive-sequence/"},"128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217")),Object(l.b)("h4",{id:"547-\u7701\u4efd\u6570\u91cf"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/number-of-provinces/"},"547. \u7701\u4efd\u6570\u91cf")),Object(l.b)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://gitee.com/dingyusong/cpp_demos/tree/master/C++%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95"},"C++\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5")),Object(l.b)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/liuyubobobo/Play-with-Algorithm-Interview"},"https://github.com/liuyubobobo/Play-with-Algorithm-Interview")),Object(l.b)("h1",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.csdn.net/hengsf123456/article/details/79055709"},"ios\u9762\u8bd5\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.cnblogs.com/skywang12345/p/3603935.html"},"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5\u7cfb\u5217 \u76ee\u5f55"),"-\u597d\u597d\u8bfb\u8bfb"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.csdn.net/z84616995z/article/details/70153460"},"\u5e38\u89c1\u6570\u636e\u7ed3\u6784\u5e94\u7528\u573a\u666f")),Object(l.b)("li",{parentName:"ul"},"\u73a9\u8f6c\u6570\u636e\u7ed3\u6784\uff1a",Object(l.b)("a",{parentName:"li",href:"https://github.com/liuyubobobo/Play-with-Data-Structures"},"https://github.com/liuyubobobo/Play-with-Data-Structures")),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784\u77e5\u8bc6\u6846\u56fe\uff1a",Object(l.b)("a",{parentName:"li",href:"https://blog.csdn.net/LF_2016/article/details/60583729?spm=1001.2014.3001.5501"},"https://blog.csdn.net/LF_2016/article/details/60583729?spm=1001.2014.3001.5501")),Object(l.b)("li",{parentName:"ul"},"\u542c\u8bfe",Object(l.b)("a",{parentName:"li",href:"https://ke.qq.com/course/457447?taid=4053749048212199%5B%E5%BC%80%E5%8F%91%E7%94%A8%E4%B8%8D%E5%88%B0%E7%AE%97%E6%B3%95%EF%BC%9F%E9%82%A3%E6%98%AF%E5%9B%A0%E4%B8%BA%E4%BD%A0%E8%BF%98%E4%B8%8D%E4%BC%9A%EF%BC%81%5D(https://ke.qq.com/course/457447)"},"https://ke.qq.com/course/457447?taid=4053749048212199[\u5f00\u53d1\u7528\u4e0d\u5230\u7b97\u6cd5\uff1f\u90a3\u662f\u56e0\u4e3a\u4f60\u8fd8\u4e0d\u4f1a\uff01](https://ke.qq.com/course/457447)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/changgyhub/leetcode_101"},"LeetCode 101\uff1a\u548c\u4f60\u4e00\u8d77\u4f60\u8f7b\u677e\u5237\u9898\uff08C++\uff09")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/halfrost/LeetCode-Go"},"https://github.com/halfrost/LeetCode-Go"))))}u.isMDXComponent=!0},356:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),b=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,b=function(e,n){if(null==e)return{};var t,r,b={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(b[t]=e[t])}return b}var i=b.a.createContext({}),o=function(e){var n=b.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=o(e.components);return b.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return b.a.createElement(b.a.Fragment,{},n)}},s=b.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(t),s=r,O=u["".concat(a,".").concat(s)]||u[s]||m[s]||l;return t?b.a.createElement(O,c(c({ref:n},i),{},{components:t})):b.a.createElement(O,c({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=t[i];return b.a.createElement.apply(null,a)}return b.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);