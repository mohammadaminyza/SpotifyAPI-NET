(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(128);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},128:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(124)),i=n(126),c={id:"auth_introduction",title:"Introduction"},u={unversionedId:"auth_introduction",id:"auth_introduction",isDocsHomePage:!1,title:"Introduction",description:"Spotify does not allow unauthorized access to the API. Thus, you need an access token to make requests. This access token can be gathered via multiple schemes, all following the OAuth2 spec. Since it's important to choose the correct scheme for your usecase, make sure you have a grasp of the following terminology/docs:",source:"@site/docs/auth_introduction.md",slug:"/auth_introduction",permalink:"/SpotifyAPI-NET/docs/auth_introduction",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/auth_introduction.md",version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1617911058,formattedLastUpdatedAt:"4/8/2021",sidebar:"docs",previous:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/unit_testing"},next:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/client_credentials"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spotify does not allow unauthorized access to the API. Thus, you need an access token to make requests. This access token can be gathered via multiple schemes, all following the OAuth2 spec. Since it's important to choose the correct scheme for your usecase, make sure you have a grasp of the following terminology/docs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"OAuth2"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"},"Spotify Authorization Flows"))),Object(a.b)("p",null,"Since every auth flow also needs an application in the ",Object(a.b)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"Spotify dashboard"),", make sure you have the necessary values (like ",Object(a.b)("inlineCode",{parentName:"p"},"Client Id")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Client Secret"),")."),Object(a.b)("p",null,"Then, continue with the docs of the specific auth flows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/client_credentials"},"Client Credentials")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/implicit_grant"},"Implicit Grant")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/authorization_code"},"Authorization Code")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/pkce"},"PKCE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/SpotifyAPI-NET/docs/token_swap"},"(Token Swap)"))),Object(a.b)("img",{alt:"auth comparison",src:Object(i.a)("img/auth_comparison.png")}))}p.isMDXComponent=!0}}]);