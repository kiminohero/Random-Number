(this["webpackJsonprandom-number"]=this["webpackJsonprandom-number"]||[]).push([[0],{23:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=n(7),u=n(8),i=n(10),m=n(9),s=n(11),h=n(13),p=n(5),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={Num:"",RanNum:!1},n.onClick=function(){var e=1e5+Math.floor(9e5*Math.random());n.setState({Num:"".concat(e),RanNum:!0}),window.localStorage.setItem("randomNumber","".concat(e)),n.helpRedirect()},n.helpRedirect=function(){var e=n.props.history;setTimeout((function(){e.push("/play")}),5e3)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.localStorage.clear()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.Num),r.a.createElement("button",{onClick:this.onClick,className:"Gen"},"Generate a number"),r.a.createElement("div",null,r.a.createElement("span",null,this.state.RanNum?"Refreshing in 5 seconds":"")))}}]),t}(a.Component),b=Object(p.g)(f),d=n(22),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={num:"",diff:""},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),n.state.num){var t=n.compare();n.setState({diff:"".concat(t," characters match")})}else alert("Don't leave the field Empty"),n.setState({diff:""})},n.goBack=function(){n.props.history.push("/")},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"compare",value:function(){var e=this.state.num.split(""),t=window.localStorage.getItem("randomNumber"),n=0,a=!0,r=!1,c=void 0;try{for(var o,l=function(){var t=o.value,a=e.findIndex((function(e){return e===t}));a>=0&&(n++,e.splice(a,1))},u=t[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)l()}catch(i){r=!0,c=i}finally{try{a||null==u.return||u.return()}finally{if(r)throw c}}return n}},{key:"helperFunction",value:function(){var e=this.state,t=e.num,n=e.diff;return r.a.createElement("div",{className:"play"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{className:"Inp",type:"text",name:"num",value:t,placeholder:"Enter Number",onChange:this.onChange}),r.a.createElement("button",{className:"submit",type:"submit"},"Submit")),r.a.createElement("div",null,n),r.a.createElement("button",{className:"submit",onClick:this.goBack},"Play Again"))}},{key:"render",value:function(){return window.localStorage.getItem("randomNumber")?this.helperFunction():r.a.createElement(p.a,{to:"/"})}}]),t}(a.Component),y=Object(p.g)(v),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/"},r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Generate Random Number"),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:b}),r.a.createElement(p.b,{path:"/play",component:y}),r.a.createElement(p.a,{to:"/"}))))}}]),t}(a.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c0f29ac1.chunk.js.map