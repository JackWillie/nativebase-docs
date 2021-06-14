(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{598:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return c}));var b=t(3),n=t(7),s=(t(0),t(733)),r={id:"tabs",title:"Tabs"},i={unversionedId:"tabs",id:"version-3.0.0-next.38/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tabs are used to communicate a state that affects a system, feature or page.",source:"@site/versioned_docs/version-3.0.0-next.38/tabs.md",slug:"/tabs",permalink:"/3.0.0-next.38/tabs",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/tabs.md",version:"3.0.0-next.38"},o=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Composition",id:"composition",children:[]},{value:"Variant",id:"variant",children:[]},{value:"TabsAlignment",id:"tabsalignment",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"FittedTabs",id:"fittedtabs",children:[]},{value:"TabBarOnly",id:"tabbaronly",children:[]}]},{value:"Props",id:"props",children:[{value:"Tabs",id:"tabs",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard",id:"keyboard",children:[]},{value:"ARIA roles",id:"aria-roles",children:[]}]}],T={toc:o};function c(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(b.a)({},T,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Tabs are used to communicate a state that affects a system, feature or page."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Tabs"),": Provides context and state for all components"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Tabs.Bar"),": Wrapper for the\xa0",Object(s.b)("inlineCode",{parentName:"li"},"Tab"),"\xa0components"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Tabs.Tab"),": element that serves as a label for one of the tab view and can be activated to display that panel."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Tabs.Views"),": Wrapper for the\xa0",Object(s.b)("inlineCode",{parentName:"li"},"Tabs.View"),"\xa0components"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Tabs.View"),": element that contains the content associated with a tab")),Object(s.b)("pre",null,Object(s.b)("code",Object(b.a)({parentName:"pre"},{className:"language-jsx"}),"import { Tabs } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTabs%3E%0A%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%3C%2FTabs%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"composition"},"Composition"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20Heading%2C%0A%20%20Tabs%2C%0A%20%20Text%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%22100%25%22%20p%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CHeading%3EThis%20is%20an%20example%20for%20Tabs%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CTabs%20my%3D%7B10%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CText%3ETo%20show%20how%20tabs%20behaves%20around%20other%20components.%3C%2FText%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"variant"},"Variant"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab Variant","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22line%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22enclosed%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22enclosed-colored%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22soft-rounded%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20variant%3D%22solid-rounded%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"tabsalignment"},"TabsAlignment"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab TabsAlignment","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22start%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20align%3D%22end%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"colors"},"Colors"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab Colors","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22danger%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22warning%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22teal%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22orange%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%3CTabs%20colorScheme%3D%22info%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"sizes"},"Sizes"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%22100%25%22%20p%3D%7B3%7D%20space%3D%7B7%7D%3E%0A%20%20%20%20%20%20%7B%2F*%20Small%20Tabs%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%7B%2F*%20Medium%20Tabs%20(default)%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%20%20%7B%2F*%20Large%20Tabs%20(default)%20*%2F%7D%0A%20%20%20%20%20%20%3CTabs%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"fittedtabs"},"FittedTabs"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab FittedTabs","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20width%3D%22100%25%22%20p%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CTabs%20isFitted%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Views%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EOne%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3ETwo%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTabs.View%3EThree%3C%2FTabs.View%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabs.Views%3E%0A%20%20%20%20%20%20%3C%2FTabs%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h3",{id:"tabbaronly"},"TabBarOnly"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Tab TabBarOnly","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tabs%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TabComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CTabs%3E%0A%20%20%20%20%20%20%3CTabs.Bar%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EOne%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3ETwo%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EThree%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%20%20%3CTabs.Tab%3EFour%3C%2FTabs.Tab%3E%0A%20%20%20%20%20%20%3C%2FTabs.Bar%3E%0A%20%20%20%20%3C%2FTabs%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Tabs")," implements ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",Object(b.a)({parentName:"strong"},{href:"/3.0.0-next.38/box"}),"Box")),", so all the Box Props can be passed to it."),Object(s.b)("h3",{id:"tabs"},"Tabs"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(s.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"align"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"center"),", ",Object(s.b)("inlineCode",{parentName:"td"},"end"),", ",Object(s.b)("inlineCode",{parentName:"td"},"start")),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The alignments of the tab."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"start"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"defaultIndex"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The index of the open tab."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"If given, update the default open tab."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"size"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(s.b)("inlineCode",{parentName:"td"},"md"),", ",Object(s.b)("inlineCode",{parentName:"td"},"sm")),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The size of the tab."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"md"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"isFitted"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The tabs will spread in the TabBar."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"onChange"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The callback invoked when tab is changed."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"variant"),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"enclosed"),", ",Object(s.b)("inlineCode",{parentName:"td"},"enclosed-colored"),", ",Object(s.b)("inlineCode",{parentName:"td"},"line"),", ",Object(s.b)("inlineCode",{parentName:"td"},"soft-rounded"),", ",Object(s.b)("inlineCode",{parentName:"td"},"solid-box"),", ",Object(s.b)("inlineCode",{parentName:"td"},"solid-rounded")),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The variant of the tabs style to use."),Object(s.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"line"))))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Tabs.Bar"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Tabs.Tab"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Tabs.Views"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Tabs.View")," all implement ",Object(s.b)("a",Object(b.a)({parentName:"p"},{href:"/3.0.0-next.38/box"}),Object(s.b)("inlineCode",{parentName:"a"},"Box")),", all the props of Box can be passed to it."),Object(s.b)("h2",{id:"accessibility"},"Accessibility"),Object(s.b)("h3",{id:"keyboard"},"Keyboard"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ArrowRight")," Moves focus to the next tab"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ArrowLeft")," Moves focus to the previous tab"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Tab")," When focus moves into the tab list, places focus on the active tab element"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Home")," Moves focus to the first tab"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"End")," Moves focus to the last tab")),Object(s.b)("h3",{id:"aria-roles"},"ARIA roles"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Tab has role set to ",Object(s.b)("inlineCode",{parentName:"li"},"tab")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"aria-selected")," is set to true when a tab is selected and all other Tabs have it set to false"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"aria-controls")," is set to the tabpanel's id"),Object(s.b)("li",{parentName:"ul"},"Tablist has ",Object(s.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(s.b)("inlineCode",{parentName:"li"},"tablist")),Object(s.b)("li",{parentName:"ul"},"TabPanel has ",Object(s.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(s.b)("inlineCode",{parentName:"li"},"tabpanel")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"aria-labelledby")," is set to the id of the Tab that labels the TabPanel")))}c.isMDXComponent=!0},733:function(e,a,t){"use strict";t.d(a,"a",(function(){return C})),t.d(a,"b",(function(){return E}));var b=t(0),n=t.n(b);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);a&&(b=b.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,b)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,b,n=function(e,a){if(null==e)return{};var t,b,n={},s=Object.keys(e);for(b=0;b<s.length;b++)t=s[b],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(b=0;b<s.length;b++)t=s[b],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var T=n.a.createContext({}),c=function(e){var a=n.a.useContext(T),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},C=function(e){var a=c(e.components);return n.a.createElement(T.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,b=e.mdxType,s=e.originalType,r=e.parentName,T=o(e,["components","mdxType","originalType","parentName"]),C=c(t),d=b,E=C["".concat(r,".").concat(d)]||C[d]||l[d]||s;return t?n.a.createElement(E,i(i({ref:a},T),{},{components:t})):n.a.createElement(E,i({ref:a},T))}));function E(e,a){var t=arguments,b=a&&a.mdxType;if("string"==typeof e||b){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:b,r[1]=i;for(var T=2;T<s;T++)r[T]=t[T];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);