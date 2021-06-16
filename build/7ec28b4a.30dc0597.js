(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{436:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),p=(a(0),a(742)),c={id:"appBar",title:"AppBar"},o={unversionedId:"appBar",id:"version-3.0.0-next.38/appBar",isDocsHomePage:!1,title:"AppBar",description:"AppBar component can be used to create app headers.",source:"@site/versioned_docs/version-3.0.0-next.38/appBar.md",slug:"/appBar",permalink:"/3.0.0-next.38/appBar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/appBar.md",version:"3.0.0-next.38"},i=[{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]}]},{value:"Props",id:"props",children:[{value:"AppBar Props",id:"appbar-props",children:[]},{value:"AppBar.Left",id:"appbarleft",children:[]},{value:"AppBar.Content",id:"appbarcontent",children:[]},{value:"AppBar.Right",id:"appbarright",children:[]}]}],b={toc:i};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"AppBar")," component can be used to create app headers."),Object(p.b)("h2",{id:"examples"},"Examples"),Object(p.b)("h3",{id:"usage"},"Usage"),Object(p.b)("div",{className:"snack-player","data-snack-name":"AppBar Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20AppBar%2C%0A%20%20IconButton%2C%0A%20%20Icon%2C%0A%20%20Text%2C%0A%20%20VStack%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AppBarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAppBar%3E%0A%20%20%20%20%20%20%3CAppBar.Left%3E%0A%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D%22Navigate%20back%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-left%22%20type%3D%22MaterialCommunityIcons%22%20size%3D%7B8%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAppBar.Left%3E%0A%0A%20%20%20%20%20%20%3CAppBar.Content%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20space%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontWeight%3D%22bold%22%20fontSize%3D%22lg%22%20isTruncated%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Title%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20isTruncated%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Subtitle%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FAppBar.Content%3E%0A%0A%20%20%20%20%20%20%3CAppBar.Right%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D%22Search%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22search%22%20size%3D%7B6%7D%20color%3D%22white%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D%22More%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%22more-vert%22%20size%3D%7B6%7D%20color%3D%22white%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAppBar.Right%3E%0A%20%20%20%20%3C%2FAppBar%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAppBarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(p.b)("h2",{id:"props"},"Props"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"AppBar")," implements ",Object(p.b)("strong",{parentName:"p"},Object(p.b)("a",Object(n.a)({parentName:"strong"},{href:"/3.0.0-next.38/box"}),"Box")),", so all the Box Props can be passed to it."),Object(p.b)("h3",{id:"appbar-props"},"AppBar Props"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"statusBarHeight"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defaults to SafeAreaView on iOS and Statusbar.height on android."),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"space"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Space between AppBar.Left, AppBar.Content and AppBar.Right components."),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")))),Object(p.b)("h3",{id:"appbarleft"},"AppBar.Left"),Object(p.b)("p",null,"Implements ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/hStack"}),Object(p.b)("inlineCode",{parentName:"a"},"HStack"))," , all the props of HStack can be passed."),Object(p.b)("h3",{id:"appbarcontent"},"AppBar.Content"),Object(p.b)("p",null,"Implements ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/hStack"}),Object(p.b)("inlineCode",{parentName:"a"},"HStack"))," , all the props of HStack can be passed."),Object(p.b)("h3",{id:"appbarright"},"AppBar.Right"),Object(p.b)("p",null,"Implements ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.38/hStack"}),Object(p.b)("inlineCode",{parentName:"a"},"HStack"))," , all the props of HStack can be passed."))}l.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||p;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,c=new Array(p);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<p;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);