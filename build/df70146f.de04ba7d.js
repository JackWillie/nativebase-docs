(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{654:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(733)),c={id:"FAB",title:"FAB"},i={unversionedId:"FAB",id:"FAB",isDocsHomePage:!1,title:"FAB",description:"A floating action button is a circular icon button that hovers over content to promote a primary action in the application.",source:"@site/docs/FAB.md",slug:"/FAB",permalink:"/next/FAB",editUrl:"https://github.com/nativebase/website/tree/main/docs/FAB.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Stagger",permalink:"/next/stagger"},next:{title:"useDisclose",permalink:"/next/use-disclosure"}},s=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Placement",id:"placement",children:[]},{value:"Custom Position",id:"custom-position",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A floating action button is a circular icon button that hovers over content to promote a primary action in the application."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Fab } from 'native-base';\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20Fab%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20AntDesign%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFab%20icon%3D%7B%3CIcon%20color%3D%22white%22%20as%3D%7BAntDesign%7D%20name%3D%22plus%22%20size%3D%22sm%22%20%2F%3E%7D%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"placement"},"Placement"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20Fab%2C%20Icon%2C%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20AntDesign%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFab%0A%20%20%20%20%20%20placement%3D%22top-left%22%0A%20%20%20%20%20%20icon%3D%7B%3CIcon%20color%3D%22white%22%20as%3D%7BAntDesign%7D%20name%3D%22plus%22%20size%3D%7B4%7D%20%2F%3E%7D%0A%20%20%20%20%20%20label%3D%7B%0A%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%20fontSize%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%20%20BUTTON%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"custom-position"},"Custom Position"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20%7B%20Fab%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20AntDesign%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFab%0A%20%20%20%20%20%20bottom%3D%7B4%7D%0A%20%20%20%20%20%20right%3D%7B24%7D%0A%20%20%20%20%20%20icon%3D%7B%3CIcon%20color%3D%22white%22%20as%3D%7BAntDesign%7D%20name%3D%22plus%22%20%2F%3E%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        placement\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "top-right" | "top-left" | "bottom-right" | "bottom-left"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Placement of the Fab\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        bottom-right\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        label\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Text to be displayed in Fab\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        icon\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Icon to be displayed in Fab\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Fab implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"button#props"}),"Button"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pressable#props"}),"Pressable"))))}l.isMDXComponent=!0},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);