(this.webpackJsonprodrigobosarreyes=this.webpackJsonprodrigobosarreyes||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(14),s=n.n(i),r=(n(42),n(43),n(5)),l=n(6),o=n(8),d=n(7),j=(n(44),n(12)),m=n(11),h=(n(49),n(1)),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"card__container",children:[Object(h.jsx)("div",{className:"icon__container",children:this.props.icon}),Object(h.jsx)("div",{className:"title",children:this.props.title}),Object(h.jsx)("div",{className:"description",children:this.props.description})]})}}]),n}(c.Component),u=(n(51),n.p+"static/media/leyo.dc685f62.jpeg"),p=(n(52),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"skills__container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"skill__header offset-3 col",children:[Object(h.jsx)("span",{children:"Basic"}),Object(h.jsx)("span",{children:"Good"}),Object(h.jsx)("span",{children:"Expert"}),Object(h.jsx)("span",{children:"Specialist"})]})}),this.props.skills.map((function(e,t){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"skill__label col-3",children:e.name}),Object(h.jsxs)("div",{className:"skill__value col",children:[Object(h.jsx)("div",{className:"bar"}),Object(h.jsx)("div",{className:"line__"+e.level})]})]},t)}))]})}}]),n}(c.Component)),v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).designIcon=Object(h.jsx)(m.a,{icon:j.e,className:"feature_card__icon"}),c.remoteIcon=Object(h.jsx)(m.a,{icon:j.d,className:"feature_card__icon"}),c.businessIcon=Object(h.jsx)(m.a,{icon:j.b,className:"feature_card__icon"}),c.flexIcon=Object(h.jsx)(m.a,{icon:j.c,className:"feature_card__icon"}),c.cards=[{icon:c.designIcon,title:"Design",description:"Create a website that strengthens your company's brand while ensuring ease of use and simplicity."},{icon:c.remoteIcon,title:"Teleworking",description:"Availability to work remotely, I have worked remotly for more than two years."},{icon:c.businessIcon,title:"Business",description:"Translating your business logics into secure and maintainable code."},{icon:c.flexIcon,title:"Flexibility",description:"I'm able to adapt my schedule to the project's needs"}],c.skills=[{name:"Angular",level:100},{name:"React",level:50},{name:"Typescript",level:75},{name:"Javascript",level:75},{name:"Bootstrap",level:75},{name:"HTML/CSS",level:100},{name:"NodeJS",level:50},{name:"Python",level:75},{name:"Java",level:100}],c.years=(new Date).getFullYear()-2019,c.skills.sort((function(e,t){return t.level-e.level})),c}return Object(l.a)(n,[{key:"generateAnchor",value:function(e,t){return Object(h.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:t})}},{key:"render",value:function(){return Object(h.jsxs)("section",{id:"about",className:"container",children:[Object(h.jsx)("h2",{children:"ABOUT"}),Object(h.jsx)("div",{className:"feauture__container row",children:this.cards.map((function(e){return Object(h.jsx)("div",{className:"col col-lg-3 mb-4",children:Object(h.jsx)(b,{icon:e.icon,title:e.title,description:e.description})})}))}),Object(h.jsxs)("div",{className:"personal_info__container row justify-content-center",children:[Object(h.jsxs)("article",{className:"col-12 col-lg-6",children:[Object(h.jsx)("div",{className:"image__container",children:Object(h.jsx)("img",{src:u,alt:"Selfie :)"})}),Object(h.jsxs)("div",{className:"text__container mt-3 px-3",children:[Object(h.jsx)("h3",{className:"text-center",children:"Who I am?"}),Object(h.jsxs)("p",{className:"",children:["I'm a full-stack developer for ",Object(h.jsx)("a",{href:"https://www.nttdata.com/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("strong",{children:"NTT DATA "})}),"since 2019 in Salamanca, Spain. During these ",this.years," years I have been able to successfully face multiple challengers which range from developing a Landing Page, to leading an entire team, through the development of corporative web applications in which I have had the opportunity to experiment with technologies such as ",this.generateAnchor("https://angular.io/","Angular"),", ",this.generateAnchor("https://www.java.com/en/download/help/whatis_java.html","Java"),", \xa0",this.generateAnchor("https://www.python.org/","Python")," and ",this.generateAnchor("https://www.docker.com/","Docker"),". As you can see, I'm passionate about technology, I love creating new products and I enjoy its process. Also I like to share my knowledge with everyone, I'm an open book!."]})]})]}),Object(h.jsx)("article",{className:"col-12 col-lg-6 align-self-center",children:Object(h.jsx)("div",{className:"skills__container",children:Object(h.jsx)(p,{skills:this.skills})})})]})]})}}]),n}(c.Component),f=n(21),O=(n(60),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("button",{className:"dark",children:[this.props.text," ",this.props.icon]})}}]),n}(c.Component)),x=n(35),g=n.n(x),y=(n(61),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).icon=Object(h.jsx)(m.a,{icon:j.a}),e.nouns=["Rodrigo Bosarreyes","a Full-Stack Developer","a Software Designer","a Mentor"],e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"home-container",className:"home_page__container",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row h-100 align-items-center",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsxs)("h1",{children:["I'm ",Object(h.jsx)(g.a,{options:{strings:this.nouns,loop:!0,autoStart:!0}})]}),Object(h.jsx)("div",{className:"btn-container",children:Object(h.jsx)(f.Link,{activeClass:"active",spy:!0,smooth:!0,duration:500,to:"projects",children:Object(h.jsx)(O,{text:"View my work",icon:this.icon})})})]})})}),Object(h.jsx)("div",{className:"light x1"}),Object(h.jsx)("div",{className:"light x2"}),Object(h.jsx)("div",{className:"light x3"}),Object(h.jsx)("div",{className:"light x4"}),Object(h.jsx)("div",{className:"light x5"}),Object(h.jsx)("div",{className:"light x6"}),Object(h.jsx)("div",{className:"light x7"}),Object(h.jsx)("div",{className:"light x8"}),Object(h.jsx)("div",{className:"light x9"})]})}}]),n}(c.Component)),k=n(71),_=n(72),N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).links=[{label:"Home",link:"home-container"},{label:"About",link:"about"},{label:"Projects",link:"projects"},{label:"Blog",link:"blog"},{label:"Contact",link:"contact"}],window.onscroll=function(){var e=document.getElementById("home-container")||{offsetHeight:0};if(window.scrollY>e.offsetHeight){var t,n;null===(t=document.getElementById("home-navbar"))||void 0===t||t.classList.add("fixed-top");var c=null===(n=document.getElementById("home-navbar"))||void 0===n?void 0:n.offsetHeight;document.body.style.paddingTop=c+"px"}else{var a;null===(a=document.getElementById("home-navbar"))||void 0===a||a.classList.remove("fixed-top"),document.body.style.paddingTop="0"}},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"home_navbar__container bg-dark",children:[Object(h.jsx)("style",{type:"text/css",children:"\n          .my-link {\n            padding: 0 15px;\n            color: white;\n            font-weight: 400;\n            text-decoration: none;\n          }\n          .my-link:hover,\n          .my-link.active {\n            color: #c7493a;\n            font-weight: 600;\n            text-decoration: none;\n          }\n          "}),Object(h.jsx)("div",{className:"container navbar-container",children:Object(h.jsxs)(k.a,{bg:"dark",expand:"lg",id:"home-navbar",variant:"dark",style:{fontSize:"1.7rem"},children:[Object(h.jsx)(k.a.Brand,{href:"#",style:{fontSize:"1.7rem"},children:"Rodrigo Bosarreyes"}),Object(h.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsx)(_.a,{className:"mr-auto",children:this.links.map((function(e){return Object(h.jsx)(f.Link,{className:"my-link",activeClass:"active",spy:!0,smooth:!0,duration:500,to:e.link,children:e.label},e.link)}))})})]})})]})}}]),n}(c.Component),w=(n(65),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).arrowIcon=Object(h.jsx)(m.a,{icon:j.a,className:"rb__icon"}),e.cancelIcon=Object(h.jsx)(m.a,{icon:j.f,className:"cancel__icon"}),e.onClickCancel=function(){var t=document.getElementById(e.props.idArrElement),n=document.getElementById(e.props.idLeftElement);null===t||void 0===t||t.classList.remove("active_arr"),(null===n||void 0===n?void 0:n.classList.contains("active"))&&(n.classList.remove("active"),n.classList.add("off"))},e.onClickArrow=function(){var t=document.getElementById(e.props.idArrElement),n=document.getElementById(e.props.idLeftElement);null===t||void 0===t||t.classList.add("arr_container"),(null===n||void 0===n?void 0:n.classList.contains("off"))&&(n.classList.remove("off"),n.classList.add("active"))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"project_card__container center",children:Object(h.jsxs)("div",{className:"project_card__content center",style:{backgroundImage:"url(".concat(this.props.imgUrl,")")},children:[Object(h.jsx)("div",{className:"arr_container center",id:this.props.idArrElement,onClick:this.onClickArrow,children:this.arrowIcon}),Object(h.jsxs)("div",{className:"left_container off",id:this.props.idLeftElement,children:[Object(h.jsx)("p",{children:"Skills"}),Object(h.jsx)("div",{className:"cancel center",onClick:this.onClickCancel,children:this.cancelIcon})]})]})})}}]),n}(c.Component)),I=(n(66),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).projects=[{idArrElement:"arr-1",idLeftElement:"left-1",imgUrl:"https://dummyimage.com/601x400/000/fff"},{idArrElement:"arr-2",idLeftElement:"left-2",imgUrl:"https://dummyimage.com/602x400/000/fff"},{idArrElement:"arr-3",idLeftElement:"left-3",imgUrl:"https://dummyimage.com/603x400/000/fff"},{idArrElement:"arr-4",idLeftElement:"left-4",imgUrl:"https://dummyimage.com/604x400/000/fff"},{idArrElement:"arr-5",idLeftElement:"left-5",imgUrl:"https://dummyimage.com/605x400/000/fff"},{idArrElement:"arr-6",idLeftElement:"left-6",imgUrl:"https://dummyimage.com/606x400/000/fff"}],e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"bg-gray",children:Object(h.jsxs)("section",{id:"projects",className:"container",children:[Object(h.jsx)("h2",{children:"PROJECTS"}),Object(h.jsx)("div",{className:"projects__content row no-gutters",children:this.projects.map((function(e){return Object(h.jsx)("div",{className:"col my-3",children:Object(h.jsx)(w,{idArrElement:e.idArrElement,idLeftElement:e.idLeftElement,imgUrl:e.imgUrl})},e.idArrElement)}))})]})})}}]),n}(c.Component)),E=(n(67),function(e){e.props;return Object(h.jsx)("section",{id:"blog",children:Object(h.jsx)("h2",{children:"BLOG"})})}),A=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),n}(c.Component),C=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(N,{}),Object(h.jsx)(v,{}),Object(h.jsx)(I,{}),Object(h.jsx)(E,{}),Object(h.jsx)(A,{})]})]})}}]),n}(c.Component);var L=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(C,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),B()}},[[68,1,2]]]);
//# sourceMappingURL=main.4d21a49f.chunk.js.map