(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(62),i=a(87),l=a(6),c=a(177),s=a(77),d=l.a.main.withConfig({displayName:"PostLayout__Container",componentId:"r7gs76-0"})(["background:#fff;color:#2e2f3e;"]),p=l.a.footer.withConfig({displayName:"PostLayout__Footer",componentId:"r7gs76-1"})(["text-align:center;width:100%;color:#ffffff;padding:15px;display:'block';"]),m=function(e){e.location;var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(d,null,t),r.a.createElement(p,null,"©",(new Date).getFullYear()," ","Michael Luo"))};a.d(t,"pageQuery",function(){return b});var u=i.a.section({enter:{staggerChildren:50,staggerDirection:-1}}),g=l.a.header.withConfig({displayName:"blog-post__StyledHeader",componentId:"sc-199q6go-0"})(["border-bottom-right-radius:200px;position:relative;z-index:1;padding:4rem 2rem;background:#100e17;color:#fff;"]),f=l.a.div.withConfig({displayName:"blog-post__StyledContent",componentId:"sc-199q6go-1"})(["padding:4rem 2rem;"]),y=i.a.h1({enter:{y:0,opacity:1},exit:{y:50,opacity:0}}),w=Object(l.a)(y).withConfig({displayName:"blog-post__StyledTitle",componentId:"sc-199q6go-2"})(["background:linear-gradient(to right,#f09819,#ff512f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;"]),h=i.a.p({enter:{y:0,opacity:1},exit:{y:50,opacity:0}}),b=(t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,i=t.markdownRemark,l=a.previous,s=a.next;return r.a.createElement(m,{location:n},r.a.createElement(u,{initialPose:"exit",pose:"enter"},r.a.createElement(c.a,{title:i.frontmatter.title,description:i.excerpt}),r.a.createElement(g,null,r.a.createElement(w,null,i.frontmatter.title),r.a.createElement(h,null,i.frontmatter.date)),r.a.createElement(f,null,r.a.createElement(h,{dangerouslySetInnerHTML:{__html:i.html}})),r.a.createElement("hr",null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,l&&r.a.createElement(o.a,{to:l.fields.slug,rel:"prev"},"←"," ",l.frontmatter.title)),r.a.createElement("li",null,s&&r.a.createElement(o.a,{to:s.fields.slug,rel:"next"},s.frontmatter.title," ","→")))))},"2761936148")},177:function(e,t,a){"use strict";var n=a(178),r=a(0),o=a.n(r),i=a(2),l=a.n(i),c=a(185),s=a.n(c),d=a(62);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var m="1025518380"},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Michael Luo"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ea05161a62f931139126.js.map