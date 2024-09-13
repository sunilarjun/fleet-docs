"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3822],{9365:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),n=a(53);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>k});var l=a(8168),n=a(6540),r=a(53),s=a(3104),o=a(6347),u=a(7485),i=a(1682),c=a(9466);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const l=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,i]=m({queryString:a,groupId:l}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),g=(()=>{const e=u??d;return h({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var g=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),l=i[a].value;l!==o&&(d(t),u(l))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},n.createElement(y,(0,l.A)({},e,t)),n.createElement(v,(0,l.A)({},e,t)))}function k(e){const t=(0,g.A)();return n.createElement(w,(0,l.A)({key:String(t)},e))}},7858:(e,t,a)=>{a.d(t,{e:()=>l});const l={"v0.5":{fleet:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-0.5.3.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-agent-0.5.3.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.5.3/fleet-crd-0.5.3.tgz"},"v0.6":{fleet:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-0.6.0.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-agent-0.6.0.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.6.0/fleet-crd-0.6.0.tgz"},next:{kubernetes:"1.20.5"}}},4369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var l=a(8168),n=(a(6540),a(5680)),r=(a(7858),a(2355)),s=a(1470),o=a(9365);const u={},i="Quick Start",c={unversionedId:"quickstart",id:"quickstart",title:"Quick Start",description:"Who needs documentation, lets just run this thing!",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/quickstart.md",tags:[],version:"current",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/"},next:{title:"Creating a Deployment",permalink:"/tut-deployment"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Add a Git Repo to Watch",id:"add-a-git-repo-to-watch",level:2},{value:"Get Status",id:"get-status",level:2}],h={toc:p},m="wrapper";function f(e){let{components:t,...u}=e;return(0,n.yg)(m,(0,l.A)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"quick-start"},"Quick Start"),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(2614).A,width:"520",height:"279"})),(0,n.yg)("p",null,"Who needs documentation, lets just run this thing!"),(0,n.yg)("h2",{id:"install"},"Install"),(0,n.yg)("p",null," Fleet is distributed as a Helm chart. Helm 3 is a CLI, has no server side component, and its use is\nfairly straightforward. To install the Helm 3 CLI follow the ",(0,n.yg)("a",{href:"https://helm.sh/docs/intro/install"},"official install instructions"),"."),(0,n.yg)("admonition",{title:"Fleet in Rancher",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Rancher has separate helm charts for Fleet and uses a different repository.")),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(o.A,{value:"linux",label:"Linux/Mac",default:!0,mdxType:"TabItem"},(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"brew install helm\n","helm repo add fleet https://rancher.github.io/fleet-helm-charts/")),(0,n.yg)(o.A,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"choco install kubernetes-helm\n","helm repo add fleet https://rancher.github.io/fleet-helm-charts/"))),(0,n.yg)("p",null,"Install the Fleet Helm charts (there's two because we separate out CRDs for ultimate flexibility.)"),(0,n.yg)(r.A,{language:"bash",mdxType:"CodeBlock"},"helm -n cattle-fleet-system install --create-namespace --wait fleet-crd \\\n    fleet/fleet-crd\n","helm -n cattle-fleet-system install --create-namespace --wait fleet \\\n    fleet/fleet"),(0,n.yg)("h2",{id:"add-a-git-repo-to-watch"},"Add a Git Repo to Watch"),(0,n.yg)("p",null,"Change ",(0,n.yg)("inlineCode",{parentName:"p"},"spec.repo")," to your git repo of choice.  Kubernetes manifest files that should\nbe deployed should be in ",(0,n.yg)("inlineCode",{parentName:"p"},"/manifests")," in your repo."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'cat > example.yaml << "EOF"\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: sample\n  # This namespace is special and auto-wired to deploy to the local cluster\n  namespace: fleet-local\nspec:\n  # Everything from this repo will be run in this cluster. You trust me right?\n  repo: "https://github.com/rancher/fleet-examples"\n  paths:\n  - simple\nEOF\n\nkubectl apply -f example.yaml\n')),(0,n.yg)("h2",{id:"get-status"},"Get Status"),(0,n.yg)("p",null,"Get status of what fleet is doing"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl -n fleet-local get fleet\n")),(0,n.yg)("p",null,"You should see something like this get created in your cluster."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl get deploy frontend\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   3/3     3            3           116m\n")),(0,n.yg)("p",null,"Enjoy and read the ",(0,n.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"docs"),"."))}f.isMDXComponent=!0},2614:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/single-cluster-72ee1a61547953f123dd741c02cd2017.png"}}]);