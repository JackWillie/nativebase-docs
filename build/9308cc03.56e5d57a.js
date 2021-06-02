(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},933:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(1583)),i={id:"darkMode",title:"Making components dark mode compatible"},c={unversionedId:"darkMode",id:"darkMode",isDocsHomePage:!1,title:"Making components dark mode compatible",description:"By default, most of NativeBase's components are dark mode compatible. In some scenario, you might need to make your component respond to color mode. There are 2 way to achieve this:",source:"@site/docs/darkMode.md",slug:"/darkMode",permalink:"/docs/next/darkMode",editUrl:"https://github.com/nativebase/website/tree/main/docs/darkMode.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Customising Theme",permalink:"/docs/next/customizingTheme"},next:{title:"Customising Components",permalink:"/docs/next/customizingComponents"}},l=[{value:"1. By updating component&#39;s theme",id:"1-by-updating-components-theme",children:[]},{value:"2. By using useColorModeValue",id:"2-by-using-usecolormodevalue",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, most of NativeBase's components are dark mode compatible. In some scenario, you might need to make your component respond to color mode. There are 2 way to achieve this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"By updating component's theme"),Object(a.b)("li",{parentName:"ol"},"By using useColorModeValue")),Object(a.b)("h2",{id:"1-by-updating-components-theme"},"1. By updating component's theme"),Object(a.b)("p",null,"In this approach we use NativeBase's ",Object(a.b)("inlineCode",{parentName:"p"},"extendTheme")," function to customise the components and the use themeTools to make the component dark mode compatible."),Object(a.b)("p",null,"Note: Changes on the theme will be reflected on the entire application."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, themeTools } from 'native-base';\nimport { extendTheme } from 'native-base';\nimport { Content } from './Content';\n\nexport default function () {\n  const theme = extendTheme({\n    components: {\n      Heading: {\n        baseStyle: (props: any) => {\n          return {\n            color: themeTools.mode('red.300', 'blue.300')(props),\n          };\n        },\n      },\n    },\n  });\n  return (\n    <NativeBaseProvider theme={theme}>\n      <Content />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("p",null,"In the above example, the Heading component's color property will now respond to change in color, namely in light mode it will be red (red.300) colored and in dark mode it will blue (blue.300) colored."),Object(a.b)("h2",{id:"2-by-using-usecolormodevalue"},"2. By using useColorModeValue"),Object(a.b)("p",null,"In this approach we use NativeBase's ",Object(a.b)("inlineCode",{parentName:"p"},"useColorModeValue")," function and update specific props instead of updating the entire theme."),Object(a.b)("p",null,"Note: Changes on the theme will be reflected on the entire application."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { useColorModeValue, Button } from 'native-base';\n\nexport default function () {\n  return (\n    <Button\n      colorScheme={useColorModeValue('teal', 'amber')}\n      variant={useColorModeValue('solid', 'outline')}\n    >\n      Sample\n    </Button>\n  );\n}\n")),Object(a.b)("p",null,"In the above example, you'll get a ",Object(a.b)("strong",{parentName:"p"},"solid teal Button")," in ",Object(a.b)("strong",{parentName:"p"},"light")," mode whereas an ",Object(a.b)("strong",{parentName:"p"},"outline amber Button")," in ",Object(a.b)("strong",{parentName:"p"},"dark")," mode. You can get creative and make other properties respond to the color mode as well."))}s.isMDXComponent=!0}}]);