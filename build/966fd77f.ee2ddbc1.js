(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{474:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(720)),c={id:"skeleton",title:"Skeleton"},i={unversionedId:"skeleton",id:"skeleton",isDocsHomePage:!1,title:"Skeleton",description:"Skeleton is used to display the loading state of a component.",source:"@site/docs/skeleton.md",slug:"/skeleton",permalink:"/next/skeleton",editUrl:"https://github.com/nativebase/website/tree/main/docs/skeleton.md",version:"current"},l=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Color",id:"color",children:[]},{value:"IsLoaded",id:"isloaded",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Skeleton")," is used to display the loading state of a component."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/next/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Skeleton Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Skeleton%2C%20Stack%2C%20Text%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20SkeletonComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20width%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CSkeleton%20variant%3D%22text%22%20height%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%20%20%3CSkeleton%20my%3D%7B2%7D%20height%3D%7B6%7D%20variant%3D%22rect%22%20%2F%3E%0A%20%20%20%20%20%20%3CSkeleton%20my%3D%7B2%7D%20height%3D%7B6%7D%20variant%3D%22circle%22%20size%3D%7B20%7D%20%2F%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSkeletonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"color"},"Color"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Skeleton Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Skeleton%2C%20VStack%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20SkeletonComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B5%7D%20width%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CSkeleton%20startColor%3D%22pink.600%22%20endColor%3D%22purple.400%22%20height%3D%2220px%22%20%2F%3E%0A%20%20%20%20%20%20%3CSkeleton%20startColor%3D%22%230dead0%22%20endColor%3D%22%230face0%22%20height%3D%2220px%22%20%2F%3E%0A%20%20%20%20%20%20%3CSkeleton%0A%20%20%20%20%20%20%20%20startColor%3D%22warning.200%22%0A%20%20%20%20%20%20%20%20endColor%3D%22danger.200%22%0A%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20variant%3D%22circle%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CSkeletonComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"isloaded"},"IsLoaded"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Skeleton IsLoaded","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Box%2C%20Skeleton%2C%20Stack%2C%20Text%2C%20Avatar%2C%20HStack%2C%20Image%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20Composition(%7B%20loaded%20%7D%3A%20any)%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20size%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CHStack%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%7Bloaded%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22Ankur%20Kedia%22%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fnativebase.github.io%2Fimg%2Ficon.png'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%3CSkeleton%20variant%3D%22circle%22%20size%3D%7B12%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%3CText%20fontWeight%3D%22bold%22%20fontSize%3D%22lg%22%20ml%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bloaded%20%3F%20'NativeBase'%20%3A%20%3CSkeleton%3ENativeBase%3C%2FSkeleton%3E%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CBox%20size%3D%7B200%7D%20mt%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%7Bloaded%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_lights.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20alt%3D%22NativeBase%20logo%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%3CSkeleton%20variant%3D%22rect%22%20height%3D%22100%25%22%20%2F%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHStack%20space%3D%7B10%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CComposition%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CComposition%20loaded%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Skeleton")," composes ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/next/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box"))," so you can pass all ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/next/box#props"}),Object(o.b)("inlineCode",{parentName:"a"},"Box props"))," to it."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startColor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color at the animation start."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endColor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color at the animation end."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variant"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"circle"),", ",Object(o.b)("inlineCode",{parentName:"td"},"rect"),", ",Object(o.b)("inlineCode",{parentName:"td"},"text")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variation of Skeleton to use"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"text"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the Skeleton"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(u,i(i({ref:t},s),{},{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);