define("fb/window-events",["fb/jquery"],function(e){function f(e){i[e]++}function l(e){var n=e+".throttle",r=e+".debounce";i[e]===i.last[e]?(t.trigger(r,[o[e]()]),i[e]=0,u[e]=!1):(t.trigger(n,[o[e]()]),c(e,!0)),i.last[e]=i[e]}function c(e,t){t?(u[e]=!0,s[e]=setTimeout(function(){l(e)},a)):s[e]&&(u[e]=!1,clearTimeout(s[e]))}function h(e){var t=e.type;f(t),u[t]||c(t,!0)}function p(e,t){t?n.on(e,h):(n.off(e,h),c(e,!1))}function d(e,n,i){var s=e+"."+i;t.on(s,n),r[e]||(r[e]=0),r[e]+=1,r[e]===1&&p(e,!0,i)}function v(e,n,i){var s,o=e+"."+i;t.off(o,n),s=r[e]-=1,r[e]=s<0?0:s,r[e]===0&&p(e,!1)}function m(e,t){d("scroll",e,t||"throttle")}function g(e,t){v("scroll",e,t||"throttle")}function y(e,t){d("resize",e,t||"debounce")}function b(e,t){v("resize",e,t||"debounce")}var t=e({}),n=e(window),r={},i={resize:0,scroll:0,last:{}},s={},o={},u={},a=300;return o={scroll:function(){return{scrollTop:n.scrollTop(),height:n.height()}},resize:function(){return{orientation:window.orientation,width:n.width(),height:n.height()}}},{onResize:y,offResize:b,onScroll:m,offScroll:g}}),define("fb/form-login",["fb/jquery","fb/window-events"],function(e,t){var n=window.Modernizr?window.Modernizr.touch:!1,r="click",i="touchstart mousedown",s=e(window).width(),o=function(){var e=document.body,t=document.createElement("input"),n=!0;e||(e=document.createElement("body")),t=e.appendChild(t);try{t.setAttribute("type","text")}catch(r){n=!1}return e.removeChild(t),n}(),u=function(o){var u=e(o),a=e('<button type="button" class="fb-icon fb-input-password-switch">&#xe804</button>'),f=u.attr("type");u.wrap('<div class="fb-input-password-wrapper"></div>'),u.after(a);var l=function(){u.parent().addClass("js-fb-password-show")},c=function(e){e.preventDefault();var t=u.attr("type");switch(t){case"text":a.removeClass("fb-toggled-text"),p("password");break;case"password":a.addClass("fb-toggled-text"),p("text");break;default:}u.focus()},h;n?h=i:h=r,u.on(h,l),u.on("keydown",l),a.on(h,c);var p=function(e){u.attr("type",e)},d=function(){s<481?(a.addClass("fb-toggled-text"),p("text")):(a.removeClass("fb-toggled-text"),p("password"))},v=function(e,t){s=t.width,d()};t.onResize(v),p(f),d()},a=function(e){o&&new u(e.container)};return{init:a}});
