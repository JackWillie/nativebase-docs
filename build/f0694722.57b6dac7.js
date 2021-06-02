(window.webpackJsonp=window.webpackJsonp||[]).push([[1415],{1486:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(1583)),o={id:"icon",title:"Icon"},i={unversionedId:"icon",id:"version-3.0.0-next.36/icon",isDocsHomePage:!1,title:"Icon",description:"You can use icons in multiple ways in NativeBase:",source:"@site/versioned_docs/version-3.0.0-next.36/icon.md",slug:"/icon",permalink:"/docs/3.0.0-next.36/icon",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/icon.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Avatar",permalink:"/docs/3.0.0-next.36/avatar"},next:{title:"Image",permalink:"/docs/3.0.0-next.36/image"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom",id:"custom",children:[]},{value:"createIcon",id:"createicon",children:[]}]},{value:"Props",id:"props",children:[{value:"Icon",id:"icon",children:[]},{value:"CreateIcon",id:"createicon-1",children:[]}]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can use icons in multiple ways in NativeBase:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Use ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/expo/vector-icons"}),Object(c.b)("inlineCode",{parentName:"a"},"@expo/vector-icons"))," in your components"),Object(c.b)("li",{parentName:"ul"},"Create icon by creating an SVG Icon"),Object(c.b)("li",{parentName:"ul"},"Create icon using createIcon function and use it as a component")),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"All icons types from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icon"))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Icon Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Afunction%20IconComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CIcon%20type%3D%22Ionicons%22%20name%3D%22md-checkmark-circle%22%20%2F%3E%0A%20%20%20%20%20%20%3CIcon%20name%3D%22menu%22%20type%3D%22MaterialIcons%22%20color%3D%22teal.200%22%20size%3D%7B6%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CIconComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("p",null,"Apart from the icons provided by ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expo/vector-icons"}),"@expo/vector-icon"),", you can also create custom icons using SVG. You can use all the components from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-svg/react-native-svg"}),"react-native-svg"),"."),Object(c.b)("h3",{id:"custom"},"Custom"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Icon Example (custom)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Icon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Aimport%20%7B%20Rect%2C%20Path%2C%20Circle%20%7D%20from%20'react-native-svg'%3B%0A%0Afunction%20IconComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CIcon%20viewBox%3D%220%200%20200%20200%22%20color%3D%22blue.300%22%20size%3D%7B12%7D%20strokeWidth%3D%2210%22%3E%0A%20%20%20%20%20%20%3CRect%20x%3D%2210%22%20y%3D%2215%22%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22yellow.200%22%20%2F%3E%0A%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20fill%3D%22blue.300%22%0A%20%20%20%20%20%20%20%20stroke%3D%22red.300%22%0A%20%20%20%20%20%20%20%20strokeWidth%3D%2210%22%0A%20%20%20%20%20%20%20%20d%3D%22M%20100%2C%20100%20m%20-75%2C%200%20a%2075%2C75%200%201%2C0%20150%2C0%20a%2075%2C75%200%201%2C0%20-150%2C0%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CCircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2250%22%20fill%3D%22pink.200%22%20%2F%3E%0A%20%20%20%20%3C%2FIcon%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CIconComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h3",{id:"createicon"},"createIcon"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Icon (createIcon)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20createIcon%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0Aimport%20%7B%20Path%2C%20Circle%20%7D%20from%20'react-native-svg'%3B%0A%0Afunction%20CreateIconExample()%20%7B%0A%20%20const%20CustomIcon%20%3D%20createIcon(%7B%0A%20%20%20%20viewBox%3A%20%220%200%20200%20200%22%2C%0A%20%20%20%20path%3A%20%5B%0A%20%20%20%20%20%20%3CPath%0A%20%20%20%20%20%20%20%20fill%3D%22blue.200%22%0A%20%20%20%20%20%20%20%20d%3D%22M%20100%2C%20100%20m%20-75%2C%200%20a%2075%2C75%200%201%2C0%20150%2C0%20a%2075%2C75%200%201%2C0%20-150%2C0%22%0A%20%20%20%20%20%20%2F%3E%2C%0A%20%20%20%20%20%20%3CCircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22pink.200%22%20%2F%3E%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D)%3B%0A%20%20return%20%3CCustomIcon%20color%3D%22red.200%22%20size%3D%7B12%7D%20%2F%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCreateIconExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"icon"},"Icon"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of icon."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IconType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of the icon."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"viewBox"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The viewBox of the icon."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the icon."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"focusable"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Denotes whether the icon is an interactive element."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stroke"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strokeWidth"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("h3",{id:"createicon-1"},"CreateIcon"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"viewBox"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The viewBox of the icon"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path of the SVG icon"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path element of the icon"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return a?r.a.createElement(u,i(i({ref:t},b),{},{components:a})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);