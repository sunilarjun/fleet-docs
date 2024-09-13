"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5174],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const l={},o="Expected Repo Structure",i={unversionedId:"gitrepo-structure",id:"version-0.4/gitrepo-structure",title:"Expected Repo Structure",description:"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a fleet.yaml is found.",source:"@site/versioned_docs/version-0.4/gitrepo-structure.md",sourceDirName:".",slug:"/gitrepo-structure",permalink:"/0.4/gitrepo-structure",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/gitrepo-structure.md",tags:[],version:"0.4",lastUpdatedAt:1725883291,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Adding a GitRepo",permalink:"/0.4/gitrepo-add"},next:{title:"Mapping to Downstream Clusters",permalink:"/0.4/gitrepo-targets"}},s={},p=[{value:"How repos are scanned",id:"how-repos-are-scanned",level:2},{value:"<code>fleet.yaml</code>",id:"fleetyaml",level:2},{value:"Reference",id:"reference",level:3},{value:"Private Helm Repositories",id:"private-helm-repositories",level:3},{value:"Using ValuesFrom",id:"using-valuesfrom",level:3},{value:"Per Cluster Customization",id:"per-cluster-customization",level:2},{value:"Raw YAML Resource Customization",id:"raw-yaml-resource-customization",level:2},{value:"Cluster and Bundle state",id:"cluster-and-bundle-state",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"expected-repo-structure"},"Expected Repo Structure"),(0,r.yg)("p",null,"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is found."),(0,r.yg)("p",null,"Each bundle is created from paths in a GitRepo and modified further by reading the discovered ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," file.\nBundle lifecycles are tracked between releases by the helm releaseName field added to each bundle. If the releaseName is not\nspecified within fleet.yaml it is generated from ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo.name + path"),". Long names are truncated and a ",(0,r.yg)("inlineCode",{parentName:"p"},"-<hash>")," prefix is added."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The git repository has no explicitly required structure.")," It is important\nto realize the scanned resources will be saved as a resource in Kubernetes so\nyou want to make sure the directories you are scanning in git do not contain\narbitrarily large resources. Right now there is a limitation that the resources\ndeployed must ",(0,r.yg)("strong",{parentName:"p"},"gzip to less than 1MB"),"."),(0,r.yg)("h2",{id:"how-repos-are-scanned"},"How repos are scanned"),(0,r.yg)("p",null,"Multiple paths can be defined for a ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," and each path is scanned independently.\nInternally each scanned path will become a ",(0,r.yg)("a",{parentName:"p",href:"/0.4/concepts"},"bundle")," that Fleet will manage,\ndeploy, and monitor independently."),(0,r.yg)("p",null,"The following files are looked for to determine the how the resources will be deployed."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"File"),(0,r.yg)("th",{parentName:"tr",align:null},"Location"),(0,r.yg)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Chart.yaml"),":"),(0,r.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.yg)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,r.yg)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,r.yg)("td",{parentName:"tr",align:null},"The resources will be deployed as a Helm chart. Refer to the ",(0,r.yg)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"kustomization.yaml"),":"),(0,r.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.yg)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,r.yg)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,r.yg)("td",{parentName:"tr",align:null},"The resources will be deployed using Kustomize. Refer to the ",(0,r.yg)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"fleet.yaml")),(0,r.yg)("td",{parentName:"tr",align:null},"Any subpath"),(0,r.yg)("td",{parentName:"tr",align:null},"If any fleet.yaml is found a new ",(0,r.yg)("a",{parentName:"td",href:"/0.4/concepts"},"bundle")," will be defined. This allows mixing charts, kustomize, and raw YAML in the same repo")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"}," *.yaml ")),(0,r.yg)("td",{parentName:"tr",align:null},"Any subpath"),(0,r.yg)("td",{parentName:"tr",align:null},"If a ",(0,r.yg)("inlineCode",{parentName:"td"},"Chart.yaml")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"kustomization.yaml")," is not found then any ",(0,r.yg)("inlineCode",{parentName:"td"},".yaml")," or ",(0,r.yg)("inlineCode",{parentName:"td"},".yml")," file will be assumed to be a Kubernetes resource and will be deployed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"overlays/{name}")),(0,r.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.yg)("inlineCode",{parentName:"td"},"path")),(0,r.yg)("td",{parentName:"tr",align:null},"When deploying using raw YAML (not Kustomize or Helm) ",(0,r.yg)("inlineCode",{parentName:"td"},"overlays")," is a special directory for customizations.")))),(0,r.yg)("h2",{id:"fleetyaml"},(0,r.yg)("inlineCode",{parentName:"h2"},"fleet.yaml")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is an optional file that can be included in the git repository to change the behavior of how\nthe resources are deployed and customized.  The ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is always at the root relative to the ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo"),"\nand if a subdirectory is found with a ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," a new ",(0,r.yg)("a",{parentName:"p",href:"/0.4/concepts"},"bundle")," is defined that will then be\nconfigured differently from the parent bundle."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Helm chart dependencies"),":\nIt is up to the user to fulfill the dependency list for the Helm charts. As such, you must manually run ",(0,r.yg)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,r.yg)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," prior to install. See the ",(0,r.yg)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/#helm-chart-dependencies"},"Fleet docs")," in Rancher for more information.")),(0,r.yg)("h3",{id:"reference"},"Reference"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"How changes are applied to ",(0,r.yg)("inlineCode",{parentName:"strong"},"values.yaml")),":"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Note that the most recently applied changes to the ",(0,r.yg)("inlineCode",{parentName:"p"},"values.yaml")," will override any previously existing values.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When changes are applied to the ",(0,r.yg)("inlineCode",{parentName:"p"},"values.yaml")," from multiple sources at the same time, the values will update in the following order: ",(0,r.yg)("inlineCode",{parentName:"p"},"helmValues")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"helm.valuesFiles")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"helm.valuesFrom"),".")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'# The default namespace to be applied to resources. This field is not used to\n# enforce or lock down the deployment to a specific namespace, but instead\n# provide the default value of the namespace field if one is not specified\n# in the manifests.\n# Default: default\ndefaultNamespace: default\n\n# All resources will be assigned to this namespace and if any cluster scoped\n# resource exists the deployment will fail.\n# Default: ""\nnamespace: default\n\nkustomize:\n  # Use a custom folder for kustomize resources. This folder must contain\n  # a kustomization.yaml file.\n  dir: ./kustomize\n\nhelm:\n  # Use a custom location for the Helm chart. This can refer to any go-getter URL or\n  # OCI registry based helm chart URL e.g. "oci://ghcr.io/fleetrepoci/guestbook".\n  # This allows one to download charts from most any location.  Also know that\n  # go-getter URL supports adding a digest to validate the download. If repo\n  # is set below this field is the name of the chart to lookup\n  chart: ./chart\n  # A https URL to a Helm repo to download the chart from. It\'s typically easier\n  # to just use `chart` field and refer to a tgz file.  If repo is used the\n  # value of `chart` will be used as the chart name to lookup in the Helm repository.\n  repo: https://charts.rancher.io\n  # A custom release name to deploy the chart as. If not specified a release name\n  # will be generated by combining the invoking GitRepo.name + GitRepo.path.\n  releaseName: my-release\n  # The version of the chart or semver constraint of the chart to find. If a constraint\n  # is specified it is evaluated each time git changes.\n  # The version also determines which chart to download from OCI registries.\n  version: 0.1.0\n  # Any values that should be placed in the `values.yaml` and passed to helm during\n  # install.\n  values:\n    any-custom: value\n  # All labels on Rancher clusters are available using global.fleet.clusterLabels.LABELNAME\n  # These can now be accessed directly as variables\n    variableName: global.fleet.clusterLabels.LABELNAME\n  # Path to any values files that need to be passed to helm during install\n  valuesFiles:\n    - values1.yaml\n    - values2.yaml\n  # Allow to use values files from configmaps or secrets defined in the downstream clusters\n  valuesFrom:\n  - configMapKeyRef:\n      name: configmap-values\n      # default to namespace of bundle\n      namespace: default \n      key: values.yaml\n    secretKeyRef:\n      name: secret-values\n      namespace: default\n      key: values.yaml\n  # Override immutable resources. This could be dangerous.\n  force: false\n  # Set the Helm --atomic flag when upgrading\n  atomic: false\n\n# A paused bundle will not update downstream clusters but instead mark the bundle\n# as OutOfSync. One can then manually confirm that a bundle should be deployed to\n# the downstream clusters.\n# Default: false\npaused: false\n\nrolloutStrategy:\n    # A number or percentage of clusters that can be unavailable during an update\n    # of a bundle. This follows the same basic approach as a deployment rollout\n    # strategy. Once the number of clusters meets unavailable state update will be\n    # paused. Default value is 100% which doesn\'t take effect on update.\n    # default: 100%\n    maxUnavailable: 15%\n    # A number or percentage of cluster partitions that can be unavailable during\n    # an update of a bundle.\n    # default: 0\n    maxUnavailablePartitions: 20%\n    # A number of percentage of how to automatically partition clusters if not\n    # specific partitioning strategy is configured.\n    # default: 25%\n    autoPartitionSize: 10%\n    # A list of definitions of partitions.  If any target clusters do not match\n    # the configuration they are added to partitions at the end following the\n    # autoPartitionSize.\n    partitions:\n      # A user friend name given to the partition used for Display (optional).\n      # default: ""\n    - name: canary\n      # A number or percentage of clusters that can be unavailable in this\n      # partition before this partition is treated as done.\n      # default: 10%\n      maxUnavailable: 10%\n      # Selector matching cluster labels to include in this partition\n      clusterSelector:\n        matchLabels:\n          env: prod\n      # A cluster group name to include in this partition\n      clusterGroup: agroup\n      # Selector matching cluster group labels to include in this partition\n      clusterGroupSelector: agroup\n      \n# Target customization are used to determine how resources should be modified per target\n# Targets are evaluated in order and the first one to match a cluster is used for that cluster.\ntargetCustomizations:\n# The name of target. If not specified a default name of the format "target000"\n# will be used. This value is mostly for display\n- name: prod\n  # Custom namespace value overriding the value at the root\n  namespace: newvalue\n  # Custom defaultNamespace value overriding the value at the root\n  defaultNamespace: newdefaultvalue\n  # Custom kustomize options overriding the options at the root\n  kustomize: {}\n  # Custom Helm options override the options at the root\n  helm: {}\n  # If using raw YAML these are names that map to overlays/{name} that will be used\n  # to replace or patch a resource. If you wish to customize the file ./subdir/resource.yaml\n  # then a file ./overlays/myoverlay/subdir/resource.yaml will replace the base file.\n  # A file named ./overlays/myoverlay/subdir/resource_patch.yaml will patch the base file.\n  # A patch can in JSON Patch or JSON Merge format or a strategic merge patch for builtin\n  # Kubernetes types. Refer to "Raw YAML Resource Customization" below for more information.\n  yaml:\n    overlays:\n    - custom2\n    - custom3\n  # A selector used to match clusters.  The structure is the standard\n  # metav1.LabelSelector format. If clusterGroupSelector or clusterGroup is specified,\n  # clusterSelector will be used only to further refine the selection after\n  # clusterGroupSelector and clusterGroup is evaluated.\n  clusterSelector:\n    matchLabels:\n      env: prod\n  # A selector used to match a specific cluster by name.    \n  clusterName: dev-cluster    \n  # A selector used to match cluster groups.\n  clusterGroupSelector:\n    matchLabels:\n      region: us-east\n  # A specific clusterGroup by name that will be selected\n  clusterGroup: group1\n\n# dependsOn allows you to configure dependencies to other bundles. The current bundle\n# will only be deployed, after all dependencies are deployed and in a Ready state.\ndependsOn:\n  # Format: <GITREPO-NAME>-<BUNDLE_PATH> with all path separators replaced by "-"\n  # Example: GitRepo name "one", Bundle path "/multi-cluster/hello-world" => "one-multi-cluster-hello-world"\n  - name: one-multi-cluster-hello-world\n')),(0,r.yg)("h3",{id:"private-helm-repositories"},"Private Helm Repositories"),(0,r.yg)("p",null,"For a private Helm repo, users can reference a secret from the git repo resource.\nSee ",(0,r.yg)("a",{parentName:"p",href:"gitrepo-add#using-private-helm-repositories"},"Using Private Helm Repositories")," for more information."),(0,r.yg)("h3",{id:"using-valuesfrom"},"Using ValuesFrom"),(0,r.yg)("p",null,"These examples showcase the style and format for using ",(0,r.yg)("inlineCode",{parentName:"p"},"valuesFrom"),". ConfigMaps and Secrets should be created in downstream clusters."),(0,r.yg)("p",null,"Example ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"ConfigMap"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: configmap-values\n  namespace: default\ndata:  \n  values.yaml: |-\n    replication: true\n    replicas: 2\n    serviceType: NodePort\n")),(0,r.yg)("p",null,"Example ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: secret-values\n  namespace: default\nstringData:\n  values.yaml: |-\n    replication: true\n    replicas: 2\n    serviceType: NodePort\n")),(0,r.yg)("h2",{id:"per-cluster-customization"},"Per Cluster Customization"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," defines which clusters a git repository should be deployed to and the ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," in the repository\ndetermines how the resources are customized per target."),(0,r.yg)("p",null,"All clusters and cluster groups in the same namespace as the ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," will be evaluated against all targets of that\n",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo"),". The targets list is evaluated one by one and if there is a match the resource will be deployed to the cluster.\nIf no match is made against the target list on the ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," then the resources will not be deployed to that cluster.\nOnce a target cluster is matched the ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," from the git repository is then consulted for customizations. The\n",(0,r.yg)("inlineCode",{parentName:"p"},"targetCustomizations")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," will be evaluated one by one and the first match will define how the\nresource is to be configured. If no match is made the resources will be deployed with no additional customizations."),(0,r.yg)("p",null,"There are three approaches to matching clusters for both ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," ",(0,r.yg)("inlineCode",{parentName:"p"},"targets")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," ",(0,r.yg)("inlineCode",{parentName:"p"},"targetCustomizations"),'.\nOne can use cluster selectors, cluster group selectors, or an explicit cluster group name.  All criteria is additive so\nthe final match is evaluated as "clusterSelector && clusterGroupSelector && clusterGroup".  If any of the three have the\ndefault value it is dropped from the criteria.  The default value is either null or "".  It is important to realize\nthat the value ',(0,r.yg)("inlineCode",{parentName:"p"},"{}"),' for a selector means "match everything."'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# Match everything\nclusterSelector: {}\n# Selector ignored\nclusterSelector: null\n")),(0,r.yg)("h2",{id:"raw-yaml-resource-customization"},"Raw YAML Resource Customization"),(0,r.yg)("p",null,"When using Kustomize or Helm the ",(0,r.yg)("inlineCode",{parentName:"p"},"kustomization.yaml")," or the ",(0,r.yg)("inlineCode",{parentName:"p"},"helm.values")," will control how the resource are\ncustomized per target cluster. If you are using raw YAML then the following simple mechanism is built-in and can\nbe used.  The ",(0,r.yg)("inlineCode",{parentName:"p"},"overlays/")," folder in the git repo is treated specially as folder containing folders that\ncan be selected to overlay on top per target cluster. The resource overlay content\nuses a file name based approach.  This is different from kustomize which uses a resource based approach.  In kustomize\nthe resource Group, Kind, Version, Name, and Namespace identify resources and are then merged or patched.  For Fleet\nthe overlay resources will override or patch content with a matching file name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Base files\ndeployment.yaml\nsvc.yaml\n\n# Overlay files\n\n# The following file we be added\noverlays/custom/configmap.yaml\n# The following file will replace svc.yaml\noverlays/custom/svc.yaml\n# The following file will patch deployment.yaml\noverlays/custom/deployment_patch.yaml\n")),(0,r.yg)("p",null,"A file named ",(0,r.yg)("inlineCode",{parentName:"p"},"foo")," will replace a file called ",(0,r.yg)("inlineCode",{parentName:"p"},"foo")," from the base resources or a previous overlay.  In order to patch\nthe contents a file the convention of adding ",(0,r.yg)("inlineCode",{parentName:"p"},"_patch.")," (notice the trailing period) to the filename is used. The string ",(0,r.yg)("inlineCode",{parentName:"p"},"_patch."),"\nwill be replaced with ",(0,r.yg)("inlineCode",{parentName:"p"},".")," from the file name and that will be used as the target.  For example ",(0,r.yg)("inlineCode",{parentName:"p"},"deployment_patch.yaml"),"\nwill target ",(0,r.yg)("inlineCode",{parentName:"p"},"deployment.yaml"),".  The patch will be applied using JSON Merge, Strategic Merge Patch, or JSON Patch.\nWhich strategy is used is based on the file content. Even though JSON strategies are used, the files can be written\nusing YAML syntax."),(0,r.yg)("h2",{id:"cluster-and-bundle-state"},"Cluster and Bundle state"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/0.4/cluster-bundles-state"},"Cluster and Bundle state"),"."))}c.isMDXComponent=!0}}]);