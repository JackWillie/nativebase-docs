(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(a),m=n,b=l["".concat(o,".").concat(m)]||l[m]||p[m]||i;return a?r.a.createElement(b,s(s({ref:t},d),{},{components:a})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},449:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"use-media-query",title:"useMediaQuery"},s={unversionedId:"use-media-query",id:"version-3.0.0-next.21/use-media-query",isDocsHomePage:!1,title:"useMediaQuery",description:"useMediaQuery is a custom hook used to help detect whether a single media query or multiple media queries individually match. React Native does not natively support media queries, so useMediaQuery is still limited.",source:"@site/versioned_docs/version-3.0.0-next.21/useMediaQuery.md",slug:"/use-media-query",permalink:"/docs/3.0.0-next.21/use-media-query",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/useMediaQuery.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"useClipboard",permalink:"/docs/3.0.0-next.21/use-clipboard"},next:{title:"useTheme",permalink:"/docs/3.0.0-next.21/use-theme"}},c=[{value:"Import",id:"import",children:[{value:"Usage (max-height)",id:"usage-max-height",children:[]},{value:"Usage (min-width)",id:"usage-min-width",children:[]},{value:"Usage (orientation)",id:"usage-orientation",children:[]}]},{value:"Return value",id:"return-value",children:[]}],d={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useMediaQuery")," is a custom hook used to help detect whether a single media query or multiple media queries individually match. React Native does not natively support media queries, so ",Object(i.b)("inlineCode",{parentName:"p"},"useMediaQuery")," is still limited."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { useMediaQuery } from "native-base";\n')),Object(i.b)("h3",{id:"usage-max-height"},"Usage (max-height)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"useMediaQuery Usage(max-height)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20useMediaQuery%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseMediaQueryExample()%20%7B%0A%20%20const%20%5BisSmaller%5D%20%3D%20useMediaQuery(%7B%20maxHeight%3A%20512%20%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%7BisSmaller%20%3F%20%22Height%20smaller%20than%20512%22%20%3A%20%22Height%20larger%20than%20512%22%7D%0A%20%20%20%20%3C%2FText%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseMediaQueryExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"usage-min-width"},"Usage (min-width)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"useMediaQuery Usage(min-width)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20useMediaQuery%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseMediaQueryExample()%20%7B%0A%20%20const%20%5BisLargerThan512%5D%20%3D%20useMediaQuery(%7B%20minWidth%3A%20512%20%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%7BisLargerThan512%20%3F%20%22Width%20larger%20than%20512%22%20%3A%20%22Width%20smaller%20than%20512%22%7D%0A%20%20%20%20%3C%2FText%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseMediaQueryExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"usage-orientation"},"Usage (orientation)"),Object(i.b)("div",{className:"snack-player","data-snack-name":"useMediaQuery Usage(orientation)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20useMediaQuery%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UseMediaQueryExample()%20%7B%0A%20%20const%20%5BisLandScape%2C%20isPortrait%5D%20%3D%20useMediaQuery(%5B%0A%20%20%20%20%7B%20orientation%3A%20%22landscape%22%20%7D%2C%0A%20%20%20%20%7B%20orientation%3A%20%22portrait%22%20%7D%2C%0A%20%20%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Landscape%20Mode%3A%20%24%7BisLandScape%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Portrait%20Mode%3A%20%24%7BisPortrait%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseMediaQueryExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"return-value"},"Return value"),Object(i.b)("p",null,"The\xa0",Object(i.b)("inlineCode",{parentName:"p"},"useMediaQuery"),"\xa0hook returns an array of booleans, indicating whether the given query matches or queries match."),Object(i.b)("p",null,"Why an array?\xa0",Object(i.b)("inlineCode",{parentName:"p"},"useMediaQuery"),"\xa0accepts both an object and an array of object, but will always return an array. This way, you can combine multiple media queries which will be individually matched in a single call. The options to use are still limited to ",Object(i.b)("inlineCode",{parentName:"p"},"maxWidth")," | ",Object(i.b)("inlineCode",{parentName:"p"},"minWidth")," | ",Object(i.b)("inlineCode",{parentName:"p"},"maxHeight")," | ",Object(i.b)("inlineCode",{parentName:"p"},"minHeight")," | ",Object(i.b)("inlineCode",{parentName:"p"},"orientation")))}u.isMDXComponent=!0}}]);