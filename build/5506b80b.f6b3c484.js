(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,u=l["".concat(c,".").concat(m)]||l[m]||b[m]||i;return n?r.a.createElement(u,o(o({ref:t},p),{},{components:n})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},572:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(1583)),c={id:"spinner",title:"Spinner"},o={unversionedId:"spinner",id:"version-3.0.0-next.37/spinner",isDocsHomePage:!1,title:"Spinner",description:"Examples",source:"@site/versioned_docs/version-3.0.0-next.37/spinner.md",slug:"/spinner",permalink:"/spinner",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/spinner.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Progress",permalink:"/progress"},next:{title:"Toast",permalink:"/toast"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Sizes",id:"sizes",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CHeading%20color%3D%22primary.300%22%3ESpinner%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CSpinner%20accessibilityLabel%3D%22Loading%20posts%22%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"colors"},"Colors"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22danger.400%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22blue.500%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22gray.900%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20color%3D%22warning.500%22%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"sizes"},"Sizes"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Spinner%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CSpinner%20size%3D%22sm%22%20%2F%3E%0A%20%20%20%20%20%20%3CSpinner%20size%3D%22lg%22%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        style\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Style to be passed in ActivityIndicator\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},'\n        number | "sm" | "lg" | "small" | "large"\n      '),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Size of Spinner\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        accessibilityLabel\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Accessibility label. This will be announced by screen reader when a user hovers or touches the spinner.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(i.b)("p",null,"Spinner composes ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/activityindicator"}),Object(i.b)("inlineCode",{parentName:"a"},"ActivityIndicator"))," so all ",Object(i.b)("inlineCode",{parentName:"p"},"ActivityIndicator")," Props can be passed to Spinner."))}d.isMDXComponent=!0}}]);