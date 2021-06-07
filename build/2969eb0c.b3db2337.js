(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(720)),o={id:"divider",title:"Divider"},c={unversionedId:"divider",id:"version-3.0.0-next.37/divider",isDocsHomePage:!1,title:"Divider",description:"Divider is used to visually separate content in a list or group.",source:"@site/versioned_docs/version-3.0.0-next.37/divider.md",slug:"/divider",permalink:"/3.0.0-next.37/divider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/divider.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Badge",permalink:"/3.0.0-next.37/badge"},next:{title:"List",permalink:"/3.0.0-next.37/list"}},s=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Divider Orientation",id:"divider-orientation",children:[]},{value:"Composition",id:"composition",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Divider")," is used to visually separate content in a list or group."),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Divider } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("p",null,"The Divider displays a thin horizontal or vertical line."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Divider%2C%0A%20%20Heading%2C%0A%20%20Box%2C%0A%20%20Icon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20AntDesign%2C%20FontAwesome%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%7B190%7D%3E%0A%20%20%20%20%20%20%3CHeading%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20Chrome%20%3CIcon%20ml%3D%22auto%22%20as%3D%7B%3CAntDesign%20name%3D%22chrome%22%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CDivider%20my%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%3CHeading%20mx%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20Firefox%20%7B%22%20%20%22%7D%0A%20%20%20%20%20%20%20%20%3CIcon%20ml%3D%22auto%22%20as%3D%7B%3CFontAwesome%20name%3D%22firefox%22%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"divider-orientation"},"Divider Orientation"),Object(i.b)("p",null,"Pass the ",Object(i.b)("inlineCode",{parentName:"p"},"orientation")," prop and set it to either ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If the horizontal orientation is used, make sure that the parent element is assigned a width and If the vertical orientation is used, make sure that the parent element is assigned a height.")),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Divider%2C%0A%20%20Flex%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Icon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20AntDesign%2C%20FontAwesome%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%7B160%7D%3E%0A%20%20%20%20%20%20%3CHeading%20mx%3D%22auto%22%3EBrowser%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CDivider%20my%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%3CFlex%20mx%3D%7B3%7D%20direction%3D%22row%22%20justify%3D%22space-evenly%22%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20as%3D%7B%3CAntDesign%20name%3D%22chrome%22%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20as%3D%7B%3CFontAwesome%20name%3D%22firefox%22%20%2F%3E%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FFlex%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"bg")," or ",Object(i.b)("inlineCode",{parentName:"p"},"backgroundColor")," to change the divider's color and ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," to change its width and height respectively."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Divider%2C%20Flex%2C%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFlex%20direction%3D%22row%22%20p%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CText%3ESimple%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22red.500%22%20size%3D%7B3%7D%20mx%3D%7B4%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EEasy%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22blue.500%22%20size%3D%7B3%7D%20mx%3D%7B4%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EBeautiful%3C%2FText%3E%0A%20%20%20%20%20%20%3CDivider%20bg%3D%22green.500%22%20size%3D%7B3%7D%20mx%3D%7B4%7D%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3ENativebase%3C%2FText%3E%0A%20%20%20%20%3C%2FFlex%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        orientation\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},'\n        "vertical" | "horizontal"\n      '),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The orientation of the divider.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"Divider implements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Divider has role set to ",Object(i.b)("inlineCode",{parentName:"li"},"separator")," and ",Object(i.b)("inlineCode",{parentName:"li"},"aria-orientation")," to either ",Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"li"},"vertical"),".")))}p.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,v=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return n?r.a.createElement(v,c(c({ref:t},d),{},{components:n})):r.a.createElement(v,c({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);