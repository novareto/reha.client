(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else{e.htmx=t()}})(typeof self!=="undefined"?self:this,function(){return function(){"use strict";var v={onLoad:b,process:tt,on:z,off:V,trigger:ut,ajax:_t,find:S,findAll:E,closest:T,values:function(e,t){var r=At(e,t||"post");return r.values},remove:C,addClass:L,removeClass:O,toggleClass:A,takeClass:R,defineExtension:Gt,removeExtension:Yt,logAll:w,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:100,includeIndicatorStyles:true,indicatorClass:"htmx-indicator",requestClass:"htmx-request",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:true,attributesToSettle:["class","style","width","height"]},parseInterval:f,_:e,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){return new WebSocket(e,[])}};var t=["get","post","put","delete","patch"];var n=t.map(function(e){return"[hx-"+e+"], [data-hx-"+e+"]"}).join(", ");function f(e){if(e==undefined){return undefined}if(e.slice(-2)=="ms"){return parseFloat(e.slice(0,-2))||undefined}if(e.slice(-1)=="s"){return parseFloat(e.slice(0,-1))*1e3||undefined}return parseFloat(e)||undefined}function l(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute("data-"+t))}function I(e,t){return l(e,t)||l(e,"data-"+t)}function c(e){return e.parentElement}function k(){return document}function h(e,t){if(t(e)){return e}else if(c(e)){return h(c(e),t)}else{return null}}function M(e,t){var r=null;h(e,function(e){return r=I(e,t)});return r}function d(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function r(e){var t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return""}}function i(e,t){var r=new DOMParser;var n=r.parseFromString(e,"text/html");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=k().createDocumentFragment()}return i}function u(e){var t=r(e);switch(t){case"thead":case"tbody":case"tfoot":case"colgroup":case"caption":return i("<table>"+e+"</table>",1);case"col":return i("<table><colgroup>"+e+"</colgroup></table>",2);case"tr":return i("<table><tbody>"+e+"</tbody></table>",2);case"td":case"th":return i("<table><tbody><tr>"+e+"</tr></tbody></table>",3);case"script":return i("<div>"+e+"</div>",1);default:return i(e,0)}}function D(e){if(e){e()}}function a(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function s(e){return a(e,"Function")}function g(e){return a(e,"Object")}function F(e){var t="htmx-internal-data";var r=e[t];if(!r){r=e[t]={}}return r}function p(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function X(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function m(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function P(e){return k().body.contains(e)}function y(e){return e.trim().split(/\s+/)}function U(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function x(e){try{return JSON.parse(e)}catch(e){st(e);return null}}function e(e){return Xt(k().body,function(){return eval(e)})}function b(t){var e=v.on("htmx:load",function(e){t(e.detail.elt)});return e}function w(){v.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function S(e,t){if(t){return e.querySelector(t)}else{return S(k(),e)}}function E(e,t){if(t){return e.querySelectorAll(t)}else{return E(k(),e)}}function C(e,t){e=N(e);if(t){setTimeout(function(){C(e)},t)}else{e.parentElement.removeChild(e)}}function L(e,t,r){e=N(e);if(r){setTimeout(function(){L(e,t)},r)}else{e.classList.add(t)}}function O(e,t,r){e=N(e);if(r){setTimeout(function(){O(e,t)},r)}else{e.classList.remove(t)}}function A(e,t){e=N(e);e.classList.toggle(t)}function R(e,t){e=N(e);X(e.parentElement.children,function(e){O(e,t)});L(e,t)}function T(e,t){e=N(e);if(e.closest){return e.closest(t)}else{do{if(e==null||d(e,t)){return e}}while(e=e&&c(e))}}function q(e,t){if(t.indexOf("closest ")===0){return[T(e,t.substr(8))]}else if(t.indexOf("find ")===0){return[S(e,t.substr(5))]}else{return k().querySelectorAll(t)}}function H(e,t){return q(e,t)[0]}function N(e){if(a(e,"String")){return S(e)}else{return e}}function j(e,t,r){if(s(t)){return{target:k().body,event:e,listener:t}}else{return{target:N(e),event:t,listener:r}}}function z(t,r,n){Qt(function(){var e=j(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=s(r);return e?r:n}function V(t,r,n){Qt(function(){var e=j(t,r,n);e.target.removeEventListener(e.event,e.listener)});return s(r)?r:n}function W(e){var t=h(e,function(e){return I(e,"hx-target")!==null});if(t){var r=I(t,"hx-target");if(r==="this"){return t}else{return H(e,r)}}else{var n=F(e);if(n.boosted){return k().body}else{return e}}}function _(e){var t=v.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function B(t,r){X(t.attributes,function(e){if(!r.hasAttribute(e.name)&&_(e.name)){t.removeAttribute(e.name)}});X(r.attributes,function(e){if(_(e.name)){t.setAttribute(e.name,e.value)}})}function $(e,t){var r=Kt(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){st(e)}}return e==="outerHTML"}function J(e,t,r){var n="#"+t.id;var i="outerHTML";if(e==="true"){}else if(e.indexOf(":")>0){i=e.substr(0,e.indexOf(":"));n=e.substr(e.indexOf(":")+1,e.length)}else{i=e}var a=k().querySelector(n);if(a){var o;o=k().createDocumentFragment();o.appendChild(t);if(!$(i,a)){o=t}le(i,a,a,o,r)}else{t.parentNode.removeChild(t);it(k().body,"htmx:oobErrorNoTarget",{content:t})}return e}function Z(e,r){X(E(e,"[hx-swap-oob], [data-hx-swap-oob]"),function(e){var t=I(e,"hx-swap-oob");if(t!=null){J(t,e,r)}})}function G(e){X(E(e,"[hx-preserve], [data-hx-preserve]"),function(e){var t=I(e,"id");var r=k().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function Y(n,e,i){X(e.querySelectorAll("[id]"),function(e){if(e.id&&e.id.length>0){var t=n.querySelector(e.tagName+"[id='"+e.id+"']");if(t&&t!==n){var r=e.cloneNode();B(e,t);i.tasks.push(function(){B(e,r)})}}})}function K(e){return function(){tt(e);Ye(e);Q(e);ut(e,"htmx:load")}}function Q(e){var t="[autofocus]";var r=d(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function ee(e,t,r,n){Y(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(K(i))}}}function te(t){var e=F(t);if(e.webSocket){e.webSocket.close()}if(e.sseEventSource){e.sseEventSource.close()}if(e.listenerInfos){X(e.listenerInfos,function(e){if(t!==e.on){e.on.removeEventListener(e.trigger,e.listener)}})}if(t.children){X(t.children,function(e){te(e)})}}function re(e,t,r){if(e.tagName==="BODY"){return se(e,t)}else{var n=e.previousSibling;ee(c(e),e,t,r);if(n==null){var i=c(e).firstChild}else{var i=n.nextSibling}F(e).replacedWith=i;r.elts=[];while(i&&i!==e){if(i.nodeType===Node.ELEMENT_NODE){r.elts.push(i)}i=i.nextElementSibling}te(e);c(e).removeChild(e)}}function ne(e,t,r){return ee(e,e.firstChild,t,r)}function ie(e,t,r){return ee(c(e),e,t,r)}function ae(e,t,r){return ee(e,null,t,r)}function oe(e,t,r){return ee(c(e),e.nextSibling,t,r)}function se(e,t,r){var n=e.firstChild;ee(e,n,t,r);if(n){while(n.nextSibling){te(n.nextSibling);e.removeChild(n.nextSibling)}te(n);e.removeChild(n)}}function ue(e,t){var r=M(e,"hx-select");if(r){var n=k().createDocumentFragment();X(t.querySelectorAll(r),function(e){n.appendChild(e)});t=n}return t}function le(e,t,r,n,i){switch(e){case"none":return;case"outerHTML":re(r,n,i);return;case"afterbegin":ne(r,n,i);return;case"beforebegin":ie(r,n,i);return;case"beforeend":ae(r,n,i);return;case"afterend":oe(r,n,i);return;default:var a=Kt(t);for(var o=0;o<a.length;o++){var s=a[o];try{var u=s.handleSwap(e,r,n,i);if(u){if(typeof u.length!=="undefined"){for(var l=0;l<u.length;l++){var f=u[l];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(K(f))}}}return}}catch(e){st(e)}}se(r,n,i)}}var fe=/<title>([\s\S]+?)<\/title>/im;function ce(e){var t=fe.exec(e);if(t){return t[1]}}function he(e,t,r,n,i){var a=ce(n);if(a){var o=S("title");if(o){o.innerHTML=a}else{window.document.title=a}}var s=u(n);if(s){Z(s,i);s=ue(r,s);G(s);return le(e,r,t,s,i)}}function ve(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf("{")===0){var i=x(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!g(o)){o={value:o}}ut(r,a,o)}}}else{ut(r,n,[])}}var de=/\s/;var ge=/[\s,]/;var pe=/[_$a-zA-Z]/;var me=/[_$a-zA-Z0-9]/;var ye=['"',"'","/"];var xe=/[^\s]/;function be(e){var t=[];var r=0;while(r<e.length){if(pe.exec(e.charAt(r))){var n=r;while(me.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(ye.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)==="\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var a=e.charAt(r);t.push(a)}r++}return t}function we(e,t,r){return pe.exec(e.charAt(0))&&e!=="true"&&e!=="false"&&e!=="this"&&e!==r&&t!=="."}function Se(e,t,r){if(t[0]==="["){t.shift();var n=1;var i=" return (function("+r+"){ return (";var a=null;while(t.length>0){var o=t[0];if(o==="]"){n--;if(n===0){if(a===null){i=i+"true"}t.shift();i+=")})";try{var s=Xt(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){it(k().body,"htmx:syntax:error",{error:e,source:i});return null}}}else if(o==="["){n++}if(we(o,a,r)){i+="(("+r+"."+o+") ? ("+r+"."+o+") : (window."+o+"))"}else{i=i+o}a=t.shift()}}}function Ee(e,t){var r="";while(e.length>0&&!e[0].match(t)){r+=e.shift()}return r}var Ce="input, textarea, select";function Le(e){var t=I(e,"hx-trigger");var r=[];if(t){var n=be(t);do{Ee(n,xe);var i=n.length;var a=Ee(n,/[,\[\s]/);if(a!==""){if(a==="every"){var o={trigger:"every"};Ee(n,xe);o.pollInterval=f(Ee(n,de));r.push(o)}else if(a.indexOf("sse:")===0){r.push({trigger:"sse",sseEvent:a.substr(4)})}else{var s={trigger:a};var u=Se(e,n,"event");if(u){s.eventFilter=u}while(n.length>0&&n[0]!==","){Ee(n,xe);var l=n.shift();if(l==="changed"){s.changed=true}else if(l==="once"){s.once=true}else if(l==="consume"){s.consume=true}else if(l==="delay"&&n[0]===":"){n.shift();s.delay=f(Ee(n,ge))}else if(l==="from"&&n[0]===":"){n.shift();s.from=Ee(n,ge)}else if(l==="target"&&n[0]===":"){n.shift();s.target=Ee(n,ge)}else if(l==="throttle"&&n[0]===":"){n.shift();s.throttle=f(Ee(n,ge))}else{it(e,"htmx:syntax:error",{token:n.shift()})}}r.push(s)}}if(n.length===i){it(e,"htmx:syntax:error",{token:n.shift()})}Ee(n,xe)}while(n[0]===","&&n.shift())}if(r.length>0){return r}else if(d(e,"form")){return[{trigger:"submit"}]}else if(d(e,Ce)){return[{trigger:"change"}]}else{return[{trigger:"click"}]}}function Oe(e){F(e).cancelled=true}function Ae(e,t,r,n){var i=F(e);i.timeout=setTimeout(function(){if(P(e)&&i.cancelled!==true){Bt(t,r,e);Ae(e,t,I(e,"hx-"+t),n)}},n)}function Re(e){return location.hostname===e.hostname&&l(e,"href")&&l(e,"href").indexOf("#")!==0}function Te(t,r,e){if(t.tagName==="A"&&Re(t)||t.tagName==="FORM"){r.boosted=true;var n,i;if(t.tagName==="A"){n="get";i=l(t,"href")}else{var a=l(t,"method");n=a?a.toLowerCase():"get";i=l(t,"action")}e.forEach(function(e){Ie(t,n,i,r,e,true)})}}function qe(e){return e.tagName==="FORM"||d(e,'input[type="submit"], button')&&T(e,"form")!==null||e.tagName==="A"&&e.href&&e.getAttribute("href").indexOf("#")!==0}function He(e,t){return F(e).boosted&&e.tagName==="A"&&t.type==="click"&&t.ctrlKey}function Ne(e,t){var r=e.eventFilter;if(r){try{return r(t)!==true}catch(e){it(k().body,"htmx:eventFilter:error",{error:e,source:r.source});return true}}return false}function Ie(n,i,a,e,o,s){var u=n;if(o.from){u=S(o.from)}var l=function(e){if(!P(n)){u.removeEventListener(o.trigger,l);return}if(He(n,e)){return}if(s||qe(n)){e.preventDefault()}if(Ne(o,e)){return}var t=F(e);if(t.handledFor==null){t.handledFor=[]}var r=F(n);if(t.handledFor.indexOf(n)<0){t.handledFor.push(n);if(o.consume){e.stopPropagation()}if(o.target&&e.target){if(!d(e.target,o.target)){return}}if(o.once){if(r.triggeredOnce){return}else{r.triggeredOnce=true}}if(o.changed){if(r.lastValue===n.value){return}else{r.lastValue=n.value}}if(r.delayed){clearTimeout(r.delayed)}if(r.throttle){return}if(o.throttle){r.throttle=setTimeout(function(){Bt(i,a,n,e);r.throttle=null},o.throttle)}else if(o.delay){r.delayed=setTimeout(function(){Bt(i,a,n,e)},o.delay)}else{Bt(i,a,n,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:o.trigger,listener:l,on:u});u.addEventListener(o.trigger,l)}var ke=false;var Me=null;function De(){if(!Me){Me=function(){ke=true};window.addEventListener("scroll",Me);setInterval(function(){if(ke){ke=false;X(k().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"),function(e){Fe(e)})}},200)}}function Fe(e){var t=F(e);if(!t.revealed&&m(e)){t.revealed=true;Bt(t.verb,t.path,e)}}function Xe(e,t,r){var n=y(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){Pe(e,a[1])}if(a[0]==="send"){je(e)}}}function Pe(s,e){if(e.indexOf("/")==0){var t=location.hostname+(location.port?":"+location.port:"");if(location.protocol=="https:"){e="wss://"+t+e}else if(location.protocol=="http:"){e="ws://"+t+e}}var r=v.createWebSocket(e);r.onerror=function(e){it(s,"htmx:wsError",{error:e,socket:r});Ue(s)};F(s).webSocket=r;r.addEventListener("message",function(e){if(Ue(s)){return}var t=e.data;ot(s,function(e){t=e.transformResponse(t,null,s)});var r=Mt(s);var n=u(t);var i=p(n.children);for(var a=0;a<i.length;a++){var o=i[a];J(I(o,"hx-swap-oob")||"true",o,r)}pt(r.tasks)})}function Ue(e){if(!P(e)){F(e).webSocket.close();return true}}function je(u){var l=h(u,function(e){return F(e).webSocket!=null});if(l){var f=F(l).webSocket;u.addEventListener(Le(u)[0].trigger,function(e){var t=Ht(u,l);var r=At(u,"post");var n=r.errors;var i=r.values;var a=jt(u);var o=U(i,a);var s=Nt(o,u);s["HEADERS"]=t;if(n&&n.length>0){ut(u,"htmx:validation:halted",n);return}f.send(JSON.stringify(s));if(qe(u)){e.preventDefault()}})}else{it(u,"htmx:noWebSocketSourceError")}}function ze(e,t,r){var n=y(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){Ve(e,a[1])}if(a[0]==="swap"){We(e,a[1])}}}function Ve(t,e){var r=v.createEventSource(e);r.onerror=function(e){it(t,"htmx:sseError",{error:e,source:r});Be(t)};F(t).sseEventSource=r}function We(a,o){var s=h(a,$e);if(s){var u=F(s).sseEventSource;var l=function(e){if(Be(s)){u.removeEventListener(o,l);return}var t=e.data;ot(a,function(e){t=e.transformResponse(t,null,a)});var r=It(a);var n=W(a);var i=Mt(a);he(r.swapStyle,a,n,t,i);pt(i.tasks);ut(a,"htmx:sseMessage",e)};F(a).sseListener=l;u.addEventListener(o,l)}else{it(a,"htmx:noSSESourceError")}}function _e(e,t,r,n){var i=h(e,$e);if(i){var a=F(i).sseEventSource;var o=function(){if(!Be(i)){if(P(e)){Bt(t,r,e)}else{a.removeEventListener(n,o)}}};F(e).sseListener=o;a.addEventListener(n,o)}else{it(e,"htmx:noSSESourceError")}}function Be(e){if(!P(e)){F(e).sseEventSource.close();return true}}function $e(e){return F(e).sseEventSource!=null}function Je(e,t,r,n,i){var a=function(){if(!n.loaded){n.loaded=true;Bt(t,r,e)}};if(i){setTimeout(a,i)}else{a()}}function Ze(n,i,e){var a=false;X(t,function(t){if(o(n,"hx-"+t)){var r=I(n,"hx-"+t);a=true;i.path=r;i.verb=t;e.forEach(function(e){if(e.sseEvent){_e(n,t,r,e.sseEvent)}else if(e.trigger==="revealed"){De();Fe(n)}else if(e.trigger==="load"){Je(n,t,r,i,e.delay)}else if(e.pollInterval){i.polling=true;Ae(n,t,r,e.pollInterval)}else{Ie(n,t,r,i,e)}})}});return a}function Ge(e){if(e.type==="text/javascript"||e.type===""){try{Xt(e,function(){Function(e.innerText)()})}catch(e){st(e)}}}function Ye(e){if(d(e,"script")){Ge(e)}X(E(e,"script"),function(e){Ge(e)})}function Ke(){return document.querySelector("[hx-boost], [data-hx-boost]")}function Qe(e){if(e.querySelectorAll){var t=Ke()?", a, form":"";var r=e.querySelectorAll(n+t+", [hx-sse], [data-hx-sse], [hx-ws],"+" [data-hx-ws]");return r}else{return[]}}function et(e){var t=F(e);if(!t.initialized){t.initialized=true;ut(e,"htmx:beforeProcessNode");if(e.value){t.lastValue=e.value}var r=Le(e);var n=Ze(e,t,r);if(!n&&M(e,"hx-boost")==="true"){Te(e,t,r)}var i=I(e,"hx-sse");if(i){ze(e,t,i)}var a=I(e,"hx-ws");if(a){Xe(e,t,a)}ut(e,"htmx:afterProcessNode")}}function tt(e){e=N(e);et(e);X(Qe(e),function(e){et(e)})}function rt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function nt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent==="function"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=k().createEvent("CustomEvent");r.initCustomEvent(e,true,true,t)}return r}function it(e,t,r){ut(e,t,U({error:t},r))}function at(e){return e==="htmx:afterProcessNode"}function ot(e,t){X(Kt(e),function(e){try{t(e)}catch(e){st(e)}})}function st(e){if(console.error){console.error(e)}else if(console.log){console.log("ERROR: ",e)}}function ut(e,t,r){e=N(e);if(r==null){r={}}r["elt"]=e;var n=nt(t,r);if(v.logger&&!at(t)){v.logger(e,t,r)}if(r.error){st(r.error);ut(e,"htmx:error",{errorInfo:r})}var i=e.dispatchEvent(n);var a=rt(t);if(i&&a!==t){var o=nt(a,n.detail);i=i&&e.dispatchEvent(o)}ot(e,function(e){i=i&&e.onEvent(t,n)!==false});return i}var lt=null;function ft(){var e=k().querySelector("[hx-history-elt],[data-hx-history-elt]");return e||k().body}function ct(e,t,r,n){var i=x(localStorage.getItem("htmx-history-cache"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}i.push({url:e,content:t,title:r,scroll:n});while(i.length>v.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem("htmx-history-cache",JSON.stringify(i));break}catch(e){it(k().body,"htmx:historyCacheError",{cause:e,cache:i});i.shift()}}}function ht(e){var t=x(localStorage.getItem("htmx-history-cache"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function vt(e){var t=v.config.requestClass;var r=e.cloneNode(true);X(E(r,"."+t),function(e){O(e,t)});return r.innerHTML}function dt(){var e=ft();var t=lt||location.pathname+location.search;ut(k().body,"htmx:beforeHistorySave",{path:t,historyElt:e});if(v.config.historyEnabled)history.replaceState({htmx:true},k().title,window.location.href);ct(t,vt(e),k().title,window.scrollY)}function gt(e){if(v.config.historyEnabled)history.pushState({htmx:true},"",e);lt=e}function pt(e){X(e,function(e){e.call()})}function mt(n){var e=new XMLHttpRequest;var i={path:n,xhr:e};ut(k().body,"htmx:historyCacheMiss",i);e.open("GET",n,true);e.setRequestHeader("HX-History-Restore-Request","true");e.onload=function(){if(this.status>=200&&this.status<400){ut(k().body,"htmx:historyCacheMissLoad",i);var e=u(this.response);e=e.querySelector("[hx-history-elt],[data-hx-history-elt]")||e;var t=ft();var r=Mt(t);se(t,e,r);pt(r.tasks);lt=n}else{it(k().body,"htmx:historyCacheMissLoadError",i)}};e.send()}function yt(e){dt();e=e||location.pathname+location.search;ut(k().body,"htmx:historyRestore",{path:e});var t=ht(e);if(t){var r=u(t.content);var n=ft();var i=Mt(n);se(n,r,i);pt(i.tasks);document.title=t.title;window.scrollTo(0,t.scroll);lt=e}else{if(v.config.refreshOnHistoryMiss){window.location.reload(true)}else{mt(e)}}}function xt(e){var t=M(e,"hx-push-url");return t&&t!=="false"||e.tagName==="A"&&F(e).boosted}function bt(e){var t=M(e,"hx-push-url");return t==="true"||t==="false"?null:t}function wt(e){var t=M(e,"hx-indicator");if(t){var r=q(e,t)}else{r=[e]}X(r,function(e){e.classList["add"].call(e.classList,v.config.requestClass)});return r}function St(e){X(e,function(e){e.classList["remove"].call(e.classList,v.config.requestClass)})}function Et(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function Ct(e){if(e.name===""||e.name==null||e.disabled){return false}if(e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"){return false}if(e.type==="checkbox"||e.type==="radio"){return e.checked}return true}function Lt(t,r,n,e,i){if(e==null||Et(t,e)){return}else{t.push(e)}if(Ct(e)){var a=l(e,"name");var o=e.value;if(e.multiple){o=p(e.querySelectorAll("option:checked")).map(function(e){return e.value})}if(e.files){o=p(e.files)}if(a!=null&&o!=null){var s=r[a];if(s){if(Array.isArray(s)){if(Array.isArray(o)){r[a]=s.concat(o)}else{s.push(o)}}else{if(Array.isArray(o)){r[a]=[s].concat(o)}else{r[a]=[s,o]}}}else{r[a]=o}}if(i){Ot(e,n)}}if(d(e,"form")){var u=e.elements;X(u,function(e){Lt(t,r,n,e,i)})}}function Ot(e,t){if(e.willValidate){ut(e,"htmx:validation:validate");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});ut(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity})}}}function At(e,t){var r=[];var n={};var i={};var a=[];var o=d(e,"form")&&e.noValidate!==true;if(t!=="get"){Lt(r,i,a,T(e,"form"),o)}Lt(r,n,a,e,o);var s=M(e,"hx-include");if(s){var u=q(e,s);X(u,function(e){Lt(r,n,a,e,o);if(!d(e,"form")){X(e.querySelectorAll(Ce),function(e){Lt(r,n,a,e,o)})}})}n=U(n,i);return{errors:a,values:n}}function Rt(e,t,r){if(e!==""){e+="&"}e+=encodeURIComponent(t)+"="+encodeURIComponent(r);return e}function Tt(e){var t="";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){X(n,function(e){t=Rt(t,r,e)})}else{t=Rt(t,r,n)}}}return t}function qt(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){X(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function Ht(e,t,r){var n={"HX-Request":"true","HX-Trigger":l(e,"id"),"HX-Trigger-Name":l(e,"name"),"HX-Target":I(t,"id"),"HX-Current-URL":k().location.href};Ft(e,"hx-headers",false,n);if(r!==undefined){n["HX-Prompt"]=r}return n}function Nt(t,e){var r=M(e,"hx-params");if(r){if(r==="none"){return{}}else if(r==="*"){return t}else if(r.indexOf("not ")===0){X(r.substr(4).split(","),function(e){e=e.trim();delete t[e]});return t}else{var n={};X(r.split(","),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function It(e){var t=M(e,"hx-swap");var r={swapStyle:F(e).boosted?"innerHTML":v.config.defaultSwapStyle,swapDelay:v.config.defaultSwapDelay,settleDelay:v.config.defaultSettleDelay};if(t){var n=y(t);if(n.length>0){r["swapStyle"]=n[0];for(var i=1;i<n.length;i++){var a=n[i];if(a.indexOf("swap:")===0){r["swapDelay"]=f(a.substr(5))}if(a.indexOf("settle:")===0){r["settleDelay"]=f(a.substr(7))}if(a.indexOf("scroll:")===0){r["scroll"]=a.substr(7)}if(a.indexOf("show:")===0){r["show"]=a.substr(5)}}}}return r}function kt(t,r,n){var i=null;ot(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(M(r,"hx-encoding")==="multipart/form-data"){return qt(n)}else{return Tt(n)}}}function Mt(e){return{tasks:[],elts:[e]}}function Dt(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){if(t.scroll==="top"&&r){r.scrollTop=0}if(t.scroll==="bottom"&&n){n.scrollTop=n.scrollHeight}}if(t.show){if(t.show==="top"&&r){r.scrollIntoView(true)}if(t.show==="bottom"&&n){n.scrollIntoView(false)}}}function Ft(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=I(e,t);if(i){var a=i.trim();var o=r;if(a.indexOf("javascript:")===0){a=a.substr(11);o=true}if(a.indexOf("{")!==0){a="{"+a+"}"}var s;if(o){s=Xt(e,function(){return Function("return ("+a+")")()},{})}else{s=x(a)}for(var u in s){if(s.hasOwnProperty(u)){if(n[u]==null){n[u]=s[u]}}}}return Ft(c(e),t,r,n)}function Xt(e,t,r){if(v.config.allowEval){return t()}else{it(e,"htmx:evalDisallowedError");return r}}function Pt(e,t){return Ft(e,"hx-vars",true,t)}function Ut(e,t){return Ft(e,"hx-vals",false,t)}function jt(e){return U(Pt(e),Ut(e))}function zt(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+"-URI-AutoEncoded","true")}}}function Vt(t){if(t.responseURL&&typeof URL!=="undefined"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){it(k().body,"htmx:badResponseUrl",{url:t.responseURL})}}}function Wt(e,t){return e.getAllResponseHeaders().match(t)}function _t(e,t,r){if(r){if(r instanceof Element||a(r,"String")){return Bt(e,t,null,null,{targetOverride:N(r)})}else{return Bt(e,t,N(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:N(r.target)})}}else{return Bt(e,t)}}function Bt(e,t,r,n,i){var a=null;var o=null;i=i!=null?i:{};if(typeof Promise!=="undefined"){var s=new Promise(function(e,t){a=e;o=t})}if(r==null){r=k().body}var u=i.handler||$t;if(!P(r)){return}var l=i.targetOverride||W(r);if(l==null){it(r,"htmx:targetError",{target:I(r,"hx-target")});return}var f=F(r);if(f.requestInFlight){f.queuedRequest=function(){Bt(e,t,r,n)};return}else{f.requestInFlight=true}var c=function(){f.requestInFlight=false;var e=f.queuedRequest;f.queuedRequest=null;if(e){e()}};var h=M(r,"hx-prompt");if(h){var v=prompt(h);if(v===null||!ut(r,"htmx:prompt",{prompt:v,target:l}))D(a);c();return s}var d=M(r,"hx-confirm");if(d){if(!confirm(d)){D(a);c();return s}}var g=new XMLHttpRequest;var p=Ht(r,l,v);if(i.headers){p=U(p,i.values)}var m=At(r,e);var y=m.errors;var x=m.values;if(i.values){x=U(x,i.values)}var b=jt(r);var w=U(x,b);var S=Nt(w,r);if(e!=="get"&&M(r,"hx-encoding")==null){p["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"}if(t==null||t===""){t=k().location.href}var E={parameters:S,unfilteredParameters:w,headers:p,target:l,verb:e,errors:y,path:t,triggeringEvent:n};if(!ut(r,"htmx:configRequest",E))return c();t=E.path;e=E.verb;p=E.headers;S=E.parameters;y=E.errors;if(y&&y.length>0){ut(r,"htmx:validation:halted",E);D(a);c();return s}var C=t.split("#");var L=C[0];var O=C[1];if(e==="get"){var A=L;var R=Object.keys(S).length!==0;if(R){if(A.indexOf("?")<0){A+="?"}else{A+="&"}A+=Tt(S);if(O){A+="#"+O}}g.open("GET",A,true)}else{g.open(e.toUpperCase(),t,true)}g.overrideMimeType("text/html");for(var T in p){if(p.hasOwnProperty(T)){var q=p[T];zt(g,T,q)}}var H={xhr:g,target:l,requestConfig:E,pathInfo:{path:t,finalPath:A,anchor:O}};g.onload=function(){try{u(r,H)}catch(e){it(r,"htmx:onLoadError",U({error:e},H));throw e}finally{St(N);var e=r;if(!P(r)){e=F(l).replacedWith||l}ut(e,"htmx:afterRequest",H);ut(e,"htmx:afterOnLoad",H);D(a);c()}};g.onerror=function(){St(N);var e=r;if(!P(r)){e=F(l).replacedWith||l}it(e,"htmx:afterRequest",H);it(e,"htmx:sendError",H);D(o);c()};g.onabort=function(){St(N);var e=r;if(!P(r)){e=F(l).replacedWith||l}it(e,"htmx:afterRequest",H);it(e,"htmx:sendAbort",H);D(o);c()};if(!ut(r,"htmx:beforeRequest",H)){D(a);c();return s}var N=wt(r);X(["loadstart","loadend","progress","abort"],function(t){X([g,g.upload],function(e){e.addEventListener(t,function(e){ut(r,"htmx:xhr:"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});ut(r,"htmx:beforeSend",H);g.send(e==="get"?null:kt(g,r,S));return s}function $t(a,o){var s=o.xhr;var u=o.target;if(!ut(a,"htmx:beforeOnLoad",o))return;if(Wt(s,/HX-Trigger:/i)){ve(s,"HX-Trigger",a)}if(Wt(s,/HX-Push:/i)){var l=s.getResponseHeader("HX-Push")}if(Wt(s,/HX-Redirect:/i)){window.location.href=s.getResponseHeader("HX-Redirect");return}if(Wt(s,/HX-Refresh:/i)){if("true"===s.getResponseHeader("HX-Refresh")){location.reload();return}}var f=xt(a)||l;if(s.status>=200&&s.status<400){if(s.status===286){Oe(a)}if(s.status!==204){if(!ut(u,"htmx:beforeSwap",o))return;var c=s.response;ot(a,function(e){c=e.transformResponse(c,s,a)});if(f){dt()}var h=It(a);u.classList.add(v.config.swappingClass);var e=function(){try{var e=document.activeElement;var t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null};var r=Mt(u);he(h.swapStyle,u,a,c,r);if(t.elt&&!P(t.elt)&&t.elt.id){var n=document.getElementById(t.elt.id);if(n){if(t.start&&n.setSelectionRange){n.setSelectionRange(t.start,t.end)}n.focus()}}u.classList.remove(v.config.swappingClass);X(r.elts,function(e){if(e.classList){e.classList.add(v.config.settlingClass)}ut(e,"htmx:afterSwap",o)});if(o.pathInfo.anchor){location.hash=o.pathInfo.anchor}if(Wt(s,/HX-Trigger-After-Swap:/i)){ve(s,"HX-Trigger-After-Swap",a)}var i=function(){X(r.tasks,function(e){e.call()});X(r.elts,function(e){if(e.classList){e.classList.remove(v.config.settlingClass)}ut(e,"htmx:afterSettle",o)});if(f){var e=l||bt(a)||Vt(s)||o.pathInfo.finalPath||o.pathInfo.path;gt(e);ut(k().body,"htmx:pushedIntoHistory",{path:e})}Dt(r.elts,h);if(Wt(s,/HX-Trigger-After-Settle:/i)){ve(s,"HX-Trigger-After-Settle",a)}};if(h.settleDelay>0){setTimeout(i,h.settleDelay)}else{i()}}catch(e){it(a,"htmx:swapError",o);throw e}};if(h.swapDelay>0){setTimeout(e,h.swapDelay)}else{e()}}}else{it(a,"htmx:responseError",U({error:"Response Status Error Code "+s.status+" from "+o.pathInfo.path},o))}}var Jt={};function Zt(){return{onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Gt(e,t){Jt[e]=U(Zt(),t)}function Yt(e){delete Jt[e]}function Kt(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=I(e,"hx-ext");if(t){X(t.split(","),function(e){e=e.replace(/ /g,"");if(e.slice(0,7)=="ignore:"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Jt[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return Kt(c(e),r,n)}function Qt(e){if(k().readyState!=="loading"){e()}else{k().addEventListener("DOMContentLoaded",e)}}function er(){if(v.config.includeIndicatorStyles!==false){k().head.insertAdjacentHTML("beforeend","<style>                      ."+v.config.indicatorClass+"{opacity:0;transition: opacity 200ms ease-in;}                      ."+v.config.requestClass+" ."+v.config.indicatorClass+"{opacity:1}                      ."+v.config.requestClass+"."+v.config.indicatorClass+"{opacity:1}                    </style>")}}function tr(){var e=k().querySelector('meta[name="htmx-config"]');if(e){return x(e.content)}else{return null}}function rr(){var e=tr();if(e){v.config=U(v.config,e)}}Qt(function(){rr();er();var e=k().body;tt(e);window.onpopstate=function(e){if(e.state&&e.state.htmx){yt()}};setTimeout(function(){ut(e,"htmx:load",{})},0)});return v}()});