(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{648:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(742)),c={id:"VStack",title:"VStack / Column"},i={unversionedId:"VStack",id:"version-3.0.0-next.40/VStack",isDocsHomePage:!1,title:"VStack / Column",description:"VStack aligns items vertically.Column is also an alias for VStack.",source:"@site/versioned_docs/version-3.0.0-next.40/VStack.md",slug:"/VStack",permalink:"/VStack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/VStack.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Stack",permalink:"/stack"},next:{title:"ZStack",permalink:"/ZStack"}},s=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"VStack")," aligns items vertically.",Object(o.b)("inlineCode",{parentName:"p"},"Column")," is also an alias for ",Object(o.b)("inlineCode",{parentName:"p"},"VStack"),"."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { VStack } from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20VStack%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20number%20%7D%20from%20%22%40storybook%2Faddon-knobs%22%0Aexport%20function%20Example()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7Bnumber(%22Space%22%2C%204)%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3EVStack%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20bg%3D%22secondary.400%22%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20shadow%3D%7B3%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        direction\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        ResponsiveValue<"column" | "row">\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The direction of the Stack Items.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        column\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"VStack implements ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"stack#props"}),"Stack"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box"))))}l.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);