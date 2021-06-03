(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1059:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(1583)),i={id:"use-breakPoint-value",title:"useBreakpointValue"},s={unversionedId:"use-breakPoint-value",id:"version-3.0.0-next.21/use-breakPoint-value",isDocsHomePage:!1,title:"useBreakpointValue",description:"useBreakpointValue\xa0is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.",source:"@site/versioned_docs/version-3.0.0-next.21/useBreakPointValue.md",slug:"/use-breakPoint-value",permalink:"/3.0.0-next.21/use-breakPoint-value",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/useBreakPointValue.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"usePopover",permalink:"/3.0.0-next.21/use-popOver"},next:{title:"useClipboard",permalink:"/3.0.0-next.21/use-clipboard"}},u=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"<strong>Return value</strong>",id:"return-value",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useBreakpointValue"),"\xa0is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size."),Object(o.b)("h2",{id:"import"},Object(o.b)("strong",{parentName:"h2"},"Import")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { useBreakpointValue } from "native-base";\n')),Object(o.b)("h2",{id:"return-value"},Object(o.b)("strong",{parentName:"h2"},"Return value")),Object(o.b)("p",null,"The\xa0",Object(o.b)("inlineCode",{parentName:"p"},"useBreakpointValue"),"\xa0hook returns the value for the current breakpoint."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"useBreakpoint Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20useBreakpointValue%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20UseBreakpointValueExample%20()%20%7B%0A%20%20const%20color%20%3D%20useBreakpointValue(%7B%0A%20%20%20%20base%3A%20'red.200'%2C%0A%20%20%20%20sm%3A%20'blue.200'%2C%0A%20%20%20%20md%3A%20'blue.200'%2C%0A%20%20%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20bg%3D%7Bcolor%7D%20w%3D%7B'100px'%7D%3E%0A%20%20%20%20%20%20This%20is%20a%20box%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseBreakpointValueExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}p.isMDXComponent=!0},1583:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,v=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return r?a.a.createElement(v,s(s({ref:t},c),{},{components:r})):a.a.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);