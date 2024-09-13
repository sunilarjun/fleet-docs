"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4654],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=l,g=u["".concat(s,".").concat(p)]||u[p]||h[p]||n;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(8168),l=(a(6540),a(5680));const n={title:"v0.9.6",date:"2024-07-17 16:29:25 +0000 UTC"},o=void 0,i={unversionedId:"changelogs/changelogs/v0.9.6",id:"version-0.9/changelogs/changelogs/v0.9.6",title:"v0.9.6",description:"(github-actions[bot]) released this 2024-07-17 1625 +0000 UTC",source:"@site/versioned_docs/version-0.9/changelogs/changelogs/v0.9.6.md",sourceDirName:"changelogs/changelogs",slug:"/changelogs/changelogs/v0.9.6",permalink:"/0.9/changelogs/changelogs/v0.9.6",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/changelogs/changelogs/v0.9.6.md",tags:[],version:"0.9",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{title:"v0.9.6",date:"2024-07-17 16:29:25 +0000 UTC"},sidebar:"docs",previous:{title:"v0.9.5",permalink:"/0.9/changelogs/changelogs/v0.9.5"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Download",id:"download",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"(github-actions","[bot]",") released this 2024-07-17 16:29:25 +0000 UTC*")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("h2",null,"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",null,"Honor Helm's MaxHistory when using drift correction by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/aruiz14/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/aruiz14"},"@aruiz14")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2352976523","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2517","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2517/hovercard",href:"https://github.com/rancher/fleet/pull/2517"},"#2517")),(0,l.yg)("li",null,"Fix drift end-to-end tests and run them in CI by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/weyfonk/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/weyfonk"},"@weyfonk")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2360237616","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2536","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2536/hovercard",href:"https://github.com/rancher/fleet/pull/2536"},"#2536")),(0,l.yg)("li",null,"Ignore status fields during drift detection by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/aruiz14/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/aruiz14"},"@aruiz14")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2365961530","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2546","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2546/hovercard",href:"https://github.com/rancher/fleet/pull/2546"},"#2546")),(0,l.yg)("li",null,"Bump gitjob to 0.9.12 and docker/docker to v23.0.13 by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2394028270","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2614","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2614/hovercard",href:"https://github.com/rancher/fleet/pull/2614"},"#2614")),(0,l.yg)("li",null,"Add strict TLS mode by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/weyfonk/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/weyfonk"},"@weyfonk")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2386591909","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2577","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2577/hovercard",href:"https://github.com/rancher/fleet/pull/2577"},"#2577")),(0,l.yg)("li",null,"Bump go-getter by ",(0,l.yg)("a",{class:"user-mention notranslate","data-hovercard-type":"user","data-hovercard-url":"/users/thardeck/hovercard","data-octo-click":"hovercard-link-click","data-octo-dimensions":"link_type:self",href:"https://github.com/thardeck"},"@thardeck")," in ",(0,l.yg)("a",{class:"issue-link js-issue-link","data-error-text":"Failed to load title","data-id":"2395514580","data-permission-text":"Title is private","data-url":"https://github.com/rancher/fleet/issues/2619","data-hovercard-type":"pull_request","data-hovercard-url":"/rancher/fleet/pull/2619/hovercard",href:"https://github.com/rancher/fleet/pull/2619"},"#2619"))),(0,l.yg)("p",null,(0,l.yg)("strong",null,"Full Changelog"),": ",(0,l.yg)("a",{class:"commit-link",href:"https://github.com/rancher/fleet/compare/v0.9.5...v0.9.6"},(0,l.yg)("tt",null,"v0.9.5...v0.9.6"))),(0,l.yg)("h2",{id:"download"},"Download"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-agent-0.9.6.tgz"},"fleet-agent-0.9.6.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-0.9.6.tgz"},"fleet-0.9.6.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-crd-0.9.6.tgz"},"fleet-crd-0.9.6.tgz"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet_0.9.6_checksums.txt"},"fleet_0.9.6_checksums.txt"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleetagent-linux-amd64"},"fleetagent-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleetcontroller-linux-arm64"},"fleetcontroller-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-linux-arm64"},"fleet-linux-arm64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleetcontroller-linux-amd64"},"fleetcontroller-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-windows-amd64.exe"},"fleet-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleet-linux-amd64"},"fleet-linux-amd64"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleetagent-windows-amd64.exe"},"fleetagent-windows-amd64.exe"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/download/v0.9.6/fleetagent-linux-arm64"},"fleetagent-linux-arm64")))),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Information retrieved from ",(0,l.yg)("a",{parentName:"em",href:"https://github.com/rancher/fleet/releases/tag/v0.9.6"},"here"))))}h.isMDXComponent=!0}}]);