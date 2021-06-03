(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},504:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(1583)),i={id:"breakpoint",title:"Breakpoints"},c={unversionedId:"breakpoint",id:"version-3.0.0-next.27/breakpoint",isDocsHomePage:!1,title:"Breakpoints",description:"Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.",source:"@site/versioned_docs/version-3.0.0-next.27/breakpoints.md",slug:"/breakpoint",permalink:"/3.0.0-next.27/breakpoint",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/breakpoints.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Customising Components",permalink:"/3.0.0-next.27/customizingComponents"},next:{title:"How to use NativeBase theme",permalink:"/3.0.0-next.27/theme"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size."),Object(a.b)("p",null,"NativeBase provides these default breakpoints and you can update with using extendTheme."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"breakpoints = {\n  base: 0,\n  sm: 480,\n  md: 768,\n  lg: 992,\n  xl: 1280,\n};\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useBreakpointValue"),"\xa0is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Box, useBreakpointValue } from 'native-base';\nexport default () => {\n  const color = useBreakpointValue({\n    base: 'red.200',\n    sm: 'blue.200',\n    md: 'blue.200',\n  });\n  return (\n    <Box bg={color} w={'100px'}>\n      This is a box\n    </Box>\n  );\n};\n")))}u.isMDXComponent=!0}}]);