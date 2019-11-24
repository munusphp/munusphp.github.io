(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(51),n(24),n(19),n(20),n(52),n(0);var a=n(150);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={id:"collections",title:"Collections",sidebar_label:"Collections"},i=[{value:"Traversable",id:"traversable",children:[{value:"Set",id:"set",children:[]},{value:"Stream",id:"stream",children:[]},{value:"GenericList",id:"genericlist",children:[]}]}],c={rightToc:i},o="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"traversable"},"Traversable"),Object(a.b)("p",null,"Each collection in ",Object(a.b)("strong",{parentName:"p"},"Munus")," extends the ",Object(a.b)("inlineCode",{parentName:"p"},"Traversable")," class."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"Data structure which only holds unique values. Set is implemented as immutable array."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"Set::empty();\nSet::of('first', 'second');\nSet::ofAll(['alpha', 'beta']);\n")),Object(a.b)("p",null,"You can ",Object(a.b)("inlineCode",{parentName:"p"},"add")," new element, ",Object(a.b)("inlineCode",{parentName:"p"},"remove")," existing one and check if given ",Object(a.b)("inlineCode",{parentName:"p"},"$element")," exist with ",Object(a.b)("inlineCode",{parentName:"p"},"contains"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$set = Set::of('alpha');\n\n$set2 = $set->add('beta');\n$set3 = $set2->remove('beta');\n\n$set->contains('alhpa'); // true\n")),Object(a.b)("p",null,"You can also join two sets with ",Object(a.b)("inlineCode",{parentName:"p"},"union"),". The merged set will contain only unique values."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"$set = Set::of('alpha');\n$set2 = Set::of('alpha', 'beta');\n\n$set->union($set2); // 'alpha', 'beta'\n")),Object(a.b)("h3",{id:"stream"},"Stream"),Object(a.b)("h3",{id:"genericlist"},"GenericList"))}s.isMDXComponent=!0}}]);