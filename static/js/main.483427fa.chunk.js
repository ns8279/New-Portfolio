(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/cover-img.6a4cf485.jpg"},19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Recipe Blog","image":"https://iamafoodblog.com/wp-content/uploads/2014/08/fulled-loaded-baked-potato-salad-4w11.jpg","github":"https://github.com/ns8279/Receipe_Blog","desciption":"The Recipe Blog is a blog website where users can publish their recipes and comment on other users\u2019 recipes as well. This application follows the MVC paradigm and it is using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.","Application":"https://infinite-shelf-13445.herokuapp.com/"},{"id":2,"name":"Movie Buzz","image":"https://raw.githubusercontent.com/ns8279/Movie-buzz/master/assets/images/preview_2.png","github":"https://github.com/ns8279/Movie-buzz","desciption":"An application which gives you a list of movies and specific movie details when searched for a word and redirects you to various streaming apps such as Itunes, Netflix, etc.","Application":"https://ns8279.github.io/Movie-buzz/"},{"id":3,"name":"Weather Dashboard","image":"https://raw.githubusercontent.com/ns8279/Weather_dashboard/master/assets/images/preview.png","github":"https://github.com/ns8279/Weather_dashboard","desciption":"This app gives weather information of the location you want and a 5 day forecast. Enter a city into the search box and click search. The city will be automatically be saved in your search history. Current weather info will be pulled from the open weather API. Click on any city in the search history to review weather information.","Application":"https://ns8279.github.io/Weather_dashboard/"},{"id":4,"name":"Run Buddy","image":"https://www.dryarn.com/assets/uploads/running.jpg","github":"https://github.com/ns8279/run_buddy","desciption":"A website that offers fitness training services","Application":"https://ns8279.github.io/run_buddy/"},{"id":5,"name":"To be Added soon","image":"https://static.vecteezy.com/system/resources/previews/000/189/020/original/vector-stay-tuned-coming-soon-label-text-on-colorful-background.jpg","github":"NA","desciption":"WIP","Application":"NA"},{"id":6,"name":"Coming Soon","image":"https://static.vecteezy.com/system/resources/previews/000/189/020/original/vector-stay-tuned-coming-soon-label-text-on-colorful-background.jpg","github":"NA","desciption":"WIP","Application":"NA"}]')},21:function(e,a,t){e.exports=t(31)},26:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(16),o=t.n(l),i=(t(26),t(8),t(10)),c=t(17),s=function(){return r.a.createElement("div",{className:"d-flex justify-content-center px-5"},r.a.createElement("a",{href:"https://github.com/ns8279",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.b,null)," "),r.a.createElement("a",{href:"https://www.linkedin.com/in/nirupama-sundararaman/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.c,null)),r.a.createElement("a",{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,null)))},m=t(9);var u=function(e){return r.a.createElement("div",{className:"px-3 py-4"},r.a.createElement("h3",null,"Nirupama Sundararaman"),r.a.createElement("ul",{className:"nav nav-tabs float-right"},["About","Portfolio","Contact","Resume"].map((function(a){return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement("a",{href:"#"+a.toLowerCase(),onClick:function(){return e.handlePageChange(a)},className:e.currentPage===a?"nav-link active":"nav-link"},a))}))))},p=t(18),d=t.n(p),h=t(32),g=t(34);var b=function(){return r.a.createElement("section",null,r.a.createElement(h.a,{src:d.a,height:"500px",width:"100%"}),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,{as:"h3"},"About Me"),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Text,null,"A financial Data Analyst interested in the field of Webdevelopment. Currently persuing Full stack web development at UC-Berkeley extension. A 24 week rigorous and fast paced program which gives you the knowledge and skills to build dynamic end-to-end web applications and become a full stack web developer. Applicable Courses: HTML5, CSS, JavaScript, jQuery, MERN Stack, SEO online marketing, Node.js, Express.js, Bootstrap, Materialize, Server-Side APIs, Web APIs, Object-Oriented Programming, web app deployment etc. Testing Framework: JEST and Insomnia")))))},f=t(19);function v(e){return r.a.createElement("div",{className:"card-container col-8 mx-auto my-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.name,src:e.image,className:"card-img"}),r.a.createElement("h3",null,e.name),r.a.createElement("h4",null,e.description),r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement("div",null,r.a.createElement("a",{href:e.Application,target:"_blank",rel:"noopener noreferrer"},"Check out the App"))))}function E(e){return r.a.createElement("div",{className:""},e.children)}var w=function(){var e=Object(n.useState)(f),a=Object(m.a)(e,1)[0];return r.a.createElement(E,null,r.a.createElement("h1",{className:"d-flex justify-content-center"},"Project List"),a.map((function(e){return function(e){return r.a.createElement(v,{name:e.name,image:e.image,id:e.id,github:e.github,description:e.description,Application:e.Application,key:e.id})}(e)})))},y=t(11),k=t(12);var A=t(33),j=t(35);var N=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(m.a)(e,2),t=a[0],l=a[1],o=t.name,i=t.email,c=t.message,s=Object(n.useState)(""),u=Object(m.a)(s,2),p=u[0],d=u[1];function h(e){if(l(Object(k.a)(Object(k.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))),"email"===e.target.name){var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(a),d(a?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));"message"===e.target.name||(e.target.value.length?d(""):d("".concat(e.target.name," is required."))),console.log("errorMessage",p),p||l(Object(k.a)(Object(k.a)({},t),{},Object(y.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",null,r.a.createElement(A.a,{onSubmit:function(e){e.preventDefault(),console.log(t)},className:"mx-5 my-5"},r.a.createElement(A.a.Group,{controlId:"formBasicName"},r.a.createElement(A.a.Label,null,"Name"),r.a.createElement(A.a.Control,{type:"text",placeholder:o,onBlur:h,name:"name"})),r.a.createElement(A.a.Group,{controlId:"formBasicEmail"},r.a.createElement(A.a.Label,null,"Email"),r.a.createElement(A.a.Control,{type:"email",placeholder:i,onBlur:h,name:"email"})),r.a.createElement(A.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(A.a.Label,null,"Message"),r.a.createElement(A.a.Control,{as:"textarea",placeholder:c,rows:"3",onBlur:h,name:"message"})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit")))};var x=function(){return r.a.createElement("div",{class:"jumbotron mx-5"},r.a.createElement("h1",{class:"display-4"},"Resume"),r.a.createElement("p",{class:"lead"},"A financial data analyst currently persuing Full stack webdevelopment"),r.a.createElement("hr",{class:"my-4"}),r.a.createElement("p",null,"Learning Full stack webdevelopment program from UC Berkeley- extension. This program focuses on MERN Stack with primary focus on Front-end and Server-side development."),r.a.createElement("a",{class:"btn btn-primary btn-lg fa fa-download",href:"https://drive.google.com/file/d/1fA42K02kK9bcRNNZvTvzZ3_398VwVIII/view?usp=sharing",target:"_blank",role:"button",download:"Raman_Nirupama"}," ",r.a.createElement(i.a,null),"Click to download Resume"))};var C=function(){var e=Object(n.useState)("About"),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(u,{currentPage:t,handlePageChange:l}),r.a.createElement("hr",null),r.a.createElement("div",null,function(){switch(t){case"About":return r.a.createElement(b,null);case"Portfolio":return r.a.createElement(w,null);case"Contact":return r.a.createElement(N,null);case"Resume":return r.a.createElement(x,null);default:return r.a.createElement(b,null)}}()))};t(30);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(C,null)),r.a.createElement("div",null,r.a.createElement(s,{className:"px-5"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.483427fa.chunk.js.map