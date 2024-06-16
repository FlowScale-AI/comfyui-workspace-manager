import{d as D,r as l,j as v,I as Ee,x as Te,y as je,m as ae,q as _,p as se,b as Pe,f as T,g as Y,k as Be,o as Ke,e as Ve}from"./input.js";import{ad as Ge,ae as We,d as Le,B as qe,I as ze,y as He,j as Xe,ab as $e}from"./App-glu28uXd.js";import{I as Ye}from"./IconSearch-mHNJjBFP.js";import{I as Je}from"./chunk-7D6N5TE5-GyP-hoZK.js";function Qe(t){const e=parseFloat(t);return typeof e!="number"||Number.isNaN(e)?0:e}function ie(t,e){let r=Qe(t);const a=10**(e??10);return r=Math.round(r*a)/a,e?r.toFixed(e):r.toString()}function ue(t){if(!Number.isFinite(t))return 0;let e=1,r=0;for(;Math.round(t*e)/e!==t;)e*=10,r+=1;return r}function Ct(t,e,r){return(t-e)*100/(r-e)}function It(t,e,r){return(r-e)*t+e}function St(t,e,r){const a=Math.round((t-e)/r)*r+e,i=ue(r);return ie(a,i)}function Ze(t,e,r){return t==null?t:(r<e&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(t,e),r))}function et(t={}){const{onChange:e,precision:r,defaultValue:a,value:i,step:s=1,min:u=Number.MIN_SAFE_INTEGER,max:o=Number.MAX_SAFE_INTEGER,keepWithinRange:f=!0}=t,c=D(e),[m,w]=l.useState(()=>{var g;return a==null?"":(g=oe(a,s,r))!=null?g:""}),x=typeof i<"u",h=x?i:m,I=Me(P(h),s),S=r??I,A=l.useCallback(g=>{g!==h&&(x||w(g.toString()),c==null||c(g.toString(),P(g)))},[c,x,h]),k=l.useCallback(g=>{let b=g;return f&&(b=Ze(b,u,o)),ie(b,S)},[S,f,o,u]),j=l.useCallback((g=s)=>{let b;h===""?b=P(g):b=P(h)+g,b=k(b),A(b)},[k,s,A,h]),B=l.useCallback((g=s)=>{let b;h===""?b=P(-g):b=P(h)-g,b=k(b),A(b)},[k,s,A,h]),K=l.useCallback(()=>{var g;let b;a==null?b="":b=(g=oe(a,s,r))!=null?g:u,A(b)},[a,r,s,A,u]),Q=l.useCallback(g=>{var b;const ee=(b=oe(g,s,S))!=null?b:u;A(ee)},[S,s,A,u]),V=P(h);return{isOutOfRange:V>o||V<u,isAtMax:V===o,isAtMin:V===u,precision:S,value:h,valueAsNumber:V,update:A,reset:K,increment:j,decrement:B,clamp:k,cast:Q,setValue:w}}function P(t){return parseFloat(t.toString().replace(/[^\w.-]+/g,""))}function Me(t,e){return Math.max(ue(e),ue(t))}function oe(t,e,r){const a=P(t);if(Number.isNaN(a))return;const i=Me(a,e);return ie(a,r??i)}var tt=t=>v.jsx(Ee,{viewBox:"0 0 24 24",...t,children:v.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),nt=t=>v.jsx(Ee,{viewBox:"0 0 24 24",...t,children:v.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function _e(t,e,r,a){l.useEffect(()=>{var i;if(!t.current||!a)return;const s=(i=t.current.ownerDocument.defaultView)!=null?i:window,u=Array.isArray(e)?e:[e],o=new s.MutationObserver(f=>{for(const c of f)c.type==="attributes"&&c.attributeName&&u.includes(c.attributeName)&&r(c)});return o.observe(t.current,{attributes:!0,attributeFilter:u}),()=>o.disconnect()})}function rt(t,e){const r=D(t);l.useEffect(()=>{let a=null;const i=()=>r();return e!==null&&(a=window.setInterval(i,e)),()=>{a&&window.clearInterval(a)}},[e,r])}var at=50,ke=300;function st(t,e){const[r,a]=l.useState(!1),[i,s]=l.useState(null),[u,o]=l.useState(!0),f=l.useRef(null),c=()=>clearTimeout(f.current);rt(()=>{i==="increment"&&t(),i==="decrement"&&e()},r?at:null);const m=l.useCallback(()=>{u&&t(),f.current=setTimeout(()=>{o(!1),a(!0),s("increment")},ke)},[t,u]),w=l.useCallback(()=>{u&&e(),f.current=setTimeout(()=>{o(!1),a(!0),s("decrement")},ke)},[e,u]),x=l.useCallback(()=>{o(!0),a(!1),c()},[]);return l.useEffect(()=>()=>c(),[]),{up:m,down:w,stop:x,isSpinning:r}}var ot=/^[Ee0-9+\-.]$/;function ut(t){return ot.test(t)}function it(t,e){if(t.key==null)return!0;const r=t.ctrlKey||t.altKey||t.metaKey;return!(t.key.length===1)||r?!0:e(t.key)}function lt(t={}){const{focusInputOnChange:e=!0,clampValueOnBlur:r=!0,keepWithinRange:a=!0,min:i=Number.MIN_SAFE_INTEGER,max:s=Number.MAX_SAFE_INTEGER,step:u=1,isReadOnly:o,isDisabled:f,isRequired:c,isInvalid:m,pattern:w="[0-9]*(.[0-9]+)?",inputMode:x="decimal",allowMouseWheel:h,id:I,onChange:S,precision:A,name:k,"aria-describedby":j,"aria-label":B,"aria-labelledby":K,onFocus:Q,onBlur:V,onInvalid:ce,getAriaValueText:fe,isValidCharacter:Z,format:g,parse:b,...ee}=t,te=D(Q),de=D(V),R=D(ce),G=D(Z??ut),ne=D(fe),d=et(t),{update:U,increment:pe,decrement:me}=d,[Fe,re]=l.useState(!1),W=!(o||f),E=l.useRef(null),L=l.useRef(null),be=l.useRef(null),ge=l.useRef(null),q=l.useCallback(n=>n.split("").filter(G).join(""),[G]),z=l.useCallback(n=>{var p;return(p=b==null?void 0:b(n))!=null?p:n},[b]),F=l.useCallback(n=>{var p;return((p=g==null?void 0:g(n))!=null?p:n).toString()},[g]);Te(()=>{(d.valueAsNumber>s||d.valueAsNumber<i)&&(R==null||R("rangeOverflow",F(d.value),d.valueAsNumber))},[d.valueAsNumber,d.value,F,R]),je(()=>{if(!E.current)return;if(E.current.value!=d.value){const p=z(E.current.value);d.setValue(q(p))}},[z,q]);const H=l.useCallback((n=u)=>{W&&pe(n)},[pe,W,u]),X=l.useCallback((n=u)=>{W&&me(n)},[me,W,u]),N=st(H,X);_e(be,"disabled",N.stop,N.isSpinning),_e(ge,"disabled",N.stop,N.isSpinning);const he=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;const y=z(n.currentTarget.value);U(q(y)),L.current={start:n.currentTarget.selectionStart,end:n.currentTarget.selectionEnd}},[U,q,z]),ve=l.useCallback(n=>{var p,y,C;te==null||te(n),L.current&&(n.target.selectionStart=(y=L.current.start)!=null?y:(p=n.currentTarget.value)==null?void 0:p.length,n.currentTarget.selectionEnd=(C=L.current.end)!=null?C:n.currentTarget.selectionStart)},[te]),ye=l.useCallback(n=>{if(n.nativeEvent.isComposing)return;it(n,G)||n.preventDefault();const p=we(n)*u,y=n.key,M={ArrowUp:()=>H(p),ArrowDown:()=>X(p),Home:()=>U(i),End:()=>U(s)}[y];M&&(n.preventDefault(),M(n))},[G,u,H,X,U,i,s]),we=n=>{let p=1;return(n.metaKey||n.ctrlKey)&&(p=.1),n.shiftKey&&(p=10),p},xe=l.useMemo(()=>{const n=ne==null?void 0:ne(d.value);if(n!=null)return n;const p=d.value.toString();return p||void 0},[d.value,ne]),Ne=l.useCallback(()=>{let n=d.value;if(d.value==="")return;/^[eE]/.test(d.value.toString())?d.setValue(""):(d.valueAsNumber<i&&(n=i),d.valueAsNumber>s&&(n=s),d.cast(n))},[d,s,i]),Ce=l.useCallback(()=>{re(!1),r&&Ne()},[r,re,Ne]),$=l.useCallback(()=>{e&&requestAnimationFrame(()=>{var n;(n=E.current)==null||n.focus()})},[e]),Ie=l.useCallback(n=>{n.preventDefault(),N.up(),$()},[$,N]),Se=l.useCallback(n=>{n.preventDefault(),N.down(),$()},[$,N]);Ge(()=>E.current,"wheel",n=>{var p,y;const M=((y=(p=E.current)==null?void 0:p.ownerDocument)!=null?y:document).activeElement===E.current;if(!h||!M)return;n.preventDefault();const O=we(n)*u,Ae=Math.sign(n.deltaY);Ae===-1?H(O):Ae===1&&X(O)},{passive:!1});const Re=l.useCallback((n={},p=null)=>{const y=f||a&&d.isAtMax;return{...n,ref:ae(p,be),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,C=>{C.button!==0||y||Ie(C)}),onPointerLeave:_(n.onPointerLeave,N.stop),onPointerUp:_(n.onPointerUp,N.stop),disabled:y,"aria-disabled":se(y)}},[d.isAtMax,a,Ie,N.stop,f]),Ue=l.useCallback((n={},p=null)=>{const y=f||a&&d.isAtMin;return{...n,ref:ae(p,ge),role:"button",tabIndex:-1,onPointerDown:_(n.onPointerDown,C=>{C.button!==0||y||Se(C)}),onPointerLeave:_(n.onPointerLeave,N.stop),onPointerUp:_(n.onPointerUp,N.stop),disabled:y,"aria-disabled":se(y)}},[d.isAtMin,a,Se,N.stop,f]),Oe=l.useCallback((n={},p=null)=>{var y,C,M,O;return{name:k,inputMode:x,type:"text",pattern:w,"aria-labelledby":K,"aria-label":B,"aria-describedby":j,id:I,disabled:f,...n,readOnly:(y=n.readOnly)!=null?y:o,"aria-readonly":(C=n.readOnly)!=null?C:o,"aria-required":(M=n.required)!=null?M:c,required:(O=n.required)!=null?O:c,ref:ae(E,p),value:F(d.value),role:"spinbutton","aria-valuemin":i,"aria-valuemax":s,"aria-valuenow":Number.isNaN(d.valueAsNumber)?void 0:d.valueAsNumber,"aria-invalid":se(m??d.isOutOfRange),"aria-valuetext":xe,autoComplete:"off",autoCorrect:"off",onChange:_(n.onChange,he),onKeyDown:_(n.onKeyDown,ye),onFocus:_(n.onFocus,ve,()=>re(!0)),onBlur:_(n.onBlur,de,Ce)}},[k,x,w,K,B,F,j,I,f,c,o,m,d.value,d.valueAsNumber,d.isOutOfRange,i,s,xe,he,ye,ve,de,Ce]);return{value:F(d.value),valueAsNumber:d.valueAsNumber,isFocused:Fe,isDisabled:f,isReadOnly:o,getIncrementButtonProps:Re,getDecrementButtonProps:Ue,getInputProps:Oe,htmlProps:ee}}var[ct,J]=Pe({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[ft,le]=Pe({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),dt=T(function(e,r){const a=Be("NumberInput",e),i=Ke(e),s=We(i),{htmlProps:u,...o}=lt(s),f=l.useMemo(()=>o,[o]);return v.jsx(ft,{value:f,children:v.jsx(ct,{value:a,children:v.jsx(Y.div,{...u,ref:r,className:Ve("chakra-numberinput",e.className),__css:{position:"relative",zIndex:0,...a.root}})})})});dt.displayName="NumberInput";var pt=T(function(e,r){const a=J();return v.jsx(Y.div,{"aria-hidden":!0,ref:r,...e,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...a.stepperGroup}})});pt.displayName="NumberInputStepper";var mt=T(function(e,r){const{getInputProps:a}=le(),i=a(e,r),s=J();return v.jsx(Y.input,{...i,className:Ve("chakra-numberinput__field",e.className),__css:{width:"100%",...s.field}})});mt.displayName="NumberInputField";var De=Y("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),bt=T(function(e,r){var a;const i=J(),{getDecrementButtonProps:s}=le(),u=s(e,r);return v.jsx(De,{...u,__css:i.stepper,children:(a=e.children)!=null?a:v.jsx(tt,{})})});bt.displayName="NumberDecrementStepper";var gt=T(function(e,r){var a;const{getIncrementButtonProps:i}=le(),s=i(e,r),u=J();return v.jsx(De,{...s,__css:u.stepper,children:(a=e.children)!=null?a:v.jsx(nt,{})})});gt.displayName="NumberIncrementStepper";var At=Le("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);const _t=(t,e)=>{const[r,a]=l.useState(t);return l.useEffect(()=>{const i=setTimeout(()=>{a(t)},e);return()=>{clearTimeout(i)}},[t,e]),r},ht={position:"absolute",marginLeft:"10px",width:"20px",height:"20px",top:"50%",color:"#A0AEC0",transform:"translateY(-50%)"};function kt(t){const{searchValue:e,onUpdateSearchValue:r,style:a}=t,i=e!=="";return v.jsxs(qe,{style:{position:"relative",...a},mb:2,children:[v.jsx(Ye,{style:ht}),i&&v.jsx(ze,{size:"xs",position:"absolute",right:"5px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",background:"none",zIndex:"100",icon:v.jsx(He,{width:15,height:15}),onClick:()=>r(""),"aria-label":"clear input button"}),v.jsx(Xe,{placeholder:t.placeholder??"Search",size:"sm",paddingLeft:"35px",paddingBlock:"5px",value:e,onChange:({target:s})=>r(s.value)})]})}function Et(t){return new Promise((e,r)=>{const a=new FileReader;a.onload=i=>{const s=new Uint8Array(i.target.result),u=new DataView(s.buffer);u.getUint32(0)!==2303741511&&(console.error("Not a valid PNG file"),r());let o=8;const f={};for(;o<s.length;){const c=u.getUint32(o),m=String.fromCharCode(...s.slice(o+4,o+8));if(m==="tEXt"||m=="comf"){let w=o+8;for(;s[w]!==0;)w++;const x=String.fromCharCode(...s.slice(o+8,w)),h=s.slice(w+1,o+8+c),I=Array.from(h).map(S=>String.fromCharCode(S)).join("");f[x]=I}o+=12+c}e(f)},a.readAsArrayBuffer(t)})}function vt(t){const e=new Uint16Array(t.slice(0,2))[0]===18761;function r(u,o,f){const c=t.slice(u,u+f);if(f===2)return new DataView(c.buffer,c.byteOffset,c.byteLength).getUint16(0,o);if(f===4)return new DataView(c.buffer,c.byteOffset,c.byteLength).getUint32(0,o)}const a=r(4,e,4);function i(u){const o=r(u,e,2),f={};for(let c=0;c<o;c++){const m=u+2+c*12,w=r(m,e,2),x=r(m+2,e,2),h=r(m+4,e,4),I=r(m+8,e,4);let S;x===2&&(S=String.fromCharCode(...t.slice(I,I+h-1))),f[w]=S}return f}return i(a)}function Pt(t){return new Promise(e=>{const r=new FileReader;r.onload=a=>{var f;const i=new Uint8Array((f=a==null?void 0:a.target)==null?void 0:f.result),s=new DataView(i.buffer);if(s.getUint32(0)!==1380533830||s.getUint32(8)!==1464156752){console.error("Not a valid WEBP file"),e();return}let u=12;const o={};for(;u<i.length;){const c=s.getUint32(u+4,!0);if(String.fromCharCode(...i.slice(u,u+4))==="EXIF"){String.fromCharCode(...i.slice(u+8,u+8+6))=="Exif\0\0"&&(u+=6);const w=vt(i.slice(u+8,u+8+c));for(const x in w){const h=w[x],I=h.indexOf(":");o[h.slice(0,I)]=h.slice(I+1)}}u+=8+c}e(o)},r.readAsArrayBuffer(t)})}function Vt(t){return!!(t!=null&&t.endsWith(".webm")||t!=null&&t.endsWith(".mp4"))}function Mt(t){return new Promise(e=>{const r=new FileReader;r.onload=a=>{const i=new Uint8Array(a.target.result),s=new DataView(i.buffer),u=new TextDecoder;if(s.getUint32(0)==440786851){let o=12;for(;o<i.length-16;){if(s.getUint16(o)==17543&&String.fromCharCode(...i.slice(o-7,o))==="COMMENT"){const c=s.getUint32(o+2),m=Math.clz32(c)+1;if(m<4){const w=c>>8*(4-m)&~(1<<7*m),x=u.decode(i.slice(o+2+m,o+2+m+w)),h=JSON.parse(x);e(h);return}}o+=1}}else if(s.getUint32(4)==1718909296&&s.getUint32(8)==1769172845){let o=i.length-4;for(;o>16;){if(s.getUint32(o)==1684108385&&s.getUint32(o-8)==2841865588){s.getUint32(o+4),s.getUint32(o+8);const f=s.getUint32(o-4)-4*4,c=u.decode(i.slice(o+12,o+12+f)),m=JSON.parse(c);e(m);return}o-=1}}else{console.error("Unknown magic: "+s.getUint32(0)),e();return}},r.readAsArrayBuffer(t)})}function Dt({mediaLocalPath:t,size:e,isPreview:r,autoPlay:a,hideBrokenImage:i,objectFit:s,onBrokenLink:u}){const[o,f]=l.useState(!0);return l.useEffect(()=>{i&&(async()=>{try{if((await fetch(r?`/workspace/preview_media?filename=${t}`:`/workspace/view_media?filename=${t}`)).status==404){f(!1),u==null||u();return}}catch(m){console.error("Error checking media exists",m)}})()},[]),o?$e(t)?v.jsx(Je,{borderRadius:3,boxSize:`${e}px`,objectFit:s??"cover",src:`/workspace/view_media?filename=${t}`,alt:"workflow image renamed or moved from output folder"}):v.jsx("div",{style:{width:e+"px",height:e+"px",overflow:"hidden",position:"relative"},children:v.jsx("video",{width:e,height:e,src:`/workspace/view_media?filename=${t}`,loop:!0,autoPlay:a??!1,muted:!0,style:{objectFit:"cover",width:"100%",height:"100%"},children:v.jsx("track",{kind:"captions"})})}):null}export{At as I,Dt as M,dt as N,kt as S,mt as a,Mt as b,Ze as c,Pt as d,pt as e,gt as f,Et as g,bt as h,Vt as i,It as p,St as r,_t as u,Ct as v};
