(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{1294:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return p}));var r=t(3),n=t(7),i=(t(0),t(1583)),o={id:"avatar",title:"Avatar"},c={unversionedId:"avatar",id:"version-3.0.0-next.27/avatar",isDocsHomePage:!1,title:"Avatar",description:"The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon.",source:"@site/versioned_docs/version-3.0.0-next.27/avatar.md",slug:"/avatar",permalink:"/docs/3.0.0-next.27/avatar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/avatar.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Tabs",permalink:"/docs/3.0.0-next.27/tabs"},next:{title:"Icon",permalink:"/docs/3.0.0-next.27/icon"}},s=[{value:"Import",id:"import",children:[]},{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Fallbacks",id:"fallbacks",children:[]},{value:"Avatar Badge",id:"avatar-badge",children:[]},{value:"Avatar Group",id:"avatar-group",children:[]},{value:"Props",id:"props",children:[{value:"Avatar",id:"avatar",children:[]}]}],A={toc:s};function p(a){var e=a.components,t=Object(n.a)(a,["components"]);return Object(i.b)("wrapper",Object(r.a)({},A,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 3 avatar-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Avatar"),": An image that represents the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Avatar.Badge"),": A wrapper that displays its content on the bottom right corner of the avatar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Avatar.Group"),": A wrapper to stack multiple avatars together.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Avatar } from 'native-base';\n")),Object(i.b)("h2",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F983582580372004864%2Fh9ccP0Ea_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20SC%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20borderWidth%3D%7B1%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20MR%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"sizes"},"Sizes"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%20space%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22xs%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22sm%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F929409889788510208%2FgRr2f7rZ_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20HS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22md%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%22xl%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20size%3D%222xl%22%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20RB%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"fallbacks"},"Fallbacks"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Fallbacks","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%20mr%3D%7B1%7D%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%20%7D%7D%3EMR%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"avatar-badge"},"Avatar Badge"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Avatar Badge","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Falpha.nativebase.io%2Fimg%2Fnativebase-icon.png'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%3CAvatar.Badge%20bg%3D%7B'red.200'%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Falpha.nativebase.io%2Fimg%2Fnativebase-icon.png'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%3CAvatar.Badge%20borderColor%3D%22papayawhip%22%20bg%3D%22tomato%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"avatar-group"},"Avatar Group"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Avatar Avatar Group","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Avatar%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AvatarComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CAvatar.Group%20size%3D%22lg%22%20max%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20MR%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fcode-beast'%20%7D%7D%3ECB%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FAvatar.Group%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CAvatarComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"avatar"},"Avatar"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2xl, lg, md, sm, xl, xs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The size of the avatar."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"md")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"source"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ImageSourcePropType"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The image source of the avatar."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_","text"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TextProps"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Text styling for fallback Text."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1583:function(a,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return v}));var r=t(0),n=t.n(r);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function c(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,r,n=function(a,e){if(null==a)return{};var t,r,n={},i=Object.keys(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var A=n.a.createContext({}),p=function(a){var e=n.a.useContext(A),t=e;return a&&(t="function"==typeof a?a(e):c(c({},e),a)),t},l=function(a){var e=p(a.components);return n.a.createElement(A.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.a.createElement(n.a.Fragment,{},e)}},b=n.a.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,o=a.parentName,A=s(a,["components","mdxType","originalType","parentName"]),l=p(t),b=r,v=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return t?n.a.createElement(v,c(c({ref:e},A),{},{components:t})):n.a.createElement(v,c({ref:e},A))}));function v(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=a,c.mdxType="string"==typeof a?a:r,o[1]=c;for(var A=2;A<i;A++)o[A]=t[A];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);