(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{215:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n(0),r=n.n(c),a=n(202),l=n.n(a),s=n(61),o=n(19),d=n(190),j=n(152),b=n(105),u=n(151),m=Object(u.a)({containerGrid:{marginTop:"12px"},paper:{padding:"15px",width:"100%"},button:{background:"linear-gradient(45deg, gray, #2d2d2d)",color:"white",marginTop:"15px"},userPhoto:{width:"100%"},userName:{marginTop:"15px",textAlign:"center"}}),O=n(187),f=n(2),h=function(e){var t=e.user,n=e.followingInProgress,i=e.toggleFollowingUser,c=m();return Object(f.jsx)(d.a,{container:!0,direction:"column",justify:"center",className:c.containerGrid,children:Object(f.jsxs)(j.a,{className:c.paper,children:[Object(f.jsx)("div",{children:Object(f.jsx)(o.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{alt:"small avatar",className:c.userPhoto,src:null!==t.photos.small?t.photos.small:s.a})})}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{noWrap:!0,className:c.userName,children:t.name})}),Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{className:c.button,fullWidth:!0,disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id,t.followed)},children:t.followed?"Unfollow":"Follow"})})]})})},p=n(90),g=n(212),x=function(e){},v=function(e){var t=e.handleFilterSubmit,n=e.filter;return Object(f.jsx)(g.c,{initialValues:{term:n.term,friend:String(n.friend)},validate:x,onSubmit:function(e,n){var i=n.setSubmitting,c={term:e.term,friend:"false"!==e.friend&&("true"===e.friend||null)};t(c),i(!1)},children:function(e){var t=e.isSubmitting;return Object(f.jsx)(g.b,{children:Object(f.jsxs)(d.a,{container:!0,direction:"row",spacing:2,justify:"center",children:[Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)(g.a,{type:"text",name:"term",placeholder:"Provide filter query"})}),Object(f.jsx)(d.a,{item:!0,children:Object(f.jsxs)(g.a,{as:"select",name:"friend",children:[Object(f.jsx)("option",{value:"null",children:"All users"}),Object(f.jsx)("option",{value:"true",children:"Only followed"}),Object(f.jsx)("option",{value:"false",children:"Only unfollowed"})]})}),Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)("button",{type:"submit",disabled:t,children:"Submit"})})]})})}})},w=n(10),y=n(62),N=n(37),P=n(77),S=n(16),k=n(209),C=r.a.memo((function(){var e=Object(w.c)(),t=Object(w.d)(y.f),n=Object(w.d)(y.g),r=Object(w.d)(y.a),a=Object(w.d)(y.b),s=Object(w.d)(y.h),o=Object(w.d)(y.e),j=Object(w.d)(y.c),b=function(t,n){e(Object(p.d)(t,n))},u=Object(S.g)();return Object(c.useEffect)((function(){var n=k.parse(u.location.search.substr(1)),c=r,l=a;n.page&&(c=Number(n.page)),n.term&&(l=Object(i.a)(Object(i.a)({},l),{},{term:n.term})),n.friend&&(l=Object(i.a)(Object(i.a)({},l),{},{friend:"true"===n.friend||"false"!==n.friend&&null})),e(Object(p.b)(c,t,l))}),[]),Object(c.useEffect)((function(){u.push({pathname:"/users",search:"?term=".concat(a.term,"&friend=").concat(a.friend,"&page=").concat(r)})}),[a,r]),o?Object(f.jsx)(N.a,{}):Object(f.jsxs)(d.a,{container:!0,direction:"column",alignItems:"center",children:[Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)(l.a,{activePage:r,itemsCountPerPage:t,totalItemsCount:n,pageRangeDisplayed:5,onChange:function(n){e(Object(p.c)(n,t,a))},itemClass:"page-item",linkClass:"page-link"})}),Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)(v,{handleFilterSubmit:function(n){e(Object(p.b)(1,t,n))},filter:a})}),Object(f.jsx)(d.a,{item:!0,container:!0,direction:"row",alignItems:"center",spacing:2,children:s.map((function(e){return Object(f.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,justify:"center",children:Object(f.jsx)(h,{user:e,toggleFollowingUser:b,followingInProgress:j},e.id)})}))})]})})),F=Object(P.a)(C);t.default=F}}]);
//# sourceMappingURL=5.e7185f02.chunk.js.map