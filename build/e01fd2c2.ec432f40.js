(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{657:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(733)),l={id:"collapse",title:"Collapse"},i={unversionedId:"collapse",id:"version-3.0.0-next.37/collapse",isDocsHomePage:!1,title:"Collapse",description:"Collapse is used to create regions of content that can expand or collapse with a simple animation.",source:"@site/versioned_docs/version-3.0.0-next.37/collapse.md",slug:"/collapse",permalink:"/3.0.0-next.37/collapse",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/collapse.md",version:"3.0.0-next.37"},c=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Animation Duration",id:"animation-duration",children:[]},{value:"With Callbacks(onAnimationStart &amp; onAnimationEnd)",id:"with-callbacksonanimationstart--onanimationend",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Collapse")," is used to create regions of content that can expand or collapse with a simple animation."),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.37/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/layoutanimation"}),Object(r.b)("inlineCode",{parentName:"a"},"LayoutAnimation"))," from ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(r.b)("inlineCode",{parentName:"a"},"React Native")))),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Collapse } from 'native-base';\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Collapse Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Collapse%2C%20Text%2C%20Stack%2C%20Heading%2C%20Button%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CollapseComponent()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20handleToggle%20%3D%20()%20%3D%3E%20setShow(!show)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CHeading%3EDefault%20Collapse%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCollapse%20isOpen%3D%7Bshow%7D%3E%0A%20%20%20%20%20%20%20%20Candy%20canes%20macaroon%20croissant%20carrot%20cake%20souffl%C3%A9%20toffee%20topping%0A%20%20%20%20%20%20%20%20pastry.%20Brownie%20lollipop%20brownie%20sesame%20snaps.%20Pastry%20gingerbread%0A%20%20%20%20%20%20%20%20biscuit%20sweet%20I%20love%20macaroon%20bear%20claw%20fruitcake%20oat%20cake.%20Jelly%20sweet%0A%20%20%20%20%20%20%20%20roll%20I%20love.%20Pastry%20pastry%20powder%20pie%20lemon%20drops%20chocolate%20topping%0A%20%20%20%20%20%20%20%20dessert.%0A%20%20%20%20%20%20%3C%2FCollapse%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22sm%22%20colorScheme%3D%22emerald%22%20onPress%3D%7BhandleToggle%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%3EShow%20%7Bshow%20%3F%20'Less'%20%3A%20'More'%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCollapseComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"animation-duration"},"Animation Duration"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Collapse Animation Duration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Collapse%2C%20Stack%2C%20Text%2C%20Heading%2C%20Button%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20CollapseComponent%20()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20handleToggle%20%3D%20()%20%3D%3E%20setShow(!show)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CHeading%3ECollapse%20with%20duration%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCollapse%20duration%3D%7B700%7D%20isOpen%3D%7Bshow%7D%3E%0A%20%20%20%20%20%20%20%20Candy%20canes%20macaroon%20croissant%20carrot%20cake%20souffl%C3%A9%20toffee%20topping%0A%20%20%20%20%20%20%20%20pastry.%20Brownie%20lollipop%20brownie%20sesame%20snaps.%20Pastry%20gingerbread%0A%20%20%20%20%20%20%20%20biscuit%20sweet%20I%20love%20macaroon%20bear%20claw%20fruitcake%20oat%20cake.%20Jelly%20sweet%0A%20%20%20%20%20%20%20%20roll%20I%20love.%20Pastry%20pastry%20powder%20pie%20lemon%20drops%20chocolate%20topping%0A%20%20%20%20%20%20%20%20dessert.%0A%20%20%20%20%20%20%3C%2FCollapse%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22sm%22%20colorScheme%3D%22emerald%22%20onPress%3D%7BhandleToggle%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%3EShow%20%7Bshow%20%3F%20'Less'%20%3A%20'More'%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCollapseComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h3",{id:"with-callbacksonanimationstart--onanimationend"},"With Callbacks(onAnimationStart & onAnimationEnd)"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Collapse onAnimationStart ","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Collapse%2C%20Stack%2C%20Heading%2C%20Button%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CollapseComponent%20()%20%7B%0A%20%20const%20%5Bshow%2C%20setShow%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20handleToggle%20%3D%20()%20%3D%3E%20setShow(!show)%3B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20React.useState(%0A%20%20%20%20'This%20text%20would%20change%20when%20the%20collapse%20animation%20start'%0A%20%20)%3B%0A%20%20const%20handleText%20%3D%20()%20%3D%3E%0A%20%20%20%20setText(%0A%20%20%20%20%20%20show%0A%20%20%20%20%20%20%20%20%3F%20'Collapse%20is%20open'%0A%20%20%20%20%20%20%20%20%3A%20'This%20text%20would%20change%20when%20the%20collapse%20animation%20start'%0A%20%20%20%20)%3B%0A%20%20const%20%5Bcolor%2C%20setColor%5D%20%3D%20React.useState('emerald')%3B%0A%20%20const%20handleColorToggle%20%3D%20()%20%3D%3E%0A%20%20%20%20setColor(color%20%3D%3D%3D%20'emerald'%20%3F%20'indigo'%20%3A%20'emerald')%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%20mx%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CHeading%3ECollapse%20with%20callbacks%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%3E%7Btext%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CCollapse%0A%20%20%20%20%20%20%20%20onAnimationEnd%3D%7BhandleColorToggle%7D%0A%20%20%20%20%20%20%20%20onAnimationStart%3D%7BhandleText%7D%0A%20%20%20%20%20%20%20%20isOpen%3D%7Bshow%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Candy%20canes%20macaroon%20croissant%20carrot%20cake%20souffl%C3%A9%20toffee%20topping%0A%20%20%20%20%20%20%20%20pastry.%20Brownie%20lollipop%20brownie%20sesame%20snaps.%20Pastry%20gingerbread%0A%20%20%20%20%20%20%20%20biscuit%20sweet%20I%20love%20macaroon%20bear%20claw%20fruitcake%20oat%20cake.%20Jelly%20sweet%0A%20%20%20%20%20%20%20%20roll%20I%20love.%20Pastry%20pastry%20powder%20pie%20lemon%20drops%20chocolate%20topping%0A%20%20%20%20%20%20%20%20dessert.%0A%20%20%20%20%20%20%3C%2FCollapse%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%7Bcolor%7D%20size%3D%22sm%22%20onPress%3D%7BhandleToggle%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%3EShow%20%7Bshow%20%3F%20'Less'%20%3A%20'More'%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCollapseComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isOpen"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the content will be visible."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The animation duration(in ms) as it expands."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startingHeight"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The height you want the content in it's collapsed state. Set to 0 by default."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endingHeight"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The height you want the content in it's expanded state. Set to auto by default."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onAnimationStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The function to be called when the collapse animation starts."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onAnimationEnd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The function to be called when the collapse animation starts."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"accessibility"},"Accessibility"),Object(r.b)("p",null,"Collapse currently just provides a way to hide/show component."),Object(r.b)("p",null,"Make sure you follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-img-long-description.html"}),"disclosure accessibility spec")," while implementing a collapse."))}p.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||r;return a?o.a.createElement(u,i(i({ref:t},s),{},{components:a})):o.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);