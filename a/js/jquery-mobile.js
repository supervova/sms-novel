/*! jQuery Mobile v1.2.0 jquerymobile.com | jquery.org/license | Core: Core — Base file for jQuery Mobile, Touch support test, Virtual Mouse (vmouse) Bindings; Events: Touch; Utilities: Match Media Polyfill, Zoom Handling, iOS Orientation Change Fix */
(function(a,b,c){typeof define=="function"&&define.amd?define(["jquery"],function(d){return c(d,a,b),d.mobile}):c(a.jQuery,a,b)})(this,document,function(a,b,c,d){(function(a,b,d){var e={};a.mobile=a.extend({},{version:"1.2.0",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(d){a.type(d)!=="number"&&(d=a.mobile.defaultHomeScroll),a.event.special.scrollstart.enabled=!1,setTimeout(function(){b.scrollTo(0,d),a(c).trigger("silentscroll",{x:0,y:d})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:e,nsNormalize:function(b){if(!b)return;return e[b]||(e[b]=a.camelCase(a.mobile.ns+b))},getInheritedTheme:function(a,b){var c=a[0],d="",e=/ui-(bar|body|overlay)-([a-z])\b/,f,g;while(c){f=c.className||"";if(f&&(g=e.exec(f))&&(d=g[2]))break;c=c.parentNode}return d||b||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,c){if(!a.mobile.ignoreContentEnabled)return b;var d=b.length,e=a(),f,g,h;for(var i=0;i<d;i++){g=b.eq(i),h=!1,f=b[i];while(f){var j=f.getAttribute?f.getAttribute("data-"+a.mobile.ns+c):"";if(j==="false"){h=!0;break}f=f.parentNode}h||(e=e.add(g))}return e},getScreenHeight:function(){return b.innerHeight||a(b).height()}},a.mobile),a.fn.jqmData=function(b,c){var e;return typeof b!="undefined"&&(b&&(b=a.mobile.nsNormalize(b)),arguments.length<2||c===d?e=this.data(b):e=this.data(b,c)),e},a.jqmData=function(b,c,d){var e;return typeof c!="undefined"&&(e=a.data(b,c?a.mobile.nsNormalize(c):c,d)),e},a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))},a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))},a.fn.removeWithDependents=function(){a.removeWithDependents(this)},a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove(),c.remove()},a.fn.addDependents=function(b){a.addDependents(a(this),b)},a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))},a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()},a.fn.jqmEnhanceable=function(){return a.mobile.enhanceable(this)},a.fn.jqmHijackable=function(){return a.mobile.hijackable(this)};var f=a.find,g=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,d,e){return b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]"),f.call(this,b,c,d,e)},a.extend(a.find,f),a.find.matches=function(b,c){return a.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}})(a,this),function(a,d){var e=a(b),f=a("html");a.mobile.media=function(){var b={},d=a("<div id='jquery-mediatest'></div>"),e=a("<body>").append(d);return function(a){if(!(a in b)){var g=c.createElement("style"),h="@media "+a+" { #jquery-mediatest { position:absolute; } }";g.type="text/css",g.styleSheet?g.styleSheet.cssText=h:g.appendChild(c.createTextNode(h)),f.prepend(e).prepend(g),b[a]=d.css("position")==="absolute",e.add(g).remove()}return b[a]}}()}(a),function(a,b){var d={touch:"ontouchend"in c};a.mobile=a.mobile||{},a.mobile.support=a.mobile.support||{},a.extend(a.support,d),a.extend(a.mobile.support,d)}(a),function(a,b,c,d){function x(a){while(a&&typeof a.originalEvent!="undefined")a=a.originalEvent;return a}function y(b,c){var e=b.type,f,g,i,k,l,m,n,o,p;b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,e.search(/^(mouse|click)/)>-1&&(g=j);if(f)for(n=g.length,k;n;)k=g[--n],b[k]=f[k];e.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1);if(e.search(/^touch/)!==-1){i=x(f),e=i.touches,l=i.changedTouches,m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m)for(o=0,p=h.length;o<p;o++)k=h[o],b[k]=m[k]}return b}function z(b){var c={},d,f;while(b){d=a.data(b,e);for(f in d)d[f]&&(c[f]=c.hasVirtualBinding=!0);b=b.parentNode}return c}function A(b,c){var d;while(b){d=a.data(b,e);if(d&&(!c||d[c]))return b;b=b.parentNode}return null}function B(){r=!1}function C(){r=!0}function D(){v=0,p.length=0,q=!1,C()}function E(){B()}function F(){G(),l=setTimeout(function(){l=0,D()},a.vmouse.resetTimerDuration)}function G(){l&&(clearTimeout(l),l=0)}function H(b,c,d){var e;if(d&&d[b]||!d&&A(c.target,b))e=y(c,b),a(c.target).trigger(e);return e}function I(b){var c=a.data(b.target,f);if(!q&&(!v||v!==c)){var d=H("v"+b.type,b);d&&(d.isDefaultPrevented()&&b.preventDefault(),d.isPropagationStopped()&&b.stopPropagation(),d.isImmediatePropagationStopped()&&b.stopImmediatePropagation())}}function J(b){var c=x(b).touches,d,e;if(c&&c.length===1){d=b.target,e=z(d);if(e.hasVirtualBinding){v=u++,a.data(d,f,v),G(),E(),o=!1;var g=x(b).touches[0];m=g.pageX,n=g.pageY,H("vmouseover",b,e),H("vmousedown",b,e)}}}function K(a){if(r)return;o||H("vmousecancel",a,z(a.target)),o=!0,F()}function L(b){if(r)return;var c=x(b).touches[0],d=o,e=a.vmouse.moveDistanceThreshold,f=z(b.target);o=o||Math.abs(c.pageX-m)>e||Math.abs(c.pageY-n)>e,o&&!d&&H("vmousecancel",b,f),H("vmousemove",b,f),F()}function M(a){if(r)return;C();var b=z(a.target),c;H("vmouseup",a,b);if(!o){var d=H("vclick",a,b);d&&d.isDefaultPrevented()&&(c=x(a).changedTouches[0],p.push({touchID:v,x:c.clientX,y:c.clientY}),q=!0)}H("vmouseout",a,b),o=!1,F()}function N(b){var c=a.data(b,e),d;if(c)for(d in c)if(c[d])return!0;return!1}function O(){}function P(b){var c=b.substr(1);return{setup:function(d,f){N(this)||a.data(this,e,{});var g=a.data(this,e);g[b]=!0,k[b]=(k[b]||0)+1,k[b]===1&&t.bind(c,I),a(this).bind(c,O),s&&(k.touchstart=(k.touchstart||0)+1,k.touchstart===1&&t.bind("touchstart",J).bind("touchend",M).bind("touchmove",L).bind("scroll",K))},teardown:function(d,f){--k[b],k[b]||t.unbind(c,I),s&&(--k.touchstart,k.touchstart||t.unbind("touchstart",J).unbind("touchmove",L).unbind("touchend",M).unbind("scroll",K));var g=a(this),h=a.data(this,e);h&&(h[b]=!1),g.unbind(c,O),N(this)||g.removeData(e)}}}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=a.event.mouseHooks?a.event.mouseHooks.props:[],j=a.event.props.concat(i),k={},l=0,m=0,n=0,o=!1,p=[],q=!1,r=!1,s="addEventListener"in c,t=a(c),u=1,v=0,w;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var Q=0;Q<g.length;Q++)a.event.special[g[Q]]=P(g[Q]);s&&c.addEventListener("click",function(b){var c=p.length,d=b.target,e,g,h,i,j,k;if(c){e=b.clientX,g=b.clientY,w=a.vmouse.clickDistanceThreshold,h=d;while(h){for(i=0;i<c;i++){j=p[i],k=0;if(h===d&&Math.abs(j.x-e)<w&&Math.abs(j.y-g)<w||a.data(h,f)===j.touchID){b.preventDefault(),b.stopPropagation();return}}h=h.parentNode}}},!0)}(a,b,c),function(a,b,d){function j(b,c,d){var e=d.type;d.type=c,a.event.handle.call(b,d),d.type=e}a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)});var e=a.mobile.support.touch,f="touchmove scroll",g=e?"touchstart":"mousedown",h=e?"touchend":"mouseup",i=e?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function g(a,c){d=c,j(b,d?"scrollstart":"scrollstop",a)}var b=this,c=a(b),d,e;c.bind(f,function(b){if(!a.event.special.scrollstart.enabled)return;d||g(b,!0),clearTimeout(e),e=setTimeout(function(){g(b,!1)},50)})}},a.event.special.tap={tapholdThreshold:750,setup:function(){var b=this,d=a(b);d.bind("vmousedown",function(e){function i(){clearTimeout(h)}function k(){i(),d.unbind("vclick",l).unbind("vmouseup",i),a(c).unbind("vmousecancel",k)}function l(a){k(),f===a.target&&j(b,"tap",a)}if(e.which&&e.which!==1)return!1;var f=e.target,g=e.originalEvent,h;d.bind("vmouseup",i).bind("vclick",l),a(c).bind("vmousecancel",k),h=setTimeout(function(){j(b,"taphold",a.Event("taphold",{target:f}))},a.event.special.tap.tapholdThreshold)})}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=this,c=a(b);c.bind(g,function(b){function j(b){if(!f)return;var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;g={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(f.coords[0]-g.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}var e=b.originalEvent.touches?b.originalEvent.touches[0]:b,f={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(b.target)},g;c.bind(i,j).one(h,function(b){c.unbind(i,j),f&&g&&g.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-g.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-g.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&f.origin.trigger("swipe").trigger(f.coords[0]>g.coords[0]?"swipeleft":"swiperight"),f=g=d})})}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})}(a,this),function(a){var b=a("meta[name=viewport]"),c=b.attr("content"),d=c+",maximum-scale=1, user-scalable=no",e=c+",maximum-scale=10, user-scalable=yes",f=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);a.mobile.zoom=a.extend({},{enabled:!f,locked:!1,disable:function(c){!f&&!a.mobile.zoom.locked&&(b.attr("content",d),a.mobile.zoom.enabled=!1,a.mobile.zoom.locked=c||!1)},enable:function(c){!f&&(!a.mobile.zoom.locked||c===!0)&&(b.attr("content",e),a.mobile.zoom.enabled=!0,a.mobile.zoom.locked=!1)},restore:function(){f||(b.attr("content",c),a.mobile.zoom.enabled=!0)}})}(a),function(a,b){function i(a){d=a.originalEvent,h=d.accelerationIncludingGravity,e=Math.abs(h.x),f=Math.abs(h.y),g=Math.abs(h.z),!b.orientation&&(e>7||(g>6&&f<8||g<8&&f>6)&&e>5)?c.enabled&&c.disable():c.enabled||c.enable()}if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1))return;var c=a.mobile.zoom,d,e,f,g,h;a(b).bind("orientationchange.iosorientationfix",c.enable).bind("devicemotion.iosorientationfix",i)}(a,this)})

