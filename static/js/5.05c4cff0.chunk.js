(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{216:function(e,t,c){"use strict";c.r(t);var r=c(54),n=c(0),s=c.n(n),j=c(10),a=c(77),o=c(91),i=c(61),u=c(2),b=function(){var e=Object(j.c)(),t=Object(j.d)((function(e){return e.chat.status}));return Object(n.useEffect)((function(){return e(Object(o.c)()),function(){e(Object(o.d)())}}),[]),Object(u.jsxs)("div",{children:["error"===t&&Object(u.jsx)("div",{children:"Some error ocurred. Please refresh tha page"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(h,{})]})]})},l=s.a.memo((function(){var e=Object(j.d)((function(e){return e.chat.messages})),t=Object(n.useRef)(null),c=Object(n.useState)(!1),s=Object(r.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){var e;a&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),Object(u.jsxs)("div",{style:{height:"500px",overflowY:"scroll"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!a&&o(!0):a&&o(!1)},children:[e.map((function(e){return Object(u.jsx)(O,{message:e},e.id)})),Object(u.jsx)("div",{ref:t})]})})),O=s.a.memo((function(e){var t=e.message;return console.log(">>>>>message"),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.photo?t.photo:i.a,style:{width:"30px"}})," ",Object(u.jsx)("b",{children:t.userName}),Object(u.jsx)("br",{}),t.message,Object(u.jsx)("hr",{})]})})),h=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=(Object(j.c)(),Object(j.d)((function(e){return e.chat.status})));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{onChange:function(e){return s(e.target.value)},value:c}),Object(u.jsx)("button",{disabled:"ready"!==a,onClick:function(){c&&(Object(o.b)(c),s(""))},children:"Send"})]})})};t.default=Object(a.a)((function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{})})}))}}]);
//# sourceMappingURL=5.05c4cff0.chunk.js.map