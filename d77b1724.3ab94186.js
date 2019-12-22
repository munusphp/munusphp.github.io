(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));t(51),t(24),t(19),t(20),t(52),t(0);var a=t(166);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={id:"functional-programming",title:"Functional programming",sidebar_label:"Functional programming"},o=[{value:"Functional paradigm",id:"functional-paradigm",children:[]},{value:"Functional programming in PHP",id:"functional-programming-in-php",children:[]}],l={rightToc:o},c="wrapper";function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"functional-paradigm"},"Functional paradigm"),Object(a.b)("p",null,"Functional programming is one of three available programming paradigms (the other two are structural and object-oriented programming).\nIt was created before the first computer program was written.\nIt is a direct consequence of the work of Alonzo Church, who invented the lambda calculus."),Object(a.b)("p",null,"The fundamental characteristic of the lambda account is immutability. No value or symbol can change."),Object(a.b)("p",null,"This one feature makes the functional approach lacking assignment instructions.\nIn fact, it is available, but it is nevertheless subject to very strict discipline. "),Object(a.b)("h2",{id:"functional-programming-in-php"},"Functional programming in PHP"),Object(a.b)("p",null,"PHP supports classic concepts from the functional world, such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"first-class function (function can be assigned to a variable, can be referenced by a variable and invoked dynamically)"),Object(a.b)("li",{parentName:"ul"},"recursion (allows a function to call itself)"),Object(a.b)("li",{parentName:"ul"},"anonymous functions (with support for closures and ability to bind closures to an object\u2019s scope)"),Object(a.b)("li",{parentName:"ul"},"higher-order functions (such as ",Object(a.b)("inlineCode",{parentName:"li"},"array_filter")," or ",Object(a.b)("inlineCode",{parentName:"li"},"array_map"),")")),Object(a.b)("p",null,"Below we can see a simple example of using several of them:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"function criteria_lower_than($max)\n{\n    return function($item) use ($max) {\n        return $item < $max;\n    };\n}\n\n$input = [1, 2, 3, 4, 5, 6];\n$output = array_filter($input, criteria_lower_than(4));\n// 1, 2, 3\n")),Object(a.b)("p",null,"Unfortunately, despite this, there is no common interface to seamlessly connect all aspects of the functional world.\nThere are also other problems:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"not every function guarantees immutability (",Object(a.b)("inlineCode",{parentName:"li"},"array_map")," vs ",Object(a.b)("inlineCode",{parentName:"li"},"sort"),")"),Object(a.b)("li",{parentName:"ul"},"difference in order of parameters (",Object(a.b)("inlineCode",{parentName:"li"},"array_filter")," vs ",Object(a.b)("inlineCode",{parentName:"li"},"array_map"),")"),Object(a.b)("li",{parentName:"ul"},"lack of fluent interface (",Object(a.b)("inlineCode",{parentName:"li"},"array_*")," hell)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Munus")," tries to solve these and other problems so that you can enjoy the joy of\nfunctional programming in a fully object oriented style."))}u.isMDXComponent=!0},166:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=o(t),s=a,m=p[l+"."+s]||p[s]||u[s]||i;return t?r.a.createElement(m,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(m,Object.assign({},{ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);