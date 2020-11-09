(this.webpackJsonpcreate_react_app=this.webpackJsonpcreate_react_app||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n(2),o=n(9),i=n.n(o),s=(n(17),Object(r.createContext)()),l=function(){var e=Object(r.useContext)(s),t=e.note,n=e.addNote,c=e.inputChange,o=e.inputReset;return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.title.trim()&&n(),o()},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"title",className:"form-control",placeholder:"add here ...",onChange:function(e){c(e.target.value)},value:t.title})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})},u=function(e){var t=e.note,n=e.index,c=Object(r.useContext)(s),o=c.removeNote,i=c.editNote,l=c.setStrikeUnstrike;return Object(a.jsxs)("li",{className:"list-group-item",style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsxs)("ul",{className:"list-group list-group-horizontal",style:{width:"90%"},children:[Object(a.jsx)("li",{className:"list-group-item",style:{width:"4rem",textAlign:"center"},children:Object(a.jsx)("small",{children:n+1})}),Object(a.jsx)("li",{className:"list-group-item",style:{width:"100%",cursor:"pointer"},onClick:function(){return l(t)},children:t.completed?Object(a.jsx)("strong",{style:{textDecoration:"line-through",opacity:.2},children:t.title}):Object(a.jsx)("strong",{children:t.title})})]}),Object(a.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return i(t)},style:{marginRight:"3px"},children:"Edit"}),Object(a.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return o(t.id)},children:"Del"})]})]},n)},d=function(){var e=Object(r.useContext)(s),t=e.notes,n=e.loading,c=e.fetchNotes;return Object(r.useEffect)((function(){c()}),[]),Object(a.jsx)("ul",{className:"list-group",children:n?Object(a.jsx)("p",{className:"h3",children:"loading ..."}):t.length?t.map((function(e,t){return Object(a.jsx)(u,{note:e,index:t},t)})):Object(a.jsx)("p",{className:"h3",children:"all tasks completed ..."})})},p=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-5",children:Object(a.jsx)("p",{className:"h3",style:{textAlign:"right"},children:"django + react"})}),Object(a.jsx)("div",{className:"col-7",children:Object(a.jsx)("p",{className:"h3",children:'"to-do-\u0448\u043a\u0430"'})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)(l,{})})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)(d,{})})})]})},j=n(4),b=n.n(j),O=n(6),h=n(10),f=n(3),m=n(11),x=n(1),y="SHOW_LOADER",g="FETCH_NOTES",v="REMOVE_NOTE",N="ADD_NOTE",k="START_EDIT_NOTE",E="SAVE_EDITABLE_NOTE",w="INP_CHANGE",T="INP_RES",C=(c={},Object(f.a)(c,y,(function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!0})})),Object(f.a)(c,g,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:n,loading:!1})})),Object(f.a)(c,v,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==n})),loading:!1})})),Object(f.a)(c,N,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:[].concat(Object(m.a)(e.notes),[Object(x.a)({},n)]),loading:!1})})),Object(f.a)(c,w,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{note:Object(x.a)(Object(x.a)({},e.note),{},{title:n})})})),Object(f.a)(c,T,(function(e){return Object(x.a)(Object(x.a)({},e),{},{note:{id:null,title:"",completed:!1}})})),Object(f.a)(c,k,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{note:{id:n.id,title:n.title,completed:n.completed},editing:!0})})),Object(f.a)(c,E,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:e.notes.map((function(e){return e.id===n.id?e=n:e})),loading:!1,editing:!1})})),Object(f.a)(c,"DEFAULT",(function(e){return e})),c),S=function(e,t){return(C[t.type]||t.DEFAULT)(e,t)},_="https://frozen-basin-59279.herokuapp.com",R=function(e){var t=e.children,n=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t},c=Object(r.useReducer)(S,{notes:[],note:{id:null,title:"",completed:!1},loading:!1,editing:!1}),o=Object(h.a)(c,2),i=o[0],l=o[1],u=function(){return l({type:y})},d=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.prev=1,e.next=4,fetch("".concat(_,"/api/task-list/"));case 4:if(!(t=e.sent).ok){e.next=11;break}return e.next=8,t.json();case 8:n=e.sent,c=n.map((function(e){return e})),l({type:g,payload:c});case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),c=n("csrftoken"),e.next=4,fetch("".concat(_,"/api/task-delete/").concat(t,"/"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":c}});case 4:l({type:v,payload:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(O.a)(b.a.mark((function e(){var t,c,a,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),t=n("csrftoken"),c="".concat(_,"/api/task-create/"),i.editing&&(c="".concat(_,"/api/task-update/").concat(i.note.id,"/")),e.prev=4,e.next=7,fetch(c,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify(i.note)});case 7:if(!(a=e.sent).ok){e.next=14;break}return e.next=11,a.json();case 11:r=e.sent,o=r,i.editing?l({type:E,payload:o}):l({type:N,payload:o});case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(4),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(b.a.mark((function e(t){var c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),c=n("csrftoken"),t.completed=!t.completed,e.next=5,fetch("".concat(_,"/api/task-update/").concat(t.id,"/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":c},body:JSON.stringify({completed:t.completed,title:t.title})});case 5:if(!(a=e.sent).ok){e.next=12;break}return e.next=9,a.json();case 9:r=e.sent,l({type:E,payload:r});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(s.Provider,{value:{note:i.note,notes:i.notes,loading:i.loading,fetchNotes:d,removeNote:p,addNote:j,inputChange:function(e){l({type:w,payload:e})},inputReset:function(){l({type:T})},editNote:function(e){l({type:k,payload:e})},setStrikeUnstrike:f},children:t})};i.a.render(Object(a.jsx)(R,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cea39363.chunk.js.map