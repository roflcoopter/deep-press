!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=n(2),i=(r=n(1))&&r.__esModule?r:{default:r};customElements.whenDefined("card-tools").then(()=>{let e=customElements.get("card-tools");const t=customElements.get("ha-card");var n=Object.assign({},{enable_unsupported:!1},e.lovelace.config.deep_press);if("ontouchforcechange"in document==!1&&0==n.enable_unsupported)return;const r=function(e){var t=document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog");t?e?(t.noCancelOnOutsideClick=!1,t.style.pointerEvents="all"):(t.noCancelOnOutsideClick=!0,t.style.pointerEvents="none"):setTimeout(function(){r(e)},100)};["touchend","mouseup"].forEach(e=>{document.addEventListener(e,()=>{!function(){try{document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#view > hui-view").style.webkitFilter="blur(0px)"}catch(e){if(!(e instanceof TypeError))throw e}}(),setTimeout(function(){r(!0)},100)})});const s=function(e){["touchstart","touchend","click"].forEach(function(t){!function(e,t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(e,t)})};function a(e){this.cancel||(this.view.style.webkitFilter="blur(0px)",this.hold||this.event_over||s(e),this.event_over=!0,this.hold=!1,this.deep_press=!1)}const u=function(t,n){t.querySelector(":scope >#deep-press-cover")||(t.config=n,t.cover=document.createElement("div"),t.cover.setAttribute("id","deep-press-cover"),t.cover.setAttribute("style","position:absolute; top:0; left:0; width:100%; height: 100%;"),t.appendChild(t.cover),["touchstart","mousedown","click"].forEach(function(e){t.cover.addEventListener(e,function(e){(function(e,t){t.stopPropagation();try{e.parentElement.dispatchEvent(new t.constructor(t.type,t))}catch(n){e.getRootNode().host.dispatchEvent(new t.constructor(t.type,t))}}).call(this,t,e)},{passive:!0})}),["touchend","mouseup"].forEach(function(e){t.cover.addEventListener(e,function(e){a.call(this,t,e)},{passive:!0})}),["touchcancel","mouseout","touchmove","mousewheel","wheel","scroll"].forEach(function(e){t.cover.addEventListener(e,function(e){(function(e){this.cancel=!0;try{this.view.style.webkitFilter="blur(0px)"}catch(e){}}).call(this,e)},{passive:!0})}),i.default.set(t.cover,{start:function(e){(function(){this.cancel=!1,this.event_over=!1,this.hold=!1,this.deep_press=!1,this.view=document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#view > hui-view")}).call(this)},change:function(e,t){(function(e){this.cancel||this.deep_press||e>.2&&(this.view.style.webkitFilter="blur("+i.default.map(e,.2,.5,0,10)+"px)",this.hold=!0)}).call(this,e)},startDeepPress:function(n){(function(t){this.cancel||this.deep_press||(this.deep_press=!0,(0,o.handleClick)(t,e.hass,t.config,!0,!1),r(!1))}).call(this,t)},end:function(){a.call(this,t),this.view.style.webkitFilter="blur(0px)"}}))},c=function(e){return e.config?e.config:e._config?e._config:e.host?c(e.host):e.parentElement?c(e.parentElement):e.parentNode?c(e.parentNode):null};var l=t.prototype.update;t.prototype.update=function(e){l.apply(this,e);const t=c(this);t&&t.deep_press&&t.hold_action&&u(this,t)}}),console.info("%cdeep-press\n%cVersion: 1.2.4","color: green; font-weight: bold;","")},function(e,t,n){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i={set:function(e,t,n){d(e,t,n)},config:function(e){h.set(e)},map:function(e,t,n,r,o){return p.apply(null,arguments)}},s=function(){function e(t,r,o){n(this,e),this.routeEvents(t,r,o),this.preventSelect(t,o)}return o(e,[{key:"routeEvents",value:function(e,t,n){var r=h.get("only",n);this.adapter=!y||"pointer"!==r&&null!==r?!v||"touch"!==r&&null!==r?!m||"mouse"!==r&&null!==r?new a(e,t).bindUnsupportedEvent():new u(e,t,n).bindEvents():new c(e,t,n).bindEvents():new l(e,t,n).bindEvents()}},{key:"preventSelect",value:function(e,t){h.get("preventSelect",t)&&(e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.MozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none")}}]),e}(),a=function(){function e(t,r,o){n(this,e),this.el=t,this.block=r,this.options=o,this.pressed=!1,this.deepPressed=!1,this.nativeSupport=!1,this.runningPolyfill=!1,this.runKey=Math.random()}return o(e,[{key:"setPressed",value:function(e){this.pressed=e}},{key:"setDeepPressed",value:function(e){this.deepPressed=e}},{key:"isPressed",value:function(){return this.pressed}},{key:"isDeepPressed",value:function(){return this.deepPressed}},{key:"add",value:function(e,t){this.el.addEventListener(e,t,!1)}},{key:"runClosure",value:function(e){e in this.block&&this.block[e].apply(this.el,Array.prototype.slice.call(arguments,1))}},{key:"fail",value:function(e,t){h.get("polyfill",this.options)?this.runKey===t&&this.runPolyfill(e):this.runClosure("unsupported",e)}},{key:"bindUnsupportedEvent",value:function(){var e=this;this.add(v?"touchstart":"mousedown",function(t){return e.runClosure("unsupported",t)})}},{key:"_startPress",value:function(e){!1===this.isPressed()&&(this.runningPolyfill=!1,this.setPressed(!0),this.runClosure("start",e))}},{key:"_startDeepPress",value:function(e){this.isPressed()&&!1===this.isDeepPressed()&&(this.setDeepPressed(!0),this.runClosure("startDeepPress",e))}},{key:"_changePress",value:function(e,t){this.nativeSupport=!0,this.runClosure("change",e,t)}},{key:"_endDeepPress",value:function(){this.isPressed()&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress"))}},{key:"_endPress",value:function(){!1===this.runningPolyfill?(this.isPressed()&&(this._endDeepPress(),this.setPressed(!1),this.runClosure("end")),this.runKey=Math.random(),this.nativeSupport=!1):this.setPressed(!1)}},{key:"deepPress",value:function(e,t){e>=.5?this._startDeepPress(t):this._endDeepPress()}},{key:"runPolyfill",value:function(e){this.increment=0===h.get("polyfillSpeedUp",this.options)?1:10/h.get("polyfillSpeedUp",this.options),this.decrement=0===h.get("polyfillSpeedDown",this.options)?1:10/h.get("polyfillSpeedDown",this.options),this.setPressed(!0),this.runClosure("start",e),!1===this.runningPolyfill&&this.loopPolyfillForce(0,e)}},{key:"loopPolyfillForce",value:function(e,t){!1===this.nativeSupport&&(this.isPressed()?(this.runningPolyfill=!0,e=e+this.increment>1?1:e+this.increment,this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10)):((e=e-this.decrement<0?0:e-this.decrement)<.5&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress")),0===e?(this.runningPolyfill=!1,this.setPressed(!0),this._endPress()):(this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10))))}}]),e}(),u=function(r){function i(t,r,o){return n(this,i),e(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,r,o))}return t(i,r),o(i,[{key:"bindEvents",value:function(){this.add("webkitmouseforcewillbegin",this._startPress.bind(this)),this.add("mousedown",this.support.bind(this)),this.add("webkitmouseforcechanged",this.change.bind(this)),this.add("webkitmouseforcedown",this._startDeepPress.bind(this)),this.add("webkitmouseforceup",this._endDeepPress.bind(this)),this.add("mouseleave",this._endPress.bind(this)),this.add("mouseup",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&this.fail(e,this.runKey)}},{key:"change",value:function(e){this.isPressed()&&e.webkitForce>0&&this._changePress(this.normalizeForce(e.webkitForce),e)}},{key:"normalizeForce",value:function(e){return this.reachOne(p(e,1,3,0,1))}},{key:"reachOne",value:function(e){return e>.995?1:e}}]),i}(a),c=function(r){function i(t,r,o){return n(this,i),e(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,r,o))}return t(i,r),o(i,[{key:"bindEvents",value:function(){b?(this.add("touchforcechange",this.start.bind(this)),this.add("touchstart",this.support.bind(this,0)),this.add("touchend",this._endPress.bind(this))):(this.add("touchstart",this.startLegacy.bind(this)),this.add("touchend",this._endPress.bind(this)))}},{key:"start",value:function(e){e.touches.length>0&&(this._startPress(e),this.touch=this.selectTouch(e),this.touch&&this._changePress(this.touch.force,e))}},{key:"support",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.runKey;!1===this.isPressed()&&(e<=6?(e++,setTimeout(this.support.bind(this,e,t,n),10)):this.fail(t,n))}},{key:"startLegacy",value:function(e){this.initialForce=e.touches[0].force,this.supportLegacy(0,e,this.runKey,this.initialForce)}},{key:"supportLegacy",value:function(e,t,n,r){r!==this.initialForce?(this._startPress(t),this.loopForce(t)):e<=6?(e++,setTimeout(this.supportLegacy.bind(this,e,t,n,r),10)):this.fail(t,n)}},{key:"loopForce",value:function(e){this.isPressed()&&(this.touch=this.selectTouch(e),setTimeout(this.loopForce.bind(this,e),10),this._changePress(this.touch.force,e))}},{key:"selectTouch",value:function(e){if(1===e.touches.length)return this.returnTouch(e.touches[0],e);for(var t=0;t<e.touches.length;t++)if(e.touches[t].target===this.el||this.el.contains(e.touches[t].target))return this.returnTouch(e.touches[t],e)}},{key:"returnTouch",value:function(e,t){return this.deepPress(e.force,t),e}}]),i}(a),l=function(r){function i(t,r,o){return n(this,i),e(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,r,o))}return t(i,r),o(i,[{key:"bindEvents",value:function(){this.add("pointerdown",this.support.bind(this)),this.add("pointermove",this.change.bind(this)),this.add("pointerup",this._endPress.bind(this)),this.add("pointerleave",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&(0===e.pressure||.5===e.pressure||e.pressure>1?this.fail(e,this.runKey):(this._startPress(e),this._changePress(e.pressure,e)))}},{key:"change",value:function(e){this.isPressed()&&e.pressure>0&&.5!==e.pressure&&(this._changePress(e.pressure,e),this.deepPress(e.pressure,e))}}]),i}(a),h={polyfill:!0,polyfillSpeedUp:1e3,polyfillSpeedDown:0,preventSelect:!0,only:null,get:function(e,t){return t.hasOwnProperty(e)?t[e]:this[e]},set:function(e){for(var t in e)e.hasOwnProperty(t)&&this.hasOwnProperty(t)&&"get"!=t&&"set"!=t&&(this[t]=e[t])}},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e||e instanceof String)for(var r=document.querySelectorAll(e),o=0;o<r.length;o++)new s(r[o],t,n);else if(f(e))new s(e,t,n);else for(var o=0;o<e.length;o++)new s(e[o],t,n)},f=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":r(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},p=function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r},m=!1,v=!1,y=!1,g=!1,b=!1;if("undefined"!=typeof window){if("undefined"!=typeof Touch)try{(Touch.prototype.hasOwnProperty("force")||"force"in new Touch)&&(g=!0)}catch(e){}v="ontouchstart"in window.document&&g,m="onmousemove"in window.document&&!v,y="onpointermove"in window.document,b="ontouchforcechange"in window.document}return i})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";n.r(t);var r={},o=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",s=/\[([^]*?)\]/gm,a=function(){};function u(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n.push(e[r].substr(0,t));return n}function c(e){return function(t,n,r){var o=r[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~o&&(t.month=o)}}function l(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],f=u(d,3),p=u(h,3);r.i18n={dayNamesShort:p,dayNames:h,monthNamesShort:f,monthNames:d,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var m={D:function(e){return e.getDate()},DD:function(e){return l(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return l(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return l(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return l(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return l(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return l(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return l(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return l(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return l(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return l(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return l(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+l(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},v={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+i,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var n=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?n-1:n)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",a],ddd:[i,a],MMM:[i,c("monthNamesShort")],MMMM:[i,c("monthNames")],a:[i,function(e,t,n){var r=t.toLowerCase();r===n.amPm[0]?e.isPm=!1:r===n.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var n,r=(t+"").match(/([+-]|\d\d)/gi);r&&(n=60*r[1]+parseInt(r[2],10),e.timezoneOffset="+"===r[0]?n:-n)}]};v.dd=v.d,v.dddd=v.ddd,v.DD=v.D,v.mm=v.m,v.hh=v.H=v.HH=v.h,v.MM=v.M,v.ss=v.s,v.A=v.a,r.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},r.format=function(e,t,n){var i=n||r.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=r.masks[t]||t||r.masks.default;var a=[];return(t=(t=t.replace(s,function(e,t){return a.push(t),"@@@"})).replace(o,function(t){return t in m?m[t](e,i):t.slice(1,t.length-1)})).replace(/@@@/g,function(){return a.shift()})},r.parse=function(e,t,n){var i=n||r.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=r.masks[t]||t,e.length>1e3)return null;var a={},u=[],c=[];t=t.replace(s,function(e,t){return c.push(t),"@@@"});var l,h=(l=t,l.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(o,function(e){if(v[e]){var t=v[e];return u.push(t[1]),"("+t[0]+")"}return e});h=h.replace(/@@@/g,function(){return c.shift()});var d=e.match(new RegExp(h,"i"));if(!d)return null;for(var f=1;f<d.length;f++)u[f-1](a,d[f],i);var p,m=new Date;return!0===a.isPm&&null!=a.hour&&12!=+a.hour?a.hour=+a.hour+12:!1===a.isPm&&12==+a.hour&&(a.hour=0),null!=a.timezoneOffset?(a.minute=+(a.minute||0)-+a.timezoneOffset,p=new Date(Date.UTC(a.year||m.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0))):p=new Date(a.year||m.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0),p};var y=r;function g(e){var t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+t[2]}n.d(t,"durationToSeconds",function(){return g}),n.d(t,"formatDate",function(){return b}),n.d(t,"formatDateTime",function(){return w}),n.d(t,"formatTime",function(){return _}),n.d(t,"relativeTime",function(){return P}),n.d(t,"secondsToDuration",function(){return D}),n.d(t,"timerTimeRemaining",function(){return M}),n.d(t,"applyThemesOnElement",function(){return T}),n.d(t,"computeDomain",function(){return O}),n.d(t,"computeEntity",function(){return C}),n.d(t,"computeRTL",function(){return Y}),n.d(t,"computeRTLDirection",function(){return x}),n.d(t,"computeStateDisplay",function(){return F}),n.d(t,"computeStateDomain",function(){return L}),n.d(t,"DEFAULT_DOMAIN_ICON",function(){return R}),n.d(t,"DEFAULT_PANEL",function(){return N}),n.d(t,"DOMAINS_WITH_CARD",function(){return A}),n.d(t,"DOMAINS_WITH_MORE_INFO",function(){return H}),n.d(t,"DOMAINS_HIDE_MORE_INFO",function(){return I}),n.d(t,"DOMAINS_MORE_INFO_NO_HISTORY",function(){return j}),n.d(t,"STATES_OFF",function(){return q}),n.d(t,"DOMAINS_TOGGLE",function(){return U}),n.d(t,"UNIT_C",function(){return z}),n.d(t,"UNIT_F",function(){return K}),n.d(t,"DEFAULT_VIEW_ENTITY_ID",function(){return Z}),n.d(t,"createThing",function(){return W}),n.d(t,"fixedIcons",function(){return B}),n.d(t,"domainIcon",function(){return J}),n.d(t,"fireEvent",function(){return V}),n.d(t,"handleClick",function(){return ee}),n.d(t,"forwardHaptic",function(){return G}),n.d(t,"hasConfigOrEntityChanged",function(){return te}),n.d(t,"longPressBind",function(){return ie}),n.d(t,"longPress",function(){return se}),n.d(t,"navigate",function(){return X}),n.d(t,"toggleEntity",function(){return Q}),n.d(t,"turnOnOffEntities",function(){return ae}),n.d(t,"turnOnOffEntity",function(){return $}),n.d(t,"getLovelace",function(){return ue});var b=function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})}:function(e){return y.format(e,"mediumDate")},w=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(e){return y.format(e,"haDateTime")},_=function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleTimeString(t,{hour:"numeric",minute:"2-digit"})}:function(e){return y.format(e,"shortTime")},S=[60,60,24,7],k=["second","minute","hour","day"];function P(e,t,n){void 0===n&&(n={});var r,o=((n.compareTime||new Date).getTime()-e.getTime())/1e3,i=o>=0?"past":"future";o=Math.abs(o);for(var s=0;s<S.length;s++){if(o<S[s]){o=Math.floor(o),r=t("ui.components.relative_time.duration."+k[s],"count",o);break}o/=S[s]}return void 0===r&&(r=t("ui.components.relative_time.duration.week","count",o=Math.floor(o))),!1===n.includeTense?r:t("ui.components.relative_time."+i,"time",r)}var E=function(e){return e<10?"0"+e:e};function D(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%3600%60);return t>0?t+":"+E(n)+":"+E(r):n>0?n+":"+E(r):r>0?""+r:null}function M(e){var t=g(e.attributes.remaining);if("active"===e.state){var n=(new Date).getTime(),r=new Date(e.last_changed).getTime();t=Math.max(t-(n-r)/1e3,0)}return t}var T=function(e,t,n,r){void 0===r&&(r=!1),e._themes||(e._themes={});var o=t.default_theme;("default"===n||n&&t.themes[n])&&(o=n);var i=Object.assign({},e._themes);if("default"!==o){var s=t.themes[o];Object.keys(s).forEach(function(t){var n="--"+t;e._themes[n]="",i[n]=s[t]})}if(e.updateStyles?e.updateStyles(i):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,i),r){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var u=i["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",u)}}};function O(e){return e.substr(0,e.indexOf("."))}function C(e){return e.substr(e.indexOf(".")+1)}function Y(e){var t=e.language||"en";return e.translationMetadata.translations[t]&&e.translationMetadata.translations[t].isRTL||!1}function x(e){return Y(e)?"rtl":"ltr"}function L(e){return O(e.entity_id)}function F(e,t,n){var r,o=L(t);if("binary_sensor"===o)t.attributes.device_class&&(r=e("state."+o+"."+t.attributes.device_class+"."+t.state)),r||(r=e("state."+o+".default."+t.state));else if(t.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(t.state))r=t.state+" "+t.attributes.unit_of_measurement;else if("input_datetime"===o){var i;if(t.attributes.has_time)if(t.attributes.has_date)i=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),r=w(i,n);else{var s=new Date;i=new Date(s.getFullYear(),s.getMonth(),s.getDay(),t.attributes.hour,t.attributes.minute),r=_(i,n)}else i=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),r=b(i,n)}else r="zwave"===o?["initializing","dead"].includes(t.state)?e("state.zwave.query_stage."+t.state,"query_stage",t.attributes.query_stage):e("state.zwave.default."+t.state):e("state."+o+"."+t.state);return r||(r=e("state.default."+t.state)||e("component."+o+".state."+t.state)||t.state),r}var R="hass:bookmark",N="lovelace",A=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],H=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],I=["input_number","input_select","input_text","scene","weblink"],j=["camera","configurator","history_graph","scene"],q=["closed","locked","off"],U=new Set(["fan","input_boolean","light","switch","group","automation"]),z="°C",K="°F",Z="group.default_view",V=function(e,t,n,r){r=r||{},n=null==n?{}:n;var o=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=n,e.dispatchEvent(o),o},W=function(e){var t=function(e,t){return n("hui-error-card",{type:"error",error:e,config:t})},n=function(e,n){var r=window.document.createElement(e);try{r.setConfig(n)}catch(r){return console.error(e,r),t(r.message,n)}return r};if(!e||"object"!=typeof e||!e.type||!e.type.startsWith("custom:"))return t("No type configured",e);var r=e.type.substr("custom:".length);if(customElements.get(r))return n(r,e);var o=t("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var i=setTimeout(function(){o.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(i),V(o,"ll-rebuild",{},o)}),o},B={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function J(e,t){if(e in B)return B[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),R}}var G=function(e,t){V(e,"haptic",t)},X=function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),V(window,"location-changed",{replace:n})},$=function(e,t,n){void 0===n&&(n=!0);var r,o=O(t),i="group"===o?"homeassistant":o;switch(o){case"lock":r=n?"unlock":"lock";break;case"cover":r=n?"open_cover":"close_cover";break;default:r=n?"turn_on":"turn_off"}return e.callService(i,r,{entity_id:t})},Q=function(e,t){var n=q.includes(e.states[t].state);return $(e,t,n)},ee=function(e,t,n,r,o){var i;switch(o&&n.dbltap_action?i=n.dbltap_action:r&&n.hold_action?i=n.hold_action:!r&&n.tap_action&&(i=n.tap_action),i||(i={action:"more-info"}),i.action){case"more-info":(n.entity||n.camera_image)&&(V(e,"hass-more-info",{entityId:i.entity?i.entity:n.entity?n.entity:n.camera_image}),i.haptic&&G(e,i.haptic));break;case"navigate":i.navigation_path&&(X(0,i.navigation_path),i.haptic&&G(e,i.haptic));break;case"url":i.url&&window.open(i.url),i.haptic&&G(e,i.haptic);break;case"toggle":n.entity&&(Q(t,n.entity),i.haptic&&G(e,i.haptic));break;case"call-service":if(!i.service)return;var s=i.service.split(".",2),a=s[0],u=s[1],c=Object.assign({},i.service_data);"entity"===c.entity_id&&(c.entity_id=n.entity),t.callService(a,u,c),i.haptic&&G(e,i.haptic)}};function te(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var r=t.get("hass");return!r||r.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}const ne=new WeakMap;String(Math.random()).slice(2);try{const e={get capture(){return!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var re="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,oe=function(e){function t(){e.call(this),this.holdTime=500,this.ripple=document.createElement("paper-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1,this.nbClicks=0}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.connectedCallback=function(){var e=this;Object.assign(this.style,{borderRadius:"50%",position:"absolute",width:re?"100px":"50px",height:re?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.style.color="#03a9f4",this.ripple.style.color="var(--primary-color)",["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(function(t){document.addEventListener(t,function(){clearTimeout(e.timer),e.stopAnimation(),e.timer=void 0},{passive:!0})})},t.prototype.bind=function(e){var t=this;if(!e.longPress){e.longPress=!0,e.addEventListener("contextmenu",function(e){var t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1});var n=function(n){var r,o;t.cooldownStart||(t.held=!1,n.touches?(r=n.touches[0].pageX,o=n.touches[0].pageY):(r=n.pageX,o=n.pageY),t.timer=window.setTimeout(function(){t.startAnimation(r,o),t.held=!0,e.repeat&&!e.isRepeating&&(e.isRepeating=!0,t.repeatTimeout=setInterval(function(){e.dispatchEvent(new Event("ha-hold"))},e.repeat))},t.holdTime),t.cooldownStart=!0,window.setTimeout(function(){return t.cooldownStart=!1},100))},r=function(n){t.cooldownEnd||["touchend","touchcancel"].includes(n.type)&&void 0===t.timer?e.isRepeating&&t.repeatTimeout&&(clearInterval(t.repeatTimeout),e.isRepeating=!1):(clearTimeout(t.timer),e.isRepeating&&t.repeatTimeout&&clearInterval(t.repeatTimeout),e.isRepeating=!1,t.stopAnimation(),t.timer=void 0,t.held?e.repeat||e.dispatchEvent(new Event("ha-hold")):e.hasDblClick?0===t.nbClicks?(t.nbClicks+=1,t.dblClickTimeout=window.setTimeout(function(){1===t.nbClicks&&(t.nbClicks=0,e.dispatchEvent(new Event("ha-click")))},250)):(t.nbClicks=0,clearTimeout(t.dblClickTimeout),e.dispatchEvent(new Event("ha-dblclick"))):e.dispatchEvent(new Event("ha-click")),t.cooldownEnd=!0,window.setTimeout(function(){return t.cooldownEnd=!1},100))};e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("touchend",r),e.addEventListener("touchcancel",r),e.addEventListener("mousedown",n,{passive:!0}),e.addEventListener("click",r)}},t.prototype.startAnimation=function(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.holdDown=!0,this.ripple.simulatedRipple()},t.prototype.stopAnimation=function(){this.ripple.holdDown=!1,this.style.display="none"},t}(HTMLElement);customElements.get("long-press-custom-card-helpers")||customElements.define("long-press-custom-card-helpers",oe);var ie=function(e){var t=function(){var e=document.body;if(e.querySelector("long-press-custom-card-helpers"))return e.querySelector("long-press-custom-card-helpers");var t=document.createElement("long-press-custom-card-helpers");return e.appendChild(t),t}();t&&t.bind(e)},se=(e=>(...e)=>{const t=function(){return function(e){ie(e.committer.element)}}(...e);return ne.set(t,!0),t})(),ae=function(e,t,n){void 0===n&&(n=!0);var r={};t.forEach(function(t){if(q.includes(e.states[t].state)===n){var o=O(t),i=["cover","lock"].includes(o)?o:"homeassistant";i in r||(r[i]=[]),r[i].push(t)}}),Object.keys(r).forEach(function(t){var o;switch(t){case"lock":o=n?"unlock":"lock";break;case"cover":o=n?"open_cover":"close_cover";break;default:o=n?"turn_on":"turn_off"}e.callService(t,o,{entity_id:r[t]})})},ue=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}}]);