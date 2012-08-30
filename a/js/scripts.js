/* TABS — jQuery Tools 1.2.6 http://flowplayer.org/tools/tabs/ */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);

/* SLIDESHOW (tabs plugin) — jQuery Tools */
(function(a){var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}};function c(b,c){var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0;function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}var j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});function l(){g=setTimeout(function(){f.next()},c.interval)}a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");e.trigger(b);if(b.isDefaultPrevented())return d;h=!1,e.trigger("onPlay"),e.bind("onClick",l),l();return d},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");e.trigger(b);if(b.isDefaultPrevented())return d;g=clearTimeout(g),e.trigger("onPause"),e.unbind("onClick",l);return d},resume:function(){h||d.play()},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return a(d).bind(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,d.resume),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var m=c.disabledClass;f.getIndex()||k.addClass(m),f.onBeforeClick(function(a,b){k.toggleClass(m,!b),j.toggleClass(m,b==f.getTabs().length-1)})}}a.fn.slideshow=function(d){var e=this.data("slideshow");if(e)return e;d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)});return d.api?e:this}})(jQuery);

/* TOOLTIP — jQuery Tools */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);

/* TOOLTIP SLIDE EFFECT — jQuery Tools */
(function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})})(jQuery);

/* CAROUSEL (scrollable) — jQuery Tools */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var d;function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){d=f;return f},addItem:function(b){b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]);return f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])});return f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(!a.isDefaultPrevented()){if(b==-1){f.seekTo(k,c,function(){f.end(0)});return a.preventDefault()}b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})}});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel){f.move(b<0?1:-1,e.wheelSpeed||50);return!1}});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).bind("keydown.scrollable",function(b){if(!(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))){if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(j&&(c==38||c==40)){f.move(c==38?-1:1);return b.preventDefault()}if(!j&&(c==37||c==39)){f.move(c==37?-1:1);return b.preventDefault()}}}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.fn.scrollable=function(b){var c=this.data("scrollable");if(c)return c;b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)});return b.api?c:this}})(jQuery);

/* CAROUSEL AUTOSCROLL — jQuery Tools */
(function(a){var b=a.tools.scrollable;b.autoscroll={conf:{autoplay:!0,interval:3e3,autopause:!0}},a.fn.autoscroll=function(c){typeof c=="number"&&(c={interval:c});var d=a.extend({},b.autoscroll.conf,c),e;this.each(function(){var b=a(this).data("scrollable"),c=b.getRoot(),f,g=!1;function h(){f=setTimeout(function(){b.next()},d.interval)}b&&(e=b),b.play=function(){f||(g=!1,c.bind("onSeek",h),h())},b.pause=function(){f=clearTimeout(f),c.unbind("onSeek",h)},b.resume=function(){g||b.play()},b.stop=function(){g=!0,b.pause()},d.autopause&&c.add(b.getNaviButtons()).hover(b.pause,b.resume),d.autoplay&&b.play()});return d.api?e:this}})(jQuery);

/* CAROUSEL NAVIGATION — jQuery Tools */
(function(a){var b=a.tools.scrollable;b.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:!1,idPrefix:null,history:!1}};function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}a.fn.navigator=function(d){typeof d=="string"&&(d={navi:d}),d=a.extend({},b.navigator.conf,d);var e;this.each(function(){var b=a(this).data("scrollable"),f=d.navi.jquery?d.navi:c(b.getRoot(),d.navi),g=b.getNaviButtons(),h=d.activeClass,i=d.history&&history.pushState,j=b.getConf().size;b&&(e=b),b.getNaviButtons=function(){return g.add(f)},i&&(history.pushState({i:0}),a(window).bind("popstate",function(a){var c=a.originalEvent.state;c&&b.seekTo(c.i)}));function k(a,c,d){b.seekTo(c),d.preventDefault(),i&&history.pushState({i:c})}function l(){return f.find(d.naviItem||"> *")}function m(b){var c=a("<"+(d.naviItem||"a")+"/>").click(function(c){k(a(this),b,c)});b===0&&c.addClass(h),d.indexed&&c.text(b+1),d.idPrefix&&c.attr("id",d.idPrefix+b);return c.appendTo(f)}l().length?l().each(function(b){a(this).click(function(c){k(a(this),b,c)})}):a.each(b.getItems(),function(a){a%j==0&&m(a)}),b.onBeforeSeek(function(a,b){setTimeout(function(){if(!a.isDefaultPrevented()){var c=b/j,d=l().eq(c);d.length&&l().removeClass(h).eq(c).addClass(h)}},1)}),b.onAddItem(function(a,c){var d=b.getItems().index(c);d%j==0&&m(d)})});return d.api?e:this}})(jQuery);

/* RESPONSIVE IMAGES — Scott Jehl, Filament Group, Inc */
(function(win){var rwdi=(function(){var defaults={clientSideOnly:false,widthBreakPoint:480};if('rwd_images'in win){for(var setting in win.rwd_images){defaults[setting]=win.rwd_images[setting]}}return defaults})(),clientSideOnly=rwdi.clientSideOnly,widthBreakPoint=rwdi.widthBreakPoint,wideload=screen.availWidth>widthBreakPoint,filePath=location.href,dirPath=filePath.substring(0,filePath.lastIndexOf('/'))+'/',doc=win.document,head=doc.getElementsByTagName('head')[0],winload=win.onload,recordRes=(function(){var date=new Date();date.setTime(date.getTime()+(1*24*60*60*1000));doc.cookie="rwd-resolution="+screen.availWidth+"; expires="+date.toGMTString()+"; path=/"})();if(!wideload){return}var findrepsrc=function(){var imgs=doc.getElementsByTagName('img'),il=imgs.length;for(var i=0;i<il;i++){var img=imgs[i],fullsrc=img.getAttribute('data-fullsrc');if(fullsrc){img.src=fullsrc}}},base=(function(){var backup,baseAdded=false,q=doc.createElement("q"),supported=false,base=head.getElementsByTagName("base")[0]||(function(){baseAdded=true;return head.insertBefore(doc.createElement("base"),head.firstChild)})();backup=!baseAdded&&base.href;base.href=location.protocol+"//"+"x/";q.cite="y";if(q.cite.indexOf("x/y")<0){if(backup){base.href=backup}else{head.removeChild(base)}base=null}else{if(clientSideOnly){base.href="javascript://"}else{base.href=dirPath+"rwd-router/"}}return base})();win.onload=function(){if(base){base.href=dirPath;head.removeChild(base)}findrepsrc();if(winload){winload()}}})(this);

