(this["webpackJsonpmusiq-box"]=this["webpackJsonpmusiq-box"]||[]).push([[0],{100:function(t,e,c){},125:function(t,e,c){},126:function(t,e,c){},133:function(t,e,c){},134:function(t,e,c){},135:function(t,e,c){},136:function(t,e,c){},137:function(t,e,c){},138:function(t,e,c){},140:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(74),s=c.n(a),i=c(25),r=c.n(i),o=c(33),l=c(6),A="https://ws.audioscrobbler.com/2.0",d=function(t){var e=t;return fetch("".concat(A,"/?method=artist.gettoptracks&artist=").concat(e,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))};function j(t){return fetch("".concat(A,"/?method=artist.getsimilar&artist=").concat(t,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))}function m(t,e){return fetch("".concat(A,"/?method=track.getsimilar&artist=").concat(t,"&track=").concat(e,"&api_key=").concat("90f1c61ab8699a721ba6ea9e390c5361","&format=json"))}function b(t,e){var c="https://www.googleapis.com/youtube/v3/search?part=snippet&key=".concat("AIzaSyCoWE-Uib-Ol5mrQmhcuB0Fiv4dKWjiNFI","&type=video&maxResults=1&q=").concat(t,"%20").concat(e);return fetch(c).then((function(t){return t.json()})).then((function(t){return t.items[0].id.videoId})).catch((function(t){return console.log(t)}))}var u=c.p+"static/media/play-button.5a462678.png",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAHtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////vcY6ogAAACd0Uk5TAAkUAwiT1FQc3Z8BHuGkAh055K8gHxbg+/TVVdGMoKPfpZEpBJCN29ZxkwAAAAFiS0dEKL2wtbIAAAAJcEhZcwABOvYAATr2ATqxVzoAAACXSURBVFjD7dTNEoIgFIZhMhRTkVLTrNTo79z/HdbytIExWtT0Pcszw7tg4AgBAP9iES2Dzss4UUGBdEVZHhIoNJUGAQQQeCMg04JZbyqqGz7Ztu79IONOM121o16/2B+cgehIPoMzYNRYMlPd08nyiT1fPJeQG0Y0muyVT8zM/fSL7wABBL4y0CZ0Czn/3A933/8HgI94AMk/GJ8bnM9xAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTA1VDE1OjA0OjMwKzAxOjAw+NtfYgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0wNVQxNTowNDozMCswMTowMImG594AAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxOS0wMi0wMSBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmdBe+LIAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAA1MTLA0FBRAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU1NDQ3MzA3MPNozv4AAAATdEVYdFRodW1iOjpTaXplADIuNTVLQkK6t+VuAAAAO3RFWHRUaHVtYjo6VVJJAGZpbGU6Ly8uL3VwbG9hZHMvNTYvQWJOU2tqdy8xODc1L3BsdXNfMTIwMjQ5LnBuZ7d69aIAAAAASUVORK5CYII=",h=(c(97),c(1));var f=function(t){var e={artist:t.track.artist.name,artistId:t.track.artist.mbid,name:t.track.name,playcount:t.track.playcount},c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1],A=Object(n.useState)(!1),d=Object(l.a)(A,2),j=d[0],m=d[1];Object(n.useEffect)((function(){i(""),m(!1)}),[t]);var f=function(){var t=Object(o.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.artist,e.name);case 2:c=t.sent,e.videoId=c,i(c),m(!0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return j?Object(h.jsxs)("div",{className:"trackContent",children:[Object(h.jsx)("p",{children:t.num+1}),Object(h.jsxs)("div",{className:"trackName",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.track.name})}),Object(h.jsxs)("p",{children:["plays: ",t.track.playcount]})]}),Object(h.jsx)("img",{id:"playButton",onClick:f,src:u,alt:"play-button"}),Object(h.jsx)("img",{id:"saveButton",onClick:function(){return t.saveSong(e)},src:p,alt:"save-button"}),Object(h.jsx)("iframe",{width:"420",height:"281",src:"https://www.youtube.com/embed/".concat(s),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):Object(h.jsxs)("div",{className:"trackContent",children:[Object(h.jsx)("p",{children:t.num+1}),Object(h.jsxs)("div",{className:"trackName",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.track.name})}),Object(h.jsxs)("p",{children:["plays: ",t.track.playcount]})]}),Object(h.jsx)("img",{id:"playButton",onClick:f,src:u,alt:"play-button"}),Object(h.jsx)("img",{id:"saveButton",onClick:function(){return t.saveSong(e)},src:p,alt:"save-button"})]})};c(99);var g=function(t){var e=Object(n.useState)(""),c=Object(l.a)(e,2),a=c[0],s=c[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],A=r[1],j=function(t){s(t.target.value)},m=function(t){"Enter"===t.key&&d(a).then((function(t){return t.json()})).then((function(t){var e=t.toptracks.track.slice(0,10);A(e)}))};return 0===o.length?Object(h.jsx)("div",{className:"mainContentPage",children:Object(h.jsx)("div",{className:"searchCtn",children:Object(h.jsx)("input",{id:"searchInput",type:"text",value:a,onChange:j,onKeyPress:m,placeholder:". . . search by artist"})})}):Object(h.jsx)("div",{className:"mainContentPage",children:Object(h.jsxs)("div",{className:"searchCtn",children:[Object(h.jsx)("input",{id:"searchInput",type:"text",value:a,onChange:j,onKeyPress:m,placeholder:". . . search artist"}),Object(h.jsxs)("div",{className:"trackCtn",children:[Object(h.jsx)("h3",{children:"Top Tracks"}),o.map((function(e,c){return Object(h.jsx)(f,{num:c,track:e,saveSong:t.saveSong},c)}))]}),Object(h.jsx)("div",{className:"top-albums-list"})]})})},O=c(59),x=c.p+"static/media/play-button2.81d450a4.png",v=c(23);c(100);var N=function(t){return Object(h.jsx)("div",{className:"moremenu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(v.b,{className:"songLink",to:"/similarsongs",children:Object(h.jsx)("li",{onClick:t.getSimSongs,children:"find similar songs"})}),Object(h.jsx)(v.b,{className:"artistLink",to:"/similarartists",children:Object(h.jsx)("li",{onClick:t.getSimArtist,children:"find similar artists"})}),Object(h.jsx)("li",{onClick:t.onRemove,className:"remove-btn",children:"remove"})]})})},w=c(34),y=c.n(w);c(125);var P=function(t){var e=t.data,c=e.name,n=e.artist,a=e.id;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsxs)("ul",{className:"playlist-item-ctn",children:[Object(h.jsx)("li",{className:"play-ctn",children:Object(h.jsx)("img",{src:x,alt:"play-button",onClick:function(){return t.onPlay(t.data)}})}),Object(h.jsx)("li",{className:"track-name",children:c}),Object(h.jsx)("li",{className:"track-artist",children:n}),Object(h.jsx)("li",{id:"more-icon",children:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("img",{id:"more-img",src:"data:image/png;base64,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",alt:""}),Object(h.jsx)(N,{onRemove:function(){y.a.delete("https://musiqbox.herokuapp.com/api/songs/".concat(a))},getSimArtist:function(){return t.getArtist(n)},getSimSongs:function(){return t.getSongs(n,c)}})]})})]})})})})};var k=function(t){var e=t.data,c=e.play,n=e.info;return c?Object(h.jsxs)("div",{className:"videoplayer",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{onClick:t.closePlayer,className:"videoplayerCloseBtn",children:" close"})}),Object(h.jsx)("iframe",{width:"420",height:"221",src:"https://www.youtube.com/embed/".concat(n.videoId),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):Object(h.jsx)(h.Fragment,{})};c(126);var T=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],s=c[1],i=Object(n.useState)({info:{},play:!1}),A=Object(l.a)(i,2),d=A[0],j=A[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),p=u[0],f=u[1];Object(n.useEffect)((function(){y.a.get("https://musiqbox.herokuapp.com/api/songs").then((function(t){return s(t.data)}))}),[p]);var g=function(){var t=Object(o.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.videoId){t.next=4;break}j({info:e,play:!0}),t.next=12;break;case 4:return t.next=6,b(e.artist,e.name);case 6:return c=t.sent,t.next=9,y.a.put("https://musiqbox.herokuapp.com/api/songs/".concat(e.id),{videoId:c});case 9:return t.next=11,f(!p);case 11:j({info:Object(O.a)(Object(O.a)({},e),{},{videoId:c}),play:!0});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"likedsongs",children:[Object(h.jsx)("h1",{children:"Liked Songs"}),a.map((function(e){return Object(h.jsx)(P,{data:e,onPlay:g,getSongs:t.getSongs,getArtist:t.getArtist},e.name)})),Object(h.jsx)(k,{data:d,closePlayer:function(){j({info:{},play:!1})}})]})};var Z=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(t.data)}),[t]),Object(h.jsxs)("div",{className:"sim-artist-ctn",children:[Object(h.jsx)("h1",{className:"sim-artist",children:"Similar Artists"}),a.map((function(t,e){return Object(h.jsxs)("p",{children:[" ",t.name]},e)}))]})};var z=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(t.data)}),[t]),Object(h.jsxs)("div",{className:"sim-songs-ctn",children:[Object(h.jsx)("h1",{className:"sim-songs",children:" Similar Songs"}),a.map((function(t,e){return Object(h.jsxs)("p",{children:[" ",t.name]},e)}))]})},M=c(26);function C(){var t=Object(M.b)().user;return Object(h.jsxs)("div",{children:[t&&t.name,Object(h.jsx)("div",{children:JSON.stringify(t)})]})}c(133);var B=c(167),D=c(173),S=c(172),H=c(171),R=c(174);c(134);var W=function(t){var e=t.data,c=e.img,n=e.title,a=e.desc;return Object(h.jsx)(B.a,{sx:{width:280},children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)(S.a,{component:"img",height:"180",image:c,alt:"vibrant-playlist"}),Object(h.jsxs)(D.a,{className:"playlistCardImg",children:[Object(h.jsx)(H.a,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontFamily:"Lato",fontWeight:700,fontSize:16},children:n}),Object(h.jsx)(H.a,{variant:"body2",color:"text.secondary",sx:{fontFamily:"Lato"},children:a})]})]})})},Q=[{img:"/images/playlist-card1.jpg",title:"Vibrant Vibes",desc:"Listen to the latest vibrant tunes here"},{img:"/images/playlist-card2.jpg",title:"Hot Hits",desc:"Some of the hottest tracks in the USA"},{img:"/images/playlist-card3.jpg",title:"Today's Top Music",desc:"Today's top hits around the globe!"},{img:"/images/playlist-card4.jpg",title:"Rock This",desc:"Check out some epic new singles"},{img:"/images/chillhop.jpg",title:"Chill Hop",desc:""},{img:"/images/guitar.jpg",title:"Indie Jams",desc:""},{img:"/images/happyvibe.jpg",title:"Good Feels",desc:""},{img:"/images/hypeboy.jpg",title:"Trap",desc:""},{img:"/images/melodic.jpg",title:"Melodies Only",desc:""},{img:"/images/mix.jpg",title:"New Mixes",desc:""},{img:"/images/new.jpg",title:"Latest and Greatest",desc:""},{img:"/images/oldschool.jpg",title:"Throwbacks",desc:""},{img:"/images/space.jpg",title:"Discover Today",desc:""},{img:"/images/turned.jpg",title:"Turnt",desc:""},{img:"/images/uzi.jpg",title:"New This Week",desc:""}];function V(){return console.log(Q),Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"homeWrapper",children:[Object(h.jsx)("h2",{children:"Home Page"}),Object(h.jsx)("div",{className:"homeContent",children:"Welcome!"}),Object(h.jsx)("div",{className:"homeContainer",children:Q.map((function(t){return Object(h.jsx)(W,{data:t},t.title)}))}),Object(h.jsx)(C,{})]})})}c(135);var I=c(164),E=c(165),G=c(169);function J(){return Object(h.jsx)("div",{className:"topbar",children:Object(h.jsxs)("div",{className:"topbarWrapper",children:[Object(h.jsx)("div",{className:"topLeft",children:Object(h.jsx)("span",{className:"logo",children:Object(h.jsx)(v.b,{to:"/home",className:"rLink",children:"MusiqBox"})})}),Object(h.jsxs)("div",{className:"topRight",children:[Object(h.jsx)("div",{className:"topbarIcon",children:Object(h.jsx)(I.a,{})}),Object(h.jsx)("div",{className:"topbarIcon",children:Object(h.jsx)(E.a,{})}),Object(h.jsx)(G.a,{className:"topAvatar",alt:"user picture",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFoQ591FtCor701IrSSKx8l7KwV7RdSiUAg&usqp=CAU"})]})]})})}c(136);var L=c(81),Y=c.n(L),F=c(82),K=c.n(F),U=c(83),q=c.n(U),X=c(170);function _(){var t=Object(M.b)().logout;return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:"sidebarWrapper",children:[Object(h.jsxs)("div",{className:"sidebarMenu",children:[Object(h.jsx)("div",{className:"sidebarTitle",children:"MENU"}),Object(h.jsxs)("ul",{className:"sidebarList",children:[Object(h.jsx)(v.b,{to:"/",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(Y.a,{className:"sidebarIcon"}),"Home"]})}),Object(h.jsx)(v.b,{to:"/search",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(K.a,{className:"sidebarIcon"}),"Search"]})}),Object(h.jsx)(v.b,{to:"/likedsongs",className:"rLink",children:Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(q.a,{className:"sidebarIcon"}),"Liked Songs"]})})]})]}),Object(h.jsx)(X.a,{className:"sidebarLogout",onClick:function(){return t()},children:"Logout"})]})})}var $,tt,et=c(12),ct=(c(137),c(30)),nt=c(62),at=c.p+"static/media/main-bak.c0409179.jpg";c(138);function st(t){var e=t.startDemo,c=Object(M.b)().loginWithRedirect;return Object(h.jsx)("div",{className:"loginBar",children:Object(h.jsxs)("div",{className:"loginBarWrapper",children:[Object(h.jsx)("div",{className:"topLeft",children:Object(h.jsx)("span",{className:"logo",children:"MusiqBox"})}),Object(h.jsxs)("div",{className:"topRight",children:[Object(h.jsx)("div",{className:"loginBarIcon",children:Object(h.jsx)(X.a,{className:"loginBtn",onClick:function(){return c()},children:"Log In "})}),Object(h.jsx)("div",{className:"loginBarIcon",children:Object(h.jsx)(X.a,{className:"demoBtn",onClick:function(){return e(!0)},children:"Demo"})})]})]})})}var it=nt.a.img($||($=Object(ct.a)(["\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1920px;\n    \n  /* Set up proportionate scaling */\n  width: 100%;\n  height: 100%;\n    \n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  filter: grayscale(100%);\n\n  @media screen and (max-width: 1920px) { /* Specific to this particular image */\n      left: 50%;\n      margin-left: -960px;   /* 50% */\n    \n  }\n  "])));it.defaultProps={src:at};var rt=nt.a.div(tt||(tt=Object(ct.a)(["\n  text-align: center;\n  margin: 0 auto;\n  padding: 150px 75px 120px 75px;\n  position: relative;\n  color: black;\n  z-index: 3;\n\n  > h1 {\n    font-size: 3em;\n  }\n\n  @media screen and (max-width:550px){\n    padding: 80px 25px;\n  }\n"])));function ot(t){var e=t.startDemo;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(st,{startDemo:e}),Object(h.jsx)(it,{}),Object(h.jsxs)(rt,{children:[Object(h.jsx)("h1",{style:{marginBottom:"20px"},children:"Explore New Music"}),Object(h.jsx)("h3",{children:"Start listening, watching, and sharing your musical world."})]})]})}var lt=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)([]),i=Object(l.a)(s,2),A=i[0],d=i[1],b=Object(n.useState)(!1),u=Object(l.a)(b,2),p=u[0],f=u[1],O=Object(M.b)().isAuthenticated,x=function(){var t=Object(o.a)(r.a.mark((function t(e,c){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a([]);case 2:return t.next=4,m(e,c).then((function(t){return t.json()})).then((function(t){return t.similartracks.track.slice(0,5)}));case 4:n=t.sent,a(n);case 6:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),N=function(){var t=Object(o.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d([]);case 2:return t.next=4,j(e).then((function(t){return t.json()})).then((function(t){return t.similarartists.artist.slice(0,10)}));case 4:c=t.sent,d(c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return p||O?Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(v.a,{children:[Object(h.jsx)(J,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(_,{}),Object(h.jsxs)(et.c,{children:[Object(h.jsx)(et.a,{path:"/similarartists",children:Object(h.jsx)(Z,{data:A})}),Object(h.jsx)(et.a,{path:"/similarsongs",children:Object(h.jsx)(z,{data:c})}),Object(h.jsx)(et.a,{path:"/likedsongs",children:Object(h.jsx)(T,{getSongs:x,getArtist:N})}),Object(h.jsx)(et.a,{path:"/search",children:Object(h.jsx)(g,{saveSong:function(t){y.a.post("https://musiqbox.herokuapp.com/api/songs",t)}})}),Object(h.jsx)(et.a,{path:"/",children:Object(h.jsx)(V,{})})]})]})]})}):Object(h.jsx)(ot,{startDemo:f})};s.a.render(Object(h.jsx)(M.a,{domain:"dev-063ddx5z.us.auth0.com",clientId:"4u2J2qZy1cJBDQhrK3JwILnhbHwNFhkG",redirectUri:window.location.origin,children:Object(h.jsx)(lt,{})}),document.getElementById("root"))},97:function(t,e,c){},99:function(t,e,c){}},[[140,1,2]]]);
//# sourceMappingURL=main.dcc565c6.chunk.js.map