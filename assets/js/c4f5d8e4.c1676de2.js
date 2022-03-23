/*! For license information please see c4f5d8e4.c1676de2.js.LICENSE.txt */
(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[195,535],{4823:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(7294),n=a(6010),i=a(9974),l=a(9960),s=a(2263),o=a(4996),c="heroBanner_4JBe",m="card_skNW",u="mainCardColumn_X1Sj",d=a(3117),p=a(102),f=a(4036),g=a.n(f),h=r.createContext({});h.Consumer,h.Provider;function v(e,t){var a=(0,r.useContext)(h);return e||a[t]||t}var b=["bsPrefix","className","noGutters","as"],y=["xl","lg","md","sm","xs"],E=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.noGutters,l=e.as,s=void 0===l?"div":l,o=(0,p.Z)(e,b),c=v(a,"row"),m=c+"-cols",u=[];return y.forEach((function(e){var t,a=o[e];delete o[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+m+r+"-"+t)})),r.createElement(s,(0,d.Z)({ref:t},o,{className:g().apply(void 0,[n,c,i&&"no-gutters"].concat(u))}))}));E.displayName="Row",E.defaultProps={noGutters:!1};var x=E,k=["bsPrefix","className","as"],N=["xl","lg","md","sm","xs"],S=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,l=void 0===i?"div":i,s=(0,p.Z)(e,k),o=v(a,"col"),c=[],m=[];return N.forEach((function(e){var t,a,r,n=s[e];if(delete s[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&c.push(!0===t?""+o+l:""+o+l+"-"+t),null!=r&&m.push("order"+l+"-"+r),null!=a&&m.push("offset"+l+"-"+a)})),c.length||c.push(o),r.createElement(l,(0,d.Z)({},s,{ref:t,className:g().apply(void 0,[n].concat(c,m))}))}));S.displayName="Col";var Z=S,w=a(5641);function C(e){var t=e.title,a=e.img,n=e.description,i=e.href;return r.createElement(Z,{className:u},r.createElement("h1",{style:{fontSize:24}}," ",r.createElement(l.Z,{to:i},t)),a&&r.createElement("div",{style:{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20}},r.createElement("img",{src:(0,o.Z)(a)})),r.createElement("p",{style:{color:"white",marginBottom:0}},n))}var _=function(){return(0,s.Z)().siteConfig,r.createElement(i.Z,{title:"datacraft - the club for data scientists",description:"datacraft - the club for data scientists. Inside the community",keywords:["datacraft","club","community","Data Science","Machine Learning","Artificial Intelligence"]},r.createElement("header",{className:(0,n.Z)("hero hero--primary",c),style:{backgroundImage:"url("+(0,o.Z)("img/HomePageIllustration6.jpg")+")",backgroundSize:"cover",backgroundPosition:"bottom",minHeight:"calc(100vh - 300px)",zIndex:-1}},r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement("h1",{className:"hero__subtitle",style:{color:"#0b7c39",textAlign:"center"}},r.createElement("img",{src:"img/datacraft_logo_full.png",alt:" ",width:"350",height:"55"})),r.createElement("h1",{className:"hero__subtitle",style:{color:"#004c23",fontSize:"50px",textAlign:"center"}},"Welcome to datacraft's blog!"),r.createElement("p",{className:"hero__subtitle",style:{color:"#004c23",marginBottom:0,fontSize:"40px",textAlign:"center"}},"Inside the data scientists\u2019 community"))),r.createElement("main",{style:{marginTop:"70px"}},r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement(x,null,r.createElement(C,{title:"Blog",href:"/blog",img:"img/icons/datacraft blog petit.png",description:"Browse our latest articles and experiments on data science & AI"}),r.createElement(C,{title:"Open Source",href:"/opensource",img:"img/icons/datacraft open source petit.png",description:"Discover our open source contributions to the data science community"}))),r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement(x,null,r.createElement(C,{title:"Our latest blog posts",href:"/blog",description:r.createElement(r.Fragment,null,r.createElement("ul",{style:{listStyleType:"none",padding:0,margin:0}},w.items.slice(0,5).map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:""+e.permalink},e.title))}))))})))))}},4036:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&e.push(l)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)r.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},5641:function(e){"use strict";e.exports=JSON.parse('{"title":"Recent posts","items":[{"title":"Comment veiller \xe0 ce que les biais humains n\u2019impr\xe8gnent pas les algorithmes ?","permalink":"/blog/biais-humains-et-algorithmes"},{"title":"Few Shot Learning - application de la m\xe9thode iPET","permalink":"/blog/draft"},{"title":"L\u2019artisanat de la science des donn\xe9es avec datacraft","permalink":"/blog/datacraft-binaire"},{"title":"Classification des mains de scribes assist\xe9e par l\u2019intelligence artificielle","permalink":"/blog/egyptologie"},{"title":"datacraft - un club d\xe9di\xe9 \xe0 la data science et l\u2019Intelligence Artificielle","permalink":"/blog/datacraft"}]}')}}]);