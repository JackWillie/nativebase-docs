(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(1583)),c={id:"simpleGrid",title:"SimpleGrid"},o={unversionedId:"simpleGrid",id:"version-3.0.0-next.30/simpleGrid",isDocsHomePage:!1,title:"SimpleGrid",description:"SimpleGrid provides an interface to create responsive grids using simple props.",source:"@site/versioned_docs/version-3.0.0-next.30/simpleGrid.md",slug:"/simpleGrid",permalink:"/docs/3.0.0-next.30/simpleGrid",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/simpleGrid.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"HStack / Row",permalink:"/docs/3.0.0-next.30/hStack"},next:{title:"Stack",permalink:"/docs/3.0.0-next.30/stack"}},l=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[{value:"Using columns",id:"using-columns",children:[]},{value:"Using minChildWidth",id:"using-minchildwidth",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SimpleGrid")," provides an interface to create responsive grids using simple props."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { SimpleGrid } from 'native-base';\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"using-columns"},"Using columns"),Object(i.b)("div",{className:"snack-player","data-snack-name":"SimpleGrid Usage","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20SimpleGrid%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20React%20from%20'react'%3B%0A%0Aconst%20items%20%3D%2012%3B%0Aconst%20data%20%3D%20Array(items).fill(0)%3B%0A%0Afunction%20SimpleGridComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20columns%3D%7B3%7D%20spacing%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7Bdata.map((_item%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CBox%20key%3D%7Bindex%7D%20bg%3D%22%23d1d1d1%22%20height%3D%7B100%7D%20width%3D%7B100%7D%3E%3C%2FBox%3E%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSimpleGridComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"using-minchildwidth"},"Using minChildWidth"),Object(i.b)("div",{className:"snack-player","data-snack-name":"SimpleGrid minWidthChild","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20SimpleGrid%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20React%20from%20'react'%3B%0A%0Aconst%20items%20%3D%2012%3B%0Aconst%20data%20%3D%20Array(items).fill(0)%3B%0A%0Afunction%20SimpleGridComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20minChildWidth%3D%7B60%7D%20spacing%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7Bdata.map((_item%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CBox%20key%3D%7Bindex%7D%20bg%3D%22%23d2d2d2%22%20height%3D%7B60%7D%20width%3D%7B60%7D%3E%3C%2FBox%3E%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSimpleGridComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"columns"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of columns in a row"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"minChildWidth"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number to set the minimum child width of a grid item."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"spacing"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number to set the horizontal and vertical spacing between grid items."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"spacingX"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number to set the horizontal spacing between grid items."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"spacingY"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number to set the vertical spacing between grid items."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Either ",Object(i.b)("inlineCode",{parentName:"p"},"columns")," or ",Object(i.b)("inlineCode",{parentName:"p"},"minChildWidth")," is required."))}s.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(u,o(o({ref:t},d),{},{components:n})):r.a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);