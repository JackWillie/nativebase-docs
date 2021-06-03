(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.a.createElement(v,i(i({ref:t},p),{},{components:a})):r.a.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1583)),s={id:"responsive-style",title:"Responsive"},i={unversionedId:"responsive-style",id:"version-3.0.0-next.35/responsive-style",isDocsHomePage:!1,title:"Responsive",description:"NativeBase V3 supports responsive styles out of the box. Instead of manually adding responsiveness to your apps, NativeBase V3 allows you provide object and array values to add responsive styles.",source:"@site/versioned_docs/version-3.0.0-next.35/responsive.md",slug:"/responsive-style",permalink:"/3.0.0-next.35/responsive-style",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/responsive.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"NativeBase Factory",permalink:"/3.0.0-next.35/nativebase-factory"},next:{title:"SafeAreaView Props",permalink:"/3.0.0-next.35/safe-area-view-props"}},c=[{value:"The Array syntax",id:"the-array-syntax",children:[]},{value:"The Object syntax",id:"the-object-syntax",children:[]},{value:"<strong>More Examples</strong>",id:"more-examples",children:[]},{value:"<strong>Demo</strong>",id:"demo",children:[]}],p={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NativeBase V3 supports responsive styles out of the box. Instead of manually adding responsiveness to your apps, NativeBase V3 allows you provide object and array values to add responsive styles."),Object(o.b)("p",null,"Responsive syntax relies on the breakpoints defined in the theme object."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const breakpoints = {\n  base: 0,\n  sm: 480,\n  md: 768,\n  lg: 992,\n  xl: 1280,\n};\n")),Object(o.b)("p",null,"To make styles responsive, you can use either the array or object syntax."),Object(o.b)("h2",{id:"the-array-syntax"},"The Array syntax"),Object(o.b)("p",null,"All style props that arrays as values for responsive styles."),Object(o.b)("p",null,"For Example to make a ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," width or w responsive using the array syntax, here's what you need to do:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Responsive Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20BreakpointExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20bg%3D%22red.200%22%20w%3D%7B%5B'100px'%2C%20'400px'%2C%20'560px'%5D%7D%3E%0A%20%20%20%20%20%20This%20is%20a%20box%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreakpointExample%20%2F%3E%0A%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"the-object-syntax"},"The Object syntax"),Object(o.b)("p",null,"You can also define responsive values with breakpoint aliases in an object. Any undefined alias key will define the base, non-responsive value."),Object(o.b)("p",null,"For Example to make a ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," fontSize responsive using the object syntax, here's what you need to do:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Responsive ObjectSyntax","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20BreakpointExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CText%20fontSize%3D%7B%7B%20base%3A%20'24px'%2C%20md%3A%20'40px'%2C%20lg%3A%20'56px'%20%7D%7D%3E%0A%20%20%20%20%20%20This%20is%20responsive%20text%0A%20%20%20%20%3C%2FText%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreakpointExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"more-examples"},Object(o.b)("strong",{parentName:"h2"},"More Examples")),Object(o.b)("p",null,"This works for every style prop in the theme specification, which means you can change the style of most properties at a given breakpoint."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Responsive Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20BreakpointExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20height%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20base%3A%20'75%25'%2C%20%2F%2F%200-768px%0A%20%20%20%20%20%20%20%20%20%20md%3A%20'50%25'%2C%20%2F%2F%20768px-1280%2C%0A%20%20%20%20%20%20%20%20%20%20xl%3A%20'25%25'%2C%20%2F%2F%201280px%2B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20bg%3D%22teal.400%22%0A%20%20%20%20%20%20%20%20width%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20'75%25'%2C%20%2F%2F%200-480px%0A%20%20%20%20%20%20%20%20%20%20'50%25'%2C%20%2F%2F%20480px-768px%0A%20%20%20%20%20%20%20%20%20%20'25%25'%2C%20%2F%2F%20768px-992px%0A%20%20%20%20%20%20%20%20%20%20'15%25'%2C%20%2F%2F%20992px%2B%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7B%2F*%20responsive%20font%20size%20*%2F%7D%0A%20%20%20%20%20%20%3CBox%20fontSize%3D%7B%5B'sm'%2C%20'md'%2C%20'lg'%2C%20'xl'%5D%7D%3EFont%20Size%3C%2FBox%3E%0A%20%20%20%20%20%20%7B%2F*%20responsive%20margin%20*%2F%7D%0A%20%20%20%20%20%20%3CBox%20mt%3D%7B%5B2%2C%204%2C%206%2C%208%5D%7D%20width%3D%22100%25%22%20height%3D%2224px%22%20bg%3D%22green.400%22%20%2F%3E%0A%20%20%20%20%20%20%7B%2F*%20responsive%20padding%20*%2F%7D%0A%20%20%20%20%20%20%3CBox%20bg%3D%22red.200%22%20p%3D%7B%5B2%2C%204%2C%206%2C%208%5D%7D%3E%0A%20%20%20%20%20%20%20%20Padding%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreakpointExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"demo"},Object(o.b)("strong",{parentName:"h2"},"Demo")),Object(o.b)("p",null,"Here's a simple example of a component that uses a stacked layout on small screens, and a side-by-side layout on larger screens\xa0:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Responsive Demo","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Text%2C%20Image%2C%20Link%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20BreakpointExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20flexDir%3D%7B%7B%20base%3A%20'column'%2C%20sm%3A%20'column'%2C%20md%3A%20'row'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CBox%20flexShrink%3D%7B0%7D%3E%0A%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20width%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20height%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fbit.ly%2F2jYM25F'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20alt%3D%22Woman%20paying%20for%20a%20purchase%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CBox%20mt%3D%7B%7B%20base%3A%204%2C%20md%3A%200%20%7D%7D%20ml%3D%7B%7B%20md%3A%202%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20fontWeight%3D%22bold%22%0A%20%20%20%20%20%20%20%20%20%20textTransform%3D%22uppercase%22%0A%20%20%20%20%20%20%20%20%20%20fontSize%3D%22sm%22%0A%20%20%20%20%20%20%20%20%20%20letterSpacing%3D%22wide%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22teal.600%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Marketing%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLink%20mt%3D%7B1%7D%20fontSize%3D%22lg%22%20fontWeight%3D%22semibold%22%20href%3D%22%23%22%3E%0A%20%20%20%20%20%20%20%20%20%20Finding%20customers%20for%20your%20new%20business%0A%20%20%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%20%20%20%20%3CText%20mt%3D%7B2%7D%20color%3D%22gray.500%22%3E%0A%20%20%20%20%20%20%20%20%20%20Getting%20a%20new%20business%20off%20the%20ground%20is%20a%20lot%20of%20hard%20work.%20Here%20are%0A%20%20%20%20%20%20%20%20%20%20five%20ideas%20you%20can%20use%20to%20find%20your%20first%20customers.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%3B%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CBreakpointExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}l.isMDXComponent=!0}}]);