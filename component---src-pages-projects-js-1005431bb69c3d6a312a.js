(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),l=a.n(n),o=a("qvPz"),c=a("C3qt"),r=a("QSOs"),s=a("rxcZ"),i=a("W/9C"),m=a("BWoE"),p=a.n(m),u=a("XVG7"),h=a.n(u),E=a("lcRu");function d(){return l.a.createElement("div",null,l.a.createElement(r.a,{currPage:"projects"}),l.a.createElement("main",null,l.a.createElement(s.a,{pos:1,title:l.a.createElement("a",{href:"https://info-rm.io"},"info-rm"),background:p.a,content:l.a.createElement("div",{className:"sectionBody"},l.a.createElement("div",{className:"block"},l.a.createElement("h2",null,"Description"),l.a.createElement("p",null,l.a.createElement("span",{class:"em"},"info-rm"),"   is a stats aggregator for club soccer players in Europe's top domestic leagues and international tournaments. See this  ",l.a.createElement("a",{href:"#"},"blog post"),"  to learn about the search algorithm!")),l.a.createElement("div",{className:"block"},l.a.createElement("h2",null,"Technologies"),l.a.createElement("div",{className:"icon-row"},l.a.createElement(c.a,{content:o.a.cibFlask,size:"2xl",name:"flask logo",title:"flask"}),l.a.createElement(c.a,{content:o.a.cibPython,size:"2xl",name:"python logo",title:"python"}),l.a.createElement(c.a,{content:o.a.cibJavascript,size:"2xl",name:"javascript logo",title:"javascript"}),l.a.createElement(c.a,{content:o.a.cibJquery,size:"2xl",name:"jquery logo",title:"jquery"})),l.a.createElement("div",{className:"icon-row"},l.a.createElement(c.a,{content:o.a.cibAmazonAws,size:"2xl",name:"AWS logo",title:"AWS"}),l.a.createElement("span",{title:"sqlite","aria-label":"sqlite logo"},E.a))))}),l.a.createElement(s.a,{pos:2,title:l.a.createElement("a",{href:"https://samrroyall.github.io/klotski-solver"},"Klotski Solver"),background:h.a,content:l.a.createElement("div",{className:"sectionBody"},l.a.createElement("div",{className:"block"},l.a.createElement("h2",null,"Description"),l.a.createElement("p",null,l.a.createElement("span",{class:"em"},"Klotski Solver"),"   is, as the name suggests, a shortest-path Klotski (sliding-block puzzle) solver. See this  ",l.a.createElement("a",{href:"#"},"blog post"),"  to learn more about the algorithm behind the solution!")),l.a.createElement("div",{className:"block"},l.a.createElement("h2",null,"Technologies"),l.a.createElement("div",{className:"icon-row"},l.a.createElement(c.a,{content:o.a.cibReact,size:"2xl",name:"react logo",title:"react"}),l.a.createElement(c.a,{content:o.a.cibNodeJs,size:"2xl",name:"node.js logo",title:"node.js"}),l.a.createElement(c.a,{content:o.a.cibTypescript,size:"2xl",name:"typescript logo",title:"typescript"}),l.a.createElement(c.a,{content:o.a.cibGithub,size:"2xl",name:"github pages logo",title:"github pages"}))))}),l.a.createElement(s.a,{pos:3,title:"Project 3"}),l.a.createElement(s.a,{pos:4,title:"Project 4"})),l.a.createElement(i.a,null))}},BWoE:function(e,t,a){e.exports=a.p+"static/info-rm-3c232d9d324e20a9fe4c225e5a809155.png"},XVG7:function(e,t,a){e.exports=a.p+"static/klotski-solver-1c7a06e091466c0ecce2270547abdeff.png"},co1U:function(e,t,a){},lcRu:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=l.a.createElement("svg",{version:"1.0",className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 128 128"},l.a.createElement("metadata",null,"Created by potrace 1.16, written by Peter Selinger 2001-2019"),l.a.createElement("g",{transform:"translate(0.000000,128.000000) scale(0.100000,-0.100000)",stroke:"none"},l.a.createElement("path",{d:"M965 1268 c-11 -6 -43 -33 -70 -59 l-51 -49 -321 -3 c-444 -3 -413\r 28 -413 -410 0 -426 -14 -407 306 -407 l211 0 6 -133 c7 -147 20 -207 44 -207\r 11 0 13 5 7 18 -4 9 -9 82 -11 162 -1 84 1 137 6 125 7 -18 10 -16 29 21 22\r 43 78 98 109 108 30 10 155 180 147 201 -3 7 3 16 13 19 23 7 123 188 157 283\r 51 144 47 239 -11 304 -32 36 -39 39 -87 39 -28 0 -60 -6 -71 -12z m-241 -315\r c-37 -76 -114 -308 -118 -353 0 -8 -5 -18 -10 -21 -5 -4 -9 -32 -10 -63 l0\r -56 -176 2 -175 3 -3 274 c-2 193 1 278 9 287 9 11 63 14 268 14 l257 0 -42\r -87z"})));t.a=o},rxcZ:function(e,t,a){"use strict";var n=a("JX7q"),l=a("dI71"),o=a("q1tI"),c=a.n(o),r=(a("co1U"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={focused:!1},a.handleHover=a.handleHover.bind(Object(n.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.handleHover=function(e){this.setState({focused:!this.state.focused})},a.render=function(){var e="";return this.props.pos>2&&(e+="not-first-row "),this.props.pos%2==0&&(e+="not-first-col"),c.a.createElement("section",{className:e,onMouseOver:this.handleHover,onMouseOut:this.handleHover,style:this.state.focused?{backgroundImage:"url("+this.props.background+")",backgroundSize:"cover"}:{}},c.a.createElement("div",{className:"sectionTitle"},c.a.createElement("h1",null,this.props.title)),c.a.createElement("div",{className:"wrapper"},this.props.content))},t}(c.a.Component));t.a=r}}]);
//# sourceMappingURL=component---src-pages-projects-js-1005431bb69c3d6a312a.js.map