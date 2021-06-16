(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{610:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(742)),c={id:"textField",title:"TextField"},o={unversionedId:"textField",id:"version-3.0.0-next.37/textField",isDocsHomePage:!1,title:"TextField",description:"The TextField component is a component that is used to get user input in a text field.",source:"@site/versioned_docs/version-3.0.0-next.37/textField.md",slug:"/textField",permalink:"/3.0.0-next.37/textField",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/textField.md",version:"3.0.0-next.37"},l=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"When Invalid",id:"when-invalid",children:[]},{value:"With Icons",id:"with-icons",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TextField")," component is a component that is used to get user input in a text field."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.37/input"}),Object(i.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.37/VStack"}),Object(i.b)("inlineCode",{parentName:"a"},"VStack")))),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { TextField } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"TextField Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextField%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextFieldComponent%20()%20%7B%0A%20%20return%20%3CTextField%20w%3D%2290%25%22%20placeholder%3D%22Default%20TextField%22%20%2F%3E%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextFieldComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"when-invalid"},"When Invalid"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextField%2C%20NativeBaseProvider%2C%20Stack%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextFieldComponent%20()%20%7B%0A%20%20const%20%5BisInvalid%2C%20setIsInvalid%5D%20%3D%20React.useState(true)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CTextField%0A%20%20%20%20%20%20%20%20isInvalid%3D%7BisInvalid%7D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Default%20TextField%22%0A%20%20%20%20%20%20%20%20helperText%3D%22Sample%20helper%20text%22%0A%20%20%20%20%20%20%20%20errorMessage%3D%22Sample%20error%20message%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsInvalid(!isInvalid)%7D%3E%0A%20%20%20%20%20%20%20%20Toggle%20Invalid%20State%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextFieldComponent%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"with-icons"},"With Icons"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextField%2C%20NativeBaseProvider%2C%20Stack%2C%20Center%2C%20Icon%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextFieldComponent%20()%20%7B%0A%20%20const%20%5BisInvalid%2C%20setIsInvalid%5D%20%3D%20React.useState(true)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CTextField%0A%20%20%20%20%20%20%20%20bg%3D%22gray.300%22%0A%20%20%20%20%20%20%20%20variant%3D%22underlined%22%0A%20%20%20%20%20%20%20%20isInvalid%3D%7BisInvalid%7D%0A%20%20%20%20%20%20%20%20helperText%3D%22Sample%20helper%20text%22%0A%20%20%20%20%20%20%20%20errorMessage%3D%22Sample%20error%20message%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22Default%20TextField%22%0A%20%20%20%20%20%20%20%20InputLeftElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22calendar-today%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20%20%20my%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20ml%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22muted.500%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22cancel%22%20size%3D%22md%22%20my%3D%7B3%7D%20mr%3D%7B3%7D%20color%3D%22muted.500%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsInvalid(!isInvalid)%7D%3E%0A%20%20%20%20%20%20%20%20Toggle%20Invalid%20State%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextFieldComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helperText"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Helper text conveys additional guidance about the text field."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorMessage"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When text input isn't accepted, an error message can display instructions on how to fix it."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","helperTextProps"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.37/text#props"}),Object(i.b)("inlineCode",{parentName:"a"},"Text Props"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","errorMessageProps"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.37/text#props"}),Object(i.b)("inlineCode",{parentName:"a"},"Text Props"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("p",null,"Apart from these all the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.37/input#props"}),"Input")," can be passed to Input."))}d.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);