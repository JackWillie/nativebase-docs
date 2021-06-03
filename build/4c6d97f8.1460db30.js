(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return a?r.a.createElement(u,i(i({ref:t},p),{},{components:a})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},528:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(1583)),c={id:"typeAhead",title:"TypeAhead(Autocomplete)"},i={unversionedId:"typeAhead",id:"version-3.0.0-next.30/typeAhead",isDocsHomePage:!1,title:"TypeAhead(Autocomplete)",description:"A Typeahead component and hook that helps you in implementing Autocomplete Inputs.",source:"@site/versioned_docs/version-3.0.0-next.30/typeAhead.md",slug:"/typeAhead",permalink:"/3.0.0-next.30/typeAhead",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/typeAhead.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"TextArea",permalink:"/3.0.0-next.30/textArea"},next:{title:"Badge",permalink:"/3.0.0-next.30/badge"}},l=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Typeahead Component",id:"typeahead-component",children:[]},{value:"Typeahead Component with RenderItem",id:"typeahead-component-with-renderitem",children:[]},{value:"useTypeahead Hook",id:"usetypeahead-hook",children:[]}]},{value:"Props",id:"props",children:[{value:"Typeahead Component",id:"typeahead-component-1",children:[]},{value:"useTypeahead Hook",id:"usetypeahead-hook-1",children:[]}]}],p={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"Typeahead")," component and hook that helps you in implementing Autocomplete Inputs."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useTypeahead, Typeahead } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"typeahead-component"},"Typeahead Component"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Typeahead Typeahead Component","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Typeahead%2C%20Box%2C%20Text%2C%20Icon%2C%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Alet%20countries%20%3D%20%5B%0A%20%20'Afghanistan'%2C%0A%20%20'Australia'%2C%0A%20%20'India'%2C%0A%20%20'USA'%2C%0A%20%20'Germany'%2C%0A%20%20'France'%2C%0A%20%20'Iceland'%2C%0A%20%20'Russia'%2C%0A%20%20'Japan'%2C%0A%20%20'China'%2C%0A%20%20'Denmark'%2C%0A%20%20'Norway'%2C%0A%5D%3B%0A%0Aexport%20function%20TypeaheadUsingComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3ETypeahead%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CTypeahead%0A%20%20%20%20%20%20%20%20mt%3D%7B4%7D%0A%20%20%20%20%20%20%20%20size%3D%222xl%22%0A%20%20%20%20%20%20%20%20numberOfItems%3D%7B6%7D%0A%20%20%20%20%20%20%20%20options%3D%7Bcountries%7D%0A%20%20%20%20%20%20%20%20toggleIcon%3D%7B(%7B%20isOpen%20%7D%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20isOpen%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B12%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B12%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTypeaheadUsingComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"typeahead-component-with-renderitem"},"Typeahead Component with RenderItem"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Typeahead Typeahead Component with RenderItem","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Typeahead%2C%20Box%2C%20Text%2C%20Icon%2C%20Heading%2C%20useColorMode%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Alet%20countries%20%3D%20%5B%0A%20%20%7B%20name%3A%20'Afghanistan'%2C%20abbr%3A%20'AFG'%20%7D%2C%0A%20%20%7B%20name%3A%20'Australia'%2C%20abbr%3A%20'AUS'%20%7D%2C%0A%20%20%7B%20name%3A%20'India'%2C%20abbr%3A%20'IND'%20%7D%2C%0A%20%20%7B%20name%3A%20'USA'%2C%20abbr%3A%20'USA'%20%7D%2C%0A%20%20%7B%20name%3A%20'Germany'%2C%20abbr%3A%20'GER'%20%7D%2C%0A%20%20%7B%20name%3A%20'France'%2C%20abbr%3A%20'FRA'%20%7D%2C%0A%20%20%7B%20name%3A%20'Iceland'%2C%20abbr%3A%20'ICL'%20%7D%2C%0A%20%20%7B%20name%3A%20'Russia'%2C%20abbr%3A%20'RUS'%20%7D%2C%0A%20%20%7B%20name%3A%20'Japan'%2C%20abbr%3A%20'JAP'%20%7D%2C%0A%20%20%7B%20name%3A%20'China'%2C%20abbr%3A%20'CHI'%20%7D%2C%0A%20%20%7B%20name%3A%20'Denmark'%2C%20abbr%3A%20'DEN'%20%7D%2C%0A%20%20%7B%20name%3A%20'Norway'%2C%20abbr%3A%20'NOR'%20%7D%2C%0A%5D%3B%0A%0Aexport%20function%20TypeaheadUsingComponentWithRenderItem()%20%7B%0A%20%20const%20%7B%20colorMode%20%7D%20%3D%20useColorMode()%3B%0A%20%20return%20(%0A%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%3CHeading%3ETypeahead%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CTypeahead%0A%20%20%20%20%20%20%20%20mt%3D%7B4%7D%0A%20%20%20%20%20%20%20%20size%3D%222xl%22%0A%20%20%20%20%20%20%20%20numberOfItems%3D%7B6%7D%0A%20%20%20%20%20%20%20%20options%3D%7Bcountries%7D%0A%20%20%20%20%20%20%20%20getOptionLabel%3D%7B(country%3A%20any)%20%3D%3E%20country.name%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7B(item%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20bg%3D%7BcolorMode%20%3D%3D%3D%20'light'%20%3F%20'red.100'%20%3A%20'gray.600'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20p%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20toggleIcon%3D%7B(%7B%20isOpen%20%7D%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20isOpen%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B12%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B12%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTypeaheadUsingComponentWithRenderItem%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"usetypeahead-hook"},"useTypeahead Hook"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Typeahead TypeaheadHooks","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20useTypeahead%2C%0A%20%20Box%2C%0A%20%20Input%2C%0A%20%20Button%2C%0A%20%20Text%2C%0A%20%20Icon%2C%0A%20%20IconButton%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Alet%20countries%20%3D%20%5B%0A%20%20'Afghanistan'%2C%0A%20%20'Australia'%2C%0A%20%20'India'%2C%0A%20%20'USA'%2C%0A%20%20'Germany'%2C%0A%20%20'France'%2C%0A%20%20'Iceland'%2C%0A%20%20'Russia'%2C%0A%20%20'Japan'%2C%0A%20%20'China'%2C%0A%20%20'Denmark'%2C%0A%20%20'Norway'%2C%0A%5D%3B%0A%0Aexport%20function%20TypeaheadUsingHook()%20%7B%0A%20%20const%20%5BinputItems%2C%20setInputItems%5D%20%3D%20React.useState(countries)%3B%0A%0A%20%20const%20%7B%0A%20%20%20%20isOpen%2C%0A%20%20%20%20getInputProps%2C%0A%20%20%20%20getMenuItemProps%2C%0A%20%20%20%20getMenuProps%2C%0A%20%20%20%20getToggleButtonProps%2C%0A%20%20%7D%20%3D%20useTypeahead(%7B%0A%20%20%20%20items%3A%20inputItems%2C%0A%20%20%20%20itemToString%3A%20(item)%20%3D%3E%20item.toString()%2C%0A%20%20%20%20onInputValueChange%3A%20(%7B%20inputValue%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20setInputItems(%0A%20%20%20%20%20%20%20%20countries.filter((item)%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20item.toLowerCase().startsWith(inputValue.toLowerCase())%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%22100%25%22%20flexDirection%3D%22row%22%3E%0A%20%20%20%20%20%20%3CBox%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CInput%20size%3D%222xl%22%20%7B...getInputProps()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CBox%3E%0A%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22gray.300%22%0A%20%20%20%20%20%20%20%20%20%20%7B...getToggleButtonProps()%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20isOpen%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-up%22%20type%3D%22MaterialIcons%22%20size%3D%7B10%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22arrow-drop-down%22%20type%3D%22MaterialIcons%22%20size%3D%7B10%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20%20%20top%3D%7B55%7D%0A%20%20%20%20%20%20%20%20width%3D%22100%25%22%0A%20%20%20%20%20%20%20%20height%3D%22200%22%0A%20%20%20%20%20%20%20%20%7B...getMenuProps()%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%20%20%7BisOpen%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20inputItems.map((item%2C%20index)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7Bitem%7D%24%7Bindex%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B...getMenuItemProps(item%2C%20index)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTypeaheadUsingHook%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"typeahead-component-1"},"Typeahead Component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of items that you need to search for autocomplete."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"getOptionLabel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to determine the string value for a given option. It's used to fill the input."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renderItem"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"expects a callback function that returns the JSX Element that you want to be rendered in dropdown. It requires a variable which is an Item from data array provided."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toggleIcon"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function to control the design of Toggle button. It exposes isOpen which is a boolean that tells if the dropdown is open or not."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropdownHeight"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"height of the Typeahead dropdown"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200px")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numberOfItems"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total number of items to be shown at a time in the dropdown."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"inputValue"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To set Typeahead's value. Mainly used in controlled input situations."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSelectedItemChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback function that gets called when selected Item changes in Typeahead."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(o.b)("h3",{id:"usetypeahead-hook-1"},"useTypeahead Hook"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isOpen"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tells if the dropdown is open or not."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"items"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of items that you need to search for autocomplete."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"itemToString"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"selectedItem"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onInputValueChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSelectedItemChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}b.isMDXComponent=!0}}]);