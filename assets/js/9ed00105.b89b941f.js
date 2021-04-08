(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(124)),a={id:"configuration",title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"To configure the Spotify client functionality, the SpotifyClientConfig class exists.",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/SpotifyAPI-NET/docs/configuration",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/configuration.md",version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1617911058,formattedLastUpdatedAt:"4/8/2021",sidebar:"docs",previous:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"},next:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"}},l=[{value:"HTTPClient Notes",id:"httpclient-notes",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To configure the Spotify client functionality, the ",Object(i.b)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," class exists."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var config = SpotifyClientConfig.CreateDefault("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\n// is the same as\n\nvar spotify = new SpotifyClient("YourAccessToken");\n')),Object(i.b)("p",null,"We won't cover every possible configuration in this part, head over to the specific guides for that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h2",{id:"httpclient-notes"},"HTTPClient Notes"),Object(i.b)("p",null,"One important part of the configuration is the used HTTPClient. By default, every time a ",Object(i.b)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," is instantiated, a new ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPClient")," is created in the background. For Web Applications that require a lot of different configs due to user based access tokens, it is ",Object(i.b)("strong",{parentName:"p"},"not")," advised to create a new config from scratch with every HTTP call. Instead, a default (static) config should be used to create a new config with a new access token."),Object(i.b)("p",null,"Consider the following HTTP Endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'public HttpResult Get()\n{\n  var config = SpotifyClientConfig.CreateDefault("YourAccessToken")\n  var spotify = new SpotifyClient(config);\n}\n')),Object(i.b)("p",null,"This creates a new ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPClient")," every time a request is made, which can be quite bad for the performance. Instead, we should use a base config and use ",Object(i.b)("inlineCode",{parentName:"p"},"WithToken"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'// somewhere global/static\npublic static SpotifyClientConfig DefaultConfig = SpotifyClientConfig.CreateDefault();\n\npublic HttpResult Get()\n{\n  var config = DefaultConfig.WithToken("YourAccessToken");\n  var spotify = new SpotifyClient(config);\n}\n')),Object(i.b)("p",null,"This way, a single ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPClient")," will be used. For a real example, checkout the ",Object(i.b)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/example_asp"},"ASP.NET Example"),"."))}s.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);