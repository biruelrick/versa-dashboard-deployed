(this["webpackJsonpversa-dashboard"]=this["webpackJsonpversa-dashboard"]||[]).push([[9],{341:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return r}));var s=a(2),n=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],c={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(n),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},l=(Object(s.a)({},c),[].concat(n),{colors:[].concat(n),plotOptions:{pie:{size:"100%",customScale:1,expandOnClick:!0,donut:{size:"50%",labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,t){return e+t}),0)}}}}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}}),r={chart:{type:"bar",id:"chart-simple-bar",toolbar:{show:!1}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!0},stroke:{width:1,colors:["#fff"]},xaxis:{},yaxis:{title:{text:void 0}}}},342:function(e,t,a){"use strict";var s=a(338),n=a.n(s),c=a(339),l=window.location.origin,r={"Content-Type":"application/json","x-token":"13d0db63-5d7f-4015-b347-822e375a84d1","x-requestcode":Object(c.generateToken)().split("-")[0],"x-countrycode":"br","x-languagecode":"pt-br","x-timeoffset":-180},o=n.a.create({baseURL:l});o.defaults.headers=r,t.a=o},354:function(e,t,a){},389:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t),a.d(t,"COLORS",(function(){return U}));var s=a(55),n=a(7),c=a(14),l=a.n(c),r=a(0),o=a(406),i=a(317),u=a(350),d=a(5),b=a(21),j=a(3),m=a(59),x=a(6),h=a.n(x),O=a(69),p=a(23);function v(e){var t,a=e.prefixCls,s=e.value,n=e.current,c=e.offset,l=void 0===c?0:c;return l&&(t={position:"absolute",top:"".concat(l,"00%"),left:0}),r.createElement("span",{style:t,className:h()("".concat(a,"-only-unit"),{current:n})},s)}function f(e,t,a){for(var s=e,n=0;(s+10)%10!==t;)s+=a,n+=a;return n}function g(e){var t,a,s=e.prefixCls,c=e.count,l=e.value,o=Number(l),i=Math.abs(c),u=r.useState(o),d=Object(n.a)(u,2),b=d[0],m=d[1],x=r.useState(i),h=Object(n.a)(x,2),O=h[0],p=h[1],g=function(){m(o),p(i)};if(r.useEffect((function(){var e=setTimeout((function(){g()}),1e3);return function(){clearTimeout(e)}}),[o]),b===o||Number.isNaN(o)||Number.isNaN(b))t=[r.createElement(v,Object(j.a)({},e,{key:o,current:!0}))],a={transition:"none"};else{t=[];for(var y=o+10,N=[],w=o;w<=y;w+=1)N.push(w);var C=N.findIndex((function(e){return e%10===b}));t=N.map((function(t,a){var s=t%10;return r.createElement(v,Object(j.a)({},e,{key:t,value:s,offset:a-C,current:a===C}))})),a={transform:"translateY(".concat(-f(b,o,O<i?1:-1),"00%)")}}return r.createElement("span",{className:"".concat(s,"-only"),style:a,onTransitionEnd:g},t)}var y=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a},N=function(e){var t=e.prefixCls,a=e.count,s=e.className,n=e.motionClassName,c=e.style,l=e.title,o=e.show,i=e.component,u=void 0===i?"sup":i,d=e.children,b=y(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),m=(0,r.useContext(O.b).getPrefixCls)("scroll-number",t),x=Object(j.a)(Object(j.a)({},b),{"data-show":o,style:c,className:h()(m,s,n),title:l}),v=a;if(a&&Number(a)%1===0){var f=String(a).split("");v=f.map((function(e,t){return r.createElement(g,{prefixCls:m,count:Number(a),value:e,key:f.length-t})}))}return c&&c.borderColor&&(x.style=Object(j.a)(Object(j.a)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),d?Object(p.a)(d,(function(e){return{className:h()("".concat(m,"-custom-component"),null===e||void 0===e?void 0:e.className,n)}})):r.createElement(u,x,v)},w=a(178);function C(e){return-1!==w.a.indexOf(e)}var S=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a},R=function(e){var t,a,s=e.prefixCls,n=e.scrollNumberPrefixCls,c=e.children,l=e.status,o=e.text,i=e.color,u=e.count,x=void 0===u?null:u,v=e.overflowCount,f=void 0===v?99:v,g=e.dot,y=void 0!==g&&g,w=e.size,R=void 0===w?"default":w,E=e.title,A=e.offset,I=e.style,k=e.className,D=e.showZero,T=void 0!==D&&D,L=S(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),P=r.useContext(O.b),W=P.getPrefixCls,_=P.direction,z=W("badge",s),M=x>f?"".concat(f,"+"):x,V=null!==l&&void 0!==l||null!==i&&void 0!==i,F="0"===M||0===M,G=y&&!F,B=G?"":M,J=Object(r.useMemo)((function(){return(null===B||void 0===B||""===B||F&&!T)&&!G}),[B,F,T,G]),Q=Object(r.useRef)(x);J||(Q.current=x);var U=Q.current,Y=Object(r.useRef)(B);J||(Y.current=B);var Z=Y.current,q=Object(r.useRef)(G);J||(q.current=G);var H=Object(r.useMemo)((function(){if(!A)return Object(j.a)({},I);var e={marginTop:A[1]};return"rtl"===_?e.left=parseInt(A[0],10):e.right=-parseInt(A[0],10),Object(j.a)(Object(j.a)({},e),I)}),[_,A,I]),K=null!==E&&void 0!==E?E:"string"===typeof U||"number"===typeof U?U:void 0,X=J||!o?null:r.createElement("span",{className:"".concat(z,"-status-text")},o),$=U&&"object"===Object(b.a)(U)?Object(p.a)(U,(function(e){return{style:Object(j.a)(Object(j.a)({},H),e.style)}})):void 0,ee=h()((t={},Object(d.a)(t,"".concat(z,"-status-dot"),V),Object(d.a)(t,"".concat(z,"-status-").concat(l),!!l),Object(d.a)(t,"".concat(z,"-status-").concat(i),C(i)),t)),te={};i&&!C(i)&&(te.background=i);var ae=h()(z,(a={},Object(d.a)(a,"".concat(z,"-status"),V),Object(d.a)(a,"".concat(z,"-not-a-wrapper"),!c),Object(d.a)(a,"".concat(z,"-rtl"),"rtl"===_),a),k);if(!c&&V){var se=H.color;return r.createElement("span",Object(j.a)({},L,{className:ae,style:H}),r.createElement("span",{className:ee,style:te}),r.createElement("span",{style:{color:se},className:"".concat(z,"-status-text")},o))}return r.createElement("span",Object(j.a)({},L,{className:ae}),c,r.createElement(m.b,{visible:!J,motionName:"".concat(z,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,a=e.className,s=W("scroll-number",n),c=q.current,o=h()((t={},Object(d.a)(t,"".concat(z,"-dot"),c),Object(d.a)(t,"".concat(z,"-count"),!c),Object(d.a)(t,"".concat(z,"-count-sm"),"small"===R),Object(d.a)(t,"".concat(z,"-multiple-words"),!c&&Z&&Z.toString().length>1),Object(d.a)(t,"".concat(z,"-status-").concat(l),!!l),Object(d.a)(t,"".concat(z,"-status-").concat(i),C(i)),t)),u=Object(j.a)({},H);return i&&!C(i)&&((u=u||{}).background=i),r.createElement(N,{prefixCls:s,show:!J,motionClassName:a,className:o,count:Z,title:K,style:u,key:"scrollNumber"},$)})),X)};R.Ribbon=function(e){var t,a=e.className,s=e.prefixCls,n=e.style,c=e.color,l=e.children,o=e.text,i=e.placement,u=void 0===i?"end":i,b=r.useContext(O.b),m=b.getPrefixCls,x=b.direction,p=m("ribbon",s),v=C(c),f=h()(p,"".concat(p,"-placement-").concat(u),(t={},Object(d.a)(t,"".concat(p,"-rtl"),"rtl"===x),Object(d.a)(t,"".concat(p,"-color-").concat(c),v),t),a),g={},y={};return c&&!v&&(g.background=c,y.color=c),r.createElement("div",{className:"".concat(p,"-wrapper")},l,r.createElement("div",{className:f,style:Object(j.a)(Object(j.a)({},g),n)},r.createElement("span",{className:"".concat(p,"-text")},o),r.createElement("div",{className:"".concat(p,"-corner"),style:y})))};var E=R,A=a(143),I=a(2),k=a(346),D=a.n(k),T=a(339),L=a.n(T),P=a(341),W=(a(389),a(4)),_=L.a.clone(P.b),z=function(e){return Object(W.jsx)(D.a,Object(I.a)({},e))},M=function(e){var t=e.series,a=e.labels,s=e.extra,n=e.bodyClass,c=e.customScale,l=e.customOptions,r=e.heigth,i=_;return i.labels=a,c&&(i.plotOptions.pie.customScale=c),i.plotOptions.pie.donut.labels.show=!1,i.dataLabels.enabled=!0,i=Object(I.a)(Object(I.a)({},L.a.clone(i)),L.a.clone(l)),Object(W.jsx)(o.a,{className:"custom-donut",children:Object(W.jsxs)("div",{className:"text-center ".concat(n),children:[Object(W.jsx)(z,{type:"donut",options:i,series:t,height:r||"240"}),s]})})};M.defaultProps={series:[],labels:[],title:"",height:250,width:"100%"};var V=M,F=a(342),G=(a(354),a(30)),B=a(353),J=a.n(B),Q=a(54),U=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff","#FF1493","#4682B4","#1C1C1C"],Y=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.divergencias,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<9?t:9,r=e.transportadora.split(" "),o=r[0];return"TRANS"!==o&&1!==o.length||(o+=" "+r[1]),"RAPIDO"===o&&(o="GEWT"),"TRANS WAR"===o&&(o="TRANSWAR"),"TRANSPORTES"===o&&(o="TRANSLOVATO"),"E N"===o&&(o="IBL"),"TRANS MODEL"===o&&(o="TRANSMODEL"),s.push(o),n.push(e.QtdDivergencias),c.push(U[a]||U[9]),e&&e.QtdDivergencias&&l.push({label:o,data:e.QtdDivergencias,color:U[a]||U[9]}),e})),l.length>0&&l.sort((function(e,t){return Object(Q.b)(e,t,"label")})),Object(W.jsx)(o.a,{title:"DIV. POR TRANSPORTADORA",className:"card-divergence",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.length>0&&l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",children:[Object(W.jsxs)("div",{className:"text-left",children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},Z=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.divergence_volume,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7;return e.linha&&(s.push(e.linha.toString()),n.push(e.volumes),c.push(U[a]),l.push({label:e.linha.toString(),data:e.volumes,color:U[a]})),e})),Object(W.jsx)(o.a,{title:"DIV. POR VOLUMES",className:"card-vol",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},q=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.divergence_reason,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7;return s.push(e.motivo),n.push(e.volumes),c.push(U[a]),l.push({label:e.motivo,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"DIVERG\xcaNCIAS",className:"card-reason",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},H=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_ativa,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"ATIVA",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},K=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_braspress,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"BRASPRESS",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},X=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_translovato,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"TRANSLOVATO",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},$=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_mira,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"MIRA",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},ee=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_jonas,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"JONAS",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},te=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_transwar,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"TRANSWAR",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},ae=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_transgenio,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"TRANSGENIO",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},se=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_gewt,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"GEWT",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})},ne=function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.transportadora_ibl,s=[],n=[],c=[],l=[];return a&&a.map((function(e,t){var a=t<6?t:7,r="Lote Divergente"===e.motivo?"Divergente":e.motivo;return s.push(r),n.push(e.volumes),c.push(U[a]),l.push({label:r,data:e.volumes,color:U[a]}),e})),Object(W.jsx)(o.a,{title:"IBL",children:Object(W.jsx)(V,{labels:s,series:n,customScale:.8,heigth:0===n.length&&328,customOptions:{colors:c},bodyClass:"mb-2 mt-3",extra:Object(W.jsx)(i.a,{justify:"center",children:Object(W.jsx)(u.a,{xs:20,sm:20,md:20,lg:24,children:Object(W.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:l.map((function(e){return Object(W.jsxs)(A.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(E,{color:e.color}),Object(W.jsx)("span",{className:"text-gray-light",children:e.label})]}),Object(W.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)}))})})})})})};t.default=function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(J()()),d=Object(n.a)(o,2),b=d[0],j=d[1],m=Object(r.useState)(!1),x=Object(n.a)(m,2),h=x[0],O=x[1];return Object(r.useEffect)((function(){var e,t,a=function(){var e=Object(s.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="5min"===G.e.dataRefresh?3e5:"1min"===G.e.dataRefresh?6e4:5e3,a){e.next=6;break}if(!(J()().diff(J()(b),"seconds")<t/1e3)){e.next=5;break}return e.abrupt("return");case 5:j(J()());case 6:return e.next=8,F.a.get("/carrier").then((function(e){var t;return c(null===(t=e.data)||void 0===t?void 0:t.doc)})).catch((function(e){return console.error("ERRO AO ACESSAR SERVIDOR: ".concat(localStorage.getItem("baseURL"),"\n\n"),e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return h||Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),O(!0),e=setInterval(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),t),function(){return clearTimeout(e)}}),[b,h]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(i.a,{gutter:16,children:[Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(q,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(Z,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(H,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(K,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(se,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(ne,{data:a})})]}),Object(W.jsxs)(i.a,{gutter:16,children:[Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(ee,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)($,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(ae,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(X,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(te,{data:a})}),Object(W.jsx)(u.a,{xs:24,sm:24,md:12,lg:12,xl:4,xxl:4,children:Object(W.jsx)(Y,{data:a})})]})]})}}}]);
//# sourceMappingURL=9.8447f84b.chunk.js.map