(this["webpackJsonpmusiq-box"]=this["webpackJsonpmusiq-box"]||[]).push([[0],{118:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},123:function(t,e,n){},124:function(t,e,n){},127:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(71),r=n.n(s),i=n(22),A=n.n(i),o=n(31),l=n(5),j="https://ws.audioscrobbler.com/2.0",d=function(t){var e=t;return fetch("".concat(j,"/?method=artist.gettoptracks&artist=").concat(e,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))};function b(t){return fetch("".concat(j,"/?method=artist.getsimilar&artist=").concat(t,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))}function m(t,e){return fetch("".concat(j,"/?method=track.getsimilar&artist=").concat(t,"&track=").concat(e,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))}function u(t,e){var n="https://www.googleapis.com/youtube/v3/search?part=snippet&key=".concat("AIzaSyCoWE-Uib-Ol5mrQmhcuB0Fiv4dKWjiNFI","&type=video&maxResults=1&q=").concat(t,"%20").concat(e);return fetch(n).then((function(t){return t.json()})).then((function(t){return t.items[0].id.videoId})).catch((function(t){return console.log(t)}))}var f=n.p+"static/media/play-button.5a462678.png",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAHtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////vcY6ogAAACd0Uk5TAAkUAwiT1FQc3Z8BHuGkAh055K8gHxbg+/TVVdGMoKPfpZEpBJCN29ZxkwAAAAFiS0dEKL2wtbIAAAAJcEhZcwABOvYAATr2ATqxVzoAAACXSURBVFjD7dTNEoIgFIZhMhRTkVLTrNTo79z/HdbytIExWtT0Pcszw7tg4AgBAP9iES2Dzss4UUGBdEVZHhIoNJUGAQQQeCMg04JZbyqqGz7Ztu79IONOM121o16/2B+cgehIPoMzYNRYMlPd08nyiT1fPJeQG0Y0muyVT8zM/fSL7wABBL4y0CZ0Czn/3A933/8HgI94AMk/GJ8bnM9xAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTA1VDE1OjA0OjMwKzAxOjAw+NtfYgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0wNVQxNTowNDozMCswMTowMImG594AAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxOS0wMi0wMSBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmdBe+LIAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAA1MTLA0FBRAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU1NDQ3MzA3MPNozv4AAAATdEVYdFRodW1iOjpTaXplADIuNTVLQkK6t+VuAAAAO3RFWHRUaHVtYjo6VVJJAGZpbGU6Ly8uL3VwbG9hZHMvNTYvQWJOU2tqdy8xODc1L3BsdXNfMTIwMjQ5LnBuZ7d69aIAAAAASUVORK5CYII=",h=(n(89),n(1));var O=function(t){var e={artist:t.track.artist.name,artistId:t.track.artist.mbid,name:t.track.name,playcount:t.track.playcount},n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),d=j[0],b=j[1];Object(c.useEffect)((function(){r(""),b(!1)}),[t]);var m=function(){var t=Object(o.a)(A.a.mark((function t(){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e.artist,e.name);case 2:n=t.sent,e.videoId=n,r(n),b(!0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return d?Object(h.jsxs)("div",{className:"trackContent",children:[Object(h.jsx)("p",{children:t.num+1}),Object(h.jsxs)("div",{className:"trackName",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.track.name})}),Object(h.jsxs)("p",{children:["plays: ",t.track.playcount]})]}),Object(h.jsx)("img",{id:"playButton",onClick:m,src:f,alt:"play-button"}),Object(h.jsx)("img",{id:"saveButton",onClick:function(){return t.saveSong(e)},src:p,alt:"save-button"}),Object(h.jsx)("iframe",{width:"420",height:"281",src:"https://www.youtube.com/embed/".concat(s),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):Object(h.jsxs)("div",{className:"trackContent",children:[Object(h.jsx)("p",{children:t.num+1}),Object(h.jsxs)("div",{className:"trackName",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.track.name})}),Object(h.jsxs)("p",{children:["plays: ",t.track.playcount]})]}),Object(h.jsx)("img",{id:"playButton",onClick:m,src:f,alt:"play-button"}),Object(h.jsx)("img",{id:"saveButton",onClick:function(){return t.saveSong(e)},src:p,alt:"save-button"})]})};n(91);var x=function(t){var e=Object(c.useState)(""),n=Object(l.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),A=i[0],o=i[1],j=function(t){s(t.target.value)},b=function(t){"Enter"===t.key&&d(a).then((function(t){return t.json()})).then((function(t){var e=t.toptracks.track.slice(0,10);o(e)}))};return 0===A.length?Object(h.jsx)("div",{className:"mainContentPage",children:Object(h.jsx)("div",{className:"searchCtn",children:Object(h.jsx)("input",{id:"searchInput",type:"text",value:a,onChange:j,onKeyPress:b,placeholder:". . . search by artist"})})}):Object(h.jsxs)("div",{className:"mainContentPage",children:[Object(h.jsx)("div",{className:"searchCtn",children:Object(h.jsx)("input",{id:"searchInput",type:"text",value:a,onChange:j,onKeyPress:b,placeholder:". . . search artist"})}),Object(h.jsxs)("div",{className:"trackCtn",children:[Object(h.jsx)("h3",{children:"Top Tracks"}),A.map((function(e,n){return Object(h.jsx)(O,{num:n,track:e,saveSong:t.saveSong},n)}))]}),Object(h.jsx)("div",{className:"top-albums-list"})]})},g=n(55),v=n.p+"static/media/play-button2.81d450a4.png",N=n(20);n(92);var P=function(t){return Object(h.jsx)("div",{className:"moremenu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(N.b,{className:"songLink",to:"/similarsongs",children:Object(h.jsx)("li",{onClick:t.getSimSongs,children:"find similar songs"})}),Object(h.jsx)(N.b,{className:"artistLink",to:"/similarartists",children:Object(h.jsx)("li",{onClick:t.getSimArtist,children:"find similar artists"})}),Object(h.jsx)("li",{onClick:t.onRemove,className:"remove-btn",children:"remove"})]})})},w=n(32),Z=n.n(w);n(118);var k=function(t){var e=t.data,n=e.name,c=e.artist,a=e.id;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsxs)("ul",{className:"playlist-item-ctn",children:[Object(h.jsx)("li",{className:"play-ctn",children:Object(h.jsx)("img",{src:v,alt:"play-button",onClick:function(){return t.onPlay(t.data)}})}),Object(h.jsx)("li",{className:"track-name",children:n}),Object(h.jsx)("li",{className:"track-artist",children:c}),Object(h.jsx)("li",{id:"more-icon",children:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("img",{id:"more-img",src:"data:image/png;base64,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",alt:""}),Object(h.jsx)(P,{onRemove:function(){Z.a.delete("https://evening-everglades-19373.herokuapp.com/api/songs/".concat(a))},getSimArtist:function(){return t.getArtist(c)},getSimSongs:function(){return t.getSongs(c,n)}})]})})]})})})})};var y=function(t){var e=t.data,n=e.play,c=e.info;return n?Object(h.jsxs)("div",{className:"videoplayer",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{onClick:t.closePlayer,className:"videoplayerCloseBtn",children:" close"})}),Object(h.jsx)("iframe",{width:"420",height:"221",src:"https://www.youtube.com/embed/".concat(c.videoId),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):Object(h.jsx)(h.Fragment,{})};n(119);var T=function(t){var e=Object(c.useState)([]),n=Object(l.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)({info:{},play:!1}),i=Object(l.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(!1),m=Object(l.a)(b,2),f=m[0],p=m[1];Object(c.useEffect)((function(){Z.a.get("https://musiqbox.com/api/songs").then((function(t){return s(t.data)}))}),[f]);var O=function(){var t=Object(o.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.videoId){t.next=4;break}d({info:e,play:!0}),t.next=12;break;case 4:return t.next=6,u(e.artist,e.name);case 6:return n=t.sent,t.next=9,Z.a.put("https://musiqbox.herokuapp.com/api/songs/".concat(e.id),{videoId:n});case 9:return t.next=11,p(!f);case 11:d({info:Object(g.a)(Object(g.a)({},e),{},{videoId:n}),play:!0});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"likedsongs",children:[Object(h.jsx)("h1",{children:"Liked Songs"}),a.map((function(e){return Object(h.jsx)(k,{data:e,onPlay:O,getSongs:t.getSongs,getArtist:t.getArtist},e.name)})),Object(h.jsx)(y,{data:j,closePlayer:function(){d({info:{},play:!1})}})]})};var z=function(t){var e=Object(c.useState)([]),n=Object(l.a)(e,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){s(t.data)}),[t]),Object(h.jsxs)("div",{className:"sim-artist-ctn",children:[Object(h.jsx)("h1",{className:"sim-artist",children:"Similar Artists"}),a.map((function(t,e){return Object(h.jsxs)("p",{children:[" ",t.name]},e)}))]})};var M=function(t){var e=Object(c.useState)([]),n=Object(l.a)(e,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){s(t.data)}),[t]),Object(h.jsxs)("div",{className:"sim-songs-ctn",children:[Object(h.jsx)("h1",{className:"sim-songs",children:" Similar Songs"}),a.map((function(t,e){return Object(h.jsxs)("p",{children:[" ",t.name]},e)}))]})};n(120);function C(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("h2",{children:"Home Page"}),Object(h.jsx)("div",{children:"Welcome!"})]})}n(121);var B=n(141),D=n(146),S=n(149);function H(){return Object(h.jsx)("div",{className:"topbar",children:Object(h.jsxs)("div",{className:"topbarWrapper",children:[Object(h.jsx)("div",{className:"topLeft",children:Object(h.jsx)("span",{className:"logo",children:Object(h.jsx)(N.b,{to:"/home",className:"rLink",children:"MusiqBox"})})}),Object(h.jsxs)("div",{className:"topRight",children:[Object(h.jsx)("div",{className:"topbarIcon",children:Object(h.jsx)(B.a,{})}),Object(h.jsx)("div",{className:"topbarIcon",children:Object(h.jsx)(D.a,{})}),Object(h.jsx)(S.a,{className:"topAvatar",alt:"user picture",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFoQ591FtCor701IrSSKx8l7KwV7RdSiUAg&usqp=CAU"})]})]})})}n(122);var R=n(74),Q=n.n(R),V=n(76),E=n.n(V),W=n(77),G=n.n(W);function I(){return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)("div",{className:"sidebarWrapper",children:Object(h.jsxs)("div",{className:"sidebarMenu",children:[Object(h.jsx)("div",{className:"sidebarTitle",children:"MENU"}),Object(h.jsxs)("ul",{className:"sidebarList",children:[Object(h.jsx)(N.b,{to:"/",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(Q.a,{className:"sidebarIcon"}),"Home"]})}),Object(h.jsx)(N.b,{to:"/search",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(E.a,{className:"sidebarIcon"}),"Search"]})}),Object(h.jsx)(N.b,{to:"/likedsongs",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(G.a,{className:"sidebarIcon"}),"Liked Songs"]})})]})]})})})}var Y,J,L=n(8),F=(n(123),n(29)),K=n(58),U=n.p+"static/media/main-bak.c0409179.jpg",q=(n(124),n(147));function X(t){var e=t.startDemo;return Object(h.jsx)("div",{className:"loginBar",children:Object(h.jsxs)("div",{className:"loginBarWrapper",children:[Object(h.jsx)("div",{className:"topLeft",children:Object(h.jsx)("span",{className:"logo",children:"MusiqBox"})}),Object(h.jsxs)("div",{className:"topRight",children:[Object(h.jsx)("div",{className:"loginBarIcon",children:Object(h.jsx)(q.a,{className:"loginBtn",children:"Log In "})}),Object(h.jsx)("div",{className:"loginBarIcon",children:Object(h.jsx)(q.a,{className:"demoBtn",onClick:function(){return e(!0)},children:"Demo"})})]})]})})}var _=K.a.img(Y||(Y=Object(F.a)(["\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1920px;\n    \n  /* Set up proportionate scaling */\n  width: 100%;\n  height: 100%;\n    \n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  filter: grayscale(100%);\n\n  @media screen and (max-width: 1920px) { /* Specific to this particular image */\n      left: 50%;\n      margin-left: -960px;   /* 50% */\n    \n  }\n  "])));_.defaultProps={src:U};var $=K.a.div(J||(J=Object(F.a)(["\n  text-align: center;\n  margin: 0 auto;\n  padding: 150px 75px 120px 75px;\n  position: relative;\n  color: black;\n  z-index: 3;\n\n  > h1 {\n    font-size: 3em;\n  }\n\n  @media screen and (max-width:550px){\n    padding: 80px 25px;\n  }\n"])));function tt(t){var e=t.startDemo;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{startDemo:e}),Object(h.jsx)(_,{}),Object(h.jsxs)($,{children:[Object(h.jsx)("h1",{style:{marginBottom:"20px"},children:"Explore New Music"}),Object(h.jsx)("h3",{children:"Start listening, watching, and sharing your musical world."})]})]})}var et=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(!1),u=Object(l.a)(d,2),f=u[0],p=u[1],O=function(){var t=Object(o.a)(A.a.mark((function t(e,n){var c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a([]);case 2:return t.next=4,m(e,n).then((function(t){return t.json()})).then((function(t){return t.similartracks.track.slice(0,5)}));case 4:c=t.sent,a(c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j([]);case 2:return t.next=4,b(e).then((function(t){return t.json()})).then((function(t){return t.similarartists.artist.slice(0,10)}));case 4:n=t.sent,j(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return f?Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(H,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(I,{}),Object(h.jsxs)(L.c,{children:[Object(h.jsx)(L.a,{path:"/similarartists",children:Object(h.jsx)(z,{data:i})}),Object(h.jsx)(L.a,{path:"/similarsongs",children:Object(h.jsx)(M,{data:n})}),Object(h.jsx)(L.a,{path:"/likedsongs",children:Object(h.jsx)(T,{getSongs:O,getArtist:g})}),Object(h.jsx)(L.a,{path:"/search",children:Object(h.jsx)(x,{saveSong:function(t){Z.a.post("https://musiqbox.herokuapp.com/api/songs",t)}})}),Object(h.jsx)(L.a,{path:"/",children:Object(h.jsx)(C,{})})]})]})]})}):Object(h.jsx)(tt,{startDemo:p})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(et,{})}),document.getElementById("root"))},89:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.b6c1d1b0.chunk.js.map