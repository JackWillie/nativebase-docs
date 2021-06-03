(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return A}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,A=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.a.createElement(A,c(c({ref:t},l),{},{components:a})):n.a.createElement(A,c({ref:t},l))}));function A(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},511:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),r=(a(0),a(1583)),s={id:"theme",title:"Using Theme"},c={unversionedId:"theme",id:"theme",isDocsHomePage:!1,title:"Using Theme",description:"NativeBase provides multiple tools to use the central theme defined in the app. First tool is useTheme, which you can use to access the values from the current theme.",source:"@site/docs/theme.md",slug:"/theme",permalink:"/next/theme",editUrl:"https://github.com/nativebase/website/tree/main/docs/theme.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Breakpoints",permalink:"/next/breakpoint"},next:{title:"Box",permalink:"/next/box"}},i=[{value:"useTheme",id:"usetheme",children:[]},{value:"useToken",id:"usetoken",children:[]},{value:"useContrastText",id:"usecontrasttext",children:[]},{value:"useColorMode",id:"usecolormode",children:[]},{value:"useColorModeValue",id:"usecolormodevalue",children:[]}],l={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NativeBase provides multiple tools to use the central theme defined in the app. First tool is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/next/use-theme"}),Object(r.b)("inlineCode",{parentName:"a"},"useTheme")),", which you can use to access the values from the current theme."),Object(r.b)("h2",{id:"usetheme"},"useTheme"),Object(r.b)("div",{className:"snack-player","data-snack-name":"useTheme Demo","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeBaseProvider%2C%0A%20%20useTheme%2C%0A%20%20SimpleGrid%2C%0A%20%20Center%2C%0A%20%20Box%2C%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20ColorPalete()%20%7B%0A%20%20const%20%7B%20colors%20%7D%20%3D%20useTheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3CSimpleGrid%20columns%3D%7B5%7D%3E%0A%20%20%20%20%20%20%7BObject.keys(colors%5B'emerald'%5D).map((colorKey)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%7B5%7D%20bg%3D%7B%60emerald.%24%7BcolorKey%7D%60%7D%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%20p%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%3CColorPalete%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"usetoken"},"useToken"),Object(r.b)("p",null,"You can also get specific values from the theme with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/next/use-token"}),Object(r.b)("inlineCode",{parentName:"a"},"useToken"))," hook."),Object(r.b)("div",{className:"snack-player","data-snack-name":"useToken Demo","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useToken%2C%20NativeBaseProvider%2C%20Center%2C%20Text%20%7D%20from%20'native-base'%3B%0A%0Afunction%20Tokens()%20%7B%0A%20%20const%20%5BcontrastThreshold%2C%20lightText%5D%20%3D%20useToken('colors'%2C%20%5B%0A%20%20%20%20'contrastThreshold'%2C%0A%20%20%20%20'lightText'%2C%0A%20%20%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20bg%3D%22emerald.400%22%20flexDirection%3D%22row%22%20p%3D%7B4%7D%20rounded%3D%7B4%7D%3E%0A%20%20%20%20%20%20Contrast%20threshold%20is%3A%20%3CText%20color%3D%7BlightText%7D%20fontWeight%3D%22bold%22%3E%0A%20%20%20%20%20%20%20%20%7BcontrastThreshold%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTokens%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"usecontrasttext"},"useContrastText"),Object(r.b)("p",null,"If you are defining the background yourself and pass a contrasting color to the text then you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"use-contrast-text"}),Object(r.b)("inlineCode",{parentName:"a"},"useContrastText")),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"useContrastText","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Stack%2C%20useContrastText%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20UseContrastingTextHook%20()%20%7B%0A%20%20const%20bgDark%20%3D%20'emerald.700'%3B%0A%20%20const%20bgLight%20%3D%20'emerald.200'%3B%0A%20%20const%20colorContrastDark%20%3D%20useContrastText(bgDark)%3B%0A%20%20const%20colorContrastLight%20%3D%20useContrastText(bgLight)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CButton%20bg%3D%7BbgDark%7D%20_text%3D%7B%7B%20color%3A%20colorContrastDark%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20bg%3D%7BbgLight%7D%20_text%3D%7B%7B%20color%3A%20colorContrastLight%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseContrastingTextHook%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"usecolormode"},"useColorMode"),Object(r.b)("p",null,"If you want to define some conditionals based on current color mode or change the color mode then you can try ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/next/use-color-mode"}),"useColorMode"),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"useColorMode","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeBaseProvider%2C%0A%20%20VStack%2C%0A%20%20useColorMode%2C%0A%20%20Text%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20UseColorMode()%20%7B%0A%20%20const%20%7B%20colorMode%2C%20toggleColorMode%20%7D%20%3D%20useColorMode()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%20bg%3D%7BcolorMode%20%3D%3D%3D%20'dark'%20%3F%20'black'%20%3A%20'white'%7D%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%20display%3D%22flex%22%3E%0A%20%20%20%20%20%20%20%20The%20active%20color%20mode%20is%20%3CText%20bold%3E%7BcolorMode%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BtoggleColorMode%7D%3EToggle%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseColorMode%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"usecolormodevalue"},"useColorModeValue"),Object(r.b)("p",null,"If you do not want to add conditionals for color mode everywhere and keep the code clean, then you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/next/use-color-mode-value"}),"useColorModeValue")," hook. It takes two parameters, light mode value as the first and dark mode value as second."),Object(r.b)("div",{className:"snack-player","data-snack-name":"useColorModeValue","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeBaseProvider%2C%0A%20%20useColorMode%2C%0A%20%20Text%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20useColorModeValue%2C%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20UseColorMode()%20%7B%0A%20%20const%20%7B%20colorMode%2C%20toggleColorMode%20%7D%20%3D%20useColorMode()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%20bg%3D%7BuseColorModeValue('white'%2C%20'black')%7D%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%20display%3D%22flex%22%3E%0A%20%20%20%20%20%20%20%20The%20active%20color%20mode%20is%20%3CText%20bold%3E%7BuseColorModeValue('Light'%2C%20'Dark')%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BtoggleColorMode%7D%3EToggle%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseColorMode%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}d.isMDXComponent=!0}}]);