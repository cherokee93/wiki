(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{123:function(e,a,t){"use strict";var r=t(3),l=t(0),n=t.n(l),s=t(120),c=t(116),i=t(115),m=t(119),o=t(56),u=t.n(o),f=t(121);function d({to:e,href:a,label:t,prependBaseUrlToHref:l,...s}){const i=Object(m.a)(e),o=Object(m.a)(a,{forcePrependBaseUrl:!0});return n.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},a?{href:l?o:a}:{to:i},s),t)}const E=({sources:e,alt:a})=>n.a.createElement(f.a,{className:"footer__logo",alt:a,sources:e});a.a=function(){const{footer:e}=Object(i.useThemeConfig)(),{copyright:a,links:t=[],logo:r={}}=e||{},l={light:Object(m.a)(r.src),dark:Object(m.a)(r.srcDark||r.src)};return e?n.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},t&&t.length>0&&n.a.createElement("div",{className:"row footer__links"},t.map(((e,a)=>n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map(((e,a)=>e.html?n.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e))))):null)))),(r||a)&&n.a.createElement("div",{className:"footer__bottom text--center"},r&&(r.src||r.srcDark)&&n.a.createElement("div",{className:"margin-bottom--sm"},r.href?n.a.createElement(c.a,{href:r.href,className:u.a.footerLogoLink},n.a.createElement(E,{alt:r.alt,sources:l})):n.a.createElement(E,{alt:r.alt,sources:l})),a?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},125:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),l=t.n(r),n=t(117),s=t(116),c=t(57),i=t.n(c);function m(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(i.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},70:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(122),s=t(116),c=t(125),i=t(118);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var m=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return l.a.createElement("div",{key:t},l.a.createElement("h3",null,t),r.map((function(e){return l.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),l.a.createElement("hr",null))})).filter((function(e){return null!=e}));return l.a.createElement(n.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_list"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:t})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(i.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),l.a.createElement("div",{className:"margin-vert--lg"},m)))))}}}]);