(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{101:function(e,t,n){e.exports={profileStatus:"ProfileStatus_profileStatus__1aoaG"}},102:function(e,t,n){e.exports={MyPosts:"MyPosts_MyPosts__39yWW",addNewPost:"MyPosts_addNewPost__2T3iO",post:"MyPosts_post__2TevQ"}},103:function(e,t,n){e.exports={content:"Profile_content__1A_Ne",profile_info:"Profile_profile_info__3sXB9",img:"Profile_img__1JUDy",profile_photo:"Profile_profile_photo__3d9IN",uploadButton:"Profile_uploadButton__xKTjd"}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r,a=n(91),c=n.n(a);!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captchaIsRequired=10]="captchaIsRequired"}(r||(r={}));var s=c.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"94255a0f-3471-4b7b-b59d-a3f0dda8cb88"}})},150:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n(80),c=n(56),s=n(8),i=n.n(s),o=n(18),u=n(35),d=n(4),l=n(12),j=function(e){return l.b.get("profile/"+e).then((function(e){return e.data}))},b=function(e){return l.b.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return l.b.put("profile/status",{status:e}).then((function(e){return e.data.resultCode}))},p=function(e){var t=new FormData;return t.append("image",e),l.b.put("profile/photo",t).then((function(e){return e.data}))},A=function(e){return l.b.put("profile",e).then((function(e){return e.data}))},O=function(e){return l.b.post("auth/login",e).then((function(e){return e.data}))},h=function(){return l.b.delete("auth/login").then((function(e){return e.data}))},g=function(){return l.b.get("security/get-captcha-url").then((function(e){return e.data.url}))},m=function(){return l.b.get("auth/me").then((function(e){return e.data}))},x={data:null,isAuth:!1,captcha:void 0,authUserProfile:null},v=function(e,t,n,r){return{type:"app/auth-reducer/ADD_DATA",data:{id:e,login:t,email:n},isAuth:r}},w=function(e){return{type:"app/auth-reducer/ADD_CAPTCHA_URL",path:e}},C=function(e){return{type:"app/auth-reducer/AUTH_USER_PROFILE",userProfile:e}},E=function(e){return{type:"app/auth-reducer/SAVE_PHOTO_SUCCESS",photos:e}},S=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,a,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:if((n=e.sent).resultCode!==l.a.success){e.next=10;break}return r=n.data,a=r.id,c=r.login,s=r.email,t(v(a,c,s,!0)),e.next=8,j(a);case 8:o=e.sent,t(C(o));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:if((r=t.sent).resultCode!==l.a.success){t.next=8;break}n(S()),n(w(void 0)),t.next=14;break;case 8:if(r.resultCode!==l.a.captchaIsRequired){t.next=13;break}return t.next=11,g();case 11:a=t.sent,n(w(a));case 13:return t.abrupt("return",r.messages[0]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth-reducer/ADD_DATA":return Object(d.a)(Object(d.a)({},e),{},{data:t.data,isAuth:t.isAuth});case"app/auth-reducer/ADD_CAPTCHA_URL":return Object(d.a)(Object(d.a)({},e),{},{captcha:t.path});case"app/auth-reducer/AUTH_USER_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:t.userProfile});case"app/auth-reducer/SAVE_PHOTO_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:Object(d.a)(Object(d.a)({},e.authUserProfile),{},{photos:t.photos})});default:return e}},P={postData:[{id:1,message:"Hi, how are you?",likeCounter:12},{id:2,message:"It's my firs post",likeCounter:13},{id:3,message:"It's my second post",likeCounter:14},{id:4,message:"It's my third post",likeCounter:15},{id:5,message:"It's my fourth post",likeCounter:16},{id:6,message:"It's my fifth post",likeCounter:17}],newPostText:"",userProfile:null,userStatus:"",isFetching:!1},y=function(e){return{type:"app/profile-reducer/ADD-POST",newPostText:e}},N=function(e){return{type:"app/profile-reducer/SET_USER_PROFILE",profile:e}},T=function(e){return{type:"app/profile-reducer/SET_USER_STATUS",status:e}},Q=function(e){return{type:"app/profile-reducer/SAVE_PHOTO_SUCCESS",photos:e}},D=function(e){return{type:"app/profile-reducer/IS_FETCHING",isFetching:e}},k=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0)),t.next=3,j(e);case 3:r=t.sent,n(N(r)),n(D(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n,r){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().authorization.data.id,t.next=3,A(e);case 3:if((c=t.sent).resultCode!==l.a.success){t.next=8;break}n(k(a)),t.next=9;break;case 8:return t.abrupt("return",c.messages);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/profile-reducer/ADD-POST":var n={id:5,message:t.newPostText,likeCounter:0};return Object(d.a)(Object(d.a)({},e),{},{postData:[n].concat(Object(u.a)(e.postData)),newPostText:""});case"app/profile-reducer/UPDATE-TEXT-AREA":return Object(d.a)(Object(d.a)({},e),{},{newPostText:t.newText});case"app/profile-reducer/SET_USER_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{userProfile:t.profile});case"app/profile-reducer/SET_USER_STATUS":return Object(d.a)(Object(d.a)({},e),{},{userStatus:t.status});case"app/profile-reducer/SAVE_PHOTO_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{userProfile:Object(d.a)(Object(d.a)({},e.userProfile),{},{photos:t.photos})});case"app/profile-reducer/IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});default:return e}},F=n(90),L=n(92),H="myApp/auth-reducer/INITIALIZE_APP",M={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},R=Object(r.c)({profilePage:U,dialogPage:a.b,friendsItems:c.a,usersPage:F.a,authorization:I,app:G}),J=Object(r.d)(R,Object(r.a)(L.a));window.store=J;var K=J,Y=n(0),X=n.n(Y),V=n(14),z=n.n(V),q=(n(89),n(64)),Z=n(69),W=n(68),$=n(16),ee=n(2),te=function(e){return Object(ee.jsx)("div",{children:"News"})},ne=function(){return Object(ee.jsx)("div",{children:"Music"})},re=function(e){return Object(ee.jsx)("div",{children:"Settings"})},ae=n(19),ce=n(21),se=n.n(ce),ie=function(e){return Object(ee.jsx)("div",{children:Object(ee.jsx)("div",{className:se.a.nav,children:Object(ee.jsxs)("nav",{children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/profile",children:"Profile"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/users",children:"Users"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"chat",children:"Chat"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/news",children:"News"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/music",children:"Music"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ae.b,{className:se.a.item,activeClassName:se.a.activeLink,to:"/settings",children:"Settings"})})]})})})},oe=n(59),ue=n.n(oe),de=n(39),le=n(186),je=n(187),be=n(105),fe=n(61),pe=n(10),Ae=n(62),Oe=function(e){return e.authorization.authUserProfile},he=n(184),ge=function(){var e,t,n=Object(pe.c)(),r=Object(pe.d)(Oe),a=Object(pe.d)(Ae.d),c=Object(de.a)();return Object(ee.jsx)(he.a,{position:"static",children:Object(ee.jsxs)(le.a,{children:[Object(ee.jsx)(je.a,{className:ue.a.headerText,children:"Social Network"}),a&&r?Object(ee.jsxs)(ae.b,{to:"/profile/",className:ue.a.headerUserData,children:[Object(ee.jsx)("img",{className:ue.a.logo,src:null!==(null===(e=r.photos)||void 0===e?void 0:e.small)?null===(t=r.photos)||void 0===t?void 0:t.small:fe.a,alt:"profile"}),Object(ee.jsx)("span",{children:r.fullName})]}):Object(ee.jsx)(ae.b,{className:ue.a.headerUserData,to:"/login",children:Object(ee.jsx)(je.a,{children:"You are not authorized"})}),Object(ee.jsx)(be.a,{onClick:function(){n(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:e.sent.resultCode===l.a.success&&t(v(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:c.LogoutButton,variant:"contained",type:"submit",children:"Logout"})]})})},me=n(46),xe=n(22),ve=n(20),we=n(24),Ce=n(34),Ee=n(70),Se=n.n(Ee),Be=function(){var e=Object(pe.d)(Ae.d),t=Object(pe.d)((function(e){return e.authorization.captcha})),n=Object(pe.c)(),r=function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(B(t));case 2:if(void 0===(r=e.sent)){e.next=5;break}return e.abrupt("return",Object(me.a)({},Ce.a,r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===e?Object(ee.jsx)($.a,{to:"/profile"}):Object(ee.jsx)(xe.b,{onSubmit:r,captcha:t,render:function(e){var n=e.handleSubmit,r=e.submitError;return Object(ee.jsx)("div",{children:Object(ee.jsxs)("form",{className:Se.a.loginForm,onSubmit:n,children:[Object(ee.jsx)("div",{className:Se.a.email,children:Object(ee.jsx)(xe.a,{name:"email",component:ve.b,validate:Object(we.b)(we.d,Object(we.c)(30))})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(xe.a,{name:"password",component:ve.b,type:"password",validate:Object(we.b)(we.d,Object(we.c)(30))})}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(xe.a,{name:"rememberMe",component:"input",type:"checkbox"}),Object(ee.jsx)("span",{children:"remember me"})]}),t&&Object(ee.jsxs)("div",{children:[Object(ee.jsx)("img",{src:t,alt:"captcha"}),Object(ee.jsx)(xe.a,{name:"captcha",component:ve.b})]}),r&&Object(ee.jsx)("div",{className:Se.a.error,children:r}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ve.a,{children:"Login"})})]})})}})},Ie=n(37),Pe=n(77),ye=n(54),Ne=n(38),Te=n(41),Qe=n.n(Te),De=n(101),ke=n.n(De),_e=n(106),Ue=function(e){var t=e.userStatus,n=e.updateStatus,r=Object(Y.useState)(!1),a=Object(ye.a)(r,2),c=a[0],s=a[1],i=Object(Y.useState)(t),o=Object(ye.a)(i,2),u=o[0],d=o[1];Object(Y.useEffect)((function(){d(t)}),[t]);return Object(ee.jsx)("div",{className:ke.a.profileStatus,children:c?Object(ee.jsx)("div",{children:Object(ee.jsx)(_e.a,{autoFocus:!0,onChange:function(e){d(e.currentTarget.value)},onBlur:function(){s(!1),n(u)},type:"text",value:u,label:"Status",variant:"outlined",size:"small"})}):Object(ee.jsxs)("div",{children:[Object(ee.jsxs)(je.a,{variant:"overline",onClick:function(){s(!0)},children:[" ",Object(ee.jsx)("b",{children:"Status: "}),u||"No Status"]}),Object(ee.jsx)("div",{children:Object(ee.jsx)("i",{children:"Click to change"})})]})})},Fe=function(e){var t=e.setEditMode,n=e.userProfile,r=(Object(Ne.a)(e,["setEditMode","userProfile"]),Object(pe.c)()),a=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(_(n));case 2:if(void 0===(a=e.sent)){e.next=7;break}return e.abrupt("return",Object(me.a)({},Ce.a,a));case 7:t(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ee.jsxs)("div",{className:Qe.a.editMode,children:[Object(ee.jsx)(je.a,{variant:"h4",children:"Edit Mode"}),Object(ee.jsx)(xe.b,{onSubmit:a,initialValues:n,render:function(e){var t=e.handleSubmit,r=e.submitError;return Object(ee.jsxs)("form",{onSubmit:t,className:Qe.a.editModeForm,children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(xe.a,{name:"fullName",component:ve.b,label:"Full Name"})}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(xe.a,{name:"aboutMe",component:ve.b,label:"About Me"}),r&&Object(ee.jsx)("div",{className:Qe.a.error,children:Object(we.a)(r,"AboutMe")})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(xe.a,{name:"lookingForAJobDescription",label:"My professional skill",component:ve.b}),r&&Object(ee.jsx)("div",{className:Qe.a.error,children:Object(we.a)(r,"LookingForAJobDescription")})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(je.a,{variant:"h5",children:"Contacts:"}),null!=n&&Object.keys(n.contacts).map((function(e){return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(xe.a,{name:"contacts."+e,component:ve.b,label:e}),r&&Object(ee.jsx)("div",{className:Qe.a.error,children:Object(we.a)(r,e)})]},e)}))]}),Object(ee.jsx)(ve.a,{children:"Save"})]})}})]})},Le=function(e){var t=e.setEditMode,n=e.userProfile,r=e.isOwner,a=Object(de.a)();return null!=n?Object(ee.jsxs)("div",{className:Qe.a.info,children:[Object(ee.jsx)(je.a,{variant:"h3",children:n.fullName}),Object(ee.jsxs)(je.a,{variant:"overline",component:"div",children:[n.aboutMe&&Object(ee.jsx)("b",{children:"About me:"})," ",n.aboutMe]}),Object(ee.jsx)(je.a,{variant:"overline",component:"div",children:n.lookingForAJobDescription&&Object(ee.jsxs)("span",{children:[Object(ee.jsx)("b",{children:"My professional skill:"})," ",n.lookingForAJobDescription]})}),Object(ee.jsx)(je.a,{variant:"overline",children:"Contacts:"})," ",Object.keys(n.contacts).map((function(e){return null!=n.contacts?Object(ee.jsx)(He,{contactTitle:e,contactValue:n.contacts[e]},e):null})),r&&Object(ee.jsx)(be.a,{onClick:function(){t(!0)},className:a.LoginButton,variant:"contained",type:"submit",fullWidth:!0,children:"Edit Mode"})]}):null},He=function(e){var t=e.contactTitle,n=e.contactValue;return Object(ee.jsx)("div",{children:n&&Object(ee.jsx)("span",{children:Object(ee.jsxs)(je.a,{variant:"overline",children:[Object(ee.jsxs)("b",{children:[t,": "]}),Object(ee.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:n})]})})})},Me=function(e){var t=e.userStatus,n=e.updateStatus,r=Object(Ne.a)(e,["userStatus","updateStatus"]),a=Object(Y.useState)(!1),c=Object(ye.a)(a,2),s=c[0],i=c[1];return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(Ue,{userStatus:t,updateStatus:n}),s?Object(ee.jsx)(Fe,Object(d.a)({setEditMode:i},r)):Object(ee.jsx)(Le,Object(d.a)({setEditMode:i},r))]})},Ge=n(190),Re=function(e){var t=e.addNewPost;return Object(ee.jsx)("div",{children:Object(ee.jsx)(xe.b,{onSubmit:function(e){t(e.newPostText),e.newPostText=""},render:function(e){var t=e.handleSubmit;return Object(ee.jsx)("form",{onSubmit:t,style:{padding:"15px"},children:Object(ee.jsxs)(Ge.a,{container:!0,direction:"row",spacing:2,children:[Object(ee.jsx)(Ge.a,{item:!0,xs:9,children:Object(ee.jsx)(xe.a,{name:"newPostText",component:ve.b,label:"Something new?",validate:Object(we.c)(150)})}),Object(ee.jsx)(Ge.a,{item:!0,xs:3,children:Object(ee.jsx)(ve.a,{children:"Post"})})]})})}})})},Je=n(102),Ke=n.n(Je),Ye=n(53),Xe=n.n(Ye),Ve=function(e){var t=e.message,n=e.likeCounter;return Object(ee.jsx)("div",{children:Object(ee.jsxs)("div",{className:Xe.a.item,children:[Object(ee.jsxs)("div",{className:Xe.a.postInfo,children:[Object(ee.jsx)("img",{src:"https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722",alt:"postAvatar"}),Object(ee.jsxs)("div",{className:Xe.a.name,children:[Object(ee.jsx)("div",{children:"Oleksandr Tomesh"}),Object(ee.jsx)("div",{children:"04/12/2020"})]})]}),Object(ee.jsx)("div",{className:Xe.a.message,children:t}),Object(ee.jsxs)("div",{className:Xe.a.like,children:["Like ",n]})]})})},ze=function(e){return e.profilePage.userProfile},qe=function(e){return e.authorization.data},Ze=function(e){return e.profilePage.userStatus},We=function(e){return e.profilePage.isFetching},$e=function(e){return e.profilePage.postData},et=n(152),tt=function(e){var t=e.isOwner,n=Object(pe.c)(),r=Object(pe.d)($e);return!0===t?Object(ee.jsxs)(Ge.a,{container:!0,direction:"column",spacing:2,children:[Object(ee.jsx)(Ge.a,{item:!0,children:Object(ee.jsx)(et.a,{square:!0,children:Object(ee.jsx)(Re,{addNewPost:function(e){n(function(e){return function(t){return t(y(e))}}(e))}})})}),Object(ee.jsx)(Ge.a,{item:!0,children:r.map((function(e){return Object(ee.jsx)(et.a,{children:Object(ee.jsx)(Ve,{message:e.message,likeCounter:e.likeCounter})},e.message)}))})]}):Object(ee.jsx)("div",{className:Ke.a.post,children:"This user does not have posts yet"})},nt=n(103),rt=n.n(nt),at=function(e){var t,n,r=e.isOwner,a=Object(pe.c)(),c=Object(pe.d)(ze),s=Object(pe.d)(We),u=Object(pe.d)(Ze),d=function(e){a(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(D(!0)),t.next=3,p(e);case 3:(r=t.sent).resultCode===l.a.success&&(n(Q(r.data.photos)),n(E(r.data.photos))),n(D(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return c?Object(ee.jsxs)(Ge.a,{container:!0,direction:"column",children:[Object(ee.jsx)(et.a,{square:!0,children:Object(ee.jsxs)(Ge.a,{item:!0,container:!0,direction:"row",children:[Object(ee.jsxs)(Ge.a,{item:!0,container:!0,direction:"column",spacing:2,justify:"flex-start",alignContent:"center",xs:12,md:5,style:{marginTop:"1rem"},children:[Object(ee.jsx)(Ge.a,{item:!0,children:s?Object(ee.jsx)(Ie.a,{}):Object(ee.jsx)("img",{className:rt.a.img,src:null!==(null===(t=c.photos)||void 0===t?void 0:t.large)?null===(n=c.photos)||void 0===n?void 0:n.large:fe.a,alt:"profile"})}),Object(ee.jsx)(Ge.a,{item:!0,children:r&&Object(ee.jsx)(ve.c,{onChangeHandler:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&d(e.target.files[0])},buttonAssign:"Upload Profile Photo"})})]}),Object(ee.jsx)(Ge.a,{item:!0,xs:12,md:7,children:Object(ee.jsx)(Me,{userProfile:c,userStatus:u,updateStatus:function(e){a(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:t.sent===l.a.success&&n(T(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},isOwner:r})})]})}),Object(ee.jsx)(Ge.a,{item:!0,container:!0,style:{marginTop:20},children:Object(ee.jsx)(tt,{isOwner:r})})]}):Object(ee.jsx)(Ie.a,{})},ct=X.a.memo((function(){var e=Object(pe.c)(),t=Object(pe.d)(qe),n=Object(pe.d)(We),r=function(t){e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:r=t.sent,n(T(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},a=function(n){var a=parseInt(n);a||null==t||(a=t.id),function(t){e(k(t))}(a),r(a)},c=Object($.h)().userId;return Object(Y.useEffect)((function(){a(c)}),[c]),Object(ee.jsx)("div",{children:n?Object(ee.jsx)(Ie.a,{}):Object(ee.jsx)(at,{isOwner:!c})})})),st=Object(Pe.a)(ct),it=Object(Y.lazy)((function(){return n.e(4).then(n.bind(null,215))})),ot=Object(Y.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,216))})),ut=Object(Y.lazy)((function(){return n.e(5).then(n.bind(null,213))})),dt=function(e){Object(Z.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.initialized()},e.render=function(){return e.props.initialized?Object(ee.jsxs)(Ge.a,{container:!0,direction:"column",spacing:2,children:[Object(ee.jsx)(Ge.a,{item:!0,xs:12,children:Object(ee.jsx)(ge,{})}),Object(ee.jsxs)(Ge.a,{item:!0,container:!0,direction:"row",spacing:2,children:[Object(ee.jsx)(Ge.a,{item:!0,sm:1}),Object(ee.jsx)(Ge.a,{item:!0,xs:12,sm:2,children:Object(ee.jsx)(ie,{})}),Object(ee.jsx)(Ge.a,{item:!0,sm:8,children:Object(ee.jsx)(Y.Suspense,{fallback:Object(ee.jsx)(Ie.a,{}),children:Object(ee.jsxs)($.d,{children:[Object(ee.jsx)($.b,{exact:!0,path:"/",render:function(){return Object(ee.jsx)($.a,{to:"/profile"})}}),Object(ee.jsx)($.b,{path:"/login",render:function(){return Object(ee.jsx)(Be,{})}}),Object(ee.jsx)($.b,{path:"/users",render:function(){return Object(ee.jsx)(ot,{})}}),Object(ee.jsx)($.b,{path:"/dialogs",render:function(){return Object(ee.jsx)(it,{})}}),Object(ee.jsx)($.b,{path:"/profile/:userId?",render:function(){return Object(ee.jsx)(st,{})}}),Object(ee.jsx)($.b,{path:"/news",component:te}),Object(ee.jsx)($.b,{path:"/music",component:ne}),Object(ee.jsx)($.b,{path:"/settings",component:re}),Object(ee.jsx)($.b,{path:"/chat",render:function(){return Object(ee.jsx)(ut,{})}}),Object(ee.jsx)($.b,{path:"*",render:function(){return Object(ee.jsx)("div",{children:"404 NOT FOUND"})}})]})})}),Object(ee.jsx)(Ge.a,{item:!0,sm:1})]})]}):Object(ee.jsx)(Ie.a,{})},e}return n}(X.a.Component),lt=Object(pe.b)((function(e){return{initialized:e.app.initialized}}),{initialized:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:H})}))}}})(dt),jt=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,214)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(147),n(148);z.a.render(Object(ee.jsx)(X.a.StrictMode,{children:Object(ee.jsx)(ae.a,{children:Object(ee.jsx)(pe.a,{store:K,children:Object(ee.jsx)(lt,{})})})}),document.getElementById("root")),jt()},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return l}));var r=n(4),a=n(38),c=n(39),s=n(106),i=n(105),o=(n(153),n(0),n(2)),u=function(e){var t=Object(c.a)(),n=e.input,i=e.meta,u=(e.children,Object(a.a)(e,["input","meta","children"]));return Object(o.jsx)(s.a,Object(r.a)(Object(r.a)({className:t.textField,variant:"outlined",color:"primary",label:n.name,size:"small",error:i.error&&i.touched,helperText:i.touched?i.error:void 0},n),u))},d=function(e){var t=e.children,n=Object(c.a)();return Object(o.jsx)(i.a,{className:n.LoginButton,variant:"contained",type:"submit",fullWidth:!0,children:t})},l=function(e){var t=e.onChangeHandler,n=e.buttonAssign,r=Object(c.a)();return Object(o.jsxs)("label",{htmlFor:"upload-photo",children:[Object(o.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",onChange:t}),Object(o.jsx)(i.a,{className:r.UploadButton,variant:"contained",component:"span",fullWidth:!0,children:n})]})}},21:function(e,t,n){e.exports={nav:"Navbar_nav__slPY0",item:"Navbar_item__dgERQ",activeLink:"Navbar_activeLink__8SB2B",friendsItems:"Navbar_friendsItems__2YQVu",friends:"Navbar_friends___ubY9"}},24:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},s=function(e,t){var n=t[0].toUpperCase()+t.slice(1);return e&&e.map((function(e){if(e.indexOf(n)>=0)return e}))}},37:function(e,t,n){"use strict";var r=n(99),a=n.n(r),c=n.p+"static/media/Spinner.7593a230.svg",s=(n(0),n(2));t.a=function(){return Object(s.jsx)("div",{className:a.a.loader,children:Object(s.jsx)("img",{src:c,alt:"loader"})})}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(151),a=Object(r.a)({textField:{width:"100%"},LoginButton:{background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white"},LogoutButton:{width:"10rem",background:"white",color:"black"},UploadButton:{background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white",width:"150%"}})},41:function(e,t,n){e.exports={info:"Info_info__2qP2I",job:"Info_job__1li1e",error:"Info_error__2N64K",editMode:"Info_editMode__32hPv",editModeForm:"Info_editModeForm__1e2fL"}},53:function(e,t,n){e.exports={item:"Post_item__1oqx-",postInfo:"Post_postInfo__3ZaLI",name:"Post_name__2LXem",message:"Post_message__2SCuw"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(35),a=n(4),c={friendsItems:[]},s={addFollowingUser:function(e){return{type:"app/friendsItems-reducer/ADD-FOLLOWING-USER",user:e}},removeUserFromFriendsItems:function(e){return{type:"app/friendsItems-reducer/REMOVE-USER",id:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/friendsItems-reducer/ADD-FOLLOWING-USER":return Object(a.a)(Object(a.a)({},e),{},{friendsItems:[].concat(Object(r.a)(e.friendsItems),[t.user])});case"app/friendsItems-reducer/REMOVE-USER":return Object(a.a)(Object(a.a)({},e),{},{friendsItems:e.friendsItems.filter((function(e){return e.id!==t.id}))});default:return e}}},59:function(e,t,n){e.exports={headerText:"Header_headerText__11jLN",logo:"Header_logo__2IV0K",headerUserData:"Header_headerUserData__3baIP"}},61:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},62:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d}));var r=function(e){return e.usersPage.users},a=function(e){return e.usersPage.pageSize},c=function(e){return e.usersPage.totalUsersCount},s=function(e){return e.usersPage.currentPage},i=function(e){return e.usersPage.isFetching},o=function(e){return e.usersPage.followingInProgress},u=function(e){return e.authorization.isAuth},d=function(e){return e.usersPage.filter}},70:function(e,t,n){e.exports={error:"Login_error__2s83K",loginForm:"Login_loginForm__1sbSj",email:"Login_email__1nHbB"}},77:function(e,t,n){"use strict";var r=n(4),a=n(38),c=n(64),s=n(100),i=n(69),o=n(68),u=n(0),d=n.n(u),l=n(16),j=n(10),b=n(2),f=function(e){return{isAuth:e.authorization.isAuth}};t.a=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(c.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){var t=this.props,n=t.isAuth,c=Object(a.a)(t,["isAuth"]);return n?Object(b.jsx)(e,Object(r.a)({},c)):Object(b.jsx)(l.a,{to:"/login"})}}]),u}(d.a.Component);return Object(j.b)(f)(t)}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(35),a=n(4),c="ADD-MESSAGE",s={messageData:[{id:1,message:"Hello World"},{id:2,message:"Here will be message section soon :-)"}],dialogData:[{id:1,name:"User1"},{id:2,name:"User2"},{id:3,name:"User3"},{id:4,name:"User4"},{id:5,name:"User5"},{id:6,name:"User6"},{id:7,name:"User7"}],newMessageText:""},i=function(e){return{type:c,message:e}},o=function(e){return function(t){return t(i(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:5,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[n]),newMessageText:""});default:return e}}},89:function(e,t,n){},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return w}));var r=n(8),a=n.n(r),c=n(18),s=n(35),i=n(4),o=n(12),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return o.b.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n.term)+(null===n.friend?"":"&friend=".concat(n.friend))).then((function(e){return e.data}))},d=function(e){return o.b.post("follow/".concat(e)).then((function(e){return e.data}))},l=function(e){return o.b.delete("follow/".concat(e)).then((function(e){return e.data}))},j=n(56),b={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!1,isFollow:!1,followingInProgress:[],filter:{term:"",friend:null}},f=function(e){return{type:"app/users-reducer/SET-USERS",users:e}},p=function(e){return{type:"app/users-reducer/SELECT-PAGE",currentPage:e}},A=function(e){return{type:"app/users-reducer/SET-FILTER",payload:{filter:e}}},O=function(e){return{type:"app/users-reducer/SET-TOTAL-COUNT",totalCount:e}},h=function(e){return{type:"app/users-reducer/TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING",isFetching:e,userId:t}},m=function(e,t){return{type:"app/users-reducer/TOGGLE_FOLLOWING",userId:e,userFollowed:t}},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(h(!0)),c(A(n)),r.next=4,u(e,t,n);case 4:s=r.sent,c(h(!1)),c(f(s.items)),c(O(s.totalCount));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},v=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(p(e)),c(h(!0)),r.next=4,u(e,t,n);case 4:s=r.sent,c(h(!1)),c(f(s.items));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r,c){var s,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(g(!0,e)),!1!==t){n.next=6;break}return n.next=4,d(e);case 4:n.sent.resultCode===o.a.success&&(s=c(),i=s.usersPage.users.filter((function(t){return t.id===e}))[0],r(m(e,!0)),r(j.b.addFollowingUser(i)));case 6:if(!0!==t){n.next=12;break}return n.next=10,l(e);case 10:n.sent.resultCode===o.a.success&&(r(m(e,!1)),r(j.b.removeUserFromFriendsItems(e)));case 12:r(g(!1,e));case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/users-reducer/TOGGLE_FOLLOWING":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:t.userFollowed}):e}))});case"app/users-reducer/SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"app/users-reducer/SET-FILTER":return Object(i.a)(Object(i.a)({},e),{},{filter:t.payload.filter});case"app/users-reducer/SELECT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"app/users-reducer/SET-TOTAL-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"app/users-reducer/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},99:function(e,t,n){e.exports={loader:"Loader_loader__3dyN5"}}},[[150,1,2]]]);
//# sourceMappingURL=main.84d8da3d.chunk.js.map