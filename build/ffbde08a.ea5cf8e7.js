(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{726:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(733)),o={id:"flex",title:"Flex"},c={unversionedId:"flex",id:"version-3.0.0-next.38/flex",isDocsHomePage:!1,title:"Flex",description:"Flex is a Box with display: flex and comes with helpful style shorthand.",source:"@site/versioned_docs/version-3.0.0-next.38/flex.md",slug:"/flex",permalink:"/3.0.0-next.38/flex",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/flex.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Container",permalink:"/3.0.0-next.38/container"},next:{title:"HStack / Row",permalink:"/3.0.0-next.38/hStack"}},l=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[{value:"Using the Spacer",id:"using-the-spacer",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Flex")," is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/3.0.0-next.38/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box"))," with ",Object(i.b)("inlineCode",{parentName:"p"},"display: flex")," and comes with helpful style shorthand."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Flex, Spacer } from 'native-base';\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Flex"),": a ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.38/box"}),"Box"))," with ",Object(i.b)("inlineCode",{parentName:"li"},"display: flex")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Spacer"),": creates an adjustable, empty space that can be used to tune the spacing between child elements within ",Object(i.b)("inlineCode",{parentName:"li"},"Flex"))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Flex components comes with some helpful shorthand props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"flexDirection"),"\xa0is\xa0",Object(i.b)("inlineCode",{parentName:"li"},"direction")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"flexWrap"),"\xa0is\xa0",Object(i.b)("inlineCode",{parentName:"li"},"wrap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"alignItems"),"\xa0is\xa0",Object(i.b)("inlineCode",{parentName:"li"},"align")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"justifyContent"),"\xa0is\xa0",Object(i.b)("inlineCode",{parentName:"li"},"justify"))),Object(i.b)("p",null,"While you can pass the verbose props, using the shorthand can save you some time."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Flex%2C%20Center%2C%20Heading%2C%20Button%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5Bdirection%2C%20setDirection%5D%20%3D%20React.useState(%22column%22)%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CHeading%20mb%3D%7B3%7D%3EPrimary%20Shades%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20my%3D%7B3%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDirection(direction%20%3D%3D%3D%20%22row%22%20%3F%20%22column%22%20%3A%20%22row%22)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Change%20Flex%20Direction%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CFlex%20flexDirection%3D%7Bdirection%7D%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.100%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22gray.800%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20100%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.200%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20200%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.300%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20300%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20400%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FFlex%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"using-the-spacer"},"Using the Spacer"),Object(i.b)("p",null,"You can pass Spacer to add Space between Flex items."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Flex%2C%20Spacer%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CHeading%3EAdding%20Spacer%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CFlex%20h%3D%7B40%7D%20w%3D%7B20%7D%20mt%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%20%20%3CSpacer%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22secondary.400%22%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FFlex%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Flex")," implements ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/3.0.0-next.38/box"}),"Box")),", so all the Box Props can be passed to it, i.e. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),Object(i.b)("inlineCode",{parentName:"a"},"color")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#margin-and-padding"}),Object(i.b)("inlineCode",{parentName:"a"},"space")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),Object(i.b)("inlineCode",{parentName:"a"},"layout")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#flexbox"}),Object(i.b)("inlineCode",{parentName:"a"},"flexbox"))," & ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#borders"}),Object(i.b)("inlineCode",{parentName:"a"},"border"))," props from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props"}),"style-system"),"."))}s.isMDXComponent=!0},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);