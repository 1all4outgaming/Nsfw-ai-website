(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4929],{6289:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),a=n(3918),i=n(9769),c=n.n(i);let o=t=>{let{children:e,className:n}=t,i=new a.Z(c().container);return i.addIf(n,n),(0,r.jsx)("div",{className:i.toString(),children:e})};var s=o},4695:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),a=n(6289),i=n(8437),c=n.n(i);let o=t=>{let{children:e}=t;return(0,r.jsx)("header",{className:c().header,children:(0,r.jsx)(a.Z,{children:e})})};var s=o},6301:function(t,e,n){"use strict";var r=n(5893),a=n(1664),i=n.n(a),c=n(4147),o=n(4593),s=n(5155),l=n(3854),u=n(3498),d=n.n(u);let{homepage:h=""}=c,p=t=>{let{pagesCount:e,currentPage:n,basePath:a,addCanonical:c=!0}=t,u="".concat(a,"/page/"),p=e>1&&n>1,f=e>1&&n<e,g=!1,v=!1,_=function(){let t=e,r=0;if(e>9){t=9;let a=Math.ceil(4.5),i=n>e-a;v=!i,n<=a||(g=!0,r=i?e-9:n-a)}return[...Array(t)].map((t,e)=>e+1+r)}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.q,{children:[(0,r.jsx)("meta",{name:"robots",content:"noindex, follow"}),c&&!p&&(0,r.jsx)("link",{rel:"canonical",href:"".concat(h).concat(a)}),p&&(0,r.jsx)("link",{rel:"prev",href:"".concat(h).concat(u).concat(n-1)}),f&&(0,r.jsx)("link",{rel:"next",href:"".concat(h).concat(u).concat(n+1)})]}),(0,r.jsxs)("nav",{className:d().nav,role:"navigation","aria-label":"Pagination Navigation",children:[p&&(0,r.jsxs)(i(),{className:d().prev,href:"".concat(u).concat(n-1),"aria-label":"Goto Previous Page",children:[(0,r.jsx)(s.Ugn,{})," Previous"]}),(0,r.jsxs)("ul",{className:d().pages,children:[g&&(0,r.jsx)("li",{className:d().dots,children:(0,r.jsx)(l.Ws$,{"aria-label":"Navigation to pages 1-".concat(_[0]-1," hidden")})}),_.map(t=>t===n?(0,r.jsx)("li",{children:(0,r.jsx)("span",{className:d().active,"aria-label":"Current Page, Page ".concat(t),"aria-current":"true",children:t})},t):(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(u).concat(t),"aria-label":"Goto Page ".concat(t),children:(0,r.jsx)("span",{children:t})})},t)),v&&(0,r.jsx)("li",{className:d().dots,children:(0,r.jsx)(l.Ws$,{"aria-label":"Navigation to pages ".concat(_[_.length-1]+1,"-").concat(e," hidden")})})]}),f&&(0,r.jsxs)(i(),{className:d().next,href:"".concat(u).concat(n+1),"aria-label":"Goto Next Page",children:["Next ",(0,r.jsx)(s.ULj,{})]})]})]})};e.Z=p},7299:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),a=n(3918),i=n(2542),c=n.n(i);let o=t=>{let{children:e,className:n,...i}=t,o=new a.Z(c().section);return o.addIf(n,n),(0,r.jsx)("section",{className:o.toString(),...i,children:e})};var s=o},7018:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(5893),a=n(720),i=n.n(a);let c=t=>{let{children:e}=t;return(0,r.jsx)("h2",{className:i().sectionTitle,children:e})};var o=c},4831:function(t,e,n){"use strict";function r(t){return t.replace(/https?:\/\/(?:pmdw9gqd5at4\.)?whatsthebigdata\.com/g,"https://whatsthebigdata.com")}n.d(e,{Z:function(){return r}})},3255:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(7294),a=n(1163),i=n(1127),c=n(3625);function o(t){let{metadata:e}=t,{homepage:n,metadata:o}=(0,r.useContext)(i.DN),s=(0,a.useRouter)(),l=(0,c.z0)(o,e,{homepage:n,router:s});return{metadata:l}}},8357:function(t,e,n){"use strict";n.d(e,{PA:function(){return u},Yh:function(){return d},dX:function(){return l}});var r=n(5893),a=n(4593),i=n(2797);n(1972);var c=n(7345),o=n(4147),s=n(4831);function l(t){let{post:e={},siteTitle:n=""}=t,{homepage:i="",faviconPath:c="/favicon.ico"}=o,{title:l,slug:u,excerpt:d,date:h,author:p,categories:f,modified:g,featuredImage:v,uri:_}=e,m=!!h&&new Date(h),x=!!g&&new Date(g),j={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"".concat(i).concat(_)},headline:l,image:[null==v?void 0:v.sourceUrl],datePublished:m?m.toISOString():"",dateModified:x?x.toISOString():m.toISOString(),description:d?(0,s.Z)(d):"",keywords:[null==f?void 0:f.map(t=>{let{name:e}=t;return"".concat(e)}).join(", ")],copyrightYear:m?m.getFullYear():"",author:{"@type":"Person",name:null==p?void 0:p.name},publisher:{"@type":"Organization",name:n,logo:{"@type":"ImageObject",url:"".concat(i).concat(c)}}};return(0,r.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(j)})})}function u(t){let{title:e="",description:n="",siteTitle:i="",slug:s=""}=t,{homepage:l=""}=o,u=(0,c.yA)(s),d={"@context":"http://schema.org","@type":"WebPage",name:e,description:n,url:"".concat(l).concat(u),publisher:{"@type":"ProfilePage",name:i}};return(0,r.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(d)})})}function d(t){let{author:e={}}=t,{homepage:n=""}=o,{name:c,avatar:s,description:l}=e,u=(0,i.h$)(c),d={"@context":"https://schema.org","@type":"Person",name:c,image:null==s?void 0:s.url,url:"".concat(n).concat(u),description:l};return(0,r.jsx)(a.q,{encodeSpecialCharacters:!1,children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(d)})})}},3918:function(t,e){"use strict";e.Z=class{add(t){return Array.isArray(t)||(t=[t]),this.base=[...this.base,...t],this}addIf(t,e){return e&&this.add(t),this}toString(){return this.base.join(" ")}constructor(t){this.base=t,Array.isArray(t)||(this.base=[this.base])}}},9769:function(t){t.exports={container:"Container_container__jY5v0"}},8437:function(t){t.exports={container:"Header_container__FGbDi",header:"Header_header__NLhag"}},3498:function(t){t.exports={nav:"Pagination_nav__6M51B",active:"Pagination_active__zxT4y",pages:"Pagination_pages__hZbzz",prev:"Pagination_prev__En2ts",dots:"Pagination_dots__B1lgQ"}},2542:function(t){t.exports={section:"Section_section___TusU"}},720:function(t){t.exports={sectionTitle:"SectionTitle_sectionTitle__cMUQy"}},5988:function(t){t.exports={archiveDescription:"Archive_archiveDescription__SQ5vU",authorContainer:"Archive_authorContainer__lu4en",innerContainer:"Archive_innerContainer__zoLnW",posts:"Archive_posts__xVaxD",body:"Archive_body__zmW10",userInfo:"Archive_userInfo__SbbmP",border:"Archive_border__lhVNG"}},5177:function(t,e,n){"use strict";n.d(e,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)0>e.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};function s(t){return function(e){return r.createElement(l,c({attr:c({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return r.createElement(e.tag,c({key:n},e.attr),t(e.child))})}(t.child))}}function l(t){var e=function(e){var n,a=t.attr,i=t.size,s=t.title,l=o(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,l,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),t.children)};return void 0!==i?r.createElement(i.Consumer,null,function(t){return e(t)}):e(a)}}}]);