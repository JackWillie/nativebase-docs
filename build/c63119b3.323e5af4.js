(window.webpackJsonp=window.webpackJsonp||[]).push([[1174],{1246:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return A}));var r=a(3),n=a(7),i=(a(0),a(1583)),o={id:"alert",title:"Alert"},l={unversionedId:"alert",id:"version-3.0.0-next.27/alert",isDocsHomePage:!1,title:"Alert",description:"Alerts are used to communicate a state that affects a system, feature or page.",source:"@site/versioned_docs/version-3.0.0-next.27/alert.md",slug:"/alert",permalink:"/docs/3.0.0-next.27/alert",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/alert.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Tag",permalink:"/docs/3.0.0-next.27/tag"},next:{title:"CircularProgress",permalink:"/docs/3.0.0-next.27/circularProgress"}},c=[{value:"Import",id:"import",children:[]},{value:"Basic",id:"basic",children:[]},{value:"Status",id:"status",children:[]},{value:"Variant",id:"variant",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Action",id:"action",children:[]},{value:"Props",id:"props",children:[{value:"Alert",id:"alert",children:[]},{value:"Alert.Icon",id:"alerticon",children:[]},{value:"Alert.Title",id:"alerttitle",children:[]},{value:"Alert.Description",id:"alertdescription",children:[]}]}],s={toc:c};function A(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Alerts are used to communicate a state that affects a system, feature or page."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert"),": The wrapper for alert components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Icon"),": The visual icon for the alert that changes based on the ",Object(i.b)("inlineCode",{parentName:"li"},"status")," prop."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Title"),": The title of the alert to be announced by screen readers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Alert.Description"),": The description of the alert to be announced by screen readers.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Alert } from 'native-base';\n")),Object(i.b)("h2",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Alert Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20CloseButton%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20AlertComponent()%20%7B%0A%09return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EError%20Alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Description%3Edescription%20goes%20here%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3CCloseButton%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"status"},"Status"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Alert Status","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Stack%2C%20Alert%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%09return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%7B%5B'subtle'%2C%20'solid'%2C%20'outline'%5D.map((key%3A%20any)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CStack%20space%3D%7B3%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22error%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20an%20error%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22warning%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20a%20warning%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22info%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20an%20info%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20a%20success%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"variant"},"Variant"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Alert Variant","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Stack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%09return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22solid%22%20status%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Solid%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22left-accent%22%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Left%20Accent%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20variant%3D%22top-accent%22%20status%3D%22error%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Top%20Accent%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22warning%22%20variant%3D%22subtle%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Default%2FSubtle%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22info%22%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Outline%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3CAlert%20status%3D%22info%22%20variant%3D%22outline-light%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%3EAlert%20Outline%20Light%20Variant%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"composition"},"Composition"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Alert Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20CloseButton%2C%20Box%2C%20VStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AlertComponent()%20%7B%0A%09return%20(%0A%20%20%20%20%3CVStack%20mx%3D%7B2%7D%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20display%3D%22flex%22%0A%20%20%20%20%20%20%20%20variant%3D%22outline%22%0A%20%20%20%20%20%20%20%20borderColor%3D%22gray.200%22%0A%20%20%20%20%20%20%20%20flexDirection%3D%22column%22%0A%20%20%20%20%20%20%20%20alignItems%3D%22center%22%0A%20%20%20%20%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20%20%20%20%20height%3D%22200px%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20boxSize%3D%2240px%22%20mr%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%20mt%3D%7B4%7D%20mb%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20This%20is%20a%20success%20alert%0A%20%20%20%20%20%20%20%20%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%0A%20%20%20%20%20%20%20%20%20%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20display%3D%22flex%22%0A%20%20%20%20%20%20%20%20flexDirection%3D%22column%22%0A%20%20%20%20%20%20%20%20alignItems%3D%22center%22%0A%20%20%20%20%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20%20%20%20%20height%3D%22200px%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20boxSize%3D%2240px%22%20mr%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Title%20mt%3D%7B4%7D%20mb%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20This%20is%20a%20success%20alert%0A%20%20%20%20%20%20%20%20%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%0A%20%20%20%20%20%20%20%20%20%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%0A%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBox%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EThis%20is%20a%20success%20alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%0A%20%20%20%20%20%20%20%20%20%20%20%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%0A%20%20%20%20%20%20%20%20%20%20%20%20aliquip%20ex%20ea%20commodo%20consequat.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%3CCloseButton%20position%3D%22absolute%22%20top%3D%7B2%7D%20right%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"action"},"Action"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Alert Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20CloseButton%2C%20Collapse%2C%20Button%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20AlertComponent()%20%7B%0A%09const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(true)%3B%0A%20%20const%20handleToggle%20%3D%20(val%3A%20boolean)%20%3D%3E%20setShow(val)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CCollapse%20isOpen%3D%7Bshow%7D%3E%0A%20%20%20%20%20%20%20%20%3CAlert%0A%20%20%20%20%20%20%20%20%20%20status%3D%22error%22%0A%20%20%20%20%20%20%20%20%20%20action%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCloseButton%20size%3D%7B'xs'%7D%20onPress%3D%7B()%20%3D%3E%20handleToggle(false)%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EError%20Alert%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%3Edescription%20goes%20here%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%3C%2FCollapse%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%7B'sm'%7D%20onPress%3D%7B()%20%3D%3E%20handleToggle(true)%7D%3E%0A%20%20%20%20%20%20%20%20Re-Open%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAlertComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"alert"},"Alert"),Object(i.b)("p",null,"Implement ",Object(i.b)("inlineCode",{parentName:"p"},"Box"),", all the props of Box can be passed."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"status"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"error, info, success, warning"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The status of the alert."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"info")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"variant"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"left-accent, solid, subtle, top-accent"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The variant of the alert style to use."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"subtle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"action"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The action to display. It renders after the message, at the end of the alert."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h3",{id:"alerticon"},"Alert.Icon"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Alert.Icon")," composes ",Object(i.b)("inlineCode",{parentName:"p"},"Icon")," and changes the icon based on the status prop."),Object(i.b)("h3",{id:"alerttitle"},"Alert.Title"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Alert.Title")," composes the ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component."),Object(i.b)("h3",{id:"alertdescription"},"Alert.Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Alert.Description")," composes the ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component."))}A.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),A=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=A(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=A(a),u=r,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?n.a.createElement(b,l(l({ref:t},s),{},{components:a})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);