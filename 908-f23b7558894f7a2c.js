"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{1908:function(e,t,r){r.r(t);var n=r(5893),a=r(7747),i=r(5040),s=r(4e3),o=r(4225),l=r(6089),c=(r(1136),r(9993)),u=r(7294);r(8186);var d=r(1318),f=r(3434),x=r(1790),m=r(8285);r(7320);let g=async(e,t)=>{let r=document.createElement("canvas");r.width=t.width,r.height=t.height;let n=r.getContext("2d");n.translate(r.width,0),n.scale(-1,1),n.drawImage(t,0,0),n.setTransform(1,0,0,1,0,0);let a=await new Promise(e=>r.toBlob(e,"image/png")),i=(await e.recognize(a)).data.text,{bannedVideoWord:s,link:o}=(0,f.DD)(i);return s||o},p=(0,u.forwardRef)((e,t)=>{let[r,s]=(0,u.useState)(!1),[o,l]=(0,u.useState)(e.progress||0);return(0,u.useImperativeHandle)(t,()=>({updateVisible(e){s(e)},updateProgress(e){(e>o||0==e)&&l(e)}})),r?(0,n.jsx)(a.xu,{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",position:"absolute",zIndex:"0",display:"flex",flex:"1",flexDirection:"column",children:(0,n.jsx)(i.E,{background:"transparent",w:"100%",h:"5px",colorScheme:"primary",value:o,position:"absolute",bottom:"0",borderRadius:"100px"})}):null}),h=u.memo(e=>{let{setCensoredRef:t,censorship:r,videoRef:i,partnerVideoLoadingRef:l}=e,[c,d]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{t.current=d},[t]),(0,u.useEffect)(()=>{},[c]),c?(0,n.jsxs)(a.xu,{flexDirection:"column",alignItems:"center",justifyContent:"center",w:"100%",h:"100%",flexShrink:"0",flex:"1",zIndex:"1",display:"flex",position:"absolute",top:"0",left:"0",children:[(0,n.jsx)(s.x,{textAlign:"center",fontWeight:"600",maxW:"200",fontSize:"21",children:"\uD83E\uDD16 NSFW Content Detected"}),(0,n.jsx)(s.x,{mt:"3",textAlign:"center",maxW:"250",fontSize:"13",children:"The AI Moderator blocked it but you might want to leave this chat just to be safe."}),(0,n.jsx)(a.xu,{flexDirection:"row",mt:"5",children:(0,n.jsx)(o.z,{onClick:()=>{r.current=1,i.current.style.filter="",i.current.style.display="flex",i.current.volume=1,d(!1)},size:"sm",colorScheme:"primary",flex:"1",children:"View Anyway"})})]}):null}),w=u.memo(()=>(0,n.jsxs)(a.xu,{display:"flex",position:"absolute",left:"21px",bottom:"21px",fontSize:"34px",fontStyle:"italic",fontWeight:"800",opacity:.3,h:"34px",color:"white",zIndex:"2",flexDirection:"row",alignItems:"center",justifyContent:"center",children:[(0,n.jsx)(l.E,{src:"assets/watermark.png",boxSize:"34px",mt:"1px"}),(0,n.jsx)(s.x,{lineHeight:"34px",children:"THUNDR.TV"})]})),y=u.memo(e=>{let{partnerVideoLoadingRef:t,partner:r,setStreamRef:i,reconnect:s,ocrWorker:o,nsfwWorker:l}=e,c=(0,u.useRef)(null),f=(0,u.useRef)(null),x=(0,u.useRef)(0),{getSettings:m}=(0,d.r)(),g=e=>{e instanceof MediaStream&&c.current?(c.current.srcObject=e,window.localStream=e):console.warn("The provided value is not a MediaStream:",e),y()};(0,u.useEffect)(()=>{i.current=g},[]);let y=()=>{f.current(!1),x.current=1-m().autoMod.strictness/100,c.current&&(c.current.removeEventListener("canplaythrough",b),c.current.addEventListener("canplaythrough",b))},b=async e=>{if(c.current&&c.current.readyState>=4){var t,n,a,i;let e=null!==(i=null===(a=((null===(n=r.current)||void 0===n?void 0:null===(t=n.videoMetadata)||void 0===t?void 0:t.nsfwData)||[{className:"Neutral",probability:0}]).find(e=>"Neutral"===e.className))||void 0===a?void 0:a.probability)&&void 0!==i?i:0;console.log("### censorship ###",e,1-x.current),e>=1-x.current?(f.current(!1),c.current.volume=1,c.current.style.filter="",c.current.style.display="flex"):1!==x.current&&(f.current(!0),c.current.volume=0,c.current.style.filter="blur(16px) brightness(0.6)",c.current.style.display="flex")}};return(0,n.jsxs)(a.xu,{display:"flex",position:"relative",flexGrow:"1",flexShrink:"0",flex:"1",h:"100%",w:"100%",bg:"gray.900",children:[(0,n.jsx)(w,{}),(0,n.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"contain",zIndex:1,transform:"rotateY(180deg)"},ref:c,autoPlay:!0,playsInline:!0,onLoadedData:()=>{var e;null===(e=t.current)||void 0===e||e.updateVisible(!1)}}),(0,n.jsx)(p,{ref:t,partner:r,status:"",showSpinner:!1}),(0,n.jsx)(h,{videoRef:c,censorship:x,setCensoredRef:f,partnerVideoLoadingRef:t})]})}),b=u.memo(e=>{let{ocrWorker:t,nsfwWorker:r,faceDetectorWorker:i,setStreamRef:s,setLocalStreamRef:o,peerConnection:l,reconnect:d}=e,[f,p]=(0,u.useState)(null),h=(0,u.useRef)(null),w=(0,u.useRef)(null),y=["face","nsfw"],b=0,{setVideoMetadata:v}=(0,x.x)();(0,u.useEffect)(()=>(o.current=p,S(),()=>{p(null),j()}),[o]),(0,u.useEffect)(()=>{h.current&&f&&(h.current.srcObject=f)},[f]);let j=()=>{w.current&&clearInterval(w.current)},S=()=>{w.current=setInterval(k,5e3)},k=async()=>{switch(y[b]){case"spam":D();break;case"face":R();break;case"nsfw":C();break;case"videoPreview":I();break;default:throw Error("Invalid process job id")}b=(b+1)%y.length},I=()=>{if(h.current){let e=h.current.videoWidth,t=h.current.videoHeight,r=e,n=t;e>t?(r=64,n=64*t/e):(n=64,r=64*e/t);let a=document.createElement("canvas");a.width=r,a.height=n;let i=a.getContext("2d");i.translate(r,0),i.scale(-1,1),i.drawImage(h.current,0,0,r,n),a.toDataURL("image/png"),v({videoPreview:null})}},D=async()=>{if(h.current&&h.current.readyState>=4)try{let e=await createImageBitmap(h.current),r=await g(t.current,e);e.close(),v({spam:!!r})}catch(e){console.log("Error during ocr detection:",e)}},R=async()=>{if(h.current&&h.current.readyState>=4)try{let e=await createImageBitmap(h.current);i.current.postMessage({action:"detectFaces",imageBitmap:e}),i.current.onmessage=e=>{"faceDetections"===e.data.action?v({faces:e.data.faces}):"faceDetectorLoaded"===e.data.action||"error"===e.data.action&&console.warn("Face detection error:",e.data.error)},i.current.postMessage({action:"loadFaceDetector"})}catch(e){console.log("Error during face detection:",e)}},E=()=>{let e=Date.now()+108e5;localStorage.setItem("blacklisted",JSON.stringify({expiresAt:e}))},z=()=>{let e=localStorage.getItem("blacklisted");if(!e)return!1;let{expiresAt:t}=JSON.parse(e);return!(Date.now()>t)||(localStorage.removeItem("blacklisted"),!1)},C=async()=>{if(h.current&&h.current.readyState>=4)try{let e=await createImageBitmap(h.current);r.current.postMessage({action:"classify_image",imageBitmap:e,key:"us"}),r.current.onmessage=e=>{if("classification_result"===e.data.action&&"us"===e.data.key){let t=e.data.isNsfw,r=!!e.data.blacklist;r&&E(),console.log(t,z(),r),v({nsfw:t||z(),blacklisted:z(),nsfwData:e.data.predictions})}}}catch(e){console.log("Error during nsfw detection:",e)}};return f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"contain",transform:"rotateY(180deg)"},ref:h,autoPlay:!0,muted:!0,playsInline:!0}),(0,n.jsx)(a.xu,{display:{base:"initial",md:"none"},m:"2",position:"absolute",zIndex:1,children:(0,n.jsx)(()=>{let e=async()=>{d({reinitializeLocalStream:!0,constraints:{video:{frameRate:{ideal:30},width:{ideal:640},height:{ideal:480},facingMode:"user"===(f.getVideoTracks()[0].getConstraints().facingMode||"user")?"environment":"user"},audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}})};return(0,n.jsx)(c.h,{onPointerDown:e,colorScheme:"primary","aria-label":"Search database",icon:(0,n.jsx)(m.t5J,{fontSize:34})})},{})})]}):(0,n.jsx)(a.xu,{display:"flex",position:"relative",flexGrow:"1",flexShrink:"0",flex:"1",h:"100%",w:"100%",bg:"gray.900",alignItems:"center",justifyContent:"center",flexDirection:"column"})}),v=u.memo(e=>{let{setStreamRef:t,setLocalStreamRef:r,reconnect:i,partner:s,partnerVideoLoadingRef:o,peerConnection:l}=e,[c,d]=(0,u.useState)(),f=(0,u.useRef)({terminate:()=>{}}),x=(0,u.useRef)({terminate:()=>{},onmessage:()=>{},postMessage:()=>{}}),m=(0,u.useRef)({terminate:()=>{},onmessage:()=>{},postMessage:()=>{}}),g=async()=>{x.current=new Worker("/workers/nsfw.worker.js"),m.current=new Worker("/workers/facedetect.worker.js"),x.current.postMessage({action:"load_model"})},p=()=>{d(window.innerHeight)},h=()=>{d(window.innerHeight),window.addEventListener("resize",p)};return(0,u.useEffect)(()=>(g(),h(),()=>{f.current&&f.current.terminate(),m.current&&m.current.terminate(),x.current&&x.current.terminate(),window.removeEventListener("resize",p)}),[]),(0,n.jsxs)(a.xu,{display:"flex",flexDirection:"column",borderRadius:"xl",flex:"1",m:{base:2,md:3},mr:{base:2,md:0},maxW:{base:"initial",md:"640px"},maxH:{base:"calc(".concat(c,"px - 66px)"),md:"calc(".concat(c,"px - 95px)")},children:[(0,n.jsx)(a.xu,{display:"flex",flexGrow:"1",flexShrink:"0",bgSize:"cover",bgRepeat:"no-repeat",borderRadius:"xl",flex:"1",mb:{base:"2",md:3},overflowX:"hidden",alignItems:{base:"flex-end",md:"flex-start"},children:(0,n.jsx)(y,{partner:s,partnerVideoLoadingRef:o,ocrWorker:f,nsfwWorker:x,reconnect:i,setStreamRef:t})}),(0,n.jsx)(a.xu,{display:"flex",flexGrow:"1",flexShrink:"0",bgSize:"cover",bgRepeat:"no-repeat",borderRadius:"xl",flex:"1",overflowX:"hidden",bg:"gray.900",justifyContent:{base:"right",md:"initial"},alignItems:{base:"flex-start",md:"flex-start"},children:(0,n.jsx)(b,{ocrWorker:f,nsfwWorker:x,faceDetectorWorker:m,setLocalStreamRef:r,peerConnection:l,reconnect:i})})]})});t.default=v}}]);