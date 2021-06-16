(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{655:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(742)),i={id:"image",title:"Image"},s={unversionedId:"image",id:"version-3.0.0-next.40/image",isDocsHomePage:!1,title:"Image",description:"Generic Image components from React Native.",source:"@site/versioned_docs/version-3.0.0-next.40/image.md",slug:"/image",permalink:"/image",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/image.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Icon",permalink:"/icon"},next:{title:"PresenceTransition",permalink:"/presence-transition"}},o=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Border Radius",id:"border-radius",children:[]},{value:"Fallback",id:"fallback",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Generic Image components from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/image"}),Object(c.b)("inlineCode",{parentName:"a"},"Image"))," from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(c.b)("li",{parentName:"ul"},"You can use all props of React native Image.")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20alt%3D%22Alternate%20Text%22%0A%20%20%20%20%20%20size%3D%7B%22xl%22%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"sizes"},"Sizes"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20VStack%2C%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%7B%5B%22xs%22%2C%20%22sm%22%2C%20%22md%22%2C%20%22lg%22%2C%20%22xl%22%2C%20%222xl%22%5D.map((size)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20size%3D%7Bsize%7D%0A%20%20%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20alt%3D%7B%22Alternate%20Text%20%22%20%2B%20size%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"border-radius"},"Border Radius"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20resizeMode%3D%7B%22contain%22%7D%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20alt%3D%22Alternate%20Text%22%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"fallback"},"Fallback"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20alt%3D%22fallback%20text%22%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2F-page-icon.png%22%2C%20%2F%2F%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20fallbackSource%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_lights.jpg%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(null)%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef.current%3F.setNativeProps(%7B%0A%20%20%20%20%20%20borderWidth%3A%2010%2C%0A%20%20%20%20%20%20opacity%3A%200.5%2C%0A%20%20%20%20%7D)%0A%20%20%7D%2C%20%5BmyRef%5D)%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg%22%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20alt%3D%22Alternate%20Text%22%0A%20%20%20%20%20%20size%3D%22xl%22%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        alt\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The alt text that describes the image. This will be added as accessibilityLabel in android/iOS and alt on web\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        fallbackSource\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/image#source"}),"ImageSourcePropType"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        In event there was an error loading the src, specify a fallback source.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ignoreFallback\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Opt out of the fallbackSource logic and show alternative text\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _alt\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Text styling for alt.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"Image implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/image"}),Object(c.b)("code",{parentName:"a"},"Image from React Native")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"))))}l.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||c;return a?r.a.createElement(u,s(s({ref:t},p),{},{components:a})):r.a.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<c;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);