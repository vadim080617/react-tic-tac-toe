(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),i=n.n(s),c=n(1),u=n(2),l=n(4),o=n(3);function m(e){return r.a.createElement("button",{className:"square ".concat(e.className),onClick:e.onClick},e.value)}var h=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(m,{className:this.props.winnerLine.includes(e)?"win-field":"",key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},["3","element","array"].map((function(t,n){return r.a.createElement("div",{key:n,className:"board-row"},["3","element","array"].map((function(t,a){return e.renderSquare(3*n+a)})))})))}}]),n}(r.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggleReverse=function(){a.setState({isReversedView:!a.state.isReversedView})},a.state={isReversedView:!1},a}return Object(u.a)(n,[{key:"renderView",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.squares,a=[],s=[];n.forEach((function(e,n,i){if(s.push(e),3===s.length||n===i.length-1){var c=r.a.createElement("div",{key:"row".concat((n+1)/3)},s.map((function(e,a){return r.a.createElement("div",{className:"historyCell ".concat(t?"current-cell":""),key:n-1+a},e||" ")})));a.push(c),s=[]}}));var i=r.a.createElement("div",{className:"historyView"},a.map((function(e){return e})));return i}},{key:"render",value:function(){var e=this,t=this.props,n=t.onJumpTo,a=t.history,s=t.currentStep,i=this.state.isReversedView,c=a.map((function(t,a){var i=a?"To move #"+a:"To start";return r.a.createElement("li",{className:"historyStep",key:a},r.a.createElement("button",{onClick:function(){return n(a)}},i),e.renderView(t,s===a))}));return i&&(c=c.reverse()),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleReverse},"Sort moves ",i?"desc":"asc")),r.a.createElement("ol",null,c))}}]),n}(a.Component),p=n(7);function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(p.a)(t[n],3),r=a[0],s=a[1],i=a[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return{winner:e[r],line:[r,s,i]}}return null}var f=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleJumpTo=function(e){a.setState({stepNumber:e,xIsNext:e%2===0},a.checkingBoard)},a.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,status:"Next player: X",winnerLine:[]},a}return Object(u.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();d(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext,stepNumber:t.length},this.checkingBoard))}},{key:"checkingBoard",value:function(){var e,t=this.state,n=t.history[t.stepNumber],a=d(n.squares),r=[];if(a){var s=a.winner;r=a.line,e="Winner ".concat(s)}else e=n.squares.some((function(e){return!e}))?"Next player: ".concat(this.state.xIsNext?"X":"O"):"It's a DRAW!";this.setState({status:e,winnerLine:r})}},{key:"render",value:function(){var e=this,t=this.state,n=t.history,a=t.status,s=t.winnerLine,i=t.stepNumber,c=n[i];return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(h,{onClick:function(t){return e.handleClick(t)},squares:c.squares,winnerLine:s})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"status"},a,r.a.createElement("hr",null)),r.a.createElement(v,{onJumpTo:this.handleJumpTo,currentStep:i,history:n})))}}]),n}(r.a.Component);n(13);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.be1174cb.chunk.js.map