(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(356)),i=["components"],l={},c={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217",id:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217",isDocsHomePage:!1,title:"02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217",description:"\u7b2c\u516d\u7ae0\uff1a\u6808\uff0c\u961f\u5217\uff0c\u4f18\u5148\u961f\u5217",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/02-\u6808\u3001\u961f\u5217\u3001\u4f18\u5148\u961f\u5217.md",version:"current"},p=[{value:"\u7b2c\u516d\u7ae0\uff1a\u6808\uff0c\u961f\u5217\uff0c\u4f18\u5148\u961f\u5217",id:"\u7b2c\u516d\u7ae0\uff1a\u6808\uff0c\u961f\u5217\uff0c\u4f18\u5148\u961f\u5217",children:[{value:"6-1 \u6808\u7684\u57fa\u7840\u5e94\u7528",id:"6-1-\u6808\u7684\u57fa\u7840\u5e94\u7528",children:[]},{value:"6-2 \u6808\u548c\u9012\u5f52",id:"6-2-\u6808\u548c\u9012\u5f52",children:[]},{value:"6-3 \u8fd0\u7528\u6808\u6a21\u62df\u9012\u5f52",id:"6-3-\u8fd0\u7528\u6808\u6a21\u62df\u9012\u5f52",children:[]},{value:"6-4 \u961f\u5217\u7684\u5178\u578b\u5e94\u7528 Binary Tree Level Order Traversal",id:"6-4-\u961f\u5217\u7684\u5178\u578b\u5e94\u7528-binary-tree-level-order-traversal",children:[]},{value:"6-5 BFS\u548c\u56fe\u7684\u6700\u77ed\u8def\u5f84 Perfect Squares",id:"6-5-bfs\u548c\u56fe\u7684\u6700\u77ed\u8def\u5f84-perfect-squares",children:[]},{value:"6-6 \u4f18\u5148\u961f\u5217",id:"6-6-\u4f18\u5148\u961f\u5217",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u7b2c\u516d\u7ae0\uff1a\u6808\uff0c\u961f\u5217\uff0c\u4f18\u5148\u961f\u5217"},"\u7b2c\u516d\u7ae0\uff1a\u6808\uff0c\u961f\u5217\uff0c\u4f18\u5148\u961f\u5217"),Object(o.b)("h3",{id:"6-1-\u6808\u7684\u57fa\u7840\u5e94\u7528"},"6-1 \u6808\u7684\u57fa\u7840\u5e94\u7528"),Object(o.b)("h4",{id:"20-\u6709\u6548\u7684\u62ec\u53f7"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/valid-parentheses/"},"20. \u6709\u6548\u7684\u62ec\u53f7")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def isValid(self, s):\n        """\n        :type s: str\n        :rtype: bool\n        """\n        n = len(s)        \n        listStack = []\n        for i in range(n):               \n            if len(listStack) == 0:\n                listStack.append(s[i])\n            elif s[i] == ")" and listStack[-1] == "(":                \n                listStack.pop()\n            elif s[i] == "}" and listStack[-1] == "{":                \n                listStack.pop()                \n            elif s[i] == "]" and listStack[-1] == "[":\n                listStack.pop()\n            else:\n                listStack.append(s[i])\n                \n        if len(listStack) == 0:\n            return True\n        else:\n            return False\n')),Object(o.b)("h4",{id:"232-\u7528\u6808\u5b9e\u73b0\u961f\u5217"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/implement-queue-using-stacks/"},"232. \u7528\u6808\u5b9e\u73b0\u961f\u5217")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c++"},"class MyQueue {\nprivate:\n    stack<int> sk_in;\n    stack<int> sk_out;\n\npublic:\n    MyQueue() {\n\n    }\n    \n    void push(int x) {\n        sk_in.push(x);\n    }\n    \n    int pop() {        \n        int ret = peek();\n        if(!sk_out.empty()) {\n            sk_out.pop();//\u7ec6\u5fc3\u4e00\u70b9\u522b\u4e22\u4e86\u5206\u53f7\n        }        \n        return ret;\n    }\n    \n    int peek() {\n        if(sk_out.empty()) {\n            while(!sk_in.empty()) {\n                int val = sk_in.top();\n                sk_in.pop();\n                sk_out.push(val);\n            }\n        }\n\n        if(sk_out.empty()) return -1;\n        int ret = sk_out.top();\n        return ret;\n    }\n    \n    bool empty() {\n        return sk_out.empty() && sk_in.empty();\n    }\n};\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue* obj = new MyQueue();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->peek();\n * bool param_4 = obj->empty();\n */\n")),Object(o.b)("p",null,"\u6a21\u62df\u6808\u64cd\u4f5c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},' /**\n *  \u6808\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u7279\u70b9\uff1a\u5148\u8fdb\u540e\u51fa\n *  \u7ec3\u4e60\uff1a\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\u6a21\u62df\u6808\u7684\u64cd\u4f5c\n */\n#include <stdio.h>\n#include <stdbool.h>\n#include <assert.h>\n//\u4fdd\u62a4\u5168\u5c40\u53d8\u91cf\uff1a\u5728\u5168\u5c40\u53d8\u91cf\u524d\u52a0static\u540e\uff0c\u8fd9\u4e2a\u5168\u5c40\u53d8\u91cf\u5c31\u53ea\u80fd\u5728\u672c\u6587\u4ef6\u4e2d\u4f7f\u7528\nstatic int data[1024];//\u6808\u6700\u591a\u80fd\u4fdd\u5b581024\u4e2a\u6570\u636e\nstatic int count = 0;//\u76ee\u524d\u5df2\u7ecf\u653e\u4e86\u591a\u5c11\u4e2a\u6570(\u76f8\u5f53\u4e8e\u6808\u9876\u4f4d\u7f6e)\n \n//\u6570\u636e\u5165\u6808 push\nvoid push(int x){\n    assert(!full());//\u9632\u6b62\u6570\u7ec4\u8d8a\u754c\n    data[count++] = x;\n}\n//\u6570\u636e\u51fa\u6808 pop\nint pop(){\n    assert(!empty());\n    return data[--count];\n}\n//\u67e5\u770b\u6808\u9876\u5143\u7d20 top\nint top(){\n    assert(!empty());\n    return data[count-1];\n}\n \n//\u67e5\u8be2\u6808\u6ee1 full\nbool full() {\n    if(count >= 1024) {\n        return 1;\n    }\n     return 0; \n}\n \n//\u67e5\u8be2\u6808\u7a7a empty\nbool empty() {\n    if(count <= 0) {\n        return 1;\n    }\n    return 0;\n}\n \nint main(){\n    //\u5165\u6808\n    for (int i = 1; i <= 10; i++) {\n        push(i);\n    }\n  \n    //\u51fa\u6808\n    while(!empty()){\n        printf("%d ", top()); //\u6808\u9876\u5143\u7d20\n        pop(); //\u51fa\u6808\n    }\n    printf("\\n");\n    \n    return 0;\n}\n')),Object(o.b)("h4",{id:"\u5251\u6307-offer-09-\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217---33"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/"},"\u5251\u6307 Offer 09. \u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217")," - 33"),Object(o.b)("h4",{id:"\u5251\u6307-offer-31-\u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217---6"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/"},"\u5251\u6307 Offer 31. \u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217")," - 6"),Object(o.b)("h4",{id:"\u5251\u6307-offer-30-\u5305\u542bmin\u51fd\u6570\u7684\u6808---1"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/"},"\u5251\u6307 Offer 30. \u5305\u542bmin\u51fd\u6570\u7684\u6808")," - 1"),Object(o.b)("h4",{id:"155-\u6700\u5c0f\u6808---56"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/min-stack/"},"155. \u6700\u5c0f\u6808 - 56")),Object(o.b)("p",null,"\u96be\u5ea6\u7b80\u5355634\u6536\u85cf\u5206\u4eab\u5207\u6362\u4e3a\u82f1\u6587\u5173\u6ce8\u53cd\u9988"),Object(o.b)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"push")," \uff0c",Object(o.b)("inlineCode",{parentName:"p"},"pop")," \uff0c",Object(o.b)("inlineCode",{parentName:"p"},"top")," \u64cd\u4f5c\uff0c\u5e76\u80fd\u5728\u5e38\u6570\u65f6\u95f4\u5185\u68c0\u7d22\u5230\u6700\u5c0f\u5143\u7d20\u7684\u6808\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"push(x)")," \u2014\u2014 \u5c06\u5143\u7d20 x \u63a8\u5165\u6808\u4e2d\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pop()")," \u2014\u2014 \u5220\u9664\u6808\u9876\u7684\u5143\u7d20\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"top()")," \u2014\u2014 \u83b7\u53d6\u6808\u9876\u5143\u7d20\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getMin()")," \u2014\u2014 \u68c0\u7d22\u6808\u4e2d\u7684\u6700\u5c0f\u5143\u7d20\u3002")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\u8f93\u5165\uff1a\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n\u8f93\u51fa\uff1a\n[null,null,null,null,-3,null,0,-2]\n\n\u89e3\u91ca\uff1a\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --\x3e \u8fd4\u56de -3.\nminStack.pop();\nminStack.top();      --\x3e \u8fd4\u56de 0.\nminStack.getMin();   --\x3e \u8fd4\u56de -2.\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pop"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"top")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"getMin")," \u64cd\u4f5c\u603b\u662f\u5728 ",Object(o.b)("strong",{parentName:"li"},"\u975e\u7a7a\u6808")," \u4e0a\u8c03\u7528\u3002")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'class MinStack:\n\n    def __init__(self):\n        """\n        initialize your data structure here.\n        """\n        self.stack = []\n        self.miniStack = []\n        \n        \n\n    def push(self, x):\n        """\n        :type x: int\n        :rtype: void\n        """\n        if len(self.miniStack) == 0 or x <= self.miniStack[-1]:\n            self.miniStack.append(x)\n        self.stack.append(x)\n        \n\n    def pop(self):\n        """\n        :rtype: void\n        """\n        if self.top() == self.getMin():\n            self.miniStack.pop()\n        self.stack.pop()\n        \n\n    def top(self):\n        """\n        :rtype: int\n        """\n        return self.stack[-1]\n        \n\n    def getMin(self):\n        """\n        :rtype: int\n        """\n        if len(self.miniStack) > 0:\n            return self.miniStack[-1]\n        return 0\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.getMin()\n')),Object(o.b)("h3",{id:"6-2-\u6808\u548c\u9012\u5f52"},"6-2 \u6808\u548c\u9012\u5f52"),Object(o.b)("h4",{id:"144-\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/"},"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386")),Object(o.b)("p",null,"\u975e\u9012\u5f52\u5199\u6cd5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\nclass Solution:\n    def preorderTraversal(self, root: TreeNode) -> List[int]:\n        """\n        \u4f7f\u7528\u6808\u6570\u636e\u7ed3\u6784,\u540e\u8fdb\u5148\u51fa\u3002\n        \u5148\u5e8f\u904d\u5386\uff08\u6839\u8282\u70b9\uff0c\u5de6\u5b50\u6811\uff0c\u53f3\u5b50\u6811\uff09\n        """\n        #\u5148\u5904\u7406\u5f02\u5e38\n        if not root:\n            return []\n        stack, res = [root],[]\n\n        while stack:\n            node = stack.pop() # Python\u6570\u7ec4\u7684pop\u64cd\u4f5c\u9ed8\u8ba4\u79fb\u9664\u5c3e\u90e8\u6570\u636e\n            if node:\n                res.append(node.val)\n                if node.right:\n                    stack.append(node.right) # Python\u6570\u7ec4\u7684append\u64cd\u4f5c\u9ed8\u8ba4\u5c06\u6570\u636e\u6dfb\u52a0\u5230\u5c3e\u90e8\n                if node.left:\n                    stack.append(node.left)\n        return res\n')),Object(o.b)("p",null,"\u975e\u9012\u5f52\u5199\u6cd5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\nclass Solution:\n    def preorderTraversal(self, root: TreeNode) -> List[int]:\n        """\n        \u6839\u8282\u70b9\u548c\u5de6\u5b50\u6811\u5148\u5165\u6808\n        """\n        if not root:\n            return []\n\n        cur, stack, res = root, [], []\n        while cur or stack:\n            while cur:\n                res.append(cur.val) #\u8282\u70b9\u503c\n                stack.append(cur)   #\u6839\u8282\u70b9\u5165\u6808\n                cur = cur.left      #\u5411\u5de6\u5b50\u8282\u70b9\u6ed1\u52a8\n            #\u6307\u9488\u6ed1\u52a8\u5230\u5de6\u8282\u70b9\u7684\u4e3aNone\u7684\u4f4d\u7f6e\uff0c\u51fa\u6808\u7f51\u4e0a\u8d70\uff0c\u627e\u53f3\u8282\u70b9\n            tmp = stack.pop()\n            cur = tmp.right #\u627e\u53f3\u8282\u70b9\n\n        return res\n\n')),Object(o.b)("h3",{id:"6-3-\u8fd0\u7528\u6808\u6a21\u62df\u9012\u5f52"},"6-3 \u8fd0\u7528\u6808\u6a21\u62df\u9012\u5f52"),Object(o.b)("h3",{id:"6-4-\u961f\u5217\u7684\u5178\u578b\u5e94\u7528-binary-tree-level-order-traversal"},"6-4 \u961f\u5217\u7684\u5178\u578b\u5e94\u7528 Binary Tree Level Order Traversal"),Object(o.b)("h4",{id:"225-\u7528\u961f\u5217\u5b9e\u73b0\u6808--"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/implement-stack-using-queues/"},"225. \u7528\u961f\u5217\u5b9e\u73b0\u6808")," -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c++"},"class MyStack {\nprivate:\n    queue<int> que_in;\n    queue<int> que_out;\npublic:\n    MyStack() {\n\n    }\n    \n    void push(int x) {\n        //\u8fd9\u4e2a\u64cd\u4f5c\u8ba9\u65b0\u6765\u7684\u603b\u662f\u5728\u524d\u9762\u3002\n        que_in.push(x);\n        while(!que_out.empty()) {\n            que_in.push(que_out.front());\n            que_out.pop();\n        }\n        swap(que_in,que_out);//\u4fdd\u8bc1in\u603b\u662f\u7a7a\u7684\n    }\n    \n    int pop() {\n        int ret = top();\n        if(!que_out.empty()) {\n            que_out.pop();\n        }\n        return ret;\n    }\n    \n    int top() {\n        if(que_out.empty()) {\n            return -1;\n        }\n        int ret = que_out.front();\n        return ret;\n    }\n    \n    bool empty() {\n        return que_in.empty() && que_out.empty();\n    }\n};\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack* obj = new MyStack();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->top();\n * bool param_4 = obj->empty();\n */\n")),Object(o.b)("h3",{id:"6-5-bfs\u548c\u56fe\u7684\u6700\u77ed\u8def\u5f84-perfect-squares"},"6-5 BFS\u548c\u56fe\u7684\u6700\u77ed\u8def\u5f84 Perfect Squares"),Object(o.b)("h4",{id:"103-\u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u5e8f\u904d\u5386"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/"},"103. \u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u5e8f\u904d\u5386")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c++"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {\n        vector<vector<int>> ret;\n        if(root == nullptr) {\n            return ret;\n        }\n\n        stack<TreeNode *> sk;//\u540e\u8fdb\u5148\u51fa\u7684\u8f85\u52a9\u7ed3\u6784\n        sk.push(root);\n        bool to_left = true;\n\n        while(!sk.empty()) {\n\n            //\u9488\u5bf9\u6bcf\u4e00\u5c42\uff0c\u6709\u4e00\u4e2a\u4e34\u65f6\u7684\u6570\u7ec4\u548c\u6808\u3002\n            vector<int> levelRet;\n            stack<TreeNode *> levelSk;\n\n            while(!sk.empty()) {\n                TreeNode *node = sk.top();\n                sk.pop();\n                levelRet.push_back(node->val);\n                if(to_left){\n                    if(node->left) levelSk.push(node->left);\n                    if(node->right) levelSk.push(node->right);\n                }\n                else\n                {\n                    if(node->right) levelSk.push(node->right);\n                    if(node->left) levelSk.push(node->left);\n                }\n            }Reveal\n            to_left = !to_left;     \n            sk = levelSk;\n            ret.push_back(levelRet);\n        }\n        return ret;\n    }\n};\n")),Object(o.b)("h4",{id:"199-\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/binary-tree-right-side-view/"},"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe")),Object(o.b)("h3",{id:"6-6-\u4f18\u5148\u961f\u5217"},"6-6 \u4f18\u5148\u961f\u5217"),Object(o.b)("h4",{id:"215-\u6570\u7ec4\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5927\u5143\u7d20---253"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array"}," 215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20")," - 253"),Object(o.b)("h4",{id:"23-\u5408\u5e76k\u4e2a\u6392\u5e8f\u94fe\u8868---104"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/merge-k-sorted-lists"},"23. \u5408\u5e76K\u4e2a\u6392\u5e8f\u94fe\u8868")," - 104"),Object(o.b)("h4",{id:"239-\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c---61"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/sliding-window-maximum"},"239. \u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c")," - 61"),Object(o.b)("h4",{id:"\u5251\u6307-offer-40-\u6700\u5c0f\u7684k\u4e2a\u6570---28"},Object(o.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof"},"\u5251\u6307 Offer 40. \u6700\u5c0f\u7684k\u4e2a\u6570")," - 28"),Object(o.b)("p",null,"####",Object(o.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof"},"\u5251\u6307 Offer 41. \u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u4f4d\u6570")," - 5 "))}u.isMDXComponent=!0},356:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(f,l(l({ref:n},p),{},{components:t})):a.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);