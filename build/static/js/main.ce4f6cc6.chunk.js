(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),b=n(5),h=(n(18),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"todos"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(19),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"To do"},{name:"done",label:"Done"},{name:"important",label:"Important"}],n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a;return o.a.createElement("button",{key:a,type:"button",className:"btn ".concat(c?"btn-secondary":"btn-outline-dark"),onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),g=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearchChange(t)},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.value,onChange:this.onSearchChange})}}]),t}(a.Component)),v=n(11),E=(n(21),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l=e.done,i="todo-list-item";return l&&(i+=" done"),c&&(i+=" important"),o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},o.a.createElement("span",{className:"btn btn-light btn-sm circle"},o.a.createElement("i",{className:"fa fa-check".concat(l?"":"none")})),t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right circle",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right circle",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),C=(n(22),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(v.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(E,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.addItem(n.state.label),n.setState({label:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control search-input",value:this.state.label,onChange:this.onLabelChange,placeholder:"what needs to be done"}),o.a.createElement("button",{className:"btn btn-success"},"Add Item"))}}]),t}(a.Component)),I=(n(24),function(e){var t=e.clearCompletedItems;return o.a.createElement("button",{className:"btn btn-outline-danger clear-btn",onClick:function(){return t()}},"Clear Completed")}),O=(n(25),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Drink coffe"),n.createTodoItem("Learn React"),n.createTodoItem("Learn Redux")],term:"",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}})},n.addItem=function(e){0!==e.length&&n.setState(function(t){var a=t.todoData;return{todoData:[].concat(Object(u.a)(a),[n.createTodoItem(e)])}})},n.onToggleImportant=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}})},n.onToggleDone=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}})},n.onSearchChange=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n.clearCompletedItems=function(){n.setState(function(e){var t=e.todoData;return{todoData:Object(u.a)(t).filter(function(e){return!e.done})}})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=Object(i.a)({},e[a],Object(l.a)({},n,!e[a][n]));return[].concat(Object(u.a)(e.slice(0,a)),[o],Object(u.a)(e.slice(a+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().includes(t.toLowerCase())})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});case"important":return e.filter(function(e){return e.important});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(g,{value:this.state.search,onSearchChange:this.onSearchChange}),o.a.createElement(p,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(C,{todos:r,onDeleted:this.deleteItem,addItem:this.addItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement("div",{className:"bottom-panel d-flex"},o.a.createElement(j,{addItem:this.addItem}),o.a.createElement(I,{clearCompletedItems:this.clearCompletedItems})))}}]),t}(a.Component));n(26);c.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.ce4f6cc6.chunk.js.map