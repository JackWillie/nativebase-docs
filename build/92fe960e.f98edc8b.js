(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return a?r.a.createElement(u,c(c({ref:t},p),{},{components:a})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},933:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"stat",title:"Stat"},c={unversionedId:"stat",id:"version-3.0.0-next.33/stat",isDocsHomePage:!1,title:"Stat",description:"The Stat provides a beautiful structure to display statistics and data.",source:"@site/versioned_docs/version-3.0.0-next.33/stat.md",slug:"/stat",permalink:"/3.0.0-next.33/stat",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/stat.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"List",permalink:"/3.0.0-next.33/list"},next:{title:"Tag",permalink:"/3.0.0-next.33/tag"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Stat with Indicator",id:"stat-with-indicator",children:[]}]},{value:"<strong>Props</strong>",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Stat provides a beautiful structure to display statistics and data."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")),",",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/text"}),Object(i.b)("inlineCode",{parentName:"a"},"Text")),",",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/icon"}),Object(i.b)("inlineCode",{parentName:"a"},"Icon")),".")),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Stat } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Stat Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Stat%2C%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20StatComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3EBasic%20Stat%20Usage%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CStat%20mt%3D%7B6%7D%3E%0A%20%20%20%20%20%20%20%20%3CStat.Label%3ECollected%20Fees%3C%2FStat.Label%3E%0A%20%20%20%20%20%20%20%20%3CStat.Number%3E%C2%A30.00%3C%2FStat.Number%3E%0A%20%20%20%20%20%20%20%20%3CStat.HelpText%3EFeb%2012%20-%20Feb%2028%3C%2FStat.HelpText%3E%0A%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CStatComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"stat-with-indicator"},"Stat with Indicator"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Stat WithIndicator","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Stat%2C%0A%20%20Heading%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20StatComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3EStat%20with%20Indicator%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CStat.Group%20mt%3D%7B6%7D%20color%3D%22indigo.5%22%3E%0A%20%20%20%20%20%20%20%20%3CStat%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.Label%3ESent%3C%2FStat.Label%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.Number%3E3%2C670%3C%2FStat.Number%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.HelpText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CStat.Arrow%20type%3D%22increase%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%2023.36%25%0A%20%20%20%20%20%20%20%20%20%20%3C%2FStat.HelpText%3E%0A%20%20%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%20%20%20%20%3CStat%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.Label%3EClicked%3C%2FStat.Label%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.Number%3E45%3C%2FStat.Number%3E%0A%20%20%20%20%20%20%20%20%20%20%3CStat.HelpText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CStat.Arrow%20type%3D%22increase%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%209.05%25%0A%20%20%20%20%20%20%20%20%20%20%3C%2FStat.HelpText%3E%0A%20%20%20%20%20%20%20%20%3C%2FStat%3E%0A%20%20%20%20%20%20%3C%2FStat.Group%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CStatComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},Object(i.b)("strong",{parentName:"h2"},"Props")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Stat.Label"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Stat.Number")," composes the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/text"}),Object(i.b)("inlineCode",{parentName:"a"},"Text"))," component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Stat.Arrow")," composes the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/icon"}),Object(i.b)("inlineCode",{parentName:"a"},"Icon"))," component but only accepts ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"increase"))," and ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"decrease"))," as ",Object(i.b)("strong",{parentName:"li"},"type"),", yielding icon respectively."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Stat"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Stat.HelpText")," composes the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Stat.Group")," composes the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/3.0.0-next.33/hStack"}),Object(i.b)("inlineCode",{parentName:"a"},"HStack"))," component.")))}l.isMDXComponent=!0}}]);