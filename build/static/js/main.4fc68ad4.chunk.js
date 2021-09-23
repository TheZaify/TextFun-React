(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),l=c.n(s),o=(c(9),c(2)),r=c(0);function i(e){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input mx-2",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"DarkMode"})]})})]})})})}function d(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h1",{className:"mb-4",children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},id:"MyText",rows:"4",columns:"7"})}),Object(r.jsx)("button",{disabled:0===a.length,type:"button",className:"btn btn-dark mx-1 my-1",onClick:function(){var t=a.toUpperCase();s(t),e.showAlert("Converted to uppercase!","success")},children:"Uppercase"}),Object(r.jsx)("button",{disabled:0===a.length,type:"button",className:"btn btn-dark mx-1 my-1",onClick:function(){var t=a.toLowerCase();s(t),e.showAlert("Converted to lowercase!","success")},children:"lowercase"}),Object(r.jsx)("button",{disabled:0===a.length,type:"button",className:"btn btn-dark mx-1 my-1",onClick:function(){s(""),e.showAlert("Cleared successfully!","success")},children:"Clear"}),Object(r.jsx)("button",{disabled:0===a.length,type:"button",className:"btn btn-dark mx-1 my-1",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Removespaces"}),Object(r.jsx)("button",{disabled:0===a.length,type:"button",className:"btn btn-dark mx-1 my-1",onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Copied!","success")},children:"copy"})]}),Object(r.jsxs)("div",{className:"container my-5",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h3",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[a.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",a.length," letters"]}),Object(r.jsxs)("p",{children:["It will take ",.48*a.split().filter((function(e){return 0!==e.length})).length," seconds to read "]}),Object(r.jsx)("h3",{children:"Preview"}),Object(r.jsx)("p",{children:a.length>0?a:"Damn! textform is empty"})]})]})}i.defaultProps={title:"Logo"};var b=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:e.alert.msg})})};var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),l=Object(o.a)(s,2),h=l[0],u=l[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1400)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextFun",about:"About",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="black",j("dark mode activated","success")):(a("light"),document.body.style.backgroundColor="white",j("light mode activated","success"))}}),Object(r.jsx)(b,{alert:h}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(d,{showAlert:j,heading:"Try TextFun-Enter text below to analyze",mode:c})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.4fc68ad4.chunk.js.map