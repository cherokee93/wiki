(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{136:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(134),o=a(129),s=a(128),i=a(132),m=a(56),u=a.n(m),f=a(133);function d({to:e,href:t,label:a,prependBaseUrlToHref:r,...c}){const s=Object(i.a)(e),m=Object(i.a)(t,{forcePrependBaseUrl:!0});return l.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{href:r?m:t}:{to:s},c),a)}const E=({sources:e,alt:t})=>l.a.createElement(f.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},r={light:Object(i.a)(n.src),dark:Object(i.a)(n.srcDark||n.src)};return e?l.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},a&&a.length>0&&l.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(d,e))))):null)))),(n||t)&&l.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&l.a.createElement("div",{className:"margin-bottom--sm"},n.href?l.a.createElement(o.a,{href:n.href,className:u.a.footerLogoLink},l.a.createElement(E,{alt:n.alt,sources:r})):l.a.createElement(E,{alt:n.alt,sources:r})),t?l.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(130);var c=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var i=s[r],m=i.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),i.classList.add(t),c(i),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o=a(58),s=a.n(o),i="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(s.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:t}))}},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(135),c=a(141),o=a(143),s=a(144);t.default=function(e){var t=e.content,a=t.frontMatter,n=t.metadata,i=a.title,m=a.description,u=a.wrapperClassName,f=a.hide_table_of_contents,d=n.permalink;return r.a.createElement(l.a,{title:i,description:m,permalink:d,wrapperClassName:u},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{components:o.a},r.a.createElement(t,null)))),!f&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{toc:t.toc})))))))}}}]);