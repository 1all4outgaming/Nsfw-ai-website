(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9484],{5354:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/[slug]",function(){return i(9614)}])},1641:function(e,t,i){"use strict";var s=i(5893),n=i(4449),l=i(5675),r=i.n(l),a=i(1664),d=i.n(a);let c=()=>{let e=["placeholder1.png","placeholder2.png","placeholder3.png","placeholder4.png","placeholder5.png","placeholder6.png"],t=Math.floor(Math.random()*e.length),i=e[t];return"/images/".concat(i)},o=e=>{var t,i;let{post:l}=e;return(0,s.jsxs)("div",{role:"listitem",className:"w-dyn-item blog-link-v1 w-inline-block",children:[(0,s.jsx)("div",{children:(0,s.jsx)(d(),{id:"a-"+l.slug,"data-w-id":"a1bbe817-8d7e-b731-576a-efedb2d2c0ea",href:"/"+l.slug,children:(0,s.jsx)(r(),{src:null==l?void 0:null===(t=l.featuredImage)||void 0===t?void 0:t.sourceUrl,alt:l.title,width:100,height:400,sizes:"(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 388px",srcSet:null==l?void 0:null===(i=l.featuredImage)||void 0===i?void 0:i.srcSet,className:"_w-h-100",id:l.id,onError:e=>{e.preventDefault(),e.target.src=c()}})})}),(0,s.jsxs)("div",{className:"blog-content",children:[(0,s.jsx)("div",{className:"mg-bottom-24px",children:l.categories.length&&l.categories.map(e=>(0,s.jsx)("div",{className:"badge-primary",children:(0,s.jsx)("div",{className:"flex-horizontal start gap-6px",children:(0,s.jsx)("div",{children:(0,s.jsx)(d(),{href:"/category/"+e.slug,children:e.name})})})},e.id))}),(0,s.jsx)("p",{className:"display-4 mg-bottom-16px",children:(0,s.jsx)(d(),{id:"a-"+l.slug,"data-w-id":"a1bbe817-8d7e-b731-576a-efedb2d2c0ea",href:"/"+l.slug,children:l.title})}),(0,s.jsx)("div",{className:"blog-information",children:(0,s.jsx)("div",{className:"text-200 color-neutral-600",children:(0,n.p)(l.date)})})]})]})};t.Z=o},4449:function(e,t,i){"use strict";i.d(t,{p:function(){return n},v:function(){return l}});var s=i(2167);function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"PPP";return(0,s.Z)(new Date(e),t)}function l(e){let{key:t="date"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.sort((e,i)=>new Date(i[t])-new Date(e[t]))}},9614:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return S},default:function(){return I}});var s=i(5893),n=i(8357),l=i(3255),r=i(3918),a=i(9474),d=i.n(a);let c=e=>{let{className:t,title:i,thumbnail:n}=e,l=new r.Z(d().title);return l.addIf(t,t),(0,s.jsxs)("div",{className:l.toString(),children:[n&&(0,s.jsx)("img",{src:n.url,alt:"","aria-hidden":"true"}),(0,s.jsx)("span",{children:i})]})};var o=i(4593),h=i(3625),u=i(1127),x=i(1938),g=i(4695),p=i(7299),j=i(6289),m=i(7018);i(6301);var v=i(7294),f=i(8533),w=i(5988),N=i.n(w),b=i(1641),_=i(1972);let Z={};function y(e){let{title:t="Archive",avatar:i,posts:l,postOptions:r=Z,slug:a,metadata:d,pageInfo:c}=e,{metadata:w={}}=(0,u.ZP)(),[y,S]=(0,v.useState)(l),[I,P]=(0,v.useState)((null==c?void 0:c.hasNextPage)||!1),[E,T]=(0,v.useState)(c),[k,D]=(0,v.useState)(!1),A=async()=>{if(!k&&I){D(!0);try{let e=(null==E?void 0:E.endCursor)||"",t=await (0,_.DI)({slug:a,first:9,after:e});0===t.posts.length?P(!1):(T(t.pageInfo),S(e=>[...e,...t.posts]))}catch(e){console.error("Error fetching more archive data:",e)}finally{D(!1)}}};d.title="".concat(t," - ").concat(w.title),d.og.title=d.title,d.twitter.title=d.title;let C=(0,h.iB)(d);return(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(o.q,{...C}),(0,s.jsx)(n.PA,{title:t,description:d.description,siteTitle:w.title,slug:a}),(0,s.jsx)(g.Z,{children:(0,s.jsxs)("div",{className:N().authorContainer,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:null==i?void 0:i.url,alt:a,width:"150px",height:"100px"})}),(0,s.jsxs)("div",{className:N().innerContainer,children:[(0,s.jsx)("h1",{className:N().title,children:t}),(0,s.jsxs)("ul",{className:N().userInfo,children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Job Title:"})," Editor"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Resides In:"})," Newport, Wales, United Kingdom"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Alumni:"})," Aberystwyth University"]})]})]})]})}),(0,s.jsx)("div",{className:N().border}),(0,s.jsx)(p.Z,{children:(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsxs)("strong",{children:["About ",t]})}),d.description&&(0,s.jsx)("p",{className:N().archiveDescription,dangerouslySetInnerHTML:{__html:d.description}})]})}),(0,s.jsx)(p.Z,{children:(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsxs)("strong",{children:["Posts by ",t]})}),(0,s.jsx)(f.Z,{dataLength:y.length,next:A,hasMore:I,loader:(0,s.jsx)("h4",{children:"Loading..."}),children:(0,s.jsx)("ul",{className:N().posts,children:y.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(b.Z,{post:e,options:r},e.id)},e.slug))})})]})})]})}var S=!0;function I(e){var t;let{user:i,posts:r,pageInfo:a}=e,{title:d,name:o,avatar:h,description:u,slug:x}=i,{metadata:g}=(0,l.Z)({metadata:{...i,title:d,description:u||(null===(t=i.og)||void 0===t?void 0:t.description)||"Read ".concat(r.length," posts from ").concat(o)}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Yh,{author:i}),(0,s.jsx)(y,{title:o,avatar:h,Title:(0,s.jsx)(c,{title:o,thumbnail:h}),posts:r,postOptions:{excludeMetadata:["author"]},slug:x,metadata:g,pageInfo:a})]})}},9474:function(e){e.exports={title:"Title_title__RWKyi"}}},function(e){e.O(0,[6158,6556,5675,1664,8519,2167,4510,1938,1972,4929,9774,2888,179],function(){return e(e.s=5354)}),_N_E=e.O()}]);