(this.webpackJsonprobinhood=this.webpackJsonprobinhood||[]).push([[0],{219:function(e,t,c){},220:function(e,t,c){},221:function(e,t,c){},230:function(e,t,c){},232:function(e,t,c){},250:function(e,t,c){},384:function(e,t,c){},385:function(e,t,c){},390:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(47),i=c.n(s),r=(c(218),c(219),c(220),c.p+"static/media/robinhood.d4c5626b.svg"),o=(c(221),c(182)),l=c.n(o),d=c(4);var j=function(){return Object(d.jsxs)("div",{className:"header__wrapper",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)("img",{src:r,width:25,alt:"logo"})}),Object(d.jsx)("div",{className:"header__search",children:Object(d.jsxs)("div",{className:"header__searchContainer",children:[Object(d.jsx)("div",{className:"header__searchIcon",children:Object(d.jsx)(l.a,{})}),Object(d.jsx)("input",{placeholder:"Search",type:"text"})]})}),Object(d.jsxs)("div",{className:"header__menuItems",children:[Object(d.jsx)("a",{href:"#",children:"Rewards"}),Object(d.jsx)("a",{href:"#",children:"Portfolio"}),Object(d.jsx)("a",{href:"#",children:"Cash"}),Object(d.jsx)("a",{href:"#",children:"Messages"}),Object(d.jsx)("a",{href:"#",children:"Account"})]})]})},h=(c(230),c(75)),b=c.n(h),u=c(187),_=c(23);c(232);var m=function(e){return Object(d.jsx)("div",{className:"timeline__container",children:Object(d.jsxs)("div",{className:"timeline__buttons__container",children:[Object(d.jsx)("button",{className:"timeline__button ",onClick:function(){e.childToParent("1d")},children:"1D"}),Object(d.jsx)("button",{className:"timeline__button ",onClick:function(){return e.childToParent("5d")},children:"5D"}),Object(d.jsx)("button",{className:"timeline__button",onClick:function(){return e.childToParent("1m")},children:"1M"}),Object(d.jsx)("button",{className:"timeline__button",onClick:function(){return e.childToParent("3m")},children:"3M"}),Object(d.jsx)("button",{className:"timeline__button",onClick:function(){return e.childToParent("1y")},children:"1Y"}),Object(d.jsx)("button",{className:"timeline__button",onClick:function(){return e.childToParent("5y")},children:"5Y"})]})})},p=c(207),x=c(132),O=c.n(x),f=(c(250),c(411)),v=c(417),N=c(97),g=c(202),w=c(206);var y=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("1m"),i=Object(_.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(!0),j=Object(_.a)(l,2),h=j[0],x=j[1],O="/chart/".concat(r,"?token=").concat("Tpk_485d53051788445bbb5c2ce88556c821");return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,fetch("".concat("https://sandbox.iexapis.com/stable/stock/","AAPL").concat(O));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,console.log(c),a(c),x(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]),Object(d.jsxs)("div",{className:"linegraph",children:[h?Object(d.jsx)("div",{className:"spinnerContainer",children:Object(d.jsx)(p.a,{animation:"border",style:{color:"rgb(0 200 5)"}})}):Object(d.jsx)(f.a,{width:"100%",height:196,children:Object(d.jsxs)(v.a,{width:500,height:300,data:c,children:[Object(d.jsx)(N.a,{cursor:{stroke:"rgba(138,151,158,1)",strokeWidth:.8},content:k,isAnimationActive:!1,position:{y:-40}}),Object(d.jsx)(g.a,{type:"number",domain:["dataMin","dataMax"],hide:"true"}),Object(d.jsx)(w.a,{type:"monotone",dataKey:"close",dot:!1,stroke:"rgb(0 200 5)",strokeWidth:3,animationEasing:"ease"})]})}),Object(d.jsx)(m,{childToParent:function(e){return o(e)}})]})},k=function(e){var t=e.active,c=e.payload;e.label;return t&&void 0!==c?Object(d.jsxs)("div",{className:"tooptip__wrapper",style:{position:"relative",right:"50px"},children:[Object(d.jsx)("div",{className:"tooptip__date",style:{fontSize:"16px",color:"rgba(138,151,158,1)"},children:c[0].payload.label}),Object(d.jsxs)("div",{className:"tooptip__price",style:{fontSize:"16px",color:"rgba(138,151,158,1)"},children:["$","".concat(c[0].value)]})]}):null},P=c(416),S=c(418);var T=function(){return Object(d.jsx)("div",{className:"newsfeed",children:Object(d.jsxs)("div",{className:"newsfeed__container",children:[Object(d.jsx)("div",{className:"newsfeed__chartSection",children:Object(d.jsxs)("div",{className:"newsfeed__portfolio",children:[Object(d.jsx)("h1",{className:"newsfeed__portfolioHeading",children:"$8888"}),Object(d.jsx)("p",{className:"newsfeed__portfolioParagraph",children:"+$32.7 (+0.3%) Today"}),Object(d.jsx)("div",{className:"newsfeed__chart",children:Object(d.jsx)(y,{})})]})}),Object(d.jsxs)("div",{className:"newsfeed__buying__section",children:[Object(d.jsx)("h2",{className:"newsfeed__buying__heading",children:" Buying Power"}),Object(d.jsx)("h2",{className:"newsfeed__buying__heading",children:" $4.11"})]}),Object(d.jsxs)("div",{className:"newsfeed__popularlists__section",children:[Object(d.jsx)("div",{className:"newsfeed__popularlists__intro",children:Object(d.jsx)("h1",{className:"newsfeed__popularlists__heading",children:"Trending Lists"})}),Object(d.jsx)("div",{className:"newsfeed_popularlists_badges",children:["Technology","Top Movies","Upcoming Earnings","Crypto","Cannabis","Healthcare Supplies","Index ETFs","Technology","China","Pharma"].map((function(e){return Object(d.jsx)(P.a,{className:"topic__badge",size:"medium",clickable:!0,variant:"outlined",label:e,avatar:Object(d.jsx)(S.a,{src:"https://avatars.dicebear.com/api/jdenticon/".concat(e,".svg")})})}))})]})]})})},C=c(50),A=(c(384),c.p+"static/media/stock.ca7fa34d.svg");c(385);var I=function(e){var t=(e.price-e.openPrice)/e.openPrice*100;return Object(d.jsxs)("div",{className:"row_container",children:[Object(d.jsxs)("div",{className:"row__intro",children:[Object(d.jsx)("h1",{className:"row__introheading",children:null===e||void 0===e?void 0:e.name}),Object(d.jsx)("p",{className:"row_introParagraph",children:e.volume&&e.volume+" shares"})]}),Object(d.jsx)("div",{className:"row__chart",children:Object(d.jsx)("img",{src:A,height:16,alt:"mini-graph"})}),Object(d.jsxs)("div",{className:"row__numbers",children:[Object(d.jsxs)("p",{className:"row__price",children:["$",e.price]}),Object(d.jsxs)("p",{className:t>0?"row__percentage":"row__percentage__negative",children:[" ",Number(t).toFixed(2),"%"]})]})]})},E=c(204).a.initializeApp({apiKey:"AIzaSyAVEzD9xPXRxvBX1vwy4jYSIW2VP2IGR5Q",authDomain:"robinhood-12471.firebaseapp.com",projectId:"robinhood-12471",storageBucket:"robinhood-12471.appspot.com",messagingSenderId:"84780397502",appId:"1:84780397502:web:377cd8078bdd4a25ebbfef"}).firestore(),F="&token=".concat("sandbox_c6immiaad3i8jt9dunf0");var M=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(_.a)(s,2),r=i[0],o=i[1],l=function(e){return O.a.get("".concat("https://finnhub.io/api/v1/quote?symbol=").concat(e).concat(F)).catch((function(e){console.error("Error",e.message)}))};return Object(n.useEffect)((function(){E.collection("myStocks").onSnapshot((function(e){var t=[],c=[];e.docs.map((function(e){t.push(l(e.data().ticker).then((function(t){c.push({id:e.id,data:e.data(),info:t.data})})))})),Promise.all(t).then((function(){o(c)}))}));var e=[],t=[];["AAPL","MSFT","TSLA","FB"].map((function(c){t.push(l(c).then((function(t){e.push(Object(C.a)({name:c},t.data))})))})),Promise.all(t).then((function(){a(e)}))}),[]),Object(d.jsx)("div",{className:"stats",children:Object(d.jsxs)("div",{className:"stats__container",children:[Object(d.jsx)("div",{className:"stats__header",children:Object(d.jsx)("p",{className:"stats__paragraph",children:"Stocks"})}),Object(d.jsx)("div",{className:"stats__content",children:Object(d.jsx)("div",{className:"stats_rows",children:r.map((function(e){return Object(d.jsx)(I,{name:e.data.ticker,openPrice:e.info.o,volume:e.data.shares,price:e.info.c},e.data.ticker)}))})}),Object(d.jsx)("div",{className:"stats__header stats-list",children:Object(d.jsx)("p",{className:"stats__paragraph",children:"Lists"})}),Object(d.jsx)("div",{className:"stats__content",children:Object(d.jsx)("div",{className:"stats_rows",children:c.map((function(e){return Object(d.jsx)(I,{name:e.name,openPrice:e.o,price:e.c},e.name)}))})})]})})};var L=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"app__header",children:Object(d.jsx)(j,{})}),Object(d.jsx)("div",{className:"app__body",children:Object(d.jsxs)("div",{className:"app__container",children:[Object(d.jsx)(T,{}),Object(d.jsx)(M,{})]})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,419)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),z()}},[[390,1,2]]]);
//# sourceMappingURL=main.2f82dc18.chunk.js.map