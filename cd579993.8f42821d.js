(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));t(0);var r=t(113);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const i={id:"values",title:"Values",sidebar_label:"Values"},o=[{value:"Value",id:"value",children:[{value:"Option",id:"option",children:[]},{value:"Lazy",id:"lazy",children:[]},{value:"Either",id:"either",children:[]},{value:"TryEx",id:"tryex",children:[]}]}],c={rightToc:o},l="wrapper";function u({components:e,...n}){return Object(r.b)(l,a({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"value"},"Value"),Object(r.b)("p",null,"Each ",Object(r.b)("inlineCode",{parentName:"p"},"Value")," in ",Object(r.b)("strong",{parentName:"p"},"Munus")," is immutable object."),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"/** @var Option<Success> $option */\n$option = Option::of(domainOperation());\n")),Object(r.b)("h3",{id:"lazy"},"Lazy"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"/** @var Lazy<int> $lazy */\n$lazy = Lazy::of(function (): int {return random_int(1, 1000); });\n")),Object(r.b)("h3",{id:"either"},"Either"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"/** @return Either<Failure,Success> */\nfunction domainOperation(): Either {}\n")),Object(r.b)("h3",{id:"tryex"},"TryEx"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"/** @var TryEx<Result> $result */\n$result = TryEx::of(function(){throw new \\DomainException('use ddd');});\n$result->getOrElse(new Result())\n")))}u.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=o(t),s=r,d=p[c+"."+s]||p[s]||u[s]||i;return t?a.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},l))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);