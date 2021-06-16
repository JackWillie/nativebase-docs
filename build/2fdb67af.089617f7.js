(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(742)),i={id:"input",title:"Input"},l={unversionedId:"input",id:"version-3.0.0-next.36/input",isDocsHomePage:!1,title:"Input",description:"The Input component is a component that is used to get user input in a text field.",source:"@site/versioned_docs/version-3.0.0-next.36/input.md",slug:"/input",permalink:"/3.0.0-next.36/input",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/input.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"IconButton",permalink:"/3.0.0-next.36/iconButton"},next:{title:"NumberInput",permalink:"/3.0.0-next.36/numberInput"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Input Sizes",id:"input-sizes",children:[]},{value:"Input Variants",id:"input-variants",children:[]},{value:"Input Addons",id:"input-addons",children:[]},{value:"Input Elements",id:"input-elements",children:[]},{value:"Password Input",id:"password-input",children:[]},{value:"Controlled Input",id:"controlled-input",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Input Focused and Error Border Colors",id:"input-focused-and-error-border-colors",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Input")," component is a component that is used to get user input in a text field."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/textinput"}),Object(o.b)("inlineCode",{parentName:"a"},"TextInput"))," from ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(o.b)("inlineCode",{parentName:"a"},"React Native"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.36/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box")))),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  Input,\n  InputGroup,\n  InputLeftAddon,\n  InputRightAddon,\n} from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Input Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20%3CInput%20p%3D%7B3%7D%20w%3D%2290%25%22%20placeholder%3D%22Default%20Input%20Box%22%20%2F%3E%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"input-sizes"},"Input Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2CCenter%2CHeading%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EInput%20Sizes%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22xs%22%20placeholder%3D%22xs%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22sm%22%20placeholder%3D%22sm%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22md%22%20placeholder%3D%22md%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22lg%22%20placeholder%3D%22lg%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%22xl%22%20placeholder%3D%22xl%20Input%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20size%3D%222xl%22%20placeholder%3D%222xl%20Input%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"input-variants"},"Input Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2CCenter%2CHeading%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EInput%20Variants%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22outline%22%20placeholder%3D%22Outline%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22filled%22%20placeholder%3D%22Filled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22underlined%22%20placeholder%3D%22Underlined%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22unstyled%22%20placeholder%3D%22Unstyled%22%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20variant%3D%22rounded%22%20placeholder%3D%22round%22%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"input-addons"},"Input Addons"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Addons","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Input%2C%0A%20%20InputGroup%2C%0A%20%20InputLeftAddon%2C%0A%20%20InputRightAddon%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%2C%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%3CInputLeftAddon%20w%3D%7B20%7D%20children%3D%7B'https%3A%2F%2F'%7D%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20w%3D%7B32%7D%20placeholder%3D%22nativebase%22%20%2F%3E%0A%20%20%20%20%20%20%3CInputRightAddon%20w%3D%7B12%7D%20children%3D%7B'.io'%7D%20%2F%3E%0A%20%20%20%20%3C%2FInputGroup%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"input-elements"},"Input Elements"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Input Elements","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CIcon%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20w%3D%2290%25%22%0A%20%20%20%20%20%20InputLeftElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22phone%22%20fontSize%3D%22xl%22%20type%3D%22MaterialIcons%22%20px%3D%7B2%7D%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22person%22%20fontSize%3D%22xl%22%20type%3D%22MaterialIcons%22%20px%3D%7B2%7D%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22InputElement%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"password-input"},"Password Input"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Password Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20Button%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20handleClick%20%3D%20()%20%3D%3E%20setShow(!show)%3B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20w%3D%2270%25%22%0A%20%20%20%20%20%20type%3D%7Bshow%20%3F%20'text'%20%3A%20'password'%7D%0A%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20roundedLeft%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20roundedRight%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22emerald%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BhandleClick%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bshow%20%3F%20'Hide'%20%3A%20'Show'%7D%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20placeholder%3D%22Password%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"controlled-input"},"Controlled Input"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Controlled Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20React.useState('')%3B%0A%20%20const%20handleChange%20%3D%20(event%3A%20any)%20%3D%3E%20setValue(event.target.value)%3B%0A%20%20return%20(%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20onChange%3D%7BhandleChange%7D%0A%20%20%20%20%20%20placeholder%3D%22Value%20Controlled%20Input%22%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Input Focused and Error Border Colors","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2C%20FormControl%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFormControl%20isRequired%20isInvalid%20p%3D%7B2%7D%20w%3D%7B%2280%25%22%7D%3E%0A%20%20%20%20%20%20%3CFormControl.Label%3EForm%20Controlled%20Input%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%3CInput%20placeholder%3D%22FormControl%20is%20providing%20me%20isInvalid%20prop%22%20my%3D%7B2%7D%20size%3D'xs'%20p%3D%7B1%7D%20%2F%3E%0A%20%20%20%20%20%20%3CFormControl.HelperText%3EI%20am%20a%20Helper%20text%20%F0%9F%98%8A%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%3CFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%20%20I'll%20only%20appear%20when%20FormControl%20have%20isInvalid%20props.%0A%20%20%20%20%20%20%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%3C%2FFormControl%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"input-focused-and-error-border-colors"},"Input Focused and Error Border Colors"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Image Input Focused and Error Border Colors","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Input%2C%20NativeBaseProvider%2CStack%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20InputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22focusBorderColor%20Example%22%0A%20%20%20%20%20%20%20%20focusBorderColor%3D%22green.400%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22focusBorderColor%20Example%22%0A%20%20%20%20%20%20%20%20focusBorderColor%3D%22pink.400%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CInput%20placeholder%3D%22Invalid%20Input%20Example%22%20isInvalid%20%2F%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22errorBorderColor%20Example%22%0A%20%20%20%20%20%20%20%20isInvalid%0A%20%20%20%20%20%20%20%20errorBorderColor%3D%22yellow%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"filled"),", ",Object(o.b)("inlineCode",{parentName:"td"},"outline"),", ",Object(o.b)("inlineCode",{parentName:"td"},"rounded"),", ",Object(o.b)("inlineCode",{parentName:"td"},"underlined"),", ",Object(o.b)("inlineCode",{parentName:"td"},"unstyled")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant of the input style to use."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"outline"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input will be disabled."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input will indicate an error."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isReadOnly"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, prevents the value of the input from being edited."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(o.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(o.b)("inlineCode",{parentName:"td"},"md"),", ",Object(o.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(o.b)("inlineCode",{parentName:"td"},"xl"),", ",Object(o.b)("inlineCode",{parentName:"td"},"xs")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the button."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"md"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for on change on input value."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder attribute specifies a short hint that describes the expected value of an input field."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isFullWidth"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the input element will span the full width of its parent"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"focusBorderColor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The border color when the input is focused."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorBorderColor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The border color when isInvalid is set to true."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ariaLabel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An accessible label for the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InputLeftElement"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds the provided element to the left of the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InputRightElement"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds the provided element to the right of the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"password"),", string, text"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the type ",Object(o.b)("inlineCode",{parentName:"td"},"password"),", user can mask the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, adds a floating label to the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","label"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.36/text#props"}),Object(o.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props to be passed to label to change its text styling."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(o.b)("p",null,"Apart from these all the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/textinput#props"}),"Native TextInput Props")," from React Native can be passed to Input."))}d.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return a?r.a.createElement(m,l(l({ref:t},p),{},{components:a})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);