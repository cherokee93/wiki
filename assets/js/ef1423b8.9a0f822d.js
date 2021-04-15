(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,a,i){"use strict";i.r(a),i.d(a,"frontMatter",(function(){return l})),i.d(a,"metadata",(function(){return o})),i.d(a,"toc",(function(){return c})),i.d(a,"default",(function(){return m}));var t=i(3),n=i(7),r=(i(0),i(113)),l={title:"Firmware",slug:"/firmware"},o={unversionedId:"firmware",id:"firmware",isDocsHomePage:!1,title:"Firmware",description:"In questa pagina puoi recuperare il firmware per la stampante e le procedure di verifica ed aggiornamento del firmware in uso.",source:"@site/docs/firmware.md",slug:"/firmware",permalink:"/wiki/docs/firmware",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/firmware.md",version:"current",sidebar:"docs",previous:{title:"Calibrazioni",permalink:"/wiki/docs/calibrazioni"}},c=[{value:"Verifica della versione attualmente installata",id:"verifica-della-versione-attualmente-installata",children:[]},{value:"Procedura di aggiornamento",id:"procedura-di-aggiornamento",children:[]},{value:"Aumentare la velocita&#39; di stampa",id:"aumentare-la-velocita-di-stampa",children:[]},{value:"Versioni firmware disponibili",id:"versioni-firmware-disponibili",children:[{value:"Ultima Versione",id:"ultima-versione",children:[]},{value:"Versioni precedenti",id:"versioni-precedenti",children:[]}]},{value:"Link utili",id:"link-utili",children:[]}],s={toc:c};function m(e){var a=e.components,i=Object(n.a)(e,["components"]);return Object(r.a)("wrapper",Object(t.a)({},s,i,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"In questa pagina puoi recuperare il firmware per la stampante e le procedure di verifica ed aggiornamento del firmware in uso."),Object(r.a)("h2",{id:"verifica-della-versione-attualmente-installata"},"Verifica della versione attualmente installata"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},'Dal menu principale della stampante tocca l\'icona "Tool"'),Object(r.a)("li",{parentName:"ol"},'Tocca l\'icona "About"'),Object(r.a)("li",{parentName:"ol"},'Troverai la versione del firmware indicata nella riga "Mainboard version"')),Object(r.a)("h2",{id:"procedura-di-aggiornamento"},"Procedura di aggiornamento"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Scarica il file compresso del firmware"),Object(r.a)("li",{parentName:"ol"},"Estrai il file appena scaricato"),Object(r.a)("li",{parentName:"ol"},"Collega la microSD della stampante al PC/Mac"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"Fai un backup dei file contenuti sulla microSD della stampante")),Object(r.a)("li",{parentName:"ol"},"Copia l'intero contenuto (file e cartelle) all'interno della microSD"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("em",{parentName:"li"},'Opzionale: Se in passato hai effettuato delle modifiche al file di configurazione "robin_nano35_cfg.txt", ricorda di inserire le stesse nel nuovo file, con lo stesso nome, che troverai nella cartella del nuovo firmware')),Object(r.a)("li",{parentName:"ol"},"Spegni la stampante (se accesa)"),Object(r.a)("li",{parentName:"ol"},"Inserisci la microSD nella stampante"),Object(r.a)("li",{parentName:"ol"},"Riaccendi la stampante"),Object(r.a)("li",{parentName:"ol"},"Attendi il caricamento del nuovo firmware"),Object(r.a)("li",{parentName:"ol"},"Concluso l'aggiornamento sullo schermo della stampante visualizzerai il menu iniziale")),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Attenzione: non spegnere per nessun motivo la stampante durante la procedura di aggiornamento!!!")),Object(r.a)("h2",{id:"aumentare-la-velocita-di-stampa"},"Aumentare la velocita' di stampa"),Object(r.a)("p",null,"Il firmware stock limita la velocita' della stampante, che puo' raggiungere accelerazioni piu' elevate"),Object(r.a)("p",null,"Questa limitazione e' la causa principale della discrepanza tra i tempi stimati da cura e quelli effettivi di stampa"),Object(r.a)("p",null,"Per rimuovere le limitazioni, sostituire i seguenti valori nel robin_nano_cgf.txt ed aggiornare il firmware come descritto nella sezione Primi Passi"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"}," >DEFAULT_X_MAX_FEEDRATE        300    #X\xd6\xe1\xc4\xac\xc8\xcf\xcb\xd9\xb6\xc8 (mm/s)\n >DEFAULT_Y_MAX_FEEDRATE        300    #Y\xd6\xe1\xc4\xac\xc8\xcf\xcb\xd9\xb6\xc8 (mm/s)\n >DEFAULT_Z_MAX_FEEDRATE        5    #Z\xd6\xe1\xc4\xac\xc8\xcf\xcb\xd9\xb6\xc8 (mm/s)\n >DEFAULT_E0_MAX_FEEDRATE    100    #E\xd6\xe1\xc4\xac\xc8\xcf\xcb\xd9\xb6\xc8 (mm/s)\n >DEFAULT_E1_MAX_FEEDRATE    70    #E\xd6\xe1\xc4\xac\xc8\xcf\xcb\xd9\xb6\xc8 (mm/s)\n >DEFAULT_X_MAX_ACCELERATION    1000    #X\xd6\xe1\xc4\xac\xc8\xcf\xd7\xee\xb4\xf3\xbc\xd3\xcb\xd9\xb6\xc8 (change/s) change = mm/s\n >DEFAULT_Y_MAX_ACCELERATION    1000    #Y\xd6\xe1\xc4\xac\xc8\xcf\xd7\xee\xb4\xf3\xbc\xd3\xcb\xd9\xb6\xc8 (change/s) change = mm/s\n >DEFAULT_Z_MAX_ACCELERATION    200    #Z\xd6\xe1\xc4\xac\xc8\xcf\xd7\xee\xb4\xf3\xbc\xd3\xcb\xd9\xb6\xc8 (change/s) change = mm/s\n >DEFAULT_E0_MAX_ACCELERATION    80000    #E\xd6\xe1\xc4\xac\xc8\xcf\xd7\xee\xb4\xf3\xbc\xd3\xcb\xd9\xb6\xc8 (change/s) change = mm/s\n >DEFAULT_E1_MAX_ACCELERATION    1000    #E\xd6\xe1\xc4\xac\xc8\xcf\xd7\xee\xb4\xf3\xbc\xd3\xcb\xd9\xb6\xc8 (change/s) change = mm/s\n >DEFAULT_ACCELERATION        1000    #X,Y,Z,E \xb4\xf2\xd3\xa1\xca\xb1\xb5\xc4\xc4\xac\xc8\xcf\xbc\xd3\xcb\xd9\xb6\xc8\n >DEFAULT_RETRACT_ACCELERATION    3000    #X,Y,Z,E \xbb\xd8\xb3\xe9\xc4\xac\xc8\xcf\xbc\xd3\xcb\xd9\xb6\xc8\n >DEFAULT_TRAVEL_ACCELERATION    1000    #X,Y,Z \xb7\xc7\xb4\xf2\xd3\xa1\xca\xb1\xb5\xc4\xc4\xac\xc8\xcf\xbc\xd3\xcb\xd9\xb6\xc8\n >DEFAULT_MINIMUMFEEDRATE    0.0    #\xc4\xac\xc8\xcf\xd7\xee\xd0\xa1\xcb\xd9\xb6\xc8\n >DEFAULT_MINSEGMENTTIME        20000    #\xbb\xba\xb4\xe6\xbf\xd5\xca\xb1\xa3\xac\xd2\xbb\xb8\xf6\xd2\xc6\xb6\xaf\xcb\xf9\xd0\xe8\xb5\xc4\xd7\xee\xd0\xa1\xca\xb1\xbc\xe4(\xb5\xa5\xce\xbbms). \n >DEFAULT_MINTRAVELFEEDRATE    0.0    #\n")),Object(r.a)("h2",{id:"versioni-firmware-disponibili"},"Versioni firmware disponibili"),Object(r.a)("h3",{id:"ultima-versione"},"Ultima Versione"),Object(r.a)("p",null,"[https://cdn.discordapp.com/attachments/748683783053508608/765342649254281256/Ghost_5_firmware_V5-8.zip FlyingBear Ghost 5 v5.8]"),Object(r.a)("p",null,"[https://drive.google.com/file/d/1vDnWWdbUTEPOXtujBzZlqj_kYj7JfvA9/view?usp=drivesdk Flying Bear Ghost 4S/5 - V3.5.1]"),Object(r.a)("h3",{id:"versioni-precedenti"},"Versioni precedenti"),Object(r.a)("p",null,"[https://mega.nz/file/eSJjxaTI#JxVVNFDUrNq81HcS4XBuU9win8FDVtE-zTfRjMibIr8 Flying Bear Ghost 4S - V3.3]"),Object(r.a)("p",null,"[https://mega.nz/file/LTBXFICC#BSS9NieEZ_wKpGZhmtdu53qSCL3aKAt4C2mj3HF57tA Flying Bear Ghost 4S - V3.1]"),Object(r.a)("p",null,"[https://mega.nz/file/PDBXRYxZ#GvwkgY8vtL3-vpMNp3M9hTMODYWC7_Uf6s0ftMhUoXc Flying Bear Ghost 4S - V3]"),Object(r.a)("p",null,"[https://mega.nz/file/nWY31SKC#02tis-dXOA0T-f3d91e1os5ZQaT_qf-2zK_8AtFIhZc Flying Bear Ghost 4S - V2]"),Object(r.a)("h2",{id:"link-utili"},"Link utili"),Object(r.a)("p",null,'[https://youtu.be/YxKrXQ3jQcA Video-guida "Ghost 4S Firmware Upload Flying Bear" su YouTube]'))}m.isMDXComponent=!0},113:function(e,a,i){"use strict";i.d(a,"a",(function(){return d}));var t=i(0),n=i.n(t);function r(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function l(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?l(Object(i),!0).forEach((function(a){r(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function c(e,a){if(null==e)return{};var i,t,n=function(e,a){if(null==e)return{};var i,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),m=function(e){var a=n.a.useContext(s),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var i=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(i),d=t,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return i?n.a.createElement(f,o(o({ref:a},s),{},{components:i})):n.a.createElement(f,o({ref:a},s))}));function d(e,a){var i=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);