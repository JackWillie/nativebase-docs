(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1584:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},1585:function(e,t,n){"use strict";var o=n(0),r=n(1586);t.a=function(){const e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1586:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)(void 0);t.a=r},1587:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1585),i=n(1584),c=n(56),s=n.n(c);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:m,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[O,h]=Object(o.useState)(c),v=o.Children.toArray(e.children);if(null!=m){const e=d[m];null!=e&&e!==O&&p.some((t=>t.value===e))&&h(e)}const j=e=>{h(e),null!=m&&f(m,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(o.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},1588:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},727:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(7),a=(n(0),n(1583)),i=n(1587),c=n(1588),s={},l={unversionedId:"migration/Actionsheet",id:"version-3.0.0-next.25/migration/Actionsheet",isDocsHomePage:!1,title:"Actionsheet",description:"We have sliced Actionsheet into multiple smaller component which not only provides more control over the the code but also makes it more readable.",source:"@site/versioned_docs/version-3.0.0-next.25/migration/Actionsheet.md",slug:"/migration/Actionsheet",permalink:"/3.0.0-next.25/migration/Actionsheet",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.25/migration/Actionsheet.md",version:"3.0.0-next.25",sidebar:"version-3.0.0-next.25/componentsSidebar",previous:{title:"Accordion",permalink:"/3.0.0-next.25/migration/Accordion"},next:{title:"Badge",permalink:"/3.0.0-next.25/migration/Badge"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We have sliced Actionsheet into multiple smaller component which not only provides more control over the the code but also makes it more readable."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Checkbox components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"options")," (prop) \u2192 ",Object(a.b)("inlineCode",{parentName:"li"},"Actionsheet.Item")," (component)."),Object(a.b)("li",{parentName:"ul"},"Pros like ",Object(a.b)("strong",{parentName:"li"},"cancelButtonIndex"),", ",Object(a.b)("strong",{parentName:"li"},"cancelButtonIndex")," are ",Object(a.b)("em",{parentName:"li"},"no longer required")," as components like ",Object(a.b)("inlineCode",{parentName:"li"},"Actionsheet.Item")," can be customised as per need."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title")," (prop) \u2192 ",Object(a.b)("inlineCode",{parentName:"li"},"Actionsheet.Header")," (component)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"show(),")," ",Object(a.b)("strong",{parentName:"li"},"hide()")," \u2192 ",Object(a.b)("inlineCode",{parentName:"li"},"isOpen"),", If true, actionsheet will be open..")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(i.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport {\n  Container,\n  Header,\n  Button,\n  Content,\n  ActionSheet,\n  Text,\n} from 'native-base';\nvar BUTTONS = ['Option 1', 'Option 2', 'Option 3', 'Delete', 'Cancel'];\nvar DESTRUCTIVE_INDEX = 3;\nvar CANCEL_INDEX = 4;\nexport default class ActionSheetExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n  render() {\n    return (\n      <Container>\n        <Content padder>\n          <Button\n            onPress={() =>\n              ActionSheet.show(\n                {\n                  options: BUTTONS,\n                  cancelButtonIndex: CANCEL_INDEX,\n                  destructiveButtonIndex: DESTRUCTIVE_INDEX,\n                  title: 'Header',\n                },\n                (buttonIndex) => {\n                  this.setState({ clicked: BUTTONS[buttonIndex] });\n                }\n              )\n            }\n          >\n            <Text>Actionsheet</Text>\n          </Button>\n        </Content>\n      </Container>\n    );\n  }\n}\n"))),Object(a.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Button, Actionsheet, useDisclose } from 'native-base';\n\nexport default function () {\n  const { isOpen, onOpen, onClose } = useDisclose();\n  return (\n    <>\n      <Button onPress={onOpen}>Actionsheet</Button>\n\n      <Actionsheet isOpen={isOpen} onClose={onClose}>\n        <Actionsheet.Content>\n          <Actionsheet.Header>Header</Actionsheet.Header>\n          <Actionsheet.Item>Option 1</Actionsheet.Item>\n          <Actionsheet.Item>Option 2</Actionsheet.Item>\n          <Actionsheet.Item>Option 3</Actionsheet.Item>\n          <Actionsheet.Item color='red.500'>Delete</Actionsheet.Item>\n        </Actionsheet.Content>\n        <Actionsheet.Footer>\n          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>\n        </Actionsheet.Footer>\n      </Actionsheet>\n    </>\n  );\n}\n")))))}m.isMDXComponent=!0}}]);