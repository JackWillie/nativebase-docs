(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{376:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(742)),i={id:"stack",title:"Stack"},o={unversionedId:"stack",id:"version-3.0.0-next.36/stack",isDocsHomePage:!1,title:"Stack",description:"Stack aligns items vertically.",source:"@site/versioned_docs/version-3.0.0-next.36/stack.md",slug:"/stack",permalink:"/3.0.0-next.36/stack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/stack.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"SimpleGrid",permalink:"/3.0.0-next.36/simpleGrid"},next:{title:"View",permalink:"/3.0.0-next.36/view"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Stack")," aligns items vertically."),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/view"}),Object(c.b)("inlineCode",{parentName:"a"},"View"))," from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/view"}),"React Native")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"space"),", ",Object(c.b)("inlineCode",{parentName:"li"},"border"),", ",Object(c.b)("inlineCode",{parentName:"li"},"layout"),", ",Object(c.b)("inlineCode",{parentName:"li"},"flexbox")," and ",Object(c.b)("inlineCode",{parentName:"li"},"color")," from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://styled-system.com/api"}),"style-system"))),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Stack Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Stack%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Afunction%20StackComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B3%7D%20mb%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CBox%20borderRadius%3D%7B4%7D%20size%3D%7B10%7D%20bg%3D%22red.400%22%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20borderRadius%3D%7B4%7D%20size%3D%7B10%7D%20bg%3D%22purple.500%22%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20borderRadius%3D%7B4%7D%20size%3D%7B10%7D%20bg%3D%22yellow.300%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CStackComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you want to pass custom components (not a nativebase imported component) as direct Children of Stack, VStack, HStack, or ZStack you must wrap that in a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.36/box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," for Stacks to work as expected.")),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"divider"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The divider element to use between elements."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"space"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://styled-system.com/api/#space"}),Object(c.b)("inlineCode",{parentName:"a"},"MarginProps"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The space between each stack item."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reversed"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction to stack the elements"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The elements to be stacked."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||c;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);