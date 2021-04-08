(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(124)),l={id:"profiles",title:"Profiles",sidebar_label:"Profiles"},i={unversionedId:"web/profiles",id:"version-5.1.1/web/profiles",isDocsHomePage:!1,title:"Profiles",description:"GetPrivateProfile",source:"@site/versioned_docs/version-5.1.1/web/profiles.md",slug:"/web/profiles",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/profiles",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/profiles.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1617911058,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"Profiles",sidebar:"version-5.1.1/someSidebar",previous:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists"},next:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy"}},c=[{value:"GetPrivateProfile",id:"getprivateprofile",children:[]},{value:"GetPublicProfile",id:"getpublicprofile",children:[]}],b={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getprivateprofile"},"GetPrivateProfile"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get detailed profile information about the current user (including the current user\u2019s username).")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Example")))),Object(o.b)("p",null,"Returns a ",Object(o.b)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#user-object-private"},"PrivateProfile")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"PrivateUser user = _spotify.GetPrivateProfile();\nConsole.WriteLine(user.DisplayName);\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"getpublicprofile"},"GetPublicProfile"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Get public profile information about a Spotify user.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Example"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"userId"),Object(o.b)("td",{parentName:"tr",align:null},"The user's Spotify user ID."),Object(o.b)("td",{parentName:"tr",align:null},"EXAMPLE")))),Object(o.b)("p",null,"Returns a ",Object(o.b)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#user-object-public"},"PublicProfile")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"")),Object(o.b)("hr",null))}p.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);