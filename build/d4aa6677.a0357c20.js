(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{620:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(720)),i={id:"nativebase-factory",title:"NativeBase Factory"},c={unversionedId:"nativebase-factory",id:"version-3.0.0-next.36/nativebase-factory",isDocsHomePage:!1,title:"NativeBase Factory",description:"NativeBase factory is a function that converts non-nativebase components to nativebase enabled components so you can pass style props to them.",source:"@site/versioned_docs/version-3.0.0-next.36/nativebase-factory.md",slug:"/nativebase-factory",permalink:"/3.0.0-next.36/nativebase-factory",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/nativebase-factory.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Color Mode",permalink:"/3.0.0-next.36/color-mode"},next:{title:"Responsive",permalink:"/3.0.0-next.36/responsive-style"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Defining component theme",id:"defining-component-theme",children:[]},{value:"Using mode in component theme",id:"using-mode-in-component-theme",children:[]},{value:"Using ref",id:"using-ref",children:[]},{value:"Params",id:"params",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NativeBase factory is a function that converts non-nativebase components to nativebase enabled components so you can pass style props to them."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Factory } from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"NativeBase Factory Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Factory%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Afunction%20FactoryViewExample%20()%20%7B%0A%20%20const%20FactoryView%20%3D%20Factory(View)%3B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CFactoryView%20bg%3D%22emerald.400%22%20borderRadius%3D%7B4%7D%20size%3D%7B16%7D%20%2F%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFactoryViewExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"defining-component-theme"},"Defining component theme"),Object(o.b)("div",{className:"snack-player","data-snack-name":"NativeBase Factory Component Theme","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Factory%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Afunction%20FactoryViewExample%20()%20%7B%0A%20%20const%20FactoryView%20%3D%20Factory(View%2C%20%7B%0A%20%20%20%20baseStyle%3A%20%7B%0A%20%20%20%20%20%20bg%3A%20'cyan.300'%2C%0A%20%20%20%20%20%20borderRadius%3A%20'md'%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%20%20return%20%3CFactoryView%20size%3D%7B16%7D%20%2F%3E%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFactoryViewExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"using-mode-in-component-theme"},"Using mode in component theme"),Object(o.b)("div",{className:"snack-player","data-snack-name":"NativeBase Factory Component Theme","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Factory%2C%20themeTools%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Afunction%20FactoryViewModeExample%20()%20%7B%0A%20%20const%20FactoryView%20%3D%20Factory(View%2C%20%7B%0A%20%20%20%20baseStyle%3A%20(props)%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20bg%3A%20themeTools.mode('rose.500'%2C%20'cyan.300')(props)%2C%0A%20%20%20%20%20%20%20%20borderRadius%3A%20'md'%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%20%20return%20%3CFactoryView%20size%3D%7B16%7D%2F%3E%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFactoryViewModeExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"using-ref"},"Using ref"),Object(o.b)("div",{className:"snack-player","data-snack-name":"NativeBase Factory Using Ref","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Factory%2C%20Button%2C%20Stack%2C%20NativeBaseProvider%2CCenter%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Afunction%20FactoryViewRefExample%20()%20%7B%0A%20%20const%20NBInput%20%3D%20Factory(TextInput)%3B%0A%20%20const%20inputRef%20%3D%20React.useRef(null)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CNBInput%20ref%3D%7BinputRef%7D%20height%3D%7B10%7D%20border%3D%7B1%7D%20borderColor%3D'cyan.400'%20borderRadius%3D'md'%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20colorScheme%3D'emerald'%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20inputRef%3F.current%3F.focus()%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Set%20Focus%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFactoryViewRefExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"params"},"Params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"component"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React component"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Original component to be passed on which nativebase props have to be applied."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentTheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This object can include ",Object(o.b)("inlineCode",{parentName:"td"},"baseStyle"),", ",Object(o.b)("inlineCode",{parentName:"td"},"sizes"),", ",Object(o.b)("inlineCode",{parentName:"td"},"variants"),", ",Object(o.b)("inlineCode",{parentName:"td"},"defaultProps")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(a),b=n,u=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return a?r.a.createElement(u,c(c({ref:t},p),{},{components:a})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);