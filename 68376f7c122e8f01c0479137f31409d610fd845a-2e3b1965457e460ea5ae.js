/*! For license information please see 68376f7c122e8f01c0479137f31409d610fd845a-2e3b1965457e460ea5ae.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6B1/":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),o=n.n(i);n("U5C+");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={},s=function(e,t){c[t],0},u=function(e){var t=e.className,n=e.name,i=e.content,c=e.customClasses,u=e.size,m=e.src,d=e.title,h=e.use,p=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","name","content","customClasses","size","src","title","use"]),f=Object(r.useState)(0),y=f[0],g=f[1];Object(r.useMemo)((function(){return g(y+1)}),[n,JSON.stringify[i]]);var b,v=Object(r.useMemo)((function(){return n&&n.includes("-")?n.replace(/([-_][a-z0-9])/gi,(function(e){return e.toUpperCase()})).replace(/-/gi,""):n}),[y]),E=d?"<title>"+d+"</title>":"",w=Object(r.useMemo)((function(){return i||(n&&a.a.icons?a.a.icons[v]?a.a.icons[v]:s(0,v):void 0)}),[y]),k=Object(r.useMemo)((function(){return Array.isArray(w)?w[1]||w[0]:w}),[y]),x=Array.isArray(w)&&w.length>1?w[0]:"64 64",T=p.viewBox||"0 0 "+x,j=(b=!u&&(p.width||p.height),"custom"===u||b?"custom-size":u),C=o()("c-icon",j&&"c-icon-"+j,t),O=c||C;return a.a.createElement(a.a.Fragment,null,!m&&!h&&a.a.createElement("svg",l({},p,{xmlns:"http://www.w3.org/2000/svg",viewBox:T,className:O,role:"img",dangerouslySetInnerHTML:{__html:E+k}})),m&&!h&&a.a.createElement("img",l({},p,{className:t,src:m,role:"img"})),!m&&h&&a.a.createElement("svg",l({},p,{xmlns:"http://www.w3.org/2000/svg",className:O,role:"img"}),a.a.createElement("use",{href:h})))};t.b=u;var m=function(e){return s(),a.a.createElement(u,e)}}).call(this,n("8oxB"))},"7qed":function(e,t,n){},"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],u=!1,m=-1;function d(){u&&c&&(u=!1,c.length?s=c.concat(s):m=-1,s.length&&h())}function h(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(c=s,s=[];++m<t;)c&&c[m].run();m=-1,t=s.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||l(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},BQTL:function(e,t,n){},C3qt:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),i=n.n(a),o=n("6B1/"),l=(o.b,function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("span",{title:this.props.title,"aria-label":this.props.name},i.a.createElement(o.a,{content:this.props.content,size:this.props.size}))},t}(i.a.Component));t.a=l},GGZl:function(e,t,n){},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},QSOs:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),i=n("Wbzz");n("GGZl");function o(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/",id:"brand"},"Sam Royall")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/projects/"},a.a.createElement("h3",null,"Projects"))),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/blog/"},a.a.createElement("h3",null,"Blog")))))}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"U5C+":function(e,t,n){},"W/9C":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("qvPz"),o=n("C3qt"),l=n("JX7q"),c=n("dI71"),s=(n("jugB"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hidden:!0},n.hide=n.hide.bind(Object(l.a)(n)),n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.hide=function(){this.setState({hidden:!0})},n.handleClick=function(){this.setState({hidden:!1}),navigator.clipboard.writeText(this.props.copyText),setTimeout(this.hide,800)},n.render=function(){return a.a.createElement("div",{onClick:this.handleClick},this.props.content,a.a.createElement("div",{className:this.state.hidden?"tooltip hide":"tooltip"},a.a.createElement("span",{className:"display"},this.props.displayText)))},t}(a.a.Component)),u={alpine:{primary:"#6c687f",light:"#9994b8",dark:"#585568"},boulder:{primary:"#d2c5b2",light:"#837364",dark:"#515151"},cyberspace:{primary:"#181c18",light:"#00ce7c",dark:"#9578d3"},"miami-nights":{primary:"#18181a",light:"#47bac0",dark:"#e4609b"},"modern-dolch":{primary:"#2d2e30",light:"#54585c",dark:"#7eddd3"},monokai:{primary:"#272822",light:"#e6db74",dark:"#f92672",text:"#a6e22e"},muted:{primary:"#d1d7da",light:"#8FC9C8",dark:"#8f90c9"},"muted-mr-sleeves":{primary:"#d1d7da",light:"#daa99b",dark:"#8fadc9"},"night-runner":{primary:"#212121",light:"#feff04",dark:"#5c4a9c"},"red-samurai":{primary:"#84202c",light:"#55131b",dark:"#c79e6e"},"red-dragon":{primary:"#1a0b0c",light:"#ff3a32",dark:"#e2a528"},retro:{primary:"#dad3c1",light:"#918b7d",dark:"#bf616a",text:"#1d1b17"},pastel:{primary:"#e0b2bd",light:"#fbf4b6",dark:"#b4e9ff"},serika:{primary:"#323437",light:"#646669",dark:"#e2b714"},shoko:{primary:"#ced7e0",light:"#81c4dd",dark:"#bf616a",text:"#7599b1"},solarized:{primary:"#002b36",light:"#859900",dark:"#268bd2",text:"#2aa198"},strawberry:{primary:"#f37f83",light:"#e53c58",dark:"#fcd23f"},"synthwave-84-1":{primary:"#2b213a",light:"#36f9f6",dark:"#ff7edb"},"synthwave-84-2":{primary:"#2b213a",light:"#72f1b8",dark:"#ff8b39"},terminal:{primary:"#191a1b",light:"#48494b",dark:"#79a617"},vaporwave:{primary:"#a4a7ea",light:"#e368da",dark:"#28cafe"},"80s-after-dark":{primary:"#1b1d36",light:"#99d6ea",dark:"#fca6d1"},8008:{primary:"#333a45",dark:"#f44c7f",light:"#939eae"},9009:{primary:"#ffffff",light:"#c87e74",dark:"#7fa480",text:"black"}},m=(n("7qed"),function(e){function t(t){var n;if(n=e.call(this,t)||this,"undefined"!=typeof document)var r=document.documentElement.style.getPropertyValue("--theme");else r="alpine";return n.state={theme:r},n.changeTheme=n.changeTheme.bind(Object(l.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.changeTheme=function(e){if("undefined"!=typeof document){var t=e.target.value;this.setState({theme:t});var n=u[t];document.documentElement.style.setProperty("--theme",t),document.documentElement.style.setProperty("--primary-color",n.primary),document.documentElement.style.setProperty("--light-color",n.light),document.documentElement.style.setProperty("--dark-color",n.dark),n.hasOwnProperty("text")?document.documentElement.style.setProperty("--text-color",n.text):document.documentElement.style.setProperty("--text-color","#ffffff")}},n.render=function(){var e=this;return a.a.createElement("select",{id:"theme-dropdown",value:this.state.theme,onChange:function(t){return e.changeTheme(t)}},a.a.createElement("option",null,"alpine"),a.a.createElement("option",null,"boulder"),a.a.createElement("option",null,"cyberspace"),a.a.createElement("option",{value:"miami-nights"},"miami nights"),a.a.createElement("option",{value:"modern-dolch"},"modern dolch"),a.a.createElement("option",null,"monokai"),a.a.createElement("option",null,"muted"),a.a.createElement("option",{value:"muted-mr-sleeves"},"muted mr. sleeves"),a.a.createElement("option",{value:"night-runner"},"night runner"),a.a.createElement("option",null,"pastel"),a.a.createElement("option",{value:"red-dragon"},"red dragon"),a.a.createElement("option",{value:"red-samurai"},"red samurai"),a.a.createElement("option",null,"retro"),a.a.createElement("option",null,"serika"),a.a.createElement("option",null,"shoko"),a.a.createElement("option",null,"solarized"),a.a.createElement("option",null,"strawberry"),a.a.createElement("option",{value:"synthwave-84-1"},"synthwave '84 #1"),a.a.createElement("option",{value:"synthwave-84-2"},"synthwave '84 #2"),a.a.createElement("option",null,"terminal"),a.a.createElement("option",null,"vaporwave"),a.a.createElement("option",{value:"80s-after-dark"},"80s after dark"),a.a.createElement("option",null,"8008"),a.a.createElement("option",null,"9009"))},t}(a.a.Component));n("BQTL");function d(){return a.a.createElement("footer",null,a.a.createElement("div",{id:"socials-list"},a.a.createElement("a",{href:"https://github.com/samrroyall/"},a.a.createElement(o.a,{content:i.a.cibGithub,size:"xl",name:"github"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/samrroyall"},a.a.createElement(o.a,{content:i.a.cibLinkedin,size:"xl",name:"linkedin"})),a.a.createElement("a",{href:"https://angel.co/u/samrroyall"},a.a.createElement(o.a,{content:i.a.cibAngellist,size:"xl",name:"angellist"})),a.a.createElement("a",{href:"https://leetcode.com/fjallraver/"},a.a.createElement(o.a,{content:i.a.cibLeetcode,size:"xl",name:"leetcode"})),a.a.createElement(s,{content:a.a.createElement(o.a,{content:i.a.cibDiscord,id:"discord",size:"xl",name:"discord"}),copyText:"fjallraver#2825",displayText:"Copied!"})),a.a.createElement("div",null,a.a.createElement("span",{className:"fine text-white",id:"theme-prompt"},"Choose your favorite theme!"),a.a.createElement(m,null)),a.a.createElement("div",{className:"fine",id:"copyright"},a.a.createElement("span",{className:"text-white"},"samrroyall@gmail.com"),"   © Sam Royall. All Rights Reserved."),a.a.createElement("div",{id:"powered-by"},a.a.createElement("span",{className:"fine text-white"},"Powered by"),a.a.createElement(o.a,{content:i.a.cibGatsby,size:"md",name:"gatsby logo",title:"gatsby"}),a.a.createElement(o.a,{content:i.a.cibReact,size:"md",name:"react logo",title:"react"}),a.a.createElement(o.a,{content:i.a.cibNodeJs,size:"md",name:"node.js logo",title:"node.js"})))}},jugB:function(e,t,n){}}]);
//# sourceMappingURL=68376f7c122e8f01c0479137f31409d610fd845a-2e3b1965457e460ea5ae.js.map