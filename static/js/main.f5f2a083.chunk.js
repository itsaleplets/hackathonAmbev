(this["webpackJsonpcerveja-perfeita"]=this["webpackJsonpcerveja-perfeita"]||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(41),i=a.n(r),o=(a(49),a(6),a(25)),l=a.n(o),j=a(42),d=a(4),b=Object(s.createContext)(),u=[{title:"Teor Alco\xf3lico"},{title:"Oxig\xeanio"},{title:"G\xe1s Carb\xf4nico"},{title:"Amargor"}],h=function(){return parseFloat(5.5*Math.random()).toFixed(1)};var O=function(e){var t=e.children,a=Object(s.useState)([]),n=Object(d.a)(a,2),r=n[0],i=n[1],o=Object(s.useState)(!0),u=Object(d.a)(o,2),O=u[0],v=u[1],x=Object(s.useState)(""),f=Object(d.a)(x,2),p=f[0],m=f[1],g=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],F=[1,2,1,2.5,1,2],S={data:r,getData:function(){i({chartData:{type:"line",labels:g,datasets:[{label:"Level",data:F,backgroundColor:"rgba(0, 0, 0, 0)",borderColor:["#305AE0"],borderWidth:[1],borderJoinStyle:["round"]}]}})},splashScreen:O,fetch:function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(h);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),showSplashScreen:function(){v(!1)},apiResult:p};return Object(c.jsx)(b.Provider,{value:S,children:t})},v=a(43);var x=function(e){var t=Object(s.useContext)(b),a=t.data,n=t.getData;return t.fetch,Object(s.useEffect)((function(){n()}),[]),Object(c.jsx)("div",{className:"chart",children:Object(c.jsx)(v.Line,{data:a.chartData,options:{title:{display:!0,text:"Hist\xf3rico do ".concat(e.title," | por hora"),fontSize:12,fontColor:"#305AE0"},legend:{display:!1},scales:{yAxes:[{display:!0,position:"right",fontSize:1,ticks:{beginAtZero:!0,fontSize:4}}],xAxes:[{ticks:{fontSize:8}}]}}})})},f=a.p+"static/media/Alcool.30aa7f9f.svg";var p=function(){var e=Object(s.useState)(5),t=Object(d.a)(e,2),a=t[0],n=(t[1],Object(s.useContext)(b).apiResult),r="Teor Alco\xf3lico";return Object(c.jsxs)("div",{children:[console.log(n),u.map((function(e){var t=e.title,s=function(e){return e===r&&n<5&&n>=4?["#FECA5B","Alerta","Valor abaixo do ideal","100%","#FFFFFF"]:e===r&&n<4?["#ED4A71","Cr\xedtico","Valor abaixo do ideal","100%","#FFFFFF"]:e!==r?["#FFFFFF"," Sensor Inativo","","30%","#13245A"]:["#19CC97","Est\xe1vel","Valor dentro do permitido","100%","#FFFFFF"]}(t),i=function(e){switch(e){case"Teor Alco\xf3lico":return["/Alcool.svg","5%"];case"Oxig\xeanio":return["/CO2.svg","10ppm"];case"G\xe1s Carb\xf4nico":return["/O2.svg","4.5%"];case"Amargor":return["/IBU.svg","15"];default:return""}}(t);return Object(c.jsxs)("div",{className:"measurement-card",style:{opacity:s[3]},children:[Object(c.jsxs)("div",{className:"info-div",children:[Object(c.jsx)("img",{className:"icon",alt:t,src:f}),Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("span",{children:["Valor ideal ",i[1]]}),Object(c.jsxs)("div",{className:"rating",style:{backgroundColor:s[0],color:s[4]},children:[t===r?Object(c.jsxs)("h1",{children:[n,"%"]}):"",Object(c.jsx)("h4",{children:s[1]}),Object(c.jsx)("span",{className:"percent",children:s[2]})]})]}),t===r?Object(c.jsx)(x,{title:t,measure:a}):""]},t)}))]})},m=a.p+"static/media/BeerCheckLogoNegativa.fd91eb5a.svg";var g=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("img",{className:"logo",alt:"logo",src:m})})};var F=function(){var e=Object(s.useContext)(b),t=(e.apiResult,e.fetch),a=Object(s.useState)(""),n=Object(d.a)(a,2),r=n[0],i=n[1];return Object(c.jsxs)("div",{className:"sensor",children:[Object(c.jsxs)("div",{className:"div-id",children:[Object(c.jsx)("h1",{className:"h1-title",children:"#ID Sensor"}),Object(c.jsxs)("span",{children:["\xdaltima atualiza\xe7\xe3o: ",r]})]}),Object(c.jsx)("div",{className:"div-btn",children:Object(c.jsx)("button",{onClick:function(){return function(){t();var e=new Date,a="".concat(e.getHours()," : ").concat(e.getMinutes()),c="".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear());i("".concat(c," | \xe0s ").concat(a))}()},id:"btn",type:"button",className:"btn btn-primary-outline",children:"ATUALIZAR SENSORES"})})]})},S=a.p+"static/media/BeerCheckLogo.fdb18e5d.svg",C=a.p+"static/media/wave.fd7f2889.svg",N=a.p+"static/media/wave2.8b00f1f9.svg";var A=function(){return Object(c.jsxs)("div",{className:"fade-in",children:[Object(c.jsxs)("div",{className:"splash-div",children:[Object(c.jsx)("img",{className:"splash-logo",alt:"logo",src:S}),Object(c.jsx)("p",{className:"splash-title1",children:"Uma boa cerveja"}),Object(c.jsx)("p",{className:"splash-title2",children:"sempre na medida certa"})]}),Object(c.jsx)("img",{className:"splash-wave1",alt:"yellow wave",src:C}),Object(c.jsx)("img",{className:"splash-wave2",alt:"yellow wave",src:N})]})};var w=function(){var e=Object(s.useContext)(b),t=e.splashScreen,a=e.showSplashScreen;return setTimeout((function(){a()}),4e3),Object(c.jsx)("div",{children:t?Object(c.jsx)(A,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsx)(F,{}),Object(c.jsx)(p,{})]})})};a(150);var y=function(){return Object(c.jsx)(O,{children:Object(c.jsx)(w,{})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),k()},49:function(e,t,a){},6:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.f5f2a083.chunk.js.map