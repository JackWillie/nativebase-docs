(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(o,".").concat(u)]||p[u]||A[u]||i;return a?r.a.createElement(b,c(c({ref:t},l),{},{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},237:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(1714)),o={id:"textArea",title:"TextArea"},c={unversionedId:"textArea",id:"version-3.0.0-next.30/textArea",isDocsHomePage:!1,title:"TextArea",description:"The Textarea component allows you to easily create multi-line text inputs.",source:"@site/versioned_docs/version-3.0.0-next.30/textArea.md",slug:"/textArea",permalink:"/3.0.0-next.30/textArea",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/textArea.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Switch",permalink:"/3.0.0-next.30/switch"},next:{title:"TypeAhead(Autocomplete)",permalink:"/3.0.0-next.30/typeAhead"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Invalid and Disabled TextArea",id:"invalid-and-disabled-textarea",children:[]},{value:"TextArea Sizes",id:"textarea-sizes",children:[]},{value:"Value Controlled TextArea",id:"value-controlled-textarea",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Textarea")," component allows you to easily create multi-line text inputs."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.30/input"}),Object(i.b)("inlineCode",{parentName:"a"},"Input")))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("div",{className:"snack-player","data-snack-name":"TextArea Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextArea%2C%20Heading%2C%20Center%2C%20Text%2C%20Stack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextAreaComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ETextArea%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDefault%20TextArea%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CTextArea%20w%3D%2290%25%22%20h%3D%22100%22%20placeholder%3D%22Text%20Area%20Placeholder%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextAreaComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"invalid-and-disabled-textarea"},"Invalid and Disabled TextArea"),Object(i.b)("div",{className:"snack-player","data-snack-name":"TextArea Invalid and Disabled TextArea","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextArea%2C%20Heading%2C%20Center%2C%20Text%2C%20Stack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextAreaComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ETextArea%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CText%3EInvalid%20TextArea%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CTextArea%20placeholder%3D%22Invalid%20TextArea%22%20w%3D%2290%25%22%20isInvalid%20%2F%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDisabled%20TextArea%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CTextArea%20placeholder%3D%22Disabled%20TextArea%22%20w%3D%2290%25%22%20isDisabled%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextAreaComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"textarea-sizes"},"TextArea Sizes"),Object(i.b)("div",{className:"snack-player","data-snack-name":"TextArea TextArea Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextArea%2C%20Heading%2C%20Center%2C%20Text%2C%20Stack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextAreaComponent%20()%20%7B%0A%09const%20Sizes%3A%20any%20%3D%20%5B'xs'%2C%20'sm'%2C%20'md'%2C%20'lg'%2C%20'xl'%2C%20'2xl'%5D%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ETextArea%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CText%3ETextArea%20with%20different%20font%20sizes%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%7BSizes.map((value%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CTextArea%20key%3D%7Bvalue%7D%20w%3D%2290%25%22%20size%3D%7Bvalue%7D%20placeholder%3D%7Bvalue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextAreaComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"value-controlled-textarea"},"Value Controlled TextArea"),Object(i.b)("div",{className:"snack-player","data-snack-name":"TextArea Value Controlled TextArea","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20TextArea%2C%20Heading%2C%20Center%2C%20Text%2C%20Stack%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextAreaComponent%20()%20%7B%0A%20%20const%20%5BtextAreaValue%2C%20setTextAreaValue%5D%20%3D%20useState('Value%20Controlled')%3B%0A%20%20const%20demoValueControlledTextArea%20%3D%20(e%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20setTextAreaValue(e.currentTarget.value)%3B%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ETextArea%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CText%3EValue%20Controlled%20TextArea%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CTextArea%0A%20%20%20%20%20%20%20%20w%3D%2290%25%22%0A%20%20%20%20%20%20%20%20value%3D%7BtextAreaValue%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7BdemoValueControlledTextArea%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextAreaComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalLines"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"maps to react-native TextInput's numberOfLines."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("p",null,"As ",Object(i.b)("inlineCode",{parentName:"p"},"TextArea")," composes ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.30/input"}),Object(i.b)("inlineCode",{parentName:"a"},"Input")),", all ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.30/input#props"}),Object(i.b)("inlineCode",{parentName:"a"},"Input Props"))," can be passed to it."))}d.isMDXComponent=!0}}]);