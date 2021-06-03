(window.webpackJsonp=window.webpackJsonp||[]).push([[1476],{1547:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(1714)),s={id:"presence-transition",title:"PresenceTransition"},o={unversionedId:"presence-transition",id:"presence-transition",isDocsHomePage:!1,title:"PresenceTransition",description:"PresenceTransition provides a declarative API to add entry and exit transitions.",source:"@site/docs/presence-transition.md",slug:"/presence-transition",permalink:"/next/presence-transition",editUrl:"https://github.com/nativebase/website/tree/main/docs/presence-transition.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Image",permalink:"/next/image"},next:{title:"Slide",permalink:"/next/slide"}},c=[{value:"Fade",id:"fade",children:[]},{value:"ScaleFade",id:"scalefade",children:[]},{value:"Props",id:"props",children:[{value:"ISupportedTransitions",id:"isupportedtransitions",children:[]},{value:"ITransitionStyleProps",id:"itransitionstyleprops",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PresenceTransition provides a declarative API to add entry and exit transitions."),Object(i.b)("h3",{id:"fade"},"Fade"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Box%2C%0A%20%20PresenceTransition%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20%22hide%22%20%3A%20%22show%22%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CPresenceTransition%0A%20%20%20%20%20%20%20%20visible%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20initial%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20animate%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20opacity%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20transition%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%20250%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20%20%20p%3D%2240px%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20mt%3D%224%22%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22teal.500%22%0A%20%20%20%20%20%20%20%20%20%20rounded%3D%22md%22%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Fade%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FPresenceTransition%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"scalefade"},"ScaleFade"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20PresenceTransition%2C%0A%20%20Button%2C%0A%20%20Box%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisOpen%2C%20setIsOpen%5D%20%3D%20React.useState(false)%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setIsOpen(!isOpen)%7D%3E%0A%20%20%20%20%20%20%20%20Click%20Me%20to%20%7BisOpen%20%3F%20%22hide%22%20%3A%20%22show%22%7D%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CPresenceTransition%0A%20%20%20%20%20%20%20%20visible%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20initial%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20scale%3A%200%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20animate%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20opacity%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20scale%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20transition%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%20250%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBox%20p%3D%2240px%22%20mt%3D%224%22%20bg%3D%22teal.500%22%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20ScaleFade%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FPresenceTransition%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.38,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        onTransitionComplete\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},'\n        (s: "entered" | "exited") => any\n      '),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Callback invoked when transition is completed\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        initial\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"presence-transition#isupportedtransitions"}),"ISupportedTransitions"),"\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Styles before the transition starts\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        animate\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"presence-transition#itransitionstyleprops"}),"ITransitionStyleProps"),"\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Entry animation styles\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        exit\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"presence-transition#itransitionstyleprops"}),"ITransitionStyleProps"),"\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Exit animation styles\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        visible\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Determines whether to start the animation\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        as\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Accepts a Component to be rendered as Wrapper. Defaults to `View`\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"PresenceTransition implements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(i.b)("code",{parentName:"a"},"View")))),Object(i.b)("h3",{id:"isupportedtransitions"},"ISupportedTransitions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"interface ISupportedTransitions {\n  opacity?: number;\n  translateY?: number;\n  translateX?: number;\n  scale?: number;\n  scaleX?: number;\n  scaleY?: number;\n  rotate?: string;\n}\n")),Object(i.b)("h3",{id:"itransitionstyleprops"},"ITransitionStyleProps"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"interface ITransitionStyleProps extends ISupportedTransitions {\n  transition?: {\n    type?: 'timing' | 'spring',\n    easing?: (value: number) => number,\n    overshootClamping?: boolean,\n    restDisplacementThreshold?: number,\n    restSpeedThreshold?: number,\n    velocity?: number | { x: number, y: number },\n    bounciness?: number,\n    speed?: number,\n    tension?: number,\n    friction?: number,\n    stiffness?: number,\n    mass?: number,\n    damping?: number,\n    delay?: number,\n    duration?: number,\n    useNativeDriver?: boolean,\n  };\n}\n")))}b.isMDXComponent=!0},1714:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.a.createElement(u,o(o({ref:t},p),{},{components:n})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);