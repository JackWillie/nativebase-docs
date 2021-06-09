(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(7),o=(n(0),n(725)),i=n(739),c={id:"default-theme",title:"Default Theme"},l={unversionedId:"default-theme",id:"version-3.0.0-next.36/default-theme",isDocsHomePage:!1,title:"Default Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more.",source:"@site/versioned_docs/version-3.0.0-next.36/default-theme.md",slug:"/default-theme",permalink:"/3.0.0-next.36/default-theme",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/default-theme.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Accessibility",permalink:"/3.0.0-next.36/accessibility"},next:{title:"Customising Theme",permalink:"/3.0.0-next.36/customizingTheme"}},s=[{value:"Colors",id:"colors",children:[]},{value:"<strong>Typography</strong>",id:"typography",children:[]},{value:"<strong>Size</strong>",id:"size",children:[]},{value:"Shadows",id:"shadows",children:[]}],d={toc:s};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more."),Object(o.b)("p",null,"Theming in NativeBase is based on the\xa0",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://system-ui.com/theme/"}),"Styled System Theme Specification"))),Object(o.b)("h2",{id:"colors"},"Colors"),Object(o.b)("p",null,"You can add a\xa0",Object(o.b)("inlineCode",{parentName:"p"},"theme.colors"),"\xa0object to provide colors for your project. By default these colors can be referenced by the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"color"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"borderColor"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor"),", etc.. props."),Object(o.b)("p",null,"We recommend adding a palette that ranges from\xa0",Object(o.b)("inlineCode",{parentName:"p"},"50"),"\xa0to\xa0",Object(o.b)("inlineCode",{parentName:"p"},"900"),". Tools like\xa0",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://smart-swatch.netlify.app/"}),"Smart Swatch")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://palx.jxnblk.com/"}),"Palx")),"\xa0are available to generate these palettes."),Object(o.b)(i.b,{mdxType:"ColorsBlock"}),Object(o.b)("h2",{id:"typography"},Object(o.b)("strong",{parentName:"h2"},"Typography")),Object(o.b)("p",null,"To manage Typography options, the theme object supports the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fonts"),"\xa0(font families)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fontSizes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fontWeights")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lineHeights")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"letterSpacings"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  letterSpacings: {\n    tighter: '-0.08px',\n    tight: '-0.4px',\n    normal: '0',\n    wide: '0.4px',\n    wider: '0.8px',\n    widest: '1.6px',\n  },\n  lineHeights: {\n    none: 1,\n    shorter: 1.25,\n    short: 1.375,\n    base: 1.5,\n    tall: 1.625,\n    taller: '2',\n    3: '12px',\n    4: '16px',\n    5: '20px',\n    6: '24px',\n    7: '28px',\n    8: '32px',\n    9: '36px',\n    10: '40px',\n  },\n  fontWeights: {\n    hairline: 100,\n    thin: 200,\n    light: 300,\n    normal: 400,\n    medium: 500,\n    semibold: 600,\n    bold: 700,\n    extrabold: 800,\n    black: 900,\n  },\n  fonts: {\n    heading: `Courier`,\n    body: `Courier`,\n    mono: `monospace`,\n  },\n  fontSizes: {\n    xs: 12,\n    sm: 14,\n    md: 16,\n    lg: 18,\n    xl: 20,\n    '2xl': 24,\n    '3xl': 30,\n    '4xl': 36,\n    '5xl': 48,\n    '6xl': 64,\n  },\n};\n")),Object(o.b)(i.c,{mdxType:"FontBlocks"}),Object(o.b)("h2",{id:"size"},Object(o.b)("strong",{parentName:"h2"},"Size")),Object(o.b)("p",null,"The\xa0",Object(o.b)("inlineCode",{parentName:"p"},"size"),"\xa0key allows you to customize the global spacing and sizing scale for your project. By default these spacing value can be referenced by the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"padding"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"margin"),", and\xa0",Object(o.b)("inlineCode",{parentName:"p"},"top"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"left"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"right"),",\xa0",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),"\xa0props."),Object(o.b)(i.f,{mdxType:"SpaceBlocks"}),Object(o.b)("h2",{id:"shadows"},"Shadows"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"shadow")," key allows you to customize the global box shadow for your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  0: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.18,\n    shadowRadius: 1.0,\n    elevation: 1,\n  },\n  1: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.2,\n    shadowRadius: 1.41,\n    elevation: 2,\n  },\n  2: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.22,\n    shadowRadius: 2.22,\n    elevation: 3,\n  },\n  3: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.23,\n    shadowRadius: 2.62,\n    elevation: 4,\n  },\n  4: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.25,\n    shadowRadius: 3.84,\n    elevation: 5,\n  },\n  5: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.27,\n    shadowRadius: 4.65,\n    elevation: 6,\n  },\n  6: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.29,\n    shadowRadius: 4.65,\n    elevation: 7,\n  },\n  7: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.3,\n    shadowRadius: 4.65,\n    elevation: 8,\n  },\n  8: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.32,\n    shadowRadius: 5.46,\n    elevation: 9,\n  },\n  9: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 5,\n    },\n    shadowOpacity: 0.34,\n    shadowRadius: 6.27,\n    elevation: 10,\n  },\n};\n")),Object(o.b)("p",null,"Still confused? You can always explore ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GeekyAnts/nativebase-v3/tree/development/src/theme/base"}),"here"),"."))}f.isMDXComponent=!0},725:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(n),b=a,m=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},731:function(e,t,n){"use strict";var a=n(0),r=n(737);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},732:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},733:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),i=n(732),c=n(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(735),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:p,activeClassName:b,isActive:m,"data-noBrokenLinkCheck":u,autoAddBaseUrl:h=!0}=e,v=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(s.b)(),g=Object(a.useContext)(l),O=f||p,w=Object(i.a)(O),x=null==O?void 0:O.replace("pathname://",""),j=void 0!==x?(N=x,h&&(e=>e.startsWith("/"))(N)?y(N):N):void 0;var N;const E=Object(a.useRef)(!1),k=n?o.e:o.c,C=c.a.canUseIntersectionObserver;let T;Object(a.useEffect)((()=>(!C&&w&&window.docusaurus.prefetch(j),()=>{C&&T&&T.disconnect()})),[j,C,w]);const S=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,B=!j||!w||S;return j&&w&&!S&&!u&&g.collectLink(j),B?r.a.createElement("a",Object.assign({href:j},O&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(k,Object.assign({},v,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(j),E.current=!0)},innerRef:e=>{var t,n;C&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(j)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:j||""},n&&{isActive:m,activeClassName:b}))}},735:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(22),r=n(732);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},737:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},739:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return g}));var a=n(0),r=n.n(a);var o=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map(((n,a)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${n}-${a}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[n],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${n.charAt(0).toUpperCase()+n.slice(1)}`),r.a.createElement("div",null,t[n]))))))));const i={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var c=({})=>r.a.createElement("div",null,Object.keys(i).map(((e,t)=>r.a.createElement(o,{variants:i[e],name:e,key:`space-block-${e}-${t}`}))));var l=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const s={xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":64};var d=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(s).map(((e,t)=>r.a.createElement(l,{name:e,value:s[e],key:`space-component-${e}-${t}`}))));var f=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const p={1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var b=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(p).map(((e,t)=>r.a.createElement(f,{name:e,value:p[e],key:`space-component-${e}-${t}`})))));var m=()=>r.a.createElement("div",{className:"label android"},"Android");function u(){return r.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},r.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},r.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),r.a.createElement("div",{className:"kichen-sink-iframe-safe-aria"}),r.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var h=n(733);function v(e){var t=e.title,n=e.description,a=e.className,o=void 0===a?"":a,i=e.url;return r.a.createElement(h.a,{to:i,className:"no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 transform transition-transform\thover:scale-105 "+o},r.a.createElement("div",{className:"capitalize font-bold text-md text-white mb-2"},t),r.a.createElement("p",{className:"text-gray-100 text-sm leading-5"},n))}var y=n(731);function g(){var e=Object(y.a)().isDarkTheme,t=e?"":"text-white",n=e?"border-gray-100":"border-gray-200",a=e?"bg-gray-600":"bg-gray-500";return r.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+n},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"w-5 h-5 bg-indigo-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 bg-indigo-500 shadow-xl rounded-md",style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v3"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+a,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v2"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+a,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v1"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))))}}}]);