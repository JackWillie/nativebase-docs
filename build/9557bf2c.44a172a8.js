(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1036:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(1714)),i={id:"changelog",title:"Changelog"},c={unversionedId:"changelog",id:"version-3.0.0-next.30/changelog",isDocsHomePage:!1,title:"Changelog",description:"Features",source:"@site/versioned_docs/version-3.0.0-next.30/changelog.md",slug:"/changelog",permalink:"/3.0.0-next.30/changelog",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/changelog.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Typography",permalink:"/3.0.0-next.30/migration/Typography"},next:{title:"FAQ's",permalink:"/3.0.0-next.30/faq"}},l=[{value:"Features",id:"features",children:[]},{value:"Fixes",id:"fixes",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added Select variant. By default, will show native Picker based on platform. Styled variant is also present which is consistent across all platforms.")),Object(o.b)("h2",{id:"fixes"},"Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixes for component typings."),Object(o.b)("li",{parentName:"ul"},"Changes for CircularProgress API."),Object(o.b)("li",{parentName:"ul"},"Changes for tabs API."),Object(o.b)("li",{parentName:"ul"},"fix: now using outline for focus ring to prevent layout shift."),Object(o.b)("li",{parentName:"ul"},"Added focus ring on checkbox and radio."),Object(o.b)("li",{parentName:"ul"},"Changes for List API and added virtualized list example."),Object(o.b)("li",{parentName:"ul"},"Fixes for factory component proptypes")),Object(o.b)("p",null,"For more details. Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GeekyAnts/NativeBase/releases/tag/v3.0.0-next.28"}),"releases"),"."))}u.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);