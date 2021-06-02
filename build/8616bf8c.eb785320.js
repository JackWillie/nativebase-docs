(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return A}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),m=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=r,A=d["".concat(i,".").concat(p)]||d[p]||u[p]||n;return a?o.a.createElement(A,s(s({ref:t},c),{},{components:a})):o.a.createElement(A,s({ref:t},c))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},856:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),o=a(7),n=(a(0),a(1583)),i={id:"form",title:"Building a form with Validation"},s={unversionedId:"form",id:"version-3.0.0-next.32/form",isDocsHomePage:!1,title:"Building a form with Validation",description:"Apps often require users to enter information into a text field. For example, you might require users to log in with an email address and password combination.",source:"@site/versioned_docs/version-3.0.0-next.32/form.md",slug:"/form",permalink:"/docs/3.0.0-next.32/form",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.32/form.md",version:"3.0.0-next.32",sidebar:"version-3.0.0-next.32/componentsSidebar",previous:{title:"Building SearchBar",permalink:"/docs/3.0.0-next.32/buildingSearchBar"},next:{title:"Making App drawer",permalink:"/docs/3.0.0-next.32/appDrawer"}},l=[{value:"1. Create an\xa0Input wrapped in FormControl.",id:"1-create-an-input-wrapped-in-formcontrol",children:[]},{value:"2. Add validation logic.",id:"2-add-validation-logic",children:[]},{value:"3. Create a button to validate and submit the form.",id:"3-create-a-button-to-validate-and-submit-the-form",children:[]}],c={toc:l};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Apps often require users to enter information into a text field. For example, you might require users to log in with an email address and password combination."),Object(n.b)("p",null,"To make apps secure and easy to use, check whether the information the user has provided is valid. If the user has correctly filled out the form, process the information. If the user submits incorrect information, display a friendly error message letting them know what went wrong."),Object(n.b)("p",null,"In this example, learn how to add validation to a form that has a single text field using the following steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create an\xa0Input wrapped in FormControl."),Object(n.b)("li",{parentName:"ol"},"Add validation logic."),Object(n.b)("li",{parentName:"ol"},"Create a button to validate and submit the form.")),Object(n.b)("h2",{id:"1-create-an-input-wrapped-in-formcontrol"},"1. Create an\xa0Input wrapped in FormControl."),Object(n.b)("p",null,"Description"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Form Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20VStack%2C%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20BuildingAFormExample()%20%7B%0A%20%20const%20%5BformData%2C%20setData%5D%20%3D%20React.useState(%7B%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EName%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22John%22%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20setData(%7B%20...formData%2C%20name%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20Name%20should%20contain%20atleast%203%20character.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3EError%20Name%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBuildingAFormExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h2",{id:"2-add-validation-logic"},"2. Add validation logic."),Object(n.b)("p",null,"Description"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Form Example(Validation)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20VStack%2C%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0A%0Afunction%20%20BuildingAFormExample()%20%7B%0A%20%20const%20%5BformData%2C%20setData%5D%20%3D%20React.useState(%7B%7D)%3B%0A%20%20const%20%5Berrors%2C%20setErrors%5D%20%3D%20React.useState(%7B%7D)%3B%0A%20%20const%20validate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(formData.name%20%3D%3D%3D%20undefined)%20%7B%0A%20%20%20%20%20%20setErrors(%7B%0A%20%20%20%20%20%20%20%20...errors%2C%0A%20%20%20%20%20%20%20%20name%3A%20'Name%20is%20required'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%20else%20if%20(formData.name.length%20%3C%203)%20%7B%0A%20%20%20%20%20%20setErrors(%7B%0A%20%20%20%20%20%20%20%20...errors%2C%0A%20%20%20%20%20%20%20%20name%3A%20'Name%20is%20too%20short'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EName%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22John%22%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20setData(%7B%20...formData%2C%20name%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20Name%20should%20contain%20atleast%203%20character.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3E%7Berrors.name%7D%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBuildingAFormExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("h2",{id:"3-create-a-button-to-validate-and-submit-the-form"},"3. Create a button to validate and submit the form."),Object(n.b)("p",null,"Description"),Object(n.b)("div",{className:"snack-player","data-snack-name":"Form Example(Validate and Submit)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20VStack%2C%0A%20%20Button%2C%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20BuildingAFormExample()%20%7B%0A%20%20const%20%5BformData%2C%20setData%5D%20%3D%20React.useState(%7B%7D)%3B%0A%20%20const%20%5Berrors%2C%20setErrors%5D%20%3D%20React.useState(%7B%7D)%3B%0A%20%20const%20validate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(formData.name%20%3D%3D%3D%20undefined)%20%7B%0A%20%20%20%20%20%20setErrors(%7B%0A%20%20%20%20%20%20%20%20...errors%2C%0A%20%20%20%20%20%20%20%20name%3A%20'Name%20is%20required'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%20else%20if%20(formData.name.length%20%3C%203)%20%7B%0A%20%20%20%20%20%20setErrors(%7B%0A%20%20%20%20%20%20%20%20...errors%2C%0A%20%20%20%20%20%20%20%20name%3A%20'Name%20is%20too%20short'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20const%20onSubmit%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20validate()%20%3F%20console.log('Submitted')%20%3A%20console.log('Validation%20Failed')%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20width%3D%2280%25%22%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3D%7B'name'%20in%20errors%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EName%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22John%22%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20setData(%7B%20...formData%2C%20name%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20Name%20should%20contain%20atleast%203%20character.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3E%7Berrors.name%7D%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonSubmit%7D%20colorScheme%3D%22amber%22%3E%0A%20%20%20%20%20%20%20%20Submit%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CBuildingAFormExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(n.b)("p",null,"Internal link for Community Integration ( Formik and React Hook Forms )."),Object(n.b)("h1",{id:"community-integration"},"Community Integration"),Object(n.b)("p",null,"NativeBase can be used with other popular Form libraries like Formik and React Hook Forms as well. For more details checkout Community Integration section of the docs."))}m.isMDXComponent=!0}}]);