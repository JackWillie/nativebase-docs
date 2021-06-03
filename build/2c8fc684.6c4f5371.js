(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(1583)),i={id:"setup-provider",title:"Setup NativeBase Provider"},c={unversionedId:"setup-provider",id:"version-3.0.0-next.35/setup-provider",isDocsHomePage:!1,title:"Setup NativeBase Provider",description:"NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:",source:"@site/versioned_docs/version-3.0.0-next.35/setup-provider.md",slug:"/setup-provider",permalink:"/3.0.0-next.35/setup-provider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/setup-provider.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Installation",permalink:"/3.0.0-next.35/installation"},next:{title:"Color Mode",permalink:"/3.0.0-next.35/color-mode"}},l=[{value:"<strong>Add custom theme (Optional)</strong>",id:"add-custom-theme-optional",children:[]},{value:"Add colorModeManager (Optional)",id:"add-colormodemanager-optional",children:[]},{value:"NativeBaseProvider Props",id:"nativebaseprovider-props",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"App.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// 1. import `NativeBaseProvider` component\nimport { NativeBaseProvider, Text, View } from 'native-base';\nimport { StatusBar } from 'expo-status-bar';\nimport { StyleSheet } from 'react-native';\n\nexport default function App() {\n  // 2. Use at the root of your app\n  return (\n    <NativeBaseProvider>\n      <View style={styles.container}>\n        <Text>Open up App.js to start working on your app!</Text>\n        <StatusBar style=\"auto\" />\n      </View>\n    </NativeBaseProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(o.b)("h2",{id:"add-custom-theme-optional"},Object(o.b)("strong",{parentName:"h2"},"Add custom theme (Optional)")),Object(o.b)("p",null,"If you need to customize the default theme to match your design requirements, you can extend the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"theme"),"\xa0from\xa0",Object(o.b)("inlineCode",{parentName:"p"},"native-base"),"."),Object(o.b)("p",null,"NativeBase 3.0 provides an\xa0",Object(o.b)("inlineCode",{parentName:"p"},"extendTheme"),"\xa0function that deep merges the default theme with your customizations."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// 1. Import the extendTheme function\nimport { extendTheme, NativeBaseProvider } from 'native-base';\n// 2. Extend the theme to include custom colors, fonts, etc\nconst newColorTheme = {\n  brand: {\n    900: '#8287af',\n    800: '#7c83db',\n    700: '#b3bef6',\n  },\n};\nconst theme = extendTheme({ colors: newColorTheme });\n// 3. Pass the `theme` prop to the `NativeBaseProvider`\nfunction App() {\n  return (\n    <NativeBaseProvider theme={theme}>\n      <App />\n    </NativeBaseProvider>\n  );\n}\n")),Object(o.b)("h2",{id:"add-colormodemanager-optional"},"Add colorModeManager (Optional)"),Object(o.b)("p",null,"If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it."),Object(o.b)("p",null,"In the below example we will show how to store the active ColorMode in a async storage, so it can be consistent all around our app."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, ColorMode } from 'native-base';\nimport type { StorageManager } from 'native-base';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\n\nexport default ({ children, theme }: any) => {\n  const colorModeManager: StorageManager = {\n    get: async () => {\n      try {\n        let val = await AsyncStorage.getItem('@my-app-color-mode');\n        return val === 'dark' ? 'dark' : 'light';\n      } catch (e) {\n        console.log(e);\n        return 'light';\n      }\n    },\n    set: async (value: ColorMode) => {\n      try {\n        await AsyncStorage.setItem('@my-app-color-mode', value);\n      } catch (e) {\n        console.log(e);\n      }\n    },\n  };\n  return (\n    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>\n      {/* Your App Goes Here */}\n    </NativeBaseProvider>\n  );\n};\n")),Object(o.b)("h2",{id:"nativebaseprovider-props"},"NativeBaseProvider Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"initialWindowMetrics"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mock data for frame and insets. ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/th3rdwave/react-native-safe-area-context#testing"}),"Refer this")," for further information."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"colorModeManager"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{ get : Function , set : Function }"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Manage Color mode in your app"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"theme"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"use custom theme in your app"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NativeBase Default Theme")))))}s.isMDXComponent=!0}}]);