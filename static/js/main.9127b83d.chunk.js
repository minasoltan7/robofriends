(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),s=n.n(a),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),u=function(e){var t=e.name,n=e.id,c=e.email;return Object(b.jsxs)("div",{className:"bg-purple dib br2 pa2 ma2 grow bw1  shadow-5",children:[Object(b.jsx)("img",{alt:"robot",src:"https://www.robohash.org/".concat(n,"?200x200")}),Object(b.jsx)("h2",{className:"tc ",children:t}),Object(b.jsx)("p",{className:"tc ",children:c})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(u,{name:t[n].name,id:t[n].id,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"pa3 ba bg-lightest-blue ma3  br4 bw1 b-green tc",placeholder:"Search Robot",onChange:t,type:"Search"})})},f=(n(14),n(15),function(e){return Object(b.jsx)("div",{className:"scrollStyle",children:e.children})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:" "},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1 ma3",children:"Robofriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(d,{robots:c})})]}):Object(b.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component),g=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))});s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.9127b83d.chunk.js.map