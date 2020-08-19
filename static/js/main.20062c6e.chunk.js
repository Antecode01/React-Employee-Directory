(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s);a(22),a(23);var c=function(){return r.a.createElement("nav",{className:"navbar navbar-dark navbar-bg bg-dark"},r.a.createElement("span",{className:"navbar-brand mx-auto h1"},"Employee Directory"))};a(24);var o=function(){return r.a.createElement("footer",{className:"text-center fixed-bottom bg-dark"},r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-white mx-auto"},"\xa9 2020 \u2022 All Rights Reserved")))},i=a(2),m=a(3),d=a(5),u=a(4);a(25);var h=function(e){return r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,e.headings.map((function(t){var a=t.hname,n=t.width;return r.a.createElement("th",{className:"col",key:a,style:{width:n}},a," ",a?r.a.createElement("i",{className:"fas fa-sort","data-key":a,style:{cursor:"pointer"},onClick:e.handleSort}):"")}))))};a(26);var f=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.name,a=e.login,n=e.picture,s=e.phone,l=e.email,c=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile",className:"img img-responsive"})),r.a.createElement("td",{className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{className:"align-middle"},s),r.a.createElement("td",{className:"align-middle"},r.a.createElement("a",{href:"mailto:"+l,target:"__blank"},l)),r.a.createElement("td",{className:"align-middle"},function(e){var t=e.slice(0,10),a=t.slice(0,4);return t.slice(5,7)+"/"+t.slice(8,10)+"/"+a}(c.date)))})):r.a.createElement(r.a.Fragment,null))};a(27);var v=function(e){var t=e.handleInputChange;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row col-12 justify-content-center"},r.a.createElement("form",{className:"form-inline input-group p-2 searchbar"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:t}),r.a.createElement("button",{className:"btn btn-outline-success ml-2",type:"submit",onClick:t},r.a.createElement("i",{className:"fas fa-search"})))))};var g=function(e){var t=e.handleInputChange;return r.a.createElement(v,{handleInputChange:t})},E=a(16),p=a.n(E),b=function(){return p.a.get("https://randomuser.me/api/?results=".concat(20,"&nat=us"))},y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",users:[{}],filteredUsers:[{}],sort:"descend"},e.headings=[{hname:"",width:"10%",sort:"descend"},{hname:"Name",width:"25%",sort:"descend"},{hname:"Phone",width:"20%",sort:"descend"},{hname:"Email",width:"20%",sort:"descend"},{hname:"DOB",width:"20%",sort:"descend"}],e.handleInputChange=function(t){var a=t.target.value.toLowerCase();e.setState({search:a});var n=e.state.users;console.log(n);var r=n.filter((function(e){return e.name.first.toLowerCase().includes(a)||e.name.last.toLowerCase().includes(a)||e.phone.includes(a)||e.dob.date.slice(0,10).includes(a)}));e.setState({filteredUsers:r})},e.handleSort=function(t){var a=e.state.users;console.log(a);var n,r=t.target.attributes.getNamedItem("data-key").value.toLowerCase();console.log(r),"descend"===e.state.sort?e.setState({sort:"ascend"}):e.setState({sort:"descend"}),n="name"===r?a.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):"dob"===r?a.sort((function(e,t){return e.dob.date<t.dob.date?-1:e.dob.date>t.dob.date?1:0})):a.sort((function(e,t){return e[r]<t[r]?-1:e[r]>t[r]?1:0})),"descend"===e.state.sort&&function(e){e.reverse()}(n),e.setState({filteredUsers:n})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{handleInputChange:this.handleInputChange}),r.a.createElement("table",{className:"table table-striped table-hover mt-5"},r.a.createElement(h,{headings:this.headings,handleSort:this.handleSort}),r.a.createElement(f,{users:this.state.filteredUsers})))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))}}]),a}(n.Component);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(N,null),r.a.createElement(o,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.20062c6e.chunk.js.map