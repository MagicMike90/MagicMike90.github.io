(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(204),c=a.n(s),l=a(6),d=a(87),p=a(185),m=(a(32),a(88)),g=a.n(m),u=a(62),f=function(e){var t=e.children,a=e.to,n=e.activeClassName,r=g()(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(a)?o.a.createElement(u.a,Object.assign({to:a,activeClassName:n},r),t):o.a.createElement("a",Object.assign({href:a},r),t)},h=l.a.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-9r06dk-0"})(["background:inherit;padding:20px;box-shadow:rgba(25,17,34,0.05) 0px 3px 10px;border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem;transition:transform 250ms cubic-bezier(0.4,0,0.2,1) 0s,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0s,padding 250ms cubic-bezier(0.4,0,0.2,1) 0s;transition:0.3s;:hover{transform:translateY(-4px);box-shadow:rgba(25,17,34,0.1) 0px 10px 42px;background:linear-gradient( to right,#f09819,#ff512f );}"]),y=l.a.div.withConfig({displayName:"Card__CardHeader",componentId:"sc-9r06dk-1"})(["font-size:32px;font-weight:700;"]),b=function(e){var t=e.title,a=e.children;return o.a.createElement(h,null,o.a.createElement(y,null,t),a)},w=a(86);a.d(t,"pageQuery",function(){return I});var k=d.a.div({enter:{staggerChildren:50},exit:{staggerChildren:20,staggerDirection:-1}}),x=d.a.article({enter:{x:0,opacity:1},exit:{x:50,opacity:0,transition:{duration:200}}}),v=l.a.h1.withConfig({displayName:"notes__StyledTitle",componentId:"j6sz1k-0"})(["padding:4rem 2rem;"]),C=Object(l.a)(k).withConfig({displayName:"notes__StyledListContainer",componentId:"j6sz1k-1"})(["padding:0 2rem 4rem 2rem;"]),E=Object(l.a)(x).withConfig({displayName:"notes__StyledItem",componentId:"j6sz1k-2"})(["background:#20232f;"]),_=Object(l.a)(f).withConfig({displayName:"notes__CardLink",componentId:"j6sz1k-3"})([":hover{color:#ffff !important;}"]),j=l.a.p.withConfig({displayName:"notes__StyeldP",componentId:"j6sz1k-4"})(["font-size:16px;font-weight:300;margin:10px 0;"]),z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=(e.location,t.allMarkdownRemark.edges);return o.a.createElement(w.a,{location:this.props.location,theme:"dark"},o.a.createElement(p.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(v,null,"The notes from the books I have read"),o.a.createElement(C,{initialPose:"exit",pose:"enter"},o.a.createElement(c.a,{container:!0,spacing:8},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement(c.a,{item:!0,xs:12,sm:6,key:t.fields.slug},o.a.createElement(E,null,o.a.createElement(_,{to:"/"+t.fields.slug},o.a.createElement(b,{title:a},o.a.createElement("small",null,t.frontmatter.date),o.a.createElement(j,{dangerouslySetInnerHTML:{__html:t.excerpt}})))))}))))},t}(o.a.Component),I=(t.default=z,"1623555389")},185:function(e,t,a){"use strict";var n=a(186),r=a(0),i=a.n(r),o=a(2),s=a.n(o),c=a(193),l=a.n(c),d=a(62);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var m="1025518380"},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Michael Luo"}}}}}}]);
//# sourceMappingURL=component---src-pages-notes-js-f0db9b853d6b49b76447.js.map