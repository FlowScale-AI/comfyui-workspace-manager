import{r as a}from"./input.js";import{X as v,a3 as n,af as y,x as u,E as c,ag as w,ah as S}from"./App-Q5q_MCuv.js";import{u as _}from"./useDebounceFn-ld478fd0.js";function I(){const{isDirty:i,setIsDirty:E,setRoute:l,saveCurWorkflow:m,setCurFlowIDAndName:g}=a.useContext(v),d=a.useRef(i);a.useEffect(()=>{d.current=i},[i]),a.useEffect(()=>{const o=e=>{var s;if(document.visibilityState==="hidden")return;const t=S(e);if(t)switch(t===c.openSpotlightSearch&&e.preventDefault(),window.dispatchEvent(new CustomEvent(w,{detail:{shortcutType:t}})),t){case c.SAVE:m();break;case c.SAVE_AS:l("saveAsModal");break;case c.openSpotlightSearch:l("spotlightSearch");break}else(s=e.target)!=null&&s.matches("input, textarea")&&Object.keys(n.canvas.selected_nodes??{}).length&&f()},r=n.graph.onConfigure;return n.graph.onConfigure=function(){r==null||r.apply(this,arguments),setTimeout(()=>{var t,s,p,h;const e=(s=(t=n.graph.extra)==null?void 0:t[y])==null?void 0:s.id;(e==null||e!=((h=(p=u)==null?void 0:p.curWorkflow)==null?void 0:h.id))&&g(null)},500)},document.addEventListener("click",e=>{Object.keys(n.canvas.selected_nodes??{}).length&&(n.canvas.node_over!=null||n.canvas.node_capturing_input!=null||n.canvas.node_widget!=null)&&f()}),document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[]);const k=async()=>{var r,e,t,s;if((e=(r=u)==null?void 0:r.curWorkflow)!=null&&e.saveLock||d.current)return;const o=n.graph.serialize();JSON.stringify(o)!==((s=(t=u)==null?void 0:t.curWorkflow)==null?void 0:s.json)&&E(!0)},[f,C]=_(k,900);return null}export{I as default};
