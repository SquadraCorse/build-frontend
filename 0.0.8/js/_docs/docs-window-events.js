define("fb/_docs/docs-window-events",["fb/jquery","fb/window-events"],function(e,t){var n=function(){function s(e,t){r("resize 1, (debounce) new width: "+t.width)}function o(e,t){r("scroll 1, (throttle) new scrollTop: "+t.scrollTop)}function u(e,t){r("scroll 2, (debounce) new scrollTop: "+t.scrollTop)}function a(e,t){r("resize 2,(debounce) width: "+t.width)}function f(e,t){r("resize 3, (throttle) new width: "+t.width)}var n=window.console,r=window.debug;window.console||(n={log:function(){}});var i=e("#debug");r=function(e){i.prepend("<p>"+e+"</p>"),n.log(e)},t.onResize(s),t.onScroll(o,"throttle"),t.onScroll(u,"debounce"),t.onResize(a),t.onResize(f,"throttle"),e("#removeResize1Button").on("click",function(){t.offResize(s),r("offResize resize1")}),e("#removeScroll2Button").on("click",function(){t.offScroll(u,"debounce"),r("offScroll scroll2")})};return{init:n}});