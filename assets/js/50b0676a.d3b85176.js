"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6452],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=l,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(8168),l=(n(6540),n(5680));const a={title:"",sidebar_label:"fleet test"},o=void 0,i={unversionedId:"cli/fleet-cli/fleet_test",id:"version-0.8/cli/fleet-cli/fleet_test",title:"",description:"fleet test",source:"@site/versioned_docs/version-0.8/cli/fleet-cli/fleet_test.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_test",permalink:"/0.8/cli/fleet-cli/fleet_test",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.8/cli/fleet-cli/fleet_test.md",tags:[],version:"0.8",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{title:"",sidebar_label:"fleet test"},sidebar:"docs",previous:{title:"fleet apply",permalink:"/0.8/cli/fleet-cli/fleet_apply"},next:{title:"fleet-manager",permalink:"/0.8/cli/fleet-controller/fleet-manager"}},s={},c=[{value:"fleet test",id:"fleet-test",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(f,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"fleet-test"},"fleet test"),(0,l.yg)("p",null,"Match a bundle to a target and render the output"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"fleet test [flags]\n")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  -b, --bundle-file string    Location of the raw Bundle resource yaml\n      --debug                 Turn on debug logging\n      --debug-level int       If debugging is enabled, set klog -v=X\n  -f, --file string           Location of the fleet.yaml\n  -g, --group string          Cluster group to match against\n  -L, --group-label strings   Cluster group labels to match against\n  -h, --help                  help for test\n  -l, --label strings         Cluster labels to match against\n  -N, --name string           Cluster name to match against\n  -q, --quiet                 Just print the match and don't print the resources\n  -t, --target string         Explicit target to match\n")),(0,l.yg)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'      --context string            kubeconfig context for authentication\n  -k, --kubeconfig string         kubeconfig for authentication\n  -n, --namespace string          namespace (default "fleet-local")\n      --system-namespace string   System namespace of the controller (default "cattle-fleet-system")\n')),(0,l.yg)("h3",{id:"see-also"},"SEE ALSO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}u.isMDXComponent=!0}}]);