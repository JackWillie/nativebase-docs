(window.webpackJsonp=window.webpackJsonp||[]).push([[1485],{1556:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(1583)),c=a(1592),b={id:"select",title:"Select"},i={unversionedId:"select",id:"version-3.0.0-next.36/select",isDocsHomePage:!1,title:"Select",description:"Select creates a dropdown list of items with the selected item in closed view. You can use native as well as styled one. The native one will have a different look and feel on each platform(Android, iOS and Web). The behaviour and look of styled variant will be same across all platforms.",source:"@site/versioned_docs/version-3.0.0-next.36/select.md",slug:"/select",permalink:"/docs/3.0.0-next.36/select",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/select.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Radio",permalink:"/docs/3.0.0-next.36/radio"},next:{title:"Slider",permalink:"/docs/3.0.0-next.36/slider"}},d=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Native",id:"native",children:[]},{value:"Styled",id:"styled",children:[]}]},{value:"Props",id:"props",children:[{value:"Select",id:"select",children:[]},{value:"Select Item",id:"select-item",children:[]}]}],o={toc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Select creates a dropdown list of items with the selected item in closed view. You can use native as well as styled one. The native one will have a different look and feel on each platform(Android, iOS and Web). The behaviour and look of styled variant will be same across all platforms."),Object(l.b)("h2",{id:"implements"},"Implements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Picker")," from ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-picker/picker"}),Object(l.b)("inlineCode",{parentName:"a"},"@react-native-picker/picker"))," for ",Object(l.b)("inlineCode",{parentName:"li"},"native")," variant."),Object(l.b)("li",{parentName:"ul"},"Composes ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/3.0.0-next.36/button"}),Object(l.b)("inlineCode",{parentName:"a"},"Button"))," and ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/3.0.0-next.36/popOver"}),Object(l.b)("inlineCode",{parentName:"a"},"Popover"))," for ",Object(l.b)("inlineCode",{parentName:"li"},"styled")," variant.")),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Select } from 'native-base';\n")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"basic"},"Basic"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('')%3B%0A%20%20return%20(%0A%20%20%20%20%3CSelect%0A%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%3C%2FSelect%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"native"},"Native"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Native","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20VStack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('js')%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20alignItems%3D%22center%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20variant%3D%22native%22%20%2F%2FdefaultValue%0A%20%20%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20%20%20androidIconColor%3D%22gray.500%22%0A%20%20%20%20%20%20%20%20androidPrompt%3D%22Language%20you%20love%3A%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%20%20%3CText%3E%7Blanguage%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h3",{id:"styled"},"Styled"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Styled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Icon%2C%20Select%2C%20NativeBaseProvider%2C%20VStack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20SelectComponent%20()%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState('js')%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20alignItems%3D%22center%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20variant%3D%22styled%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22Pick%20language%22%0A%20%20%20%20%20%20%20%20_placeholder%3D%7B%7B%20color%3A%20'teal.500'%20%7D%7D%0A%20%20%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20%20%20width%3D%7B150%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%3A%20string)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20%20%20selectedItemBg%3D%7B'blue.500'%7D%0A%20%20%20%20%20%20%20%20_selectedItem%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20dropdownOpenIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20dropdownCloseIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20_item%3D%7B%7B%20color%3A%20'red.500'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%20%20%3CText%3E%7Blanguage%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSelectComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"select"},"Select"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"native"),", ",Object(l.b)("inlineCode",{parentName:"td"},"styled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variant of the select style to use."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"native"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder attribute specifies a short hint that describes the expected value of a selected field (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/3.0.0-next.36/text#props"}),Object(l.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text props to be applied to placeholder (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default value which is selected."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onValueChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback for on change on the input value."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedItemBg"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color for the selected item (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"blue.500"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","selectedItem"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/3.0.0-next.36/text#props"}),Object(l.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text prop for selected item (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the button will be disabled (not supported on ios for native variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownOpenIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon when opened (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownCloseIcon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, updates the dropdown Icon when closed (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","ios"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"StyleProps")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to ios device."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","android"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"StyleProps")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to android device."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","web"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"StyleProps")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props which you only want to pass to web device."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","item"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/3.0.0-next.36/text#props"}),Object(l.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps to be applied to the label (only for styled variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidMode ",Object(l.b)(c.a,{mdxType:"AndroidBadge"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dialog"),", ",Object(l.b)("inlineCode",{parentName:"td"},"dropdown")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, specifies how to display the selection items when the user taps on the picker (only for native variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dialog"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidIconColor ",Object(l.b)(c.a,{mdxType:"AndroidBadge"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, specifies color of dropdown triangle. Input value can any color from theme like ",Object(l.b)("inlineCode",{parentName:"td"},"default.300")," (only for native variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"androidPrompt ",Object(l.b)(c.a,{mdxType:"AndroidBadge"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On Android, prompt string for this picker, used on Android in dialog mode as the title of the dialog (only for native variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Select")," can be styled using pseudo style props like ",Object(l.b)("inlineCode",{parentName:"p"},"_isInvalid"),", ",Object(l.b)("inlineCode",{parentName:"p"},"_isDisabled")," and ",Object(l.b)("inlineCode",{parentName:"p"},"_hover"),"."),Object(l.b)("h3",{id:"select-item"},"Select Item"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label which will be displayed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to be used for the item. This is the value that will be returned on form submission."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the item will be disabled (only for ",Object(l.b)("inlineCode",{parentName:"td"},"styled")," variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/3.0.0-next.36/text#props"}),Object(l.b)("inlineCode",{parentName:"a"},"TextProps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps to be applied to label (only for ",Object(l.b)("inlineCode",{parentName:"td"},"styled")," variant)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return a?r.a.createElement(f,b(b({ref:t},d),{},{components:a})):r.a.createElement(f,b({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var d=2;d<l;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1592:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return f}));var n=a(0),r=a.n(n);var l=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map(((a,n)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),r.a.createElement("div",null,t[a]))))))));const c={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var b=({})=>r.a.createElement("div",null,Object.keys(c).map(((e,t)=>r.a.createElement(l,{variants:c[e],name:e,key:`space-block-${e}-${t}`}))));var i=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const d={xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":64};var o=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(d).map(((e,t)=>r.a.createElement(i,{name:e,value:d[e],key:`space-component-${e}-${t}`}))));var p=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const s={1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var m=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(s).map(((e,t)=>r.a.createElement(p,{name:e,value:s[e],key:`space-component-${e}-${t}`})))));var f=()=>r.a.createElement("div",{className:"label android"},"Android")}}]);