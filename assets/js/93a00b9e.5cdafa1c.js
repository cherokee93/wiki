(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var l=a(0),n=a.n(l),r=a(134);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=a(4),s=(a(102),a(103),[{title:"Molle Rigide",imgSrc:"",desc:"Testo 5",link:"https://a.aliexpress.com/_BOJ6kD",img:"/static/img/molleRigide.jpg",description:"Diciamocelo: a nessuno piace perdere tempo a livellare il piatto...\nLe molle rigide servono a mantenere il piatto pi\xf9 stabile e a non farlo scalibrare tanto velocemente quanto le molle originali"}]),c=function(e){var t=e.handleClose,a=e.show,l=e.children,r=a?"modal display-block":"modal display-none";return n.a.createElement("div",{className:r},n.a.createElement("section",{className:"modal-main"},l,n.a.createElement("button",{type:"button",onClick:t},"Chiudi")))},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={show:!1},a.props=t,a.showModal=a.showModal.bind(o(a)),a.hideModal=a.hideModal.bind(o(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.showModal=function(){this.setState({show:!0})},a.hideModal=function(){console.log("clicked"),this.setState({show:!1})},a.render=function(){return n.a.createElement("div",{className:"upgradeItemContainer"},n.a.createElement("div",{className:"upgradeItem",onClick:this.showModal},n.a.createElement("span",{className:"upgradeItemTitle"},this.props.title),n.a.createElement("div",{className:"upgradeItemInfo"},n.a.createElement("img",{className:"upgradeItemImg",src:"https://via.placeholder.com/170"}),n.a.createElement("p",{className:"upgradeItemDescription"},this.props.description))),n.a.createElement(c,{show:this.state.show,handleClose:this.hideModal},n.a.createElement("h1",{className:"title"},this.props.title),n.a.createElement("div",{className:"infoContainer"},n.a.createElement("img",{width:"200",height:"200",src:this.props.img}),n.a.createElement("p",{className:"description"},this.props.detailedDescription)),n.a.createElement("a",{className:"link",href:this.props.link,target:"_blank"},"Link")))},t}(n.a.Component),d=function(e){function t(t){var a;return a=e.call(this,t)||this,console.log(s),a}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement("div",{id:"upgradeItems"},s.map((function(e){return n.a.createElement(m,{title:e.title,description:e.desc,link:e.link,img:e.img,detailedDescription:e.description})})))},t}(n.a.Component);function p(){return n.a.createElement(r.a,null,n.a.createElement(d,null))}},135:function(e,t,a){"use strict";var l=a(3),n=a(0),r=a.n(n),o=a(133),i=a(128),s=a(127),c=a(131),m=a(56),d=a.n(m),p=a(132);function h({to:e,href:t,label:a,prependBaseUrlToHref:n,...o}){const s=Object(c.a)(e),m=Object(c.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(i.a,Object(l.a)({className:"footer__link-item"},t?{href:n?m:t}:{to:s},o),a)}const u=({sources:e,alt:t})=>r.a.createElement(p.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:l={}}=e||{},n={light:Object(c.a)(l.src),dark:Object(c.a)(l.srcDark||l.src)};return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(h,e))))):null)))),(l||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},l.href?r.a.createElement(i.a,{href:l.href,className:d.a.footerLogoLink},r.a.createElement(u,{alt:l.alt,sources:n})):r.a.createElement(u,{alt:l.alt,sources:n})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);