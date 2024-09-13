"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8568],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const l={},a="Bundle Lifecycle",i={unversionedId:"ref-bundle-stages",id:"version-0.6/ref-bundle-stages",title:"Bundle Lifecycle",description:"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles.",source:"@site/versioned_docs/version-0.6/ref-bundle-stages.md",sourceDirName:".",slug:"/ref-bundle-stages",permalink:"/0.6/ref-bundle-stages",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/ref-bundle-stages.md",tags:[],version:"0.6",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/0.6/concepts"},next:{title:"Git Repository Contents",permalink:"/0.6/gitrepo-content"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,o.yg)(u,(0,r.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"bundle-lifecycle"},"Bundle Lifecycle"),(0,o.yg)("p",null,"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles."),(0,o.yg)("p",null,"To demonstrate the life cycle of a Fleet bundle, we will use ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"multi-cluster/helm")," as a case study."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"User will create a ",(0,o.yg)("a",{parentName:"li",href:"/0.6/gitrepo-add#create-gitrepo-instance"},"GitRepo")," that points to the multi-cluster/helm repository."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will sync changes from the GitRepo and detect changes from the polling or ",(0,o.yg)("a",{parentName:"li",href:"/0.6/webhook"},"webhook event"),". With every commit change, the ",(0,o.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will create a job that clones the git repository, reads content from the repo such as ",(0,o.yg)("inlineCode",{parentName:"li"},"fleet.yaml")," and other manifests, and creates the Fleet ",(0,o.yg)("a",{parentName:"li",href:"/0.6/cluster-bundles-state#bundles"},"bundle"),".")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note:")," The job pod with the image name ",(0,o.yg)("inlineCode",{parentName:"p"},"rancher/tekton-utils")," will be under the same namespace as the GitRepo.")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"fleet-controller")," then syncs changes from the bundle. According to the targets, the ",(0,o.yg)("inlineCode",{parentName:"li"},"fleet-controller")," will create ",(0,o.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," resources, which are a combination of a bundle and a target cluster."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will then pull the ",(0,o.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," from the Fleet controlplane. The agent deploys bundle manifests as a ",(0,o.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm chart")," from the ",(0,o.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," into the downstream clusters."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will continue to monitor the application bundle and report statuses back in the following order: bundledeployment > bundle > GitRepo > cluster.")),(0,o.yg)("p",null,"This diagram shows the different rendering stages a bundle goes through until deployment."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Bundle Stages",src:n(9561).A,width:"719",height:"811"})))}d.isMDXComponent=!0},9561:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/FleetBundleStages-900b0623b70f16e5d1800ea59245458a.svg"}}]);