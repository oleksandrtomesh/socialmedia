(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n(70),c={friendsItems:[{id:1,name:"Tania"},{id:2,name:"Pietia"},{id:3,name:"Sasha"},{id:4,name:"Vova"},{id:5,name:"Vova"},{id:6,name:"Vova"},{id:7,name:"Vova"},{id:8,name:"Vova"},{id:9,name:"Vova"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e},i=n(52),u=n(81),o=n(25),A=n(83),d=n(5),l="myApp/auth-reducer/INITIALIZE_APP",p={initialized:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},g=Object(r.c)({profilePage:i.b,dialogPage:a.b,friendsItems:s,usersPage:u.a,authorization:o.c,app:f}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,h=Object(r.e)(g,b(Object(r.a)(A.a)));window.store=h;var j=h,O=n(0),m=n.n(O),w=n(12),v=n.n(w),x=(n(80),n(48)),C=n(50),B=n(49),E=n(14),S=n(2),I=function(e){return Object(S.jsx)("div",{children:"News"})},U=function(){return Object(S.jsx)("div",{children:"Music"})},Q=function(e){return Object(S.jsx)("div",{children:"Settings"})},P=n(24),D=n(18),T=n(19),y=n.n(T),F=function(e){return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:y.a.nav,children:Object(S.jsxs)("nav",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/profile",children:"Profile"})}),Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/users",children:"Users"})}),Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/news",children:"News"})}),Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/music",children:"Music"})}),Object(S.jsx)("div",{children:Object(S.jsx)(D.b,{className:y.a.item,activeClassName:y.a.activeLink,to:"/settings",children:"Settings"})})]})})})},N=Object(P.b)((function(e){return{friendsItems:e.friendsItems}}))(F),k=n(64),L=n.n(k),H=n(38),G=n(92),R=n(67),M=function(e){var t=Object(H.a)();return Object(S.jsx)("header",{className:L.a.header,children:Object(S.jsxs)("div",{className:L.a.login,children:[e.isAuth&&e.userProfile?Object(S.jsxs)(D.b,{to:"/profile/",children:[Object(S.jsx)("img",{src:null!==e.userProfile.photos.small?e.userProfile.photos.small:R.a,alt:"profile"}),Object(S.jsx)("span",{children:e.userProfile.fullName})]}):Object(S.jsx)(D.b,{to:"/login",children:"Login"}),Object(S.jsx)(G.a,{onClick:function(){e.logout()},className:t.LogoutButton,variant:"contained",type:"submit",children:"Logout"})]})})},J=function(e){Object(C.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).render=function(){return Object(S.jsx)(M,Object(d.a)({},e.props))},e}return n}(m.a.Component),_=Object(P.b)((function(e){return{userProfile:e.authorization.authUserProfile,isAuth:e.authorization.isAuth}}),{logout:o.e})(J),K=n(10),Y=n.n(K),V=n(53),X=n(17),z=n(37),q=n(44),Z=n(32),W=n(35),$=n(56),ee=n.n($),te=function(e){var t=e.isAuth,n=e.captcha,r=e.login,a=function(){var e=Object(X.a)(Y.a.mark((function e(t){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:if(void 0===(n=e.sent)){e.next=5;break}return e.abrupt("return",Object(V.a)({},W.a,n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===t?Object(S.jsx)(E.a,{to:"/profile"}):Object(S.jsx)(z.b,{onSubmit:a,captcha:n,render:function(e){var t=e.handleSubmit,r=e.submitError;return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{className:ee.a.loginForm,onSubmit:t,children:[Object(S.jsx)("div",{className:ee.a.email,children:Object(S.jsx)(z.a,{name:"email",component:q.b,validate:Object(Z.b)(Z.d,Object(Z.c)(30))})}),Object(S.jsx)("div",{children:Object(S.jsx)(z.a,{name:"password",component:q.b,type:"password",validate:Object(Z.b)(Z.d,Object(Z.c)(30))})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(z.a,{name:"rememberMe",component:"input",type:"checkbox"}),Object(S.jsx)("span",{children:"remember me"})]}),n&&Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:n,alt:"captcha"}),Object(S.jsx)(z.a,{name:"captcha",component:q.b})]}),r&&Object(S.jsx)("div",{className:ee.a.error,children:r}),Object(S.jsx)("div",{children:Object(S.jsx)(q.a,{children:"Login"})})]})})}})},ne=Object(P.b)((function(e){return{isAuth:e.authorization.isAuth,captcha:e.authorization.captcha}}),{setUserProfile:i.f,login:o.d})(te),re=n(58),ae=Object(O.lazy)((function(){return n.e(4).then(n.bind(null,191))})),ce=Object(O.lazy)((function(){return n.e(3).then(n.bind(null,190))})),se=Object(O.lazy)((function(){return Promise.all([n.e(5),n.e(6)]).then(n.bind(null,192))})),ie=function(e){Object(C.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.initialized()},e.render=function(){return e.props.initialized?Object(S.jsxs)("div",{className:"app-wrapper",children:[Object(S.jsx)(_,{}),Object(S.jsx)(N,{}),Object(S.jsx)("div",{className:"app-wrapper-content",children:Object(S.jsx)(O.Suspense,{fallback:Object(S.jsx)(re.a,{}),children:Object(S.jsxs)(E.d,{children:[Object(S.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(S.jsx)(E.a,{to:"/profile"})}}),Object(S.jsx)(E.b,{path:"/login",render:function(){return Object(S.jsx)(ne,{})}}),Object(S.jsx)(E.b,{path:"/users",render:function(){return Object(S.jsx)(se,{})}}),Object(S.jsx)(E.b,{path:"/dialogs",render:function(){return Object(S.jsx)(ae,{})}}),Object(S.jsx)(E.b,{path:"/profile/:userId?",render:function(){return Object(S.jsx)(ce,{})}}),Object(S.jsx)(E.b,{path:"/news",component:I}),Object(S.jsx)(E.b,{path:"/music",component:U}),Object(S.jsx)(E.b,{path:"/settings",component:Q}),Object(S.jsx)(E.b,{path:"*",render:function(){return Object(S.jsx)("div",{children:"404 NOT FOUND"})}})]})})})]}):Object(S.jsx)(re.a,{})},e}return n}(m.a.Component),ue=Object(P.b)((function(e){return{initialized:e.app.initialized}}),{initialized:function(){return function(e){var t=e(Object(o.b)());Promise.all([t]).then((function(){e({type:l})}))}}})(ie),oe=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,189)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(131),n(132);v.a.render(Object(S.jsx)(m.a.StrictMode,{children:Object(S.jsx)(D.a,{children:Object(S.jsx)(P.a,{store:j,children:Object(S.jsx)(ue,{})})})}),document.getElementById("root")),oe()},19:function(e,t,n){e.exports={nav:"Navbar_nav__slPY0",item:"Navbar_item__dgERQ",activeLink:"Navbar_activeLink__8SB2B",friendsItems:"Navbar_friendsItems__2YQVu",friends:"Navbar_friends___ubY9"}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return h}));var r=n(10),a=n.n(r),c=n(17),s=n(5),i=n(9),u=function(e){return i.b.post("auth/login",e).then((function(e){return e.data}))},o=function(){return i.b.delete("auth/login").then((function(e){return e.data}))},A=function(){return i.b.get("security/get-captcha-url").then((function(e){return e.data.url}))},d=n(30),l=function(){return i.b.get("auth/me").then((function(e){return e.data}))},p={data:null,isAuth:!1,captcha:void 0,authUserProfile:null},f={addAuthUserData:function(e,t,n,r){return{type:"app/auth-reducer/ADD_DATA",data:{id:e,login:t,email:n},isAuth:r}},addCaptchaUrl:function(e){return{type:"app/auth-reducer/ADD_CAPTCHA_URL",path:e}},addAuthUserProfile:function(e){return{type:"app/auth-reducer/AUTH_USER_PROFILE",userProfile:e}},saveAuthUserPhotoSuccess:function(e){return{type:"app/auth-reducer/SAVE_PHOTO_SUCCESS",photos:e}}},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:if((n=e.sent).resultCode!==i.a.success){e.next=10;break}return r=n.data,c=r.id,s=r.login,u=r.email,t(f.addAuthUserData(c,s,u,!0)),e.next=8,d.a.getUserProfile(c);case 8:o=e.sent,t(f.addAuthUserProfile(o));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:if((r=t.sent).resultCode!==i.a.success){t.next=8;break}n(g()),n(f.addCaptchaUrl(void 0)),t.next=14;break;case 8:if(r.resultCode!==i.a.captchaIsRequired){t.next=13;break}return t.next=11,A();case 11:c=t.sent,n(f.addCaptchaUrl(c));case 13:return t.abrupt("return",r.messages[0]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:e.sent.resultCode===i.a.success&&t(f.addAuthUserData(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth-reducer/ADD_DATA":return Object(s.a)(Object(s.a)({},e),{},{data:t.data,isAuth:t.isAuth});case"app/auth-reducer/ADD_CAPTCHA_URL":return Object(s.a)(Object(s.a)({},e),{},{captcha:t.path});case"app/auth-reducer/AUTH_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{authUserProfile:t.userProfile});case"app/auth-reducer/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{authUserProfile:Object(s.a)(Object(s.a)({},e.authUserProfile),{},{photos:t.photos})});default:return e}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(9),a={getUserProfile:function(e){return r.b.get("profile/"+e).then((function(e){return e.data}))},getUserStatus:function(e){return r.b.get("profile/status/"+e).then((function(e){return e.data}))},updateUserStatus:function(e){return r.b.put("profile/status",{status:e}).then((function(e){return e.data.resultCode}))},updateUserPhoto:function(e){var t=new FormData;return t.append("image",e),r.b.put("profile/photo",t).then((function(e){return e.data}))},updateUserProfile:function(e){return r.b.put("profile",e).then((function(e){return e.data}))}}},32:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},s=function(e,t){var n=t[0].toUpperCase()+t.slice(1);return e&&e.map((function(e){if(e.indexOf(n)>=0)return e}))}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(135),a=Object(r.a)({textField:{width:"100%",marginBottom:"15px"},LoginButton:{width:"10rem",background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white"},LogoutButton:{width:"10rem",background:"white",color:"black"},UploadButton:{background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white"}})},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return A})),n.d(t,"c",(function(){return d}));var r=n(5),a=n(66),c=n(38),s=n(136),i=n(92),u=(n(0),n(2)),o=function(e){var t=Object(c.a)(),n=e.input,i=e.meta,o=(e.children,Object(a.a)(e,["input","meta","children"]));return Object(u.jsx)(s.a,Object(r.a)(Object(r.a)({className:t.textField,variant:"outlined",color:"primary",label:n.name,size:"small",error:i.error&&i.touched,helperText:i.touched?i.error:void 0},n),o))},A=function(e){var t=e.children,n=Object(c.a)();return Object(u.jsx)(i.a,{className:n.LoginButton,variant:"contained",type:"submit",children:t})},d=function(e){var t=e.onChangeHandler,n=e.buttonAssign,r=Object(c.a)();return Object(u.jsxs)("label",{htmlFor:"upload-photo",children:[Object(u.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",onChange:t}),Object(u.jsx)(i.a,{className:r.UploadButton,variant:"contained",component:"span",children:n})]})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return v}));var r=n(10),a=n.n(r),c=n(17),s=n(40),i=n(5),u=n(9),o=n(30),A=n(25),d={postData:[{id:1,message:"Hi, how are you?",likeCounter:12},{id:2,message:"It's my firs post",likeCounter:13},{id:3,message:"It's my second post",likeCounter:14},{id:4,message:"It's my third post",likeCounter:15},{id:5,message:"It's my fourth post",likeCounter:16},{id:6,message:"It's my fifth post",likeCounter:17}],newPostText:"",userProfile:null,userStatus:"",isFetching:!1},l=function(e){return{type:"app/profile-reducer/ADD-POST",newPostText:e}},p=function(e){return{type:"app/profile-reducer/SET_USER_PROFILE",profile:e}},f=function(e){return{type:"app/profile-reducer/SET_USER_STATUS",status:e}},g=function(e){return{type:"app/profile-reducer/SAVE_PHOTO_SUCCESS",photos:e}},b=function(e){return{type:"app/profile-reducer/IS_FETCHING",isFetching:e}},h=function(e){return function(t){return t(l(e))}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b(!0)),t.next=3,o.a.getUserProfile(e);case 3:r=t.sent,n(p(r)),n(b(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getUserStatus(e);case 2:r=t.sent,n(f(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.updateUserStatus(e);case 2:t.sent===u.a.success&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b(!0)),t.next=3,o.a.updateUserPhoto(e);case 3:(r=t.sent).resultCode===u.a.success&&(n(g(r.data.photos)),n(A.a.saveAuthUserPhotoSuccess(r.data.photos))),n(b(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().authorization.data.id,t.next=3,o.a.updateUserProfile(e);case 3:if((s=t.sent).resultCode!==u.a.success){t.next=8;break}n(j(c)),t.next=9;break;case 8:return t.abrupt("return",s.messages);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/profile-reducer/ADD-POST":var n={id:5,message:t.newPostText,likeCounter:0};return Object(i.a)(Object(i.a)({},e),{},{postData:[n].concat(Object(s.a)(e.postData)),newPostText:""});case"app/profile-reducer/UPDATE-TEXT-AREA":return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});case"app/profile-reducer/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{userProfile:t.profile});case"app/profile-reducer/SET_USER_STATUS":return Object(i.a)(Object(i.a)({},e),{},{userStatus:t.status});case"app/profile-reducer/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{userProfile:Object(i.a)(Object(i.a)({},e.userProfile),{},{photos:t.photos})});case"app/profile-reducer/IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}}},56:function(e,t,n){e.exports={error:"Login_error__2s83K",loginForm:"Login_loginForm__1sbSj",email:"Login_email__1nHbB"}},58:function(e,t,n){"use strict";var r=n(90),a=n.n(r),c=n.p+"static/media/Spinner.7593a230.svg",s=(n(0),n(2));t.a=function(){return Object(s.jsx)("div",{className:a.a.loader,children:Object(s.jsx)("img",{src:c,alt:"loader"})})}},64:function(e,t,n){e.exports={header:"Header_header__2NwsF",logo:"Header_logo__2IV0K",login:"Header_login__K0gJt"}},67:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),a=n(5),c="ADD-MESSAGE",s={messageData:[{id:1,message:"Hello World"},{id:2,message:"Here will be message section soon :-)"}],dialogData:[{id:1,name:"User1"},{id:2,name:"User2"},{id:3,name:"User3"},{id:4,name:"User4"},{id:5,name:"User5"},{id:6,name:"User6"},{id:7,name:"User7"}],newMessageText:""},i=function(e){return{type:c,message:e}},u=function(e){return function(t){return t(i(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:5,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[n]),newMessageText:""});default:return e}}},80:function(e,t,n){},81:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return b}));var r=n(10),a=n.n(r),c=n(17),s=n(40),i=n(5),u=n(9),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.b.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},A=function(e){return u.b.post("follow/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.b.delete("follow/".concat(e)).then((function(e){return e.data}))},l={users:[],pageSize:8,totalUsersCount:0,currentPage:1,isFetching:!1,isFollow:!1,followingInProgress:[]},p={setUsers:function(e){return{type:"app/users-reducer/SET-USERS",users:e}},selectPage:function(e){return{type:"app/users-reducer/SELECT-PAGE",currentPage:e}},setTotalCount:function(e){return{type:"app/users-reducer/SET-TOTAL-COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"app/users-reducer/TOGGLE_IS_FETCHING",isFetching:e}},toggleIsFollowFetching:function(e,t){return{type:"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING",isFetching:e,userId:t}},toggleFollowing:function(e,t){return{type:"app/users-reducer/TOGGLE_FOLLOWING",userId:e,userFollowed:t}}},f=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p.toggleIsFetching(!0)),n.next=3,o(e,t);case 3:c=n.sent,r(p.toggleIsFetching(!1)),r(p.setUsers(c.items)),r(p.setTotalCount(c.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p.selectPage(e)),r(p.toggleIsFetching(!0)),n.next=4,o(e,t);case 4:c=n.sent,r(p.toggleIsFetching(!1)),r(p.setUsers(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(p.toggleIsFollowFetching(!0,e)),!1!==t){n.next=6;break}return n.next=4,A(e);case 4:n.sent.resultCode===u.a.success&&r(p.toggleFollowing(e,!0));case 6:if(!0!==t){n.next=12;break}return n.next=10,d(e);case 10:n.sent.resultCode===u.a.success&&r(p.toggleFollowing(e,!1));case 12:r(p.toggleIsFollowFetching(!1,e));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/users-reducer/TOGGLE_FOLLOWING":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:t.userFollowed}):e}))});case"app/users-reducer/SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"app/users-reducer/SELECT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"app/users-reducer/SET-TOTAL-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"app/users-reducer/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"app/users-reducer/TOGGLE_IS_FOLLOW_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r,a=n(82),c=n.n(a);!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captchaIsRequired=10]="captchaIsRequired"}(r||(r={}));var s=c.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d3bb9faa-edaa-4bc4-b657-f2a8ebee1f2b"}})},90:function(e,t,n){e.exports={loader:"Loader_loader__3dyN5"}}},[[134,1,2]]]);
//# sourceMappingURL=main.47f7a9ec.chunk.js.map