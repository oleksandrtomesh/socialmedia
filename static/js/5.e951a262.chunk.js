(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{201:function(e,t,n){e.exports={item:"UsersPage_item__2M5xp",avatarButton:"UsersPage_avatarButton__3QkLA",profileImg:"UsersPage_profileImg__31-bS"}},202:function(e,t,n){e.exports={pagination:"UsersPage_pagination__Vzt88",filterUsersBar:"UsersPage_filterUsersBar__33s0M"}},213:function(e,t,n){"use strict";n.r(t);var i=n(4),r=n(0),a=n.n(r),s=n(197),c=n.n(s),l=n(201),o=n.n(l),j=n(62),d=n(19),b=n(210),u=n(2),f=function(e){var t=e.user,n=e.followingInProgress,i=e.toggleFollowingUser;return Object(u.jsxs)("div",{className:o.a.item,children:[Object(u.jsxs)("div",{className:o.a.avatarButton,children:[Object(u.jsx)("div",{children:Object(u.jsx)(d.b,{to:"/profile/"+t.id,children:Object(u.jsx)("img",{alt:"small avatar",className:o.a.profileImg,src:null!==t.photos.small?t.photos.small:j.a})})}),Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{type:"submit",variant:"dark",disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id,t.followed)},children:t.followed?"Unfollow":"Follow"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:t.status})]})]})},O=n(202),m=n.n(O),g=n(94),p=n(209),h=function(e){},x=function(e){var t=e.handleFilterSubmit,n=e.filter;return Object(u.jsx)(p.c,{initialValues:{term:n.term,friend:String(n.friend)},validate:h,onSubmit:function(e,n){var i=n.setSubmitting,r={term:e.term,friend:"false"!==e.friend&&("true"===e.friend||null)};t(r),i(!1)},children:function(e){var t=e.isSubmitting;return Object(u.jsxs)(p.b,{children:[Object(u.jsx)(p.a,{type:"text",name:"term",placeholder:"Provide filter query"}),Object(u.jsxs)(p.a,{as:"select",name:"friend",children:[Object(u.jsx)("option",{value:"null",children:"All users"}),Object(u.jsx)("option",{value:"true",children:"Only followed"}),Object(u.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(u.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},v=n(10),_=n(63),w=n(36),P=n(81),U=n(15),S=n(206),k=a.a.memo((function(){var e=Object(v.c)(),t=Object(v.d)(_.f),n=Object(v.d)(_.g),a=Object(v.d)(_.a),s=Object(v.d)(_.b),l=Object(v.d)(_.h),o=Object(v.d)(_.e),j=Object(v.d)(_.c),d=function(t,n){e(Object(g.d)(t,n))},b=Object(U.g)();return Object(r.useEffect)((function(){var n=S.parse(b.location.search.substr(1)),r=a,c=s;n.page&&(r=Number(n.page)),n.term&&(c=Object(i.a)(Object(i.a)({},c),{},{term:n.term})),n.friend&&(c=Object(i.a)(Object(i.a)({},c),{},{friend:"true"===n.friend||"false"!==n.friend&&null})),e(Object(g.b)(r,t,c))}),[]),Object(r.useEffect)((function(){b.push({pathname:"/users",search:"?term=".concat(s.term,"&friend=").concat(s.friend,"&page=").concat(a)})}),[s,a]),o?Object(u.jsx)(w.a,{}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:m.a.pagination,children:Object(u.jsx)(c.a,{activePage:a,itemsCountPerPage:t,totalItemsCount:n,pageRangeDisplayed:5,onChange:function(n){e(Object(g.c)(n,t,s))},itemClass:"page-item",linkClass:"page-link"})}),Object(u.jsx)("div",{className:m.a.filterUsersBar,children:Object(u.jsx)(x,{handleFilterSubmit:function(n){e(Object(g.b)(1,t,n))},filter:s})}),l.map((function(e){return Object(u.jsx)(f,{user:e,toggleFollowingUser:d,followingInProgress:j},e.id)}))]})})),y=Object(P.a)(k);t.default=y}}]);
//# sourceMappingURL=5.e951a262.chunk.js.map