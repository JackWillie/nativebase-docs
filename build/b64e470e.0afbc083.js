(window.webpackJsonp=window.webpackJsonp||[]).push([[1074],{1146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(1583)),i={id:"radio",title:"Radio"},c={unversionedId:"radio",id:"version-3.0.0-next.24/radio",isDocsHomePage:!1,title:"Radio",description:"Radio is used when only one choice may be selected in a series of options.",source:"@site/versioned_docs/version-3.0.0-next.24/radio.md",slug:"/radio",permalink:"/3.0.0-next.24/radio",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/radio.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"PinInput",permalink:"/3.0.0-next.24/pinInput"},next:{title:"Select",permalink:"/3.0.0-next.24/select"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Disabled",id:"disabled",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Size",id:"size",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"With Ref",id:"with-ref",children:[]},{value:"Props",id:"props",children:[{value:"Radio",id:"radio",children:[]},{value:"Radio Group",id:"radio-group",children:[]},{value:"Shared Style Props",id:"shared-style-props",children:[]}]}],d={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Radio")," is used when only one choice may be selected in a series of options."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TouchableOpacity")," from react-native."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Box")," from native-base.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Text%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"disabled"},"Disabled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Disabled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Text%2C%20%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"invalid"},"Invalid"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Invalid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20Text%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EInvalid%20Radio%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"size"},"Size"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20%20Text%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%221%22%20colorScheme%3D%22red%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESmall%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%222%22%20colorScheme%3D%22green%22%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EMedium%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20value%3D%223%22%20colorScheme%3D%22yellow%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ELarge%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"custom-color"},"Custom Color"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Custom Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20%20Text%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22red%22%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Ered%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22black%22%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Eblack%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%20colorScheme%3D%22success%22%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3Esuccess%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"custom-icon"},"Custom Icon"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Custom Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Radio%2C%20%20Text%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22green%22%0A%20%20%20%20%20%20%20%20value%3D%221%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22alien%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EAlien%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22red%22%0A%20%20%20%20%20%20%20%20value%3D%222%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22fire%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFire%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22warning%22%0A%20%20%20%20%20%20%20%20value%3D%223%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22exclamation-thick%22%20type%3D%22MaterialCommunityIcons%22%20%2F%3E%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EWarning%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"form-controlled"},"Form Controlled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio Form Controlled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Radio%2C%0A%20%20Text%2C%0A%20%20FormControl%2C%0A%20%20Container%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ESelect%20One%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CRadio.Group%20defaultValue%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EFirst%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%222%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3ESecond%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRadio%20value%3D%223%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%3EThird%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EWe'll%20keep%20this%20between%20us.%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"with-ref"},"With Ref"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Radio With Ref","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20%20Radio%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20RadioComponent%20()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CRadio.Group%0A%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20onChange%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(value%20%3D%3D%3D%20'2')%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%20backgroundColor%3A%20'%2300de0050'%20%7D)%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%23fa000050'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20opacity%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20value%3D%221%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Wrong%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%20%20%3CRadio%0A%20%20%20%20%20%20%20%20colorScheme%3D%22success%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22bullseye%22%20type%3D%22MaterialCommunityIcons%22%20opacity%3D%7B0%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20%20%20value%3D%222%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Correct%0A%20%20%20%20%20%20%3C%2FRadio%3E%0A%20%20%20%20%3C%2FRadio.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CRadioComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"radio"},"Radio"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the input field in a radio (Useful for form submission)."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id assigned to input field."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used in the radio input. This is the value that will be returned on form submission"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultIsChecked"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be initially checked."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lg, md, sm"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the radio."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"md")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be disabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"icon"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, will use this icon instead of the default."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio is marked as invalid. Changes style of unchecked state."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function called when the state of the radio changes."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The children of the radio."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ariaLabel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An accessible label for the radio in event there's no visible label or children was passed"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Radio.Group")," implements ",Object(o.b)("inlineCode",{parentName:"p"},"Box"),"."),Object(o.b)("h3",{id:"radio-group"},"Radio Group"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of the radio group."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial value of the radio group."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback fired when any children radio is checked or unchecked."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(o.b)("p",null,"The following props can be set on ",Object(o.b)("inlineCode",{parentName:"p"},"Radio.Group")," and they will be forwarded to all children ",Object(o.b)("inlineCode",{parentName:"p"},"Radio")," components."),Object(o.b)("h3",{id:"shared-style-props"},"Shared Style Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lg, md, sm"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the radio."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"md")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio will be disabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the radio is marked as invalid. Changes style of unchecked state."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}b.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);