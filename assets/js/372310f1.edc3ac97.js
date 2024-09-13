"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6888],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(8168),r=(n(6540),n(5680));const a={},o="Bundle Lifecycle",i={unversionedId:"ref-bundle-stages",id:"version-0.10/ref-bundle-stages",title:"Bundle Lifecycle",description:"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles.",source:"@site/versioned_docs/version-0.10/ref-bundle-stages.md",sourceDirName:".",slug:"/ref-bundle-stages",permalink:"/0.10/ref-bundle-stages",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/ref-bundle-stages.md",tags:[],version:"0.10",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/0.10/concepts"},next:{title:"Git Repository Contents",permalink:"/0.10/gitrepo-content"}},s={},c=[{value:"Examining the Bundle Lifecycle With the CLI",id:"examining-the-bundle-lifecycle-with-the-cli",level:2},{value:"fleet apply",id:"fleet-apply",level:3},{value:"fleet target",id:"fleet-target",level:3},{value:"fleet deploy",id:"fleet-deploy",level:3},{value:"Lifecycle CLI Example",id:"lifecycle-cli-example",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,l.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"bundle-lifecycle"},"Bundle Lifecycle"),(0,r.yg)("p",null,"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles."),(0,r.yg)("p",null,"To demonstrate the life cycle of a Fleet bundle, we will use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"multi-cluster/helm")," as a case study."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"User will create a ",(0,r.yg)("a",{parentName:"li",href:"/0.10/gitrepo-add#create-gitrepo-instance"},"GitRepo")," that points to the multi-cluster/helm repository."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will sync changes from the GitRepo and detect changes from the polling or ",(0,r.yg)("a",{parentName:"li",href:"/0.10/webhook"},"webhook event"),". With every commit change, the ",(0,r.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will create a job that clones the git repository, reads content from the repo such as ",(0,r.yg)("inlineCode",{parentName:"li"},"fleet.yaml")," and other manifests, and creates the Fleet ",(0,r.yg)("a",{parentName:"li",href:"/0.10/cluster-bundles-state#bundles"},"bundle"),".")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note:")," The job pod with the image name ",(0,r.yg)("inlineCode",{parentName:"p"},"rancher/tekton-utils")," will be under the same namespace as the GitRepo.")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"fleet-controller")," then syncs changes from the bundle. According to the targets, the ",(0,r.yg)("inlineCode",{parentName:"li"},"fleet-controller")," will create ",(0,r.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," resources, which are a combination of a bundle and a target cluster."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will then pull the ",(0,r.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," from the Fleet controlplane. The agent deploys bundle manifests as a ",(0,r.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm chart")," from the ",(0,r.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," into the downstream clusters."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will continue to monitor the application bundle and report statuses back in the following order: bundledeployment > bundle > GitRepo > cluster.")),(0,r.yg)("p",null,"This diagram shows the different rendering stages a bundle goes through until deployment."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Bundle Stages",src:n(9561).A,width:"719",height:"811"})),(0,r.yg)("h2",{id:"examining-the-bundle-lifecycle-with-the-cli"},"Examining the Bundle Lifecycle With the CLI"),(0,r.yg)("p",null,"Several fleet CLI commands help with debugging bundles."),(0,r.yg)("h3",{id:"fleet-apply"},"fleet apply"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/0.10/cli/fleet-cli/fleet_apply"},"Apply")," renders a folder with Kubernetes resources, such as a Helm chart, manifests, or kustomize folders, into a Fleet bundle resource."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"git clone https://github.com/rancher/fleet-test-data\ncd fleet-test-data\nfleet apply -n fleet-local -o bundle.yaml testbundle simple-chart/\n")),(0,r.yg)("p",null,"More information on how to create bundles with ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet apply")," can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/bundle-add"},"section on bundles"),"."),(0,r.yg)("h3",{id:"fleet-target"},"fleet target"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/0.10/cli/fleet-cli/fleet_target"},"Target")," reads a bundle from a file and works with a live cluster to print out the ",(0,r.yg)("inlineCode",{parentName:"p"},"bundledeployment")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"content"),' resource, which fleetcontroller would create. It takes a namespace as an argument, so it can look in that namespace for e.g. cluster resources. It can also dump the data structure which is used during "targeting", so decisions taken regarding labels and cluster names can be checked.'),(0,r.yg)("h3",{id:"fleet-deploy"},"fleet deploy"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/0.10/cli/fleet-cli/fleet_deploy"},"Deploy")," takes the output of ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet target"),", or a dumped bundledeployment/content resource and deploys it to a cluster, just like fleet-agent would. It supports a dry run mode, to print out the resources which would be created, instead of installing them with helm. Since the command doesn't create the input resources, a running fleet-agent would likely garbage collect the deployment."),(0,r.yg)("p",null,"The deploy command can be used to bring bundles to air-gapped clusters."),(0,r.yg)("h3",{id:"lifecycle-cli-example"},"Lifecycle CLI Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"git clone https://github.com/rancher/fleet-test-data\ncd fleet-test-data\n# for information about apply see https://fleet.rancher.io/bundle-add\nfleet apply -n fleet-local -o bundle.yaml testbundle simple-chart/\nfleet target --bundle-file bundle.yaml --list-inputs  > bd.yaml\nfleet deploy --input-file bd.yaml --dry-run\n")))}u.isMDXComponent=!0},9561:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/FleetBundleStages-900b0623b70f16e5d1800ea59245458a.svg"}}]);