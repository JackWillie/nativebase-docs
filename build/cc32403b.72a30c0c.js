(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{618:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var a=r(3),n=r(7),s=(r(0),r(742)),o={id:"pressable",title:"Pressable"},c={unversionedId:"pressable",id:"pressable",isDocsHomePage:!1,title:"Pressable",description:"Pressable is a lower level primitive if you need more flexibility than a button and access to hover, pressed and focus events.",source:"@site/docs/pressable.md",slug:"/pressable",permalink:"/next/pressable",editUrl:"https://github.com/nativebase/website/tree/main/docs/pressable.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Button",permalink:"/next/button"},next:{title:"CheckBox",permalink:"/next/checkBox"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Accessing events (hover, focus and pressed)",id:"accessing-events-hover-focus-and-pressed",children:[]}]},{value:"Props",id:"props",children:[{value:"Pressable",id:"pressable",children:[]}]}],b={toc:p};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Pressable is a lower level primitive if you need more flexibility than a button and access to hover, pressed and focus events."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic"},"Basic"),Object(s.b)("p",null,"Pressable accepts most of the utility style system props."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Pressable%2C%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20Alert%20%7D%20from%20%22react-native%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPressable%20onPress%3D%7B()%20%3D%3E%20Alert.alert(%22hello%22)%7D%20p%3D%7B2%7D%20borderWidth%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CText%3Ehello%20world%3C%2FText%3E%0A%20%20%20%20%3C%2FPressable%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"accessing-events-hover-focus-and-pressed"},"Accessing events (hover, focus and pressed)"),Object(s.b)("p",null,"Pressable accepts a render prop children, which receives isHovered, isFocused and isPressed props."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Pressable%2C%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPressable%20p%3D%7B4%7D%20borderWidth%3D%7B1%7D%3E%0A%20%20%20%20%20%20%7B(%7B%20isHovered%2C%20isFocused%2C%20isPressed%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Pressable%20is%20in%20state%7B%22%20%3A%3A%20%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7BisPressed%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%22pressed%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20isHovered%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%22hovered%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20isFocused%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20%22focused%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%22%22%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3C%2FPressable%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("h3",{id:"pressable"},"Pressable"),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        onHoverIn\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Called when a mouse enters the Pressable\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        onHoverOut\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Called when a mouse leaves the Pressable\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        onFocus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Called when Pressable receives focus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        onBlur\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Called when Pressable loses focus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _hover\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"pressable#props"}),"IPressableProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Style props to be applied when hovered\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _pressed\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"pressable#props"}),"IPressableProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Style props to be applied when pressed\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _focus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"pressable#props"}),"IPressableProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Style props to be applied when focus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ReactNode | (({ isPressed, isHovered, isFocused, }: { isPressed: boolean; isHovered: boolean; isFocused: boolean; }) => any)\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Either children or a render prop that receives a boolean reflecting whether\nthe component is currently pressed.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"Pressable implements ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/pressable"}),Object(s.b)("code",{parentName:"a"},"Pressable")),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(s.b)("code",{parentName:"a"},"View")),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#safearea"}),"SafeAreaProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#transform"}),"TransformProps"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"))))}i.isMDXComponent=!0},742:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),i=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,u=d["".concat(o,".").concat(m)]||d[m]||l[m]||s;return r?n.a.createElement(u,c(c({ref:t},b),{},{components:r})):n.a.createElement(u,c({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<s;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);