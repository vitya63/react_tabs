(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=n(3),l=n(4),u=n(6),b=n(5),s=n(7),d=(n(13),function(e){var t=e.title,n=e.index,a=e.onTabSelected;return c.a.createElement("button",{type:"button",onClick:function(){return a(n)}},t)}),m=function(e){var t=e.tabs,n=e.onTabSelected,a=e.activeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,t.map(function(e,t){return c.a.createElement(d,{onTabSelected:n,key:e.title,index:t,activeTab:a,title:e.title})})),c.a.createElement("div",null,t[a].content))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],activeTab:0},n.onTabSelected=function(e){n.setState({activeTab:e})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,n=e.activeTab;return c.a.createElement("div",null,c.a.createElement(m,{tabs:t,onTabSelected:this.onTabSelected,activeTab:n}))}}]),t}(c.a.Component);o.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a2b607c2.chunk.js.map