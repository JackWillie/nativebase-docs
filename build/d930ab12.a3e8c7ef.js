(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{640:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),c=a(7),r=(a(0),a(733)),o={id:"checkBox",title:"CheckBox"},i={unversionedId:"checkBox",id:"version-3.0.0-next.36/checkBox",isDocsHomePage:!1,title:"CheckBox",description:"The Checkbox component is used in forms when a user needs to select multiple values from several options.",source:"@site/versioned_docs/version-3.0.0-next.36/checkBox.md",slug:"/checkBox",permalink:"/3.0.0-next.36/checkBox",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/checkBox.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Cascader",permalink:"/3.0.0-next.36/cascader"},next:{title:"DatePicker",permalink:"/3.0.0-next.36/date-picker"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Size",id:"size",children:[]},{value:"Checkbox Group",id:"checkbox-group",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]},{value:"Props",id:"props",children:[{value:"Checkbox",id:"checkbox",children:[]},{value:"Checkbox.Group",id:"checkboxgroup",children:[]},{value:"Shared Style Props",id:"shared-style-props",children:[]}]}],b={toc:l};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Checkbox")," component is used in forms when a user needs to select multiple values from several options."),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/touchableopacity"}),Object(r.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))," form ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(r.b)("inlineCode",{parentName:"a"},"React Native"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box")))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20%3CCheckbox%20%2F%3E%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"disabled"},"Disabled"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Disabled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%3E%0A%20%20%20%20%20%20%3CCheckbox%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CText%20m%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20isDisabled%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20m%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"invalid"},"Invalid"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Invalid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20HStack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CCheckbox%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"custom-color"},"Custom Color"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Custom Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22critical%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECritical%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22info%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EInfo%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22orange%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EOrange%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22purple%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EPurple%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox CustomIcon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Text%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EDarts%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22dark%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22bat%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EMovie%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22red%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22campfire%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECamping%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22blue%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22chess-knight%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EChess%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"size"},"Size"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Size","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20VStack%2C%20Text%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22red.200%22%20size%3D%22sm%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20colorScheme%3D%22green.200%22%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22done%22%20type%3D%22MaterialIcons%22%20size%3D%7B40%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20defaultIsChecked%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CCheckbox%20colorScheme%3D%22yellow.200%22%20size%3D%22lg%22%20defaultIsChecked%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ECheckbox%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"checkbox-group"},"Checkbox Group"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Group","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Checkbox%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%20%20HStack%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Stack%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20const%20%5BgroupValue%2C%20setGroupValue%5D%20%3D%20React.useState(%5B%22Item%201%20%22%2C%20%22Item%203%20%22%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20display%3D%22flex%22%20justifyContent%3D%22space-between%22%20alignItems%3D%22center%22%20m%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CHStack%20mb%3D%7B2%7D%20alignItems%3D%22baseline%22%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3ECheckboxGroup%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CCheckbox.Group%0A%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20defaultValue%3D%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(values)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setGroupValue(values%20%7C%7C%20%5B%5D)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%201%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%201%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%202%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%203%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%203%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20%20%20isIndeterminate%0A%20%20%20%20%20%20%20%20%20%20value%3D%22Indeterminate%20Item%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EIndeterminate%20Item%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20%20%20%20%20%3CVStack%20mt%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3ESelected%20Values%3A%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%20bold%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox Form Controlled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Checkbox%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Container%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%20%20%20Stack%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20const%20%5BgroupValue%2C%20setGroupValue%5D%20%3D%20React.useState(%5B%22Item%201%20%22%2C%20%22Item%203%20%22%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EFavorite%20framework%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CCheckbox.Group%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20defaultValue%3D%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(values)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setGroupValue(values)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20alignItems%3D%22flex-start%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%201%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%201%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%202%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCheckbox%20value%3D%22Item%203%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EItem%203%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22orange%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20isIndeterminate%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%22Indeterminate%20Item%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EIndeterminate%20Item%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20%20%20%3C%2FCheckbox.Group%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EWe'll%20keep%20this%20between%20us.%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%0A%20%20%20%20%20%20%3CVStack%20mt%3D%7B3%7D%20alignItems%3D%22baseline%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3ESelected%20Values%3A%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%20bold%3E%0A%20%20%20%20%20%20%20%20%20%20%7BgroupValue%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(r.b)("div",{className:"snack-player","data-snack-name":"CheckBox With Ref","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Checkbox%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CheckboxComponent()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20opacity%3D%7B0%7D%20%2F%3E%7D%0A%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20onChange%3D%7B(_%2C%20state)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(state)%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%20backgroundColor%3A%20%22%2300de0050%22%20%7D)%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22%23fa000050%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7B%22%20%22%7D%0A%20%20%20%20%20%20label%0A%20%20%20%20%3C%2FCheckbox%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckboxComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h2",{id:"accessibility"},"Accessibility"),Object(r.b)("p",null,"Uses React Native ARIA ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/useCheckbox"}),"@react-native-aria/checkbox")," which follows the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox"}),"Checkbox WAI-ARIA design pattern"),"."),Object(r.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Space")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks/unchecks the checkbox.")))),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"checkbox"},"Checkbox"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the input field in a checkbox."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used in the checkbox input. This is the value that will be returned on form submission."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultIsChecked"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox will be initially checked. (use ",Object(r.b)("inlineCode",{parentName:"td"},"defaultValue")," prop if using it inside Checkbox.Group)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isChecked"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox will be checked. You'll need to pass onChange to update it's value (since it's now controlled)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isIndeterminate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox will be indeterminate. This only affects the icon shown inside checkbox."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(r.b)("inlineCode",{parentName:"td"},"md"),", ",Object(r.b)("inlineCode",{parentName:"td"},"sm")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the checkbox."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"md"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox will be disabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"icon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, will use this icon instead of the default."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox is marked as invalid. Changes style of unchecked state."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function called when the state of the checkbox changes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The children of the checkbox."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"checkboxgroup"},"Checkbox.Group"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Checkbox.Group")," implements ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"/3.0.0-next.36/box"}),"Box")),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of the checkbox group."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial value of the checkbox group."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback fired when any children Checkbox is checked or unchecked."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,"The following props can be set on ",Object(r.b)("inlineCode",{parentName:"p"},"Checkbox.Group")," and they will be forwarded to all children ",Object(r.b)("inlineCode",{parentName:"p"},"Checkbox")," components."),Object(r.b)("h3",{id:"shared-style-props"},"Shared Style Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(r.b)("inlineCode",{parentName:"td"},"md"),", ",Object(r.b)("inlineCode",{parentName:"td"},"sm")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the checkbox."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"md"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox will be disabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox is marked as invalid. Changes style of unchecked state."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}s.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return C}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,C=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?c.a.createElement(C,i(i({ref:t},b),{},{components:a})):c.a.createElement(C,i({ref:t},b))}));function C(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<r;b++)o[b]=a[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);