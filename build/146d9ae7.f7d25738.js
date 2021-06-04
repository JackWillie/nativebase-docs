(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(720)),c={id:"icon",title:"Icon"},i={unversionedId:"icon",id:"version-3.0.0-next.37/icon",isDocsHomePage:!1,title:"Icon",description:"You can use icons in multiple ways in NativeBase:",source:"@site/versioned_docs/version-3.0.0-next.37/icon.md",slug:"/icon",permalink:"/3.0.0-next.37/icon",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/icon.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Avatar",permalink:"/3.0.0-next.37/avatar"},next:{title:"Image",permalink:"/3.0.0-next.37/image"}},s=[{value:"Examples",id:"examples",children:[{value:"NativeBase Icons",id:"nativebase-icons",children:[]},{value:"Basic",id:"basic",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Create Icon",id:"create-icon",children:[]}]},{value:"Props",id:"props",children:[{value:"Icon",id:"icon",children:[]},{value:"createIcon",id:"createicon",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use icons in multiple ways in NativeBase:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create icon by creating an SVG Icon"),Object(o.b)("li",{parentName:"ul"},"Create icon using createIcon function and use it as a component"),Object(o.b)("li",{parentName:"ul"},"Use a third-party icon library ( such as ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icons")," ), with ",Object(o.b)("inlineCode",{parentName:"li"},"as")," prop.")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"nativebase-icons"},"NativeBase Icons"),Object(o.b)("p",null,"We provides a set of commonly used interface icons. So you can directly use them in your project. All our icons are create using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"icon#createicon"}),Object(o.b)("inlineCode",{parentName:"a"},"createIcon"))," function from NativeBase."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20SimpleGrid%2C%0A%20%20MoonIcon%2C%0A%20%20SunIcon%2C%0A%20%20CheckIcon%2C%0A%20%20CircleIcon%2C%0A%20%20ArrowBackIcon%2C%0A%20%20AddIcon%2C%0A%20%20ArrowForwardIcon%2C%0A%20%20ArrowUpIcon%2C%0A%20%20ArrowDownIcon%2C%0A%20%20CheckCircleIcon%2C%0A%20%20ChevronDownIcon%2C%0A%20%20ChevronLeftIcon%2C%0A%20%20ChevronRightIcon%2C%0A%20%20ChevronUpIcon%2C%0A%20%20CloseIcon%2C%0A%20%20SmallCloseIcon%2C%0A%20%20HamburgerIcon%2C%0A%20%20InfoIcon%2C%0A%20%20InfoOutlineIcon%2C%0A%20%20MinusIcon%2C%0A%20%20QuestionIcon%2C%0A%20%20QuestionOutlineIcon%2C%0A%20%20SearchIcon%2C%0A%20%20WarningIcon%2C%0A%20%20WarningTwoIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20icons%20%3D%20%5B%0A%20%20%20%20%3CAddIcon%20%2F%3E%2C%0A%20%20%20%20%3CArrowBackIcon%20%2F%3E%2C%0A%20%20%20%20%3CArrowForwardIcon%20%2F%3E%2C%0A%20%20%20%20%3CArrowUpIcon%20%2F%3E%2C%0A%20%20%20%20%3CArrowDownIcon%20%2F%3E%2C%0A%20%20%20%20%3CCheckIcon%20%2F%3E%2C%0A%20%20%20%20%3CCheckCircleIcon%20%2F%3E%2C%0A%20%20%20%20%3CChevronDownIcon%20%2F%3E%2C%0A%20%20%20%20%3CChevronLeftIcon%20%2F%3E%2C%0A%20%20%20%20%3CChevronRightIcon%20%2F%3E%2C%0A%20%20%20%20%3CChevronUpIcon%20%2F%3E%2C%0A%20%20%20%20%3CCircleIcon%20%2F%3E%2C%0A%20%20%20%20%3CCloseIcon%20%2F%3E%2C%0A%20%20%20%20%3CSmallCloseIcon%20%2F%3E%2C%0A%20%20%20%20%3CHamburgerIcon%20%2F%3E%2C%0A%20%20%20%20%3CInfoIcon%20%2F%3E%2C%0A%20%20%20%20%3CInfoOutlineIcon%20%2F%3E%2C%0A%20%20%20%20%3CMinusIcon%20%2F%3E%2C%0A%20%20%20%20%3CMoonIcon%20%2F%3E%2C%0A%20%20%20%20%3CQuestionIcon%20%2F%3E%2C%0A%20%20%20%20%3CQuestionOutlineIcon%20%2F%3E%2C%0A%20%20%20%20%3CSearchIcon%20%2F%3E%2C%0A%20%20%20%20%3CSunIcon%20%2F%3E%2C%0A%20%20%20%20%3CWarningIcon%20%2F%3E%2C%0A%20%20%20%20%3CWarningTwoIcon%20%2F%3E%2C%0A%20%20%5D%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20columns%3D%7B7%7D%20space%3D%7B8%7D%3E%0A%20%20%20%20%20%20%7Bicons%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Icon%2C%20MoonIcon%2C%20Stack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20G%2C%20Path%20%7D%20from%20%22react-native-svg%22%0Aimport%20%7B%20Ionicons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CMoonIcon%20%2F%3E%0A%20%20%20%20%20%20%3CIcon%20as%3D%7B%3CIonicons%20name%3D%22md-checkmark-circle%22%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%3CIcon%20viewBox%3D%220%200%20870%20873%22%3E%0A%20%20%20%20%20%20%20%20%3CG%20fillRule%3D%22nonzero%22%20stroke%3D%22none%22%20strokeWidth%3D%7B1%7D%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20%20%20%20%20d%3D%22M435%20.1C194.8.1.1%20194.8.1%20435c0%20187.3%20118.4%20346.9%20284.4%20408.1%203.3-29.9%2015-57.2%2032.7-79.6%2012.1-15.4%2026.9-28.5%2043.9-38.4%202.1-5%204.6-10.6%207.1-16.6-50.3-26-84.7-78.1-84.7-138.6%200-51.7%2025.3-97.7%2064-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21%2011.9-47.8%204.7-59.7-16.3-11.9-21-4.7-47.8%2016.3-59.7%2021-11.9%2047.4-4.7%2059.7%2015.9v.4c7.2%2012.7%207.2%2027.5%201.8%2039.8%2022.8%2019.5%2056.8%2052.5%2077.8%2089%209.8%2017%2019.5%2034.7%2029.3%2053.5%2020.3-9.4%2042.7-14.8%2066.2-14.8%2021.3%200%2041.6%204.3%2060.1%2011.9%209.8-18.5%2019.5-36.2%2028.9-52.8%2021-36.2%2054.6-68.7%2077.4-88.3-5.4-12.3-5.4-26.8%201.8-39.4v-.4c12.3-20.6%2038.7-27.9%2059.3-15.9%2021%2011.9%2028.2%2038.7%2016.3%2059.3-11.9%2021-38.4%2028.2-59.3%2016.3-21.7%2018.8-49.9%2047.4-68%2078.5-10.1%2017.4-20.3%2036.5-30.8%2056.4%2042%2027.9%2069.8%2075.3%2069.8%20129.5%200%2063-36.9%20116.9-90.4%20141.5.9%202.7%202%204.9%203%207.2%2047%2022.3%2081.1%2067.4%2087.9%20121.1C755.9%20776%20869.9%20618.8%20869.9%20435%20869.9%20194.8%20675.2.1%20435%20.1z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3D%22%23CA0000%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FG%3E%0A%20%20%20%20%20%20%3C%2FIcon%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("p",null,"Apart from the icons provided by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icon"),", you can also create custom icons using SVG. You can use all the components from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-svg/react-native-svg"}),"react-native-svg"),"."),Object(o.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20Path%2C%20G%20%7D%20from%20%22react-native-svg%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CIcon%20viewBox%3D%220%200%20870%20873%22%3E%0A%20%20%20%20%20%20%3CG%20fillRule%3D%22nonzero%22%20stroke%3D%22none%22%20strokeWidth%3D%7B1%7D%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20%20%20d%3D%22M435%20.1C194.8.1.1%20194.8.1%20435c0%20187.3%20118.4%20346.9%20284.4%20408.1%203.3-29.9%2015-57.2%2032.7-79.6%2012.1-15.4%2026.9-28.5%2043.9-38.4%202.1-5%204.6-10.6%207.1-16.6-50.3-26-84.7-78.1-84.7-138.6%200-51.7%2025.3-97.7%2064-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21%2011.9-47.8%204.7-59.7-16.3-11.9-21-4.7-47.8%2016.3-59.7%2021-11.9%2047.4-4.7%2059.7%2015.9v.4c7.2%2012.7%207.2%2027.5%201.8%2039.8%2022.8%2019.5%2056.8%2052.5%2077.8%2089%209.8%2017%2019.5%2034.7%2029.3%2053.5%2020.3-9.4%2042.7-14.8%2066.2-14.8%2021.3%200%2041.6%204.3%2060.1%2011.9%209.8-18.5%2019.5-36.2%2028.9-52.8%2021-36.2%2054.6-68.7%2077.4-88.3-5.4-12.3-5.4-26.8%201.8-39.4v-.4c12.3-20.6%2038.7-27.9%2059.3-15.9%2021%2011.9%2028.2%2038.7%2016.3%2059.3-11.9%2021-38.4%2028.2-59.3%2016.3-21.7%2018.8-49.9%2047.4-68%2078.5-10.1%2017.4-20.3%2036.5-30.8%2056.4%2042%2027.9%2069.8%2075.3%2069.8%20129.5%200%2063-36.9%20116.9-90.4%20141.5.9%202.7%202%204.9%203%207.2%2047%2022.3%2081.1%2067.4%2087.9%20121.1C755.9%20776%20869.9%20618.8%20869.9%20435%20869.9%20194.8%20675.2.1%20435%20.1z%22%0A%20%20%20%20%20%20%20%20%20%20fill%3D%22%23CA0000%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20%20%20d%3D%22M284.8%20843.3h.1-.1zM284.8%20843.3c-.1%200-.3-.1-.4-.1.2%200%20.3%200%20.4.1z%22%0A%20%20%20%20%20%20%20%20%20%20fill%3D%22%23FFF%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CG%20fill%3D%22%23FFF%22%20stroke%3D%22%23FFF%22%20strokeWidth%3D%7B5%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20%20%20%20%20d%3D%22M485.2%205.8c-20.6-11.9-47-4.7-59.3%2015.9v.4c-7.2%2012.7-7.2%2027.1-1.8%2039.4-22.8%2019.5-56.4%2052.1-77.4%2088.3-9.4%2016.6-19.2%2034.4-28.9%2052.8-18.5-7.6-38.7-11.9-60.1-11.9-23.5%200-45.9%205.4-66.2%2014.8-9.8-18.8-19.5-36.5-29.3-53.5-21-36.5-55-69.5-77.8-89%205.4-12.3%205.4-27.1-1.8-39.8v-.4C70.3%202.2%2043.9-5.1%2022.9%206.9%201.9%2018.8-5.3%2045.6%206.6%2066.6c11.9%2021%2038.7%2028.2%2059.7%2016.3%2021.7%2019.2%2050.3%2047.4%2068.4%2078.9%2010.5%2018.1%2021%2037.6%2031.8%2058.2-38.7%2028.2-64%2074.2-64%20125.9%200%2060.4%2034.4%20112.5%2084.7%20138.6-2.5%206.2-5.1%2011.9-7.2%2017-41.6%2024.4-70.8%2067.4-76.4%20117.6%2046.9%2017.3%2097.6%2026.8%20150.6%2026.8%2056.2%200%20109.9-10.7%20159.2-30.1-7.1-52.8-40.5-97.3-86.8-119.8-1.1-2.9-2.5-5.4-3.6-8.7%2053.5-24.6%2090.4-78.5%2090.4-141.5%200-54.3-27.9-101.7-69.8-129.5%2010.5-19.9%2020.6-39.1%2030.8-56.4%2018.1-31.1%2046.3-59.7%2068-78.5%2021%2011.9%2047.4%204.7%2059.3-16.3%2011.7-20.5%204.5-47.3-16.5-59.3z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3D%22translate(181%20224)%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FG%3E%0A%20%20%20%20%20%20%3C%2FG%3E%0A%20%20%20%20%3C%2FIcon%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"create-icon"},"Create Icon"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20createIcon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20Path%2C%20Circle%20%7D%20from%20%22react-native-svg%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20CustomIcon%20%3D%20createIcon(%7B%0A%20%20%20%20viewBox%3A%20%220%200%20200%20200%22%2C%0A%20%20%20%20%2F%2F%20d%3A%20'M%20100%2C%20100%20m%20-75%2C%200%20a%2075%2C75%200%201%2C0%20150%2C0%20a%2075%2C75%200%201%2C0%20-150%2C0'%2C%0A%20%20%20%20path%3A%20%5B%0A%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20fill%3D%22blue.200%22%0A%20%20%20%20%20%20%20%20d%3D%22M%20100%2C%20100%20m%20-75%2C%200%20a%2075%2C75%200%201%2C0%20150%2C0%20a%2075%2C75%200%201%2C0%20-150%2C0%22%0A%20%20%20%20%20%20%2F%3E%2C%0A%20%20%20%20%20%20%3CCircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22pink.200%22%20%2F%3E%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D)%0A%20%20return%20%3CCustomIcon%20color%3D%22red.200%22%20size%3D%7B12%7D%20%2F%3E%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"icon"},"Icon"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        as\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Use ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icons"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string | number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size of the icon.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        color\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The color of the icon.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Icon implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-svg/react-native-svg"}),Object(o.b)("code",{parentName:"a"},"react-native-svg")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(o.b)("code",{parentName:"a"},"View")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#typography"}),"TypographyProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#safearea"}),"SafeAreaProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#transform"}),"TransformProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"))),Object(o.b)("h3",{id:"createicon"},"createIcon"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        viewBox\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The viewBox of the icon.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        path\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Path element of the icon.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        d\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The path of the SVG icon.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))))}b.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return C}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),m=a,C=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?r.a.createElement(C,i(i({ref:t},p),{},{components:n})):r.a.createElement(C,i({ref:t},p))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);