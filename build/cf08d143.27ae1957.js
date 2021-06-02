(window.webpackJsonp=window.webpackJsonp||[]).push([[1232],{1303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(1583)),i={id:"use-popOver",title:"usePopover"},p={unversionedId:"use-popOver",id:"version-3.0.0-next.37/use-popOver",isDocsHomePage:!1,title:"usePopover",description:"usePopover is a custom hook which helps in mounting any children component in a popover at a position relative to the parent.",source:"@site/versioned_docs/version-3.0.0-next.37/usePopOver.md",slug:"/use-popOver",permalink:"/docs/use-popOver",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/usePopOver.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"useDisclosure",permalink:"/docs/use-disclosure"},next:{title:"useBreakpointValue",permalink:"/docs/use-breakPoint-value"}},c=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Configurations for setPopover",id:"configurations-for-setpopover",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"usePopover")," is a custom hook which helps in mounting any children component in a popover at a position relative to the parent."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { usePopover } from 'native-base';\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"usePopover Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20usePopover%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20UsePopoverExample()%20%7B%0A%20%20const%20%7B%20setPopover%20%7D%20%3D%20usePopover()%3B%0A%20%20let%20buttonRef%20%3D%20React.useRef(null)%3B%0A%20%20return%20(%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20position%3D%22absolute%22%0A%20%20%20%20%20%20colorScheme%3D%22teal%22%0A%20%20%20%20%20%20height%3D%7B10%7D%0A%20%20%20%20%20%20width%3D%7B150%7D%0A%20%20%20%20%20%20ref%3D%7BbuttonRef%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20setPopover(%3CBox%20height%3D%7B200%7D%20width%3D%7B200%7D%20bg%3D%22lime.300%22%20%2F%3E%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20triggerRef%3A%20buttonRef%2C%0A%20%20%20%20%20%20%20%20%20%20animationDuration%3A%20500%2C%0A%20%20%20%20%20%20%20%20%20%20placeOverTriggerElement%3A%20false%2C%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Show%20Overlay%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUsePopoverExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"usePopover")," hook returns an object with the following fields:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"closePopover")," : ( function ) Callback function to close the popover."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"setPopover"),": ( ",Object(a.b)("strong",{parentName:"p"},"function")," ) Callback function to set the children of the popover."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"parentComponentConfig"),": ( Object ) Object that contains the configurations passed from parent prop to be available to children in popover"),Object(a.b)("h2",{id:"configurations-for-setpopover"},"Configurations for setPopover"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"triggerRef"),": ref of the parent element of the popover"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"animationDuration"),": Time in ms for the popover to open and close"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"placeOverTriggerElement"),": (boolean) Whether to place the popover element over parent of not"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onClose"),": (function) Callback for closing the popover"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"parentComponentConfig"),": (object) The config which can be passed from parent to children"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isKeyboardDismissable"),": (boolean) Specifies whether popover can be closed using Escape key. Defaults to true"))}l.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,v=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(v,p(p({ref:t},s),{},{components:n})):r.a.createElement(v,p({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);