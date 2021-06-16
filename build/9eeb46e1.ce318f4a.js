(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{502:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(742)),i=n(748),c=n(749),s={},l={unversionedId:"migration/Layout",id:"version-3.0.0-next.40/migration/Layout",isDocsHomePage:!1,title:"Layout",description:"Grid",source:"@site/versioned_docs/version-3.0.0-next.40/migration/Layout.md",slug:"/migration/Layout",permalink:"/migration/Layout",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/migration/Layout.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Icon",permalink:"/migration/Icon"},next:{title:"Picker",permalink:"/migration/Picker"}},u=[{value:"Grid",id:"grid",children:[]},{value:"List",id:"list",children:[{value:"Code Comparison",id:"code-comparison",children:[]}]}],m={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"grid"},"Grid"),Object(o.b)("p",null,"EasyGrid can be used NativeBase v3 and with v3 we also provide SimpleGrid ","[form more details checkout docs]"," as well."),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,"With NativeBase v3 we have removed List components because as it's very simple to create various list layout using primitive components."),Object(o.b)("h3",{id:"code-comparison"},"Code Comparison"),Object(o.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<List>\n  <ListItem>\n    <Left>\n      <Text>Simon Mignolet</Text>\n    </Left>\n    <Right>\n      <Icon name='arrow-forward' />\n    </Right>\n  </ListItem>\n  <ListItem>\n    <Left>\n      <Text>Nathaniel Clyne</Text>\n    </Left>\n    <Right>\n      <Icon name='arrow-forward' />\n    </Right>\n  </ListItem>\n  <ListItem>\n    <Left>\n      <Text>Dejan Lovren</Text>\n    </Left>\n    <Right>\n      <Icon name='arrow-forward' />\n    </Right>\n  </ListItem>\n</List>\n"))),Object(o.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<VStack space={3} divider={<Divider />} w='90%'>\n  <HStack justifyContent='space-between'>\n    <Text>Simon Mignolet</Text>\n    <Icon name='arrow-forward' />\n  </HStack>\n  <HStack justifyContent='space-between'>\n    <Text>Nathaniel Clyne</Text>\n    <Icon name='arrow-forward' />\n  </HStack>\n  <HStack justifyContent='space-between'>\n    <Text>Dejan Lovren</Text>\n    <Icon name='arrow-forward' />\n  </HStack>\n</VStack>\n")))))}p.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},743:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},744:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},746:function(e,t,n){"use strict";var r=n(0),a=n(747);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},747:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},748:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(746),i=n(744),c=n(56),s=n.n(c);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:m,groupId:p,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(o.a)(),[v,y]=Object(r.useState)(c),O=r.Children.toArray(e.children);if(null!=p){const e=f[p];null!=e&&e!==v&&m.some(t=>t.value===e)&&y(e)}const g=e=>{y(e),null!=p&&b(p,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},m.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t))),t?Object(r.cloneElement)(O.filter(e=>e.props.value===v)[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v}))))}},749:function(e,t,n){"use strict";var r=n(743),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);