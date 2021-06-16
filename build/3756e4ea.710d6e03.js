(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(742)),i={id:"text",title:"Text"},c={unversionedId:"text",id:"version-3.0.0-next.38/text",isDocsHomePage:!1,title:"Text",description:"Text is used to render text and paragraphs within an interface.",source:"@site/versioned_docs/version-3.0.0-next.38/text.md",slug:"/text",permalink:"/3.0.0-next.38/text",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/text.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Toast",permalink:"/3.0.0-next.38/toast"},next:{title:"Heading",permalink:"/3.0.0-next.38/heading"}},s=[{value:"Examples",id:"examples",children:[{value:"ChangingFontSize",id:"changingfontsize",children:[]},{value:"Truncated",id:"truncated",children:[]},{value:"Nested",id:"nested",children:[]},{value:"Overridden",id:"overridden",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Text")," is used to render text and paragraphs within an interface."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"changingfontsize"},"ChangingFontSize"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Text%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xs%22%3EExtra%20Small%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22sm%22%3ESmall%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3EMedium%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%3ELarge%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xl%22%3EExtra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%222xl%22%3E2%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%223xl%22%3E3%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%224xl%22%3E4%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%225xl%22%3E5%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%226xl%22%3E6%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"truncated"},"Truncated"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Text%2C%20VStack%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%20width%3D%7B350%7D%3E%0A%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3ETruncated%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20isTruncated%3E%0A%20%20%20%20%20%20%20%20Lorem%20ipsum%20is%20placeholder%20text%20commonly%20used%20in%20the%20graphic%2C%20print%2C%20and%0A%20%20%20%20%20%20%20%20publishing%20industries%20for%20previewing%20layouts%20and%20visual%20mockups.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3EWith%20Two%20lines%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20noOfLines%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%22The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog%22%20is%20an%20English-language%0A%20%20%20%20%20%20%20%20pangram%E2%80%94a%20sentence%20that%20contains%20all%20of%20the%20letters%20of%20the%20English%0A%20%20%20%20%20%20%20%20alphabet.%20Owing%20to%20its%20existence%2C%20Chakra%20was%20created.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"nested"},"Nested"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20This%20is%20the%20%3CText%20bold%3Enested%3C%2FText%3E%20example.%0A%20%20%20%20%3C%2FText%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"overridden"},"Overridden"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Text%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%7B20%7D%3ECustom%20font-size%20value%20for%20this%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20bold%3EBold%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20italic%3EItalic%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20underline%3EUnderline%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20highlight%3EHighlighted%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20H%3CText%20sub%3E2%3C%2FText%3EO%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20underline%3EUnderline%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20strikeThrough%3EStrikeThrough%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20bold%20italic%20underline%3E%0A%20%20%20%20%20%20%20%20Bold%2C%20Italic%20%26%20Underline%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ReactNode\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        fontSize\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | number[] | string[] | Record<string, string>\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size of font\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        noOfLines\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Used to truncate text at a specific number of lines\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        bold\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Make the text bold.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isTruncated\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        italic\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Make the text italic.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        underline\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Underline the text.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        strikeThrough\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        A horizontal line through its center.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        sub\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Text will have smaller font size.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        highlight\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Highlight the text with a yellow background.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Text implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"utility-props#typography"}),"TypographyProps"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/text"}),Object(o.b)("code",{parentName:"a"},"TextProp")))))}d.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return x}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,x=b["".concat(i,".").concat(m)]||b[m]||l[m]||o;return n?r.a.createElement(x,c(c({ref:t},p),{},{components:n})):r.a.createElement(x,c({ref:t},p))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);