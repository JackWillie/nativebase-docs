(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1096:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),o=t(7),r=(t(0),t(1583)),i={id:"safe-area-view-props",title:"SafeAreaView Props"},s={unversionedId:"safe-area-view-props",id:"version-3.0.0-next.37/safe-area-view-props",isDocsHomePage:!1,title:"SafeAreaView Props",description:"To make your components respect the SafeAreaView of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props. These props accept either a boolean or a number. If boolean is passed then component takes flexible inset and adjusts its children according to the the device. If a number is passed then it provides a fixed inset in the chosen direction.",source:"@site/versioned_docs/version-3.0.0-next.37/safe-area-view-props.md",slug:"/safe-area-view-props",permalink:"/safe-area-view-props",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/safe-area-view-props.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Responsive",permalink:"/responsive-style"},next:{title:"Accessibility",permalink:"/accessibility"}},p=[{value:"Examples",id:"examples",children:[{value:"Flexible SafeArea",id:"flexible-safearea",children:[]},{value:"Fixed SafeArea",id:"fixed-safearea",children:[]},{value:"Using Hook",id:"using-hook",children:[]}]}],c={toc:p};function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To make your components respect the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/safeareaview"}),"SafeAreaView")," of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props. These props accept either a boolean or a number. If boolean is passed then component takes flexible inset and adjusts its children according to the the device. If a number is passed then it provides a fixed inset in the chosen direction."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeArea"),": Apply safe padding to all edges."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaX"),": Apply safe padding to x direction."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaY"),": Apply safe padding to y direction."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaTop"),": Apply safe padding to top."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaBottom"),": Apply safe padding to bottom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaLeft"),": Apply safe padding to left."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"safeAreaRight"),": Apply safe padding to right.")),Object(r.b)("p",null,"Internally, NativeBase uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/safe-area-context/#hooks"}),"useSafeAreaInsets")," hook of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),"react-native-safe-area-context"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"SafeAreaView props can only be applied on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/box"}),"Box")," as of now. To make you App SafeArea safe, just wrap your app with a Box and pass safeArea props to it."))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"flexible-safearea"},"Flexible SafeArea"),Object(r.b)("div",{className:"snack-player","data-snack-name":"SafeAreaView Boolean","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Box%2C%20Text%20%7D%20from%20'native-base'%3B%0Afunction%20MyComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%2F%2F%20This%20would%20look%20different%20on%20devices%20with%20different%20insets%0A%20%20%20%20%3CBox%20bg%3D'teal.400'%20rounded%3D'xl'%20size%3D%7B24%7D%20safeArea%3E%0A%20%20%20%20%20%20%3CText%3ENativeBase%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMyComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"fixed-safearea"},"Fixed SafeArea"),Object(r.b)("div",{className:"snack-player","data-snack-name":"SafeAreaView Boolean","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Box%2C%20Text%20%7D%20from%20'native-base'%3B%0Afunction%20MyComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%2F%2F%20This%20would%20look%20same%20on%20all%20devices%0A%20%20%20%20%3CBox%20bg%3D'teal.400'%20rounded%3D'xl'%20size%3D%7B24%7D%20safeAreaTop%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CText%3ENativeBase%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMyComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"using-hook"},"Using Hook"),Object(r.b)("p",null,"If you want to add the SafeAreaView props to other components, you can use the hook. Since, ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," props add relevant padding to the components, you will need to pass the padding manually that you are applying to the component for it to return the SafeArea adjusted padding."),Object(r.b)("div",{className:"snack-player","data-snack-name":"SafeAreaView Boolean","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20NativeBaseProvider%2C%20Box%2C%20Text%2C%20useSafeArea%20%7D%20from%20'native-base'%3B%0Afunction%20MyComponent()%20%7B%0A%20%20const%20safeAreaProps%20%3D%20useSafeArea(%7B%20safeAreaTop%3A%20true%2C%20pt%3A%202%20%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%2F%2F%20This%20would%20look%20same%20on%20all%20devices%0A%20%20%20%20%3CBox%20bg%3D'teal.400'%20rounded%3D'xl'%20size%3D%7B24%7D%20%7B...safeAreaProps%7D%3E%0A%20%20%20%20%20%20%3CText%3ENativeBase%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMyComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}d.isMDXComponent=!0},1583:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var a=o.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return o.a.createElement(c.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},b=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,m=l["".concat(i,".").concat(b)]||l[b]||f[b]||r;return t?o.a.createElement(m,s(s({ref:a},c),{},{components:t})):o.a.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=b;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);