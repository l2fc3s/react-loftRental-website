(this["webpackJsonpreact-loftrental-website"]=this["webpackJsonpreact-loftrental-website"]||[]).push([[0],{22:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var c=i(2),n=i.n(c),a=i(23),s=i.n(a),l=(i(22),i(13)),o=(i(34),i(3)),r=(i(35),i(1)),b=["btn--primary","btn--dark"],j=["btn","btn--medium","btn--large"],d=function(e){var t=e.children,i=e.type,c=e.onClick,n=e.buttonStyle,a=e.buttonSize,s=b.includes(n)?n:b[0],l=j.includes(a)?a:j[0];return Object(r.jsx)(o.b,{children:Object(r.jsx)("button",{className:"btn ".concat(s," ").concat(l),onClick:c,type:i,children:t})})},h=i(9);var m=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)(!0),s=Object(l.a)(a,2),o=s[0],b=s[1],j=Object(c.useState)(!1),m=Object(l.a)(j,2),u=m[0],p=m[1],x=function(){return n(!1)},f=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(c.useEffect)((function(){f()}),[]),window.addEventListener("resize",f),window.addEventListener("scroll",(function(){window.scrollY>=60?p(!0):p(!1)})),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:u?"navbar active":"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(h.a,{smooth:!0,to:"/",className:"navbar-logo",onClick:x,children:[Object(r.jsx)("p",{children:"LOFT"}),Object(r.jsx)("i",{className:"fab fa-unsplash"})]}),Object(r.jsx)("div",{className:"mobile-icon",onClick:function(){return n(!i)},children:Object(r.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:i?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.a,{smooth:!0,to:"#about-section",className:"nav-links",onClick:x,children:"About Us"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.a,{smooth:!0,to:"#gallerySection",className:"nav-links",onClick:x,children:"Gallery"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.a,{smooth:!0,to:"#footer",className:"nav-links",onClick:x,children:"Contact"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.a,{smooth:!0,to:"#footer",className:"nav-links",onClick:x,children:"Sign in"})}),Object(r.jsx)("li",{children:Object(r.jsx)(h.a,{smooth:!0,to:"#footer",className:"nav-links sign-up",onClick:x,children:"Sign Up"})}),Object(r.jsx)("li",{className:"signup-button",children:o&&Object(r.jsx)(h.a,{smooth:!0,to:"#footer",children:Object(r.jsx)(d,{buttonStyle:"btn--dark",children:"Sign up"})})})]})]})})})},u=i(4),p=i(29);i(45);var x=function(){return Object(r.jsxs)("div",{id:"landing",className:"landing-container",children:[Object(r.jsx)("h1",{className:"landing-header",children:"The Art of Living"}),Object(r.jsx)("p",{children:"Designer loft spaces"}),Object(r.jsx)(h.a,{className:"arrow-icon",smooth:!0,to:"#about-section",children:Object(r.jsx)("i",{className:"fas fa-chevron-circle-down"})})]})},f=(i(46),i.p+"static/media/daniil-silantev-sN4u56baSB0-unsplash.b129530a.jpg");var O,g=function(e){var t=e.headline,i=e.description;return Object(r.jsxs)("div",{id:"about-section",className:"about-container",children:[Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h1",{className:"about-headline",children:t}),Object(r.jsx)("p",{children:i}),Object(r.jsx)("div",{className:"button-container",children:Object(r.jsx)(d,{buttonSize:"btn--medium",buttonStyle:"btn--dark",children:"Learn more"})})]}),Object(r.jsx)("div",{className:"about-image",children:Object(r.jsx)("img",{className:"img",src:f,alt:"chair"})})]})},v={headline:"Modern living in the heart of the city",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla eros erat, a placerat nulla molestie quis. Duis rhoncus leo eu erat volutpat suscipit at luctus ligula. Integer at nunc vitae nunc vestibulum lobortis. Nam lacinia mauris velit, sed."},w=i(24),N=i(8),y=(i(47),i(28)),k=i(20),S=N.b.section.withConfig({displayName:"Gallery__GallerySection",componentId:"w7plmf-0"})(["height:100vh;max-height:1100px;position:relative;overflow:hidden;"]),C=N.b.div.withConfig({displayName:"Gallery__GalleryWrapper",componentId:"w7plmf-1"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]),_=N.b.div.withConfig({displayName:"Gallery__GallerySlide",componentId:"w7plmf-2"})(["z-index:1;width:100%;height:100%;"]),I=N.b.div.withConfig({displayName:"Gallery__GallerySlider",componentId:"w7plmf-3"})(['position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:"";position:absolute;z-index:2;width:100%;height:100vh;bottom:0vh;left:0;overflow:hidden;opacity:0.4;background:linear-gradient( 0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 100% );}']),G=N.b.img.withConfig({displayName:"Gallery__GalleryImage",componentId:"w7plmf-4"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;"]),L=N.b.div.withConfig({displayName:"Gallery__GalleryContent",componentId:"w7plmf-5"})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1600px;width:calc(100% - 100px);color:#fff;h1{font-size:clamp(1rem,8vw,2rem);font-weight:400;text-transform:uppercase;text-shadow:0px 0px 20px rgba(0,0,0,0.4);text-align:left;margin-bottom:0.8rem;}p{margin-bottom:1.2rem;text-shadow:0px 0px 20px rgba(0,0,0,0.4);}"]),F=Object(N.b)(y.a).withConfig({displayName:"Gallery__Arrow",componentId:"w7plmf-6"})(["margin-left:0.2rem;position:relative;top:3.1px;"]),T=N.b.div.withConfig({displayName:"Gallery__SliderButtons",componentId:"w7plmf-7"})(["position:absolute;bottom:50px;right:50px;display:flex;z-index:10;"]),A=Object(N.a)(O||(O=Object(w.a)(["\n  width: 30px;\n  height: 30px;\n  color: #565656;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50px;\n  // padding: 10px;\n  margin-right: 1rem;\n  user-select: none;\n  transition: 0.3s;\n\n  &:hover {\n    background: #c09f80;\n    transform: scale(1.05);\n  }\n"]))),z=Object(N.b)(k.a).withConfig({displayName:"Gallery__PrevArrow",componentId:"w7plmf-8"})(["",""],A),V=Object(N.b)(k.b).withConfig({displayName:"Gallery__NextArrow",componentId:"w7plmf-9"})(["",""],A);var E=function(e){var t=e.slides,i=Object(c.useState)(0),n=Object(l.a)(i,2),a=n[0],s=n[1],o=t.length,b=Object(c.useRef)(null);return Object(c.useEffect)((function(){return b.current=setTimeout((function(){s((function(e){return e===o-1?0:e+1}))}),3e3),function(){b.current&&clearTimeout(b.current)}}),[a,o]),!Array.isArray(t)||o<=0?null:Object(r.jsx)(S,{id:"gallerySection",children:Object(r.jsxs)(C,{children:[t.map((function(e,t){return Object(r.jsx)(_,{children:t===a&&Object(r.jsxs)(I,{children:[Object(r.jsx)(G,{src:e.image,alt:e.alt}),Object(r.jsxs)(L,{children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("p",{children:e.price}),Object(r.jsxs)(d,{buttonSize:"btn",to:e.path,children:[e.label,Object(r.jsx)(F,{})]})]})]})},t)})),Object(r.jsxs)(T,{children:[Object(r.jsx)(z,{onClick:function(){b.current&&clearTimeout(b.current),s(0===a?o-1:a-1)}}),Object(r.jsx)(V,{onClick:function(){b.current&&clearTimeout(b.current),s(a===o-1?0:a+1)}})]})]})})},U=[{title:"Luxury space in San Francisco",path:"/login",label:"View space",image:i.p+"static/media/image1.91c54492.jpg",price:"From $2200",alt:"Loft Space"},{title:"Modern home in New Orleans ",path:"/login",label:"View space",image:i.p+"static/media/image2.8ce6fb04.jpg",price:"From $1300",alt:"Loft Space"},{title:"Urban views in New York",path:"/login",label:"View space",image:i.p+"static/media/image3.13a6c045.jpg",price:"From $2100",alt:"Loft Space"},{title:"Rustic loft in Atlanta",path:"/login",label:"View space",image:i.p+"static/media/image4.7184efb7.jpg",price:"From $1400",alt:"Loft Space"},{title:"Spacious loft in Seattle",path:"/login",label:"View space",image:i.p+"static/media/image5.00c7a3d6.jpg",price:"From $2200",alt:"Loft Space"}];var Y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(g,Object(p.a)({},v)),Object(r.jsx)(E,{slides:U})]})},$=(i(50),function(){return Object(r.jsxs)("div",{id:"footer",className:"footer-container",children:[Object(r.jsx)(h.a,{className:"arrow-icon",smooth:!0,to:"#landing",children:Object(r.jsx)("i",{className:"fas fa-chevron-circle-up"})}),Object(r.jsxs)("section",{className:"footer-subscribe",children:[Object(r.jsx)("h1",{className:"footer-subscription-header",children:"Join our newsletter to stay up to date on our listings"}),Object(r.jsx)("p",{className:"footer-description",children:"Unsubscribe any time"}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsxs)("form",{action:"",children:[Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(r.jsx)(d,{buttonStyle:"btn--light",children:"Subscribe"})]})})]}),Object(r.jsxs)("div",{className:"footer-links",children:[Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)(o.b,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(o.b,{to:"/",children:"Testimonials"}),Object(r.jsx)(o.b,{to:"/",children:"Careers"}),Object(r.jsx)(o.b,{to:"/",children:"Investors"}),Object(r.jsx)(o.b,{to:"/",children:"Terms of Service"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Contact Us"}),Object(r.jsx)(o.b,{to:"/",children:"Contact"}),Object(r.jsx)(o.b,{to:"/",children:"Support"}),Object(r.jsx)(o.b,{to:"/",children:"Destinations"}),Object(r.jsx)(o.b,{to:"/",children:"Sponsorships"})]})]}),Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Videos"}),Object(r.jsx)(o.b,{to:"/",children:"Submit Video"}),Object(r.jsx)(o.b,{to:"/",children:"Ambassadors"}),Object(r.jsx)(o.b,{to:"/",children:"Agency"}),Object(r.jsx)(o.b,{to:"/",children:"Influencer"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)(o.b,{to:"/",children:"Instagram"}),Object(r.jsx)(o.b,{to:"/",children:"Facebook"}),Object(r.jsx)(o.b,{to:"/",children:"Youtube"}),Object(r.jsx)(o.b,{to:"/",children:"Twitter"})]})]})]}),Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsxs)(o.b,{to:"/",className:"social-logo",children:["LOFT ",Object(r.jsx)("i",{className:"fab fa-unsplash"})]})}),Object(r.jsx)("small",{className:"website-rights",children:"LOFT \xa9 2021"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(o.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})}),Object(r.jsx)(o.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{className:"fab fa-instagram"})}),Object(r.jsx)(o.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)(o.b,{class:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})});var M=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(u.c,{children:Object(r.jsx)(u.a,{path:"/",exact:!0,component:Y})}),Object(r.jsx)($,{})]})})};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d73d6978.chunk.js.map