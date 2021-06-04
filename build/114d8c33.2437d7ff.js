(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(720)),c={id:"code",title:"Code"},i={unversionedId:"code",id:"version-3.0.0-next.38/code",isDocsHomePage:!1,title:"Code",description:"Code is a component used to display inline code. It is composed from the Box component with a mono font family (Courier on ios) for displaying code.",source:"@site/versioned_docs/version-3.0.0-next.38/code.md",slug:"/code",permalink:"/3.0.0-next.38/code",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/code.md",version:"3.0.0-next.38"},s=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Colors",id:"colors",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Code")," is a component used to display inline code. It is composed from the Box component with a mono font family (",Object(o.b)("em",{parentName:"p"},"Courier")," on ios) for displaying code."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Code } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Code Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Code%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CodeComponent%20()%20%7B%0A%20%20return%20%3CCode%20colorScheme%3D%22success%22%3EHello%20World!%3C%2FCode%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCodeComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"colors"},"Colors"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Code Example(Colors)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Code%2C%20Stack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CodeComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCode%3Elet%20direction%20%3D%20%22row%22%3B%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22danger%22%3Econsole.log('Hey%20there!')%3B%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22success%22%3Eyarn%20add%20native-base%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22dark%22%3EReact%20Native%3C%2FCode%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCodeComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Code")," implements ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.38/box"}),"Box")),", so all the Box Props can be passed to it."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ReactNode"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The content of the code."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}l.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(u,i(i({ref:t},d),{},{components:n})):r.a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);