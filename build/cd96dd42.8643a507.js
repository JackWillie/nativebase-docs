(window.webpackJsonp=window.webpackJsonp||[]).push([[1329],{1400:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(1714)),o={id:"checkBox",title:"CheckBox"},s={unversionedId:"checkBox",id:"version-3.0.0-next.37/checkBox",isDocsHomePage:!1,title:"CheckBox",description:"The Checkbox component is used in forms when a user needs to select multiple values from several options.",source:"@site/versioned_docs/version-3.0.0-next.37/checkBox.md",slug:"/checkBox",permalink:"/3.0.0-next.37/checkBox",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/checkBox.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Button",permalink:"/3.0.0-next.37/button"},next:{title:"Form Control",permalink:"/3.0.0-next.37/formControl"}},i=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Controlled",id:"controlled",children:[]},{value:"Uncontrolled",id:"uncontrolled",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Size",id:"size",children:[]},{value:"Checkbox Group",id:"checkbox-group",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[{value:"Checkbox",id:"checkbox",children:[]},{value:"Checkbox.Group",id:"checkboxgroup",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]}],d={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Checkbox")," component is used in forms when a user needs to select multiple values from several options."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20HStack%2C%20Checkbox%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22test%22%20accessibilityLabel%3D%22This%20is%20a%20dummy%20checkbox%22%20%2F%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20value%3D%22test%22%0A%20%20%20%20%20%20%20%20accessibilityLabel%3D%22This%20is%20a%20dummy%20checkbox%22%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"controlled"},"Controlled"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BgroupValues%2C%20setGroupValues%5D%20%3D%20React.useState%20%3C%20Array%20%3C%20string%20%3E%3E%20%5B%5D%0A%20%20return%20(%0A%20%20%20%20%3CCheckbox.Group%20onChange%3D%7BsetGroupValues%7D%20value%3D%7BgroupValues%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22one%22%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20One%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22two%22%3ETwo%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"uncontrolled"},"Uncontrolled"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCheckbox.Group%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22one%22%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20Hello%20world%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22two%22%3EHello%20world%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"disabled"},"Disabled"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%20isDisabled%20value%3D%22one%22%3E%0A%20%20%20%20%20%20%20%20Checkbox%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20isDisabled%20defaultIsChecked%20value%3D%22two%22%3E%0A%20%20%20%20%20%20%20%20Checkbox%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"invalid"},"Invalid"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCheckbox%20isInvalid%20value%3D%22invalid%22%3E%0A%20%20%20%20%20%20Checkbox%0A%20%20%20%20%3C%2FCheckbox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"custom-color"},"Custom Color"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B3%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22danger%22%20colorScheme%3D%22danger%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Danger%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22info%22%20colorScheme%3D%22info%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Info%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22orange%22%20colorScheme%3D%22orange%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Orange%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22purple%22%20colorScheme%3D%22purple%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Purple%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialCommunityIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B3%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20value%3D%22orange%22%0A%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22bullseye%22%20fontSize%3D%2210%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Darts%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20value%3D%22dark%22%0A%20%20%20%20%20%20%20%20colorScheme%3D%22dark%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22bat%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Movie%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22red%22%0A%20%20%20%20%20%20%20%20value%3D%22red%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22campfire%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Camping%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20value%3D%22blue%22%0A%20%20%20%20%20%20%20%20colorScheme%3D%22blue%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22chess-knight%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Chess%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"size"},"Size"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%20value%3D%22red%22%20colorScheme%3D%22red%22%20size%3D%22sm%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Checkbox%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22green%22%20size%3D%22md%22%20defaultIsChecked%20value%3D%22green%22%3E%0A%20%20%20%20%20%20%20%20Checkbox%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22yellow%22%20value%3D%22yellow%22%20size%3D%22lg%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20Checkbox%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"checkbox-group"},"Checkbox Group"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Checkbox%2C%0A%20%20Heading%2C%0A%20%20HStack%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BgroupValue%2C%20setGroupValue%5D%20%3D%20React.useState(%5B%22Item%201%22%2C%20%22Item%203%22%5D)%0A%0A%20%20const%20getSelectedGroupValue%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(groupValue.length%20%3D%3D%3D%200)%20return%20%22%5B%5D%22%0A%20%20%20%20let%20arrayString%20%3D%20groupValue.reduce(%0A%20%20%20%20%20%20(accumulator%2C%20currentValue)%20%3D%3E%20accumulator%20%2B%20%22%2C%20%22%20%2B%20currentValue%0A%20%20%20%20)%0A%20%20%20%20return%20%22%5B%22%20%2B%20arrayString%20%2B%20%22%5D%22%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CBox%20display%3D%22flex%22%20justifyContent%3D%22space-between%22%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHStack%20mb%3D%7B3%7D%20alignItems%3D%22baseline%22%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3ECheckboxGroup%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CCheckbox.Group%0A%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20defaultValue%3D%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(values)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setGroupValue(values%20%7C%7C%20%5B%5D)%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%201%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Item%201%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%202%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Item%202%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%203%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Item%203%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20%20%20isIndeterminate%0A%20%20%20%20%20%20%20%20%20%20value%3D%22Indeterminate%20Item%22%0A%20%20%20%20%20%20%20%20%20%20my%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Indeterminate%20Item%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20%20%20%20%20%3CVStack%20mt%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3ESelected%20Values%3A%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%20bold%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7BgetSelectedGroupValue()%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Checkbox%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Container%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BgroupValue%2C%20setGroupValue%5D%20%3D%20React.useState(%5B%22Item%201%22%2C%20%22Item%203%22%5D)%0A%0A%20%20const%20getSelectedGroupValue%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(groupValue.length%20%3D%3D%3D%200)%20return%20%22%5B%5D%22%0A%20%20%20%20let%20arrayString%20%3D%20groupValue.reduce(%0A%20%20%20%20%20%20(accumulator%2C%20currentValue)%20%3D%3E%20accumulator%20%2B%20%22%2C%20%22%20%2B%20currentValue%0A%20%20%20%20)%0A%20%20%20%20return%20%22%5B%22%20%2B%20arrayString%20%2B%20%22%5D%22%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ESelect%20Item%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox.Group%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20defaultValue%3D%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(values)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setGroupValue(values%20%7C%7C%20%5B%5D)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20alignItems%3D%22flex-start%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%201%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Item%201%0A%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%202%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Item%202%0A%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%203%22%20my%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Item%203%0A%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20%20%20%20%20isIndeterminate%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%22Indeterminate%20Item%22%0A%20%20%20%20%20%20%20%20%20%20%20%20my%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Indeterminate%20Item%0A%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%0A%20%20%20%20%20%20%3CVStack%20mt%3D%7B4%7D%20alignItems%3D%22baseline%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3ESelected%20Values%3A%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%20bold%3E%0A%20%20%20%20%20%20%20%20%20%20%7BgetSelectedGroupValue()%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Checkbox%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialCommunityIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(%7B%7D)%0A%20%20return%20(%0A%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20value%3D%22success%22%0A%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20icon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22bullseye%22%20opacity%3D%7B1%7D%20%2F%3E%7D%0A%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20onChange%3D%7B(state)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(state)%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22%2300de0050%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22%23fa000050%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Label%0A%20%20%20%20%3C%2FCheckbox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"checkbox"},"Checkbox"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        id\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        assign id to checkbox\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        name\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The name of the input field in a checkbox.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The value to be used in the checkbox input. This is the value that will be returned on form submission.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        defaultIsChecked\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox will be initially checked. (use defaultValue prop if using it inside Checkbox.Group)\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isChecked\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox will be checked. You'll need to pass onChange to update it's value (since it's now controlled).\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isIndeterminate\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox will be indeterminate. This only affects the icon shown inside checkbox.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox will be disabled\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isInvalid\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox is marked as invalid. Changes style of unchecked state.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        "sm" | "md" | "lg"\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The size (width and height) of the checkbox.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        'md'\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        icon\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If given, will use this icon instead of the default.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onChange\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        (isSelected: boolean) => void\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Function called when the state of the checkbox changes.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Ref to be passed to Icon's wrapper Box\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"Checkbox implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(c.b)("h3",{id:"checkboxgroup"},"Checkbox.Group"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        id\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        assign id to checkbox group\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any[]\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The value of the checkbox group.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        defaultValue\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any[]\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The initial value of the checkbox group.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        "sm" | "md" | "lg"\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The size (width and height) of the checkbox.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onChange\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        (values: any) => any\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The callback fired when any children Checkbox is checked or unchecked.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"CheckboxGroup implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(c.b)("h2",{id:"accessibility"},"Accessibility"),Object(c.b)("p",null,"Uses React Native ARIA ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/useCheckbox"}),"@react-native-aria/checkbox")," which follows the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox"}),"Checkbox WAI-ARIA design pattern"),"."),Object(c.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Space")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks/unchecks the checkbox.")))))}b.isMDXComponent=!0},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=b(a),m=n,A=l["".concat(o,".").concat(m)]||l[m]||p[m]||c;return a?r.a.createElement(A,s(s({ref:t},d),{},{components:a})):r.a.createElement(A,s({ref:t},d))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<c;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);