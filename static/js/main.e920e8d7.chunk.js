(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=n(255),l=n(32),s=n(20),u=n(250),d=Object(u.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),j=n(11),p=n(38),b=n(254),m=n(256),h=n(203),f=n(276),x=n(280),g=n(281),O=n(261),v=n(262),y=n(282),w=n(277),C=n(128),k=n.n(C),S=n(253),N=Object(u.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",flexGrow:1},appBarUnten:{borderRadius:15,backgroundColor:"red",margin:"20px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",flexGrow:1},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none",border:"1px solid rgba(0,183,255, 1)",borderRadius:"5%"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},profilemobil:{display:"flex",flexDirection:"column",marginTop:"60px",alignItems:"flex-start"},userName:{display:"flex",alignItems:"center",color:"rgba(0,183,255, 1)"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(S.a[500]),backgroundColor:"rgba(0,183,255, 1)"},purplemobil:{color:e.palette.getContrastText(S.a[500]),backgroundColor:"rgba(0,183,255, 1)",marginBottom:"40px"}}})),I=(n.p,n.p,n.p+"static/media/logo.35222f61.jpg"),z=n(18),_=n(126),A=n(2),D=["Program","Mezmur","Finanz","Predict","Jugend","Kinder","Help?"],T=function(){var e=N(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(j.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),u=Object(j.a)(o,2),d=u[0],C=u[1],S=Object(z.b)(),T=Object(s.f)(),E=Object(s.g)(),F=Object(p.a)();console.log(F);var P=Object(b.a)(F.breakpoints.down("sm"));console.log(P);var L=function(){S({type:"LOGOUT"}),T.push("/"),c(null)};return console.log("User: ",r),Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(_.a)(e).exp<(new Date).getTime()&&L());c(JSON.parse(localStorage.getItem("profile")))}),[E]),Object(A.jsxs)(i.a,{children:[Object(A.jsx)(m.a,{className:e.appBar,position:"static",color:"inherit",children:P?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(h.a,{children:Object(A.jsx)("img",{src:I,alt:"icon",height:"70"})}),Object(A.jsx)("button",{onClick:function(){return C(!0)},children:Object(A.jsx)(k.a,{style:{color:"rgba(0,183,255, 1)"}})}),Object(A.jsx)(f.a,{open:d,onClose:function(){return C(!1)},children:Object(A.jsxs)(x.a,{sx:{bgcolor:"#1976d2",color:"white",marginTop:"38PX",fontWeight:"medium",variant:"body2",fontSize:25},children:[D.map((function(e,t){return Object(A.jsx)(y.a,{onClick:function(){return C(!1)},component:l.b,to:"/".concat(e),style:{color:"rgba(0,183,255, 1)",fontWeight:"700"},children:Object(A.jsx)(w.a,{primary:e})},t)})),Object(A.jsx)(y.a,{children:Object(A.jsx)(w.a,{children:r?Object(A.jsxs)("div",{className:e.profilemobil,children:[Object(A.jsx)(g.a,{className:e.purplemobil,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(A.jsx)(O.a,{variant:"contained",className:e.logout,color:"secondary",onClick:L,children:"Logout"})]}):Object(A.jsx)(O.a,{component:l.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})})]})})]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:e.brandContainer,children:[Object(A.jsx)(h.a,{component:l.b,to:"/",className:e.heading,variant:"h5",align:"center",children:"\xa0 Eritrean full Gospel Cologne \xa0"}),Object(A.jsx)("img",{className:e.image,src:I,alt:"icon",height:"140"})]}),Object(A.jsx)(v.a,{className:e.toolbar,children:r?Object(A.jsxs)("div",{className:e.profile,children:[Object(A.jsx)(g.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(A.jsx)(h.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(A.jsx)(O.a,{variant:"contained",className:e.logout,color:"secondary",onClick:L,children:"Logout"})]}):Object(A.jsx)(O.a,{component:l.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})}),P?Object(A.jsx)(h.a,{style:{textAlign:"center",color:"lightblue"},children:"For more links press the burger butten"}):Object(A.jsx)(v.a,{className:e.appBarUnten,position:"static",color:"inherit",children:D.map((function(e,t){return Object(A.jsx)(y.a,{component:l.b,to:"/".concat(e),style:{color:"rgba(0,183,255, 1)",fontWeight:"700"},children:Object(A.jsx)(w.a,{primary:e})},t)}))})]})},E=n(269),F=n(268),P=Object(u.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},logout:{position:"relative"}}),L=n(263),B=n(264),W=n(265),U=n(266),M=n(131),R=n.n(M),J=n(87),G=n.n(J),H=n(132),X=n.n(H),q=n(130),V=n.n(q),K=n(17),Y=n.n(K),Z=n(31),Q=n(41),$=n.n(Q),ee=null===$.a||void 0===$.a?void 0:$.a.create({baseURL:"https://nameless-hollows-61846.herokuapp.com"});ee.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var te=function(e,t){return ee.patch("/posts/".concat(e),t)},ne=function(e,t){return ee.patch("/mezmur/".concat(e),t)},ae=function(e){return ee.delete("/posts/".concat(e))},re=function(e){return ee.delete("/mezmur/".concat(e))},ce=function(e){return ee.patch("/posts/".concat(e,"/likepost"))},oe=function(e){return ee.post("/user/signin",e)},ie=function(e){return ee.post("/user/signup",e)},le="CREATE",se="UPDATE",ue="DELETE",de="FETCH_ALL",je="LIKE",pe="FETCH_ONE",be="AUTH",me="LOGOUT",he=n(103),fe=n.n(he),xe=function(e){var t,n,a,r,c,o=e.post,i=e.setCurrentId,l=P(),s=Object(z.b)();console.log("POST, ",o);var u=JSON.parse(localStorage.getItem("profile")),d=function(){var e;return(null===(e=o.likes)||void 0===e?void 0:e.length)>0?o.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R.a,{fontSize:"small"}),"\xa0",o.likes.length>2?"You and ".concat(o.likes.length-1," others"):"".concat(o.likes.length," like").concat(o.likes.length>1?"s":"")]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(fe.a,{fontSize:"small"}),"\xa0",o.likes.length," ",1===o.likes.length?"Like":"Likes"]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(fe.a,{fontSize:"small"}),"\xa0Like"]})};return Object(A.jsxs)(L.a,{className:l.card,children:[Object(A.jsx)(B.a,{className:l.media,image:o.selectedFile,title:o.title}),Object(A.jsxs)("div",{className:l.overlay,children:[Object(A.jsx)(h.a,{variant:"body2",children:o.name}),Object(A.jsx)(h.a,{variant:"body2",children:V()(o.createdAt).fromNow()})]}),Object(A.jsx)("div",{className:l.overlay2,children:((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===o||void 0===o?void 0:o.creator))&&Object(A.jsx)(O.a,{style:{color:"white"},size:"small",onClick:function(){return i(o._id)},children:Object(A.jsx)(X.a,{fontSize:"default"})})}),Object(A.jsx)("div",{className:l.details,children:Object(A.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:null===(a=o.tags)||void 0===a?void 0:a.map((function(e){return"\u12e8\u1231\u1235 \u1205\u12eb\u12cd \u12a5\u12e9! - ".concat(e," ")}))})}),Object(A.jsx)(h.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:o.title}),Object(A.jsx)(W.a,{children:Object(A.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:o.message})}),Object(A.jsxs)(U.a,{className:l.cardActions,children:[Object(A.jsx)(O.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return s((e=o._id,function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ce(e);case 3:a=t.sent,r=a.data,n({type:je,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(A.jsx)(d,{})}),((null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===u||void 0===u||null===(c=u.result)||void 0===c?void 0:c._id)===(null===o||void 0===o?void 0:o.creator))&&Object(A.jsxs)(O.a,{size:"small",color:"primary",onClick:function(){return s((e=o._id,function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ae(e);case 3:n({type:ue,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(A.jsx)(G.a,{fontSize:"small"}),"Delete"]})]})]})},ge=Object(u.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Oe=n(267),ve=function(e){var t=e.setCurrentId,n=ge(),a=Object(z.c)((function(e){return e.postReducer}));return console.log("All posts: ",a),a.length?Object(A.jsx)(F.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(A.jsx)(F.a,{item:!0,xs:12,sm:6,md:6,children:Object(A.jsx)(xe,{post:e,setCurrentId:t})},e._id)}))}):Object(A.jsx)(Oe.a,{})},ye=n(16),we=Object(u.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Ce=n(140),ke=n(273),Se=n(133),Ne=n.n(Se),Ie=function(e){var t,n=e.currentId,r=e.setCurrentId,c=JSON.parse(localStorage.getItem("profile")),o=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(j.a)(o,2),l=i[0],s=i[1],u=Object(z.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),d=Object(z.b)();Object(a.useEffect)((function(){u&&s(u)}),[u]);var p=we(),b=function(){r(null),s({title:"",message:"",tags:"",selectedFile:""})};return(null===c||void 0===c||null===(t=c.result)||void 0===t?void 0:t.name)?Object(A.jsx)(Ce.a,{className:p.paper,children:Object(A.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.form," ").concat(p.root),onSubmit:function(e){var t,a;(e.preventDefault(),n)?d(function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r,c;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,te(e,t);case 3:r=n.sent,c=r.data,a({type:se,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,Object(ye.a)(Object(ye.a)({},l),{},{name:null===c||void 0===c||null===(t=c.result)||void 0===t?void 0:t.name}))):d(function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,ee.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:le,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(ye.a)(Object(ye.a)({},l),{},{name:null===c||void 0===c||null===(a=c.result)||void 0===a?void 0:a.name})));console.log(d),b()},children:[Object(A.jsxs)(h.a,{variant:"h5",children:[n?"Editing":"Creating"," Image Card"]}),Object(A.jsx)(ke.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object(ye.a)(Object(ye.a)({},l),{},{title:e.target.value}))}}),Object(A.jsx)(ke.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:l.message,onChange:function(e){return s(Object(ye.a)(Object(ye.a)({},l),{},{message:e.target.value}))}}),Object(A.jsx)(ke.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:l.tags,onChange:function(e){return s(Object(ye.a)(Object(ye.a)({},l),{},{tags:e.target.value.split(",")}))}}),Object(A.jsx)("div",{className:p.fileInput,children:Object(A.jsx)(Ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(ye.a)(Object(ye.a)({},l),{},{selectedFile:t}))}})}),Object(A.jsx)(O.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(A.jsx)(O.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(A.jsx)(Ce.a,{className:p.paper,children:Object(A.jsx)(h.a,{variant:"h6",align:"center",children:"Please Sign In to create your own cards and like other's cards"})})},ze=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(z.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("/posts");case 3:n=e.sent,a=n.data,t({type:de,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(A.jsx)(E.a,{in:!0,children:Object(A.jsx)(i.a,{children:Object(A.jsxs)(F.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(A.jsx)(F.a,{item:!0,xs:12,sm:7,children:Object(A.jsx)(ve,{setCurrentId:r})}),Object(A.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(Ie,{currentId:n,setCurrentId:r})})]})})})},_e=n(9),Ae=n(137),De=n.n(Ae),Te=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ee=n(270),Fe=n(271),Pe=n(134),Le=n.n(Pe),Be=n(135),We=n.n(Be),Ue=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,o=e.type,i=e.handleShowPassword;return Object(A.jsx)(F.a,{item:!0,xs:12,sm:r?6:12,children:Object(A.jsx)(ke.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:o,InputProps:"password"===t?{endAdornment:Object(A.jsx)(Ee.a,{position:"end",children:Object(A.jsx)(Fe.a,{onClick:i,children:"password"===o?Object(A.jsx)(Le.a,{}):Object(A.jsx)(We.a,{})})})}:null})})},Me=n(136),Re=function(){return Object(A.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Je={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ge=function(){var e=Te(),t=Object(z.b)(),n=Object(s.f)(),r=Object(a.useState)(!1),c=Object(j.a)(r,2),o=c[0],l=c[1],u=Object(a.useState)(!1),d=Object(j.a)(u,2),p=d[0],b=d[1],m=Object(a.useState)(Je),f=Object(j.a)(m,2),x=f[0],v=f[1],y=function(){var e=Object(Z.a)(Y.a.mark((function e(a){var r,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=null===a||void 0===a?void 0:a.profileObj,c=null===a||void 0===a?void 0:a.tokenId;try{t({type:"AUTH",data:{result:r,token:c}}),n.push("/")}catch(o){console.log(o)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){v(Object(ye.a)(Object(ye.a)({},x),{},Object(_e.a)({},e.target.name,e.target.value)))};return Object(A.jsx)(i.a,{component:"main",maxWidth:"xs",children:Object(A.jsxs)(Ce.a,{className:e.paper,elevation:3,children:[Object(A.jsx)(g.a,{className:e.avatar,children:Object(A.jsx)(De.a,{})}),Object(A.jsx)(h.a,{component:"h1",variant:"h5",children:p?"Sign up":"Sign in"}),Object(A.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t(p?function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r,c;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie(e);case 3:r=n.sent,c=r.data,a({type:be,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(x,n):function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r,c;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,oe(e);case 3:r=n.sent,c=r.data,a({type:be,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(x,n))},children:[Object(A.jsxs)(F.a,{container:!0,spacing:2,children:[p&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Ue,{name:"firstName",label:"First Name",handleChange:w,autofocus:!0,half:!0}),Object(A.jsx)(Ue,{name:"secondName",label:"Second Name",handleChange:w,autofocus:!0,half:!0})]}),Object(A.jsx)(Ue,{name:"email",label:"Email Address",handleChange:w,type:"email"}),Object(A.jsx)(Ue,{name:"password",lable:"Password",handleChange:w,type:o?"text":"password",handleShowPassword:function(){l((function(e){return!e}))}}),p&&Object(A.jsx)(Ue,{name:"confirmPassword",label:"Repeat Password",handleChange:w,type:"password"})]}),Object(A.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:p?"Sign Up":"Sign In"}),Object(A.jsx)(Me.GoogleLogin,{clientId:"135873137906-mvdousn5i0onq1mndi4kgbrm155rst51.apps.googleusercontent.com",render:function(t){return Object(A.jsx)(O.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(A.jsx)(Re,{}),variant:"contained",children:"Google Sign In"})},onSuccess:y,onFailure:function(){console.log("Google Sign In was unsuccessful. Try it again later")},cookiePolicy:"single_host_origin"}),Object(A.jsx)(F.a,{container:!0,justify:"flex-end",children:Object(A.jsx)(F.a,{item:!0,children:Object(A.jsx)(O.a,{onClick:function(){b((function(e){return!e})),l(!1)},children:p?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]})]})})},He=n(272),Xe=n(279),qe=n(25),Ve=function(e){var t,n=e.currentId,r=(e.setCurrentId,JSON.parse(localStorage.getItem("profile"))),c=Object(a.useState)({title:"",langetext:""}),o=Object(j.a)(c,2),i=o[0],l=o[1],s=Object(a.useState)(!1),u=Object(j.a)(s,2),d=(u[0],u[1],Object(a.useState)("")),p=Object(j.a)(d,2),b=(p[0],p[1],Object(a.useState)("")),m=Object(j.a)(b,2),h=(m[0],m[1],Object(z.c)((function(e){return n?e.mezmurs.find((function(e){return e._id===n})):null}))),f=Object(z.b)();Object(a.useEffect)((function(){h&&l(h)}),[h]);var x=function(e){var t=e.target,n=t.name,a=t.value;l(Object(ye.a)(Object(ye.a)({},i),{},Object(_e.a)({},n,a)))},g=function(){l({title:"",langetext:""})};if(!(null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t.name))return Object(A.jsx)("div",{style:{color:"red"},children:Object(A.jsx)("p",{variant:"h6",align:"center",children:"Please Sign In to add new mezmur"})});return Object(A.jsxs)("div",{className:"sunday",children:[Object(A.jsx)("h2",{children:"Add new mezmur"}),Object(A.jsxs)("form",{className:"sunday",onSubmit:function(e){var t,a;(e.preventDefault(),n)?f(function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r,c;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ne(e,t);case 3:r=n.sent,c=r.data,a({type:se,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,Object(ye.a)(Object(ye.a)({},i),{},{name:null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t.name}))):f(function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,ee.post("/mezmur",c);case 3:a=t.sent,r=a.data,n({type:le,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(ye.a)(Object(ye.a)({},i),{},{name:null===r||void 0===r||null===(a=r.result)||void 0===a?void 0:a.name})));console.log(f),g()},style:{display:"flex",flexDirection:"column"},children:[Object(A.jsxs)("label",{className:"input-item",placeholder:"add title",style:{margin:"20PX"},children:["Add title",Object(A.jsx)("input",{type:"text",name:"title",id:"title",value:i.title,onChange:x})]}),Object(A.jsxs)("label",{className:"input-item",placeholder:"add artist",style:{margin:"10PX"},children:["Add artist",Object(A.jsx)("input",{type:"text",name:"artist",id:"artist",value:i.artist,onChange:x})]}),Object(A.jsx)("label",{for:"langetext",children:"Add text mezmur here"}),Object(A.jsx)("textarea",{id:"langetext",name:"langetext",rows:"50",cols:"30",placeholder:"Add Mezmur here",value:i.langetext,onChange:x,style:{whiteSpace:"pre-wrap"}}),"  ",Object(A.jsx)("br",{}),Object(A.jsx)("button",{className:"btn",type:"submit",children:"submit"})]}),Object(A.jsx)("div",{className:"todos"})]})},Ke={page:"/mezmur"},Ye=function(e){e.setCurrentId;var t=Object(a.useState)([{title:"",langetext:""}]),n=Object(j.a)(t,2),c=n[0],o=(n[1],Object(a.useState)([])),i=Object(j.a)(o,2),u=(i[0],i[1],Object(a.useState)("")),d=Object(j.a)(u,2),p=d[0],b=d[1],m=r.a.useState(Ke),h=Object(j.a)(m,2),f=(h[0],h[1],Object(s.f)()),x=(Object(s.h)().id,Object(z.b)());Object(a.useEffect)((function(){x(function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("/mezmur");case 3:n=e.sent,a=n.data,t({type:de,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[x]);var g=Object(z.c)((function(e){return e.mezmurReducer}));return console.log("All Mermurs: ",g),console.log("startState: ",c),g.length?Object(A.jsxs)("div",{className:"sunday",children:[Object(A.jsx)("h1",{children:"Mezmur"}),Object(A.jsx)(He.a,{spacing:2,direction:"row",justifyContent:"center",children:Object(A.jsx)(Xe.a,{variant:"outlined",onClick:function(){f.push("/mezmur/addmezmur")},children:"Add new Mezmur"})}),Object(A.jsx)("div",{children:Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"text",placeholder:"search mezmur . . .",value:p,onChange:function(e){return b(e.target.value)}}),g.filter((function(e){return""==p?Object(A.jsx)("div",{children:g.sort((function(e,t){return e.title>t.title?1:-1})).map((function(e){return Object(A.jsx)("ul",{style:{color:"yellow",backgroundColor:"green"},children:Object(A.jsx)("li",{style:{color:"red"},children:Object(A.jsxs)(l.b,{to:"/mezmur/".concat(e._id),children:[" ",[e.title]," "]})})},e._id)}))}):e.title.includes(p)?e:void 0})).map((function(e){return Object(A.jsx)("div",{style:{color:"yellow",backgroundColor:"lightgreen",fontWeight:"bold"},children:Object(A.jsx)("ul",{children:Object(A.jsxs)("li",{style:{display:"flex",justifyContent:"space-between"},children:[Object(A.jsx)(l.b,{style:{textDecoration:"none"},to:"/mezmur/".concat(e._id),children:[e.title]}),Object(A.jsx)("button",{onClick:function(){return x(function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,re(e);case 3:n({type:ue,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(e._id))},style:{border:"none",backgroundColor:"lightgreen"},children:Object(A.jsx)(G.a,{fontSize:"small",style:{color:"red"}})})]})})},e._id)}))]})})]}):Object(A.jsx)(Oe.a,{})},Ze=[{title:"",langetext:""}],Qe=function(){var e=Object(a.useState)(Ze),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(z.b)().dispatch,Object(s.h)().id;return Object(a.useEffect)((function(){$.a.get("http://localhost:8000/mezmur").then((function(e){r(e.data)}))}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{children:"List of Mezmurs"}),Object(A.jsx)("div",{children:n.map((function(e){e.title,e._id}))})]})},$e=(n(195),[{title:"",langetext:""}]),et=function(){var e=Object(s.h)().id,t=Object(a.useState)($e),n=Object(j.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){$.a.get("http://localhost:8000/mezmur/".concat(e)).then((function(e){c(e.data)}))}),[e]),console.log(r._id),Object(A.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(A.jsxs)("h2",{children:[" ",r.title," "]}),Object(A.jsx)("p",{style:{color:"blue"},children:r.artist}),Object(A.jsx)("p",{style:{whiteSpace:"pre-wrap",fontSize:"24PX"},children:r.langetext})]})},tt=function(){d();return Object(A.jsx)(l.a,{children:Object(A.jsxs)(i.a,{maxWidth:"lg",children:[Object(A.jsx)(T,{}),Object(A.jsxs)(s.c,{children:[Object(A.jsx)(s.a,{path:"/home",exact:!0,component:ze}),Object(A.jsx)(s.a,{path:"/auth",exact:!0,component:Ge}),Object(A.jsx)(s.a,{path:"/mezmur",exact:!0,component:Ye}),Object(A.jsx)(s.a,{path:"/mezmur/addmezmur",exact:!0,component:Ve}),Object(A.jsx)(s.a,{path:"/mezmur/list",exact:!0,component:Qe}),Object(A.jsx)(s.a,{path:"/mezmur/:id",exact:!0,component:et})]})]})})},nt=n(68),at=n(138),rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return t.payload;case le:return[].concat(Object(qe.a)(e),[t.payload]);case se:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case ue:return e.filter((function(e){return e._id!==t.payload}));case je:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return t.payload;case le:return[].concat(Object(qe.a)(e),[t.payload]);case pe:case se:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case ue:return e.filter((function(e){return e._id!==t.payload}));case je:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return localStorage.setItem("profile",JSON.stringify(Object(ye.a)({},null===t||void 0===t?void 0:t.data))),console.log(null===t||void 0===t?void 0:t.data),Object(ye.a)(Object(ye.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case me:return localStorage.clear(),Object(ye.a)(Object(ye.a)({},e),{},{authData:null});default:return e}},it=Object(nt.b)({postReducer:rt,mezmurReducer:ct,auth:ot}),lt=(n(196),Object(nt.d)(it,Object(nt.c)(Object(nt.a)(at.a))));o.a.render(Object(A.jsx)(z.a,{store:lt,children:Object(A.jsx)(tt,{})}),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.e920e8d7.chunk.js.map