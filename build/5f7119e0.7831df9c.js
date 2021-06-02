(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?r.a.createElement(u,s(s({ref:t},b),{},{components:n})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},630:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(1583)),c={id:"button",title:"Button"},s={unversionedId:"button",id:"version-3.0.0-next.37/button",isDocsHomePage:!1,title:"Button",description:"The Button component is used to trigger an action or event.",source:"@site/versioned_docs/version-3.0.0-next.37/button.md",slug:"/button",permalink:"/docs/button",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/button.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"ZStack",permalink:"/docs/ZStack"},next:{title:"CheckBox",permalink:"/docs/checkBox"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Icons",id:"icons",children:[]},{value:"ButtonGroup",id:"buttongroup",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[{value:"Button",id:"button",children:[]},{value:"ButtonGroup",id:"buttongroup-1",children:[]}]},{value:"Accessibility",id:"accessibility",children:[]}],b={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component is used to trigger an action or event."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactnative.dev/docs/touchableopacity"}),Object(o.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))," form ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactnative.dev"}),Object(o.b)("inlineCode",{parentName:"a"},"React Native")))),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Button, ButtonGroup } from 'native-base';\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Button")," : The button component with support for custom icons, spinners, etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ButtonGroup")," : Used to group buttons whose actions are related, with an option to flush them together.")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CButton%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3EPRIMARY%3C%2FButton%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"sizes"},"Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20HStack%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%7B%5B'xs'%2C%20'sm'%2C%20'md'%2C%20'lg'%5D.map(size%20%3D%3E%20%3CBox%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20key%3D%7Bsize%7D%20size%3D%7Bsize%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20BUTTON%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E)%7D%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"variants"},"Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Divider%2C%20Heading%2C%20HStack%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%2F*%20Solid%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%20textAlign%3D%22left%22%3E%0A%20%20%20%20%20%20%20%20Solid%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3EPRIMARY%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22secondary%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20SECONDARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20isDisabled%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20DISABLED%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3EOutline%3C%2FHeading%3E%0A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%2F*%20Outline%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22outline%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20PRIMARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22outline%22%20colorScheme%3D%22secondary%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20SECONDARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22outline%22%20isDisabled%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20DISABLED%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3ELink%3C%2FHeading%3E%0A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%2F*%20Link%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22link%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20PRIMARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22link%22%20colorScheme%3D%22secondary%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20SECONDARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22link%22%20isDisabled%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20DISABLED%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3EGhost%3C%2FHeading%3E%0A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%2F*%20Ghost%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20PRIMARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20colorScheme%3D%22secondary%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20SECONDARY%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22ghost%22%20isDisabled%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20DISABLED%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%0A%20%20%20%20%20%20%3CHeading%20size%3D%22xs%22%3EUnstyled%3C%2FHeading%3E%0A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%2F*%20Unstyled%20*%2F%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20variant%3D%22unstyled%22%20onPress%3D%7B()%20%3D%3E%20console.log('hello%20world')%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Unstyled%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"loading"},"Loading"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%20isLoading%3EButton%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20isLoading%20isLoadingText%3D%22Submitting%22%3E%0A%20%20%20%20%20%20%20%20BUTTON%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20isLoading%20isLoadingText%3D%22Submitting%22%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20BUTTON%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"icons"},"Icons"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20VStack%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CButton%20startIcon%3D%7B%3CIcon%20name%3D%22email%22%20size%3D%7B5%7D%20%2F%3E%7D%3EEmail%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20variant%3D%22outline%22%20endIcon%3D%7B%3CIcon%20name%3D%22arrow-forward%22%20size%3D%7B4%7D%20%2F%3E%7D%3E%0A%20%20%20%20%20%20%20%20Call%20us%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"buttongroup"},"ButtonGroup"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CButton.Group%20variant%3D%22solid%22%20isAttached%20space%3D%7B6%7D%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22teal%22%3ESave%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20colorScheme%3D%22danger%22%3ECancel%3C%2FButton%3E%0A%20%20%20%20%3C%2FButton.Group%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(%7B%7D)%3B%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef%3F.current.setNativeProps(%7B%0A%20%20%20%20%20%20borderWidth%3A%2010%2C%0A%20%20%20%20%20%20opacity%3A%200.5%2C%0A%20%20%20%20%20%20borderRadius%3A%2010%0A%20%20%20%20%7D)%3B%0A%20%20%7D%2C%20%5BmyRef%5D)%3B%0A%20%20return%20%3CButton%20size%3D%22sm%22%20variant%3D%7B'solid'%7D%20ref%3D%7BmyRef%7D%3E%0A%20%20%20%20%20%20BUTTON%0A%20%20%20%20%3C%2FButton%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"button"},"Button"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'primary'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        ResponsiveValue<"solid" | "outline" | "ghost" | "link" | "unstyled">\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The variant of the button style to use.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'solid'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isLoading\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the button will show a spinner.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ResponsiveValue<...> & ResponsiveValue<...>\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The size of the button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        startIcon\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The start icon element to use in the button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        endIcon\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The end icon element to use in the button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isLoadingText\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The end icon element to use in the button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        spinner\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The spinner element to use when isLoading is set to true.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the button will be disabled.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Props to style the child text\nFor providing props to Text inside Box\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _stack\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"stack#props"}),"IStackProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Props to be passed to the HStack used inside of Button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Button implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"button#props"}),"Button"))),Object(o.b)("h3",{id:"buttongroup-1"},"ButtonGroup"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        direction\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "column" | "row"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The direction of the Stack Items.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        row\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "solid" | "ghost" | "outline" | "link" | "unstyled"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The variant of the button style to use.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'solid'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "xs" | "sm" | "md" | "lg"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The start icon element to use in the button.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        'primary'\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, the button will be disabled.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isAttached\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, button will be atttached together.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _hover\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"button#props"}),"IButtonProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on hovered state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _pressed\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"button#props"}),"IButtonProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on pressed state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _focus\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"button#props"}),"IButtonProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on focused state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"ButtonGroup implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"stack#props"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h2",{id:"accessibility"},"Accessibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Button has ",Object(o.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(o.b)("inlineCode",{parentName:"li"},"button")),Object(o.b)("li",{parentName:"ul"},"When Button has focus, Space or Enter activates it.")))}d.isMDXComponent=!0}}]);