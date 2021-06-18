(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(7),r=(a(0),a(741)),i=a(753),l={id:"default-theme",title:"Default Theme"},d={unversionedId:"default-theme",id:"version-3.0.0-next.40/default-theme",isDocsHomePage:!1,title:"Default Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more.",source:"@site/versioned_docs/version-3.0.0-next.40/default-theme.md",slug:"/default-theme",permalink:"/default-theme",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/default-theme.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Accessibility",permalink:"/accessibility"},next:{title:"Customising Theme",permalink:"/customizingTheme"}},s=[{value:"Colors",id:"colors",children:[]},{value:"<strong>Typography</strong>",id:"typography",children:[]},{value:"<strong>Size</strong>",id:"size",children:[]},{value:"Shadows",id:"shadows",children:[]}],c={toc:s};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more."),Object(r.b)("p",null,"Theming in NativeBase is based on the\xa0",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://system-ui.com/theme/"}),"Styled System Theme Specification"))),Object(r.b)("h2",{id:"colors"},"Colors"),Object(r.b)("p",null,"You can add a\xa0",Object(r.b)("inlineCode",{parentName:"p"},"theme.colors"),"\xa0object to provide colors for your project. By default these colors can be referenced by the\xa0",Object(r.b)("inlineCode",{parentName:"p"},"color"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"borderColor"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"backgroundColor"),", etc.. props."),Object(r.b)("p",null,"We recommend adding a palette that ranges from\xa0",Object(r.b)("inlineCode",{parentName:"p"},"50"),"\xa0to\xa0",Object(r.b)("inlineCode",{parentName:"p"},"900"),". Tools like\xa0",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://smart-swatch.netlify.app/"}),"Smart Swatch")),", ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://palx.jxnblk.com/"}),"Palx")),"\xa0are available to generate these palettes."),Object(r.b)(i.b,{mdxType:"ColorsBlock"}),Object(r.b)("h2",{id:"typography"},Object(r.b)("strong",{parentName:"h2"},"Typography")),Object(r.b)("p",null,"To manage Typography options, the theme object supports the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fonts"),"\xa0(font families)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fontSizes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fontWeights")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lineHeights")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"letterSpacings"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  letterSpacings: {\n    tighter: '-0.08px',\n    tight: '-0.4px',\n    normal: '0',\n    wide: '0.4px',\n    wider: '0.8px',\n    widest: '1.6px',\n  },\n  lineHeights: {\n    none: 1,\n    shorter: 1.25,\n    short: 1.375,\n    base: 1.5,\n    tall: 1.625,\n    taller: '2',\n    3: '12px',\n    4: '16px',\n    5: '20px',\n    6: '24px',\n    7: '28px',\n    8: '32px',\n    9: '36px',\n    10: '40px',\n  },\n  fontWeights: {\n    hairline: 100,\n    thin: 200,\n    light: 300,\n    normal: 400,\n    medium: 500,\n    semibold: 600,\n    bold: 700,\n    extrabold: 800,\n    black: 900,\n  },\n  fonts: {\n    heading: `Courier`,\n    body: `Courier`,\n    mono: `monospace`,\n  },\n  fontSizes: {\n    xs: 12,\n    sm: 14,\n    md: 16,\n    lg: 18,\n    xl: 20,\n    '2xl': 24,\n    '3xl': 30,\n    '4xl': 36,\n    '5xl': 48,\n    '6xl': 64,\n  },\n};\n")),Object(r.b)(i.d,{mdxType:"FontBlocks"}),Object(r.b)("h2",{id:"size"},Object(r.b)("strong",{parentName:"h2"},"Size")),Object(r.b)("p",null,"The\xa0",Object(r.b)("inlineCode",{parentName:"p"},"size"),"\xa0key allows you to customize the global spacing and sizing scale for your project. By default these spacing value can be referenced by the\xa0",Object(r.b)("inlineCode",{parentName:"p"},"padding"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"margin"),", and\xa0",Object(r.b)("inlineCode",{parentName:"p"},"top"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"left"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"right"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"bottom"),"\xa0props."),Object(r.b)(i.h,{mdxType:"SpaceBlocks"}),Object(r.b)("h2",{id:"shadows"},"Shadows"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"shadow")," key allows you to customize the global box shadow for your project."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  0: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.18,\n    shadowRadius: 1.0,\n    elevation: 1,\n  },\n  1: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.2,\n    shadowRadius: 1.41,\n    elevation: 2,\n  },\n  2: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 1,\n    },\n    shadowOpacity: 0.22,\n    shadowRadius: 2.22,\n    elevation: 3,\n  },\n  3: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.23,\n    shadowRadius: 2.62,\n    elevation: 4,\n  },\n  4: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.25,\n    shadowRadius: 3.84,\n    elevation: 5,\n  },\n  5: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.27,\n    shadowRadius: 4.65,\n    elevation: 6,\n  },\n  6: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 3,\n    },\n    shadowOpacity: 0.29,\n    shadowRadius: 4.65,\n    elevation: 7,\n  },\n  7: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.3,\n    shadowRadius: 4.65,\n    elevation: 8,\n  },\n  8: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 4,\n    },\n    shadowOpacity: 0.32,\n    shadowRadius: 5.46,\n    elevation: 9,\n  },\n  9: {\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 5,\n    },\n    shadowOpacity: 0.34,\n    shadowRadius: 6.27,\n    elevation: 10,\n  },\n};\n")),Object(r.b)("p",null,"Still confused? You can always explore ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GeekyAnts/nativebase-v3/tree/development/src/theme/base"}),"here"),"."))}m.isMDXComponent=!0},753:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"h",(function(){return p})),a.d(t,"a",(function(){return b})),a.d(t,"f",(function(){return h})),a.d(t,"i",(function(){return g})),a.d(t,"g",(function(){return y})),a.d(t,"e",(function(){return v})),a.d(t,"j",(function(){return N})),a.d(t,"c",(function(){return C}));var n=a(0),o=a.n(n);var r=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),o.a.createElement("div",null,o.a.createElement("h3",{style:{marginTop:"3rem"}},e),o.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map((a,n)=>o.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},o.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),o.a.createElement("div",null,t[a])))))));const i={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var l=({})=>o.a.createElement("div",null,Object.keys(i).map((e,t)=>o.a.createElement(r,{variants:i[e],name:e,key:`space-block-${e}-${t}`})));var d=({name:e,value:t})=>o.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},o.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),o.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"600px",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const s={xxs:10,xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":60,"7xl":72,"8xl":96,"9xl":128};var c=({})=>o.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(s).map((e,t)=>o.a.createElement(d,{name:e,value:s[e],key:`space-component-${e}-${t}`})));var m=({name:e,value:t})=>o.a.createElement("tr",{style:{backgroundColor:"inherit"}},o.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),o.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),o.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},o.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const f={px:"1px",.5:"2px",1:"4px",1.5:"6px",2:"8px",2.5:"10px",3:"12px",3.5:"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var p=({})=>o.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},o.a.createElement("thead",null,o.a.createElement("tr",{style:{borderWidth:0}},o.a.createElement("th",{style:{borderWidth:0}}," Value "),o.a.createElement("th",{style:{borderWidth:0}}," Pixels "),o.a.createElement("th",{style:{borderWidth:0}},"Representation"))),o.a.createElement("tbody",null,Object.keys(f).map((e,t)=>o.a.createElement(m,{name:e,value:f[e],key:`space-component-${e}-${t}`}))));var b=()=>o.a.createElement("div",{className:"label android"},"Android");function h(){return o.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},o.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},o.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),o.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var u=a(756);function g({title:e,description:t,className:a="",url:n,imgSrc:r,imgStyle:i,titleClassName:l="text-white",descriptionClassName:d="text-gray-100"}){return o.a.createElement(u.a,{to:n,className:"relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 "+a},o.a.createElement("div",{className:"font-bold text-md mb-2 "+l},e),o.a.createElement("p",{className:" text-sm leading-5 "+d},t),o.a.createElement("div",{className:"absolute h-20 w-20",style:i||{right:-20,top:-10}},r&&o.a.createElement("img",{src:r})))}var x=a(749);function y(){const{isDarkTheme:e}=Object(x.a)(),t=e?"":"text-white",a=e?"border-blueGray-100":"border-blueGray-200",n=e?"bg-blueGray-600":"bg-blueGray-500",r=e?"bg-cyan-700":"bg-cyan-500";return o.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+a},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",{className:"w-5 h-5 rounded-full "+r,style:{marginLeft:"-12px"}}),o.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+r,style:{maxWidth:"100%",width:"100%"}},o.a.createElement("h4",null,"NativeBase v3"),o.a.createElement("span",null,"We wanted to make NativeBase the go-to component library for anyone building with React Native. This version is accessible, highly customisable and consistent across android, iOS & web. That's not all though, read on for the full benefits of using v3."))),o.a.createElement("div",{className:"flex items-center mt-8"},o.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),o.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},o.a.createElement("h4",null,"NativeBase v2"),o.a.createElement("span",null,"The second version was released with new components, preset themes, unified icons & more. The main focus of v2 was to make components easy to theme with very few modifications. From v2.4.1 onwards, NativeBase also included support for the web."))),o.a.createElement("div",{className:"flex items-center mt-8"},o.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),o.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},o.a.createElement("h4",null,"NativeBase v1"),o.a.createElement("span",null,"NativeBase started out as an open source framework that enabled developers to build high-quality mobile apps using React Native. The first version included UITabBar on iOS and Drawer on Android. NativeBase v1 was very well-received by the dev community."))))}function v(){const{isDarkTheme:e}=Object(x.a)(),t=e?"bg-blueGray-700":"bg-gray-600";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row -m-2"},o.a.createElement(g,{title:"Install in Expo project",url:"install-expo",description:"Follow this guide to install NativeBase in your existing or new Expo project",className:"mt-2 "+t,imgSrc:"/img/expo.svg",imgStyle:{top:50,right:-310,width:400,height:400,opacity:.1}}),o.a.createElement(g,{title:"Install in React Native CLI project",url:"install-rn",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/react-native.svg",imgStyle:{bottom:-50,right:-40,height:140,width:140,opacity:.1}})),o.a.createElement("div",{className:"mt-2 -m-2 row"},o.a.createElement(g,{title:"Install in NextJS project",url:"install-next",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/next.svg",imgStyle:{bottom:-180,right:-90,height:260,width:260,opacity:.1}}),o.a.createElement(g,{title:"Install in Create React App project",url:"install-cra",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/cra.svg",imgStyle:{bottom:-62,right:-45,height:165,width:165,opacity:.1}})))}var w=a(752);function N(){return n.createElement(w.NativeBaseProvider,null,n.createElement(w.Box,{bg:"primary.600",py:4,px:3,rounded:"md",alignSelf:"center",width:375,maxWidth:"100%"},n.createElement(w.HStack,{justifyContent:"space-between"},n.createElement(w.Box,{justifyContent:"space-between"},n.createElement(w.VStack,{space:2},n.createElement(w.Text,{fontSize:"sm",color:"white"},"Today @ 9PM"),n.createElement(w.Text,{color:"white",fontSize:"lg"},"Let's talk about avatar!")),n.createElement(w.Pressable,{rounded:"sm",bg:"primary.500",alignSelf:"flex-start",py:2,px:3},n.createElement(w.Text,{textTransform:"uppercase",fontSize:"sm",fontWeight:"bold",color:"white"},"Remind me"))),n.createElement(w.Image,{source:{uri:"https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg"},alt:"Aang flying and surrounded by clouds",height:100,rounded:"full",width:100}))))}var O=a(763),j=a(754);const E=j.REPO_LINK+"/tree/"+j.REPO_BRANCH;function C({name:e,componentName:t,fileName:a}){var n;return a=null!==(n=a)&&void 0!==n?n:e,o.a.createElement(w.VStack,{space:4,style:{"--ifm-link-hover-decoration":"none"}},o.a.createElement(w.Box,{rounded:"md"},o.a.createElement(w.Text,null,"NativeBase ships with a default theme for each component."," ",o.a.createElement(w.Link,{_text:{textDecorationLine:"none"},href:E+"/src/theme/components/"+a+".ts",isExternal:!0},o.a.createElement(w.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300"},"Checkout the default theme of ",e)))),o.a.createElement(w.Heading,{size:"sm"},"We can easily extend the ",e," component theme using extendTheme function as shown below."),o.a.createElement(O.a,{className:"language-jsx"},(e=>`\nimport { extendTheme, NativeBaseProvider } from "native-base";\n\nconst theme = extendTheme({\n    components: {\n        ${e}: {\n            baseStyle: {},\n            defaultProps: {},\n            variants: {},\n            sizes: {},\n        }\n    } \n});\n\nfunction MyApp() {\n    return (\n        <NativeBaseProvider theme={theme}>\n            {/* Rest of the app goes here */}\n        </NativeBaseProvider>\n    )\n}\n`)(null!=t?t:e[0].toUpperCase()+e.slice(1,e.length))),o.a.createElement(w.Link,{_text:{textDecorationLine:"none"},href:"customizingComponents"},o.a.createElement(w.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300",fontWeight:"bold"},"Read more about extending component theme here.")))}},754:function(e,t){e.exports={REPO_LINK:"https://github.com/GeekyAnts/NativeBase",REPO_BRANCH:"v3-pre-beta"}},759:function(e,t){}}]);