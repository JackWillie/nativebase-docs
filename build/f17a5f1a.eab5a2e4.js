(window.webpackJsonp=window.webpackJsonp||[]).push([[1423],{1494:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(1583)),i=n(1587),c=n(1588),s={},u={unversionedId:"migration/Toast",id:"version-3.0.0-next.27/migration/Toast",isDocsHomePage:!1,title:"Toast",description:"In v3 Toast can be created using useToast hook",source:"@site/versioned_docs/version-3.0.0-next.27/migration/Toast.md",slug:"/migration/Toast",permalink:"/3.0.0-next.27/migration/Toast",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/migration/Toast.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Thumbnail",permalink:"/3.0.0-next.27/migration/Thumbnail"},next:{title:"Typography",permalink:"/3.0.0-next.27/migration/Typography"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In v3 Toast can be created using useToast hook"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Toast components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"buttonText, type")," is no longer supported.")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport { Container, Header, Content, Toast, Button, Text } from 'native-base';\n\nexport default class ToastExample extends Component {\n  render() {\n    return (\n      <Container>\n        <Header />\n        <Content padder>\n          <Button\n            onPress={() =>\n              Toast.show({\n                text: 'Wrong password!',\n              })\n            }\n          >\n            <Text>Toast</Text>\n          </Button>\n        </Content>\n      </Container>\n    );\n  }\n}\n"))),Object(a.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Button, useToast } from 'native-base';\n\nexport default function () {\n  const toast = useToast();\n\n  return (\n    <Button\n      onPress={() => {\n        toast({\n          title: 'Wrong password',\n        });\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n")))))}b.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1584:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},1585:function(e,t,n){"use strict";var r=n(0),o=n(1586);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1586:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},1587:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1585),i=n(1584),c=n(56),s=n.n(c);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[v,O]=Object(r.useState)(c),y=r.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},1588:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);