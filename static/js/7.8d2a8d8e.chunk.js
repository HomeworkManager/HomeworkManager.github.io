(this["webpackJsonphomeworkmanager.github.io"]=this["webpackJsonphomeworkmanager.github.io"]||[]).push([[7],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var a=n(4),c=n(19),i=n(158),r=n(189),o=n(183),s=n(184),l=n(185),j=n(206),d=n(187),u=n(190),b=n(177),O=n(180),h=n(192),m=n(194),g=n(195),x=n(196),f=n(204),p=n(199),v=n(200),D=n(191),y=n(193),C=n(116),k=n(203),w=n(0),A=n(174),S=n(176),T=n(210),_=n(188),M=n(178),U=n(186),F=n(5),W=n(58),q=n(8);function N(e){var t,n=e.title,a=Object(F.g)(),i=Object(w.useState)(!1),r=Object(c.a)(i,2),j=r[0],u=r[1];return Object(q.jsxs)(A.a,{position:"static",children:[Object(q.jsxs)(S.a,{children:[Object(q.jsx)(b.a,{edge:"start",color:"inherit",onClick:function(){return u(!0)},children:Object(q.jsx)(M.a,{})}),Object(q.jsx)(O.a,{variant:"h6",noWrap:!0,children:n})]}),Object(q.jsx)(T.a,{anchor:"left",open:j,onClose:function(){return u(!1)},children:Object(q.jsxs)("div",{style:{width:200},children:[Object(q.jsx)(o.a,{children:Object(q.jsxs)(s.a,{button:!0,onClick:function(){var e;null===(e=W.a.currentUser)||void 0===e||e.logOut(),a.push("/login")},children:[Object(q.jsx)(l.a,{children:Object(q.jsx)(U.a,{})}),Object(q.jsx)(d.a,{primary:null===(t=W.a.currentUser)||void 0===t?void 0:t.profile.email})]})}),Object(q.jsx)(_.a,{}),Object(q.jsxs)(o.a,{children:[Object(q.jsx)(s.a,{button:!0,children:"Assignments"}),Object(q.jsx)(s.a,{button:!0,children:"Classes"})]})]})})]})}function Y(){var e,t=Object(w.useState)([]),n=Object(c.a)(t,2),A=n[0],S=n[1],T=Object(w.useState)(!1),_=Object(c.a)(T,2),M=_[0],U=_[1],F=Object(w.useState)(!1),Y=Object(c.a)(F,2),J=Y[0],L=Y[1],H=Object(w.useState)({}),$=Object(c.a)(H,2),z=$[0],B=$[1],G=null===(e=W.a.currentUser)||void 0===e?void 0:e.mongoClient("mongodb-atlas").db("HomeworkManager");return Object(w.useEffect)((function(){M||J||G.collection("Assignments").find({},{sort:{completed:1,dueDate:1},completed:!0,dueDate:!0,name:!0}).then(S)}),[M,J,G]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(N,{title:"Assignments"}),Object(q.jsxs)(r.a,{maxWidth:"sm",children:[Object(q.jsx)(o.a,{children:A.length?A.map((function(e,t){var n=e._id,a=e.name,c=e.dueDate,i=e.completed;return Object(q.jsxs)(s.a,{children:[Object(q.jsx)(l.a,{children:Object(q.jsx)(j.a,{edge:"start",checked:i,onChange:function(){!function(e,t,n){G.collection("Assignments").updateOne({_id:e},{$set:{completed:t}}).then((function(e){var a=A.slice();a[n].completed=t,S(a)}))}(n,!i,t)}})}),Object(q.jsx)(d.a,{primary:a,secondary:E(c)}),Object(q.jsx)(u.a,{children:Object(q.jsx)(b.a,{edge:"end",onClick:function(){return function(e){B(A.find((function(t){return t._id.equals(e)}))),L(!0)}(n)},children:Object(q.jsx)(D.a,{})})})]},t)})):Object(q.jsx)("div",{style:{textAlign:"center"},children:Object(q.jsx)(O.a,{variant:"h6",children:"You have no assignments right now!"})})}),Object(q.jsx)(h.a,{color:"secondary",style:{position:"absolute",bottom:"33px",right:"33px"},onClick:function(){return U(!0)},children:Object(q.jsx)(y.a,{})})]}),Object(q.jsxs)(m.a,{open:M,children:[Object(q.jsx)(g.a,{disableTypography:!0,children:Object(q.jsx)(O.a,{variant:"h6",children:"New Assignment"})}),Object(q.jsxs)(x.a,{dividers:!0,children:[Object(q.jsx)(f.a,{variant:"standard",margin:"normal",required:!0,fullWidth:!0,label:"Name",autoFocus:!0,onChange:function(e){return B(Object(a.a)(Object(a.a)({},z),{},{name:e.target.value}))}}),Object(q.jsx)(C.a,{utils:i.a,children:Object(q.jsx)(k.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"Due Date",value:z.dueDate,onChange:function(e){return B(Object(a.a)(Object(a.a)({},z),{},{dueDate:e}))}})})]}),Object(q.jsxs)(p.a,{children:[Object(q.jsx)(v.a,{onClick:function(){U(!1),B({})},color:"primary",children:"Cancel"}),Object(q.jsx)(v.a,{color:"primary",onClick:function(e){var t;e.preventDefault(),G.collection("Assignments").insertOne(Object(a.a)(Object(a.a)({},z),{},{completed:!1,user_id:null===(t=W.a.currentUser)||void 0===t?void 0:t.id})).then((function(){B({}),U(!1)}))},children:"Add"})]})]}),Object(q.jsxs)(m.a,{open:J,children:[Object(q.jsx)(g.a,{disableTypography:!0,children:Object(q.jsx)(O.a,{variant:"h6",children:"Edit Assignment"})}),Object(q.jsxs)(x.a,{dividers:!0,children:[Object(q.jsx)(f.a,{variant:"standard",margin:"normal",required:!0,fullWidth:!0,label:"Name",autoFocus:!0,value:z.name||"",onChange:function(e){return B(Object(a.a)(Object(a.a)({},z),{},{name:e.target.value}))}}),Object(q.jsx)(C.a,{utils:i.a,children:Object(q.jsx)(k.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"Due Date",value:z.dueDate,onChange:function(e){return B(Object(a.a)(Object(a.a)({},z),{},{dueDate:e}))}})})]}),Object(q.jsxs)(p.a,{children:[Object(q.jsx)(v.a,{onClick:function(e){e.preventDefault(),G.collection("Assignments").deleteOne({_id:z._id}).then((function(){B({}),L(!1)}))},color:"primary",children:"Delete"}),Object(q.jsx)(v.a,{onClick:function(){L(!1),B({})},color:"primary",children:"Cancel"}),Object(q.jsx)(v.a,{color:"primary",onClick:function(e){e.preventDefault(),G.collection("Assignments").updateOne({_id:z._id},Object(a.a)({},z)).then((function(){B({}),L(!1)}))},children:"Change"})]})]})]})}function E(e){e=new Date(new Date(e).toDateString());var t=new Date;if(e.getTime()===t.getTime())return"today";if(t.setDate(t.getDate()+1),e.getTime()===t.getTime())return"tomorrow";t=new Date;var n=new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay()),a=new Date(t.getFullYear(),t.getMonth(),n.getDate()+6);return e>=n&&e<=a?e.toLocaleDateString("en-US",{weekday:"short"}):e.toLocaleDateString("en-US",{month:"numeric",day:"numeric"})}}}]);
//# sourceMappingURL=7.8d2a8d8e.chunk.js.map