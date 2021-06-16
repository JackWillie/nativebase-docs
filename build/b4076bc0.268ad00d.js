(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{561:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(742)),o={id:"alert",title:"Alert"},c={unversionedId:"alert",id:"version-3.0.0-next.37/alert",isDocsHomePage:!1,title:"Alert",description:"Alerts are used to communicate a state that affects a system, feature or page.",source:"@site/versioned_docs/version-3.0.0-next.37/alert.md",slug:"/alert",permalink:"/3.0.0-next.37/alert",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/alert.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"List",permalink:"/3.0.0-next.37/list"},next:{title:"Progress",permalink:"/3.0.0-next.37/progress"}},l=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Status",id:"status",children:[]},{value:"Variant",id:"variant",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Action",id:"action",children:[]}]},{value:"Props",id:"props",children:[{value:"Alert",id:"alert",children:[]},{value:"Alert.Icon",id:"alerticon",children:[]},{value:"Alert.Title",id:"alerttitle",children:[]},{value:"Alert.Description",id:"alertdescription",children:[]}]},{value:"Accessibility",id:"accessibility",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Alerts")," are used to communicate a state that affects a system, feature or page."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 5 Alert related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert"),": The wrapper for alert components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Icon"),": The visual icon for the alert that changes based on the ",Object(i.b)("inlineCode",{parentName:"li"},"status")," prop."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Title"),": The title of the alert to be announced by screen readers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Description"),": The description of the alert to be announced by screen readers.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Alert } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Alert%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B3%7D%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CAlert%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Title%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20Alert%20Description%20should%20be%20a%20brief%20about%20the%20Alert%20Message.%0A%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"status"},"Status"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Stack%2C%20Alert%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%7B%5B%22error%22%2C%20%22warning%22%2C%20%22info%22%2C%20%22success%22%5D.map((key)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3E%7B%60This%20is%20an%20%24%7Bkey%7D%20alert%60%7D%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"variant"},"Variant"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Alert%2C%20Stack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22solid%22%20colorScheme%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Solid%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22left-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Left%20Accent%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22top-accent%22%20status%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Top%20Accent%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22warning%22%20variant%3D%22subtle%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Default%2FSubtle%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22info%22%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Outline%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22info%22%20variant%3D%22outline-light%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Outline%20Light%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Box%2C%0A%20%20VStack%2C%0A%20%20IconButton%2C%0A%20%20CloseIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20ScrollView%20%7D%20from%20%22react-native%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CVStack%20m%3D%7B3%7D%20space%3D%7B5%7D%3E%0A%20%20%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20display%3D%22flex%22%0A%20%20%20%20%20%20%20%20%20%20variant%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20borderColor%3D%22gray.200%22%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3D%22column%22%0A%20%20%20%20%20%20%20%20%20%20alignItems%3D%22center%22%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20boxSize%3D%2240px%22%20mr%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%20mt%3D%7B2%7D%20mb%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20This%20is%20a%20success%20alert%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20display%3D%22flex%22%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3D%22column%22%0A%20%20%20%20%20%20%20%20%20%20alignItems%3D%22center%22%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20boxSize%3D%2240px%22%20mr%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%20mt%3D%7B2%7D%20mb%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20This%20is%20a%20success%20alert%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBox%20flex%3D%7B1%7D%20ml%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20a%20success%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%20mt%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CCloseIcon%20color%3D%22success.500%22%20size%3D%22xs%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20right%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"action"},"Action"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Collapse%2C%0A%20%20Button%2C%0A%20%20IconButton%2C%0A%20%20Box%2C%0A%20%20CloseIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(true)%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CCollapse%20isOpen%3D%7Bshow%7D%3E%0A%20%20%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20%20%20status%3D%22error%22%0A%20%20%20%20%20%20%20%20%20%20action%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CCloseIcon%20color%3D%22red.400%22%20size%3D%22xs%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setShow(false)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20actionProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EError%20Alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%3Edescription%20goes%20here%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3C%2FCollapse%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%7B%22sm%22%7D%20onPress%3D%7B()%20%3D%3E%20setShow(true)%7D%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20Re-Open%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"alert"},"Alert"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        status\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The status of the alert\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        info\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},'\n        "solid" | "outline" | "subtle" | "left-accent" | "top-accent" | "outline-light"\n      '),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The variant of the alert style to use.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        subtle\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The colorScheme of the Alert.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        action\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The action to display. It renders after the message, at the end of the alert.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        actionProps\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Props to be passed to the action Wrapper Box\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"Alert implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(i.b)("h3",{id:"alerticon"},"Alert.Icon"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Ref to be attached to the Parent Box of the icon\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"AlertIcon implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"icon#props"}),"Icon"))),Object(i.b)("h3",{id:"alerttitle"},"Alert.Title"),Object(i.b)("p",null,"AlertTitle implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"text#props"}),"Text")),Object(i.b)("h3",{id:"alertdescription"},"Alert.Description"),Object(i.b)("p",null,"AlertDescription implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"text#props"}),"Text")),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"Alert has ",Object(i.b)("inlineCode",{parentName:"p"},"role")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"alert"),"."))}p.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return A})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},A=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),A=p(a),b=n,m=A["".concat(o,".").concat(b)]||A[b]||d[b]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);