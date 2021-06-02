(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||b[p]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},673:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(1583)),c={id:"use-color-mode",title:"useColorMode"},l={unversionedId:"use-color-mode",id:"version-3.0.0-next.24/use-color-mode",isDocsHomePage:!1,title:"useColorMode",description:"useColorMode is a custom hook used to get and set the color mode.",source:"@site/versioned_docs/version-3.0.0-next.24/useColorMode.md",slug:"/use-color-mode",permalink:"/docs/3.0.0-next.24/use-color-mode",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/useColorMode.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"useToken",permalink:"/docs/3.0.0-next.24/use-token"},next:{title:"useColorModeValue",permalink:"/docs/3.0.0-next.24/use-color-mode-value"}},i=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Return",id:"return",children:[]}],s={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useColorMode")," is a custom hook used to get and set the color mode."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { useColorMode } from 'native-base';\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"useColorMode","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20VStack%2C%20useColorMode%2C%20Text%2C%20Button%20%7D%20from%20'native-base'%3B%0A%0Afunction%20UseColorMode%20()%20%7B%0A%09const%20%7B%20colorMode%2C%20toggleColorMode%20%7D%20%3D%20useColorMode()%3B%0A%09return%20(%0A%09%09%3CVStack%20space%3D%7B4%7D%20p%3D%7B2%7D%20w%3D'90%25'%3E%0A%09%09%09%3CText%20fontSize%3D'lg'%3E%0A%09%09%09%09The%20active%20color%20mode%20is%20%3CText%20bold%3E%7BcolorMode%7D%3C%2FText%3E%0A%09%09%09%3C%2FText%3E%0A%09%09%09%3CButton%20onPress%3D%7BtoggleColorMode%7D%3EToggle%3C%2FButton%3E%0A%09%09%3C%2FVStack%3E%0A%09)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseColorMode%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(a.b)("h2",{id:"return"},"Return"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"colorMode"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The active color mode (light or dark)."),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"setColorMode"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Use to set color mode."),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"toggleColorMode"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Use to toggle between light and dark mode."),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0}}]);