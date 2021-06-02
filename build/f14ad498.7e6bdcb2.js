(window.webpackJsonp=window.webpackJsonp||[]).push([[1419],{1490:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"heading",title:"Heading"},c={unversionedId:"heading",id:"version-3.0.0-next.32/heading",isDocsHomePage:!1,title:"Heading",description:"Headings are used for rendering headlines. Heading\xa0composes\xa0Text\xa0so you can use all the style props.",source:"@site/versioned_docs/version-3.0.0-next.32/heading.md",slug:"/heading",permalink:"/docs/3.0.0-next.32/heading",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.32/heading.md",version:"3.0.0-next.32",sidebar:"version-3.0.0-next.32/componentsSidebar",previous:{title:"Text",permalink:"/docs/3.0.0-next.32/text"},next:{title:"AlertDialog",permalink:"/docs/3.0.0-next.32/alertDialog"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Truncate",id:"truncate",children:[]},{value:"Override",id:"override",children:[]},{value:"Composition",id:"composition",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Headings are used for rendering headlines. ",Object(i.b)("inlineCode",{parentName:"p"},"Heading"),"\xa0composes\xa0",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.32/text"}),Object(i.b)("inlineCode",{parentName:"a"},"Text")),"\xa0so you can use all the style props."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/text"}),Object(i.b)("inlineCode",{parentName:"a"},"Text"))," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"))),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Heading } from 'native-base';\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20%3CHeading%3E%20I'm%20a%20Heading%3C%2FHeading%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"sizes"},"Sizes"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Sizes)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%222xl%22%3E(2xl)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xl%22%3E(xl)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22lg%22%3E(lg)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22md%22%3E(md)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22sm%22%3E(sm)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3E(xs)%20In%20love%20with%20React%20Native%3C%2FHeading%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"truncate"},"Truncate"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Truncate)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHeading%20isTruncated%3E%0A%20%20%20%20%20%20Basic%20text%20writing%2C%20including%20headings%2C%20body%20text%2C%20lists%2C%20and%20more.%0A%20%20%20%20%3C%2FHeading%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"override"},"Override"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Overriden)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHeading%20size%3D%22lg%22%20fontSize%3D%7B50%7D%3E%0A%20%20%20%20%20%20I'm%20overriding%20this%20heading%0A%20%20%20%20%3C%2FHeading%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Heading Example(Composition)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Text%2C%20Button%2C%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20HeadingComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B4%7D%3EModern%20online%20and%20offline%20payments%20for%20Africa%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xl%22%3E%0A%20%20%20%20%20%20%20%20Paystack%20helps%20businesses%20in%20Africa%20get%20paid%20by%20anyone%2C%20anywhere%20in%20the%0A%20%20%20%20%20%20%20%20world%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22lg%22%20colorScheme%3D%22green%22%20mt%3D%2224px%22%3E%0A%20%20%20%20%20%20%20%20Create%20a%20free%20account%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeadingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xl"),", ",Object(i.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),",",Object(i.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xs"),","),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the heading."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"xl"))))))}l.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=n,u=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);