(this["webpackJsonphomeworkmanager.github.io"]=this["webpackJsonphomeworkmanager.github.io"]||[]).push([[7],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(4),c=n(19),r=n(159),i=n(184),s=n(185),o=n(186),l=n(204),j=n(188),u=n(190),d=n(192),b=n(193),O=n(181),h=n(194),m=n(202),g=n(197),x=n(198),f=n(191),p=n(116),D=n(201),v=n(0),y=n(175),w=n(177),k=n(178),C=n(208),S=n(189),A=n(179),T=n(187),U=n(5),M=n(58),F=n(8);function N(e){var t=e.title,n=Object(U.g)(),a=Object(v.useState)(!1),r=Object(c.a)(a,2),l=r[0],u=r[1];return Object(F.jsxs)(y.a,{position:"static",children:[Object(F.jsxs)(w.a,{children:[Object(F.jsx)(k.a,{edge:"start",color:"inherit",onClick:function(){return u(!0)},children:Object(F.jsx)(A.a,{})}),Object(F.jsx)(O.a,{variant:"h6",noWrap:!0,children:t})]}),Object(F.jsx)(C.a,{anchor:"left",open:l,onClose:function(){return u(!1)},children:Object(F.jsxs)("div",{style:{width:200},children:[Object(F.jsx)(i.a,{children:Object(F.jsxs)(s.a,{button:!0,onClick:function(){var e;null===(e=M.a.currentUser)||void 0===e||e.logOut(),n.push("/login")},children:[Object(F.jsx)(o.a,{children:Object(F.jsx)(T.a,{})}),Object(F.jsx)(j.a,{primary:"User Name"})]})}),Object(F.jsx)(S.a,{}),Object(F.jsxs)(i.a,{children:[Object(F.jsx)(s.a,{button:!0,children:"Assignments"}),Object(F.jsx)(s.a,{button:!0,children:"Classes"})]})]})})]})}function _(){var e,t=Object(v.useState)([]),n=Object(c.a)(t,2),y=n[0],w=n[1],k=Object(v.useState)(!1),C=Object(c.a)(k,2),S=C[0],A=C[1],T=Object(v.useState)({}),U=Object(c.a)(T,2),_=U[0],L=U[1],W=null===(e=M.a.currentUser)||void 0===e?void 0:e.mongoClient("mongodb-atlas").db("HomeworkManager");return Object(v.useEffect)((function(){W.collection("Assignments").find({},{sort:{completed:1,dueDate:1},completed:!0,dueDate:!0,name:!0}).then(w)}),[S,W]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(N,{title:"Assignments"}),Object(F.jsx)(i.a,{children:y.map((function(e,t){var n=e._id,a=e.name,c=e.dueDate,r=e.completed;return Object(F.jsxs)(s.a,{children:[Object(F.jsx)(o.a,{children:Object(F.jsx)(l.a,{edge:"start",checked:r,onChange:function(){!function(e,t,n){W.collection("Assignments").updateOne({_id:e},{$set:{completed:t}}).then((function(e){var a=y.slice();a[n].completed=t,w(a)}))}(n,!r,t)}})}),Object(F.jsx)(j.a,{primary:a,secondary:J(c)})]},t)}))}),Object(F.jsx)(u.a,{color:"secondary",style:{position:"absolute",bottom:"33px",right:"33px"},onClick:function(){return A(!0)},children:Object(F.jsx)(f.a,{})}),Object(F.jsxs)(d.a,{open:S,children:[Object(F.jsx)(b.a,{disableTypography:!0,children:Object(F.jsx)(O.a,{variant:"h6",children:"New Assignment"})}),Object(F.jsxs)(h.a,{dividers:!0,children:[Object(F.jsx)(m.a,{variant:"standard",margin:"normal",required:!0,fullWidth:!0,label:"Name",autoFocus:!0,onChange:function(e){return L(Object(a.a)(Object(a.a)({},_),{},{name:e.target.value}))}}),Object(F.jsx)(p.a,{utils:r.a,children:Object(F.jsx)(D.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"Due Date",value:_.dueDate,onChange:function(e){return L(Object(a.a)(Object(a.a)({},_),{},{dueDate:e}))}})})]}),Object(F.jsxs)(g.a,{children:[Object(F.jsx)(x.a,{onClick:function(){A(!1),L({})},color:"primary",children:"Cancel"}),Object(F.jsx)(x.a,{color:"primary",onClick:function(e){e.preventDefault(),W.collection("Assignments").insertOne(Object(a.a)(Object(a.a)({},_),{},{completed:!1,user_id:M.a.currentUser.id})).then((function(){L({}),A(!1)}))},children:"Add"})]})]})]})}function J(e){e=new Date(e.toDateString());var t=new Date;if(e.getTime()===t.getTime())return"today";if(t.setDate(t.getDate()+1),e.getTime()===t.getTime())return"tomorrow";t=new Date;var n=new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay()),a=new Date(t.getFullYear(),t.getMonth(),n.getDate()+6);return e>=n&&e<=a?e.toLocaleDateString("en-US",{weekday:"short"}):e.toLocaleDateString("en-US",{month:"numeric",day:"numeric"})}}}]);
//# sourceMappingURL=7.9846ba80.chunk.js.map