(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{601:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),r=(n(0),n(742)),a={id:"customizingFonts",title:"Customising Fonts"},c={unversionedId:"customizingFonts",id:"version-3.0.0-next.38/customizingFonts",isDocsHomePage:!1,title:"Customising Fonts",description:"Follow 3 simple steps to add a custom font family.",source:"@site/versioned_docs/version-3.0.0-next.38/customizingFonts.md",slug:"/customizingFonts",permalink:"/3.0.0-next.38/customizingFonts",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/customizingFonts.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Customising Theme",permalink:"/3.0.0-next.38/customizingTheme"},next:{title:"Making components dark mode compatible",permalink:"/3.0.0-next.38/darkMode"}},s=[{value:"Loading fonts in Expo or React Native init project.",id:"loading-fonts-in-expo-or-react-native-init-project",children:[]},{value:"Extend NativeBase theme object.",id:"extend-nativebase-theme-object",children:[]},{value:"Using fonts",id:"using-fonts",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Follow 3 simple steps to add a custom font family."),Object(r.b)("h3",{id:"loading-fonts-in-expo-or-react-native-init-project"},"Loading fonts in Expo or React Native init project."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.expo.io/guides/using-custom-fonts/"}),"Refer this guide if you're using Expo")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/@aravindmnair/add-custom-fonts-to-react-native-0-60-easily-in-3-steps-fcd71459f4c9"}),"Refer this guide if you're using React Native init")),Object(r.b)("h3",{id:"extend-nativebase-theme-object"},"Extend NativeBase theme object."),Object(r.b)("p",null,"We extend the theme object and override ",Object(r.b)("inlineCode",{parentName:"p"},"fontConfig")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fonts")," properties which define the mappings."),Object(r.b)("p",null,"This mapping is needed to make sure fontWeight, fontStyle properties work in all platforms."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeBaseProvider, extendTheme } from 'native-base';\n\nconst theme = extendTheme({\n  fontConfig: {\n    Roboto: {\n      100: {\n        normal: 'Roboto-Light',\n        italic: 'Roboto-LightItalic',\n      },\n      200: {\n        normal: 'Roboto-Light',\n        italic: 'Roboto-LightItalic',\n      },\n      300: {\n        normal: 'Roboto-Light',\n        italic: 'Roboto-LightItalic',\n      },\n      400: {\n        normal: 'Roboto-Regular',\n        italic: 'Roboto-Italic',\n      },\n      500: {\n        normal: 'Roboto-Medium',\n      },\n      600: {\n        normal: 'Roboto-Medium',\n        italic: 'Roboto-MediumItalic',\n      },\n      // Add more variants\n      //   700: {\n      //     normal: 'Roboto-Bold',\n      //   },\n      //   800: {\n      //     normal: 'Roboto-Bold',\n      //     italic: 'Roboto-BoldItalic',\n      //   },\n      //   900: {\n      //     normal: 'Roboto-Bold',\n      //     italic: 'Roboto-BoldItalic',\n      //   },\n    },\n  },\n\n  // Make sure values below matches any of the keys in `fontConfig`\n  fonts: {\n    heading: 'Roboto',\n    body: 'Roboto',\n    mono: 'Roboto',\n  },\n});\n\nexport default function App() {\n  return (\n    <NativeBaseProvider theme={theme}>\n      <App />\n    </NativeBaseProvider>\n  );\n}\n")),Object(r.b)("h3",{id:"using-fonts"},"Using fonts"),Object(r.b)("p",null,"Fonts can be used as shown below. The below ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," will be rendered in ",Object(r.b)("inlineCode",{parentName:"p"},"Roboto-MediumItalic")," font family."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Text fontFamily="body" fontWeight={600} fontStyle="italic" />\n')))}p.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);