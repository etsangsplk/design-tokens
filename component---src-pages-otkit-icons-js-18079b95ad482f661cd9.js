(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8k0H":function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("Wbzz"),c=t("hoaJ"),l=t.n(c),r=t("mxmt"),s=t.n(r);n.a=function(e){var n=e.children,t=e.nav,a=void 0===t?null:t,c=e.className,r=void 0===c?"":c;return i.a.createElement("div",null,i.a.createElement("div",{className:l.a.header},i.a.createElement(o.a,{to:"/",style:{marginRight:"60px"}},i.a.createElement("img",{alt:"Opentable logo",src:s.a,className:l.a.logo}),i.a.createElement("h1",null,"Design Bar")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",className:l.a.headerLink},"Design tokens")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/handover-process",className:l.a.headerLink},"Process guidelines")))),i.a.createElement("div",null,a?i.a.createElement("div",{className:l.a.nav},a):null,i.a.createElement("div",{className:l.a.mainBody},i.a.createElement("div",{className:l.a.main+" "+r},n))))}},Fvfz:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("LvDl"),c=t.n(o),l=t("rohU"),r=t.n(l),s=t("Zn/k"),m=t("ULVC"),u=t.n(m);n.a=function(){var e=Object(a.useState)(""),n=e[0],t=e[1],o=c.a.keys(r.a).sort(),l=c.a.without(o,"iconSize"),m=function(e){var n=e.target.value||"";t(n.toLowerCase())},d=l.filter((function(e){if(""===n)return!0;var t=c.a.kebabCase(e),a=RegExp(".*"+n+".*","g");return t.match(a)})).map((function(e){var n=r.a[e];return i.a.createElement("div",{className:u.a.card,key:e},i.a.createElement("div",{className:u.a.iconBlock},i.a.createElement("div",{className:u.a.icon,dangerouslySetInnerHTML:{__html:n}})),i.a.createElement("div",{className:u.a.iconName},c.a.kebabCase(e)))}));return i.a.createElement("div",{className:u.a.mainContainer},i.a.createElement(s.a,{text:"Icons",type:"SectionHeader__small",content:i.a.createElement("input",{className:u.a.form,type:"text",onChange:m,placeholder:"Search icon"})}),i.a.createElement("div",{className:u.a.sectionIcon},d))}},ULVC:function(e,n,t){e.exports={sectionIcon:"otkit-icons-module--section-icon--2DHQR",mainContainer:"otkit-icons-module--main-container--1aeSM",card:"otkit-icons-module--card--2EYEk",iconBlock:"otkit-icons-module--icon-block--3mis2",icon:"otkit-icons-module--icon--1HTQU",iconName:"otkit-icons-module--icon-name--2Emxm",form:"otkit-icons-module--form--25uSM"}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"Zn/k":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),i=t.n(a),o=t("rmYj"),c=t.n(o);function l(e){var n=e.text,t=e.type,a=e.content,o=e.className,l=void 0===o?"":o,r="SectionHeader__small"===t?c.a.sectionHeaderSmall:c.a.sectionHeader;return i.a.createElement("div",{className:c.a.sectionContainer},i.a.createElement("h2",{className:r+" "+l},n),a&&i.a.createElement("div",{className:c.a.sectionContent},a))}},hoaJ:function(e,n,t){e.exports={mainContainer:"index-module--main-container--1V5yZ",header:"index-module--header--t3FUc",headerLink:"index-module--header-link--WoLFM",headerLinkActive:"index-module--header-link-active--16U4y",logo:"index-module--logo--1SwiM",nav:"index-module--nav--OkaO_",navLink:"index-module--nav-link--C7C1B",linkActive:"index-module--link-active--3FN6v",navSection:"index-module--nav-section--171Lu",mainBody:"index-module--main-body--125y5",main:"index-module--main--1U6sP",linkSecondary:"index-module--link-secondary--B1kuF"}},mxmt:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzMyAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAxMS43ODNhMi45NSAyLjk1IDAgMCAxIDIuOTU0LTIuOTQ2IDIuOTUgMi45NSAwIDAgMSAyLjk1MyAyLjk0NiAyLjk1IDIuOTUgMCAwIDEtMi45NTMgMi45NDZBMi45NSAyLjk1IDAgMCAxIDAgMTEuNzgzem0yMC43NDcgMi45NDZhMi45NSAyLjk1IDAgMCAxLTIuOTUzLTIuOTQ2IDIuOTUgMi45NSAwIDAgMSAyLjk1My0yLjk0NiAyLjk1IDIuOTUgMCAwIDEgMi45NTUgMi45NDYgMi45NSAyLjk1IDAgMCAxLTIuOTU1IDIuOTQ2ek0yMC43NDggMEMxNC4yMjMgMCA4LjkzMyA1LjI3NiA4LjkzMyAxMS43ODNjMCA2LjUwOCA1LjI5IDExLjc4NCAxMS44MTUgMTEuNzg0IDYuNTI2IDAgMTEuODE1LTUuMjc2IDExLjgxNS0xMS43ODRDMzIuNTYzIDUuMjc2IDI3LjI3MyAwIDIwLjc0OCAweiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg=="},rBsb:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("8k0H"),c=t("Wbzz"),l=t("hoaJ"),r=t.n(l),s=function(e){return e.isCurrent?{className:r.a.linkActive}:null},m=function(e){return i.a.createElement("div",{className:r.a.navLink},i.a.createElement(c.a,{to:e.to,getProps:s},e.children))},u=function(){return i.a.createElement("div",{className:r.a.navSection},i.a.createElement("h4",null,"DESIGN TOKENS"),i.a.createElement(m,{to:"/"},"All Design Tokens"),i.a.createElement(m,{to:"/otkit/colors/"},"Colors"),i.a.createElement(m,{to:"/otkit/typography/"},"Typography"),i.a.createElement(m,{to:"/otkit/grids/"},"Grids"),i.a.createElement(m,{to:"/otkit/spacing/"},"Spacing"),i.a.createElement(m,{to:"/otkit/borders/"},"Borders"),i.a.createElement(m,{to:"/otkit/breakpoints/"},"Breakpoints"),i.a.createElement(m,{to:"/otkit/shadows/"},"Shadows"),i.a.createElement(m,{to:"/otkit/icons/"},"Icons"),i.a.createElement(m,{to:"/otkit/icons-theme/"},"Icons (theme)"))};n.a=function(e,n){return function(t){var a=null;return"design-system-nav"===n&&(a=u),i.a.createElement(o.a,{nav:a?i.a.createElement(a,null):null},i.a.createElement(e,t))}}},rmYj:function(e,n,t){e.exports={sectionHeader:"styles-module--section-header--2TDZx",sectionHeaderSmall:"styles-module--section-header-small--3mU2q",sectionContainer:"styles-module--section-container--5BXbC",sectionContent:"styles-module--section-content--3L4NS"}},vvq5:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),o=t("rBsb"),c=t("Fvfz");n.default=Object(o.a)((function(){return i.a.createElement(c.a,null)}),"design-system-nav")},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"==typeof window&&(t=window)}e.exports=t}}]);
//# sourceMappingURL=component---src-pages-otkit-icons-js-18079b95ad482f661cd9.js.map