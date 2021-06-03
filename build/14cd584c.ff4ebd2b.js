(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(1714)),i={id:"setup-provider",title:"Setup NativeBase Provider"},c={unversionedId:"setup-provider",id:"setup-provider",isDocsHomePage:!1,title:"Setup NativeBase Provider",description:"NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:",source:"@site/docs/setup-provider.md",slug:"/setup-provider",permalink:"/next/setup-provider",editUrl:"https://github.com/nativebase/website/tree/main/docs/setup-provider.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"Utility Props",permalink:"/next/utility-props"}},l=[{value:"<strong>Add custom theme (Optional)</strong>",id:"add-custom-theme-optional",children:[]},{value:"Add colorModeManager (Optional)",id:"add-colormodemanager-optional",children:[]},{value:"Add external dependencies (Optional)",id:"add-external-dependencies-optional",children:[]},{value:"NativeBaseProvider Props",id:"nativebaseprovider-props",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"App.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// 1. import `NativeBaseProvider` component\nimport { NativeBaseProvider, Text, View } from 'native-base';\nimport { StatusBar } from 'expo-status-bar';\nimport { StyleSheet } from 'react-native';\n\nexport default function App() {\n  // 2. Use at the root of your app\n  return (\n    <NativeBaseProvider>\n      <View style={styles.container}>\n        <Text>Open up App.js to start working on your app!</Text>\n        <StatusBar style=\"auto\" />\n      </View>\n    </NativeBaseProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(o.b)("h2",{id:"add-custom-theme-optional"},Object(o.b)("strong",{parentName:"h2"},"Add custom theme (Optional)")),Object(o.b)("p",null,"If you need to customize the default theme to match your design requirements, you can extend the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"theme"),"\xa0from\xa0",Object(o.b)("inlineCode",{parentName:"p"},"native-base"),"."),Object(o.b)("p",null,"NativeBase 3.0 provides an\xa0",Object(o.b)("inlineCode",{parentName:"p"},"extendTheme"),"\xa0function that deep merges the default theme with your customizations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// 1. Import the extendTheme function\nimport { extendTheme, NativeBaseProvider } from 'native-base';\n// 2. Extend the theme to include custom colors, fonts, etc\nconst newColorTheme = {\n  brand: {\n    900: '#8287af',\n    800: '#7c83db',\n    700: '#b3bef6',\n  },\n};\nconst theme = extendTheme({ colors: newColorTheme });\n// 3. Pass the `theme` prop to the `NativeBaseProvider`\nfunction App() {\n  return (\n    <NativeBaseProvider theme={theme}>\n      <App />\n    </NativeBaseProvider>\n  );\n}\n")),Object(o.b)("h2",{id:"add-colormodemanager-optional"},"Add colorModeManager (Optional)"),Object(o.b)("p",null,"If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it."),Object(o.b)("p",null,"In the below example we will show how to store the active ColorMode in a async storage, so it can be consistent all around our app."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, ColorMode } from 'native-base';\nimport type { StorageManager } from 'native-base';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\n\nexport default ({ children, theme }: any) => {\n  const colorModeManager: StorageManager = {\n    get: async () => {\n      try {\n        let val = await AsyncStorage.getItem('@my-app-color-mode');\n        return val === 'dark' ? 'dark' : 'light';\n      } catch (e) {\n        console.log(e);\n        return 'light';\n      }\n    },\n    set: async (value: ColorMode) => {\n      try {\n        await AsyncStorage.setItem('@my-app-color-mode', value);\n      } catch (e) {\n        console.log(e);\n      }\n    },\n  };\n  return (\n    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>\n      {/* Your App Goes Here */}\n    </NativeBaseProvider>\n  );\n};\n")),Object(o.b)("h2",{id:"add-external-dependencies-optional"},"Add external dependencies (Optional)"),Object(o.b)("p",null,"If you want to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"box#with-linear-gradient"}),"Gradient feature in Box"),", you need to pass linear gradient dependency as a config object in NativeBaseProvider. This dependency can be either from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/linear-gradient/"}),"expo-linear-gradient")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-linear-gradient"}),"react-native-linear-gradient")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { NativeBaseProvider } from 'native-base';\n\nconst config = {\n  dependencies: {\n    // For Expo projects (Bare or managed workflow)\n    'linear-gradient': require('expo-linear-gradient').LinearGradient,\n    // For non expo projects\n    // 'linear-gradient': require('react-native-linear-gradient').default,\n  },\n};\n\nexport default () => {\n  return (\n    <NativeBaseProvider config={config}>\n      <Center flex={1}>\n        <Example />\n      </Center>\n    </NativeBaseProvider>\n  );\n};\n")),Object(o.b)("h2",{id:"nativebaseprovider-props"},"NativeBaseProvider Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initialWindowMetrics"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mock data for frame and insets. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/th3rdwave/react-native-safe-area-context#testing"}),"Refer this")," for further information."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"colorModeManager"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{ get : Function , set : Function }"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage Color mode in your app"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"use custom theme in your app"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NativeBase Default Theme")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"config"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{dependencies: {}}"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"To include external dependencies. For example - ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"box#with-linear-gradient"}),"Linear gradient")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0}}]);