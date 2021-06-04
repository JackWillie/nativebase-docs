(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(720)),l={id:"formControl",title:"Form Control"},i={unversionedId:"formControl",id:"version-3.0.0-next.36/formControl",isDocsHomePage:!1,title:"Form Control",description:"FormControl provides context such as isInvalid, isDisabled, and isRequired to form elements.",source:"@site/versioned_docs/version-3.0.0-next.36/formControl.md",slug:"/formControl",permalink:"/3.0.0-next.36/formControl",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/formControl.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"DatePicker",permalink:"/3.0.0-next.36/date-picker"},next:{title:"IconButton",permalink:"/3.0.0-next.36/iconButton"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom Style",id:"custom-style",children:[]}]},{value:"Props",id:"props",children:[{value:"FormControl",id:"formcontrol",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FormControl")," provides context such as ",Object(a.b)("inlineCode",{parentName:"p"},"isInvalid"),", ",Object(a.b)("inlineCode",{parentName:"p"},"isDisabled"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"isRequired")," to form elements."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { FormControl } from 'native-base';\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("div",{className:"snack-player","data-snack-name":"FormControl Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%20%20Stack%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20FormControlComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%3CStack%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EFavorite%20framework%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20p%3D%7B2%7D%20mt%3D%7B2%7D%20placeholder%3D%22Is%20it%20react%3F%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%20mt%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%20mt%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Something%20is%20wrong.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FFormControl%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControlComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(a.b)("h3",{id:"custom-style"},"Custom Style"),Object(a.b)("div",{className:"snack-player","data-snack-name":"FormControl Example(CustomStyle)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20FormControl%2C%20Input%2C%20Stack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20FormControlComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20width%3D%2280%25%22%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CText%20bold%3E%0A%20%20%20%20%20%20%20%20Default%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EFavorite%20framework%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%20%20%3CText%20bold%3E%0A%20%20%20%20%20%20%20%20Custom%20style%20for%20disable%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%0A%20%20%20%20%20%20%20%20%20%20_disabled%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'gray.400'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Favorite%20framework%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%0A%20%20%20%20%20%20%20%20%20%20_disabled%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20borderLeftWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20mt%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20px%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20pl%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'gray.400'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%20%20%3CText%20bold%3E%0A%20%20%20%20%20%20%20%20Custom%20style%20for%20invalid%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%0A%20%20%20%20%20%20%20%20%20%20_invalid%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'rose.500'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Favorite%20framework%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%0A%20%20%20%20%20%20%20%20%20%20_invalid%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'red.400'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20underline%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControlComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"formcontrol"},"FormControl"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, this prop is passed to its children."),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isRequired"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, this prop is passed to its children."),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, this prop is passed to its children."),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isReadOnly"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, this prop is passed to its children."),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"FormControl.Label"),", ",Object(a.b)("strong",{parentName:"p"},"FormControl.HelperText"),", and ",Object(a.b)("strong",{parentName:"p"},"FormControl.ErrorMessage")," can be styled using pseudo style props like ",Object(a.b)("inlineCode",{parentName:"p"},"_invalid")," and ",Object(a.b)("inlineCode",{parentName:"p"},"_disabled"),"."))}p.isMDXComponent=!0},720:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return C}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,C=b["".concat(l,".").concat(d)]||b[d]||m[d]||a;return r?o.a.createElement(C,i(i({ref:t},s),{},{components:r})):o.a.createElement(C,i({ref:t},s))}));function C(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);