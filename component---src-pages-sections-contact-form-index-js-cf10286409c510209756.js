(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2W6z":function(e,a,t){"use strict";t("sC2a");var r=function(){};e.exports=r},"91um":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),n=t("wx14"),s=t("zLVn"),i=t("TSYQ"),o=t.n(i),c=t("vUet"),u=t("dbZe"),d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,i=e.size,d=e.active,f=e.className,m=e.block,b=e.type,v=e.as,p=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(t,"btn"),x=o()(f,y,d&&"active",y+"-"+r,m&&y+"-block",i&&y+"-"+i);if(p.href)return l.a.createElement(u.a,Object(n.a)({},p,{as:v,ref:a,className:o()(x,p.disabled&&"disabled")}));a&&(p.ref=a),v||(p.type=b);var O=v||"button";return l.a.createElement(O,Object(n.a)({},p,{className:x}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var f=d,m=(t("K9S6"),t("17x9")),b=t.n(m),v={type:b.a.string.isRequired,as:b.a.elementType},p=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,c=e.type,u=Object(s.a)(e,["as","className","type"]);return l.a.createElement(r,Object(n.a)({},u,{ref:a,className:o()(i,c&&c+"-feedback")}))}));p.displayName="Feedback",p.propTypes=v,p.defaultProps={type:"valid"};var y=p,x=l.a.createContext({controlId:void 0}),O=l.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,d=e.className,f=e.isValid,m=e.isInvalid,b=e.isStatic,v=e.as,p=void 0===v?"input":v,y=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(r.useContext)(x),j=O.controlId;return i=O.custom?Object(c.a)(u,"custom-control-input"):Object(c.a)(i,"form-check-input"),l.a.createElement(p,Object(n.a)({},y,{ref:a,id:t||j,className:o()(d,i,f&&"is-valid",m&&"is-invalid",b&&"position-static")}))}));O.displayName="FormCheckInput",O.defaultProps={type:"checkbox"};var j=O,N=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,u=e.className,d=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(r.useContext)(x),b=m.controlId;return t=m.custom?Object(c.a)(i,"custom-control-label"):Object(c.a)(t,"form-check-label"),l.a.createElement("label",Object(n.a)({},f,{ref:a,htmlFor:d||b,className:o()(u,t)}))}));N.displayName="FormCheckLabel";var h=N,P=l.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,d=e.inline,f=e.disabled,m=e.isValid,b=e.isInvalid,v=e.feedback,p=e.className,O=e.style,N=e.title,P=e.type,w=e.label,E=e.children,I=e.custom,C=e.as,g=void 0===C?"input":C,F=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||I;i=k?Object(c.a)(u,"custom-control"):Object(c.a)(i,"form-check");var R=Object(r.useContext)(x).controlId,V=Object(r.useMemo)((function(){return{controlId:t||R,custom:k}}),[R,k,t]),_=null!=w&&!1!==w&&!E,L=l.a.createElement(j,Object(n.a)({},F,{type:"switch"===P?"checkbox":P,ref:a,isValid:m,isInvalid:b,isStatic:!_,disabled:f,as:g}));return l.a.createElement(x.Provider,{value:V},l.a.createElement("div",{style:O,className:o()(p,i,k&&"custom-"+P,d&&i+"-inline")},E||l.a.createElement(l.a.Fragment,null,L,_&&l.a.createElement(h,{title:N},w),(m||b)&&l.a.createElement(y,{type:m?"valid":"invalid"},v))))}));P.displayName="FormCheck",P.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},P.Input=j,P.Label=h;var w=P,E=l.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,d=e.className,f=e.isValid,m=e.isInvalid,b=e.lang,v=e.as,p=void 0===v?"input":v,y=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(r.useContext)(x),j=O.controlId;return i=O.custom?Object(c.a)(u,"custom-file-input"):Object(c.a)(i,"form-control-file"),l.a.createElement(p,Object(n.a)({},y,{ref:a,id:t||j,type:"file",lang:b,className:o()(d,i,f&&"is-valid",m&&"is-invalid")}))}));E.displayName="FormFileInput";var I=E,C=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,u=e.className,d=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(r.useContext)(x),b=m.controlId;return t=m.custom?Object(c.a)(i,"custom-file-label"):Object(c.a)(t,"form-file-label"),l.a.createElement("label",Object(n.a)({},f,{ref:a,htmlFor:d||b,className:o()(u,t),"data-browse":f["data-browse"]}))}));C.displayName="FormFileLabel";var g=C,F=l.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,u=e.bsCustomPrefix,d=e.disabled,f=e.isValid,m=e.isInvalid,b=e.feedback,v=e.className,p=e.style,O=e.label,j=e.children,N=e.custom,h=e.lang,P=e["data-browse"],w=e.as,E=void 0===w?"div":w,C=e.inputAs,F=void 0===C?"input":C,k=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]);i=N?Object(c.a)(u,"custom"):Object(c.a)(i,"form-file");var R=Object(r.useContext)(x).controlId,V=Object(r.useMemo)((function(){return{controlId:t||R,custom:N}}),[R,N,t]),_=null!=O&&!1!==O&&!j,L=l.a.createElement(I,Object(n.a)({},k,{ref:a,isValid:f,isInvalid:m,disabled:d,as:F,lang:h}));return l.a.createElement(x.Provider,{value:V},l.a.createElement(E,{style:p,className:o()(v,i,N&&"custom-file")},j||l.a.createElement(l.a.Fragment,null,N?l.a.createElement(l.a.Fragment,null,L,_&&l.a.createElement(g,{"data-browse":P},O)):l.a.createElement(l.a.Fragment,null,_&&l.a.createElement(g,null,O),L),(f||m)&&l.a.createElement(y,{type:f?"valid":"invalid"},b))))}));F.displayName="FormFile",F.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},F.Input=I,F.Label=g;var k=F,R=(t("2W6z"),l.a.forwardRef((function(e,a){var t,i,u=e.bsPrefix,d=e.bsCustomPrefix,f=e.type,m=e.size,b=e.id,v=e.className,p=e.isValid,y=e.isInvalid,O=e.plaintext,j=e.readOnly,N=e.custom,h=e.as,P=void 0===h?"input":h,w=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(r.useContext)(x).controlId;if(u=N?Object(c.a)(d,"custom"):Object(c.a)(u,"form-control"),O)(i={})[u+"-plaintext"]=!0,t=i;else if("file"===f){var I;(I={})[u+"-file"]=!0,t=I}else if("range"===f){var C;(C={})[u+"-range"]=!0,t=C}else if("select"===P&&N){var g;(g={})[u+"-select"]=!0,g[u+"-select-"+m]=m,t=g}else{var F;(F={})[u]=!0,F[u+"-"+m]=m,t=F}return l.a.createElement(P,Object(n.a)({},w,{type:f,ref:a,readOnly:j,id:b||E,className:o()(v,t,p&&"is-valid",y&&"is-invalid")}))})));R.displayName="FormControl",R.Feedback=y;var V=R,_=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,u=e.children,d=e.controlId,f=e.as,m=void 0===f?"div":f,b=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(c.a)(t,"form-group");var v=Object(r.useMemo)((function(){return{controlId:d}}),[d]);return l.a.createElement(x.Provider,{value:v},l.a.createElement(m,Object(n.a)({},b,{ref:a,className:o()(i,t)}),u))}));_.displayName="FormGroup";var L=_,M=t("JI6e"),S=l.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,u=e.bsPrefix,d=e.column,f=e.srOnly,m=e.className,b=e.htmlFor,v=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=Object(r.useContext)(x).controlId;u=Object(c.a)(u,"form-label");var y="col-form-label";"string"==typeof d&&(y=y+"-"+d);var O=o()(m,u,f&&"sr-only",d&&y);return b=b||p,d?l.a.createElement(M.a,Object(n.a)({as:"label",className:O,htmlFor:b},v)):l.a.createElement(i,Object(n.a)({ref:a,className:O,htmlFor:b},v))}));S.displayName="FormLabel",S.defaultProps={column:!1,srOnly:!1};var A=S,z=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"small":i,d=e.muted,f=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(c.a)(t,"form-text"),l.a.createElement(u,Object(n.a)({},f,{ref:a,className:o()(r,t,d&&"text-muted")}))}));z.displayName="FormText";var T=z,q=l.a.forwardRef((function(e,a){return l.a.createElement(w,Object(n.a)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=w.Input,q.Label=w.Label;var G=q,J=t("YdCC"),Y=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,i=e.className,u=e.validated,d=e.as,f=void 0===d?"form":d,m=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(c.a)(t,"form"),l.a.createElement(f,Object(n.a)({},m,{ref:a,className:o()(i,u&&"was-validated",r&&t+"-inline")}))}));Y.displayName="Form",Y.defaultProps={inline:!1},Y.Row=Object(J.a)("form-row"),Y.Group=L,Y.Control=V,Y.Check=w,Y.File=k,Y.Switch=G,Y.Label=A,Y.Text=T;var D=Y,U=t("vOnD"),Q=U.c.div.withConfig({displayName:"contact-form__FormFooter",componentId:"vl0yyv-0"})(["max-width:200px;text-align:center;"]),K=Object(U.c)(f).withConfig({displayName:"contact-form__SubmitButton",componentId:"vl0yyv-1"})(["background:#212529;"]),B=Object(U.c)(D).withConfig({displayName:"contact-form__DarkForm",componentId:"vl0yyv-2"})(["color:#212529;"]),H=function(e){e.className;return l.a.createElement(B,null,l.a.createElement(D.Row,null,l.a.createElement(D.Group,{as:M.a,controlId:"formGridName"},l.a.createElement(D.Label,null,"Your name"),l.a.createElement(D.Control,{type:"test",placeholder:"Your Name"})),l.a.createElement(D.Group,{as:M.a,controlId:"formGridEmail"},l.a.createElement(D.Label,null,"Email"),l.a.createElement(D.Control,{type:"email",placeholder:"Enter email"}))),l.a.createElement(D.Group,{controlId:"formGridMessage"},l.a.createElement(D.Label,null,"Message"),l.a.createElement(D.Control,{as:"textarea",placeholder:"Message"})),l.a.createElement(Q,{className:"mx-auto"},l.a.createElement(K,{type:"submit"},"Submit")))};H.defaultProps={className:""};a.default=H},JI6e:function(e,a,t){"use strict";t("JHok");var r=t("wx14"),l=t("zLVn"),n=t("TSYQ"),s=t.n(n),i=t("q1tI"),o=t.n(i),c=t("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,d=void 0===i?"div":i,f=Object(l.a)(e,["bsPrefix","className","as"]),m=Object(c.a)(t,"col"),b=[],v=[];return u.forEach((function(e){var a,t,r,l=f[e];if(delete f[e],null!=l&&"object"==typeof l){var n=l.span;a=void 0===n||n,t=l.offset,r=l.order}else a=l;var s="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+m+s:""+m+s+"-"+a),null!=r&&v.push("order"+s+"-"+r),null!=t&&v.push("offset"+s+"-"+t)})),b.length||b.push(m),o.a.createElement(d,Object(r.a)({},f,{ref:a,className:s.a.apply(void 0,[n].concat(b,v))}))}));d.displayName="Col",a.a=d},K9S6:function(e,a,t){"use strict";t("JHok"),t("R48M"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,n.default)(r)};var r,l=t("pvIh"),n=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},QA0p:function(e,a,t){"use strict";t("E5k/"),t("pJf4"),a.__esModule=!0,a.default=function(e,a){var t=void 0===a?{}:a,r=t.propTypes,n=t.defaultProps,s=t.allowFallback,i=void 0!==s&&s,o=t.displayName,c=void 0===o?e.name||e.displayName:o,u=function(a,t){return e(a,t)};return Object.assign(l.default.forwardRef||!i?l.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:r,defaultProps:n})};var r,l=(r=t("q1tI"))&&r.__esModule?r:{default:r}},TSYQ:function(e,a,t){var r;t("MIFh"),function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var s=l.apply(null,r);s&&e.push(s)}else if("object"===n)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(a,[]))||(e.exports=r)}()},YdCC:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var r=t("wx14"),l=t("zLVn"),n=t("TSYQ"),s=t.n(n),i=(t("sC2a"),/-(.)/g);var o=t("q1tI"),c=t.n(o),u=t("vUet"),d=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,n=t.displayName,i=void 0===n?d(e):n,o=t.Component,f=void 0===o?"div":o,m=t.defaultProps,b=c.a.forwardRef((function(a,t){var n=a.className,i=a.bsPrefix,o=a.as,d=void 0===o?f:o,m=Object(l.a)(a,["className","bsPrefix","as"]),b=Object(u.a)(i,e);return c.a.createElement(d,Object(r.a)({ref:t,className:s()(n,b)},m))}));return b.defaultProps=m,b.displayName=i,b}},dbZe:function(e,a,t){"use strict";t("HXzo");var r=t("wx14"),l=t("zLVn"),n=t("q1tI"),s=t.n(n);t("OeI1"),t("U6Bt");var i=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];e.apply(this,r),a.apply(this,r)}}),null)};function o(e){return!e||"#"===e.trim()}var c=s.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,c=e.disabled,u=e.onKeyDown,d=Object(l.a)(e,["as","disabled","onKeyDown"]),f=function(e){var a=d.href,t=d.onClick;(c||o(a))&&e.preventDefault(),c?e.stopPropagation():t&&t(e)};return o(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),c&&(d.tabIndex=-1,d["aria-disabled"]=!0),s.a.createElement(n,Object(r.a)({ref:a},d,{onClick:f,onKeyDown:i((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));c.displayName="SafeAnchor";a.a=c},pvIh:function(e,a,t){"use strict";t("n7j8"),t("R48M"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,n,s){var i=l||"<<anonymous>>",o=s||r;if(null==t[r])return a?new Error("Required "+n+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,i,n,o].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},vUet:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("pJf4"),t("wx14"),t("QA0p");var r=t("q1tI"),l=t.n(r),n=l.a.createContext({});n.Consumer,n.Provider;function s(e,a){var t=Object(r.useContext)(n);return e||t[a]||a}}}]);
//# sourceMappingURL=component---src-pages-sections-contact-form-index-js-cf10286409c510209756.js.map