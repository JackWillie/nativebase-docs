(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{312:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(720)),i={id:"alertDialog",title:"AlertDialog"},l={unversionedId:"alertDialog",id:"version-3.0.0-next.37/alertDialog",isDocsHomePage:!1,title:"AlertDialog",description:"AlertDialog component is used to interrupt the user with a mandatory confirmation or action. AlertDialog\xa0composes\xa0Modal\xa0so you can use all its props.",source:"@site/versioned_docs/version-3.0.0-next.37/alertDialog.md",slug:"/alertDialog",permalink:"/3.0.0-next.37/alertDialog",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/alertDialog.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Heading",permalink:"/3.0.0-next.37/heading"},next:{title:"Menu",permalink:"/3.0.0-next.37/menu"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Transition",id:"transition",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AlertDialog")," component is used to interrupt the user with a mandatory confirmation or action. AlertDialog\xa0composes\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.37/modal"}),Object(o.b)("inlineCode",{parentName:"a"},"Modal")),"\xa0so you can use all its props."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog"),": provides context and state for the dialog."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog.Header"),": contains the title announced by screen readers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog.Body"),": contains the description announced by screen readers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog.Footer"),": contains the actions of the dialog."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog.Content"),": The wrapper for the alert dialog's content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AlertDialog.CloseButton"),": The button that closes the dialog.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { AlertDialog } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"AlertDialog Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20AlertDialog%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertDialogComponent()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20onClose%20%3D%20()%20%3D%3E%20setIsOpen(false)%3B%0A%20%20const%20cancelRef%20%3D%20React.useRef()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CAlertDialog%0A%20%20%20%20%20%20%20%20leastDestructiveRef%3D%7BcancelRef%7D%0A%20%20%20%20%20%20%20%20isOpen%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BonClose%7D%0A%20%20%20%20%20%20%20%20motionPreset%3D%7B%22fade%22%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAlertDialog.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Header%20fontSize%3D%22lg%22%20fontWeight%3D%22bold%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Delete%20Customer%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Are%20you%20sure%3F%20You%20can't%20undo%20this%20action%20afterwards.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20ref%3D%7BcancelRef%7D%20onPress%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Cancel%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22red%22%20onPress%3D%7BonClose%7D%20ml%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Delete%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Content%3E%0A%20%20%20%20%20%20%3C%2FAlertDialog%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22danger%22%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Delete%20Customer%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAlertDialogComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"transition"},"Transition"),Object(o.b)("div",{className:"snack-player","data-snack-name":"AlertDialog Transition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20AlertDialog%2C%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertDialogComponent()%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20onClose%20%3D%20()%20%3D%3E%20setIsOpen(false)%3B%0A%20%20const%20cancelRef%20%3D%20React.useRef()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CAlertDialog%0A%20%20%20%20%20%20%20%20motionPreset%3D%22fade%22%0A%20%20%20%20%20%20%20%20leastDestructiveRef%3D%7BcancelRef%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BonClose%7D%0A%20%20%20%20%20%20%20%20isOpen%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20isCentered%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAlertDialog.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Header%3EDiscard%20Changes%3F%3C%2FAlertDialog.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Are%20you%20sure%20you%20want%20to%20discard%20all%20of%20your%20notes%3F%2044%20words%20will%20be%0A%20%20%20%20%20%20%20%20%20%20%20%20deleted.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlertDialog.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20ref%3D%7BcancelRef%7D%20onPress%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20No%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22red%22%20ml%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Yes%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlertDialog.Content%3E%0A%20%20%20%20%20%20%3C%2FAlertDialog%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3EDiscard%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CAlertDialogComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"AlertDialog and its components compose the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.37/modal"}),"Modal"))," component, so all the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.37/modal#props"}),Object(o.b)("inlineCode",{parentName:"a"},"Modal props"))," can be passed to it. The only exception is that it requires ",Object(o.b)("inlineCode",{parentName:"p"},"leastDestructiveRef")," which is similar to ",Object(o.b)("inlineCode",{parentName:"p"},"initialFocusRef")," of ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"leastDestructiveRef"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React.Ref"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The least destructive action to get focus when dialog is open."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return A}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,A=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(A,l(l({ref:t},s),{},{components:n})):r.a.createElement(A,l({ref:t},s))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);