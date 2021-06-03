(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1583)),o={id:"link",title:"Link"},c={unversionedId:"link",id:"version-3.0.0-next.36/link",isDocsHomePage:!1,title:"Link",description:"Links are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink.",source:"@site/versioned_docs/version-3.0.0-next.36/link.md",slug:"/link",permalink:"/3.0.0-next.36/link",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/link.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"NumberInput",permalink:"/3.0.0-next.36/numberInput"},next:{title:"PinInput",permalink:"/3.0.0-next.36/pinInput"}},s=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"External Link",id:"external-link",children:[]},{value:"Link without Underline",id:"link-without-underline",children:[]},{value:"Link custom OnClick",id:"link-custom-onclick",children:[]},{value:"Link around containers",id:"link-around-containers",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Links")," are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink."),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Link } from 'native-base';\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"View"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Linking"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TouchableWithoutFeedback")," from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(i.b)("inlineCode",{parentName:"a"},"React Native")),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Link Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Link%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CLink%3E%0A%20%20%20%20%20%20Default%20Link%0A%20%20%20%20%3C%2FLink%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"external-link"},"External Link"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Link External link","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CLink%20href%3D%22https%3A%2F%2Fnativebase.io%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20https%3A%2F%2Fnativebase.io%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"link-without-underline"},"Link without Underline"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Link Link without Underline","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CLink%20href%3D%22https%3A%2F%2Fnativebase.io%22%20isExternal%20isUnderlined%3D%7Bfalse%7D%3E%0A%20%20%20%20%20%20%20%20https%3A%2F%2Fnativebase.io%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"link-custom-onclick"},"Link custom OnClick"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Link Link custom OnClick","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20const%20%5Bstate%2C%20setState%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20toggleState%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setState(!state)%3B%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CLink%20onClick%3D%7BtoggleState%7D%3E%0A%20%20%20%20%20%20%20%20Click%20here%20to%20toggle%20the%20color%20of%20box.%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%20%20%3CBox%20mt%3D%7B4%7D%20size%3D%7B16%7D%20bg%3D%7Bstate%20%3F%20%22orange.300%22%20%3A%20%22blue.300%22%7D%20rounded%3D%22lg%22%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"link-around-containers"},"Link around containers"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Link Link around containers","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20Text%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CLink%20href%3D%22https%3A%2F%2Fnativebase.io%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20bg%3D%22emerald.400%22%20size%3D%7B20%7D%20rounded%3D%22lg%22%20_text%3D%7B%7Bcolor%3A%20%22white%22%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Click%20here%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Link implements ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.36/box"}),"Box")),", so all the Box Props can be passed to it."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isExternal"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the link will open in a browser."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onClick"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function called when the link is clicked."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0}}]);