"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4266],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="Overview",s={unversionedId:"index",id:"version-0.8/index",title:"Overview",description:"What is Fleet?",source:"@site/versioned_docs/version-0.8/index.md",sourceDirName:".",slug:"/",permalink:"/0.8/",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.8/index.md",tags:[],version:"0.8",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",next:{title:"Quick Start",permalink:"/0.8/quickstart"}},l={},c=[{value:"What is Fleet?",id:"what-is-fleet",level:3},{value:"Configuration Management",id:"configuration-management",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"overview"},"Overview"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(6336).A,width:"1366",height:"960"})),(0,a.yg)("h3",{id:"what-is-fleet"},"What is Fleet?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Cluster engine"),": Fleet is a container management and deployment engine designed to offer users more control on the local cluster and constant monitoring through ",(0,a.yg)("strong",{parentName:"p"},"GitOps"),". Fleet focuses not only on the ability to scale, but it also gives users a high degree of control and visibility to monitor exactly what is installed on the cluster.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deployment management"),": Fleet can manage deployments from git of raw Kubernetes YAML, Helm charts, Kustomize, or any combination of the three. Regardless of the source, all resources are dynamically turned into Helm charts, and Helm is used as the engine to deploy all resources in the cluster. As a result, users can enjoy a high degree of control, consistency, and auditability of their clusters."))),(0,a.yg)("h3",{id:"configuration-management"},"Configuration Management"),(0,a.yg)("p",null,"Fleet is fundamentally a set of Kubernetes ",(0,a.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/concepts/"},"custom resource definitions (CRDs)")," and controllers that manage GitOps for a single Kubernetes cluster or a large scale deployment of Kubernetes clusters. It is a distributed initialization system that makes it easy to customize applications and manage HA clusters from a single point."))}d.isMDXComponent=!0},6336:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/fleet-architecture-f708ce634648101dc98f451dcd59fe84.svg"}}]);