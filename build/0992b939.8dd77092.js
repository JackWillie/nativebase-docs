(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(1583)),c={id:"input",title:"Input"},i={unversionedId:"input",id:"version-3.0.0-next.31/input",isDocsHomePage:!1,title:"Input",description:"The Input component is a component that is used to get user input in a text field.",source:"@site/versioned_docs/version-3.0.0-next.31/input.md",slug:"/input",permalink:"/3.0.0-next.31/input",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.31/input.md",version:"3.0.0-next.31",sidebar:"version-3.0.0-next.31/componentsSidebar",previous:{title:"IconButton",permalink:"/3.0.0-next.31/iconButton"},next:{title:"NumberInput",permalink:"/3.0.0-next.31/numberInput"}},o=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Input Sizes",id:"input-sizes",children:[]},{value:"Input Variants",id:"input-variants",children:[]},{value:"Input Addons",id:"input-addons",children:[]},{value:"Input Elements",id:"input-elements",children:[]},{value:"Password Input",id:"password-input",children:[]},{value:"Controlled Input",id:"controlled-input",children:[]},{value:"Input Focused and Error Border Colors",id:"input-focused-and-error-border-colors",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," component is a component that is used to get user input in a text field."),Object(l.b)("h2",{id:"implements"},"Implements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/textinput"}),Object(l.b)("inlineCode",{parentName:"a"},"TextInput"))," from ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(l.b)("inlineCode",{parentName:"a"},"React Native"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.31/box"}),Object(l.b)("inlineCode",{parentName:"a"},"Box")))),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  Input,\n  InputGroup,\n  InputLeftAddon,\n  InputRightAddon,\n} from 'native-base';\n")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"basic"},"Basic"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Input Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20%3CInput%20p%3D%7B3%7D%20w%3D%2290%25%22%20placeholder%3D%22Default%20Input%20Box%22%20%2F%3E%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"input-sizes"},"Input Sizes"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2CCenter%2CHeading%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20alignItems%3D%22center%22%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ESize%20Input%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%22xs%22%20placeholder%3D%22xs%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%22sm%22%20placeholder%3D%22sm%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%22md%22%20placeholder%3D%22md%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%22lg%22%20placeholder%3D%22lg%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%22xl%22%20placeholder%3D%22xl%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%2290%25%22%20size%3D%222xl%22%20placeholder%3D%222xl%20Input%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"input-variants"},"Input Variants"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2CCenter%2CHeading%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EInput%20Variants%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22outline%22%20placeholder%3D%22Outline%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22filled%22%20placeholder%3D%22Filled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22underlined%22%20placeholder%3D%22Underlined%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22unstyled%22%20placeholder%3D%22Unstyled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22rounded%22%20placeholder%3D%22round%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"input-addons"},"Input Addons"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Addons","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20InputGroup%2C%20InputLeftAddon%2C%20InputRightAddon%2C%20NativeBaseProvider%2CStack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%3CInputLeftAddon%20children%3D%7B%3CText%3Ehttps%3A%2F%2F%3C%2FText%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CInput%20w%3D%2270%25%22%20placeholder%3D%22nativebase%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CInputRightAddon%20children%3D%7B%3CText%3E.io%3C%2FText%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"input-elements"},"Input Elements"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Input Elements","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CIcon%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20w%3D%2290%25%22%0A%20%20%20%20%20%20InputLeftElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22phone%22%20fontSize%3D%22xl%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22person%22%20fontSize%3D%22xl%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22Left%20and%20Right%20InputElement%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"password-input"},"Password Input"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Password Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CButton%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20handleClick%20%3D%20()%20%3D%3E%20setShow(!show)%3B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20w%3D%2270%25%22%0A%20%20%20%20%20%20type%3D%7Bshow%20%3F%20'text'%20%3A%20'password'%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CButton%20ml%3D%7B1%7D%20onPress%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bshow%20%3F%20'Hide'%20%3A%20'Show'%7D%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22Password%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"controlled-input"},"Controlled Input"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Controlled Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20React.useState('')%3B%0A%20%20const%20handleChange%20%3D%20(event%3A%20any)%20%3D%3E%20setValue(event.target.value)%3B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20onChange%3D%7BhandleChange%7D%0A%20%20%20%20%20%20placeholder%3D%22Value%20Controlled%20Input%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"input-focused-and-error-border-colors"},"Input Focused and Error Border Colors"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Image Input Focused and Error Border Colors","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Here%20is%20a%20sample%20placeholder%22%0A%20%20%20%20%20%20%20%20focusBorderColor%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Here%20is%20a%20sample%20placeholder%22%0A%20%20%20%20%20%20%20%20focusBorderColor%3D%22pink%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20placeholder%3D%22Here%20is%20a%20sample%20placeholder%22%20isInvalid%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Here%20is%20a%20sample%20placeholder%22%0A%20%20%20%20%20%20%20%20isInvalid%0A%20%20%20%20%20%20%20%20errorBorderColor%3D%22yellow%22%0A%20%20%20%20%20%20%20%20errorMessage%3D%22This%20is%20an%20Error%20Message%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"filled"),", ",Object(l.b)("inlineCode",{parentName:"td"},"outline"),", ",Object(l.b)("inlineCode",{parentName:"td"},"rounded"),", ",Object(l.b)("inlineCode",{parentName:"td"},"underlined"),", ",Object(l.b)("inlineCode",{parentName:"td"},"unstyled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant of the input style to use."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"outline"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input will be disabled."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input will indicate an error."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isReadOnly"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, prevents the value of the input from being edited."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(l.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(l.b)("inlineCode",{parentName:"td"},"md"),", ",Object(l.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(l.b)("inlineCode",{parentName:"td"},"xl"),", ",Object(l.b)("inlineCode",{parentName:"td"},"xs")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the button."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"md"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for on change on input value."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder attribute specifies a short hint that describes the expected value of an input field."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorMessage"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error message to be shown when input is invalid."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","errorMessage"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props to be passed to errorMessage."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isFullWidth"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input element will span the full width of its parent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"focusBorderColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The border color when the input is focused."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorBorderColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The border color when isInvalid is set to true."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorMessageColor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The font color of error message."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ariaLabel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An accessible label for the input."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InputLeftElement"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds the provided element to the left of the input."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InputRightElement"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds the provided element to the right of the input."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"password"),", string, text"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the type ",Object(l.b)("inlineCode",{parentName:"td"},"password"),", user can mask the input."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds a floating label to the input."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.31/text#props"}),Object(l.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props to be passed to label to change its text styling."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||l;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);