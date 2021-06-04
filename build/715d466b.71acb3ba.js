(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(720)),i={id:"menu",title:"Menu"},p={unversionedId:"menu",id:"version-3.0.0-next.38/menu",isDocsHomePage:!1,title:"Menu",description:"A dropdown menu for the common dropdown menu button design pattern.",source:"@site/versioned_docs/version-3.0.0-next.38/menu.md",slug:"/menu",permalink:"/3.0.0-next.38/menu",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/menu.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"AlertDialog",permalink:"/3.0.0-next.38/alertDialog"},next:{title:"Modal",permalink:"/3.0.0-next.38/modal"}},b=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Group",id:"group",children:[]},{value:"MenuOptionGroups",id:"menuoptiongroups",children:[]},{value:"Menu Placement",id:"menu-placement",children:[]}]},{value:"Props",id:"props",children:[{value:"Menu",id:"menu",children:[]},{value:"MenuItem",id:"menuitem",children:[]},{value:"<strong>MenuItemOption</strong>",id:"menuitemoption",children:[]},{value:"MenuItemOption",id:"menuitemoption-1",children:[]},{value:"MenuGroup",id:"menugroup",children:[]},{value:"MenuOptionGroup",id:"menuoptiongroup",children:[]}]},{value:"Accessibility",id:"accessibility",children:[]}],m={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A dropdown menu for the common dropdown menu button design pattern."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("p",null,"NativeBase uses 5 components for rendering menus:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Menu"),": The wrapper component provides context, state, and focus management."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Menu.Item"),": The trigger that handles menu selection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Menu.Group"),": A wrapper to group related menu items."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Menu.OptionGroup"),": A wrapper for checkable menu items (radio and checkbox)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Menu.ItemOption"),": The checkable menu item, to be used with\xa0",Object(o.b)("inlineCode",{parentName:"li"},"MenuOptionGroup"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Menu } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Menu%2C%0A%20%20Divider%2C%0A%20%20HamburgerIcon%2C%0A%20%20IconButton%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CMenu%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CIconButton%20%7B...triggerProps%7D%20icon%3D%7B%3CHamburgerIcon%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.Item%3EAria%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CMenu.Item%3ENunito%20Sans%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CMenu.Item%20isDisabled%3ETahoma%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.Item%3ERoboto%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CMenu.Item%3EMontserrat%3C%2FMenu.Item%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"group"},"Group"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Menu%2C%0A%20%20Divider%2C%0A%20%20HamburgerIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20Pressable%20%7D%20from%20%22react-native%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CMenu%0A%20%20%20%20%20%20closeOnSelect%3D%7Bfalse%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20console.log(%22opened%22)%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20console.log(%22closed%22)%7D%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CPressable%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CHamburgerIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.Group%20title%3D%22Profile%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3C%2FMenu.Group%3E%0A%20%20%20%20%20%20%3CDivider%20borderColor%3D%22gray.300%22%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.Group%20title%3D%22Help%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%20isDisabled%3EMenu%20item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%204%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3C%2FMenu.Group%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"menuoptiongroups"},"MenuOptionGroups"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Menu%2C%0A%20%20Divider%2C%0A%20%20HamburgerIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20Pressable%20%7D%20from%20%22react-native%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CMenu%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20console.log(%22opened%22)%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20console.log(%22closed%22)%7D%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CPressable%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CHamburgerIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.OptionGroup%20defaultValue%3D%22asc%22%20title%3D%22Order%22%20type%3D%22radio%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22asc%22%3EAscending%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22desc%22%3EDescending%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%3C%2FMenu.OptionGroup%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.OptionGroup%20title%3D%22Country%22%20type%3D%22checkbox%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22email%22%3EEmail%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22country%22%3ECountry%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%3C%2FMenu.OptionGroup%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"menu-placement"},"Menu Placement"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Menu%2C%0A%20%20Button%2C%0A%20%20VStack%2C%0A%20%20HStack%2C%0A%20%20Checkbox%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5BshouldOverlapWithTrigger%2C%20setShouldOverlapWithTrigger%5D%20%3D%0A%20%20%20%20React.useState(false)%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B6%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20value%3D%22shouldOverlapWithTrigger%22%0A%20%20%20%20%20%20%20%20isChecked%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B()%20%3D%3E%20setShouldOverlapWithTrigger(!shouldOverlapWithTrigger)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Should%20overlap%20with%20trigger%0A%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%20left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Top%20Left%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Top%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22top%20right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Top%20right%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%20top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Right%20top%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Right%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%20bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Right%20bottom%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%20left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Bottom%20left%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Bottom%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22bottom%20right%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Bottom%20right%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%20top%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Left%20top%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Left%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%0A%20%20%20%20%20%20%20%20%3CMenu%0A%20%20%20%20%20%20%20%20%20%20shouldOverlapWithTrigger%3D%7BshouldOverlapWithTrigger%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%20bottom%22%0A%20%20%20%20%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Left%20bottom%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CMenu.Item%3ELarge%20Menu%20Item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FMenu%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"menu"},"Menu"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        trigger\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        (_props: any, state: { open: boolean; }) => Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Function that returns a React Element. This element will be used as a Trigger for the menu\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        onOpen\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        () => void\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        This function will be invoked when menu is opened\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        onClose\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        () => void\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        This function will be invoked when menu is closed. It'll also be called when user attempts to close the menu via Escape key or backdrop press.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        closeOnSelect\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Whether menu should be closed when a menu item is pressed\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        defaultIsOpen\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the menu will be opened by default\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isOpen\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Whether the menu is opened. Useful for conrolling the open state\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        crossOffset\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The additional offset applied along the cross axis between the element and its trigger element.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        offset\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The additional offset applied along the main axis between the element and its trigger element.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        shouldOverlapWithTrigger\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Determines whether menu content should overlap with the trigger\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        placement\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "bottom" | "top" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right" | "right top" | "right bottom" | "left top" | "left bottom"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        menu placement\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        bottom left\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        shouldFlip\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Menu implements ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h3",{id:"menuitem"},"MenuItem"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Children of Menu Item\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Whether menu item is disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Props to be passed to Text\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        textValue\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        This value will be available for the typeahead menu feature\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(o.b)("p",null,"MenuItem implements ","[Pressable]"),Object(o.b)("h3",{id:"menuitemoption"},Object(o.b)("strong",{parentName:"h3"},"MenuItemOption")),Object(o.b)("p",null,"Extends ",Object(o.b)("inlineCode",{parentName:"p"},"MenuItem"),"."),Object(o.b)("h3",{id:"menuitemoption-1"},"MenuItemOption"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Value of the Menu Item option.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(o.b)("h3",{id:"menugroup"},"MenuGroup"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        title\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The title of the menu group\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The children of Menu group\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _title\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Props to pass on to Text.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(o.b)("h3",{id:"menuoptiongroup"},"MenuOptionGroup"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        type\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "checkbox" | "radio"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Used to add selection type of menu group.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        defaultValue\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | number | string[] | number[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The initial value of the option group\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | number | string[] | number[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The value of the option group\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        onChange\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        (val: any) => void\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Function called when selection changes\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(o.b)("h2",{id:"accessibility"},"Accessibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"WIP (Work in progress).")))}u.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,d=c["".concat(i,".").concat(s)]||c[s]||l[s]||o;return n?a.a.createElement(d,p(p({ref:t},m),{},{components:n})):a.a.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);