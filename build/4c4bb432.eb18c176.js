(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(733)),o={id:"slider",title:"Slider"},l={unversionedId:"slider",id:"version-3.0.0-next.38/slider",isDocsHomePage:!1,title:"Slider",description:"The Slider is used to allow users to make selections from a range of values.",source:"@site/versioned_docs/version-3.0.0-next.38/slider.md",slug:"/slider",permalink:"/3.0.0-next.38/slider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/slider.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Select",permalink:"/3.0.0-next.38/select"},next:{title:"Switch",permalink:"/3.0.0-next.38/switch"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Color",id:"color",children:[]},{value:"Value",id:"value",children:[]},{value:"Size",id:"size",children:[]},{value:"Customised",id:"customised",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]}]},{value:"Props",id:"props",children:[{value:"Slider",id:"slider",children:[]},{value:"Children components",id:"children-components",children:[]}]},{value:"Accessibility",id:"accessibility",children:[]}],d={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Slider")," is used to allow users to make selections from a range of values."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 4 slider-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slider"),": The wrapper that provides context and functionality for all children."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slider.Track"),": The empty part of the slider that shows the track."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slider.FilledTrack"),": The filled part of the slider."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slider.Thumb"),": The handle that's used to change the slider value.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Slider } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Slider%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B5%7D%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20defaultValue%3D%7B70%7D%0A%20%20%20%20%20%20%20%20minValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20maxValue%3D%7B100%7D%0A%20%20%20%20%20%20%20%20accessibilityLabel%3D%22hello%20world%22%0A%20%20%20%20%20%20%20%20step%3D%7B10%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"color"},"Color"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Slider%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B5%7D%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B70%7D%20colorScheme%3D%22red%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"value"},"Value"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20Stack%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BonChangeValue%2C%20setOnChangeValue%5D%20%3D%20React.useState(70)%0A%20%20const%20%5BonChangeEndValue%2C%20setOnChangeEndValue%5D%20%3D%20React.useState(70)%0A%20%20return%20(%0A%20%20%20%20%3CStack%20mx%3D%7B5%7D%20space%3D%7B4%7D%20alignItems%3D%22center%22%20w%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3CText%3EonChangeValue%20-%20%7BonChangeValue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EonChangeEndValue%20-%20%7BonChangeEndValue%7D%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CBox%20mx%3D%7B5%7D%20w%3D%22250%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20%20%20defaultValue%3D%7B70%7D%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22cyan%22%0A%20%20%20%20%20%20%20%20%20%20onChange%3D%7B(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setOnChangeValue(Math.floor(v))%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20onChangeEnd%3D%7B(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20v%20%26%26%20setOnChangeEndValue(Math.floor(v))%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"size"},"Size"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Slider%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B40%7D%20colorScheme%3D%22red%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B60%7D%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B80%7D%20colorScheme%3D%22green%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"customised"},"Customised"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Slider%2C%20Icon%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B5%7D%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B70%7D%20size%3D%22lg%22%20colorScheme%3D%22orange%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%20bg%3D%22orange.100%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20bg%3D%22green.400%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20borderWidth%3D%7B0%7D%20bg%3D%22gra.200%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20as%3D%7BMaterialIcons%7D%20name%3D%22park%22%20color%3D%22green.500%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Thumb%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Slider%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20mx%3D%7B10%7D%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EJust%20Slide%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B50%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%20%20%20%20Don't%20worry%2C%20it's%20just%20an%20example.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"slider"},"Slider"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The current value of the Slider\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        defaultValue\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The default value (uncontrolled).\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        onChange\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        (value: number) => void\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Handler that is called when the value changes.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Color scheme of the slider\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        accessibilityLabel\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Text description of slider. This will be announced by screen reader/\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        isReversed\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the value will be incremented or decremented in reverse.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        orientation\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},'\n        "horizontal" | "vertical"\n      '),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The orientation of the Slider.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        'horizontal'\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Whether the whole Slider is disabled.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        onChangeEnd\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        (value: number) => void\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Fired when the slider stops moving, due to being let go.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        minValue\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The slider's minimum value.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        maxValue\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The slider's maximum value.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        100\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        step\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The slider's step value.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        1\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"Slider implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(i.b)("h3",{id:"children-components"},"Children components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Slider.Track"),",\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Slider.FilledTrack"),",\xa0and\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Slider.Thumb"),"\xa0composes the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.38/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component.")),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Slider is fully accessibile on native side using swipe gesture on iOS and volume button on Android."),Object(i.b)("li",{parentName:"ul"},"Keyboard accessibility on web is still in-progress.")))}s.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(u,l(l({ref:t},d),{},{components:a})):r.a.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);