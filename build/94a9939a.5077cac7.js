(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1031:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),l=a(7),r=(a(0),a(1714)),c={id:"select",title:"Select"},b={unversionedId:"select",id:"version-3.0.0-next.33/select",isDocsHomePage:!1,title:"Select",description:"Select creates a dropdown list of items with the selected item in closed view. You can use native as well as styled one. The native one will have a different look and feel on each platform(Android, iOS and Web). The behaviour and look of styled variant will be same across all platforms.",source:"@site/versioned_docs/version-3.0.0-next.33/select.md",slug:"/select",permalink:"/3.0.0-next.33/select",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/select.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"Radio",permalink:"/3.0.0-next.33/radio"},next:{title:"Slider",permalink:"/3.0.0-next.33/slider"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Native",id:"native",children:[]},{value:"Styled",id:"styled",children:[]}]},{value:"Props",id:"props",children:[{value:"Select",id:"select",children:[]},{value:"Select Item",id:"select-item",children:[]}]}],o={toc:i};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Select creates a dropdown list of items with the selected item in closed view. You can use native as well as styled one. The native one will have a different look and feel on each platform(Android, iOS and Web). The behaviour and look of styled variant will be same across all platforms."),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Picker")," from ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-picker/picker"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-native-picker/picker"))," for ",Object(r.b)("inlineCode",{parentName:"li"},"native")," variant."),Object(r.b)("li",{parentName:"ul"},"Composes ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button"))," and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/popOver"}),Object(r.b)("inlineCode",{parentName:"a"},"Popover"))," for ",Object(r.b)("inlineCode",{parentName:"li"},"styled")," variant.")),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Select } from 'native-base';\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('')%3B%0A%20%20return%20(%0A%20%20%20%20%3CSelect%0A%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%3C%2FSelect%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"native"},"Native"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Native","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20VStack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('js')%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20alignItems%3D%22center%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20variant%3D%22native%22%20%2F%2FdefaultValue%0A%20%20%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20%20%20androidIconColor%3D%22gray.500%22%0A%20%20%20%20%20%20%20%20androidPrompt%3D%22Language%20you%20love%3A%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%20%20%3CText%3E%7Blanguage%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"styled"},"Styled"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Styled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20VStack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent%20()%20%7B%0A%09let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('js')%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20alignItems%3D%22center%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20variant%3D%22styled%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22Pick%20language%22%0A%20%20%20%20%20%20%20%20_placeholder%3D%7B%7B%20color%3A%20'teal.500'%20%7D%7D%0A%20%20%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20%20%20width%3D%7B150%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20%20%20selectedItemBg%3D%7B'blue.500'%7D%0A%20%20%20%20%20%20%20%20_selectedItem%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%2F%20isDisabled%0A%20%20%20%20%20%20%20%20dropdownOpenIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20dropdownCloseIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20_item%3D%7B%7B%20color%3A%20'red.500'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%20%20%3CText%3E%7Blanguage%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%09)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"select"},"Select"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"native"),", ",Object(r.b)("inlineCode",{parentName:"td"},"styled")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant of the select style to use."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"native"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder attribute specifies a short hint that describes the expected value of a selected field (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","placeholder"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.33/text#props"}),Object(r.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text props to be applied to placeholder (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedValue"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default value which is selected."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onValueChange"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for on change on the input value."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedItemBg"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color for the selected item (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"blue.500"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","selectedItem"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.33/text#props"}),Object(r.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text prop for selected item (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the button will be disabled (not supported on ios for native variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownIcon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownOpenIcon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon when opened (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownCloseIcon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon when closed (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","ios"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"StyleProps")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to ios device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","android"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"StyleProps")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to android device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","web"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"StyleProps")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to web device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","item"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.33/text#props"}),Object(r.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps to be applied to the label (only for styled variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidMode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dialog"),", ",Object(r.b)("inlineCode",{parentName:"td"},"dropdown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, specifies how to display the selection items when the user taps on the picker (only for native variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dialog"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidIconColor"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, specifies color of dropdown triangle. Input value can any color from theme like ",Object(r.b)("inlineCode",{parentName:"td"},"default.300")," (only for native variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidPrompt"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, prompt string for this picker, used on Android in dialog mode as the title of the dialog (only for native variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Select")," can be styled using pseudo style props like ",Object(r.b)("inlineCode",{parentName:"p"},"_isInvalid"),", ",Object(r.b)("inlineCode",{parentName:"p"},"_isDisabled")," and ",Object(r.b)("inlineCode",{parentName:"p"},"_hover"),"."),Object(r.b)("h3",{id:"select-item"},"Select Item"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label which will be displayed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used for the item. This is the value that will be returned on form submission."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the item will be disabled (only for ",Object(r.b)("inlineCode",{parentName:"td"},"styled")," variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/3.0.0-next.33/text#props"}),Object(r.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps to be applied to label (only for ",Object(r.b)("inlineCode",{parentName:"td"},"styled")," variant)."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},1714:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),d=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=d(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||s[m]||r;return a?l.a.createElement(O,b(b({ref:t},o),{},{components:a})):l.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<r;o++)c[o]=a[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);