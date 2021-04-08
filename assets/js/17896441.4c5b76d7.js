(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(130),l=a(129);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(l.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(131),d=a(125);function u(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:r.a.createElement("strong",null,r.a.createElement(i.a,{to:a,onClick:n},r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var f=function(){var e=Object(o.default)().siteConfig.title,t=Object(c.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(c.useActiveVersion)(t),i=Object(c.useDocVersionSuggestions)(t),l=i.latestDocSuggestion,s=i.latestVersionSuggestion;if(!s)return r.a.createElement(r.a.Fragment,null);var f,b=null!=l?l:(f=s).docs.find((function(e){return e.id===f.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},r.a.createElement("div",null,"current"===n.name?r.a.createElement(u,{siteTitle:e,versionLabel:n.label}):r.a.createElement(m,{siteTitle:e,versionLabel:n.label})),r.a.createElement("div",{className:"margin-top--md"},r.a.createElement(v,{versionLabel:s.label,to:b.path,onClick:function(){return a(s.name)}})))},b=a(142),p=a(70),g=a.n(p);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return r.a.createElement(l.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g.a.lastUpdatedDate},a)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return r.a.createElement(l.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.a.createElement("strong",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,r.a.createElement(l.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?r.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?r.a.createElement(E,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var O=a(127);var y=function(e,t,a){var r=Object(n.useState)(void 0),i=r[0],l=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},L=a(71),N=a.n(L),U="table-of-contents__link";function k(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:U,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(k,{isChild:!0,toc:e.children}))}))):null}var _=function(e){var t=e.toc;return y(U,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(O.a)(N.a.tableOfContents,"thin-scrollbar")},r.a.createElement(k,{toc:t}))},j=a(3),A=a(7),T=a(72),C=a.n(T),B=function(e){var t=e.className,a=Object(A.a)(e,["className"]);return r.a.createElement("svg",Object(j.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(O.a)(C.a.iconEdit,t),"aria-label":"Edit page"},a),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function x(e){var t=e.editUrl;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(B,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var V=a(73),I=a.n(V);t.default=function(e){var t,a=e.content,n=a.metadata,i=a.frontMatter,l=i.image,o=i.keywords,d=i.hide_title,u=i.hide_table_of_contents,m=n.description,v=n.title,p=n.editUrl,g=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,E=n.lastUpdatedBy,y=Object(c.useActivePlugin)({failfast:!0}).pluginId,L=Object(c.useVersions)(y),N=Object(c.useActiveVersion)(y),U=L.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:v,description:m,keywords:o,image:l}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(O.a)("col",(t={},t[I.a.docItemCol]=!u,t))},r.a.createElement(f,null),r.a.createElement("div",{className:I.a.docItemContainer},r.a.createElement("article",null,U&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N.label)),!d&&r.a.createElement("header",null,r.a.createElement("h1",{className:I.a.docTitle},v)),r.a.createElement("div",{className:"markdown"},r.a.createElement(a,null))),(p||g||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},p&&r.a.createElement(x,{editUrl:p})),(g||E)&&r.a.createElement(w,{lastUpdatedAt:g,formattedLastUpdatedAt:h,lastUpdatedBy:E}))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:n})))),!u&&a.toc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(_,{toc:a.toc}))))}},126:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(16),r=a(128);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,c=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},128:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),l=a(128),s=a(8),o=Object(n.createContext)({collectLink:function(){}}),c=a(126),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,m=e.isNavLink,v=e.to,f=e.href,b=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,E=void 0===h||h,w=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(c.b)().withBaseUrl,y=Object(n.useContext)(o),L=v||f,N=Object(l.a)(L),U=null==L?void 0:L.replace("pathname://",""),k=void 0!==U?(a=U,E&&function(e){return e.startsWith("/")}(a)?O(a):a):void 0,_=Object(n.useRef)(!1),j=m?i.e:i.c,A=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&N&&window.docusaurus.prefetch(k),function(){A&&u&&u.disconnect()}}),[k,A,N]);var T=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,C=!k||!N||T;return k&&N&&!T&&!g&&y.collectLink(k),C?r.a.createElement("a",Object.assign({href:k},L&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):r.a.createElement(j,Object.assign({},w,{onMouseEnter:function(){_.current||(window.docusaurus.preload(k),_.current=!0)},innerRef:function(e){var t,a;A&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(k)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:k||""},m&&{isActive:p,activeClassName:b}))}},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(24),l=a(126),s=a(125);function o(e){var t=e.title,a=e.description,n=e.keywords,o=e.image,c=Object(s.useTitleFormatter)(t),d=Object(l.a)(o,{absolute:!0});return r.a.createElement(i.a,null,t&&r.a.createElement("title",null,c),t&&r.a.createElement("meta",{property:"og:title",content:c}),a&&r.a.createElement("meta",{name:"description",content:a}),a&&r.a.createElement("meta",{property:"og:description",content:a}),n&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),o&&r.a.createElement("meta",{property:"og:image",content:d}),o&&r.a.createElement("meta",{name:"twitter:image",content:d}),o&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}}}]);