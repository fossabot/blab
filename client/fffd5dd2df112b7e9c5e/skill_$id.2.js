(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{38:function(e,t,c){"use strict";c.r(t);var n=c(0),l=c(35);var r={correct:new l.Howl({src:["sound/correct.mp3"]}),wrong:new l.Howl({src:["sound/wrong.mp3"]})},a=c(2),s=c(33),i=c(30),o=c.n(i),b=c(31);function j(e){let t,c,l,r,a,s,i,o,b,j,O,g,d,u;return{c(){t=Object(n.x)("li"),c=Object(n.x)("div"),l=Object(n.x)("div"),r=Object(n.x)("figure"),a=Object(n.x)("img"),i=Object(n.V)(),o=Object(n.x)("div"),b=Object(n.x)("div"),j=Object(n.W)(e.formInTargetLanguage),O=Object(n.V)(),g=Object(n.x)("div"),d=Object(n.W)(e.number),this.h()},l(s){t=Object(n.l)(s,"LI",{class:!0});var u=Object(n.j)(t);c=Object(n.l)(u,"DIV",{class:!0,"data-test":!0,"data-test-correct":!0});var p=Object(n.j)(c);l=Object(n.l)(p,"DIV",{class:!0});var h=Object(n.j)(l);r=Object(n.l)(h,"FIGURE",{class:!0});var f=Object(n.j)(r);a=Object(n.l)(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(n.w),h.forEach(n.w),i=Object(n.m)(p),o=Object(n.l)(p,"DIV",{class:!0});var v=Object(n.j)(o);b=Object(n.l)(v,"DIV",{class:!0});var m=Object(n.j)(b);j=Object(n.n)(m,e.formInTargetLanguage),m.forEach(n.w),O=Object(n.m)(v),g=Object(n.l)(v,"DIV",{class:!0});var w=Object(n.j)(g);d=Object(n.n)(w,e.number),w.forEach(n.w),v.forEach(n.w),p.forEach(n.w),u.forEach(n.w),this.h()},h(){a.src!==(s=`images/${e.picture}`)&&Object(n.f)(a,"src",s),Object(n.f)(a,"alt",""),Object(n.f)(a,"class","svelte-11f0dgz"),Object(n.f)(r,"class","image is-1by1"),Object(n.f)(l,"class","card-image svelte-11f0dgz"),Object(n.f)(b,"class","is-size-5 has-text-centered is-size-6-mobile"),Object(n.f)(g,"class","is-size-6 has-text-centered is-hidden-touch is-hidden-tablet-only"),Object(n.f)(o,"class","card-content svelte-11f0dgz"),Object(n.f)(c,"class","card svelte-11f0dgz"),Object(n.f)(c,"data-test",u=e.active?"active":e.inactive?"inactive":"neutral"),Object(n.f)(c,"data-test-correct",e.correct),Object(n.f)(t,"class","svelte-11f0dgz"),Object(n.X)(t,"active",e.active),Object(n.X)(t,"inactive",e.inactive)},m(e,s){Object(n.H)(e,t,s),Object(n.d)(t,c),Object(n.d)(c,l),Object(n.d)(l,r),Object(n.d)(r,a),Object(n.d)(c,i),Object(n.d)(c,o),Object(n.d)(o,b),Object(n.d)(b,j),Object(n.d)(o,O),Object(n.d)(o,g),Object(n.d)(g,d)},p(e,l){e.picture&&a.src!==(s=`images/${l.picture}`)&&Object(n.f)(a,"src",s),e.formInTargetLanguage&&Object(n.U)(j,l.formInTargetLanguage),e.number&&Object(n.U)(d,l.number),(e.active||e.inactive)&&u!==(u=l.active?"active":l.inactive?"inactive":"neutral")&&Object(n.f)(c,"data-test",u),e.correct&&Object(n.f)(c,"data-test-correct",l.correct),e.active&&Object(n.X)(t,"active",l.active),e.inactive&&Object(n.X)(t,"inactive",l.inactive)},i:n.M,o:n.M,d(e){e&&Object(n.w)(t)}}}function O(e,t,c){let{active:n}=t,{inactive:l}=t,{number:r}=t,{picture:a}=t,{correct:s}=t,{formInTargetLanguage:i}=t;return e.$set=e=>{"active"in e&&c("active",n=e.active),"inactive"in e&&c("inactive",l=e.inactive),"number"in e&&c("number",r=e.number),"picture"in e&&c("picture",a=e.picture),"correct"in e&&c("correct",s=e.correct),"formInTargetLanguage"in e&&c("formInTargetLanguage",i=e.formInTargetLanguage)},{active:n,inactive:l,number:r,picture:a,correct:s,formInTargetLanguage:i}}class g extends n.a{constructor(e){var t;super(),document.getElementById("svelte-11f0dgz-style")||((t=Object(n.x)("style")).id="svelte-11f0dgz-style",t.textContent="@keyframes svelte-11f0dgz-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.card.svelte-11f0dgz{transition:opacity 0.15s, outline 0.2s;cursor:pointer}li.svelte-11f0dgz{display:flex;flex-direction:column;width:100%;max-width:20em;margin:0}.card-image.svelte-11f0dgz img.svelte-11f0dgz{object-fit:cover}.inactive.svelte-11f0dgz .card.svelte-11f0dgz{opacity:0.65;outline:1px solid rgba(0, 0, 0, 0)}.svelte-11f0dgz:hover .card.svelte-11f0dgz{outline:1px solid #757763}.active.svelte-11f0dgz .card.svelte-11f0dgz{outline:1px solid #3298dc;box-sizing:content-box}@media screen and (max-width: 768px){.card-content.svelte-11f0dgz{padding:0.75rem}}",Object(n.d)(document.head,t)),Object(n.G)(this,e,O,j,n.S,{active:0,inactive:0,number:0,picture:0,correct:0,formInTargetLanguage:0})}}var d=g;function u(e,t,c){const n=Object.create(e);return n.pictures=t[c].pictures,n.meaningInSourceLanguage=t[c].meaningInSourceLanguage,n.formInTargetLanguage=t[c].formInTargetLanguage,n.correct=t[c].correct,n.i=c,n}function p(e){let t,c,l,r,a,s,i,b,j,O;const g=new d({props:{correct:e.correct,active:e.selectedOption===e.i,inactive:null!==e.selectedOption&&e.selectedOption!==e.i,picture:o()(e.pictures)[0],number:e.i+1,formInTargetLanguage:e.formInTargetLanguage}});return{c(){t=Object(n.x)("label"),c=Object(n.x)("input"),s=Object(n.V)(),Object(n.q)(g.$$.fragment),i=Object(n.V)(),this.h()},l(e){t=Object(n.l)(e,"LABEL",{for:!0,class:!0});var l=Object(n.j)(t);c=Object(n.l)(l,"INPUT",{type:!0,value:!0,name:!0,id:!0,disabled:!0,class:!0}),s=Object(n.m)(l),Object(n.k)(g.$$.fragment,l),i=Object(n.m)(l),l.forEach(n.w),this.h()},h(){Object(n.f)(c,"type","radio"),c.__value=l=e.i,c.value=c.__value,Object(n.f)(c,"name",r=e.i),Object(n.f)(c,"id",a=e.i),c.disabled=e.disabled,Object(n.f)(c,"class","svelte-1qvqrl0"),e.$$binding_groups[0].push(c),Object(n.f)(t,"for",b=e.i),Object(n.f)(t,"class","svelte-1qvqrl0"),O=Object(n.J)(c,"change",e.input_change_handler)},m(l,r){Object(n.H)(l,t,r),Object(n.d)(t,c),c.checked=c.__value===e.selectedOption,Object(n.d)(t,s),Object(n.L)(g,t,null),Object(n.d)(t,i),j=!0},p(e,t){j&&!e.disabled||(c.disabled=t.disabled),e.selectedOption&&(c.checked=c.__value===t.selectedOption);const n={};e.options&&(n.correct=t.correct),e.selectedOption&&(n.active=t.selectedOption===t.i),e.selectedOption&&(n.inactive=null!==t.selectedOption&&t.selectedOption!==t.i),e.options&&(n.picture=o()(t.pictures)[0]),e.options&&(n.formInTargetLanguage=t.formInTargetLanguage),g.$set(n)},i(e){j||(Object(n.Y)(g.$$.fragment,e),j=!0)},o(e){Object(n.Z)(g.$$.fragment,e),j=!1},d(l){l&&Object(n.w)(t),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(c),1),Object(n.u)(g),O()}}}function h(e){let t,c,l=e.options,r=[];for(let t=0;t<l.length;t+=1)r[t]=p(u(e,l,t));const a=e=>Object(n.Z)(r[e],1,1,()=>{r[e]=null});return{c(){t=Object(n.x)("ul");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=Object(n.l)(e,"UL",{class:!0});var c=Object(n.j)(t);for(let e=0;e<r.length;e+=1)r[e].l(c);c.forEach(n.w),this.h()},h(){Object(n.f)(t,"class","options svelte-1qvqrl0")},m(e,l){Object(n.H)(e,t,l);for(let e=0;e<r.length;e+=1)r[e].m(t,null);c=!0},p(e,c){if(e.options||e.selectedOption||e.shuffle||e.disabled){let s;for(l=c.options,s=0;s<l.length;s+=1){const a=u(c,l,s);r[s]?(r[s].p(e,a),Object(n.Y)(r[s],1)):(r[s]=p(a),r[s].c(),Object(n.Y)(r[s],1),r[s].m(t,null))}for(Object(n.E)(),s=l.length;s<r.length;s+=1)a(s);Object(n.i)()}},i(e){if(!c){for(let e=0;e<l.length;e+=1)Object(n.Y)(r[e]);c=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)Object(n.Z)(r[e]);c=!1},d(e){e&&Object(n.w)(t),Object(n.v)(r,e)}}}function f(e,t,c){let{options:n}=t,{selectedOption:l}=t,{disabled:r}=t;Object(a.b)(()=>{Object(s.a)("1,2,3",(e,{key:t})=>{r||c("selectedOption",l=parseInt(t)-1)})});return e.$set=e=>{"options"in e&&c("options",n=e.options),"selectedOption"in e&&c("selectedOption",l=e.selectedOption),"disabled"in e&&c("disabled",r=e.disabled)},{options:n,selectedOption:l,disabled:r,input_change_handler:function(){l=this.__value,c("selectedOption",l)},$$binding_groups:[[]]}}class v extends n.a{constructor(e){var t;super(),document.getElementById("svelte-1qvqrl0-style")||((t=Object(n.x)("style")).id="svelte-1qvqrl0-style",t.textContent="ul.svelte-1qvqrl0{list-style:none;padding:0;margin:0}.options.svelte-1qvqrl0{user-select:none;display:flex;justify-content:center}input.svelte-1qvqrl0{display:none}label.svelte-1qvqrl0{width:100%;padding:1em}",Object(n.d)(document.head,t)),Object(n.G)(this,e,f,h,n.S,{options:0,selectedOption:0,disabled:0})}}var m=v;const w=({currentChallenge:e,alternativeChallenges:t})=>{const c={...e,correct:!0},n=t.map(e=>({...e,correct:!1}));return o()([c,...o()(n).slice(0,2)])};function C(e){let t,c,l,r,a,s,i;return{c(){t=Object(n.x)("div"),c=Object(n.x)("div"),l=Object(n.x)("div"),r=Object(n.x)("button"),a=Object(n.W)("Submit"),this.h()},l(e){t=Object(n.l)(e,"DIV",{class:!0});var s=Object(n.j)(t);c=Object(n.l)(s,"DIV",{class:!0});var i=Object(n.j)(c);l=Object(n.l)(i,"DIV",{class:!0});var o=Object(n.j)(l);r=Object(n.l)(o,"BUTTON",{class:!0,type:!0});var b=Object(n.j)(r);a=Object(n.n)(b,"Submit"),b.forEach(n.w),o.forEach(n.w),i.forEach(n.w),s.forEach(n.w),this.h()},h(){Object(n.f)(r,"class","button is-primary svelte-w4pmjp"),Object(n.f)(r,"type","submit"),Object(n.f)(l,"class","control"),Object(n.f)(c,"class","panel-block svelte-w4pmjp"),Object(n.f)(t,"class","panel is-primary svelte-w4pmjp")},m(e,s){Object(n.H)(e,t,s),Object(n.d)(t,c),Object(n.d)(c,l),Object(n.d)(l,r),Object(n.d)(r,a),i=!0},i(e){i||(Object(n.c)(()=>{s||(s=Object(n.p)(t,b.b,{duration:300},!0)),s.run(1)}),i=!0)},o(e){s||(s=Object(n.p)(t,b.b,{duration:300},!1)),s.run(0),i=!1},d(e){e&&Object(n.w)(t),e&&s&&s.end()}}}function x(e){let t,c,l,r=e.options[e.selectedOption].correct&&I(e),a=!e.options[e.selectedOption].correct&&$(e);return{c(){r&&r.c(),t=Object(n.V)(),a&&a.c(),c=Object(n.y)()},l(e){r&&r.l(e),t=Object(n.m)(e),a&&a.l(e),c=Object(n.y)()},m(e,s){r&&r.m(e,s),Object(n.H)(e,t,s),a&&a.m(e,s),Object(n.H)(e,c,s),l=!0},p(e,l){l.options[l.selectedOption].correct?r?(r.p(e,l),Object(n.Y)(r,1)):((r=I(l)).c(),Object(n.Y)(r,1),r.m(t.parentNode,t)):r&&(Object(n.E)(),Object(n.Z)(r,1,1,()=>{r=null}),Object(n.i)()),l.options[l.selectedOption].correct?a&&(Object(n.E)(),Object(n.Z)(a,1,1,()=>{a=null}),Object(n.i)()):a?(a.p(e,l),Object(n.Y)(a,1)):((a=$(l)).c(),Object(n.Y)(a,1),a.m(c.parentNode,c))},i(e){l||(Object(n.Y)(r),Object(n.Y)(a),l=!0)},o(e){Object(n.Z)(r),Object(n.Z)(a),l=!1},d(e){r&&r.d(e),e&&Object(n.w)(t),a&&a.d(e),e&&Object(n.w)(c)}}}function I(e){let t,c,l,r,a,s,i,o,j;return{c(){t=Object(n.x)("div"),c=Object(n.x)("div"),l=Object(n.x)("div"),r=Object(n.W)("Correct solution!\n            "),a=Object(n.x)("button"),s=Object(n.W)("Continue"),this.h()},l(e){t=Object(n.l)(e,"DIV",{class:!0});var i=Object(n.j)(t);c=Object(n.l)(i,"DIV",{class:!0});var o=Object(n.j)(c);l=Object(n.l)(o,"DIV",{class:!0});var b=Object(n.j)(l);r=Object(n.n)(b,"Correct solution!\n            "),a=Object(n.l)(b,"BUTTON",{class:!0,type:!0});var j=Object(n.j)(a);s=Object(n.n)(j,"Continue"),j.forEach(n.w),b.forEach(n.w),o.forEach(n.w),i.forEach(n.w),this.h()},h(){Object(n.f)(a,"class","button is-primary svelte-w4pmjp"),Object(n.f)(a,"type","submit"),Object(n.f)(l,"class","control"),Object(n.f)(c,"class","panel-block svelte-w4pmjp"),Object(n.f)(t,"class","panel correct is-primary svelte-w4pmjp"),j=Object(n.J)(a,"click",e.finishChallenge)},m(e,i){Object(n.H)(e,t,i),Object(n.d)(t,c),Object(n.d)(c,l),Object(n.d)(l,r),Object(n.d)(l,a),Object(n.d)(a,s),o=!0},p:n.M,i(e){o||(Object(n.c)(()=>{i||(i=Object(n.p)(t,b.b,{duration:300},!0)),i.run(1)}),o=!0)},o(e){i||(i=Object(n.p)(t,b.b,{duration:300},!1)),i.run(0),o=!1},d(e){e&&Object(n.w)(t),e&&i&&i.end(),j()}}}function $(e){let t,c,l,r,a,s,i,o,j;return{c(){t=Object(n.x)("div"),c=Object(n.x)("div"),l=Object(n.x)("div"),r=Object(n.W)("Incorrect solution!\n            "),a=Object(n.x)("button"),s=Object(n.W)("Continue"),this.h()},l(e){t=Object(n.l)(e,"DIV",{class:!0});var i=Object(n.j)(t);c=Object(n.l)(i,"DIV",{class:!0});var o=Object(n.j)(c);l=Object(n.l)(o,"DIV",{class:!0});var b=Object(n.j)(l);r=Object(n.n)(b,"Incorrect solution!\n            "),a=Object(n.l)(b,"BUTTON",{class:!0,type:!0});var j=Object(n.j)(a);s=Object(n.n)(j,"Continue"),j.forEach(n.w),b.forEach(n.w),o.forEach(n.w),i.forEach(n.w),this.h()},h(){Object(n.f)(a,"class","button is-primary svelte-w4pmjp"),Object(n.f)(a,"type","submit"),Object(n.f)(l,"class","control"),Object(n.f)(c,"class","panel-block svelte-w4pmjp"),Object(n.f)(t,"class","panel incorrect is-primary svelte-w4pmjp"),j=Object(n.J)(a,"click",e.finishChallenge)},m(e,i){Object(n.H)(e,t,i),Object(n.d)(t,c),Object(n.d)(c,l),Object(n.d)(l,r),Object(n.d)(l,a),Object(n.d)(a,s),o=!0},p:n.M,i(e){o||(Object(n.c)(()=>{i||(i=Object(n.p)(t,b.b,{duration:300},!0)),i.run(1)}),o=!0)},o(e){i||(i=Object(n.p)(t,b.b,{duration:300},!1)),i.run(0),o=!1},d(e){e&&Object(n.w)(t),e&&i&&i.end(),j()}}}function y(e){let t,c,l,r,a,s,i,o,b,j,O,g,d=e.currentChallenge.meaningInSourceLanguage+"";function u(t){e.optiondeck_selectedOption_binding.call(null,t)}let p={options:e.options,disabled:e.submitted};void 0!==e.selectedOption&&(p.selectedOption=e.selectedOption);const h=new m({props:p});n.h.push(()=>Object(n.g)(h,"selectedOption",u));let f=!e.submitted&&null!==e.selectedOption&&C(),v=e.submitted&&x(e);return{c(){t=Object(n.x)("p"),c=Object(n.W)("Which of these is\n  "),l=Object(n.x)("strong"),r=Object(n.W)(d),a=Object(n.W)("\n  ?"),s=Object(n.V)(),i=Object(n.x)("form"),Object(n.q)(h.$$.fragment),b=Object(n.V)(),f&&f.c(),j=Object(n.V)(),v&&v.c(),this.h()},l(e){t=Object(n.l)(e,"P",{class:!0});var o=Object(n.j)(t);c=Object(n.n)(o,"Which of these is\n  "),l=Object(n.l)(o,"STRONG",{});var O=Object(n.j)(l);r=Object(n.n)(O,d),O.forEach(n.w),a=Object(n.n)(o,"\n  ?"),o.forEach(n.w),s=Object(n.m)(e),i=Object(n.l)(e,"FORM",{});var g=Object(n.j)(i);Object(n.k)(h.$$.fragment,g),b=Object(n.m)(g),f&&f.l(g),j=Object(n.m)(g),v&&v.l(g),g.forEach(n.w),this.h()},h(){Object(n.f)(t,"class","is-size-1 is-size-2-tablet is-size-4-mobile has-text-centered"),g=Object(n.J)(i,"submit",Object(n.Q)(e.submitChallenge))},m(e,o){Object(n.H)(e,t,o),Object(n.d)(t,c),Object(n.d)(t,l),Object(n.d)(l,r),Object(n.d)(t,a),Object(n.H)(e,s,o),Object(n.H)(e,i,o),Object(n.L)(h,i,null),Object(n.d)(i,b),f&&f.m(i,null),Object(n.d)(i,j),v&&v.m(i,null),O=!0},p(e,t){O&&!e.currentChallenge||d===(d=t.currentChallenge.meaningInSourceLanguage+"")||Object(n.U)(r,d);const c={};e.options&&(c.options=t.options),e.submitted&&(c.disabled=t.submitted),!o&&e.selectedOption&&(o=!0,c.selectedOption=t.selectedOption,Object(n.b)(()=>o=!1)),h.$set(c),t.submitted||null===t.selectedOption?f&&(Object(n.E)(),Object(n.Z)(f,1,1,()=>{f=null}),Object(n.i)()):f?Object(n.Y)(f,1):((f=C()).c(),Object(n.Y)(f,1),f.m(i,j)),t.submitted?v?(v.p(e,t),Object(n.Y)(v,1)):((v=x(t)).c(),Object(n.Y)(v,1),v.m(i,null)):v&&(Object(n.E)(),Object(n.Z)(v,1,1,()=>{v=null}),Object(n.i)())},i(e){O||(Object(n.Y)(h.$$.fragment,e),Object(n.Y)(f),Object(n.Y)(v),O=!0)},o(e){Object(n.Z)(h.$$.fragment,e),Object(n.Z)(f),Object(n.Z)(v),O=!1},d(e){e&&Object(n.w)(t),e&&Object(n.w)(s),e&&Object(n.w)(i),Object(n.u)(h),f&&f.d(),v&&v.d(),g()}}}function L(e,t,c){let n,l,r,{currentChallenge:i}=t,{alternativeChallenges:o}=t,{resolveChallenge:b}=t,{registerResult:j}=t,O=null,g=!1;return Object(a.b)(()=>{Object(s.a)("enter",()=>{g?l():r()})}),e.$set=e=>{"currentChallenge"in e&&c("currentChallenge",i=e.currentChallenge),"alternativeChallenges"in e&&c("alternativeChallenges",o=e.alternativeChallenges),"resolveChallenge"in e&&c("resolveChallenge",b=e.resolveChallenge),"registerResult"in e&&c("registerResult",j=e.registerResult)},e.$$.update=(e={currentChallenge:1,alternativeChallenges:1,resolveChallenge:1,registerResult:1,options:1,selectedOption:1})=>{(e.currentChallenge||e.alternativeChallenges)&&c("options",n=w({currentChallenge:i,alternativeChallenges:o})),e.resolveChallenge&&c("finishChallenge",l=()=>{c("selectedOption",O=null),c("submitted",g=!1),b()}),(e.registerResult||e.options||e.selectedOption)&&c("submitChallenge",r=()=>{j(n[O].correct),c("submitted",g=!0)})},{currentChallenge:i,alternativeChallenges:o,resolveChallenge:b,registerResult:j,selectedOption:O,submitted:g,options:n,finishChallenge:l,submitChallenge:r,optiondeck_selectedOption_binding:function(e){c("selectedOption",O=e),c("resolveChallenge",b)}}}class E extends n.a{constructor(e){var t;super(),document.getElementById("svelte-w4pmjp-style")||((t=Object(n.x)("style")).id="svelte-w4pmjp-style",t.textContent="@keyframes svelte-w4pmjp-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.panel.svelte-w4pmjp{position:fixed;left:0;bottom:0;right:0;border-radius:0;background:white}.correct.svelte-w4pmjp{color:#fff;background:#48c774}.incorrect.svelte-w4pmjp{color:#fff;background:#f14668}.panel.svelte-w4pmjp button.svelte-w4pmjp{float:right}.panel-block.svelte-w4pmjp{color:inherit}",Object(n.d)(document.head,t)),Object(n.G)(this,e,L,y,n.S,{currentChallenge:0,alternativeChallenges:0,resolveChallenge:0,registerResult:0})}}var k=E,T=c(36);function V(e){let t,c,l,r,a=100*e.$progress+"";return{c(){t=Object(n.x)("div"),c=Object(n.x)("progress"),l=Object(n.W)(a),r=Object(n.W)("%"),this.h()},l(e){t=Object(n.l)(e,"DIV",{class:!0});var s=Object(n.j)(t);c=Object(n.l)(s,"PROGRESS",{class:!0,value:!0,max:!0});var i=Object(n.j)(c);l=Object(n.n)(i,a),r=Object(n.n)(i,"%"),i.forEach(n.w),s.forEach(n.w),this.h()},h(){Object(n.f)(c,"class","progress"),c.value=e.$progress,Object(n.f)(c,"max","1"),Object(n.f)(t,"class","svelte-1ohqh7x")},m(e,a){Object(n.H)(e,t,a),Object(n.d)(t,c),Object(n.d)(c,l),Object(n.d)(c,r)},p(e,t){e.$progress&&a!==(a=100*t.$progress+"")&&Object(n.U)(l,a),e.$progress&&(c.value=t.$progress)},i:n.M,o:n.M,d(e){e&&Object(n.w)(t)}}}function q(e,t,c){let l,{value:r}=t;const a=Object(T.a)(0);return Object(n.o)(e,a,e=>c("$progress",l=e)),e.$set=e=>{"value"in e&&c("value",r=e.value)},e.$$.update=(e={value:1})=>{e.value&&a.set(r)},{value:r,progress:a,$progress:l}}class z extends n.a{constructor(e){var t;super(),document.getElementById("svelte-1ohqh7x-style")||((t=Object(n.x)("style")).id="svelte-1ohqh7x-style",t.textContent="@keyframes svelte-1ohqh7x-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}div.svelte-1ohqh7x{padding:1rem}",Object(n.d)(document.head,t)),Object(n.G)(this,e,q,V,n.S,{value:0})}}var Y=z;function S(e,t,c){const n=Object.create(e);return n.challenge=t[c],n.i=c,n}function _(e){let t,c,l,r,a;const s=new k({props:{currentChallenge:e.currentChallenge,alternativeChallenges:e.alternativeChallenges,resolveChallenge:e.resolveChallenge,registerResult:e.registerResult}});return{c(){t=Object(n.x)("div"),Object(n.q)(s.$$.fragment),c=Object(n.V)()},l(e){t=Object(n.l)(e,"DIV",{});var l=Object(n.j)(t);Object(n.k)(s.$$.fragment,l),c=Object(n.m)(l),l.forEach(n.w)},m(e,l){Object(n.H)(e,t,l),Object(n.L)(s,t,null),Object(n.d)(t,c),a=!0},p(e,t){const c={};e.currentChallenge&&(c.currentChallenge=t.currentChallenge),e.alternativeChallenges&&(c.alternativeChallenges=t.alternativeChallenges),e.resolveChallenge&&(c.resolveChallenge=t.resolveChallenge),e.registerResult&&(c.registerResult=t.registerResult),s.$set(c)},i(e){a||(Object(n.Y)(s.$$.fragment,e),Object(n.c)(()=>{r&&r.end(1),l||(l=Object(n.r)(t,b.a,{duration:300,delay:300})),l.start()}),a=!0)},o(e){Object(n.Z)(s.$$.fragment,e),l&&l.invalidate(),r=Object(n.s)(t,b.a,{duration:300}),a=!1},d(e){e&&Object(n.w)(t),Object(n.u)(s),e&&r&&r.end()}}}function H(e,t){let c,l,r,a=t.challenge.id===t.currentChallenge.id&&_(t);return{key:e,first:null,c(){c=Object(n.y)(),a&&a.c(),l=Object(n.y)(),this.h()},l(e){c=Object(n.y)(),a&&a.l(e),l=Object(n.y)(),this.h()},h(){this.first=c},m(e,t){Object(n.H)(e,c,t),a&&a.m(e,t),Object(n.H)(e,l,t),r=!0},p(e,t){t.challenge.id===t.currentChallenge.id?a?(a.p(e,t),Object(n.Y)(a,1)):((a=_(t)).c(),Object(n.Y)(a,1),a.m(l.parentNode,l)):a&&(Object(n.E)(),Object(n.Z)(a,1,1,()=>{a=null}),Object(n.i)())},i(e){r||(Object(n.Y)(a),r=!0)},o(e){Object(n.Z)(a),r=!1},d(e){e&&Object(n.w)(c),a&&a.d(e),e&&Object(n.w)(l)}}}function R(e){let t,c,l,r,a=[],s=new Map;const i=new Y({props:{value:e.progress}});let o=e.challenges;const b=e=>e.challenge.id;for(let t=0;t<o.length;t+=1){let c=S(e,o,t),n=b(c);s.set(n,a[t]=H(n,c))}return{c(){t=Object(n.V)(),Object(n.q)(i.$$.fragment),c=Object(n.V)(),l=Object(n.x)("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=Object(n.m)(e),Object(n.k)(i.$$.fragment,e),c=Object(n.m)(e),l=Object(n.l)(e,"DIV",{class:!0});var r=Object(n.j)(l);for(let e=0;e<a.length;e+=1)a[e].l(r);r.forEach(n.w),this.h()},h(){document.title="Exercise",Object(n.f)(l,"class","container")},m(e,s){Object(n.H)(e,t,s),Object(n.L)(i,e,s),Object(n.H)(e,c,s),Object(n.H)(e,l,s);for(let e=0;e<a.length;e+=1)a[e].m(l,null);r=!0},p(e,t){const c={};e.progress&&(c.value=t.progress),i.$set(c);const r=t.challenges;Object(n.E)(),a=Object(n.ab)(a,e,b,1,t,r,s,l,n.P,H,null,S),Object(n.i)()},i(e){if(!r){Object(n.Y)(i.$$.fragment,e);for(let e=0;e<o.length;e+=1)Object(n.Y)(a[e]);r=!0}},o(e){Object(n.Z)(i.$$.fragment,e);for(let e=0;e<a.length;e+=1)Object(n.Z)(a[e]);r=!1},d(e){e&&Object(n.w)(t),Object(n.u)(i,e),e&&Object(n.w)(c),e&&Object(n.w)(l);for(let e=0;e<a.length;e+=1)a[e].d()}}}c.d(t,"preload",(function(){return Z}));const D={animals:[{id:4,pictures:["lion1.jpg","lion2.jpg","lion3.jpg"],meaningInSourceLanguage:"lion",formInTargetLanguage:"león"},{id:3,pictures:["cat1.jpg","cat2.jpg","cat3.jpg"],meaningInSourceLanguage:"cat",formInTargetLanguage:"gato"},{id:42,pictures:["dog1.jpg","dog2.jpg","dog3.jpg"],meaningInSourceLanguage:"dog",formInTargetLanguage:"perro"},{id:888,pictures:["duck1.jpg","duck2.jpg","duck3.jpg"],meaningInSourceLanguage:"duck",formInTargetLanguage:"pato"},{id:202,pictures:["bear1.jpg","bear2.jpg","bear3.jpg"],meaningInSourceLanguage:"bear",formInTargetLanguage:"oso"}],food:[{id:44543,pictures:["pasta1.jpg","pasta2.jpg","pasta3.jpg"],meaningInSourceLanguage:"pasta",formInTargetLanguage:"pasta"},{id:4543,pictures:["milk1.jpg","milk2.jpg","milk3.jpg"],meaningInSourceLanguage:"milk",formInTargetLanguage:"leche"},{id:4542,pictures:["bread1.jpg","bread2.jpg","bread3.jpg"],meaningInSourceLanguage:"bread",formInTargetLanguage:"pan"}]};async function Z(e,t){const{id:c}=e.params;return{rawChallenges:D[c]}}function W(e,t,c){let{rawChallenges:n}=t,l=o()(n),a=[...l],s=a.shift(),i=[],b=0;const j=e=>{"undefined"!=typeof Image&&((new Image).src=`images/${e}`)};let O,g,d;return l.map(({pictures:e})=>e.map(j)),e.$set=e=>{"rawChallenges"in e&&c("rawChallenges",n=e.rawChallenges)},e.$$.update=(e={remainingChallenges:1,challenges:1,currentChallenge:1,solvedChallenges:1})=>{e.remainingChallenges&&c("resolveChallenge",d=()=>{c("currentChallenge",s=a.shift())}),(e.challenges||e.currentChallenge)&&c("alternativeChallenges",O=l.filter(({id:e})=>e!==s.id)),(e.solvedChallenges||e.currentChallenge||e.remainingChallenges||e.challenges)&&c("registerResult",g=e=>{e?(r.correct.play(),i.push(s)):(r.wrong.play(),a.push(s)),c("progress",b=i.length/l.length)})},{rawChallenges:n,challenges:l,currentChallenge:s,progress:b,alternativeChallenges:O,registerResult:g,resolveChallenge:d}}class U extends n.a{constructor(e){super(),Object(n.G)(this,e,W,R,n.S,{rawChallenges:0})}}t.default=U}}]);