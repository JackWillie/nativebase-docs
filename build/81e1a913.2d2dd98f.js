(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(742)),c=(n(748),n(749),{}),i={unversionedId:"migration/Searchbar",id:"version-3.0.0-next.40/migration/Searchbar",isDocsHomePage:!1,title:"Searchbar",description:"With NativeBase v3 we have removed Searchbar components because as it's very simple to create using Input components. To view some examples for seachbars, checkout recipes.",source:"@site/versioned_docs/version-3.0.0-next.40/migration/Searchbar.md",slug:"/migration/Searchbar",permalink:"/migration/Searchbar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/migration/Searchbar.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Radio Button",permalink:"/migration/Radio Button"},next:{title:"Spinner",permalink:"/migration/Spinner"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With NativeBase v3 we have removed ",Object(o.b)("strong",{parentName:"p"},"Searchbar")," components because as it's very simple to create using ",Object(o.b)("inlineCode",{parentName:"p"},"Input")," components. To view some examples for seachbars, checkout recipes."))}l.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},743:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},744:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},746:function(e,t,n){"use strict";var r=n(0),a=n(747);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},747:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},748:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(746),c=n(744),i=n(56),s=n.n(i);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:f,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(o.a)(),[v,y]=Object(r.useState)(i),h=r.Children.toArray(e.children);if(null!=f){const e=b[f];null!=e&&e!==v&&p.some(t=>t.value===e)&&y(e)}const O=e=>{y(e),null!=f&&d(f,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t))),t?Object(r.cloneElement)(h.filter(e=>e.props.value===v)[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v}))))}},749:function(e,t,n){"use strict";var r=n(743),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);