(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(1714)),i={id:"FAB",title:"FAB"},c={unversionedId:"FAB",id:"version-3.0.0-next.33/FAB",isDocsHomePage:!1,title:"FAB",description:"A floating action button is a circular icon button that hovers over content to promote a primary action in the application.",source:"@site/versioned_docs/version-3.0.0-next.33/FAB.md",slug:"/FAB",permalink:"/3.0.0-next.33/FAB",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/FAB.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"AppBar",permalink:"/3.0.0-next.33/appBar"},next:{title:"Transition",permalink:"/3.0.0-next.33/transition"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom Position",id:"custom-position",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A floating action button is a circular icon button that hovers over content to promote a primary action in the application."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/3.0.0-next.33/iconButton"}),Object(o.b)("inlineCode",{parentName:"a"},"IconButton")))),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Fab } from 'native-base';\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"FAB Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Fab%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20FabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFab%0A%20%20%20%20%20%20placement%3D%7B'bottomRight'%7D%0A%20%20%20%20%20%20bg%3D%22teal.200%22%0A%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22plus%22%20type%3D%22AntDesign%22%20%2F%3E%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"custom-position"},"Custom Position"),Object(o.b)("div",{className:"snack-player","data-snack-name":"FAB Custom Position","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20Fab%2C%20Icon%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20React%20from%20'react'%3B%0A%0Afunction%20FabComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CFab%0A%20%20%20%20%20%20%20%20bg%3D%22teal.200%22%0A%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20bottom%3D%7B4%7D%0A%20%20%20%20%20%20%20%20right%3D%7B24%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22plus%22%20type%3D%22AntDesign%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20label%3D%7B%3CText%20fontSize%3D%22sm%22%3EClick%3C%2FText%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FAB")," implements ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.33/iconButton"}),"IconButton")),", so all the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.33/iconButton#props"}),Object(o.b)("inlineCode",{parentName:"a"},"IconButton Props"))," can be passed to it."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"placement"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"top-right"),",",Object(o.b)("inlineCode",{parentName:"td"},"top-left"),",",Object(o.b)("inlineCode",{parentName:"td"},"bottom-right"),", ",Object(o.b)("inlineCode",{parentName:"td"},"bottom-left")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Applies placements."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"bottom-right"))))))}s.isMDXComponent=!0}}]);