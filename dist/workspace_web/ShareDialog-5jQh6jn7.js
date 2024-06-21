import{f as te,n as ge,o as we,j as e,g as ae,e as ne,r as u,m as xe,w as X,b as je,h as z,a0 as Z,M as ve,N as ye,O as be,Q as ke,S as Se}from"./input.js";import{B as Ce,A as Ie,a4 as De,g as T,H as A,ac as Re,a3 as R,af as M,al as Ee,ay as ee,X as Ne,f as Pe,F as oe,aD as Te,j as Oe,k as se,x as _,$ as We,aE as _e,aF as Fe,aG as Me,aH as ze,h as Le,T as Ae,aI as Ge,Y as He}from"./App-Q5q_MCuv.js";import{I as $e}from"./chunk-7D6N5TE5-ovu54CgJ.js";import{a as Be}from"./civitUtils-3Q8lYKDb.js";import{S as Ue,L as Ve}from"./chunk-VTV6N5LE-gfhkmiDa.js";import{I as Je}from"./IconCopy-wFXhXdFd.js";var re=te(function(r,i){const l=ge("Badge",r),{className:t,...o}=we(r);return e.jsx(ae.span,{ref:i,className:ne("chakra-badge",r.className),...o,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...l}})});re.displayName="Badge";function Ke(s){return s&&X(s)&&X(s.target)}function qe(s={}){const{onChange:r,value:i,defaultValue:l,name:t,isDisabled:o,isFocusable:f,isNative:y,...d}=s,[b,v]=u.useState(l||""),p=typeof i<"u",w=p?i:b,x=u.useRef(null),a=u.useCallback(()=>{const m=x.current;if(!m)return;let g="input:not(:disabled):checked";const O=m.querySelector(g);if(O){O.focus();return}g="input:not(:disabled)";const E=m.querySelector(g);E==null||E.focus()},[]),j=`radio-${u.useId()}`,h=t||j,I=u.useCallback(m=>{const g=Ke(m)?m.target.value:m;p||v(g),r==null||r(String(g))},[r,p]),k=u.useCallback((m={},g=null)=>({...m,ref:xe(g,x),role:"radiogroup"}),[]),L=u.useCallback((m={},g=null)=>({...m,ref:g,name:h,[y?"checked":"isChecked"]:w!=null?m.value===w:void 0,onChange(E){I(E)},"data-radiogroup":!0}),[y,h,I,w]);return{getRootProps:k,getRadioProps:L,name:h,ref:x,focus:a,setValue:v,value:w,onChange:I,isDisabled:o,isFocusable:f,htmlProps:d}}var[Ye,lo]=je({name:"RadioGroupContext",strict:!1}),ie=te((s,r)=>{const{colorScheme:i,size:l,variant:t,children:o,className:f,isDisabled:y,isFocusable:d,...b}=s,{value:v,onChange:p,getRootProps:w,name:x,htmlProps:a}=qe(b),D=u.useMemo(()=>({name:x,size:l,onChange:p,colorScheme:i,value:v,variant:t,isDisabled:y,isFocusable:d}),[x,l,p,i,v,t,y,d]);return e.jsx(Ye,{value:D,children:e.jsx(ae.div,{...w(a,r),className:ne("chakra-radio-group",f),children:o})})});ie.displayName="RadioGroup";function Qe({options:s,value:r,onChange:i}){const[l,t]=u.useState(!1),o=u.useRef(null),f=s.find(d=>d.value===r);u.useEffect(()=>{const d=b=>{o.current&&!o.current.contains(b.target)&&t(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[o]);const y=()=>t(!l);return e.jsxs(Ce,{position:"relative",children:[e.jsx(z,{onClick:y,rightIcon:e.jsx(Ie,{}),leftIcon:f==null?void 0:f.icon,children:f==null?void 0:f.label}),l&&e.jsx(De,{gap:4,ref:o,mt:"2",shadow:"md",borderWidth:"1px",p:"2",position:"absolute",zIndex:100,children:s.map(d=>e.jsx(z,{onClick:()=>{t(!1),i(d.value)},leftIcon:d.icon,justifyContent:"flex-start",variant:"ghost",width:"full",children:d.label},d.label))})]})}function Xe({deps:s,uploadingImage:r}){const i=Object.values((s==null?void 0:s.images)??{});return s?e.jsx(T,{gap:5,children:i.length>0&&e.jsxs(T,{children:[e.jsxs(A,{children:[e.jsxs(Re,{size:"sm",children:["Images (",i.length,")"]}),e.jsx("p",{style:{color:"GrayText"},children:"Will be uploaded as url"})]}),r&&e.jsxs("span",{children:[e.jsx(Z,{size:"md",color:"teal.400"})," Uploading"]}),i.map(l=>e.jsxs(T,{children:[e.jsx("p",{children:l.filename}),e.jsx($e,{width:250,src:`/workspace/view_media?filename=${l.filename}&isPreview=true&isInput=true`})]},l.filename))]})}):e.jsx(Z,{size:"md",color:"teal.400"})}async function Ze(s,r,i){const l=await Ee.models.where("fileName").equals(s).toArray()??[],t=l.at(0);return{name:s,nodeType:r,hash:(t==null?void 0:t.fileHash)??null,folder:(t==null?void 0:t.fileFolder)??null,url:t!=null&&t.civitModelVersionID?Be(t.civitModelVersionID):(t==null?void 0:t.downloadUrl)??null,inputName:i,length:l.length}}async function eo(s){var w,x;let r=[],i={};const l=[".ckpt",".pt",".bin",".pth",".safetensors"],t=[".jpeg",".jpg",".png",".gif",".webp"],o=(x=(w=R.graph.extra)==null?void 0:w[M])==null?void 0:x.deps,f=await R.graphToPrompt();Object.values(f.output).forEach(a=>{a.inputs&&Object.keys(a.inputs).forEach(D=>{var h,I;const j=(h=a.inputs)==null?void 0:h[D];typeof j=="string"&&(l.some(k=>j.endsWith(k))&&r.push(Ze(j,a.class_type,D)),t.some(k=>j.endsWith(k))&&(i[j]=((I=o==null?void 0:o.images)==null?void 0:I[j])??{filename:j,nodeType:a.class_type}))})});const d=await fetch("workspace/fetch_node_repos",{method:"POST",body:JSON.stringify({nodes:s.map(a=>a.type)})}).then(a=>a.ok?a.json():[]).catch(a=>(console.error("Error fetching node repos",a),[])),b=await Promise.all(r),v={};b.forEach(a=>{v[a.name]=a});const p={};return Object.values(d).forEach(a=>{p[a.gitRepo]=a}),{models:v,images:i,nodeRepos:Object.values(p)}}function co({onClose:s}){var G,H,$,B,U;const[r,i,l]=ee("v"+oo()),{saveCurWorkflow:t}=u.useContext(Ne),[o,f]=u.useState(),[y,d]=u.useState(!1),[b,v]=u.useState(!1),p=(H=(G=se)==null?void 0:G.settings)==null?void 0:H.cloudHost,[w,x,a]=ee("PRIVATE"),[D,j]=u.useState("new_version"),h=($=_)==null?void 0:$.curWorkflow,I=Pe(),[k,L]=u.useState(!0),m=async n=>{var P;const c=n.data;if(c.type!=="share_workflow_success")return;const S=c.localWorkflowID,N=c.version.id,C=c.version.workflowID;C&&S&&await((P=_)==null?void 0:P.updateMetaInfo(S,{cloudID:C,privacy:a.current})),g(),window.open(p+"/workflow/"+C+"/"+N,"_blank"),v(!1)};u.useEffect(()=>{g();const n=R.graph.serialize();return eo(n.nodes??[]).then(c=>{f(c)}),window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}},[]);const g=async()=>{h!=null&&h.cloudID&&h.cloudOrigin&&ze(h).then(n=>{x(n)})},O=n=>{navigator.clipboard.writeText(n).then(()=>{I({title:"Copied to clipboard",status:"success",duration:2e3,isClosable:!0})}).catch(c=>{console.error("Failed to copy text: ",c)})},E=async n=>{var K,q,Y;const c=R.graph.serialize();(K=c.extra||(c.extra={}))[q=M]||(K[q]={}),c.extra[M].deps={models:(o==null?void 0:o.models)??{},images:n??{},nodeRepos:(o==null?void 0:o.nodeRepos)??[]},await t();const S=await R.graphToPrompt(R.graph).then(W=>(c.extra[M].apiPrompt=W.output,W.output)),N=JSON.stringify(c);v(!0);const C=_e(32),P=await((Y=se)==null?void 0:Y.getSetting("cloudHost"));let V;V=Fe();const ce={id:Me(),workflowID:h.id,name:l.current,createTime:Date.now(),api_prompt:JSON.stringify(S),json:N??JSON.stringify(R.graph.serialize())},de=window.location.protocol,ue=window.location.host,pe=`${de}//${ue}`,he=P+`/share_workflow_confirm/${C}?redirectUrl=${pe}`,fe=window.open(he,"Share Workflow","width=800,height=800"),J=W=>{var Q;if(W.origin===P&&W.data==="child_ready"){const me=(Q=_)==null?void 0:Q.curWorkflow;fe.postMessage({workflow:me,version:ce,nodeDefs:V,privacy:a.current},P),window.removeEventListener("message",J)}};window.addEventListener("message",J)},le=async()=>{const n=(o==null?void 0:o.images)??{};if(k){d(!0);const c=Object.values((o==null?void 0:o.images)??{}).map(S=>S.filename);if(c.length)try{const N=await(await We("/workspace/upload_image",{method:"POST",body:JSON.stringify({images:c})})).json();Object.keys(N).forEach(C=>{n!=null&&n[C]&&(n[C].url=N[C])})}catch(S){console.error("Error uploading images:",S)}d(!1)}E(n)},F=(U=(B=_)==null?void 0:B.curWorkflow)==null?void 0:U.cloudID;return e.jsxs(ve,{isOpen:!0,onClose:s,size:"lg",children:[e.jsx(ye,{}),e.jsxs(be,{width:["98%","90%","50%"],maxWidth:"600px",children:[e.jsxs(ke,{children:[e.jsxs(oe,{justifyContent:"space-between",children:[e.jsxs("p",{children:['Share "',h==null?void 0:h.name,'"']}),e.jsx(z,{colorScheme:"teal",onClick:le,size:"sm",isDisabled:b,children:b?"Sharing":"Share"})]}),p&&e.jsxs(Le,{fontSize:16,color:"GrayText",fontWeight:400,children:["Share to ",new URL(p).host]})]}),e.jsx(Se,{pb:10,children:e.jsxs(T,{gap:5,children:[F==null?e.jsx(Qe,{options:Te,value:w,onChange:n=>{x(n)}}):e.jsx(Ae,{variant:"outline",borderRadius:"full",width:"fit-content",children:e.jsx(Ge,{privacy:w,showEmoji:!0})}),F&&e.jsxs(A,{spacing:2,color:"teal.400",children:[e.jsxs(Ve,{wordBreak:"break-all",href:p+"/workflow/"+F,isExternal:!0,children:[p+"/workflow/"+F," ",e.jsx(He,{size:20,style:{display:"inline-block",verticalAlign:"middle"}})]}),e.jsx(z,{size:"sm",leftIcon:e.jsx(Je,{size:18}),onClick:()=>{var n,c;O(p+"/workflow/"+((c=(n=_)==null?void 0:n.curWorkflow)==null?void 0:c.cloudID))},children:"Copy link"})]}),e.jsx(ie,{gap:4,onChange:n=>{j(n)},value:D,children:e.jsx(T,{children:e.jsxs(A,{mb:5,alignItems:"center",children:[e.jsx(Oe,{value:r,width:"60%",onFocus:()=>{j("new_version")},onChange:n=>{i(n.target.value)}}),e.jsx(oe,{color:"green",children:e.jsx(re,{colorScheme:"purple",children:"Version Name"})})]})})}),Object.keys((o==null?void 0:o.images)??{}).length>0&&e.jsxs(T,{borderRadius:6,borderWidth:"1px",p:2,children:[e.jsx(Ue,{isChecked:k,onChange:()=>L(!k),fontWeight:"600",children:"Share input images"}),e.jsxs("span",{style:{color:"GrayText"},children:["If enabled your input images will be uploaded and shared to"," ",p]}),k&&e.jsx(Xe,{deps:o??null,setDeps:f,uploadingImage:y})]})]})})]})]})}function oo(){const s=new Date,r=s.getFullYear(),i=String(s.getMonth()+1).padStart(2,"0"),l=String(s.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}export{co as default};
