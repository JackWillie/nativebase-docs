(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1583:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=r.a.createContext({}),l=function(t){var e=r.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=l(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(a),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(m,c(c({ref:e},p),{},{components:a})):r.a.createElement(m,c({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},648:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(1583)),i={id:"stat",title:"Stat"},c={unversionedId:"stat",id:"version-3.0.0-next.21/stat",isDocsHomePage:!1,title:"Stat",description:"Stat provides a beautiful structure to display statistics and data.",source:"@site/versioned_docs/version-3.0.0-next.21/stat.md",slug:"/stat",permalink:"/docs/3.0.0-next.21/stat",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/stat.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"List",permalink:"/docs/3.0.0-next.21/list"},next:{title:"Tag",permalink:"/docs/3.0.0-next.21/tag"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Stat with Indicator",id:"stat-with-indicator",children:[]},{value:"<strong>Props</strong>",id:"props",children:[]}],p={toc:s};function l(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stat provides a beautiful structure to display statistics and data."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Box"),",",Object(o.b)("inlineCode",{parentName:"li"},"Text"),",",Object(o.b)("inlineCode",{parentName:"li"},"Icon")," from native-base")),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  Stat,\n  StatLabel,\n  StatNumber,\n  StatHelpText,\n  StatArrow,\n  StatGroup,\n} from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Stat Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Stat%2C%0A%20%20StatLabel%2C%0A%20%20StatNumber%2C%0A%20%20StatHelpText%2C%0A%20%20Heading%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20StatComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3EBasic%20Stat%20Usage%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CStat%20mt%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CStatLabel%3ECollected%20Fees%3C%2FStatLabel%3E%0A%20%20%20%20%20%20%20%20%3CStatNumber%3E%C2%A30.00%3C%2FStatNumber%3E%0A%20%20%20%20%20%20%20%20%3CStatHelpText%3EFeb%2012%20-%20Feb%2028%3C%2FStatHelpText%3E%0A%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CStatComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"stat-with-indicator"},"Stat with Indicator"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Stat WithIndicator","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Stat%2C%0A%20%20StatLabel%2C%0A%20%20StatNumber%2C%0A%20%20StatHelpText%2C%0A%20%20StatArrow%2C%0A%20%20StatGroup%2C%0A%20%20Heading%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20StatComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3EStat%20with%20Indicator%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CStatGroup%20mt%3D%7B6%7D%20color%3D%22indigo.500%22%3E%0A%20%20%20%20%20%20%20%20%3CStat%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatLabel%3ESent%3C%2FStatLabel%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatNumber%3E3%2C670%3C%2FStatNumber%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatHelpText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CStatArrow%20type%3D%22increase%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%2023.36%25%0A%20%20%20%20%20%20%20%20%20%20%3C%2FStatHelpText%3E%0A%20%20%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%20%20%20%20%3CStat%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatLabel%3EClicked%3C%2FStatLabel%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatNumber%3E45%3C%2FStatNumber%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStatHelpText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CStatArrow%20type%3D%22increase%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%209.05%25%0A%20%20%20%20%20%20%20%20%20%20%3C%2FStatHelpText%3E%0A%20%20%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%20%20%3C%2FStatGroup%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CStatComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},Object(o.b)("strong",{parentName:"h2"},"Props")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"StatLabel, StatNumber composes\xa0",Object(o.b)("inlineCode",{parentName:"li"},"Text")," component"),Object(o.b)("li",{parentName:"ul"},"StatArrow composes ",Object(o.b)("inlineCode",{parentName:"li"},"Icon")," component"),Object(o.b)("li",{parentName:"ul"},"Stat, StatGroup, StatHelpText composes\xa0",Object(o.b)("inlineCode",{parentName:"li"},"Box"),"\xa0component")))}l.isMDXComponent=!0}}]);