(($,e,o,t,i,l,r,a,n)=>{"use strict";const s=t.body.classList,d=a.headerType,c=r.theme_url+"/",f=c+"styles/modules/",m=c+"js/modules/",h=r.theme_v;new class{#e=!1;#o=!1;constructor(){const o=this;o.o(),o.#o=!e.is_builder_active&&s.contains("full-section-scrolling"),o.#e=!0===o.#o&&s.contains("full-section-scrolling-horizontal"),o.t(),e.megaMenu(t.tfId("main-nav")),o.i(),o.l(),!0===o.#o&&o.m(),o.h(),o.u(),o.p(),o._(),i((()=>{o.k()}),800),i((()=>{o.v()}),2e3),o.T(t.tfId("loops-wrapper")),i((()=>{o.D()}),3500),o.O(),o.L(),o.M()}h(){const o=this;!1===o.#e&&s.contains("fixed-header-enabled")&&"header-bottom"!==d&&null!==t.tfId("headerwrap")&&e.fixedHeader({watch:!o.#o})}O(){s.contains("revealing-footer")&&null!==t.tfId("footerwrap")&&e.loadJs(m+"revealing-footer",null,h)}T(o){a.infiniteEnable&&e.infinity(o,{scrollToNewOnLoad:a.scrollToNewOnLoad,scrollThreshold:"auto"===a.autoInfinite,history:!!a.infiniteURL&&"replace"}),e.on("infiniteloaded",(()=>{this.k()}))}m(i){const l=this;if(t.tfClass("themify_builder")[0]===n)return void s.remove("full-section-scrolling");if(i&&null!==t.fullscreenElement)return void e.on("tfsmartresize",l.m.bind(l),!0);if(a.f_s_d&&(i?.w||e.w)<~~a.f_s_d)return e.lazyDisable=null,s.remove("full-section-scrolling"),l.#o=!1,e.lazyLoading(),e.on("tfsmartresize",l.m.bind(l),!0),void(o.tbLocalScript?.scrollHighlight&&(delete tbLocalScript.scrollHighlight.scroll,o.ThemifyBuilderModuleJs?.initScrollHighlight()));s.add("full-section-scrolling"),e.lazyDisable=l.#o=!0,Promise.all([e.wow(),e.loadJs(m+"fullpage",null,h)]).then((()=>{e.trigger("themify_theme_fullpage_init",[{is_horizontal:l.#e,has_footer:s.contains("fullpage-footer")}])}))}k(){for(let o=["blur","grayscale","sepia","none"],i=o.length-1;i>-1;--i)t.tfClass("filter-"+o[i])[0]===n&&t.tfClass("filter-hover-"+o[i])[0]===n||e.loadCss(f+"filters/"+o[i],null,h)}l(){const o=t.tfId("headerwrap");if(o){const t=e.selectWithParent("[data-fullwidthvideo]",o);t.length>0&&e.loadJs(m+"header-video",null,h).then((()=>{e.trigger("themify_theme_header_video_init",[t])}))}}u(){o.woocommerce_params!==n&&e.loadJs(m+"wc",null,h)}_(){for(let e=t.tfClass("toggle-sticky-sidebar"),o=e.length-1;o>-1;--o)e[o].tfOn("click",(function(){const e=t.tfId("sidebar"),o=this.classList;o.contains("open-toggle-sticky-sidebar")?(o.remove("open-toggle-sticky-sidebar"),o.add("close-toggle-sticky-sidebar"),e.classList.add("open-mobile-sticky-sidebar","tf_scrollbar")):(o.remove("close-toggle-sticky-sidebar"),o.add("open-toggle-sticky-sidebar"),e.classList.remove("open-mobile-sticky-sidebar","tf_scrollbar"))}),{passive:!0})}M(){if("header-menu-split"===d){const o=e=>{e.w<=r.menu_point?$("#main-nav #site-logo").prependTo(".header-bar"):$(".header-bar #site-logo").prependTo($("#main-nav .themify-logo-menu-item"))};o({w:e.w}),e.on("tfsmartresize",o)}}p(){i((()=>{t.body.tfOn("click",(e=>{const o=e.target;if(o?.closest(".post-content")&&"A"!==o.tagName&&"BUTTON"!==o.tagName){const e=o.closest(".loops-wrapper");if(null!==e){const t=e.classList;if((t.contains("grid6")||t.contains("grid5")||t.contains("grid4")||t.contains("grid3")||t.contains("grid2"))&&(t.contains("polaroid")||t.contains("overlay")||t.contains("flip"))){const e=o.closest(".post").querySelector(".post-image a, .post-title a");e.href&&e.click()}}}}))}),1500)}i(){if("header-horizontal"===d||"header-top-bar"===d||"boxed-compact"===d||"header-stripe"===d){const e=t.tfClass("header-widget")[0];e!==n&&t.tfClass("pull-down")[0]?.tfOn("click",(o=>{o.preventDefault(),o.stopPropagation(),t.tfId("header").classList.toggle("pull-down-close"),$(e).slideToggle("fast")}))}if(e.sideMenu(t.tfId("menu-icon"),{close:"#menu-icon-close",side:"header-leftpane"===d||"header-minbar"===d?"left":"right",hasOverlay:"header-slide-out"!==d&&"header-rightpane"!==d}),r.m_m_expand&&e.on("sidemenushow",(e=>{if("#mobile-menu"===e)for(let e=t.querySelectorAll("#main-nav>li.has-sub-menu"),o=e.length-1;o>-1;--o)e[o].className+=" toggle-on"}),!0),"header-top-widgets"===d){const o=()=>{i((()=>{s.contains("mobile_menu_active")?$(".header-widget-full .header-widget").appendTo("#mobile-menu"):$("#mobile-menu .header-widget").prependTo(".header-widget-full")}),50)};o(),e.on("tfsmartresize",o)}}v(){const i=t.tfClass("back-top"),l=this.#o,r=l?null:t.querySelector(".back-top-float:not(.footer-tab)");if(r){const t=["scroll"],i=function(){r.classList.toggle("back-top-hide",this.scrollY<10)};e.isTouch&&t.push("touchstart","touchmove"),o.tfOn(t,i,{passive:!0})}if(i[0])for(let o=i.length-1;o>-1;--o)i[o].tfOn("click",(function(o){if(o.preventDefault(),o.stopPropagation(),l||this.classList.contains("footer-tab")){const o=t.tfId("footerwrap");o&&(o.classList.remove("tf_hide"),e.lazyScroll(o.querySelectorAll("[data-lazy]"),!0),o.classList.toggle("expanded"))}else e.scrollTo()}))}D(){t.tfId("commentform")&&e.body.on("focus.tfCommentLabel","#commentform input, #commentform textarea",(function(){$(this).closest("p").addClass("focused")})).on("blur.tfCommentLabel","#commentform input, #commentform textarea",(function(){""===this.value?$(this).removeClass("filled").closest("p").removeClass("focused"):$(this).addClass("filled")}))}t(){const t=this;(t.#o||"1"===a.pageLoaderEffect)&&e.on("themify_onepage_afterload",(()=>{s.add("ready-view"),s.remove("hidden-view"),$(".section_loader").fadeOut(500),o.tfOn("beforeunload",(e=>{const o=e.target.activeElement,t=o.getAttribute("href");if("BODY"===o.tagName||"tb_toolbar"===o.getAttribute("id")||o.closest("#tb_toolbar")||t&&(t.includes("tel:")||t.includes("mailto:")))return""}))}),!0,!(t.#o&&!(a.f_s_d&&e.w<=~~a.f_s_d)))}L(){t.tfClass("tf_single_scroll_wrap")[0]&&o.tfOn("scroll",(()=>{e.loadJs(m+"single-infinite",null,h)}),{once:!0,passive:!0})}S(o=!0){const i=t.querySelector('link[href*="dark-mode"]');i?i.disabled=!o:e.loadCss(f+"dark-mode","dark-mode",h,t.body.lastChild),s.toggle("tf_darkmode",o)}o(){const e=a.darkmode;if(e)if(e.start){const o=new Date,t=new Date,i=new Date,l=e.start.split(":"),r=e.end.split(":");t.setHours(l[0],l[1],0),~~r[0]<~~l[0]&&i.setDate(i.getDate()+1),i.setHours(r[0],r[1],0),o>=t&&o<i&&this.S()}else{l.getItem("tf_darkmode")&&this.S();for(let e=t.tfClass("tf_darkmode_toggle"),o=e.length-1;o>-1;--o)e[o].tfOn("click",(e=>{e.preventDefault();const o=!s.contains("tf_darkmode");this.S(o),o?l.setItem("tf_darkmode",1):l.removeItem("tf_darkmode")}))}}}})(jQuery,Themify,window,document,setTimeout,localStorage,themify_vars,themifyScript,void 0);