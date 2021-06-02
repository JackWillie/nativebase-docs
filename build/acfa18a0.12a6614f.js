(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1096:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var o=t(3),r=t(7),a=(t(0),t(1583)),i={id:"customizingComponents",title:"Customising Components"},c={unversionedId:"customizingComponents",id:"version-3.0.0-next.30/customizingComponents",isDocsHomePage:!1,title:"Customising Components",description:"NativeBase theme is complex object which looks like",source:"@site/versioned_docs/version-3.0.0-next.30/customizingComponents.md",slug:"/customizingComponents",permalink:"/docs/3.0.0-next.30/customizingComponents",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/customizingComponents.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Making components dark mode compatible",permalink:"/docs/3.0.0-next.30/darkMode"},next:{title:"Breakpoints",permalink:"/docs/3.0.0-next.30/breakpoint"}},s=[],p={toc:s};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NativeBase theme is complex object which looks like"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"// theme\n{\n    colors: {...},\n    fonts: {...},\n    .\n    .\n    .\n    config: {...},\n}\n")),Object(a.b)("p",null,"using NativeBase's ",Object(a.b)("inlineCode",{parentName:"p"},"extendTheme")," function, we can update theme object. A simple example to illustrate the process of updating the theme."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, themeTools } from 'native-base';\nimport { extendTheme } from 'native-base';\nimport { Content } from './Content';\n\nexport default function () {\n  const theme = extendTheme({\n    components: {\n      Button: {\n        // Can simply pass default props to change default behaviour of components.\n        defaultProps: {\n          colorScheme: 'red',\n        },\n      },\n      Checkbox: {\n        defaultProps: {\n          size: 'lg',\n          colorScheme: 'amber',\n        },\n      },\n      Avatar: {\n        baseStyle: {\n          borderRadius: 'md',\n        },\n      },\n      Heading: {\n        // Can pass also function, giving you access themeingTools\n        baseStyle: (props: any) => {\n          return {\n            color: themeTools.mode('red.300', 'blue.300')(props),\n            fontWeight: 'normal',\n          };\n        },\n      },\n    },\n  });\n  return (\n    <NativeBaseProvider theme={theme}>\n      <Content />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("p",null,"From the above example we can observe that we customise components by passing the ",Object(a.b)("strong",{parentName:"p"},"components")," object with the ",Object(a.b)("strong",{parentName:"p"},"key")," being the ",Object(a.b)("strong",{parentName:"p"},"name")," of the ",Object(a.b)("strong",{parentName:"p"},"component"),". Whereas you set ",Object(a.b)("inlineCode",{parentName:"p"},"defaultProps")," or ",Object(a.b)("inlineCode",{parentName:"p"},"baseStyle")," to customise the components."),Object(a.b)("p",null,"Both defaultProps and baseStyle can either be simple object or function. You can use object simple use cases while the function when you want to use ",Object(a.b)("inlineCode",{parentName:"p"},"themeTools"),"."))}m.isMDXComponent=!0},1583:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),m=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=m(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(t),b=o,d=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);