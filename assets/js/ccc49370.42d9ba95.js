(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(135),i=t(142),s=t(131),c=t(129);var o=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},m=t(138),d=t(144),u=t(147);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,s=a.metadata,c=s.title,g=s.description,v=s.nextItem,E=s.prevItem,p=s.editUrl,f=n.hide_table_of_contents;return r.a.createElement(l.a,{title:c,description:g,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:t})),r.a.createElement("main",{className:"col col--7"},r.a.createElement(i.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement(u.a,{editUrl:p})),(v||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:v,prevItem:E}))),!f&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(d.a,{toc:a.toc})))))}},136:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),i=t(134),s=t(129),c=t(128),o=t(132),m=t(56),d=t.n(m),u=t(133);function g({to:e,href:a,label:t,prependBaseUrlToHref:r,...i}){const c=Object(o.a)(e),m=Object(o.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{href:r?m:a}:{to:c},i),t)}const v=({sources:e,alt:a})=>l.a.createElement(u.a,{className:"footer__logo",alt:a,sources:e});a.a=function(){const{footer:e}=Object(c.useThemeConfig)(),{copyright:a,links:t=[],logo:n={}}=e||{},r={light:Object(o.a)(n.src),dark:Object(o.a)(n.srcDark||n.src)};return e?l.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},t&&t.length>0&&l.a.createElement("div",{className:"row footer__links"},t.map(((e,a)=>l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map(((e,a)=>e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(g,e))))):null)))),(n||a)&&l.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&l.a.createElement("div",{className:"margin-bottom--sm"},n.href?l.a.createElement(s.a,{href:n.href,className:d.a.footerLogoLink},l.a.createElement(v,{alt:n.alt,sources:r})):l.a.createElement(v,{alt:n.alt,sources:r})),a?l.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},138:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(130),i=t(129),s=t(57),c=t.n(s);function o(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},142:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(130),i=t(141),s=t(131),c=t(129),o=t(143),m=t(140),d=t(59),u=t.n(d),g=t(128);a.a=function(e){var a,t,n=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=e.children,v=e.frontMatter,E=e.metadata,p=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,h=E.date,_=E.formattedDate,N=E.permalink,k=E.tags,O=E.readingTime,w=v.author,T=v.title,y=v.image,L=v.keywords,j=v.author_url||v.authorURL,I=v.author_title||v.authorTitle,x=v.author_image_url||v.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:L,image:y}),r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(t=b?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},b?T:r.a.createElement(c.a,{to:N},T)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},_,O&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(O)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:j},r.a.createElement("img",{src:x,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:j},w)),r.a.createElement("small",{className:"avatar__subtitle"},I)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:o.a},d)),(k.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:E.permalink,"aria-label":"Read more about "+T},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(130);var i=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(a),o.classList.add(a),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=t(58),c=t.n(s),o="table-of-contents__link";function m(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return i(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(c.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:a}))}},147:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),l=t(131),i=t(3),s=t(7),c=t(130),o=t(60),m=t.n(o),d=function(e){var a=e.className,t=Object(s.a)(e,["className"]);return r.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(m.a.iconEdit,a),"aria-label":"Edit page"},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var a=e.editUrl;return r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);