(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return n?o.a.createElement(b,p(p({ref:t},c),{},{components:n})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(1583)),i={id:"setup-provider",title:"Setup NativeBase Provider"},p={unversionedId:"setup-provider",id:"version-3.0.0-next.21/setup-provider",isDocsHomePage:!1,title:"Setup NativeBase Provider",description:"NativeBaseProvider is a component that makes the theme available throughout your App for use using React's Context API. You need to Add NativeBaseProvider to the Root of your App, for example this is how App.js, that get's generated when you create a App using Expo should be updated in order to make NativeBase Components work as they are intended to be.",source:"@site/versioned_docs/version-3.0.0-next.21/setup-provider.md",slug:"/setup-provider",permalink:"/docs/3.0.0-next.21/setup-provider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/setup-provider.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"Installation",permalink:"/docs/3.0.0-next.21/installation"},next:{title:"Color Mode",permalink:"/docs/3.0.0-next.21/color-mode"}},s=[{value:"<strong>Add custom theme (Optional)</strong>",id:"add-custom-theme-optional",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NativeBaseProvider is a component that makes the theme available throughout your App for use using React's Context API. You need to Add NativeBaseProvider to the Root of your App, for example this is how ",Object(a.b)("inlineCode",{parentName:"p"},"App.js"),", that get's generated when you create a App using Expo should be updated in order to make NativeBase Components work as they are intended to be."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"App.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// 1. import `NativeBaseProvider` component\nimport { NativeBaseProvider, Text, View } from 'native-base';\nimport { StatusBar } from 'expo-status-bar';\nimport { StyleSheet } from 'react-native';\n\nexport default function App() {\n  // 2. Use at the root of your app\n  return (\n    <NativeBaseProvider>\n      <View style={styles.container}>\n        <Text>Open up App.js to start working on your app!</Text>\n        <StatusBar style='auto' />\n      </View>\n    </NativeBaseProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(a.b)("h2",{id:"add-custom-theme-optional"},Object(a.b)("strong",{parentName:"h2"},"Add custom theme (Optional)")),Object(a.b)("p",null,"If you need to customize the default theme to match your design requirements, you can extend the\xa0",Object(a.b)("inlineCode",{parentName:"p"},"theme"),"\xa0from\xa0",Object(a.b)("inlineCode",{parentName:"p"},"native-base"),"."),Object(a.b)("p",null,"NativeBase 3.0 provides an\xa0",Object(a.b)("inlineCode",{parentName:"p"},"extendTheme"),"\xa0function that deep merges the default theme with your customizations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// 1. Import the extendTheme function\nimport { extendTheme, NativeBaseProvider } from 'native-base';\n// 2. Extend the theme to include custom colors, fonts, etc\nconst newColorTheme = {\n  brand: {\n    900: '#8287af',\n    800: '#7c83db',\n    700: '#b3bef6',\n  },\n};\nconst theme = extendTheme({ colors: newColorTheme });\n// 3. Pass the `theme` prop to the `NativeBaseProvider`\nfunction App() {\n  return (\n    <NativeBaseProvider theme={theme}>\n      <App />\n    </NativeBaseProvider>\n  );\n}\n")))}u.isMDXComponent=!0}}]);