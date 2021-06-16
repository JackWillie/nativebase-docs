(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(742)),i={id:"stagger",title:"Stagger"},s={unversionedId:"stagger",id:"version-3.0.0-next.38/stagger",isDocsHomePage:!1,title:"Stagger",description:"Stagger component provides a declarative API to add Staggered Transitions.",source:"@site/versioned_docs/version-3.0.0-next.38/stagger.md",slug:"/stagger",permalink:"/3.0.0-next.38/stagger",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/stagger.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Slide",permalink:"/3.0.0-next.38/slide"},next:{title:"FAB",permalink:"/3.0.0-next.38/FAB"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]},{value:"IStaggerStyleProps",id:"istaggerstyleprops",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stagger component provides a declarative API to add Staggered Transitions."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20useDisclose%2C%0A%20%20IconButton%2C%0A%20%20Stagger%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aimport%20%7B%20MaterialCommunityIcons%20%7D%20from%20%22%40expo%2Fvector-icons%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onToggle%20%7D%20%3D%20useDisclose()%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CBox%20alignItems%3D%22center%22%20minH%3D%7B220%7D%3E%0A%20%20%20%20%20%20%20%20%3CStagger%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BisOpen%7D%0A%20%20%20%20%20%20%20%20%20%20initial%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20scale%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20translateY%3A%2034%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20animate%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20translateY%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20scale%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22spring%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20mass%3A%200.8%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20stagger%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20offset%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20exit%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20translateY%3A%2034%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20scale%3A%200.5%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20stagger%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20offset%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CMaterialCommunityIcons%20size%3D%7B24%7D%20name%3D%22share%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CMaterialCommunityIcons%20size%3D%7B24%7D%20name%3D%22heart%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CMaterialCommunityIcons%20size%3D%7B24%7D%20name%3D%22library%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CMaterialCommunityIcons%20size%3D%7B24%7D%20name%3D%22lighthouse%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FStagger%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20rounded%3D%22full%22%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BonToggle%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%3CMaterialCommunityIcons%20size%3D%7B24%7D%20name%3D%22attachment%22%20%2F%3E%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Press%20me%0A%20%20%20%20%20%20%3C%2FIconButton%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        initial\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"presence-transition#isupportedtransitions"}),"ISupportedTransitions"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Initial styles before the transition starts\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        animate\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"stagger#istaggerstyleprops"}),"IStaggerStyleProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The styles to which each child should animate to while entering.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        exit\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"stagger#istaggerstyleprops"}),"IStaggerStyleProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The styles to which each child should animate to while exiting.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        visible\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Determines whether to start the animation\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),Object(o.b)("h2",{id:"istaggerstyleprops"},"IStaggerStyleProps"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"interface IStaggerStyleProps extends ISupportedTransition {\n  transition?: {\n    stagger?: {\n      /**\n       * Delay to add to each child\n       */\n      offset: number,\n      /**\n       * When true, delay is added from the last child\n       */\n      reverse?: boolean,\n    },\n\n    type?: 'timing' | 'spring',\n    easing?: (value: number) => number,\n    overshootClamping?: boolean,\n    restDisplacementThreshold?: number,\n    restSpeedThreshold?: number,\n    velocity?: number | { x: number, y: number },\n    bounciness?: number,\n    speed?: number,\n    tension?: number,\n    friction?: number,\n    stiffness?: number,\n    mass?: number,\n    damping?: number,\n    delay?: number,\n    duration?: number,\n    useNativeDriver?: boolean,\n  };\n}\n")))}p.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);