(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||c;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},716:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(1583)),o={},i={unversionedId:"ZStack",id:"version-3.0.0-next.27/ZStack",isDocsHomePage:!1,title:"ZStack",description:"ZStack aligns items absolutely.",source:"@site/versioned_docs/version-3.0.0-next.27/ZStack.md",slug:"/ZStack",permalink:"/docs/3.0.0-next.27/ZStack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/ZStack.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Wrap",permalink:"/docs/3.0.0-next.27/wrap"},next:{title:"Button",permalink:"/docs/3.0.0-next.27/button"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"ZStack",id:"zstack",children:[]}]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ZStack aligns items absolutely."),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"View")," from nativebase")),Object(c.b)("h2",{id:"import"},"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { ZStack } from 'native-base';\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("div",{className:"snack-player","data-snack-name":"ZStack Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ZStack%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ZStackComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CZStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CBox%20p%3D%7B16%7D%20bg%3D%22black%22%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20p%3D%7B10%7D%20bg%3D%22red.200%22%20%2F%3E%0A%20%20%20%20%3C%2FZStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CZStackComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("p",null,"You can pass ",Object(c.b)("inlineCode",{parentName:"p"},'alignItems="center"')," ",Object(c.b)("inlineCode",{parentName:"p"},'justifyContent="center"')," to vertically and horizontally center the children."),Object(c.b)("div",{className:"snack-player","data-snack-name":"ZStack Usage1","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ZStack%2C%20Box%2C%20Text%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ZStackComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20px%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CZStack%20alignItems%3D%22center%22%20justifyContent%3D%22center%22%20height%3D%2250%25%22%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%7B24%7D%20bg%3D%22blue.500%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%7B16%7D%20bg%3D%22black%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%7B10%7D%20bg%3D%22red.200%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ENot%20Inside%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FZStack%3E%0A%20%20%20%20%20%20%3CText%20lineHeight%3D%7B8%7D%20letterSpacing%3D%7B1.2%7D%20textAlign%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20Pass%20alignItems%3D%22center%22%20and%20justifyContent%3D%22center%22%20to%20ZStack%20to%0A%20%20%20%20%20%20%20%20achieve%20this%20structure%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CZStackComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"zstack"},"ZStack"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reversed"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction to stack the elements."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0}}]);