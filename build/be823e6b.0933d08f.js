(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{1191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"radio",title:"Radio"},c={unversionedId:"radio",id:"version-3.0.0-next.36/radio",isDocsHomePage:!1,title:"Radio",description:"Radio is used when only one choice may be selected in a series of options.",source:"@site/versioned_docs/version-3.0.0-next.36/radio.md",slug:"/radio",permalink:"/docs/3.0.0-next.36/radio",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/radio.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"PinInput",permalink:"/docs/3.0.0-next.36/pinInput"},next:{title:"Select",permalink:"/docs/3.0.0-next.36/select"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Size",id:"size",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]},{value:"Props",id:"props",children:[{value:"Radio",id:"radio",children:[]},{value:"Radio Group",id:"radio-group",children:[]},{value:"Shared Style Props",id:"shared-style-props",children:[]}]}],d={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Radio")," is used when only one choice may be selected in a series of options."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/touchableopacity"}),Object(i.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))," form ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(i.b)("inlineCode",{parentName:"a"},"React Native"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/3.0.0-next.36/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")))),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Stack%2C%20Radio%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"disabled"},"Disabled"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Disabled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Stack%2C%20Radio%2C%20Text%2C%20%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"invalid"},"Invalid"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Invalid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EInvalid%20Radio%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"size"},"Size"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Stack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20colorScheme%3D%22red%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESmall%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20colorScheme%3D%22green%22%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EMedium%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20colorScheme%3D%22yellow%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ELarge%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"custom-color"},"Custom Color"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Custom Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Stack%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22red%22%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Ered%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22black%22%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Eblack%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22success%22%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Esuccess%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Custom Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Stack%2C%20Text%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20value%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22alien%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EAlien%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22red%22%0A%20%20%20%20%20%20%20%20%20%20value%3D%222%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22fire%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20mt%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFire%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22warning%22%0A%20%20%20%20%20%20%20%20%20%20value%3D%223%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22exclamation-thick%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20mt%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EWarning%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio Form Controlled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Radio%2C%0A%20%20Text%2C%0A%20%20FormControl%2C%0A%20%20Container%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%20%20Stack%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ESelect%20One%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EWe'll%20keep%20this%20between%20us.%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Radio With Ref","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Stack%2C%20Radio%2C%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%0A%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20onChange%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(value%20%3D%3D%3D%20'2')%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%20backgroundColor%3A%20'%2300de0050'%20%7D)%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%23fa000050'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CStack%20space%3D%7B2%7D%20alignItems%3D%22flex-start%22%3E%0A%20%20%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20opacity%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%221%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Wrong%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20opacity%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%222%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Correct%0A%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"Uses React Native ARIA ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/useRadioGroup"}),"@react-native-aria/radio")," which follows the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton"}),"Radio Group WAI-ARIA design pattern"),"."),Object(i.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Tab")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to either the checked radio item or the first radio item in the group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Space")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When focus is on an unchecked radio item, checks it.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ArrowDown")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next radio item in the group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ArrowRight")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next radio item in the group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ArrowUp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous radio item in the group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ArrowLeft")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous radio item in the group.")))),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"radio"},"Radio"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the input field in a radio (Useful for form submission)."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id assigned to input field."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used in the radio input. This is the value that will be returned on form submission"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultIsChecked"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be initially checked."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),", ",Object(i.b)("inlineCode",{parentName:"td"},"sm")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the radio."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"md"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be disabled"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"icon"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, will use this icon instead of the default."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio is marked as invalid. Changes style of unchecked state."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function called when the state of the radio changes."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The children of the radio."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ariaLabel"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An accessible label for the radio in event there's no visible label or children was passed"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h3",{id:"radio-group"},"Radio Group"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Radio.Group")," implements ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/3.0.0-next.36/box"}),"Box")),", so all the Box Props can be passed to it."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of the radio group."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial value of the radio group."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback fired when any children radio is checked or unchecked."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(i.b)("h3",{id:"shared-style-props"},"Shared Style Props"),Object(i.b)("p",null,"The following props can be set on ",Object(i.b)("inlineCode",{parentName:"p"},"Radio.Group")," and they will be forwarded to all children ",Object(i.b)("inlineCode",{parentName:"p"},"Radio")," components."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"default"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),", ",Object(i.b)("inlineCode",{parentName:"td"},"sm")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the radio."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"md"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be disabled"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio is marked as invalid. Changes style of unchecked state."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}b.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);