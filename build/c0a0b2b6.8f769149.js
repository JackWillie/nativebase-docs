(window.webpackJsonp=window.webpackJsonp||[]).push([[1135],{1207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),c=(a(0),a(1583)),i={id:"breadcrumb",title:"Breadcrumb"},o={unversionedId:"breadcrumb",id:"version-3.0.0-next.35/breadcrumb",isDocsHomePage:!1,title:"Breadcrumb",description:"Implements",source:"@site/versioned_docs/version-3.0.0-next.35/breadCrumb.md",slug:"/breadcrumb",permalink:"/3.0.0-next.35/breadcrumb",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/breadCrumb.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"ActionSheet",permalink:"/3.0.0-next.35/actionSheet"},next:{title:"Collapse",permalink:"/3.0.0-next.35/collapse"}},b=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Icon Separators",id:"icon-separators",children:[]},{value:"Text Separators",id:"text-separators",children:[]},{value:"Composition",id:"composition",children:[]}]},{value:"Props",id:"props",children:[{value:"Breadcrumb",id:"breadcrumb",children:[]},{value:"Breadcrumb.Item",id:"breadcrumbitem",children:[]},{value:"Breadcrumb.Link",id:"breadcrumblink",children:[]}]}],m={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/3.0.0-next.35/link"}),Object(c.b)("inlineCode",{parentName:"a"},"Link")),", ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/3.0.0-next.35/flex"}),Object(c.b)("inlineCode",{parentName:"a"},"Flex")),".")),Object(c.b)("h2",{id:"import"},"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Breadcrumb } from 'nativebase';\n")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("p",null,"Add ",Object(c.b)("inlineCode",{parentName:"p"},"isCurrentPage")," prop to the ",Object(c.b)("inlineCode",{parentName:"p"},"Breadcrumb.Item")," that matches the current path."),Object(c.b)("div",{className:"snack-player","data-snack-name":"Breadcrumb Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Breadcrumb%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20BreadcrumbComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EThis%20is%20a%20Default%20Breadcrumb%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CBreadcrumb%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%20isCurrentPage%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%3EHome%20(This%20is%20currently%20active)%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%20href%3D%22https%3A%2F%2Falpha.nativebase.io%2F%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Docs%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%0A%20%20%20%20%20%20%20%20%20%20%20%20href%3D%22https%3A%2F%2Fgithub.com%2FGeekyAnts%2Fnativebase%22%0A%20%20%20%20%20%20%20%20%20%20%20%20isExternal%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Github%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%3C%2FBreadcrumb%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumbComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h3",{id:"icon-separators"},"Icon Separators"),Object(c.b)("p",null,"Change the ",Object(c.b)("inlineCode",{parentName:"p"},"separator")," used in the breadcrumb by passing a string, like ",Object(c.b)("inlineCode",{parentName:"p"},"'-'")," or any Component."),Object(c.b)("div",{className:"snack-player","data-snack-name":"Breadcrumb Component Separator","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Breadcrumb%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%20%20Icon%0A%7D%20from%20'native-base'%3B%0Afunction%20BreadcrumbComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EBreadcrumb%20with%20Custom%20Separator%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CBreadcrumb%0A%20%20%20%20%20%20%20%20spacing%3D%7B1%7D%0A%20%20%20%20%20%20%20%20separator%3D%7B%3CIcon%20name%3D%22keyboard-arrow-right%22%20size%3D%7B5%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%20isCurrentPage%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%3EHome%20(This%20is%20currently%20active)%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%20href%3D%22https%3A%2F%2Falpha.nativebase.io%2F%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Docs%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%0A%20%20%20%20%20%20%20%20%20%20%20%20href%3D%22https%3A%2F%2Fgithub.com%2FGeekyAnts%2Fnativebase%22%0A%20%20%20%20%20%20%20%20%20%20%20%20isExternal%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Github%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%3C%2FBreadcrumb%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumbComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h3",{id:"text-separators"},"Text Separators"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Breadcrumb String Separator","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Breadcrumb%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Icon%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Afunction%20BreadcrumbComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EBreadcrumb%20with%20String%20Separator%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CBreadcrumb%20bold%20italic%20separator%3D%22-%22%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%20isCurrentPage%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%3EHome%20(This%20is%20currently%20active)%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%20href%3D%22https%3A%2F%2Falpha.nativebase.io%2F%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Docs%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%0A%20%20%20%20%20%20%20%20%20%20%20%20href%3D%22https%3A%2F%2Fgithub.com%2FGeekyAnts%2Fnativebase%22%0A%20%20%20%20%20%20%20%20%20%20%20%20isExternal%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Github%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%3C%2FBreadcrumb%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumbComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h3",{id:"composition"},"Composition"),Object(c.b)("p",null,"Breadcrumb composes Box so you can pass all Box props to change the style of the breadcrumbs. Let's say we need to increase the fontSize and change color of the breadcrumbs."),Object(c.b)("div",{className:"snack-player","data-snack-name":"Breadcrumb Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Breadcrumb%2C%20Box%2C%20Heading%2C%20Icon%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20BreadcrumbComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EBreadcrumb%20Composition%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CBreadcrumb%20spacing%3D%7B2%7D%20fontSize%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22home%22%20mr%3D%7B1%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Home%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%20href%3D%22https%3A%2F%2Falpha.nativebase.io%2F%22%20isExternal%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22file-document%22%20type%3D%22MaterialCommunityIcons%22%20mr%3D%7B1%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Docs%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%0A%20%20%20%20%20%20%20%20%3CBreadcrumb.Item%20isCurrentPage%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBreadcrumb.Link%0A%20%20%20%20%20%20%20%20%20%20%20%20href%3D%22https%3A%2F%2Fgithub.com%2FGeekyAnts%2Fnativebase%22%0A%20%20%20%20%20%20%20%20%20%20%20%20isExternal%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22github%22%20type%3D%22AntDesign%22%20mr%3D%7B1%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Github%20(This%20is%20currently%20active)%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Link%3E%0A%20%20%20%20%20%20%20%20%3C%2FBreadcrumb.Item%3E%0A%20%20%20%20%20%20%3C%2FBreadcrumb%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreadcrumbComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"breadcrumb"},"Breadcrumb"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"separator"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSX.Element, string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The visual separator between the breadcrumb item."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"spacing"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://styled-system.com/api/#space"}),Object(c.b)("inlineCode",{parentName:"a"},"MarginProps"))),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The space between each stack item."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h3",{id:"breadcrumbitem"},"Breadcrumb.Item"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isCurrentPage"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"If true, it indicates that the breadcrumb link is active page."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h3",{id:"breadcrumblink"},"Breadcrumb.Link"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Breadcrumb.Link")," composes the\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/3.0.0-next.35/link"}),Object(c.b)("inlineCode",{parentName:"a"},"Link"))," component so you can use all Link props."))}s.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),s=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,u=d["".concat(i,".").concat(p)]||d[p]||l[p]||c;return a?n.a.createElement(u,o(o({ref:t},m),{},{components:a})):n.a.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<c;m++)i[m]=a[m];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);