/* CALENDAR / DATE PICKER — http://keith-wood.name/datepick.html
ru-localization.js */
(function($){var PROP_NAME='datepick';function Datepick(){this._uuid=new Date().getTime();this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this.regional=[];this.regional['']={clearText:'Clear',clearStatus:'Erase the current date',closeText:'Close',closeStatus:'Close without change',prevText:'&#x3c;Prev',prevStatus:'Show the previous month',prevBigText:'&#x3c;&#x3c;',prevBigStatus:'Show the previous year',nextText:'Next&#x3e;',nextStatus:'Show the next month',nextBigText:'&#x3e;&#x3e;',nextBigStatus:'Show the next year',currentText:'Today',currentStatus:'Show the current month',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],monthStatus:'Show a different month',yearStatus:'Show a different year',weekHeader:'Wk',weekStatus:'Week of the year',dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],dayStatus:'Set DD as first week day',dateStatus:'Select DD, M d',dateFormat:'dd/mm/yy',firstDay:1,initStatus:'Select a date',isRTL:false,showMonthAfterYear:false,yearSuffix:''};this._defaults={useThemeRoller:false,showOn:'focus',showAnim:'show',showOptions:{},duration:'normal',buttonText:'...',buttonImage:'',buttonImageOnly:false,alignment:'bottom',autoSize:false,defaultDate:null,showDefault:false,appendText:'',closeAtTop:true,mandatory:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,showBigPrevNext:false,stepMonths:1,stepBigMonths:12,gotoCurrent:false,changeMonth:true,changeYear:true,yearRange:'c-10:c+10',changeFirstDay:false,showOtherMonths:false,selectOtherMonths:false,highlightWeek:false,showWeeks:false,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',showStatus:false,statusForDate:this.dateStatus,minDate:null,maxDate:null,numberOfMonths:1,showCurrentAtPos:0,rangeSelect:false,rangeSeparator:' - ',multiSelect:0,multiSeparator:',',beforeShow:null,beforeShowDay:null,onChangeMonthYear:null,onHover:null,onSelect:null,onClose:null,altField:'',altFormat:'',constrainInput:true};$.extend(this._defaults,this.regional['']);this.dpDiv=$('<div style="display: none;"></div>')}$.extend(Datepick.prototype,{version:'3.7.3',markerClassName:'has_dp',_mainDivId:['dp_div','ui_dp_div'],_mainDivClass:['','ui_dp '+'ui_widget ui_widget_content ui_helper_clearfix ui_corner_all'],_inlineClass:['dp_inline','ui_dp_inline ui_dp '+'ui_widget ui_widget_content ui_helper_clearfix ui_corner_all'],_multiClass:['dp_multi','ui_dp_multi'],_rtlClass:['dp_rtl','ui_dp_rtl'],_appendClass:['dp_append','ui_dp_append'],_triggerClass:['dp_trigger','ui_dp_trigger'],_dialogClass:['dp_dialog','ui_dp_dialog'],_promptClass:['dp_prompt','ui_dp_prompt'],_disableClass:['dp_disabled','ui_dp_disabled'],_controlClass:['dp_control','ui_dp_header '+'ui_widget_header ui_helper_clearfix ui_corner_all'],_clearClass:['dp_clear','ui_dp_clear'],_closeClass:['dp_close','ui_dp_close'],_linksClass:['dp_links','ui_dp_header '+'ui-widget-header ui-helper-clearfix ui-corner-all'],_prevClass:['dp_prev','ui_dp_prev'],_nextClass:['dp_next','ui_dp_next'],_currentClass:['dp_current','ui_dp_current'],_oneMonthClass:['dp_one_month','ui_dp_group'],_newRowClass:['dp_new_row','ui_dp_row_break'],_monthYearClass:['dp_header','ui_dp_header '+'ui_widget_header ui_helper_clearfix ui_corner_all'],_monthSelectClass:['dp_new_month','ui_dp_month'],_monthClass:['','ui_dp_month'],_yearSelectClass:['dp_new_year','ui_dp_year'],_yearClass:['','ui_dp_year'],_tableClass:['dp','ui_dp_calendar'],_tableHeaderClass:['dp_title_row',''],_weekColClass:['dp_week_col','ui_dp_week_col'],_weekRowClass:['dp_days_row',''],_weekendClass:['dp_week_end_cell','ui_dp_week_end'],_dayClass:['dp_days_cell',''],_otherMonthClass:['dp_other_month','ui_dp_other_month'],_todayClass:['dp_today','ui_state_highlight'],_selectableClass:['','ui_state_default'],_unselectableClass:['dp_unselectable','ui_dp_unselectable ui_state_disabled'],_selectedClass:['dp_current_day','ui_state_active'],_dayOverClass:['dp_days_cell_over','ui_state_hover'],_weekOverClass:['dp_week_over','ui_state_hover'],_statusClass:['dp_status','ui_dp_status'],_statusId:['dp_status_','ui_dp_status_'],_coverClass:['dp_cover','ui_dp_cover'],setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepick:function(target,settings){if(!target.id)target.id='dp'+(++this._uuid);var nodeName=target.nodeName.toLowerCase();var inst=this._newInst($(target),(nodeName=='div'||nodeName=='span'));var inlineSettings=($.fn.metadata?$(target).metadata():{});inst.settings=$.extend({},settings||{},inlineSettings||{});if(inst.inline){inst.dpDiv.addClass(this._inlineClass[this._get(inst,'useThemeRoller')?1:0]);this._inlineDatepick(target,inst)}else this._connectDatepick(target,inst)},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_])/g,'\\\\$1');return{id:id,input:target,cursorDate:this._daylightSavingAdjust(new Date()),drawMonth:0,drawYear:0,dates:[],inline:inline,dpDiv:(!inline?this.dpDiv:$('<div></div>')),siblings:$([])}},_connectDatepick:function(target,inst){var input=$(target);if(input.hasClass(this.markerClassName))return;var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');var useTR=this._get(inst,'useThemeRoller')?1:0;if(appendText){var append=$('<span dp_="'+this._appendClass[useTR]+'">'+appendText+'</span>');input[isRTL?'before':'after'](append);inst.siblings=inst.siblings.add(append)}var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both')input.focus(this._showDatepick);if(showOn=='button'||showOn=='both'){var buttonText=this._get(inst,'buttonText');var buttonImage=this._get(inst,'buttonImage');var trigger=$(this._get(inst,'buttonImageOnly')?$('<img/>').addClass(this._triggerClass[useTR]).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass[useTR]).html(buttonImage==''?buttonText:$('<img/>').attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?'before':'after'](trigger);inst.siblings=inst.siblings.add(trigger);trigger.click(function(){if($.datepick._datepickerShowing&&$.datepick._lastInput==target)$.datepick._hideDatepick();else $.datepick._showDatepick(target);return false})}input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);if(this._get(inst,'showDefault')&&!inst.input.val()){inst.dates=[this._getDefaultDate(inst)];this._showDate(inst)}this._autoSize(inst);$.data(target,PROP_NAME,inst)},_autoSize:function(inst){if(this._get(inst,'autoSize')&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,'dateFormat');if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?'monthNames':'monthNamesShort'))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?'dayNames':'dayNamesShort')))+20-date.getDay())}inst.input.attr('size',this._formatDate(inst,date).length)}},_inlineDatepick:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))return;divSpan.addClass(this.markerClassName);$.data(target,PROP_NAME,inst);inst.cursorDate=this._getDefaultDate(inst);inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();if(this._get(inst,'showDefault'))inst.dates=[this._getDefaultDate(inst)];$('body').append(inst.dpDiv);this._updateDatepick(inst);inst.dpDiv.width(this._getNumberOfMonths(inst)[1]*$('.'+this._oneMonthClass[this._get(inst,'useThemeRoller')?1:0],inst.dpDiv)[0].offsetWidth);divSpan.append(inst.dpDiv);this._updateAlternate(inst)},_dialogDatepick:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id='dp'+(++this._uuid);this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; width: 1px; z-index: -1"/>');this._dialogInput.keydown(this._doKeyDown);$('body').append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(isArray(pos)?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(document.documentElement.clientWidth/2)-100+scrollX,(document.documentElement.clientHeight/2)-150+scrollY]}this._dialogInput.css('left',(this._pos[0]+20)+'px').css('top',this._pos[1]+'px');inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass[this._get(inst,'useThemeRoller')?1:0]);this._showDatepick(this._dialogInput[0]);if($.blockUI)$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst)},_destroyDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName)){return}var inst=$.data(target,PROP_NAME);$.removeData(target,PROP_NAME);if(inst.inline)$target.removeClass(this.markerClassName).empty();else{$(inst.siblings).remove();$target.removeClass(this.markerClassName).unbind('focus',this._showDatepick).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress).unbind('keyup',this._doKeyUp)}},_enableDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName))return;var inst=$.data(target,PROP_NAME);var useTR=this._get(inst,'useThemeRoller')?1:0;if(inst.inline)$target.children('.'+this._disableClass[useTR]).remove().end().find('select').attr('disabled','').end().find('a').attr('href','javascript:void(0)');else{target.disabled=false;inst.siblings.filter('button.'+this._triggerClass[useTR]).each(function(){this.disabled=false}).end().filter('img.'+this._triggerClass[useTR]).css({opacity:'1.0',cursor:''})}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName))return;var inst=$.data(target,PROP_NAME);var useTR=this._get(inst,'useThemeRoller')?1:0;if(inst.inline){var inline=$target.children('.'+this._inlineClass[useTR]);var offset=inline.offset();var relOffset={left:0,top:0};inline.parents().each(function(){if($(this).css('position')=='relative'){relOffset=$(this).offset();return false}});$target.prepend('<div class="'+this._disableClass[useTR]+'" style="'+'width: '+inline.outerWidth()+'px; height: '+inline.outerHeight()+'px; left: '+(offset.left-relOffset.left)+'px; top: '+(offset.top-relOffset.top)+'px;"></div>').find('select').attr('disabled','disabled').end().find('a').removeAttr('href')}else{target.disabled=true;inst.siblings.filter('button.'+this._triggerClass[useTR]).each(function(){this.disabled=true}).end().filter('img.'+this._triggerClass[useTR]).css({opacity:'0.5',cursor:'default'})}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs.push(target)},_isDisabledDatepick:function(target){return(!target?false:$.inArray(target,this._disabledInputs)>-1)},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw'Missing instance data for this datepicker';}},_optionDatepick:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=='string'){return(name=='defaults'?$.extend({},$.datepick._defaults):(inst?(name=='all'?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepick(null,true)}var dates=this._getDateDatepick(target);extendRemove(inst.settings,settings);this._autoSize(inst);extendRemove(inst,{dates:[]});var blank=(!dates||isArray(dates));if(isArray(dates))for(var i=0;i<dates.length;i++)if(dates[i]){blank=false;break}if(!blank)this._setDateDatepick(target,dates);if(inst.inline)$(target).children('div').removeClass(this._inlineClass.join(' ')).addClass(this._inlineClass[this._get(inst,'useThemeRoller')?1:0]);this._updateDatepick(inst)}},_changeDatepick:function(target,name,value){this._optionDatepick(target,name,value)},_refreshDatepick:function(target){var inst=this._getInst(target);if(inst){this._updateDatepick(inst)}},_setDateDatepick:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepick(inst);this._updateAlternate(inst)}},_getDateDatepick:function(target){var inst=this._getInst(target);if(inst&&!inst.inline)this._setDateFromField(inst);return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepick._getInst(event.target);inst.keyEvent=true;var handled=true;var isRTL=$.datepick._get(inst,'isRTL');var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;if($.datepick._datepickerShowing)switch(event.keyCode){case 9:$.datepick._hideDatepick();handled=false;break;case 13:var sel=$('td.'+$.datepick._dayOverClass[useTR],inst.dpDiv);if(sel.length==0)sel=$('td.'+$.datepick._selectedClass[useTR]+':first',inst.dpDiv);if(sel[0])$.datepick._selectDay(sel[0],event.target,inst.cursorDate.getTime());else $.datepick._hideDatepick();break;case 27:$.datepick._hideDatepick();break;case 33:$.datepick._adjustDate(event.target,(event.ctrlKey?-$.datepick._get(inst,'stepBigMonths'):-$.datepick._get(inst,'stepMonths')),'M');break;case 34:$.datepick._adjustDate(event.target,(event.ctrlKey?+$.datepick._get(inst,'stepBigMonths'):+$.datepick._get(inst,'stepMonths')),'M');break;case 35:if(event.ctrlKey||event.metaKey)$.datepick._clearDate(event.target);handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey)$.datepick._gotoToday(event.target);handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey)$.datepick._adjustDate(event.target,(isRTL?+1:-1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepick._adjustDate(event.target,(event.ctrlKey?-$.datepick._get(inst,'stepBigMonths'):-$.datepick._get(inst,'stepMonths')),'M');break;case 38:if(event.ctrlKey||event.metaKey)$.datepick._adjustDate(event.target,-7,'D');handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey)$.datepick._adjustDate(event.target,(isRTL?-1:+1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepick._adjustDate(event.target,(event.ctrlKey?+$.datepick._get(inst,'stepBigMonths'):+$.datepick._get(inst,'stepMonths')),'M');break;case 40:if(event.ctrlKey||event.metaKey)$.datepick._adjustDate(event.target,+7,'D');handled=event.ctrlKey||event.metaKey;break;default:handled=false}else if(event.keyCode==36&&event.ctrlKey)$.datepick._showDatepick(this);else handled=false;if(handled){event.preventDefault();event.stopPropagation()}inst.ctrlKey=(event.keyCode<48);return!handled},_doKeyPress:function(event){var inst=$.datepick._getInst(event.target);if($.datepick._get(inst,'constrainInput')){var chars=$.datepick._possibleChars(inst);var chr=String.fromCharCode(event.keyCode||event.charCode);return inst.ctrlKey||(chr<' '||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepick._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var separator=($.datepick._get(inst,'rangeSelect')?$.datepick._get(inst,'rangeSeparator'):($.datepick._get(inst,'multiSelect')?$.datepick._get(inst,'multiSeparator'):''));var dates=(inst.input?inst.input.val():'');dates=(separator?dates.split(separator):[dates]);var ok=true;for(var i=0;i<dates.length;i++){if(!$.datepick.parseDate($.datepick._get(inst,'dateFormat'),dates[i],$.datepick._getFormatConfig(inst))){ok=false;break}}if(ok){$.datepick._setDateFromField(inst);$.datepick._updateAlternate(inst);$.datepick._updateDatepick(inst)}}catch(event){}}return true},_possibleChars:function(inst){var dateFormat=$.datepick._get(inst,'dateFormat');var chars=($.datepick._get(inst,'rangeSelect')?$.datepick._get(inst,'rangeSeparator'):($.datepick._get(inst,'multiSelect')?$.datepick._get(inst,'multiSeparator'):''));var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)iFormat++;return matches};for(var iFormat=0;iFormat<dateFormat.length;iFormat++)if(literal)if(dateFormat.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else chars+=dateFormat.charAt(iFormat);else switch(dateFormat.charAt(iFormat)){case'd':case'm':case'y':case'@':chars+='0123456789';break;case'D':case'M':return null;case"'":if(lookAhead("'"))chars+="'";else literal=true;break;default:chars+=dateFormat.charAt(iFormat)}return chars},_doMouseOver:function(td,id,timestamp){var inst=$.datepick._getInst($('#'+id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;$(td).parents('.dp_one-month').parent().find('td').removeClass($.datepick._dayOverClass[useTR]);$(td).addClass($.datepick._dayOverClass[useTR]);if($.datepick._get(inst,'highlightWeek'))$(td).parent().parent().find('tr').removeClass($.datepick._weekOverClass[useTR]).end().end().addClass($.datepick._weekOverClass[useTR]);if($(td).text()){var date=new Date(timestamp);if($.datepick._get(inst,'showStatus')){var status=($.datepick._get(inst,'statusForDate').apply((inst.input?inst.input[0]:null),[date,inst])||$.datepick._get(inst,'initStatus'));$('#'+$.datepick._statusId[useTR]+id).html(status)}if($.datepick._get(inst,'onHover'))$.datepick._doHover(td,'#'+id,date.getFullYear(),date.getMonth())}},_doMouseOut:function(td,id){var inst=$.datepick._getInst($('#'+id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;$(td).removeClass($.datepick._dayOverClass[useTR]).removeClass($.datepick._weekOverClass[useTR]);if($.datepick._get(inst,'showStatus'))$('#'+$.datepick._statusId[useTR]+id).html($.datepick._get(inst,'initStatus'));if($.datepick._get(inst,'onHover'))$.datepick._doHover(td,'#'+id)},_doHover:function(td,id,year,month){var inst=this._getInst($(id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;if($(td).hasClass(this._unselectableClass[useTR]))return;var onHover=this._get(inst,'onHover');var date=(year?this._daylightSavingAdjust(new Date(year,month,$(td).text())):null);onHover.apply((inst.input?inst.input[0]:null),[(date?this._formatDate(inst,date):''),date,inst])},_showDatepick:function(input){input=input.target||input;if($.datepick._isDisabledDatepick(input)||$.datepick._lastInput==input)return;var inst=$.datepick._getInst(input);if($.datepick._curInst&&$.datepick._curInst!=inst){$.datepick._curInst.dpDiv.stop(true,true)}var beforeShow=$.datepick._get(inst,'beforeShow');var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepick._datepickerShowing=true;$.datepick._lastInput=input;$.datepick._setDateFromField(inst);if($.datepick._inDialog)input.value='';if(!$.datepick._pos){$.datepick._pos=$.datepick._findPos(input);$.datepick._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed});if(isFixed&&$.browser.opera){$.datepick._pos[0]-=document.documentElement.scrollLeft;$.datepick._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepick._pos[0],top:$.datepick._pos[1]};$.datepick._pos=null;inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.datepick._updateDatepick(inst);inst.dpDiv.width($.datepick._getNumberOfMonths(inst)[1]*$('.'+$.datepick._oneMonthClass[useTR],inst.dpDiv).width());offset=$.datepick._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepick._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.datepick._get(inst,'showAnim');var duration=$.datepick._get(inst,'duration');var postProcess=function(){var borders=$.datepick._getBorders(inst.dpDiv);inst.dpDiv.find('iframe.'+$.datepick._coverClass[useTR]).css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})};if($.effects&&$.effects[showAnim])inst.dpDiv.show(showAnim,$.datepick._get(inst,'showOptions'),duration,postProcess);else inst.dpDiv[showAnim||'show'](showAnim?duration:'',postProcess);if(!showAnim)postProcess();if(inst.input[0].type!='hidden')inst.input.focus();$.datepick._curInst=inst}},_updateDatepick:function(inst){var borders=this._getBorders(inst.dpDiv);var useTR=this._get(inst,'useThemeRoller')?1:0;inst.dpDiv.empty().append(this._generateHTML(inst)).find('iframe.'+this._coverClass[useTR]).css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});var numMonths=this._getNumberOfMonths(inst);if(!inst.inline)inst.dpDiv.attr('id',this._mainDivId[useTR]);inst.dpDiv.removeClass(this._mainDivClass[1-useTR]).addClass(this._mainDivClass[useTR]).removeClass(this._multiClass.join(' ')).addClass(numMonths[0]!=1||numMonths[1]!=1?this._multiClass[useTR]:'').removeClass(this._rtlClass.join(' ')).addClass(this._get(inst,'isRTL')?this._rtlClass[useTR]:'');if(inst.input&&inst.input[0].type!='hidden'&&inst==$.datepick._curInst)$(inst.input).focus()},_getBorders:function(elem){var convert=function(value){var extra=($.browser.msie?1:0);return{thin:1+extra,medium:3+extra,thick:5+extra}[value]||value};return[parseFloat(convert(elem.css('border-left-width'))),parseFloat(convert(elem.css('border-top-width')))]},_checkOffset:function(inst,offset,isFixed){var alignment=this._get(inst,'alignment');var isRTL=this._get(inst,'isRTL');var pos=inst.input?this._findPos(inst.input[0]):null;var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;if(browserWidth==0)return offset;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;var above=pos[1]-(this._inDialog?0:inst.dpDiv.outerHeight())-(isFixed&&$.browser.opera?document.documentElement.scrollTop:0);var below=offset.top;var alignL=offset.left;var alignR=pos[0]+(inst.input?inst.input.outerWidth():0)-inst.dpDiv.outerWidth()-(isFixed&&$.browser.opera?document.documentElement.scrollLeft:0);var tooWide=(offset.left+inst.dpDiv.outerWidth()-scrollX)>browserWidth;var tooHigh=(offset.top+inst.dpDiv.outerHeight()-scrollY)>browserHeight;if(alignment=='topLeft'){offset={left:alignL,top:above}}else if(alignment=='topRight'){offset={left:alignR,top:above}}else if(alignment=='bottomLeft'){offset={left:alignL,top:below}}else if(alignment=='bottomRight'){offset={left:alignR,top:below}}else if(alignment=='top'){offset={left:(isRTL||tooWide?alignR:alignL),top:above}}else{offset={left:(isRTL||tooWide?alignR:alignL),top:(tooHigh?above:below)}}offset.left=Math.max((isFixed?0:scrollX),offset.left-(isFixed?scrollX:0));offset.top=Math.max((isFixed?0:scrollY),offset.top-(isFixed?scrollY:0));return offset},_findPos:function(elem){while(elem&&(elem.type=='hidden'||elem.nodeType!=1)){elem=elem.nextSibling}var position=$(elem).offset();return[position.left,position.top]},_hideDatepick:function(input,immediate){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME)))return false;var rangeSelect=this._get(inst,'rangeSelect');if(rangeSelect&&inst.stayOpen)this._updateInput('#'+inst.id);inst.stayOpen=false;if(this._datepickerShowing){var showAnim=(immediate?'':this._get(inst,'showAnim'));var duration=this._get(inst,'duration');var postProcess=function(){$.datepick._tidyDialog(inst);$.datepick._curInst=null};if($.effects&&$.effects[showAnim])inst.dpDiv.hide(showAnim,$.datepick._get(inst,'showOptions'),duration,postProcess);else inst.dpDiv[(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide'))](showAnim?duration:'',postProcess);if(duration=='')postProcess();var onClose=this._get(inst,'onClose');if(onClose)onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),this._getDate(inst),inst]);this._datepickerShowing=false;this._lastInput=null;inst.settings.prompt=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});this.dpDiv.removeClass(this._dialogClass[this._get(inst,'useThemeRoller')?1:0]);if($.blockUI){$.unblockUI();$('body').append(this.dpDiv)}}this._inDialog=false}return false},_tidyDialog:function(inst){var useTR=this._get(inst,'useThemeRoller')?1:0;inst.dpDiv.removeClass(this._dialogClass[useTR]).unbind('.datepick');$('.'+this._promptClass[useTR],inst.dpDiv).remove()},_checkExternalClick:function(event){if(!$.datepick._curInst)return;var $target=$(event.target);var useTR=$.datepick._get($.datepick._curInst,'useThemeRoller')?1:0;if(!$target.parents().andSelf().is('#'+$.datepick._mainDivId[useTR])&&!$target.hasClass($.datepick.markerClassName)&&!$target.parents().andSelf().hasClass($.datepick._triggerClass[useTR])&&$.datepick._datepickerShowing&&!($.datepick._inDialog&&$.blockUI))$.datepick._hideDatepick()},_adjustDate:function(id,offset,period){var inst=this._getInst($(id)[0]);this._adjustInstDate(inst,offset,period);this._updateDatepick(inst);return false},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'gotoCurrent')&&inst.dates[0])inst.cursorDate=new Date(inst.dates[0].getTime());else inst.cursorDate=this._daylightSavingAdjust(new Date());inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();this._notifyChange(inst);this._adjustDate(target);return false},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst.selectingMonthYear=false;var value=parseInt(select.options[select.selectedIndex].value,10);inst.drawMonth-=$.datepick._get(inst,'showCurrentAtPos');if(inst.drawMonth<0){inst.drawMonth+=12;inst.drawYear--}inst['selected'+(period=='M'?'Month':'Year')]=inst['draw'+(period=='M'?'Month':'Year')]=value;inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(),$.datepick._getDaysInMonth(inst.drawYear,inst.drawMonth)));inst.cursorDate['set'+(period=='M'?'Month':'FullYear')](value);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var inst=this._getInst($(id)[0]);if(inst.input&&inst.selectingMonthYear&&!$.browser.msie)inst.input.focus();inst.selectingMonthYear=!inst.selectingMonthYear},_changeFirstDay:function(id,day){var inst=this._getInst($(id)[0]);inst.settings.firstDay=day;this._updateDatepick(inst);return false},_selectDay:function(td,id,timestamp){var inst=this._getInst($(id)[0]);var useTR=this._get(inst,'useThemeRoller')?1:0;if($(td).hasClass(this._unselectableClass[useTR]))return false;var rangeSelect=this._get(inst,'rangeSelect');var multiSelect=this._get(inst,'multiSelect');if(rangeSelect)inst.stayOpen=!inst.stayOpen;else if(multiSelect)inst.stayOpen=true;if(inst.stayOpen){$('.datepick td',inst.dpDiv).removeClass(this._selectedClass[useTR]);$(td).addClass(this._selectedClass[useTR])}inst.cursorDate=this._daylightSavingAdjust(new Date(timestamp));var date=new Date(inst.cursorDate.getTime());if(rangeSelect&&!inst.stayOpen)inst.dates[1]=date;else if(multiSelect){var pos=-1;for(var i=0;i<inst.dates.length;i++)if(inst.dates[i]&&date.getTime()==inst.dates[i].getTime()){pos=i;break}if(pos>-1)inst.dates.splice(pos,1);else if(inst.dates.length<multiSelect){if(inst.dates[0])inst.dates.push(date);else inst.dates=[date];inst.stayOpen=(inst.dates.length!=multiSelect)}}else inst.dates=[date];this._updateInput(id,true);if(inst.stayOpen||inst.inline)this._updateDatepick(inst);return false},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'mandatory'))return false;inst.stayOpen=false;inst.dates=(this._get(inst,'showDefault')?[this._getDefaultDate(inst)]:[]);this._updateInput(target);return false},_updateInput:function(id,dontUpdate){var inst=this._getInst($(id)[0]);var dateStr=this._showDate(inst);this._updateAlternate(inst);var onSelect=this._get(inst,'onSelect');if(onSelect)onSelect.apply((inst.input?inst.input[0]:null),[dateStr,this._getDate(inst),inst]);else if(inst.input)inst.input.trigger('change');if(inst.inline&&!dontUpdate)this._updateDatepick(inst);else if(!inst.stayOpen){this._hideDatepick();this._lastInput=inst.input[0];if(typeof(inst.input[0])!='object')inst.input.focus();this._lastInput=null}return false},_showDate:function(inst){var dateStr='';if(inst.input){dateStr=(inst.dates.length==0?'':this._formatDate(inst,inst.dates[0]));if(dateStr){if(this._get(inst,'rangeSelect'))dateStr+=this._get(inst,'rangeSeparator')+this._formatDate(inst,inst.dates[1]||inst.dates[0]);else if(this._get(inst,'multiSelect'))for(var i=1;i<inst.dates.length;i++)dateStr+=this._get(inst,'multiSeparator')+this._formatDate(inst,inst.dates[i])}inst.input.val(dateStr)}return dateStr},_updateAlternate:function(inst){var altField=this._get(inst,'altField');if(altField){var altFormat=this._get(inst,'altFormat')||this._get(inst,'dateFormat');var settings=this._getFormatConfig(inst);var dateStr=this.formatDate(altFormat,inst.dates[0],settings);if(dateStr&&this._get(inst,'rangeSelect'))dateStr+=this._get(inst,'rangeSeparator')+this.formatDate(altFormat,inst.dates[1]||inst.dates[0],settings);else if(this._get(inst,'multiSelect'))for(var i=1;i<inst.dates.length;i++)dateStr+=this._get(inst,'multiSeparator')+this.formatDate(altFormat,inst.dates[i],settings);$(altField).val(dateStr)}},noWeekends:function(date){return[(date.getDay()||7)<6,'']},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},dateStatus:function(date,inst){return $.datepick.formatDate($.datepick._get(inst,'dateStatus'),date,$.datepick._getFormatConfig(inst))},parseDate:function(format,value,settings){if(format==null||value==null)throw'Invalid arguments';value=(typeof value=='object'?value.toString():value+'');if(value=='')return null;settings=settings||{};var shortYearCutoff=settings.shortYearCutoff||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=settings.dayNamesShort||this._defaults.dayNamesShort;var dayNames=settings.dayNames||this._defaults.dayNames;var monthNamesShort=settings.monthNamesShort||this._defaults.monthNamesShort;var monthNames=settings.monthNames||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)iFormat++;return matches};var getNumber=function(match){lookAhead(match);var size=(match=='@'?14:(match=='!'?20:(match=='y'?4:(match=='o'?3:2))));var digits=new RegExp('^\\d{1,'+size+'}');var num=value.substring(iValue).match(digits);if(!num)throw'Missing number at position '+iValue;iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);for(var i=0;i<names.length;i++){if(value.substr(iValue,names[i].length)==names[i]){iValue+=names[i].length;return i+1}}throw'Unknown name at position '+iValue;};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))throw'Unexpected literal at position '+iValue;iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)if(format.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else checkLiteral();else switch(format.charAt(iFormat)){case'd':day=getNumber('d');break;case'D':getName('D',dayNamesShort,dayNames);break;case'o':doy=getNumber('o');break;case'w':getNumber('w');break;case'm':month=getNumber('m');break;case'M':month=getName('M',monthNamesShort,monthNames);break;case'y':year=getNumber('y');break;case'@':var date=new Date(getNumber('@'));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case'!':var date=new Date((getNumber('!')-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))checkLiteral();else literal=true;break;default:checkLiteral()}}if(iValue<value.length)throw'Additional text found at end';if(year==-1)year=new Date().getFullYear();else if(year<100)year+=(shortYearCutoff==-1?1900:new Date().getFullYear()-new Date().getFullYear()%100-(year<=shortYearCutoff?0:100));if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)break;month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)throw'Invalid date';return date},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TICKS:'!',TIMESTAMP:'@',W3C:'yy-mm-dd',_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date)return'';settings=settings||{};var dayNamesShort=settings.dayNamesShort||this._defaults.dayNamesShort;var dayNames=settings.dayNames||this._defaults.dayNames;var monthNamesShort=settings.monthNamesShort||this._defaults.monthNamesShort;var monthNames=settings.monthNames||this._defaults.monthNames;var calculateWeek=settings.calculateWeek||this._defaults.calculateWeek;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)iFormat++;return matches};var formatNumber=function(match,value,len){var num=''+value;if(lookAhead(match))while(num.length<len)num='0'+num;return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output='';var literal=false;if(date)for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)if(format.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else output+=format.charAt(iFormat);else switch(format.charAt(iFormat)){case'd':output+=formatNumber('d',date.getDate(),2);break;case'D':output+=formatName('D',date.getDay(),dayNamesShort,dayNames);break;case'o':output+=formatNumber('o',(date.getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000,3);break;case'w':output+=formatNumber('w',calculateWeek(date),2);break;case'm':output+=formatNumber('m',date.getMonth()+1,2);break;case'M':output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);break;case'y':output+=(lookAhead('y')?date.getFullYear():(date.getFullYear()%100<10?'0':'')+date.getFullYear()%100);break;case'@':output+=date.getTime();break;case'!':output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'"))output+="'";else literal=true;break;default:output+=format.charAt(iFormat)}}return output},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst){var dateFormat=this._get(inst,'dateFormat');var rangeSelect=this._get(inst,'rangeSelect');var multiSelect=this._get(inst,'multiSelect');inst.lastVal=(inst.input?inst.input.val():'');var dates=inst.lastVal;dates=(rangeSelect?dates.split(this._get(inst,'rangeSeparator')):(multiSelect?dates.split(this._get(inst,'multiSeparator')):[dates]));inst.dates=[];var settings=this._getFormatConfig(inst);for(var i=0;i<dates.length;i++)try{inst.dates[i]=this.parseDate(dateFormat,dates[i],settings)}catch(event){inst.dates[i]=null}for(var i=inst.dates.length-1;i>=0;i--)if(!inst.dates[i])inst.dates.splice(i,1);if(rangeSelect&&inst.dates.length<2)inst.dates[1]=inst.dates[0];if(multiSelect&&inst.dates.length>multiSelect)inst.dates.splice(multiSelect,inst.dates.length);inst.cursorDate=new Date((inst.dates[0]||this._getDefaultDate(inst)).getTime());inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,'defaultDate'),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepick.parseDate($.datepick._get(inst,'dateFormat'),offset,$.datepick._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepick._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|w|m|y)?/g;var matches=pattern.exec(offset.toLowerCase());while(matches){switch(matches[2]||'d'){case'd':day+=parseInt(matches[1],10);break;case'w':day+=parseInt(matches[1],10)*7;break;case'm':month+=parseInt(matches[1],10);day=Math.min(day,$.datepick._getDaysInMonth(year,month));break;case'y':year+=parseInt(matches[1],10);day=Math.min(day,$.datepick._getDaysInMonth(year,month));break}matches=pattern.exec(offset.toLowerCase())}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=='string'?offsetString(date):(typeof date=='number'?(isNaN(date)||date==Infinity||date==-Infinity?defaultDate:offsetNumeric(date)):date)));date=(date&&(date.toString()=='Invalid Date'||date.toString()=='NaN')?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date)return null;date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,endDate){date=(!date?[]:(isArray(date)?date:[date]));if(endDate)date.push(endDate);var origMonth=inst.cursorDate.getMonth();var origYear=inst.cursorDate.getFullYear();inst.dates=(date.length==0?[]:[this._restrictMinMax(inst,this._determineDate(inst,date[0],new Date()))]);inst.cursorDate=(date.length==0?new Date():new Date(inst.dates[0].getTime()));inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();if(this._get(inst,'rangeSelect')){if(date.length>0)inst.dates[1]=(date.length<1?inst.dates[0]:this._restrictMinMax(inst,this._determineDate(inst,date[1],null)))}else if(this._get(inst,'multiSelect'))for(var i=1;i<date.length;i++)inst.dates[i]=this._restrictMinMax(inst,this._determineDate(inst,date[i],null));if(origMonth!=inst.cursorDate.getMonth()||origYear!=inst.cursorDate.getFullYear())this._notifyChange(inst);this._adjustInstDate(inst);this._showDate(inst)},_getDate:function(inst){var startDate=(!inst.inline&&inst.input&&inst.input.val()==''?null:(inst.dates.length?inst.dates[0]:null));if(this._get(inst,'rangeSelect'))return(startDate?[inst.dates[0],inst.dates[1]||inst.dates[0]]:[null,null]);else if(this._get(inst,'multiSelect'))return inst.dates.slice(0,inst.dates.length);else return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var showStatus=this._get(inst,'showStatus');var initStatus=this._get(inst,'initStatus')||'&#xa0;';var isRTL=this._get(inst,'isRTL');var useTR=this._get(inst,'useThemeRoller')?1:0;var clear=(this._get(inst,'mandatory')?'':'<div class="'+this._clearClass[useTR]+'"><a href="javascript:void(0)" '+'onclick="jQuery.datepick._clearDate(\'#'+inst.id+'\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'clearStatus'),initStatus)+'>'+this._get(inst,'clearText')+'</a></div>');var controls='<div class="'+this._controlClass[useTR]+'">'+(isRTL?'':clear)+'<div class="'+this._closeClass[useTR]+'"><a href="javascript:void(0)" '+'onclick="jQuery.datepick._hideDatepick();"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'closeStatus'),initStatus)+'>'+this._get(inst,'closeText')+'</a></div>'+(isRTL?clear:'')+'</div>';var prompt=this._get(inst,'prompt');var closeAtTop=this._get(inst,'closeAtTop');var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');var showBigPrevNext=this._get(inst,'showBigPrevNext');var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,'showCurrentAtPos');var stepMonths=this._get(inst,'stepMonths');var stepBigMonths=this._get(inst,'stepBigMonths');var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth+showCurrentAtPos;inst.drawYear=drawYear;if(inst.drawMonth>11){inst.drawMonth-=12;inst.drawYear++}var prevText=this._get(inst,'prevText');prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prevBigText=(showBigPrevNext?this._get(inst,'prevBigText'):'');prevBigText=(!navigationAsDateFormat?prevBigText:this.formatDate(prevBigText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepBigMonths,1)),this._getFormatConfig(inst)));var prev='<div class="'+this._prevClass[useTR]+'">'+(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?(showBigPrevNext?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+inst.id+'\', -'+stepBigMonths+', \'M\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'prevBigStatus'),initStatus)+'>'+prevBigText+'</a>':'')+'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+inst.id+'\', -'+stepMonths+', \'M\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'prevStatus'),initStatus)+'>'+prevText+'</a>':(hideIfNoPrevNext?'&#xa0;':(showBigPrevNext?'<label>'+prevBigText+'</label>':'')+'<label>'+prevText+'</label>'))+'</div>';var nextText=this._get(inst,'nextText');nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var nextBigText=(showBigPrevNext?this._get(inst,'nextBigText'):'');nextBigText=(!navigationAsDateFormat?nextBigText:this.formatDate(nextBigText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepBigMonths,1)),this._getFormatConfig(inst)));var next='<div class="'+this._nextClass[useTR]+'">'+(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+inst.id+'\', +'+stepMonths+', \'M\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'nextStatus'),initStatus)+'>'+nextText+'</a>'+(showBigPrevNext?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+inst.id+'\', +'+stepBigMonths+', \'M\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'nextBigStatus'),initStatus)+'>'+nextBigText+'</a>':''):(hideIfNoPrevNext?'&#xa0;':'<label>'+nextText+'</label>'+(showBigPrevNext?'<label>'+nextBigText+'</label>':'')))+'</div>';var currentText=this._get(inst,'currentText');var gotoDate=(this._get(inst,'gotoCurrent')&&inst.dates[0]?inst.dates[0]:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var html=(closeAtTop&&!inst.inline?controls:'')+'<div class="'+this._linksClass[useTR]+'">'+(isRTL?next:prev)+'<div class="'+this._currentClass[useTR]+'">'+(this._isInRange(inst,gotoDate)?'<a href="javascript:void(0)" onclick="jQuery.datepick._gotoToday(\'#'+inst.id+'\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'currentStatus'),initStatus)+'>'+currentText+'</a>':(hideIfNoPrevNext?'&#xa0;':'<label>'+currentText+'</label>'))+'</div>'+(isRTL?prev:next)+'</div>'+(prompt?'<div class="'+this._promptClass[useTR]+'"><span>'+prompt+'</span></div>':'');var firstDay=parseInt(this._get(inst,'firstDay'),10);firstDay=(isNaN(firstDay)?0:firstDay);var changeFirstDay=this._get(inst,'changeFirstDay');var dayNames=this._get(inst,'dayNames');var dayNamesShort=this._get(inst,'dayNamesShort');var dayNamesMin=this._get(inst,'dayNamesMin');var monthNames=this._get(inst,'monthNames');var beforeShowDay=this._get(inst,'beforeShowDay');var showOtherMonths=this._get(inst,'showOtherMonths');var selectOtherMonths=this._get(inst,'selectOtherMonths');var showWeeks=this._get(inst,'showWeeks');var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;var weekStatus=this._get(inst,'weekStatus');var status=(showStatus?this._get(inst,'dayStatus')||initStatus:'');var dateStatus=this._get(inst,'statusForDate')||this.dateStatus;var defaultDate=this._getDefaultDate(inst);for(var row=0;row<numMonths[0];row++){for(var col=0;col<numMonths[1];col++){var cursorDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.cursorDate.getDate()));html+='<div class="'+this._oneMonthClass[useTR]+(col==0&&!useTR?' '+this._newRowClass[useTR]:'')+'">'+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,cursorDate,row>0||col>0,useTR,showStatus,initStatus,monthNames)+'<table class="'+this._tableClass[useTR]+'" cellpadding="0" cellspacing="0"><thead>'+'<tr class="'+this._tableHeaderClass[useTR]+'">'+(showWeeks?'<th'+this._addStatus(useTR,showStatus,inst.id,weekStatus,initStatus)+'>'+this._get(inst,'weekHeader')+'</th>':'');for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;var dayStatus=(!showStatus||!changeFirstDay?'':status.replace(/DD/,dayNames[day]).replace(/D/,dayNamesShort[day]));html+='<th'+((dow+firstDay+6)%7<5?'':' class="'+this._weekendClass[useTR]+'"')+'>'+(!changeFirstDay?'<span'+this._addStatus(useTR,showStatus,inst.id,dayNames[day],initStatus):'<a href="javascript:void(0)" onclick="jQuery.datepick._changeFirstDay(\'#'+inst.id+'\', '+day+');"'+this._addStatus(useTR,showStatus,inst.id,dayStatus,initStatus))+' title="'+dayNames[day]+'">'+dayNamesMin[day]+(changeFirstDay?'</a>':'</span>')+'</th>'}html+='</tr></thead><tbody>';var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.cursorDate.getFullYear()&&drawMonth==inst.cursorDate.getMonth())inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(),daysInMonth));var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){html+='<tr class="'+this._weekRowClass[useTR]+'">'+(showWeeks?'<td class="'+this._weekColClass[useTR]+'"'+this._addStatus(useTR,showStatus,inst.id,weekStatus,initStatus)+'>'+calculateWeek(printDate)+'</td>':'');for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);var selected=(this._get(inst,'rangeSelect')&&inst.dates[0]&&printDate.getTime()>=inst.dates[0].getTime()&&printDate.getTime()<=(inst.dates[1]||inst.dates[0]).getTime());for(var i=0;i<inst.dates.length;i++)selected=selected||(inst.dates[i]&&printDate.getTime()==inst.dates[i].getTime());var empty=otherMonth&&!showOtherMonths;html+='<td class="'+this._dayClass[useTR]+((dow+firstDay+6)%7>=5?' '+this._weekendClass[useTR]:'')+(otherMonth?' '+this._otherMonthClass[useTR]:'')+((printDate.getTime()==cursorDate.getTime()&&drawMonth==inst.cursorDate.getMonth()&&inst.keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==cursorDate.getTime())?' '+$.datepick._dayOverClass[useTR]:'')+(unselectable?' '+this._unselectableClass[useTR]:' '+this._selectableClass[useTR])+(empty?'':' '+daySettings[1]+(selected?' '+this._selectedClass[useTR]:'')+(printDate.getTime()==today.getTime()?' '+this._todayClass[useTR]:''))+'"'+(!empty&&daySettings[2]?' title="'+daySettings[2]+'"':'')+(unselectable?'':' onmouseover="'+'jQuery.datepick._doMouseOver(this,\''+inst.id+'\','+printDate.getTime()+')"'+' onmouseout="jQuery.datepick._doMouseOut(this,\''+inst.id+'\')"'+' onclick="jQuery.datepick._selectDay(this,\'#'+inst.id+'\','+printDate.getTime()+')"')+'>'+(empty?'&#xa0;':(unselectable?printDate.getDate():'<a href="javascript:void(0)">'+printDate.getDate()+'</a>'))+'</td>';printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}html+='</tr>'}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}html+='</tbody></table></div>'}if(useTR)html+='<div class="'+this._newRowClass[useTR]+'"></div>'}html+=(showStatus?'<div style="clear: both;"></div><div id="'+this._statusId[useTR]+inst.id+'" class="'+this._statusClass[useTR]+'">'+initStatus+'</div>':'')+(!closeAtTop&&!inst.inline?controls:'')+'<div style="clear: both;"></div>'+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="'+this._coverClass[useTR]+'"></iframe>':'');inst.keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,cursorDate,secondary,useTR,showStatus,initStatus,monthNames){var minDraw=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1));minDate=(minDate&&minDraw<minDate?minDraw:minDate);var changeMonth=this._get(inst,'changeMonth');var changeYear=this._get(inst,'changeYear');var showMonthAfterYear=this._get(inst,'showMonthAfterYear');var html='<div class="'+this._monthYearClass[useTR]+'">';var monthHtml='';if(secondary||!changeMonth)monthHtml+='<span class="'+this._monthClass[useTR]+'">'+monthNames[drawMonth]+'</span>';else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="'+this._monthSelectClass[useTR]+'" '+'onchange="jQuery.datepick._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+'onclick="jQuery.datepick._clickMonthYear(\'#'+inst.id+'\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'monthStatus'),initStatus)+'>';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':'')+'>'+monthNames[month]+'</option>'}monthHtml+='</select>'}if(!showMonthAfterYear)html+=monthHtml+(secondary||!changeMonth||!changeYear?'&#xa0;':'');if(secondary||!changeYear)html+='<span class="'+this._yearClass[useTR]+'">'+drawYear+'</span>';else{var years=this._get(inst,'yearRange').split(':');var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||''));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="'+this._yearSelectClass[useTR]+'" '+'onchange="jQuery.datepick._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+'onclick="jQuery.datepick._clickMonthYear(\'#'+inst.id+'\');"'+this._addStatus(useTR,showStatus,inst.id,this._get(inst,'yearStatus'),initStatus)+'>';for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':'')+'>'+year+'</option>'}html+='</select>'}html+=this._get(inst,'yearSuffix');if(showMonthAfterYear)html+=(secondary||!changeMonth||!changeYear?'&#xa0;':'')+monthHtml;html+='</div>';return html},_addStatus:function(useTR,showStatus,id,text,initStatus){return(showStatus?' onmouseover="jQuery(\'#'+this._statusId[useTR]+id+'\').html(\''+(text||initStatus)+'\');" '+'onmouseout="jQuery(\'#'+this._statusId[useTR]+id+'\').html(\''+initStatus+'\');"':'')},_adjustInstDate:function(inst,offset,period){var yearMonth=inst.drawYear+'/'+inst.drawMonth;var year=inst.drawYear+(period=='Y'?offset:0);var month=inst.drawMonth+(period=='M'?offset:0);var day=Math.min(inst.cursorDate.getDate(),this._getDaysInMonth(year,month))+(period=='D'?offset:0);inst.cursorDate=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();if(yearMonth!=inst.drawYear+'/'+inst.drawMonth)this._notifyChange(inst)},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');date=(minDate&&date<minDate?new Date(minDate.getTime()):date);date=(maxDate&&date>maxDate?new Date(maxDate.getTime()):date);return date},_notifyChange:function(inst){var onChange=this._get(inst,'onChangeMonthYear');if(onChange)onChange.apply((inst.input?inst.input[0]:null),[inst.cursorDate.getFullYear(),inst.cursorDate.getMonth()+1,this._daylightSavingAdjust(new Date(inst.cursorDate.getFullYear(),inst.cursorDate.getMonth(),1)),inst])},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,'numberOfMonths');return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(inst,this._get(inst,minMax+'Date'),null);var rangeMin=this._getRangeMin(inst);return(checkRange&&rangeMin&&(!date||rangeMin>date)?rangeMin:date)},_getRangeMin:function(inst){return(this._get(inst,'rangeSelect')&&inst.dates[0]&&!inst.dates[1]?inst.dates[0]:null)},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0)date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getRangeMin(inst)||this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate))},_getFormatConfig:function(inst){return{shortYearCutoff:this._get(inst,'shortYearCutoff'),dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')}},_formatDate:function(inst,year,month,day){if(!year)inst.dates[0]=new Date(inst.cursorDate.getTime());var date=(year?(typeof year=='object'?year:this._daylightSavingAdjust(new Date(year,month,day))):inst.dates[0]);return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props)if(props[name]==null||props[name]==undefined)target[name]=props[name];return target};function isArray(a){return(a&&a.constructor==Array)};$.fn.datepick=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'||options=='settings'))return $.datepick['_'+options+'Datepick'].apply($.datepick,[this[0]].concat(otherArgs));if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')return $.datepick['_'+options+'Datepick'].apply($.datepick,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.datepick['_'+options+'Datepick'].apply($.datepick,[this].concat(otherArgs)):$.datepick._attachDatepick(this,options)})};$.datepick=new Datepick();$(function(){$(document).mousedown($.datepick._checkExternalClick).find('body').append($.datepick.dpDiv)})})(jQuery);

/*FLASH- http://jquery.thewikies.com/swfobject/*/
(function(F,C){var D=function(H){var G,I=[];for(G in H){if(/string|number/.test(typeof H[G])&&H[G]!==""){I.push(G+'="'+H[G]+'"')}}return I[A]("")},E=function(I){var G,K,J=[],H;if(typeof I=="object"){for(G in I){if(typeof I[G]=="object"){H=[];for(K in I[G]){H.push([K,"=",encodeURIComponent(I[G][K])][A](""))}I[G]=H[A]("&amp;")}if(I[G]){J.push(['<param name="',G,'" value="',I[G],'" />'][A](""))}}I=J[A]("")}return I},B=false,A="join";F[C]=(function(){try{var G="0,0,0",H=navigator.plugins["Shockwave Flash"]||ActiveXObject;G=H.description||(function(){try{return(new H("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(J){}}())}catch(I){}G=G.match(/^[A-Za-z\s]*?(\d+)[\.|,](\d+)(?:\s+[d|r]|,)(\d+)/);return{available:G[1]>0,activeX:H&&!H.name,version:{major:G[1]*1,minor:G[2]*1,release:G[3]*1},hasVersion:function(K){var N=this.version,L="major",M="minor",J="release";K=(/string|number/.test(typeof K))?K.toString().split("."):K||[0,0,0];K=[K[L]||K[0]||N[L],K[M]||K[1]||N[M],K[J]||K[2]||N[J]];return(K[0]<N[L])||(K[0]==N[L]&&K[1]<N[M])||(K[0]==N[L]&&K[1]==N[M]&&K[2]<=N[J])},expressInstall:"expressInstall.swf",create:function(J){if(!F[C].available||B||!typeof J=="object"||!J.swf){return false}if(J.hasVersion&&!F[C].hasVersion(J.hasVersion)){J={swf:J.expressInstall||F[C].expressInstall,attrs:{id:J.id||"SWFObjectExprInst",name:J.name,height:Math.max(J.height||137),width:Math.max(J.width||214)},params:{flashvars:{MMredirectURL:location.href,MMplayerType:(F[C].activeX)?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}};B=true}else{J=F.extend(true,{attrs:{id:J.id,name:J.name,height:J.height||180,width:J.width||320},params:{wmode:J.wmode||"opaque",flashvars:J.flashvars}},J)}if(F[C].activeX){J.attrs.classid=J.attrs.classid||"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";J.params.movie=J.params.movie||J.swf}else{J.attrs.type=J.attrs.classid||"application/x-shockwave-flash";J.attrs.data=J.attrs.data||J.swf}return["<object ",D(J.attrs),">",E(J.params),"</object>"][A]("")}}}());F.fn[C]=function(G){if(typeof G=="object"){this.each(function(){var I=document.createElement(C);var H=F[C].create(G);if(H){I.innerHTML=H;if(I.childNodes[0]){this.appendChild(I.childNodes[0])}}})}else{if(typeof G=="function"){this.find("object").andSelf().filter("object").each(function(){var I=this,H="jsInteractionTimeoutMs";I[H]=I[H]||0;if(I[H]<660){if(I.clientWidth||I.clientHeight){G.call(this)}else{setTimeout(function(){F(I)[C](G)},I[H]+66)}}})}}return this}}(jQuery,"flash"));

/* FORM VALIDATION — English messaging snippet */
(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"* This field is required",
						"alertTextCheckboxMultiple":"* Please select an option",
						"alertTextCheckboxe":"* This checkbox is required"},
					"length":{
						"regex":"none",
						"alertText":"*Between ",
						"alertText2":" and ",
						"alertText3": " characters allowed"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* Checks allowed Exceeded"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Please select ",
						"alertText2":" options"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Your field is not matching"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\ ]+$/",
						"alertText":"* Invalid phone number"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"* Invalid email address"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/",
                         "alertText":"* Invalid date, must be in YYYY-MM-DD format"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"* Numbers only"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText":"* No special caracters allowed"},	
					"ajaxUser":{
						"file":"validateUser.php",
						"extraData":"name=eric",
						"alertTextOk":"* This user is available",	
						"alertTextLoad":"* Loading, please wait",
						"alertText":"* This user is already taken"},	
					"ajaxName":{
						"file":"validateUser.php",
						"alertText":"* This name is already taken",
						"alertTextOk":"* This name is available",	
						"alertTextLoad":"* Loading, please wait"},		
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$/",
						"alertText":"* Letters only"}
					}	
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});

/* FORM VALIDATION — Cedric Dugas. http://www.position-relative.net */
(function ($) {

    $.fn.validationEngine = function (settings) {

        if ($.validationEngineLanguage) { // IS THERE A LANGUAGE LOCALISATION ?
            allRules = $.validationEngineLanguage.allRules;
        } else {
            $.validationEngine.debug("Validation engine rules are not loaded check your external file");
        }
        settings = jQuery.extend({
            allrules: allRules,
            validationEventTriggers: "blur",
            inlineValidation: true,
            returnIsValid: false,
            animateSubmit: true,
            unbindEngine: true,
            ajaxSubmit: false,
            promptPosition: "topRight",
            // OPENNING BOX POSITION, IMPLEMENTED: topLeft, topRight, bottomLeft, centerRight, bottomRight
            success: false,
            failure: function () {}
        }, settings);
        $.validationEngine.settings = settings;
        $.validationEngine.ajaxValidArray = new Array(); // ARRAY FOR AJAX: VALIDATION MEMORY 
        if (settings.inlineValidation == true) { // Validating Inline ?
            if (!settings.returnIsValid) { // NEEDED FOR THE SETTING returnIsValid
                allowReturnIsvalid = false;
                $(this).find("[class*=validate]").not("[type=checkbox]").bind(settings.validationEventTriggers, function (caller) {
                    _inlinEvent(this);
                });
                $(this).find("[class*=validate][type=checkbox]").bind("click", function (caller) {
                    _inlinEvent(this);
                });

                firstvalid = false;
            }

            function _inlinEvent(caller) {
                $.validationEngine.settings = settings;
                if ($.validationEngine.intercept == false || !$.validationEngine.intercept) { // STOP INLINE VALIDATION THIS TIME ONLY
                    $.validationEngine.onSubmitValid = false;
                    $.validationEngine.loadValidation(caller);
                } else {
                    $.validationEngine.intercept = false;
                }
            }
        }
        if (settings.returnIsValid) { // Do validation and return true or false, it bypass everything;
            if ($.validationEngine.submitValidation(this, settings)) {
                return false;
            } else {
                return true;
            }
        }
	$(this).bind("submit", function(caller){   // ON FORM SUBMIT, CONTROL AJAX FUNCTION IF SPECIFIED ON DOCUMENT READY
		$.validationEngine.onSubmitValid = true;
		$.validationEngine.settings = settings;
		if($.validationEngine.submitValidation(this,settings) == false){
			if($.validationEngine.submitForm(this,settings) == true) {return false;}
		}else{
			settings.failure && settings.failure(); 
			return false;
		}		
	});
	$(".f_error").live("click",function(){	 // REMOVE BOX ON CLICK
		$(this).fadeOut(150,function(){
			$(this).remove();
		}) 
	});
};
    $.validationEngine = {
        defaultSetting: function (caller) {
            if ($.validationEngineLanguage) { // IS THERE A LANGUAGE LOCALISATION ?
                allRules = $.validationEngineLanguage.allRules;
            } else {
                $.validationEngine.debug("Validation engine rules are not loaded check your external file");
            }
            settings = {
                allrules: allRules,
                validationEventTriggers: "blur",
                inlineValidation: true,
                returnIsValid: false,
                animateSubmit: true,
                unbindEngine: true,
                ajaxSubmit: false,
                promptPosition: "topRight",
                // OPENNING BOX POSITION, IMPLEMENTED: topLeft, topRight, bottomLeft, centerRight, bottomRight
                success: false,
                failure: function () {}
            }
            $.validationEngine.settings = settings;
        },
        loadValidation: function (caller) { // GET VALIDATIONS TO BE EXECUTED
            if (!$.validationEngine.settings) {
                $.validationEngine.defaultSetting();
            }
            rulesParsing = $(caller).attr('class');
            rulesRegExp = /\[(.*)\]/;
            getRules = rulesRegExp.exec(rulesParsing);
            str = getRules[1];
            pattern = /\W+/;
            result = str.split(pattern);

            var validateCalll = $.validationEngine.validateCall(caller, result);
            return validateCalll;
        },
        validateCall: function (caller, rules) { // EXECUTE VALIDATION REQUIRED BY THE USER FOR THIS FIELD
            var promptText = ""

            if (!$(caller).attr("id")) {
                $.validationEngine.debug("This field have no ID attribut( name & class displayed): " + $(caller).attr("name") + " " + $(caller).attr("class"))
            }

            caller = caller;
            ajaxValidate = false;
            var callerName = $(caller).attr("name");
            $.validationEngine.isError = false;
            $.validationEngine.showTriangle = true;
            callerType = $(caller).attr("type");

            for (i = 0; i < rules.length; i++) {
                switch (rules[i]) {
                case "optional":
                    if (!$(caller).val()) {
                        $.validationEngine.closePrompt(caller);
                        return $.validationEngine.isError;
                    }
                    break;
                case "required":
                    _required(caller, rules);
                    break;
                case "custom":
                    _customRegex(caller, rules, i);
                    break;
                case "ajax":
                    if (!$.validationEngine.onSubmitValid) {
                        _ajax(caller, rules, i);
                    };
                    break;
                case "length":
                    _length(caller, rules, i);
                    break;
                case "maxCheckbox":
                    _maxCheckbox(caller, rules, i);
                    groupname = $(caller).attr("name");
                    caller = $("input[name='" + groupname + "']");
                    break;
                case "minCheckbox":
                    _minCheckbox(caller, rules, i);
                    groupname = $(caller).attr("name");
                    caller = $("input[name='" + groupname + "']");
                    break;
                case "confirm":
                    _confirm(caller, rules, i);
                    break;
                default:
                    ;
                };
            };
            radioHack();
            if ($.validationEngine.isError == true) {
                linkTofield = $.validationEngine.linkTofield(caller);

                ($("div." + linkTofield).size() == 0) ? $.validationEngine.buildPrompt(caller, promptText, "error") : $.validationEngine.updatePromptText(caller, promptText);
            } else {
                $.validationEngine.closePrompt(caller);
            } /* UNFORTUNATE RADIO AND CHECKBOX GROUP HACKS */
            /* As my validation is looping input with id's we need a hack for my validation to understand to group these inputs */

            function radioHack() {
                if ($("input[name='" + callerName + "']").size() > 1 && (callerType == "radio" || callerType == "checkbox")) { // Hack for radio/checkbox group button, the validation go the first radio/checkbox of the group
                    caller = $("input[name='" + callerName + "'][type!=hidden]:first");
                    $.validationEngine.showTriangle = false;
                }
            } /* VALIDATION FUNCTIONS */

            function _required(caller, rules) { // VALIDATE BLANK FIELD
                callerType = $(caller).attr("type");
                if (callerType == "text" || callerType == "password" || callerType == "textarea") {

                    if (!$(caller).val()) {
                        $.validationEngine.isError = true;
                        promptText += $.validationEngine.settings.allrules[rules[i]].alertText + "<br />";
                    }
                }
                if (callerType == "radio" || callerType == "checkbox") {
                    callerName = $(caller).attr("name");

                    if ($("input[name='" + callerName + "']:checked").size() == 0) {
                        $.validationEngine.isError = true;
                        if ($("input[name='" + callerName + "']").size() == 1) {
                            promptText += $.validationEngine.settings.allrules[rules[i]].alertTextCheckboxe + "<br />";
                        } else {
                            promptText += $.validationEngine.settings.allrules[rules[i]].alertTextCheckboxMultiple + "<br />";
                        }
                    }
                }
                if (callerType == "select-one") { // added by paul@kinetek.net for select boxes, Thank you		
                    if (!$(caller).val()) {
                        $.validationEngine.isError = true;
                        promptText += $.validationEngine.settings.allrules[rules[i]].alertText + "<br />";
                    }
                }
                if (callerType == "select-multiple") { // added by paul@kinetek.net for select boxes, Thank you	
                    if (!$(caller).find("option:selected").val()) {
                        $.validationEngine.isError = true;
                        promptText += $.validationEngine.settings.allrules[rules[i]].alertText + "<br />";
                    }
                }
            }

            function _customRegex(caller, rules, position) { // VALIDATE REGEX RULES
                customRule = rules[position + 1];
                pattern = eval($.validationEngine.settings.allrules[customRule].regex);

                if (!pattern.test($(caller).attr('value'))) {
                    $.validationEngine.isError = true;
                    promptText += $.validationEngine.settings.allrules[customRule].alertText + "<br />";
                }
            }

            function _ajax(caller, rules, position) { // VALIDATE AJAX RULES
                customAjaxRule = rules[position + 1];
                postfile = $.validationEngine.settings.allrules[customAjaxRule].file;
                fieldValue = $(caller).val();
                ajaxCaller = caller;
                fieldId = $(caller).attr("id");
                ajaxValidate = true;
                ajaxisError = $.validationEngine.isError;

                if (!$.validationEngine.settings.allrules[customAjaxRule].extraData) {
                    extraData = $.validationEngine.settings.allrules[customAjaxRule].extraData;
                } else {
                    extraData = "";
                } /* AJAX VALIDATION HAS ITS OWN UPDATE AND BUILD UNLIKE OTHER RULES */
                if (!ajaxisError) {
                    $.ajax({
                        type: "POST",
                        url: postfile,
                        async: true,
                        data: "validateValue=" + fieldValue + "&validateId=" + fieldId + "&validateError=" + customAjaxRule + extraData,
                        beforeSend: function () { // BUILD A LOADING PROMPT IF LOAD TEXT EXIST		   			
                            if ($.validationEngine.settings.allrules[customAjaxRule].alertTextLoad) {

                                if (!$("div." + fieldId + "f_error")[0]) {
                                    return $.validationEngine.buildPrompt(ajaxCaller, $.validationEngine.settings.allrules[customAjaxRule].alertTextLoad, "load");
                                } else {
                                    $.validationEngine.updatePromptText(ajaxCaller, $.validationEngine.settings.allrules[customAjaxRule].alertTextLoad, "load");
                                }
                            }
                        },
                        error: function (data, transport) {
                            $.validationEngine.debug("error in the ajax: " + data.status + " " + transport)
                        },
                        success: function (data) { // GET SUCCESS DATA RETURN JSON
                            data = eval("(" + data + ")"); // GET JSON DATA FROM PHP AND PARSE IT
                            ajaxisError = data.jsonValidateReturn[2];
                            customAjaxRule = data.jsonValidateReturn[1];
                            ajaxCaller = $("#" + data.jsonValidateReturn[0])[0];
                            fieldId = ajaxCaller;
                            ajaxErrorLength = $.validationEngine.ajaxValidArray.length;
                            existInarray = false;

                            if (ajaxisError == "false") { // DATA FALSE UPDATE PROMPT WITH ERROR;
                                _checkInArray(false) // Check if ajax validation alreay used on this field
                                if (!existInarray) { // Add ajax error to stop submit		 		
                                    $.validationEngine.ajaxValidArray[ajaxErrorLength] = new Array(2);
                                    $.validationEngine.ajaxValidArray[ajaxErrorLength][0] = fieldId;
                                    $.validationEngine.ajaxValidArray[ajaxErrorLength][1] = false;
                                    existInarray = false;
                                }

                                $.validationEngine.ajaxValid = false;
                                promptText += $.validationEngine.settings.allrules[customAjaxRule].alertText + "<br />";
                                $.validationEngine.updatePromptText(ajaxCaller, promptText, "", true);
                            } else {
                                _checkInArray(true);
                                $.validationEngine.ajaxValid = true;
                                if ($.validationEngine.settings.allrules[customAjaxRule].alertTextOk) { // NO OK TEXT MEAN CLOSE PROMPT	 			
                                    $.validationEngine.updatePromptText(ajaxCaller, $.validationEngine.settings.allrules[customAjaxRule].alertTextOk, "pass", true);
                                } else {
                                    ajaxValidate = false;
                                    $.validationEngine.closePrompt(ajaxCaller);
                                }
                            }

                            function _checkInArray(validate) {
                                for (x = 0; x < ajaxErrorLength; x++) {
                                    if ($.validationEngine.ajaxValidArray[x][0] == fieldId) {
                                        $.validationEngine.ajaxValidArray[x][1] = validate;
                                        existInarray = true;

                                    }
                                }
                            }
                        }
                    });
                }
            }

            function _confirm(caller, rules, position) { // VALIDATE FIELD MATCH
                confirmField = rules[position + 1];

                if ($(caller).attr('value') != $("#" + confirmField).attr('value')) {
                    $.validationEngine.isError = true;
                    promptText += $.validationEngine.settings.allrules["confirm"].alertText + "<br />";
                }
            }

            function _length(caller, rules, position) { // VALIDATE LENGTH
                startLength = eval(rules[position + 1]);
                endLength = eval(rules[position + 2]);
                feildLength = $(caller).attr('value').length;

                if (feildLength < startLength || feildLength > endLength) {
                    $.validationEngine.isError = true;
                    promptText += $.validationEngine.settings.allrules["length"].alertText + startLength + $.validationEngine.settings.allrules["length"].alertText2 + endLength + $.validationEngine.settings.allrules["length"].alertText3 + "<br />"
                }
            }

            function _maxCheckbox(caller, rules, position) { // VALIDATE CHECKBOX NUMBER
                nbCheck = eval(rules[position + 1]);
                groupname = $(caller).attr("name");
                groupSize = $("input[name='" + groupname + "']:checked").size();
                if (groupSize > nbCheck) {
                    $.validationEngine.showTriangle = false;
                    $.validationEngine.isError = true;
                    promptText += $.validationEngine.settings.allrules["maxCheckbox"].alertText + "<br />";
                }
            }

            function _minCheckbox(caller, rules, position) { // VALIDATE CHECKBOX NUMBER
                nbCheck = eval(rules[position + 1]);
                groupname = $(caller).attr("name");
                groupSize = $("input[name='" + groupname + "']:checked").size();
                if (groupSize < nbCheck) {

                    $.validationEngine.isError = true;
                    $.validationEngine.showTriangle = false;
                    promptText += $.validationEngine.settings.allrules["minCheckbox"].alertText + " " + nbCheck + " " + $.validationEngine.settings.allrules["minCheckbox"].alertText2 + "<br />";
                }
            }
            return ($.validationEngine.isError) ? $.validationEngine.isError : false;
        },
        submitForm: function (caller) {
            if ($.validationEngine.settings.ajaxSubmit) {
                if ($.validationEngine.settings.ajaxSubmitExtraData) {
                    extraData = $.validationEngine.settings.ajaxSubmitExtraData;
                } else {
                    extraData = "";
                }
                $.ajax({
                    type: "POST",
                    url: $.validationEngine.settings.ajaxSubmitFile,
                    async: true,
                    data: $(caller).serialize() + "&" + extraData,
                    error: function (data, transport) {
                        $.validationEngine.debug("error in the ajax: " + data.status + " " + transport)
                    },
                    success: function (data) {
                        if (data == "true") { // EVERYTING IS FINE, SHOW SUCCESS MESSAGE
                            $(caller).css("opacity", 1);
                            $(caller).animate({
                                opacity: 0,
                                height: 0
                            }, function () {
                                $(caller).css("display", "none");
                                $(caller).before("<div class='ajax_submit'>" + $.validationEngine.settings.ajaxSubmitMessage + "</div>");
                                $.validationEngine.closePrompt(".f_error", true);
                                $(".ajax_submit").show("slow");
                                if ($.validationEngine.settings.success) { // AJAX SUCCESS, STOP THE LOCATION UPDATE
                                    $.validationEngine.settings.success && $.validationEngine.settings.success();
                                    return false;
                                }
                            });
                        } else { // HOUSTON WE GOT A PROBLEM (SOMETING IS NOT VALIDATING);
                            data = eval("(" + data + ")");
                            if (!data.jsonValidateReturn) {
                                $.validationEngine.debug("you are not going into the success fonction and jsonValidateReturn return nothing");
                            }
                            errorNumber = data.jsonValidateReturn.length
                            for (index = 0; index < errorNumber; index++) {
                                fieldId = data.jsonValidateReturn[index][0];
                                promptError = data.jsonValidateReturn[index][1];
                                type = data.jsonValidateReturn[index][2];
                                $.validationEngine.buildPrompt(fieldId, promptError, type);
                            }
                        }
                    }
                })
                return true;
            }
            if ($.validationEngine.settings.success) { // AJAX SUCCESS, STOP THE LOCATION UPDATE
                if ($.validationEngine.settings.unbindEngine) {
                    $(caller).unbind("submit")
                }
                $.validationEngine.settings.success && $.validationEngine.settings.success();
                return true;
            }
            return false;
        },
        buildPrompt: function (caller, promptText, type, ajaxed) { // ERROR PROMPT CREATION AND DISPLAY WHEN AN ERROR OCCUR
            if (!$.validationEngine.settings) {
                $.validationEngine.defaultSetting();
            }
            var divFormError = document.createElement('div');
            var formErrorContent = document.createElement('div');

            linkTofield = $.validationEngine.linkTofield(caller);
            $(divFormError).addClass("f_error");

            if (type == "pass") {
                $(divFormError).addClass("green_popup")
            }
            if (type == "load") {
                $(divFormError).addClass("black_popup")
            }
            if (ajaxed) {
                $(divFormError).addClass("ajaxed")
            }

            $(divFormError).addClass(linkTofield);
            $(formErrorContent).addClass("f_error_content");

            $("body").append(divFormError);
            $(divFormError).append(formErrorContent);

            if ($.validationEngine.showTriangle != false) { // NO TRIANGLE ON MAX CHECKBOX AND RADIO
                var arrow = document.createElement('div');
                $(arrow).addClass("f_error_arrow");
                $(divFormError).append(arrow);
                if ($.validationEngine.settings.promptPosition == "bottomLeft" || $.validationEngine.settings.promptPosition == "bottomRight") {
                    $(arrow).addClass("f_error_arrow_bottom");
                }
                if ($.validationEngine.settings.promptPosition == "topLeft" || $.validationEngine.settings.promptPosition == "topRight") {
                    $(divFormError).append(arrow);
                }
            }
            $(formErrorContent).html(promptText);

            callerTopPosition = $(caller).offset().top;
            callerleftPosition = $(caller).offset().left;
            callerWidth = $(caller).width();
            inputHeight = $(divFormError).height();

            /* POSITIONNING */
            if ($.validationEngine.settings.promptPosition == "topRight") {
                callerleftPosition += callerWidth - 30;
                callerTopPosition += -inputHeight - 10;
            }
            if ($.validationEngine.settings.promptPosition == "topLeft") {
                callerTopPosition += -inputHeight - 10;
            }

            if ($.validationEngine.settings.promptPosition == "centerRight") {
                callerleftPosition += callerWidth + 13;
            }

            if ($.validationEngine.settings.promptPosition == "bottomLeft") {
                callerHeight = $(caller).height();
                callerleftPosition = callerleftPosition;
                callerTopPosition = callerTopPosition + callerHeight + 15;
            }
            if ($.validationEngine.settings.promptPosition == "bottomRight") {
                callerHeight = $(caller).height();
                callerleftPosition += callerWidth - 30;
                callerTopPosition += callerHeight + 15;
            }
            $(divFormError).css({
                top: callerTopPosition,
                left: callerleftPosition,
                opacity: 0
            });
            return $(divFormError).animate({
                "opacity": 0.87
            }, function () {
                return true;
            });
        },
        updatePromptText: function (caller, promptText, type, ajaxed) { // UPDATE TEXT ERROR IF AN ERROR IS ALREADY DISPLAYED
            linkTofield = $.validationEngine.linkTofield(caller);
            var updateThisPrompt = "." + linkTofield;

            if (type == "pass") {
                $(updateThisPrompt).addClass("green_popup")
            } else {
                $(updateThisPrompt).removeClass("green_popup")
            };
            if (type == "load") {
                $(updateThisPrompt).addClass("black_popup")
            } else {
                $(updateThisPrompt).removeClass("black_popup")
            };
            if (ajaxed) {
                $(updateThisPrompt).addClass("ajaxed")
            } else {
                $(updateThisPrompt).removeClass("ajaxed")
            };

            $(updateThisPrompt).find(".f_error_content").html(promptText);
            callerTopPosition = $(caller).offset().top;
            inputHeight = $(updateThisPrompt).height();

            if ($.validationEngine.settings.promptPosition == "bottomLeft" || $.validationEngine.settings.promptPosition == "bottomRight") {
                callerHeight = $(caller).height();
                callerTopPosition = callerTopPosition + callerHeight + 15;
            }
            if ($.validationEngine.settings.promptPosition == "centerRight") {
                callerleftPosition += callerWidth + 13;
            }
            if ($.validationEngine.settings.promptPosition == "topLeft" || $.validationEngine.settings.promptPosition == "topRight") {
                callerTopPosition = callerTopPosition - inputHeight - 10;
            }
            $(updateThisPrompt).animate({
                top: callerTopPosition
            });
        },
        linkTofield: function (caller) {
            linkTofield = $(caller).attr("id") + "f_error";
            linkTofield = linkTofield.replace(/\[/g, "");
            linkTofield = linkTofield.replace(/\]/g, "");
            return linkTofield;
        },
        closePrompt: function (caller, outside) { // CLOSE PROMPT WHEN ERROR CORRECTED
            if (!$.validationEngine.settings) {
                $.validationEngine.defaultSetting();
            }
            if (outside) {
                $(caller).fadeTo("fast", 0, function () {
                    $(caller).remove();
                });
                return false;
            }
            if (!ajaxValidate) {
                linkTofield = $.validationEngine.linkTofield(caller);
                closingPrompt = "." + linkTofield;
                $(closingPrompt).fadeTo("fast", 0, function () {
                    $(closingPrompt).remove();
                });
            }
        },
        debug: function (error) {
            if (!$("#debugMode")[0]) {
                $("body").append("<div id='debugMode'><div class='debugError'><strong>This is a debug mode, you got a problem with your form, it will try to help you, refresh when you think you nailed down the problem</strong></div></div>");
            }
            $(".debugError").append("<div class='debugerror'>" + error + "</div>");
        },
        submitValidation: function (caller) { // FORM SUBMIT VALIDATION LOOPING INLINE VALIDATION
            var stopForm = false;
            $.validationEngine.ajaxValid = true;
            $(caller).find(".f_error").remove();
            var toValidateSize = $(caller).find("[class*=validate]").size();

            $(caller).find("[class*=validate]").each(function () {
                linkTofield = $.validationEngine.linkTofield(this);

                if (!$("." + linkTofield).hasClass("ajaxed")) { // DO NOT UPDATE ALREADY AJAXED FIELDS (only happen if no normal errors, don't worry);
                    var validationPass = $.validationEngine.loadValidation(this);
                    return (validationPass) ? stopForm = true : "";
                };
            });
            ajaxErrorLength = $.validationEngine.ajaxValidArray.length; // LOOK IF SOME AJAX IS NOT VALIDATE
            for (x = 0; x < ajaxErrorLength; x++) {
                if ($.validationEngine.ajaxValidArray[x][1] == false) {
                    $.validationEngine.ajaxValid = false;
                }
            }
            if (stopForm || !$.validationEngine.ajaxValid) { // GET IF THERE IS AN ERROR OR NOT FROM THIS VALIDATION FUNCTIONS
                if ($.validationEngine.settings.animateSubmit) {
                    destination = $(".f_error:not('.green_popup'):first").offset().top;
                    $(".f_error:not('.green_popup')").each(function () {
                        testDestination = $(this).offset().top;
                        if (destination > testDestination) {
                            destination = $(this).offset().top;
                        }
                    });
                    $("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: destination
                    }, 1100);
                }
                return true;
            } else {
                return false;
            }
        }
    }
})(jQuery);

$(document).ready(function(){
	$('iframe[src^="http://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src*="dailymotion.com"], object:not([class*="not-video"]):not(:has(embed)), embed:not([class*="not-video"])').wrap('<figure class="video" />');
	$('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
	// dropDowns();
	// slideOut();
	// retinaReplacement(); 
	// $('.on_demand').addClass('closed');
	// $('#billboard').scrollable({size: 1}).circular().navigator({navi: '#billboard .top_bets', naviItem: 'a', activeClass: 'current'}).autoscroll({interval: 15000});	
	// $('div.ads').tabs('.ads > a', {effect: 'fade', fadeOutSpeed: 'slow', rotate: true}).slideshow({autoplay: true, interval: 10000});
	// $('#live').flash({swf:'/a/swf/live.swf',height:665,width:740});
	// $('#f_sign_up').attr('autocomplete','off').validationEngine();
	
	// JS 'media queries'
	// var screenWidth = (screen.width < 480px) ? true : false;
	//if(!screenWidth) { ... }
});

function dropDowns() {
    $(document).click(function (e) {
        if ($(e.target).is('.menu .label')) {
            return;
        }
        $('.menu ul').hide();
		$('.menu .label').removeClass('down');
    });

    $('.menu ul').click(function (event) {
        event.stopPropagation();
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('.menu ul').hide();
			$('.menu .label').removeClass('down');
        }
    });

    $('.menu .label').click(function (event) {
		$('.menu ul').hide();
		$(this).parents('.menu').children('ul').toggle();
		$('.menu .label').removeClass('down');
		$(this).addClass('down');
		return false;
    });
}

// Alternatives: http://flowplayer.org/tools/overlay/ и http://colorpowered.com/colorbox/
function modalBox() {
    $('a[rel*="appendix"]').click(function (e) {

        //Cancel the link behavior
        e.preventDefault();

        //Create modal box container and overlay
        if ($('#modal_box').length == 0) {
            $('body').append('<div id="modal_box" class="section"></div><div id="overlay"></div>');
        }
        var href = $(this).attr('href');

        //Create figcaption text
        if ($(this).attr('title')) {
            var title = $(this).attr('title');
        } else {
            var title = ':-)';
        }

        //Check href to separate html and pics
        if ($(this).is('a[href$=.png], a[href$=.jpg], a[href$=.gif], a[href$=.gif]')) {

            //Create figure, figcaption and open image in modal box
            $('#modal_box').append('<div class="single figure"><div class="figcaption">' + title + '<button class="close">Закрыть</button></div><img src="' + href + '" alt="" /></div><div class="footer"></div>');
            $.getScript('/a/js/modal-box.js');
            $('#modal_box').fadeIn('300');
            $('#overlay').fadeIn('300');
        } else {

            //Load HTML in modal box
            $('#modal_box').load(href, function () {
                $.getScript('/a/js/modal-box.js');
            });
            $('#modal_box').fadeIn('300');
            $('#overlay').fadeIn('300');
        }
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('#modal_box').fadeOut('fast');
                $('#overlay').fadeOut('fast');
                $('#modal_box').empty();
            }
        });
    });
}

// Alternatives: jQuery Tools tabs
function gallery() {
    $('a[data-role="gallerycontrol"]').click(function (e) {

        //Cancel the link behavior
        e.preventDefault();

        var href = $(this).attr('href');

        //Create figcaption text
        if ($(this).attr('title')) {
            var title = $(this).attr('title');
        } else {
            var title = '';
        }

		var figure = $(this).parents('.gallery').children('figure');
		var figcaption = $(this).parents('.gallery').children('figcaption');
		figure.empty();
		figcaption.empty();
		figure.append('<img src="' + href + '" alt="" />');
		figcaption.append(title);
		
		//To-do: create prev-next navigation
		// var p = [ 645,629,648 ];
		// var start = 645;
		// var next = p[($.inArray(start, p) + 1) % p.length];
		//var prev = p[($.inArray(start, p) - 1 + p.length) % p.length];

		//Or, function based:

		//function nextProject(num) { 
  		//return p[($.inArray(num, p) + 1) % p.length]; 
		//}
		//function prevProject(num) { 
  		//return p[($.inArray(num, p) - 1 + p.length) % p.length];
		//}

    });
}

function accordion() {
    $('#activities UL .label').click(function () {
        $('#activities UL UL').slideUp();
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
        } else {
            $('#activities UL .label').removeClass('current');
            $(this).addClass('current');
            $(this).next().slideDown();
        }
        return false;
    });
}

// Facebook-like slide-out menu. Author: Aldo Lugo — http://blog.aldomatic.com/facebook-style-slide-out-menu-in-jquery-mobile/ 
$(function slideOut(){
	var menuStatus;
	
	$("#btn-slide-out").click(function(){
		if(menuStatus != true){				
		$(".ui-page-active").animate({
			marginLeft: "240px",
		  }, 300, function(){menuStatus = true});
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0",
		  }, 300, function(){menuStatus = false});
			return false;
		  }
	});

	$('.page').live("swipeleft", function(){
		if (menuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "0",
		  }, 300, function(){menuStatus = false});
		  }
	});
	
	$('.page').live("swiperight", function(){
		if (!menuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "240px",
		  }, 300, function(){menuStatus = true});
		  }
	});
	
	$("#slide-out li a").click(function(){
		var p = $(this).parent();
		if($(p).hasClass('current')){
			$("#slide-out li").removeClass('current');
		} else {
			$("#slide-out li").removeClass('current');
			$(p).addClass('current');
		}
	});
		
});	

// Retina Image Replacement
// Alternative for non-php sites — pure jQuery solutions:
//http://css3.bradshawenterprises.com/blog/retina-image-replacement-for-new-ipad/ — technique #2
//https://github.com/mcilvena/jQuery-Retina-Display-Plugin/blob/master/jquery.retina.js
// Set pixelRatio to 1 if the browser doesn't offer it up.
var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;

$(function retinaReplacement() {
    $.getJSON("/a/plug-ins/retina-replacement.php", function(data){
        if (pixelRatio > 1) {

            $('img').each(function() {

                // Very naive replacement that assumes no dots in file names.
                var newsrc = $(this).attr('src').replace(".","-2x.");

                if ($.inArray(newsrc, data)) {
                    $(this).attr('src', newsrc);
                }

            });
        }
    });
});

function handleError() {
    return true;
}
window.onerror = handleError;