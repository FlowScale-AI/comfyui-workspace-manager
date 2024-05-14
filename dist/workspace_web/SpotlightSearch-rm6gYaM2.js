import{b as $,f as L,l as Z,o as q,h as w,r as g,j as n,g as A,$ as J,M as Q,O as X,U as ee,i as te}from"./input.js";import{aI as ne,am as se,Z as re,aD as T,aj as D,H as ae,j as oe,h as G,a2 as ie,x as ce,a3 as le,E as ue,k as O}from"./App-jKPGg5GX.js";import{u as pe}from"./useDebounceFn-ld478fd0.js";import{I as de}from"./IconSearch-y3mf6sGI.js";import{V as he}from"./chunk-NTCQBYKE-XR83Z3z1.js";var[me,ge]=$({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),M=L(function(a,u){const r=Z("Input",a),{children:c,className:l,...I}=q(a),x=w("chakra-input__group",l),t={},E=ne(c),o=r.field;E.forEach(s=>{var p,y;r&&(o&&s.type.id==="InputLeftElement"&&(t.paddingStart=(p=o.height)!=null?p:o.h),o&&s.type.id==="InputRightElement"&&(t.paddingEnd=(y=o.height)!=null?y:o.h),s.type.id==="InputRightAddon"&&(t.borderEndRadius=0),s.type.id==="InputLeftAddon"&&(t.borderStartRadius=0))});const f=E.map(s=>{var p,y;const R=se({size:((p=s.props)==null?void 0:p.size)||a.size,variant:((y=s.props)==null?void 0:y.variant)||a.variant});return s.type.id!=="Input"?g.cloneElement(s,R):g.cloneElement(s,Object.assign(R,t,s.props))});return n.jsx(A.div,{className:x,ref:u,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...r.group},"data-group":!0,...I,children:n.jsx(me,{value:r,children:f})})});M.displayName="InputGroup";var Se=A("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),C=L(function(a,u){var r,c;const{placement:l="left",...I}=a,x=ge(),t=x.field,o={[l==="left"?"insetStart":"insetEnd"]:"0",width:(r=t==null?void 0:t.height)!=null?r:t==null?void 0:t.h,height:(c=t==null?void 0:t.height)!=null?c:t==null?void 0:t.h,fontSize:t==null?void 0:t.fontSize,...x.element};return n.jsx(Se,{ref:u,__css:o,...I})});C.id="InputElement";C.displayName="InputElement";var P=L(function(a,u){const{className:r,...c}=a,l=w("chakra-input__left-element",r);return n.jsx(C,{ref:u,placement:"left",className:l,...c})});P.id="InputLeftElement";P.displayName="InputLeftElement";var K=L(function(a,u){const{className:r,...c}=a,l=w("chakra-input__right-element",r);return n.jsx(C,{ref:u,placement:"right",className:l,...c})});K.id="InputRightElement";K.displayName="InputRightElement";function Ie(){const{colorMode:S}=J(),{loadWorkflowID:a,setRoute:u}=g.useContext(re),[r,c]=g.useState([]),[l,I,x]=T(""),t=g.useRef([]),[E,o,f]=T([]),[s,p]=g.useState(!1),[y,R,b]=T(0),v=g.useRef({lastPressedKey:"",spotlightSearchShortcutFirstKey:"",spotlightSearchShortcutLastKey:""}),z=()=>{u("root")},_=e=>{a(e.id),z()},U=()=>{const e=r.filter(i=>!!i.name.toLocaleLowerCase().includes(x.current.toLocaleLowerCase()));o(e),R(0),p(!1)},[H,W]=pe(U,300),V=e=>{I(e.target.value),e.target.value?(H(),!s&&p(!0)):(p(!1),W(),o(t.current))},B=()=>s?null:l&&E.length===0?n.jsx(G,{ml:2,children:"No matching results"}):n.jsx(n.Fragment,{children:E.map((e,i)=>n.jsxs(te,{colorScheme:"teal",variant:"ghost",size:"sm",justifyContent:"start",px:2,color:S==="light"?"#1A202C":"rgba(255, 255, 255, 0.92)",onClick:()=>{_(e)},minH:"26px",isActive:i===y,children:[e.name,e.updateTime&&n.jsxs(G,{color:S==="light"?"GrayText":"rgb(255, 255, 255, 0.6)",ml:2,fontSize:"sm",children:["Updated: ",ie(e.updateTime)]})]},e.id))}),Y=async()=>{var k;const e=h=>h.map(m=>({type:"workflow",updateTime:(m==null?void 0:m.updateTime)??Date.now(),id:m.id,name:m.name.replace(/\.json$/,"")}))??[],i=await((k=ce)==null?void 0:k.listAll(le.RECENTLY_OPENED))??[];c(e(i));const d=e(i.slice(0,20));t.current=d,o(d)},N=e=>{R(i=>{const d=i+e;return d<0?f.current.length-1:d>f.current.length-1?0:d})};return g.useEffect(()=>{var k;Y(),(k=O)==null||k.getSetting("shortcuts").then(h=>{var F;const j=(h.openSpotlightSearch??((F=O)==null?void 0:F.defaultSettings.shortcuts.openSpotlightSearch)).split("+");v.current.spotlightSearchShortcutFirstKey=j[0]==="Command"?"Meta":j[0],v.current.spotlightSearchShortcutLastKey=j[j.length-1]});const e=h=>{h.key===v.current.spotlightSearchShortcutFirstKey&&v.current.lastPressedKey===v.current.spotlightSearchShortcutLastKey&&b.current>0&&f.current[b.current]&&_(f.current[b.current])},i=h=>{const m=h.key.toUpperCase();switch(v.current.lastPressedKey=m,m){case"ARROWDOWN":N(1);break;case"ARROWUP":N(-1);break;case"ENTER":_(f.current[b.current]);break}},d=h=>{switch(h.detail.shortcutType){case ue.openSpotlightSearch:N(1);break}};return document.addEventListener("keyup",e),document.addEventListener("keydown",i),window.addEventListener(D,d),()=>{document.removeEventListener("keyup",e),document.removeEventListener("keydown",i),window.removeEventListener(D,d)}},[]),n.jsx(Q,{isOpen:!0,onClose:z,size:"xl",children:n.jsxs(X,{bg:S==="light"?"rgba(255, 255, 255, 0.8)":"rgb(45, 55, 72, 0.8)",backdropFilter:"auto",backdropBlur:"8px",children:[n.jsxs(ae,{spacing:1,px:4,py:2,borderBottom:"1px",borderColor:"gray.400",children:[n.jsx(de,{size:20}),n.jsxs(M,{children:[n.jsx(oe,{value:l,onChange:V,autoFocus:!0,variant:"unstyled",fontSize:18}),s&&n.jsx(K,{h:"27px",children:n.jsx(ee,{size:"sm"})})]})]}),n.jsx(he,{spacing:1,align:"stretch",px:2,py:2,maxHeight:"calc(100vh - 200px)",overflowY:"auto",children:B()})]})})}export{Ie as default};
