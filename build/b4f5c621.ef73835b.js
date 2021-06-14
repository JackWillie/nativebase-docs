(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{557:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(733)),s={id:"use-accessible-colors",title:"useAccessibleColors"},c={unversionedId:"use-accessible-colors",id:"version-3.0.0-next.37/use-accessible-colors",isDocsHomePage:!1,title:"useAccessibleColors",description:"useAccessibleColors is a custom hook used to get the setting for using color with better color and contrast accessibility in the app. By default, accessible colors are turned off to get better color matching the theme of the app. You can use this hook if you always want to use accessible text colors. You can also pass it in the config for NativeBaseProvider with extendTheme.",source:"@site/versioned_docs/version-3.0.0-next.37/useAccessibleColors.md",slug:"/use-accessible-colors",permalink:"/3.0.0-next.37/use-accessible-colors",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/useAccessibleColors.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"useContrastText",permalink:"/3.0.0-next.37/use-contrast-text"},next:{title:"Todo-List",permalink:"/3.0.0-next.37/todo-example"}},i=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Return value",id:"return-value",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useAccessibleColors")," is a custom hook used to get the setting for using color with better ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://web.dev/color-and-contrast-accessibility/"}),"color and contrast accessibility")," in the app. By default, accessible colors are turned off to get better color matching the theme of the app. You can use this hook if you always want to use accessible text colors. You can also pass it in the config for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/3.0.0-next.37/setup-provider"}),Object(a.b)("inlineCode",{parentName:"a"},"NativeBaseProvider"))," with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/3.0.0-next.37/setup-provider#add-custom-theme-optional"}),Object(a.b)("inlineCode",{parentName:"a"},"extendTheme")),"."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useAccessibleColors } from 'native-base';\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"useAccessibleColors","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useContrastText%2C%20useTheme%2C%20NativeBaseProvider%2C%20Center%2C%20useAccessibleColors%20%7D%20from%20'native-base'%3B%0Afunction%20UseContrastingTextHook%20()%20%7B%0A%20%20let%20%5B%2C%20%2C%20toggleAccessibleColors%5D%20%3D%20useAccessibleColors()%3B%0A%20%20const%20%7B%20colors%20%7D%20%3D%20useTheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%7BObject.keys(colors.teal).map((key)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20colorContrast%20%3D%20useContrastText(%60teal.%24%7Bkey%7D%60)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60teal.%24%7Bkey%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20bg%3D%7B%60teal.%24%7Bkey%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20colorContrast%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%3CButton%20mt%3D%7B2%7D%20onPress%3D%7BtoggleAccessibleColors%7D%20bg%3D%7B'indigo.600'%7D%3E%0A%20%20%20%20%20%20%20%20Toggle%20Accessible%20Colors%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseContrastingTextHook%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"Returns an array with values ",Object(a.b)("inlineCode",{parentName:"p"},"accessibleColors"),", ",Object(a.b)("inlineCode",{parentName:"p"},"setAccessibleColors"),", ",Object(a.b)("inlineCode",{parentName:"p"},"toggleAccessibleColors"),"."))}u.isMDXComponent=!0},733:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);