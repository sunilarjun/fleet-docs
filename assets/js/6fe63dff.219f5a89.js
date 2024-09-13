"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8031],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=i(n),g=l,d=f["".concat(c,".").concat(g)]||f[g]||p[g]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(8168),l=(n(6540),n(5680));const a={title:"",sidebar_label:"fleet-agent clusterstatus"},s=void 0,o={unversionedId:"cli/fleet-agent/fleet-agent_clusterstatus",id:"cli/fleet-agent/fleet-agent_clusterstatus",title:"",description:"fleet-agent clusterstatus",source:"@site/docs/cli/fleet-agent/fleet-agent_clusterstatus.md",sourceDirName:"cli/fleet-agent",slug:"/cli/fleet-agent/fleet-agent_clusterstatus",permalink:"/cli/fleet-agent/fleet-agent_clusterstatus",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-agent/fleet-agent_clusterstatus.md",tags:[],version:"current",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{title:"",sidebar_label:"fleet-agent clusterstatus"},sidebar:"docs",previous:{title:"fleet-agent",permalink:"/cli/fleet-agent/"},next:{title:"fleet-agent register",permalink:"/cli/fleet-agent/fleet-agent_register"}},c={},i=[{value:"fleet-agent clusterstatus",id:"fleet-agent-clusterstatus",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:i},f="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(f,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"fleet-agent-clusterstatus"},"fleet-agent clusterstatus"),(0,l.yg)("p",null,"Continuously report resource status to the upstream cluster"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"fleet-agent clusterstatus [flags]\n")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"      --checkin-interval string   How often to post cluster status\n      --debug                     Turn on debug logging\n      --debug-level int           If debugging is enabled, set klog -v=X\n  -h, --help                      help for clusterstatus\n      --kubeconfig string         kubeconfig file for agent's cluster\n      --namespace string          system namespace is the namespace, the agent runs in, e.g. cattle-fleet-system\n")),(0,l.yg)("h3",{id:"see-also"},"SEE ALSO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./fleet-agent"},"fleet-agent"),"\t -")))}p.isMDXComponent=!0}}]);