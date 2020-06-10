(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),b=(a(0),a(186)),l={id:"personalization",title:"Personalization",sidebar_label:"Personalization"},i={id:"version-5.1.1/web/personalization",title:"Personalization",description:"GetUsersTopTracks",source:"@site/versioned_docs/version-5.1.1/web/personalization.md",permalink:"/SpotifyAPI-NET/docs/web/personalization",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/personalization.md",version:"5.1.1",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1591780562,sidebar_label:"Personalization",sidebar:"version-5.1.1/someSidebar",previous:{title:"Library",permalink:"/SpotifyAPI-NET/docs/web/library"},next:{title:"Player",permalink:"/SpotifyAPI-NET/docs/web/player"}},c=[{value:"GetUsersTopTracks",id:"getuserstoptracks",children:[]},{value:"GetUsersTopArtists",id:"getuserstopartists",children:[]},{value:"GetUsersRecentlyPlayedTracks",id:"getusersrecentlyplayedtracks",children:[]}],o={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getuserstoptracks"},"GetUsersTopTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get the current user\u2019s top tracks based on calculated affinity.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[timeRange]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Over what time frame the affinities are compute."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TimeRangeType.MediumTerm"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#track-object-full"}),"FullTrack")," wrapped inside a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging-object")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"Paging<FullTrack> tracks = _spotify.GetUsersTopTracks();\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getuserstopartists"},"GetUsersTopArtists"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get the current user\u2019s top artists based on calculated affinity.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[timeRange]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Over what time frame the affinities are compute."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TimeRangeType.MediumTerm"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"}),"FullArtist")," wrapped inside a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging-object")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"Paging<FullArtist> artists = _spotify.GetUsersTopArtists();\nartists.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Artist-Names (max 20)\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getusersrecentlyplayedtracks"},"GetUsersRecentlyPlayedTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get tracks from the current user\u2019s recent play history.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[after]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Returns all items after (but not including) this cursor position."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DateTime.Now.AddDays(-1)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[before]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Returns all items before (but not including) this cursor position."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DateTime.Now.AddDays(-1)"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"PlayHistory")," wrapped inside a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object"}),"CursorPaging-object")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"CursorPaging<PlayHistory> histories = _spotify.GetUsersRecentlyPlayedTracks();\nhistories.Items.ForEach(item => Console.WriteLine(item.Track.Name));\n")),Object(b.b)("hr",null))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,j=s["".concat(l,".").concat(u)]||s[u]||m[u]||b;return a?n.a.createElement(j,i({ref:t},o,{components:a})):n.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);