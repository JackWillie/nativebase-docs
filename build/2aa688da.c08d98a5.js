(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),s=(a(0),a(733)),i={id:"circularProgress",title:"CircularProgress"},o={unversionedId:"circularProgress",id:"version-3.0.0-next.36/circularProgress",isDocsHomePage:!1,title:"CircularProgress",description:"Circular Progress is used to indicate the progress for determinate and indeterminate processes.",source:"@site/versioned_docs/version-3.0.0-next.36/circularProgress.md",slug:"/circularProgress",permalink:"/3.0.0-next.36/circularProgress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/circularProgress.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Alert",permalink:"/3.0.0-next.36/alert"},next:{title:"Progress",permalink:"/3.0.0-next.36/progress"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"CircularProgress Sizes",id:"circularprogress-sizes",children:[]},{value:"CircularProgress Thickness",id:"circularprogress-thickness",children:[]},{value:"CircularProgress Color",id:"circularprogress-color",children:[]},{value:"CircularProgress TrackColor",id:"circularprogress-trackcolor",children:[]},{value:"CircularProgress Min and Max",id:"circularprogress-min-and-max",children:[]},{value:"CircularProgress Label",id:"circularprogress-label",children:[]},{value:"Indeterminate Progress",id:"indeterminate-progress",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Circular Progress is used to indicate the progress for determinate and indeterminate processes."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { CircularProgress } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EDefault%20CircularProgress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B80%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-sizes"},"CircularProgress Sizes"),Object(s.b)("p",null,"You can add a size prop to the CircularProgress to add a custom size or choose from defined sizes."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20size%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B60%7D%20size%3D%7B60%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-thickness"},"CircularProgress Thickness"),Object(s.b)("p",null,"You can add the thickness prop to update the thickness of the progress ring."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Thickness","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20thickness%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B70%7D%20thickness%3D%7B10%7D%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-color"},"CircularProgress Color"),Object(s.b)("p",null,"You can add the color prop to apply any color that the theme contains."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EChanging%20the%20color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20color%3D%22red.200%22%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-trackcolor"},"CircularProgress TrackColor"),Object(s.b)("p",null,"You can add the trackColor prop to apply any color that the theme contains to the CircularProgress track."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress TrackColor","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%3EChanging%20the%20Track%20Color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20trackColor%3D%22blue.100%22%20%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-min-and-max"},"CircularProgress Min and Max"),Object(s.b)("p",null,"You can add min and max props to manage what is the start and end value of your CircularProgress."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress min max","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%3EMin%20and%20Max%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%0A%20%20%20%20%20%20%20%20mt%3D%7B6%7D%0A%20%20%20%20%20%20%20%20value%3D%7B550%7D%0A%20%20%20%20%20%20%20%20max%3D%7B1000%7D%0A%20%20%20%20%20%20%20%20min%3D%7B100%7D%0A%20%20%20%20%20%20%20%20size%3D%7B100%7D%0A%20%20%20%20%20%20%20%20color%3D%22red.200%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20550%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"circularprogress-label"},"CircularProgress Label"),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Label","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EAdding%20label%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%0A%20%20%20%20%20%20%20%20mt%3D%7B6%7D%0A%20%20%20%20%20%20%20%20value%3D%7B45%7D%0A%20%20%20%20%20%20%20%20size%3D%7B60%7D%0A%20%20%20%20%20%20%20%20color%3D%22red.200%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'blue.400'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%2045%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"indeterminate-progress"},"Indeterminate Progress"),Object(s.b)("p",null,"Setting the progress to indeterminate means that the value can't be determined upfront. Pass the isIndeterminate prop to activate this state."),Object(s.b)("div",{className:"snack-player","data-snack-name":"CircularProgress Indeterminate Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20CircularProgress%2C%0A%20%20Center%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20'native-base'%3B%0Afunction%20CircularProgressComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3EIndeterminate%20Progress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCircularProgress%20mt%3D%7B6%7D%20value%3D%7B50%7D%20isIndeterminate%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%2050%25%0A%20%20%20%20%20%20%3C%2FCircularProgress%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCircularProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"size"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"4xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"3xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(s.b)("inlineCode",{parentName:"td"},"xl"),",",Object(s.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(s.b)("inlineCode",{parentName:"td"},"md"),", ",Object(s.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(s.b)("inlineCode",{parentName:"td"},"xs"),", number"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The size of circular progress."),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"lg"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"max"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Maximum value defining 100% progress made (must be higher than 'min')"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"min"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Minimum value defining 'no progress' (must be lower than 'max')"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Current progress (must be between min/max)"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isIndeterminate"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Puts the component into indeterminate state. When passed, the 'value' prop is ignored"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"thickness"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number, string"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The thickness of the progress indicator"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"trackColor"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The color name of the progress track. Use a color key from the theme object"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"color"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The color of the progress indicator. Use a color key from the theme object"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_","text"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(r.a)({parentName:"td"},{href:"/3.0.0-next.36/text#props"}),"TextProps")),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Text styling for Label Text."),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||s;return a?n.a.createElement(m,o(o({ref:t},l),{},{components:a})):n.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);