(window.webpackJsonp=window.webpackJsonp||[]).push([[1278],{1349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(1583)),i={id:"actionSheet",title:"ActionSheet"},c={unversionedId:"actionSheet",id:"version-3.0.0-next.35/actionSheet",isDocsHomePage:!1,title:"ActionSheet",description:"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.",source:"@site/versioned_docs/version-3.0.0-next.35/actionSheet.md",slug:"/actionSheet",permalink:"/3.0.0-next.35/actionSheet",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/actionSheet.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Accordion",permalink:"/3.0.0-next.35/accordion"},next:{title:"Breadcrumb",permalink:"/3.0.0-next.35/breadcrumb"}},s=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Composition",id:"composition",children:[]},{value:"DisableOverlay",id:"disableoverlay",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet"),": Provides the context and state for all components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Content"),": Wrapper for the\xa0",Object(r.b)("strong",{parentName:"li"},"Actionsheet.Header and Actionsheet.Item"),"\xa0components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Header"),": Provides a header to the list."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Footer"),": A separated footer component for better customisation support. Wrapper for the ",Object(r.b)("strong",{parentName:"li"},"Actionsheet.Item"),"\xa0components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Item"),": A button to wrap the options of the Actionsheet.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Actionsheet } from 'native-base';\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"composition"},"Composition"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Divider%2C%20Actionsheet%2C%20useDisclose%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"disableoverlay"},"DisableOverlay"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet DisplayOverlay","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%20disableOverlay%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isOpen"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, actionsheet will be open."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onClose"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback when actionsheet is closed."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disableOverlay"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, disables the overlay."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ActionSheet"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Actionsheet.Content"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Actionsheet.Header"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Actionsheet.Footer")," implement ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.35/box"}),"Box")),", so all the Box Props can be passed to them."),Object(r.b)("p",null,"Actionsheet.Item implements ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.35/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button")),", all the props of ",Object(r.b)("inlineCode",{parentName:"p"},"Button")," can be passed here."))}p.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return A}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,A=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return n?o.a.createElement(A,c(c({ref:t},l),{},{components:n})):o.a.createElement(A,c({ref:t},l))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);