(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(a),f=n,u=b["".concat(i,".").concat(f)]||b[f]||d[f]||o;return a?r.a.createElement(u,p(p({ref:t},s),{},{components:a})):r.a.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},984:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1583)),i={id:"safe-area-view-props",title:"SafeAreaView Props"},p={unversionedId:"safe-area-view-props",id:"version-3.0.0-next.31/safe-area-view-props",isDocsHomePage:!1,title:"SafeAreaView Props",description:"To make your components respect the SafeAreaView of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props.",source:"@site/versioned_docs/version-3.0.0-next.31/safe-area-view-props.md",slug:"/safe-area-view-props",permalink:"/3.0.0-next.31/safe-area-view-props",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/safe-area-view-props.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"Responsive",permalink:"/3.0.0-next.31/responsive-style"},next:{title:"Default Theme",permalink:"/3.0.0-next.31/default-theme"}},c=[],s={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To make your components respect the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/safeareaview"}),"SafeAreaView")," of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeArea"),": Apply safe padding to all edges."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaX"),": Apply safe padding to x direction."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaY"),": Apply safe padding to y direction."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaTop"),": Apply safe padding to top."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaBottom"),": Apply safe padding to bottom."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaLeft"),": Apply safe padding to left."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaRight"),": Apply safe padding to right.")),Object(o.b)("p",null,"Internally, NativeBase uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/safe-area-context/#hooks"}),"useSafeAreaInsets")," hook of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),"react-native-safe-area-context"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"SafeAreaView props can only be applied on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.31/view"}),"View"),". To make you App SafeArea safe, just wrap your app with a View and pass safeArea prop to it."))))}l.isMDXComponent=!0}}]);