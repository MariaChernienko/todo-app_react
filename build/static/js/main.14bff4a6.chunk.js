(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n.p+"static/media/checked.6ef2b847.svg"},11:function(t,e,n){t.exports=n.p+"static/media/unchecked.40e0f797.svg"},12:function(t,e,n){t.exports=n(19)},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),o=n(3),c=n(5),i=n(4),l=n(6),r=n(0),s=n.n(r),d=n(9),u=n.n(d),m=n(7),f=n(1),b=(n(18),n(10)),v=n.n(b),p=n(11),h=n.n(p),C=function(t){var e=t.todo,n=t.setItemStatus,a=t.removeItem;return s.a.createElement("li",{className:"Todo_list-item"},s.a.createElement("img",{className:"Status-icon",src:e.done?v.a:h.a,alt:e.done?"checked":"unchecked",onClick:function(){return n(e.id)}}),e.text,s.a.createElement("div",{className:"Item-close",onClick:function(){return a(e.id)}}))},j=function(t){var e=t.itemsLeft,n=t.showAll,a=t.showActive,o=t.showCompleted,c=t.clearCompleted,i=t.footer,l=t.btnAll,r=t.btnActive,d=t.btnCompleted;return s.a.createElement("div",{className:i?"Todo-footer active-footer":"Todo-footer"},s.a.createElement("div",{className:"Todo-footer_counter"},s.a.createElement("span",null,e),"item left"),s.a.createElement("nav",{className:"Todo-footer_btns"},s.a.createElement("div",{className:l?"btn btn-active":"btn",onClick:function(){return n()}},"all"),s.a.createElement("div",{className:r?"btn btn-active":"btn",onClick:function(){return a()}},"active"),s.a.createElement("div",{className:d?"btn btn-active":"btn",onClick:function(){return o()}},"completed")),s.a.createElement("button",{onClick:function(){return c()}},"clear completed"))},A=function(t){function e(){var t,n;Object(a.a)(this,e);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(n=Object(c.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(l)))).state={todos:[],active:[],completed:[],value:0,text:null,itemsLeft:0,btnAll:!0,btnActive:!1,btnCompleted:!1,footer:!1},n.handleChange=function(t){n.setState({text:t.target.value})},n.addNewItem=function(t){var e=Object(f.a)(n.state.todos),a=Object(f.a)(n.state.active),o=n.state,c=o.value,i=o.text;if("Enter"===t.key){if(t.target.value=null,null===i)return;n.setState(function(t){return{value:t.value+1,todos:[].concat(Object(f.a)(e),[{id:c,text:i,done:!1}]),active:[].concat(Object(f.a)(a),[{id:c,text:i,done:!1}]),text:null,itemsLeft:t.itemsLeft+1,footer:!0}})}},n.removeItem=function(t){var e=Object(f.a)(n.state.todos),a=Object(f.a)(n.state.active),o=Object(f.a)(n.state.completed);n.setState(function(n){return{todos:e.filter(function(e){return e.id!==t}),active:a.filter(function(e){return e.id!==t}),completed:o.filter(function(e){return e.id!==t}),itemsLeft:e[t].done?n.itemsLeft:n.itemsLeft-1}})},n.setItemStatus=function(t){var e=Object(f.a)(n.state.todos),a=Object(f.a)(n.state.active),o=Object(f.a)(n.state.completed);n.setState(function(n){return{todos:e.map(function(n){return n.id===t?Object(m.a)({},n,{done:!e[t].done}):n}),itemsLeft:e[t].done?n.itemsLeft+1:n.itemsLeft-1,active:e[t].done?a:a.filter(function(e){return e.id!==t}),completed:e[t].done?o:[].concat(Object(f.a)(o),[Object(m.a)({},e[t],{done:!0})])}})},n.showAll=function(){var t=n.state.active,e=n.state.completed;n.setState({todos:[].concat(Object(f.a)(t),Object(f.a)(e)).sort(function(t,e){return t.id>e.id?1:e.id>t.id?-1:0}),btnAll:!0,btnActive:!1,btnCompleted:!1})},n.showActive=function(){var t=n.state.active;n.setState({todos:t,btnAll:!1,btnActive:!0,btnCompleted:!1})},n.showCompleted=function(){var t=n.state.completed;n.setState({todos:t.sort(function(t,e){return t.id>e.id?1:e.id>t.id?-1:0}),btnAll:!1,btnActive:!1,btnCompleted:!0})},n.clearCompleted=function(){var t=n.state.todos;n.setState({todos:t.filter(function(t){return!t.done}),completed:[]})},n}return Object(l.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.props.placeholder,n=this.state.todos,a=this.state.itemsLeft,o=this.state.footer,c=this.state,i=c.btnAll,l=c.btnActive,r=c.btnCompleted;return s.a.createElement("div",{className:"Todo"},s.a.createElement("input",{className:"Input-field",placeholder:e,onKeyPress:function(e){return t.addNewItem(e)},onChange:function(e){return t.handleChange(e)}}),s.a.createElement("ul",{className:"Todo_list"},n.map(function(e){return s.a.createElement(C,{key:e.id,todo:e,setItemStatus:t.setItemStatus,removeItem:t.removeItem})})),s.a.createElement(j,{itemsLeft:a,footer:o,showAll:this.showAll,showActive:this.showActive,showCompleted:this.showCompleted,clearCompleted:this.clearCompleted,btnAll:i,btnActive:l,btnCompleted:r}))}}]),e}(s.a.Component),O=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h2",{className:"App-title"},"todos"),s.a.createElement(A,{placeholder:"what needs to be done?"}))}}]),e}(s.a.Component);u.a.render(s.a.createElement(O,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.14bff4a6.chunk.js.map