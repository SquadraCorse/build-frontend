define([],function(){function n(e){this.src=e.src,this.w=e.w||Infinity,this.h=e.h||Infinity,this.x=e.x||1}var e={w:window.innerWidth||document.documentElement.clientWidth,h:window.innerHeight||document.documentElement.clientHeight,x:window.devicePixelRatio},t=function(t){e.w=t.width,e.h=t.height},r=/^[0-9]+$/,i=function(e){var t=e.split(/\s/),n={};for(var i=0,s=t.length;i<s;i++){var o=t[i];if(o.length>0){var u=o.slice(-1),a=o.substring(0,o.length-1),f=parseInt(a,10),l=parseFloat(a);a.match(r)&&u==="w"?n[u]=f:a.match(r)&&u==="h"?n[u]=f:!isNaN(l)&&u==="x"&&(n[u]=l)}}return n},s=function(e,t){var n=e[0];for(var r=0,i=e.length;r<i;r++){var s=e[r];t(s,n)&&(n=s)}return n},o=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];t(r)&&e.splice(n,1)}return e},u=function(t,n){if(!t)return;var r=t.slice(0),i=n||e.w,u=s(r,function(e,t){return e.w>t.w});o(r,function(){return function(e){return e.w<i}}(this)),r.length===0&&(r=[u]);var a=s(r,function(e,t){return e.h>t.h});o(r,function(){return function(t){return t.h<e.h}}(this)),r.length===0&&(r=[a]);var f=s(r,function(e,t){return e.x>t.x});o(r,function(){return function(t){return t.x<e.x}}(this)),r.length===0&&(r=[f]);var l=s(r,function(e,t){return e.w<t.w});o(r,function(e){return e.w>l.w});var c=s(r,function(e,t){return e.h<t.h});o(r,function(e){return e.h>c.h});var h=s(r,function(e,t){return e.x<t.x});return o(r,function(e){return e.x>h.x}),r[0]},a=function(e){var t=[],r=e.src,s=e.srcset,o=e.width;if(!s)return;var a=function(e){for(var n=0,r=t.length;n<r;n++){var i=t[n];if(i.x===e.x&&i.w===e.w&&i.h===e.h)return}t.push(e)},f=function(){var e=s,t=0,o=[],u,f;while(e!==""){while(e.charAt(0)===" ")e=e.slice(1);t=e.indexOf(" ");if(t!==-1){u=e.slice(0,t);if(u==="")break;e=e.slice(t+1),t=e.indexOf(","),t===-1?(f=e,e=""):(f=e.slice(0,t),e=e.slice(t+1)),o.push({url:u,descriptors:f})}else o.push({url:e,descriptors:""}),e=""}for(var l=0,c=o.length;l<c;l++){var h=o[l],p=i(h.descriptors);a(new n({src:h.url,x:p.x,w:p.w,h:p.h}))}r&&a(new n({src:r}))};f();var l=u(t,o),c={best:l,candidates:t};return t=null,c};return{get:a,image:u,setView:t}});