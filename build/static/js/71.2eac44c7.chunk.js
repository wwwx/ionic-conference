(this["webpackJsonpionic-conference"]=this["webpackJsonpionic-conference"]||[]).push([[71],{216:function(n,e,t){"use strict";t.r(e),t.d(e,"KEYBOARD_DID_CLOSE",(function(){return o})),t.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),t.d(e,"copyVisualViewport",(function(){return D})),t.d(e,"keyboardDidClose",(function(){return g})),t.d(e,"keyboardDidOpen",(function(){return p})),t.d(e,"keyboardDidResize",(function(){return b})),t.d(e,"resetKeyboardAssist",(function(){return c})),t.d(e,"setKeyboardClose",(function(){return h})),t.d(e,"setKeyboardOpen",(function(){return f})),t.d(e,"startKeyboardAssist",(function(){return a})),t.d(e,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,c=function(){r={},u={},d=!1},a=function(n){s(n),n.visualViewport&&(u=D(n.visualViewport),n.visualViewport.onresize=function(){y(n),p()||b(n)?f(n):g(n)&&h(n)})},s=function(n){n.addEventListener("keyboardDidShow",(function(e){return f(n,e)})),n.addEventListener("keyboardDidHide",(function(){return h(n)}))},f=function(n,e){w(n,e),d=!0},h=function(n){v(n),d=!1},p=function(){var n=(r.height-u.height)*u.scale;return!d&&r.width===u.width&&n>150},b=function(n){return d&&!g(n)},g=function(n){return d&&u.height===n.innerHeight},w=function(n,e){var t=e?e.keyboardHeight:n.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:t}});n.dispatchEvent(o)},v=function(n){var e=new CustomEvent(o);n.dispatchEvent(e)},y=function(n){r=Object.assign({},u),u=D(n.visualViewport)},D=function(n){return{width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale}}}}]);
//# sourceMappingURL=71.2eac44c7.chunk.js.map