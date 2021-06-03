(window.webpackJsonp=window.webpackJsonp||[]).push([[954],{1027:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1583)),i={id:"tag",title:"Tag"},c={unversionedId:"tag",id:"version-3.0.0-next.30/tag",isDocsHomePage:!1,title:"Tag",description:"Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.",source:"@site/versioned_docs/version-3.0.0-next.30/tag.md",slug:"/tag",permalink:"/3.0.0-next.30/tag",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/tag.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Stat",permalink:"/3.0.0-next.30/stat"},next:{title:"Alert",permalink:"/3.0.0-next.30/alert"}},s=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"With icon",id:"with-icon",children:[]},{value:"Custom",id:"custom",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Tag")," component is used for items that need to be labeled, categorized, or organized using keywords that describe them."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Tag } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Tag Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tag%2C%20NativeBaseProvider%2C%20View%2CuseColorModeValue%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TagComponent%20()%20%7B%0A%20%20return%20%3CTag%20colorScheme%3D%22green%22%3ENativeBase%3C%2FTag%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20flex%3D%7B1%7D%0A%20%20%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20%20%20alignItems%3D%22center%22%0A%20%20%20%20%20%20bg%3D%7BuseColorModeValue(%60gray.50%60%2C%20%60gray.800%60)%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTagComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"variants"},"Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Tag Example(Variants)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tag%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TagComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%7B%5B'solid'%2C%20'subtle'%2C%20'outline'%5D.map((variant%3A%20any)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CTag%20key%3D%7Bvariant%7D%20variant%3D%7Bvariant%7D%20colorScheme%3D%22green%22%3E%0A%20%20%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%3C%2FTag%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTagComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"sizes"},"Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Tag Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tag%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TagComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%7B%5B'sm'%2C%20'md'%2C%20'lg'%5D.map((size)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CTag%20size%3D%7Bsize%7D%20key%3D%7Bsize%7D%20variant%3D%22solid%22%20colorScheme%3D%22green%22%3E%0A%20%20%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%3C%2FTag%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTagComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"with-icon"},"With icon"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Tag Example(with icon)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tag%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TagComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTag%20colorScheme%3D%22green%22%20variant%3D%22solid%22%20rounded%3D%7B100%7D%3E%0A%20%20%20%20%20%20%3CIcon%20name%3D%7B'menu'%7D%20type%3D%22MaterialIcons%22%20color%3D%22white%22%20mr%3D%7B1%7D%20%2F%3E%0A%20%20%20%20%20%20Menu%0A%20%20%20%20%3C%2FTag%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTagComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"custom"},"Custom"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Tag Example(custom)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Tag%2C%0A%20%20Avatar%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20TagComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTag%20colorScheme%3D%22emerald%22%20size%3D%22sm%22%20rounded%3D%7B'full'%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20mr%3D%7B2%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%20%7D%7D%0A%20%20%20%20%20%20%20%20name%3D%7B'NativeBase'%7D%0A%20%20%20%20%20%20%20%20width%3D%7B6%7D%0A%20%20%20%20%20%20%20%20height%3D%7B6%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20NativeBase%0A%20%20%20%20%3C%2FTag%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTagComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"outline"),", ",Object(o.b)("inlineCode",{parentName:"td"},"solid"),", ",Object(o.b)("inlineCode",{parentName:"td"},"subtle")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant style of the tag component."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(o.b)("inlineCode",{parentName:"td"},"md"),", ",Object(o.b)("inlineCode",{parentName:"td"},"sm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the tag component."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"md"))))))}l.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=n,u=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);