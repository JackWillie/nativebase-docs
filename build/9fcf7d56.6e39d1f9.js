(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1102:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(1714)),i={id:"toast",title:"Toast"},s={unversionedId:"toast",id:"version-3.0.0-next.36/toast",isDocsHomePage:!1,title:"Toast",description:"Toast is used to show alerts on top of an overlay. Toast will close itself when the close button is clicked, or after a timeout \u2014 the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place.",source:"@site/versioned_docs/version-3.0.0-next.36/toast.md",slug:"/toast",permalink:"/3.0.0-next.36/toast",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/toast.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Spinner",permalink:"/3.0.0-next.36/spinner"},next:{title:"Text",permalink:"/3.0.0-next.36/text"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Position",id:"position",children:[]},{value:"Offset",id:"offset",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:c};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Toast")," is used to show alerts on top of an overlay. ",Object(o.b)("inlineCode",{parentName:"p"},"Toast")," will close itself when the close button is clicked, or after a timeout \u2014 the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useToast } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Toast Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useToast%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ToastComponent%20()%20%7B%0A%20%20const%20toast%20%3D%20useToast()%3B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20toast(%7B%0A%20%20%20%20%20%20%20%20%20%20position%3A%20'top'%2C%0A%20%20%20%20%20%20%20%20%20%20title%3A%20'Toast%20Top'%2C%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%09%09%20Toast%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CToastComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"position"},"Position"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Toast Position","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useToast%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ToastComponent%20()%20%7B%0A%20%20const%20toast%20%3D%20useToast()%3B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20toast(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20'top'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'Top%20Toast'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Top%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20toast(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'Center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Center%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20mx%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20toast(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'Bottom'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Botton%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CToastComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"offset"},"Offset"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Toast Offset","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useToast%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ToastComponent%20()%20%7B%0A%20%20const%20toast%20%3D%20useToast()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20toast(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%201000%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'Toast%20Center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20offset%3A%20%7B%20x%3A%20100%2C%20y%3A%20100%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Buttom%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CToastComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The title of the toast."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","title"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that contains props for Title styling."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"long"),", ",Object(o.b)("inlineCode",{parentName:"td"},"short"),", number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The duration of toast. If number, then in mili-seconds."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"position"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"bottom"),", ",Object(o.b)("inlineCode",{parentName:"td"},"center"),", ",Object(o.b)("inlineCode",{parentName:"td"},"top")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position at which toast will appear."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"bottom"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{x: number y: number}"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The offset of toast from regular position."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1714:function(t,e,a){"use strict";a.d(e,"a",(function(){return b})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},b=function(t){var e=p(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,s(s({ref:e},l),{},{components:a})):r.a.createElement(m,s({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);