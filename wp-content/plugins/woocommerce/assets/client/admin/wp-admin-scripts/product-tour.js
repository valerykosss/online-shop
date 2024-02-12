(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.wp.element,o=window.wp.i18n,r=window.wc.components,c=window.wc.tracks,n=({iframeSelector:e,isActive:o})=>((0,t.useEffect)((()=>{if(!o)return;const t=(({iframeSelector:e,childSelector:t,className:o})=>{const r=document.querySelector(e),c=r?.contentDocument||r?.contentWindow&&r?.contentWindow.document;if(c){const e=()=>r?.classList.add(o),n=()=>r?.classList.remove(o),i=c.querySelector(t);return i?.addEventListener("focus",e),i?.addEventListener("blur",n),()=>{i?.removeEventListener("focus",e),i?.removeEventListener("blur",n)}}return()=>({})})({iframeSelector:`${e}`,childSelector:"#tinymce",className:"focus-within"});return()=>{t()}}),[o,e]),{style:o?`\n\t\t\t\t${e}.focus-within {\n\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t}\n\t\t\t\t`:null}),i=({editorWrapSelector:e})=>{const o=(0,t.useRef)(document.querySelector(e));o||console.warn(`Editor Wrap ${e} not found`);const[r,c]=(0,t.useState)(o.current&&o.current.classList.contains("html-active")?"html":"tmce");return(0,t.useEffect)((()=>{const t=e=>{e.target&&c(e.target.classList.contains("switch-html")?"html":"tmce")},o=document.querySelector(`${e} .switch-tmce`);o?.addEventListener("click",t);const r=document.querySelector(`${e} .switch-html`);return r?.addEventListener("click",t),()=>{o?.removeEventListener("click",t),r?.removeEventListener("click",t)}}),[e]),{activeEditor:r,isTmce:"tmce"===r,isHtml:"html"===r}},d=e=>document.querySelector(e).value,s=e=>{const t=document.querySelector(e),o=t?.contentWindow?.document.querySelector("#tinymce");return o?.innerHTML||""},a=e=>document.querySelector(e)?.value||"",u=e=>e?s("#content_ifr"):a("#wp-content-editor-container > .wp-editor-area"),l=e=>e?s("#excerpt_ifr"):a("#wp-excerpt-editor-container > .wp-editor-area"),p=document.createElement("div");p.setAttribute("id","product-tour-root"),(0,t.render)((0,t.createElement)((()=>{const[e,s]=(0,t.useState)(!1),{setIsLoaded:a,hasUpdatedInfo:p}=(()=>{const{isTmce:e}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:o}=i({editorWrapSelector:"#wp-excerpt-wrap"}),[r,c]=(0,t.useState)({}),[n,s]=(0,t.useState)(!1),a=(0,t.useCallback)((()=>({"product-name":d("#title"),"product-description":u(e),"product-data":d("#_regular_price"),"product-short-description":l(o),"product-image":document.querySelector("#set-post-thumbnail img")?.src||"","product-tags":Array.from(document.querySelectorAll("#product_tag li")).map((e=>e.lastChild.textContent)).join(","),"product-categories":Array.from(document.querySelectorAll("#product_cat-all #product_catchecklist input")).map((e=>e.checked)).join(",")})),[e,o]),p=(0,t.useCallback)((e=>{const t=a();return r[e]!==t[e]&&""!==t[e]}),[a,r]);return(0,t.useEffect)((()=>{n&&c(a())}),[c,n,a]),{setIsLoaded:s,hasUpdatedInfo:p}})(),{isTmce:m}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:w}=i({editorWrapSelector:"#wp-excerpt-wrap"}),{style:h}=n({isActive:e&&m,iframeSelector:"#content_ifr"}),{style:f}=n({isActive:e&&w,iframeSelector:"#excerpt_ifr"}),g=(({isExcerptEditorTmceActive:e,isContentEditorTmceActive:t,closeHandler:r,onNextStepHandler:c})=>({placement:"bottom-start",options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:"#wpwrap"}},arrowIndicator:!0,autoScroll:{behavior:"auto",block:"center"},liveResize:{mutation:!0,resize:!0,rootElementSelector:"#wpwrap"}},popperModifiers:[{name:"arrow",options:{padding:({popper:e})=>({right:e.width-34})}}],callbacks:{onNextStep:c}},steps:[{referenceElements:{desktop:"#title"},focusElement:{desktop:"#title"},meta:{name:"product-name",heading:(0,o.__)("Product name","woocommerce"),descriptions:{desktop:(0,o.__)("Start typing your new product name here. This will be what your customers will see in your store.","woocommerce")}}},{referenceElements:{desktop:"#postdivrich"},focusElement:{iframe:t?"#content_ifr":void 0,desktop:t?"#tinymce":"#wp-content-editor-container > .wp-editor-area"},meta:{name:"product-description",heading:(0,o.__)("Add your product description","woocommerce"),descriptions:{desktop:(0,o.__)("Add your full product description here. Describe your product in detail.","woocommerce")}}},{referenceElements:{desktop:"#woocommerce-product-data"},focusElement:{desktop:"#_regular_price"},meta:{name:"product-data",heading:(0,o.__)("Add your product data","woocommerce"),descriptions:{desktop:(0,o.__)("Use the tabs to switch between sections and insert product details. Start by adding your product price.","woocommerce")}}},{referenceElements:{desktop:"#postexcerpt"},focusElement:{iframe:e?"#excerpt_ifr":void 0,desktop:e?"#tinymce":"#wp-excerpt-editor-container > .wp-editor-area"},meta:{name:"product-short-description",heading:(0,o.__)("Add your short product description","woocommerce"),descriptions:{desktop:(0,o.__)("Type a quick summary for your product here. This will appear on the product page right under the product name.","woocommerce")}}},{referenceElements:{desktop:"#postimagediv"},focusElement:{desktop:"#set-post-thumbnail"},meta:{name:"product-image",heading:(0,o.__)("Add your product image","woocommerce"),descriptions:{desktop:(0,o.__)("Upload an image to your product here. Ideally a JPEG or PNG about 600 px wide or bigger. This image will be shown in your store’s catalog.","woocommerce")}}},{referenceElements:{desktop:"#tagsdiv-product_tag"},focusElement:{desktop:"#new-tag-product_tag"},meta:{name:"product-tags",heading:(0,o.__)("Add your product tags","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product tags here. Tags are a method of labeling your products to make them easier for customers to find. For example, if you sell clothing, and you have a lot of cat prints, you could make a tag for “cat.”","woocommerce")}}},{referenceElements:{desktop:"#product_catdiv"},meta:{name:"product-categories",heading:(0,o.__)("Add your product categories","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product categories here. Assign categories to your products to make them easier to browse through and find in your store.","woocommerce")}}},{referenceElements:{desktop:"#submitdiv"},focusElement:{desktop:"#submitdiv"},meta:{name:"publish",heading:(0,o.__)("Publish your product 🎉","woocommerce"),descriptions:{desktop:(0,o.__)("Good work! Now you can publish your product to your store by hitting the “Publish” button or keep editing it.","woocommerce")},primaryButton:{text:(0,o.__)("Keep editing","woocommerce")}}}],closeHandler:r}))({isContentEditorTmceActive:m,isExcerptEditorTmceActive:w,closeHandler:(e,t)=>{s(!1),e.length-1===t?(0,c.recordEvent)("walkthrough_product_completed"):(0,c.recordEvent)("walkthrough_product_dismissed",{step_name:e[t].meta.name})},onNextStepHandler:e=>{const t=g.steps[e].meta.name;(0,c.recordEvent)("walkthrough_product_step_completed",{step_name:t,added_info:p(t)?"yes":"no"})}});return(0,t.useEffect)((()=>{var e;if(e=e=>{e.preventDefault(),s(!0),(0,c.recordEvent)("walkthrough_product_enable_button_click")},window.document.querySelector(".wp-heading-inline + .page-title-action")?.addEventListener("click",e),"true"===new URLSearchParams(window.location.search).get("tutorial")){const e=((e,t,o)=>{const r=document.querySelector(e);let n=r?.getBoundingClientRect().top;const i=setInterval((()=>{const e=r?.getBoundingClientRect().top;n===e&&(s(!0),(0,c.recordEvent)("walkthrough_product_view",{spotlight:"yes",product_template:"physical"}),a(!0),clearInterval(i)),n=e}),500);return i})(g.steps[0].referenceElements?.desktop||"");return()=>clearInterval(e)}}),[]),(e=>{const o=(0,t.useRef)((()=>{}));(0,t.useEffect)((()=>(e?o.current=(e=>{const t=window.document.querySelector("#publish");return t&&t.addEventListener("click",e),function(){t?.removeEventListener("click",e)}})((()=>{(0,c.recordEvent)("walkthrough_product_completed")})):(o.current(),o.current=()=>{}),function(){o.current()})),[e])})(e),e?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,h,f,".wp-editor-area:focus {\n\t\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t\t}"),(0,t.createElement)(r.TourKit,{config:g})):null}),null),document.body.appendChild(p)),(window.wc=window.wc||{}).productTour=e})();