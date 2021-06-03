(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1714:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),b=n,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return t?r.a.createElement(u,c(c({ref:a},l),{},{components:t})):r.a.createElement(u,c({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},218:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(1714)),o={id:"image",title:"Image"},c={unversionedId:"image",id:"version-3.0.0-next.24/image",isDocsHomePage:!1,title:"Image",description:"Generic Image components from react-native",source:"@site/versioned_docs/version-3.0.0-next.24/image.md",slug:"/image",permalink:"/3.0.0-next.24/image",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/image.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"Icon",permalink:"/3.0.0-next.24/icon"},next:{title:"AppBar",permalink:"/3.0.0-next.24/appBar"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Sizes)",id:"example-sizes",children:[]},{value:"Example (Border)",id:"example-border",children:[]},{value:"Example (Fallback)",id:"example-fallback",children:[]},{value:"Example (With Ref)",id:"example-with-ref",children:[]},{value:"Props",id:"props",children:[{value:"Image",id:"image",children:[]}]}],l={toc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generic Image components from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Image")," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/image"}),"react-native"),"."),Object(i.b)("li",{parentName:"ul"},"You can use all props of React native Image.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Image%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20size%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'httpBoxs%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-sizes"},"Example (Sizes)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20HStack%2C%20Image%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B12%7D%0A%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20size%3D%7B32%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-border"},"Example (Border)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Border)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-fallback"},"Example (Fallback)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(Fallback)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CImage%0A%20%20%20%20%20%20size%3D%7B150%7D%0A%20%20%20%20%20%20alt%3D%22nativebase%22%0A%20%20%20%20%20%20borderRadius%3D%7B100%7D%0A%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2F-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20fallbackSource%3D%7B%7B%0A%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_lights.jpg'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"example-with-ref"},"Example (With Ref)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Image Example(With Ref)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Image%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20ImageComponent%20()%20%7B%0A%20%20const%20myRef%3A%20any%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef%3F.current.setNativeProps(%7B%20borderWidth%3A%2010%2C%20opacity%3A%200.5%20%7D)%3B%0A%20%20%7D%2C%20%5BmyRef%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20size%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20ref%3D%7BmyRef%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.io%2Fassets%2Fimg%2Ffront-page-icon.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CImageComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"image"},"Image"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fallbackSource"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ImageSourcePropType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In event there was an error loading the src, specify a fallback source."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"alt"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alt text that describes the image"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ignoreFallback"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opt out of the fallbackSource logic and show alternative text"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the box size of image."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","alt"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextProps"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text styling for alt."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0}}]);