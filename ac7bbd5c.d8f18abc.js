(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{264:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return u})),t.d(e,"toc",(function(){return m})),t.d(e,"default",(function(){return o}));var r=t(3),i=t(7),l=(t(0),t(356)),a=["components"],s={},u={unversionedId:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e",id:"\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e",isDocsHomePage:!1,title:"01-\u4e8c\u5206\u67e5\u627e",description:"[toc]",source:"@site/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e.md",slug:"/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e",permalink:"/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e",editUrl:"dys-typora-open://mine/survival/docs/\u7f16\u7a0b\u57fa\u7840/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5/\u7b97\u6cd5\u9762\u8bd5/01-\u4e8c\u5206\u67e5\u627e.md",version:"current"},m=[{value:"\u4e8c\u5206\u67e5\u627e",id:"\u4e8c\u5206\u67e5\u627e",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:m};function o(n){var e=n.components,t=Object(i.a)(n,a);return Object(l.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"[toc]"),Object(l.b)("h3",{id:"\u4e8c\u5206\u67e5\u627e"},"\u4e8c\u5206\u67e5\u627e"),Object(l.b)("p",null,"\u4e8c\u5206\u67e5\u627e\u4e5f\u5c5e\u4e8e\u6307\u9488\u7c7b\uff0c\u91cd\u70b9\u5728\u4e8e\u666e\u901a\u6307\u9488\u4e00\u6b21\u79fb\u52a8\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4e8c\u5206\u67e5\u627e\uff0c\u4e00\u6b21\u79fb\u52a8\u4e00\u534a\u7684\u4f4d\u7f6e\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f\u8fb9\u754c")),Object(l.b)("p",null,"\u5faa\u73af\u4e0d\u53d8\u91cf\u3002\u63a7\u5236\u8fb9\u754c\u3002\u63a7\u5236\u5f02\u5e38\u3002"),Object(l.b)("h4",{id:"33-\u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4-113"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/search-in-rotated-sorted-array/"},"33. \u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4"),"-113"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size()-1;\n        while(l <= r){\n            int mid = (l+r)>>1;\n            if(nums[mid] == target) return mid;\n            //\u6574\u4e2a\u6570\u7ec4\u5206\u4e3a\u5de6\u53f3\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\n    /*\n    \u5c06\u6570\u7ec4\u4e00\u5206\u4e3a\u4e8c\uff0c\u5176\u4e2d\u4e00\u5b9a\u6709\u4e00\u4e2a\u662f\u6709\u5e8f\u7684\uff0c\u53e6\u4e00\u4e2a\u53ef\u80fd\u662f\u6709\u5e8f\uff0c\u4e5f\u80fd\u662f\u90e8\u5206\u6709\u5e8f\u3002\n    \u6b64\u65f6\u6709\u5e8f\u90e8\u5206\u7528\u4e8c\u5206\u6cd5\u67e5\u627e\u3002\u65e0\u5e8f\u90e8\u5206\u518d\u4e00\u5206\u4e3a\u4e8c\uff0c\u5176\u4e2d\u4e00\u4e2a\u4e00\u5b9a\u6709\u5e8f\uff0c\u53e6\u4e00\u4e2a\u53ef\u80fd\u6709\u5e8f\uff0c\u53ef\u80fd\u65e0\u5e8f\u3002\u5c31\u8fd9\u6837\u5faa\u73af. \n    */\n            if(nums[mid] >= nums[l]) {\n                //\u5fc5\u7136\u5728\u5de6\u6709\u5e8f\u6570\u7ec4\u4e2d\n                if(target >= nums[l] && target < nums[mid]){ //\u843d\u5728\u4e86\u5de6\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u5de6\u534a\u90e8\u5206\n                    r = mid - 1;\n                }\n                else {\n                  \n                      //[mid+1 \u5de6\u6709\u5e8f\uff0c\u53f3\u6709\u5e8f] \u5728\u53e6\u4e00\u534a\u65e0\u5e8f\u7684\u6570\u7ec4\u4e2d \n                    l = mid + 1;\n                }\n            }\n            else {\n                //mid\u843d\u5728\u4e86\u53f3\u6709\u5e8f\u6570\u7ec4\u4e2d\n                if(target > nums[mid] && target <= nums[r]) { //\u843d\u5728\u4e86\u5de6\u6709\u5e8f\u6570\u7ec4\u4e2d\u6709\u534a\u90e8\u5206\n                    l = mid + 1;\n                }\n                else {\n                                     //[\u5de6\u6709\u5e8f\uff0c\u53f3\u6709\u5e8f mid-1]\u5728\u53e6\u4e00\u534a\u65e0\u5e8f\u7684\u6570\u7ec4\u4e2d\n                    r = mid - 1;\n                }\n            }\n        }\n        return -1;\n    }\n};\n")),Object(l.b)("p",null,"\u5148\u627e\u51fa\u65cb\u8f6c\u7684\u957f\u5ea6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},'class Solution:\n    def search(self, nums, target):\n        """\n        :type nums: List[int]\n        :type target: int\n        :rtype: int\n        """\n        #\u627e\u51fa\u65cb\u8f6c\u957f\u5ea6\n        n = len(nums)\n        \n        low = 0\n        high = n -1\n        \n        #\u53cc\u6307\u9488\u53d1\u6700\u540e\u5b9a\u4f4d\u5230\u90a3\u4e2a\u6700\u5c0f\u503c\uff0c\u6700\u5c0f\u503c\u7684\u4e0b\u6807\uff0c\u5c31\u662f\u65cb\u8f6c\u7684\u4e2a\u6570\n        while low < high:\n            middle = (low+high)//2\n            if nums[middle] > nums[high]:\n                low = middle+1\n            else:\n                high = middle#\u4e0d\u51cf1\u662f\u5e94\u4e3a\u53ef\u80fd\u5904\u5728\u6700\u5c0f\u503c\n        \n        #\u627e\u51fa\u4e86\u6700\u5c0f\u503c\n        rotation = low\n        low = 0\n        high = n -1\n        \n        #\u65cb\u8f6c\u6570\u7ec4\u7684\u4e8c\u5206\u67e5\u627e\uff0c\u6700\u9a9a\u7684\u662f\u4e2d\u95f4\u503c\u504f\u79fb\n        while low <= high:\n            middle = (low+high)//2\n            realMiddle = (middle+rotation)%n\n            if nums[realMiddle] == target :\n                return realMiddle\n            elif nums[realMiddle] < target :\n                low = middle+1\n            else:\n                high = middle-1\n        return -1               \n')),Object(l.b)("h4",{id:"704-\u4e8c\u5206\u67e5\u627e-98"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/binary-search/"},"704. \u4e8c\u5206\u67e5\u627e"),"-98"),Object(l.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a n \u4e2a\u5143\u7d20\u6709\u5e8f\u7684\uff08\u5347\u5e8f\uff09\u6574\u578b\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u76ee\u6807\u503c target  \uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u641c\u7d22 nums \u4e2d\u7684 target\uff0c\u5982\u679c\u76ee\u6807\u503c\u5b58\u5728\u8fd4\u56de\u4e0b\u6807\uff0c\u5426\u5219\u8fd4\u56de -1\u3002"),Object(l.b)("p",null,"\u793a\u4f8b 1:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: nums = [-1,0,3,5,9,12], target = 9\n\u8f93\u51fa: 4\n\u89e3\u91ca: 9 \u51fa\u73b0\u5728 nums \u4e2d\u5e76\u4e14\u4e0b\u6807\u4e3a 4\n\u793a\u4f8b 2:\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\u8f93\u5165: nums = [-1,0,3,5,9,12], target = 2\n\u8f93\u51fa: -1\n\u89e3\u91ca: 2 \u4e0d\u5b58\u5728 nums \u4e2d\u56e0\u6b64\u8fd4\u56de -1\n")),Object(l.b)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",Object(l.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-search"},"https://leetcode-cn.com/problems/binary-search"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size()-1;\n        while(l < r) {\n            int mid = l + (r-l)/2;\n            if(nums[mid] == target) {\n                return mid;\n            }\n\n            if(nums[mid] > target) {\n                r = mid-1;\n            }\n            else {\n                l = mid+1;\n            }\n        }\n//          \u6ce8\u610f\uff1a\u6709\u53ef\u80fd\u4e0d\u5728\u8fd9\u4e2a\u6570\u7ec4\u4e2d\uff01\uff01\uff01\uff01\n        if(nums[l] != target) {\n            return -1;\n        }\n        return l;\n    }\n};\n")),Object(l.b)("h4",{id:"300-\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217-92"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/longest-increasing-subsequence"},"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217"),"-92"),Object(l.b)("h4",{id:"69-sqrtx-x\u7684\u5e73\u65b9\u6839-74"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/sqrtx/"},"69. Sqrt(x) x\u7684\u5e73\u65b9\u6839"),"-74"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int mySqrt(int x) {\n        if(x==0 || x == 1) {\n            return x;\n        }\n        int l = 1, r = x/2;\n        while(l < r) {\n            int mid = l + (r-l + 1)/2;\n            /*\n            \u660e\u786e\u4e8c\u5206\u7684\u5224\u65ad\uff0c\u5982\u679c\n            \u4e00\u4e2a\u6570\u7684\u5e73\u65b9\u5927\u4e8ex\uff0c\u90a3\u4ed6\u4e00\u5b9a\u4e0d\u662fx\u7684\u5e73\u65b9\u6839\n            \u4e00\u4e2a\u6570\u7684\u5e73\u65b9\u5c0f\u4e8e\u7b49\u4e8ex\uff0c\u90a3\u4ed6\u53ef\u80fd\u662fx\u7684\u5e73\u65b9\u6839\n\n            \u6839\u636e\u4e8c\u5206\u7684\u5b9a\u4e49\uff0c\u786e\u5b9a\u4e0b\u4e00\u6b21\u7684\u8fb9\u754c\u3002\n            */\n            if(mid > x/mid) {\n                r = mid - 1;//\u820d\u5f03mid\uff0cmid\u4e0d\u53ef\u80fd\u662f\u89e3\n            }\n            else if(mid < x/mid) {\n                l = mid;//\u4fdd\u7559mid\uff0cmid\u53ef\u80fd\u662f\u89e3\n            }else {\n                return mid;\n            }            \n        }\n        return l;\n    }\n};\n")),Object(l.b)("h4",{id:"4-\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570---64"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/"},"4. \u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570")," - 64"),Object(l.b)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5927\u5c0f\u5206\u522b\u4e3a m \u548c n \u7684\u6b63\u5e8f\uff08\u4ece\u5c0f\u5230\u5927\uff09\u6570\u7ec4 nums1 \u548c nums2\u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684 \u4e2d\u4f4d\u6570 \u3002"),Object(l.b)("p",null,"\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5e94\u8be5\u4e3a O(log (m+n)) \u3002"),Object(l.b)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",Object(l.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays"},"https://leetcode-cn.com/problems/median-of-two-sorted-arrays"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"),Object(l.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6O(m+n)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        int len1 = nums1.size();\n        int len2 = nums2.size();\n        int len = len1 + len2;\n\n        int left = -1, right = -1;\n        int aStart = 0, bStart = 0;\n\n        //\u5f80\u524d\u8fed\u4ee3\u5230len/2\u7684\u4f4d\u7f6e\n        for(int i = 0; i <= len/2; i++) {\n            left = right;//\u8bb0\u5f55\u524d\u4e00\u4e2a\u8282\u70b9\n            //nums1\u4e0d\u8d8a\u754c\u4e14num1[aStart] < num2[bStart] astart\u5f80\u524d\u8d70\u4e00\u6b65    \n            if(aStart < len1 && (bStart >= len2 || nums1[aStart] < nums2[bStart])) {\n                right = nums1[aStart++];//num1\u5f85\u8003\u5bdf\u7684\u6307\u9488\u5f80\u524d\u79fb\u52a8\u4e00\u4f4d\n            }\n            else {\n                right = nums2[bStart++];//num2\u5f85\u8003\u5bdf\u7684\u6307\u9488\u5f80\u524d\u79fb\u52a8\u4e00\u4f4d\n            }\n        }\n\n        if(len&1) {//\u5947\u6570\uff080\uff0c1\uff0c2\uff0c3\uff0c4\uff09\u4e2d\u4f4d\u6570\u662f2\n            return right;\n        }\n        else {//\u5947\u6570\uff080\uff0c1\uff0c2\uff0c3\uff09\u4e2d\u4f4d\u6570\u662f1\u548c2\n            return (left + right)/2.0;\n        }\n    }\n};\n")),Object(l.b)("p",null,"\u5f97\u5230\u7b2cK\u5927"),Object(l.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6O(log(m+n))"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\n\nprivate:\n    int getKth(vector<int>& nums1, int start1, int end1,vector<int>& nums2, int start2, int end2, int K) {\n        //\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\u7684\u7b2ck\u5927\n        int len1 = end1 - start1 + 1;\n        int len2 = end2 - start2 + 1;\n\n        //\u59cb\u7ec8\u8ba9len1\u7684\u957f\u5ea6\u5c0f\u4e8elen2\uff0c\u8fd9\u6837\u4fdd\u8bc1\u5982\u679c\u6570\u7ec4\u7a7a\u4e86\uff0c\u4e00\u5b9a\u662flen1\n        if(len1 > len2) return getKth(nums2,start2,end2,nums1,start1,end1,K);\n        //\u5982\u679clen1\u662f\u7a7a\u7684\n        if(len1 == 0) return nums2[start2 + K -1];\n\n        if(K == 1) return min(nums1[start1],nums2[start2]);\n\n        //\u6bd4K/2\n        int i = start1 + min(len1, K/2) - 1;\n        int j = start2 + min(len2, K/2) - 1;\n\n        if(nums1[i] > nums2[j]) {\n            //\u5728nums2\u5f80\u540e\u504f,\u780d\u6389nums2\u7684K/2\u90e8\u5206\n            return getKth(nums1,start1,end1,nums2,j+1,end2, K - (j-start2+1));\n        }\n        else {\n            return getKth(nums1,i+1,end1,nums2,start2,end2, K - (i-start1+1));\n        }\n\n    }\n\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        int len1 = nums1.size();\n        int len2 = nums2.size();\n        int len = len1 + len2;\n        /*\n        \u5947\u6570\uff080\uff0c1\uff0c2\uff0c3\uff0c4\uff09\u4e2d\u4f4d\u6570\u662f(5+1)/2 = 3;(5+2)/2 = 3;   //\u5947\u6570\u5f97\u5230\u4e24\u4e2a3\n        \u5947\u6570\uff080\uff0c1\uff0c2\uff0c3\uff09\u4e2d\u4f4d\u6570\u662f(4+1)/2 = 2;(4+2)/2 = 3;      //\u5076\u6570\u5f97\u5230\u4e00\u4e2a2\uff0c\u4e00\u4e2a3\n        */\n        int left = (len1 + len2 + 1)/2;//\u7b2ck\u5927\n        int right = (len1 + len2 + 2)/2;//\n\n        return (getKth(nums1,0,len1-1,nums2,0,len2-1,left) + getKth(nums1,0,len1-1,nums2,0,len2-1,right)) *0.5; \n    }\n};\n")),Object(l.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {\n    //1.\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684\u6709\u5e8f\u6570\u7ec4\n    int totalSize = nums1Size + nums2Size;\n    int finalArray[totalSize];\n    int k = 0;\n    int i = 0 , j = 0;\n    \n    while ((i<nums1Size) || (j<nums2Size)) {\n        \n        if (i == nums1Size) {\n            for (int l = j; l< nums2Size; l++) {\n                finalArray[k] = nums2[l];\n                k++;\n            }\n            j = nums2Size;\n        }\n        \n        if (j == nums2Size) {\n            for (int l = i; l< nums1Size; l++) {\n                finalArray[k] = nums1[l];\n                k++;\n            }\n            i = nums1Size;\n        }\n        \n        if (k < totalSize) {            \n            if (nums1[i] < nums2[j]) {\n                finalArray[k] = nums1[i];\n                k++;\n                i++;                \n            }\n            else {\n                finalArray[k] = nums2[j];                \n                k++;                \n                j++;\n            }\n        }                \n    }\n    \n    \n    //2.\u627e\u5230\u4e2d\u4f4d\u6570\n    if(totalSize%2 == 0) {\n        int bid1 = (totalSize)/2;\n        int bid2 = bid1-1;\n        return (finalArray[bid1] + finalArray[bid2])/2.0;\n    }\n    else {\n        int bid = (totalSize-1)/2;\n        return finalArray[bid];\n    }\n    \n}\n")),Object(l.b)("h4",{id:"718-\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4---52"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray"},"718. \u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4")," - 52"),Object(l.b)("h4",{id:"34-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20-44"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array"},"34. \u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20"),"-44"),Object(l.b)("h4",{id:"153-\u5bfb\u627e\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u6700-41"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array"},"153. \u5bfb\u627e\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u6700"),"-41"),Object(l.b)("h4",{id:"162-\u5bfb\u627e\u5cf0\u503c"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/find-peak-element/"},"162. \u5bfb\u627e\u5cf0\u503c")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    //\u722c\u5c71\uff0c\u5f80\u9ad8\u5904\u8d70\u3002\u53d6\u4e2d\u95f4\uff0c\u5f80\u5c0f\u7684\u65b9\u5411\u8d70\u4e0d\u4e00\u5b9a\u6ee1\u8db3\uff0c\u5f80\u5927\u7684\u65b9\u5411\u8d70\u4e00\u5b9a\u6ee1\u8db3\uff01\uff08\u4e0d\u4e00\u5b9a|\u4e00\u5b9a\uff09\n    int findPeakElement(vector<int>& nums) {\n        int l = 0, r = nums.size()-1;\n        while(l < r) {\n            int mid = l+(r-l)/2;//\u6ce8\u610f\u5cf0\u503c\uff01\n            if(nums[mid]>nums[mid+1]) {\n                r = mid;\n            }\n            else {\n                l = mid+1;\n            }\n        }\n        return l;\n    }\n};\n")),Object(l.b)("p",null,"\u300c\u6211\u4eec\u5f3a\u8c03\uff0c\u4e8c\u5206\u7684\u672c\u8d28\u662f\u300c\u4e8c\u6bb5\u6027\u300d\u800c\u975e\u300c\u5355\u8c03\u6027\u300d\uff0c\u800c\u7ecf\u8fc7\u672c\u9898\uff0c\u6211\u4eec\u8fdb\u4e00\u6b65\u53d1\u73b0\u300c\u4e8c\u6bb5\u6027\u300d\u8fd8\u80fd\u7ee7\u7eed\u7ec6\u5206\uff0c\u4e0d\u4ec5\u4ec5\u53ea\u6709\u6ee1\u8db3 01 \u7279\u6027\uff08\u6ee1\u8db3/\u4e0d\u6ee1\u8db3\uff09\u7684\u300c\u4e8c\u6bb5\u6027\u300d\u53ef\u4ee5\u4f7f\u7528\u4e8c\u5206\uff0c\u6ee1\u8db3 1? \u7279\u6027\uff08\u4e00\u5b9a\u6ee1\u8db3/\u4e0d\u4e00\u5b9a\u6ee1\u8db3\uff09\u4e5f\u53ef\u4ee5\u4e8c\u5206\u3002\u300d"),Object(l.b)("h4",{id:"215-\u6570\u7ec4\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5927\u5143\u7d20---253"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array/"},"215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20 - 253")),Object(l.b)("p",null,"\u4e09\u8def\u5feb\u6392\u627e\u5230\u4e0b\u6807\uff01\uff01\uff01"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\nprivate:    \n    int ret = -1;\n    bool found = false;    \n    void findKthLargest(vector<int>& nums, int k, int l ,int r) {\n        if(l > r || found) return;\n        swap(nums[l], nums[l+rand()%(r-l+1)]);\n        int pivot = nums[l];\n        int lt = l;//[l+1 lt] < mid\n        int i = l+1;//[lt+1 i) == mid\n        int gt = r+1;//[gt r] > mid\n\n        while(i < gt) {\n            if(nums[i] > pivot) { //\u6ce8\u610f\uff1a\u7b2ck\u5927\u662f\u4ece\u5927\u5230\u5c0f\u6392\u5e8f\uff01\n                swap(nums[i],nums[lt+1]);\n                i++;\n                lt++;\n            }\n            else if(nums[i] == pivot) {\n                i++;\n            }\n            else {\n                swap(nums[i], nums[gt-1]);\n                gt--;\n            }\n        }        \n        swap(nums[l], nums[lt]);\n\n        if(k<=gt-1 && k >= lt) {\n            ret = nums[lt];\n            found = true;\n            return;\n        }\n\n        if(k < lt) {\n            findKthLargest(nums,k,l,lt-1);\n        }\n        else {\n            findKthLargest(nums,k,gt,r);\n        }\n        \n\n    } \npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        srand(time(NULL));\n        findKthLargest(nums,k-1,0,nums.size()-1);//\u6ce8\u610f\uff1a\u7b2ck\u5927\u5e94\u8be5\u53d6\u4e0b\u6807\u662fk-1\u7684\u90a3\u4e2a\u503c\u3002\n        return ret;\n    }\n};\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        if(nums.empty() || nums.size() < k || k <= 0) {\n            return -1;\n        }\n\n        //\u524d\u95ed\u540e\u5f00\uff0c\u8d77\u59cb\n        vector<int>::iterator start = nums.begin();\n        vector<int>::iterator end = nums.end();\n        while(1) {\n            int pivot = *(std::next(start, std::distance(start,end)/2));\n            vector<int>::iterator mid1 = std::partition(start,end,[&](const auto &e){return e > pivot;});\n            vector<int>::iterator mid2 = std::partition(start,end,[&](const auto &e){return e >= pivot;});\n\n            int r1 = distance(nums.begin(), mid1);\n            int r2 = distance(nums.begin(), mid2);\n\n            if(k <= r1) {\n                end = mid1;\n            }\n            else if(k >= r1+1 && k <= r2) {\n                return nums[k-1];\n            }\n            else {\n                start = mid2;\n            }          \n        }\n        return -1;\n    }\n};\n")),Object(l.b)("p",null,"\u5148\u6392\u5e8f\u540e\u53d6\u503c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},'class Solution:\n    def findKthLargest(self, nums, k):\n        """\n        :type nums: List[int]\n        :type k: int\n        :rtype: int\n        """\n        # list = sorted(nums)\n        # return list[-k]\n    \n        # nums.sort()\n        # return nums[-k]\n\n        nums.sort(reverse = True)\n        return nums[k-1]        \n')),Object(l.b)("h4",{id:"\u5251\u6307-offer-11-\u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57---13"},Object(l.b)("a",{parentName:"h4",href:"https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/"},"\u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57")," - 13"),Object(l.b)("p",null,"\u628a\u8fd9\u4e2a\u6570\u7ec4\u5206\u4e3a\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff0c\u6700\u5c0f\u503c\u5fc5\u7136\u5728\u53f3\u6392\u5e8f\u6570\u7ec4\u4e2d\uff01\u3002 \u6240\u4ee5mid\u548carr","[r]"," \u76f8\u6bd4\u8f83\uff0c\u6839\u636e\u4e0d\u540c\u7684\u60c5\u51b5\u6765\u7f29\u5c0f\u6570\u7ec4\uff0c\u76f4\u5230l==r\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int minNumberInRotateArray(vector<int> rotateArray) {\n        if(rotateArray.empty()) {\n            return -1;\n        }\n        \n        int l = 0, r = rotateArray.size()-1;\n        while(l <= r) {\n            int p = l + ((r-l)>>1);//\u6ce8\u610f\uff1a\u53f3\u79fb\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u975e\u5e38\u4f4e\uff0c\u9700\u8981\u52a0\u5c0f\u62ec\u53f7\u3002\n            if(rotateArray[p]>rotateArray[r]) {\n                l = p+1;\n            }\n            else if(rotateArray[p]<rotateArray[r]){\n                r = p;\n            }\n            else {\n                r--;\n            }\n            p = l + ((r-l)>>1);//\u6ce8\u610f\uff1a\u53f3\u79fb\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u975e\u5e38\u4f4e\uff0c\u9700\u8981\u52a0\u5c0f\u62ec\u53f7\u3002\n        }\n        return rotateArray[l];\n    }\n};\n")),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u3002\u6bcf\u6b21\u66f4\u65b0left\u548cright\u3002\u6700\u5178\u578b\u7684\u662f\u5feb\u901f\u6392\u5e8f\u3002"),Object(l.b)("li",{parentName:"ol"},"\u4f7f\u7528\u8fed\u4ee3\u5b9e\u73b0\u3002")))}o.isMDXComponent=!0},356:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return p}));var r=t(0),i=t.n(r);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var m=i.a.createContext({}),c=function(n){var e=i.a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},o=function(n){var e=c(n.components);return i.a.createElement(m.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,a=n.parentName,m=u(n,["components","mdxType","originalType","parentName"]),o=c(t),d=r,p=o["".concat(a,".").concat(d)]||o[d]||b[d]||l;return t?i.a.createElement(p,s(s({ref:e},m),{},{components:t})):i.a.createElement(p,s({ref:e},m))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,a=new Array(l);a[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var m=2;m<l;m++)a[m]=t[m];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);