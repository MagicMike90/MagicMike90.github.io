(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2uwn":function(e,t,n){e.exports=n.p+"static/five-d83428aa61b28c917c33f9a280ba7c36.png"},"6XCK":function(e,t,n){e.exports=n.p+"static/two-16793c08da814529fc115a03ba415828.png"},"7j6X":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV");var a=n("dZvc");function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}n("pIFo");var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var o=t[r];o||0===o?!function(e){return!(!e||!s.test(e))}(r)?n+=c(r)+": "+o+";":a+=r+"("+o+") ":e.style.removeProperty(c(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},BvNV:function(e,t,n){e.exports=n.p+"static/three-bf652716bd008661d47157fcb7e1af99.png"},Cc4E:function(e,t,n){e.exports=n.p+"static/three-476b3c7221bd2677b14fb495f850b08d.png"},CfAf:function(e,t,n){e.exports=n.p+"static/three-85a454c9e354854ef0c26b60e4ae5b57.png"},E6xs:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("WLL0"),c=n.n(i),s=n("hXcI"),l=n.n(s),u=n("Cc4E"),f=n.n(u),d=n("FZcf"),p=n.n(d),v=n("2uwn"),h=n.n(v),m=[c.a,l.a,f.a,p.a,h.a],b=n("SLrs"),y=(n("0l/t"),n("wx14")),x=n("zLVn"),g=n("dI71"),E=n("TSYQ"),w=n.n(E),I=n("7j6X"),C=(n("V+eJ"),n("SJxq")),N=n("GEtZ"),O=C.a&&"ontransitionend"in window;function S(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(N.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),o()}}var j=function(e,t,n){return O?(null==n&&(a=e,r=Object(I.a)(a,"transitionDuration")||"",o=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*o||0),S(e,n),Object(N.a)(e,"transitionend",t)):S(e,0,0);var a,r,o},_=n("JCAc"),P=(n("pIFo"),/-(.)/g);n("f3/d");var L=n("QA0p"),T=n.n(L),k=r.a.createContext({});k.Consumer,k.Provider;function A(e,t){var n=Object(a.useContext)(k);return e||n[t]||t}var D=function(e){return e[0].toUpperCase()+(t=e,t.replace(P,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function R(e,t){var n=void 0===t?{}:t,a=n.displayName,o=void 0===a?D(e):a,i=n.Component,c=void 0===i?"div":i,s=n.defaultProps,l=r.a.forwardRef((function(t,n){var a=t.className,o=t.bsPrefix,i=t.as,s=void 0===i?c:i,l=Object(x.a)(t,["className","bsPrefix","as"]),u=A(o,e);return r.a.createElement(s,Object(y.a)({ref:n,className:w()(a,u)},l))}));return l.defaultProps=s,l.displayName=o,l}var V=R("carousel-caption",{Component:"div"}),M=R("carousel-item");n("8+KV"),n("bWfx");n("Tze0"),n("DNiP");var X=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)};function U(e){return!e||"#"===e.trim()}var F=r.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,o=e.disabled,i=e.onKeyDown,c=Object(x.a)(e,["as","disabled","onKeyDown"]),s=function(e){var t=c.href,n=c.onClick;(o||U(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return U(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),o&&(c.tabIndex=-1,c["aria-disabled"]=!0),r.a.createElement(a,Object(y.a)({ref:t},c,{onClick:s,onKeyDown:X((function(e){" "===e.key&&(e.preventDefault(),s(e))}),i)}))}));F.displayName="SafeAnchor";var Z=F;var K=function(e){return r.a.Children.toArray(e).filter(r.a.isValidElement).length},q={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=r.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(I.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex+1;if(r>K(t.props.children)-1){if(!a)return;r=0}t.select(r,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex-1;if(r<0){if(!a)return;r=K(t.props.children)-1}t.select(r,e,"prev")}},t}Object(g.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var a=K(e.children)-1,r=Math.max(0,Math.min(e.activeIndex,a));return{direction:0===r&&n>=a||n<=r?"next":"prev",previousActiveIndex:n,activeIndex:r}}return null},n.componentDidUpdate=function(e,t){var n=this,a=this.props,r=a.bsPrefix,o=a.slide,i=a.onSlideEnd;if(o&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var c,s,l=this.state,u=l.activeIndex,f=l.direction;"next"===f?(c=r+"-item-next",s=r+"-item-left"):"prev"===f&&(c=r+"-item-prev",s=r+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:c},(function(){var e=n.carousel.current.children[u];e.offsetHeight,n.safeSetState({prevClasses:w()("active",s),currentClasses:w()(c,s)},(function(){return j(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),i&&i()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>K(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var a=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(a.timeout);var r=a.props,o=r.activeIndex,i=r.onSelect;e===o||a._isSliding||a.isUnmounted||i(e,n||(e<o?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,a=e.children,o=e.activeIndex,i=e.prevIcon,c=e.nextIcon,s=e.prevLabel,l=e.nextLabel,u=K(a);return[(n||0!==o)&&r.a.createElement(Z,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},i,s&&r.a.createElement("span",{className:"sr-only"},s)),(n||o!==u-1)&&r.a.createElement(Z,{key:"next",className:t+"-control-next",onClick:this.handleNext},c,l&&r.a.createElement("span",{className:"sr-only"},l))]},n.renderIndicators=function(e,t){var n=this,a=this.props.bsPrefix,o=[];return function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,a){o.push(r.a.createElement("li",{key:a,className:a===t?"active":null,onClick:function(e){return n.to(a,e)}})," ")})),r.a.createElement("ol",{className:a+"-indicators"},o)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,o=e.bsPrefix,i=e.slide,c=e.fade,s=e.indicators,l=e.controls,u=e.wrap,f=e.touch,d=e.prevIcon,p=e.prevLabel,v=e.nextIcon,h=e.nextLabel,m=e.className,b=e.children,g=e.keyboard,E=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(x.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),I=this.state,C=I.activeIndex,N=I.previousActiveIndex,O=I.prevClasses,S=I.currentClasses;return r.a.createElement(n,Object(y.a)({onTouchStart:f?this.handleTouchStart:void 0,onTouchEnd:f?this.handleTouchEnd:void 0},E,{className:w()(m,o,i&&"slide",c&&o+"-fade"),onKeyDown:g?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),s&&this.renderIndicators(b,C),r.a.createElement("div",{className:o+"-inner",ref:this.carousel},function(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}(b,(function(e,t){var n=t===C,r=t===N;return Object(a.cloneElement)(e,{className:w()(e.props.className,n&&S,r&&O)})}))),l&&this.renderControls({wrap:u,children:b,activeIndex:C,prevIcon:d,prevLabel:p,nextIcon:v,nextLabel:h}))},t}(r.a.Component);W.defaultProps=q;var H=function(e,t){"string"==typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,a=t,o=a.prefix,i=a.forwardRefAs,c=void 0===i?n?"ref":"innerRef":i;return T()((function(t,n){var a=Object(y.a)({},t);a[c]=n;var i=A(a.bsPrefix,o);return r.a.createElement(e,Object(y.a)({},a,{bsPrefix:i}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}(Object(_.a)(W,{activeIndex:"onSelect"}),"carousel");H.Caption=V,H.Item=M;var J=H,z=o.a.h5.withConfig({displayName:"ProjectShowCard__CardTitle",componentId:"i6po7x-0"})(["font-weight:700;"]),B=o.a.p.withConfig({displayName:"ProjectShowCard__CardContent",componentId:"i6po7x-1"})(["font-size:1rem;"]),Y=o.a.img.withConfig({displayName:"ProjectShowCard__CardImage",componentId:"i6po7x-2"})(["height:280px;"]);var G=function(e){var t=e.images,n=e.title;return r.a.createElement("div",{className:"card"},r.a.createElement(J,null,t.map((function(e,t){return r.a.createElement(J.Item,{key:"key-"+t},r.a.createElement(Y,{className:"d-block w-100",src:e,alt:"projects"}))}))),r.a.createElement("div",{className:"card-body"},r.a.createElement(z,{className:"card-title"},n),r.a.createElement(B,{className:"card-text"},"A personal project.")))},Q=n("IIZo"),$=n.n(Q),ee=n("6XCK"),te=n.n(ee),ne=n("BvNV"),ae=n.n(ne),re=[$.a,te.a,ae.a],oe=n("pt1O"),ie=n.n(oe),ce=n("qP/Z"),se=n.n(ce),le=n("CfAf"),ue=n.n(le),fe=[ie.a,se.a,ue.a],de=n("bylH"),pe=[n.n(de).a],ve=o.a.h1.withConfig({displayName:"portfolio__StyledTitle",componentId:"f542fe-0"})(["padding:4rem 2rem;"]);t.default=function(e){var t=e.location;return r.a.createElement(b.a,{location:t,theme:"dark"},r.a.createElement("div",{className:"container"},r.a.createElement(ve,null,"My projects"),r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(G,{title:"Personal Blog",images:fe})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(G,{title:"Employee Management System",images:m})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(G,{title:"Angular Dashboard",images:re})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(G,{title:"Angular SEO Ranking",images:pe}))))))}},FZcf:function(e,t,n){e.exports=n.p+"static/four-360defeb663ad88dfa5d4c6434540cf1.png"},GEtZ:function(e,t,n){"use strict";var a=n("SJxq"),r=!1,o=!1;try{var i={get passive(){return r=!0},get once(){return o=r=!0}};a.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(l){}var c=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!o){var i=a.once,c=a.capture,s=n;!o&&i&&(s=n.__once||function e(a){this.removeEventListener(t,e,c),n.call(this,a)},n.__once=s),e.addEventListener(t,s,r?a:c)}e.addEventListener(t,n,a)};var s=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};t.a=function(e,t,n,a){return c(e,t,n,a),function(){s(e,t,n,a)}}},IIZo:function(e,t,n){e.exports=n.p+"static/one-f9a77411334e4b641be21e13ea4dad73.png"},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf");var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=(n("Tze0"),n("8+KV"),n("QLaP")),s=n.n(c),l=function(){};function u(e,t){return void 0!==e[t]}function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}n("hHhE"),n("f3/d");var d=n("dI71"),p=n("94VI");function v(e,t,n){void 0===n&&(n=[]);var o,c=e.displayName||e.name||"Component",h=!!(o=e)&&("function"!=typeof o||o.prototype&&o.prototype.isReactComponent),m=Object.keys(t),b=m.map(f);!h&&n.length&&s()(!1);var y=function(o){function c(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];(e=o.call.apply(o,[this].concat(i))||this).handlers=Object.create(null),m.forEach((function(n){var r=t[n];e.handlers[r]=function(t){if(e.props[r]){var o;e._notifying=!0;for(var i=arguments.length,c=new Array(i>1?i-1:0),s=1;s<i;s++)c[s-1]=arguments[s];(o=e.props)[r].apply(o,[t].concat(c)),e._notifying=!1}e.unmounted||e.setState((function(e){var r,o=e.values;return{values:Object(a.a)(Object.create(null),o,(r={},r[n]=t,r))}}))}})),n.length&&(e.attachRef=function(t){e.inner=t});var s=Object.create(null);return m.forEach((function(t){s[t]=e.props[f(t)]})),e.state={values:s,prevProps:{}},e}Object(d.a)(c,o);var s=c.prototype;return s.shouldComponentUpdate=function(){return!this._notifying},c.getDerivedStateFromProps=function(e,t){var n=t.values,r=t.prevProps,o={values:Object(a.a)(Object.create(null),n),prevProps:{}};return m.forEach((function(t){o.prevProps[t]=e[t],!u(e,t)&&u(r,t)&&(o.values[t]=e[f(t)])})),o},s.componentWillUnmount=function(){this.unmounted=!0},s.render=function(){var t=this,n=this.props,o=n.innerRef,c=Object(r.a)(n,["innerRef"]);b.forEach((function(e){delete c[e]}));var s={};return m.forEach((function(e){var n=t.props[e];s[e]=void 0!==n?n:t.state.values[e]})),i.a.createElement(e,Object(a.a)({},c,s,this.handlers,{ref:o||this.attachRef}))},c}(i.a.Component);Object(p.polyfill)(y),y.displayName="Uncontrolled("+c+")",y.propTypes=Object(a.a)({innerRef:function(){}},function(e,t){var n={};return Object.keys(e).forEach((function(e){n[f(e)]=l})),n}(t)),n.forEach((function(e){y.prototype[e]=function(){var t;return(t=this.inner)[e].apply(t,arguments)}}));var x=y;return i.a.forwardRef&&((x=i.a.forwardRef((function(e,t){return i.a.createElement(y,Object(a.a)({},e,{innerRef:t}))}))).propTypes=y.propTypes),x.ControlledComponent=e,x.deferControlTo=function(e,n,r){return void 0===n&&(n={}),v(e,Object(a.a)({},t,n),r)},x}},QA0p:function(e,t,n){"use strict";n("91GP"),n("f3/d"),t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,o=n.defaultProps,i=n.allowFallback,c=void 0!==i&&i,s=n.displayName,l=void 0===s?e.name||e.displayName:s,u=function(t,n){return e(t,n)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:l,propTypes:a,defaultProps:o})};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},SLrs:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("mxZj"),c=o.a.main.withConfig({displayName:"PostLayout__Container",componentId:"r7gs76-0"})(["background:#fff;color:#2e2f3e;"]),s=o.a.footer.withConfig({displayName:"PostLayout__Footer",componentId:"r7gs76-1"})(["text-align:center;width:100%;color:#ffffff;padding:15px;display:'block';"]);t.a=function(e){e.location;var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(c,null,t),r.a.createElement(s,null,"©",(new Date).getFullYear()," ","Michael Luo"))}},TSYQ:function(e,t,n){var a;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},WLL0:function(e,t,n){e.exports=n.p+"static/one-7d60e01e981e49063d1f165d5b00badb.png"},bylH:function(e,t,n){e.exports=n.p+"static/one-1457099ee1e52ff2db45ae45ad334b7d.png"},dI71:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},dZvc:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},hXcI:function(e,t,n){e.exports=n.p+"static/two-0257156d507ea4172a423f8a8875c6dc.png"},pt1O:function(e,t,n){e.exports=n.p+"static/one-8b62f73726b5cf96317682f55f6908b1.png"},"qP/Z":function(e,t,n){e.exports=n.p+"static/two-bffa2c5b9c0872da541812a17effc6e1.png"},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-7c160ba190e31142a656.js.map