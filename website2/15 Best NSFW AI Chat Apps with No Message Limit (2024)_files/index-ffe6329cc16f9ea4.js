(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5901)}])},4936:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var s=a(5893),i=a(7294),r=a(5675),n=a.n(r),l=a(1664),c=a.n(l),o=a(7632);let d=e=>{let t=e.featuredImage;if(!(null==t?void 0:t.sourceUrl)){var a;t=null===(a=e.featuredImage)||void 0===a?void 0:a.node}return(0,s.jsxs)(c(),{id:e.guid,"data-w-id":"ee8d6238-05d6-8788-93ac-5ffa4f386eb6",href:"/tool/"+e.slug+"/",className:"home card card-link-image-top flex w-inline-block",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n(),{src:null==t?void 0:t.sourceUrl,sizes:"(max-width: 479px) 91vw, (max-width: 767px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 30vw, 386px",alt:null==t?void 0:t.altText,className:"_w-h-100",title:null==t?void 0:t.title,width:100,height:100})}),(0,s.jsx)("div",{className:"card-description",children:(0,s.jsx)("p",{className:"paragraph-small medium mg-bottom-10px",children:e.title})})]},(0,o.Z)())},u=e=>{let{title:t,ai_tools:a}=e;return(0,s.jsxs)("div",{className:"home-featured-products-wrapper",children:[(0,s.jsx)("div",{className:"mg-bottom-32px",children:(0,s.jsx)("h2",{className:"display-3 mg-bottom-0",children:t})}),!(null==a?void 0:a.length)&&t&&"No tools available for ".concat(t,"."),(0,s.jsx)("div",{className:"w-dyn-list",children:(0,s.jsx)("div",{role:"list",className:"home-grid-4-columns product-grid-v1 w-dyn-items",children:a&&(null==a?void 0:a.map(e=>(0,i.createElement)(d,{...e,key:e.slug})))})})]})};var m=u},3922:function(e,t,a){"use strict";a.d(t,{Tg:function(){return c}});var s=a(8532),i=a(2797),r=a(4449),n=a(5632);async function l(e){let{after:t,first:a}=e,i=(0,s.W)(),r=await i.query({query:n.Ss,variables:{after:t,first:a}}),l=null==r?void 0:r.data.aITools.edges.map(e=>{let{node:t={}}=e;return t}),c=null==r?void 0:r.data.aITools.pageInfo;return{aitools:Array.isArray(l)&&l.map(o),pageInfo:c}}async function c(e){let{count:t,...a}=e,{aitools:s,pageInfo:i}=await l(a),n=(0,r.v)(s);return{posts:n.slice(0,t),pageInfo:i}}function o(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={...t};return a.author&&(a.author={...a.author.node}),(null===(e=a.author)||void 0===e?void 0:e.avatar)&&(a.author.avatar=(0,i.BA)(a.author.avatar)),a.categories&&(a.categories=a.categories.edges.map(e=>{let{node:t}=e;return{...t}})),a.featuredImage&&(a.featuredImage=a.featuredImage.node),a}n.$T,n.ZU,n.Ss,n.wO,n.wO,n.GS,n.En},4449:function(e,t,a){"use strict";a.d(t,{p:function(){return i},v:function(){return r}});var s=a(2167);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"PPP";return(0,s.Z)(new Date(e),t)}function r(e){let{key:t="date"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.sort((e,a)=>new Date(a[t])-new Date(e[t]))}},5901:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return p},default:function(){return x}});var s=a(5893),i=a(1127),r=a(1664),n=a.n(r),l=a(1938),c=a(7568),o=a(1630);a(9004);var d=a(3922),u=a(7294),m=a(8533),h=a(4936),p=!0;function x(e){let{initialRecentPosts:t,recentFeaturedPosts:a,pageInfo:r}=e,[p,x]=(0,u.useState)(t),[g,v]=(0,u.useState)(!0),[f,w]=(0,u.useState)(r),[j,N]=(0,u.useState)(!1),y=async()=>{if(!j&&g){N(!0);try{let e=(null==f?void 0:f.endCursor)||"",t=await (0,d.Tg)({count:12,after:e});0===t.posts.length?v(!1):(w(t.pageInfo),x(e=>[...e,...t.posts]))}catch(e){console.error("Error fetching more data:",e)}finally{N(!1)}}},{categories:b=[]}=(0,i.ZP)(),_=Array.isArray(b)&&b.length>0;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{children:(0,s.jsx)("div",{className:"section hero home-hero wf-section",children:(0,s.jsxs)("div",{"data-w-id":"03dc96b0-1839-8e38-c79d-e2524e050dcf",className:"container-default w-container",children:[(0,s.jsx)(c.Z,{title:"",description:"Unleash your potential with our AI tool directory: Updated daily, catered for every need.<br>Find your perfect AI assistant cross varied categories in just a click!"}),(0,s.jsxs)("div",{className:"product-board-wrapper",children:[(0,s.jsxs)("div",{id:"w-node-_2e758867-83f4-f42c-4662-93b873482eee-21f7f39c","data-w-id":"2e758867-83f4-f42c-4662-93b873482eee",style:{opacity:1},className:"split-content product-board-content",children:[(0,s.jsx)(h.Z,{title:"Featured AI Tools",ai_tools:a}),(0,s.jsx)(m.Z,{dataLength:p.length,next:y,hasMore:g,loader:(0,s.jsx)("h4",{style:{textAlign:"center",marginTop:"20px"},children:"Loading..."}),children:(0,s.jsx)(h.Z,{title:"Latest AI Tools",ai_tools:p})})]}),(0,s.jsx)("div",{"data-w-id":"2e758867-83f4-f42c-4662-93b873482f30",style:{opacity:1},className:"split-content product-sidebar",children:(0,s.jsxs)("div",{id:"w-node-_2e758867-83f4-f42c-4662-93b873482f31-21f7f39c",className:"position-sticky top-24px static---tablet",children:[_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:"heading-h5-size mg-bottom-20px",children:"Filter by category"}),(0,s.jsx)("div",{className:"mg-bottom-32px",children:(0,s.jsx)("div",{className:"inner-container _312px _100-tablet",children:(0,s.jsx)("div",{className:"categories-card-wrapper",style:{overflow:"scroll"},children:(0,s.jsx)("div",{className:"w-dyn-list",children:(0,s.jsx)("div",{role:"list",className:"grid-1-column categories-grid w-dyn-items",children:b.map(e=>{let{id:t,slug:a,name:i}=e;return(0,s.jsx)("div",{role:"listitem",className:"w-dyn-item",children:(0,s.jsxs)(n(),{href:(0,o.I5)(a),className:"category---link-wrapper w-inline-block",children:[(0,s.jsxs)("div",{className:"category---description-wrapper",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"",alt:"",className:"_w-h-20px"})}),(0,s.jsxs)("div",{className:"category---description",children:[(0,s.jsx)("div",{className:"category---title",children:i}),(0,s.jsx)("div",{className:"category---short-description"})]})]}),(0,s.jsx)("div",{className:"categories---arrow-right",children:(0,s.jsx)("div",{className:"line-rounded-icon link-icon-right",children:""})})]})},t)})})})})})})]}),(0,s.jsxs)("div",{className:"card submit-card",children:[(0,s.jsx)("div",{className:"mg-bottom-24px",children:(0,s.jsx)("div",{className:"circle _48px blue",children:(0,s.jsx)("img",{src:"images/arrow-up-aggregator-x-webflow-template.svg",alt:""})})}),(0,s.jsx)("div",{className:"display-4 mg-bottom-8px",children:"Submit your AI Tool!"}),(0,s.jsx)("p",{className:"mg-bottom-24px paragraph-small"}),(0,s.jsxs)(n(),{href:"/submit-new-ai-tool/",className:"btn-primary small header-btn-hidden-on-tablet w-button",children:["Submit now",(0,s.jsx)("span",{className:"line-rounded-icon link-icon-right mg-left-4px",children:""})]})]})]})})]})]})})})})}}},function(e){e.O(0,[5675,1664,8519,2167,4510,1938,1972,4490,9774,2888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);