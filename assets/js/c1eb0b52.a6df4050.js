"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[9937],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=l,f=p["".concat(c,".").concat(g)]||p[g]||m[g]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(8168),l=(n(6540),n(5680));const r={},i="Configuration",o={unversionedId:"ref-configuration",id:"version-0.6/ref-configuration",title:"Configuration",description:"A reference list of, mostly internal, configuration options.",source:"@site/versioned_docs/version-0.6/ref-configuration.md",sourceDirName:".",slug:"/ref-configuration",permalink:"/0.6/ref-configuration",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/ref-configuration.md",tags:[],version:"0.6",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Registration Internals",permalink:"/0.6/ref-registration"},next:{title:"Custom Resources Spec",permalink:"/0.6/ref-crds"}},c={},s=[{value:"Helm Charts",id:"helm-charts",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Configuration",id:"configuration-1",level:2},{value:"Labels",id:"labels",level:2},{value:"Annotations",id:"annotations",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"A reference list of, mostly internal, configuration options."),(0,l.yg)("h2",{id:"helm-charts"},"Helm Charts"),(0,l.yg)("p",null,"The Helm charts accept, at least, the options as shown with their default in ",(0,l.yg)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet/values.yaml")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet-crds/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet-crds/values.yaml")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/charts/fleet-agent/values.yaml"},"https://github.com/rancher/fleet/blob/main/charts/fleet-agent/values.yaml"))),(0,l.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,l.yg)("p",null,"The controllers can be started with these environment variables:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CATTLE_DEV_MODE")," - used to debug wrangler, not usable"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FLEET_CLUSTER_ENQUEUE_DELAY")," - tune how often non-ready clusters are checked"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FLEET_CPU_PPROF_PERIOD")," - used to turn on ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/rancher/fleet/blob/main/docs/performance.md"},"performance profiling"))),(0,l.yg)("h2",{id:"configuration-1"},"Configuration"),(0,l.yg)("p",null,"In cluster configuration for the agent and fleet manager. Changing these can lead to full re-deployments."),(0,l.yg)("p",null,"The config ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/blob/main/pkg/config/config.go#L40-L52"},"struct")," is used in both config maps:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cattle-fleet-system/fleet-agent "),(0,l.yg)("li",{parentName:"ul"},"cattle-fleet-system/fleet-controller ")),(0,l.yg)("h2",{id:"labels"},"Labels"),(0,l.yg)("p",null,"Labels used by fleet:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/agent=true")," - NodeSelector label for agent's deployment affinity setting"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/non-managed-agent")," - managed agent bundle won't target Clusters with this label"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/repo-name")," - used on Bundle to reference the git repo resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-namespace")," - used on BundleDeployment to reference the Bundle resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-name")," - used on BundleDeployment to reference the Bundle resource"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/managed=true")," - cluster namespaces with this label will be cleaned up. Other resources will be cleaned up if it is in a label. Used in Rancher to identify fleet namespaces."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bootstrap-token")," - unused")),(0,l.yg)("h2",{id:"annotations"},"Annotations"),(0,l.yg)("p",null,"Annotations used by fleet:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/agent-namespace")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/bundle-id")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-namespace")," - used on a cluster namespace to reference the cluster registration namespace and cluster name"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-group")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-registration-namespace")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/cluster-registration")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/commit")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/managed")," - appears unused"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"fleet.cattle.io/service-account"))))}m.isMDXComponent=!0}}]);