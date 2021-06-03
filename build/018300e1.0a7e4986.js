(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(a),d=n,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1583)),i={id:"aspectRatio",title:"AspectRatio"},c={unversionedId:"aspectRatio",id:"version-3.0.0-next.24/aspectRatio",isDocsHomePage:!1,title:"AspectRatio",description:"Implements",source:"@site/versioned_docs/version-3.0.0-next.24/aspectRatio.md",slug:"/aspectRatio",permalink:"/3.0.0-next.24/aspectRatio",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/aspectRatio.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"Responsive",permalink:"/3.0.0-next.24/responsive-style"},next:{title:"Box",permalink:"/3.0.0-next.24/box"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[]},{value:"Example (Embed Image)",id:"example-embed-image",children:[]},{value:"Props",id:"props",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Box")," from native-base/Box")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"AspectRatio Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20AspectRatio%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20AspectRationComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAspectRatio%20height%3D%7B200%7D%20bg%3D%22black%22%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22red.400%22%20%2F%3E%0A%20%20%20%20%3C%2FAspectRatio%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAspectRationComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"example-embed-image"},"Example (Embed Image)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"AspectRatio ExampleEmbedImage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20AspectRatio%2C%20Image%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20AspectRationComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAspectRatio%20ratio%3D%7B0.5%7D%20height%3D%7B200%7D%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FAspectRatio%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAspectRationComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AspectRatio")," implements ",Object(o.b)("strong",{parentName:"p"},"Box")," , so all the ",Object(o.b)("strong",{parentName:"p"},"Box")," props can be passed to ",Object(o.b)("strong",{parentName:"p"},"AspectRatio"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ratio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The aspect ratio of the content."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}l.isMDXComponent=!0}}]);