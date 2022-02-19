var j=Object.defineProperty,B=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var f=(r,n,o)=>n in r?j(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,b=(r,n)=>{for(var o in n||(n={}))N.call(n,o)&&f(r,o,n[o]);if(h)for(var o of h(n))L.call(n,o)&&f(r,o,n[o]);return r},w=(r,n)=>B(r,A(n));var x=(r,n)=>{var o={};for(var i in r)N.call(r,i)&&n.indexOf(i)<0&&(o[i]=r[i]);if(r!=null&&h)for(var i of h(r))n.indexOf(i)<0&&L.call(r,i)&&(o[i]=r[i]);return o};import{j as z,R,r as p,u as O,a as k,c as E,b as y,F as C,d as I,e as U,L as $,N as q,O as H,B as M,f as V,g as d,h as D}from"./vendor.0c16ce12.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};K();const e=z.exports.jsx,t=z.exports.jsxs,W=()=>e("div",{children:"Home"});var G="/react-shop-vite/assets/burger.417e7b05.jpg",J="/react-shop-vite/assets/pizza.b9788ec0.jpg";const F=R.createContext(null),Q=({children:r})=>{const[n,o]=p.exports.useState(null),i=O(),s=k(),a=s.pathname==="/login"?"/":s.pathname,l=({username:c,password:m})=>c==="vimesh"&&m==="123"?(o({username:c,role:"admin"}),i(a,{replace:!0}),!0):c==="disha"&&m==="123"?(o({username:c,role:"normal"}),i(a,{replace:!0}),!0):(o(null),!1),u=()=>{o(null),i("/login")};return e(F.Provider,{value:{user:n,login:l,logout:u},children:r})},g=()=>p.exports.useContext(F);const T=({onLogin:r})=>{const n=E({username:y().required("Please Enter Username."),password:y().required("Please Enter Password.")});return t("div",{className:"form-container",children:[e("div",{className:"form-header",children:"Log In"}),e(C,{initialValues:{username:"",password:""},onSubmit:(i,{setSubmitting:s})=>{s(!1),r(i)},validationSchema:n,children:({values:i,errors:s,touched:a,isSubmitting:l,handleChange:u,handleBlur:c,handleSubmit:m})=>t("form",{onSubmit:m,children:[t("div",{className:"form-control",children:[e("div",{children:e("label",{htmlFor:"username",children:"Username"})}),e("div",{children:e("input",{type:"text",id:"username",name:"username",value:i.username,onChange:u,onBlur:c})}),e("div",{className:"error",children:s.username&&a.username&&e("span",{children:s.username})})]}),t("div",{className:"form-control",children:[e("div",{children:e("label",{htmlFor:"password",children:"Password"})}),e("div",{children:e("input",{type:"password",id:"password",name:"password",value:i.password,onChange:u,onBlur:c})}),e("div",{className:"error",children:s.password&&a.password&&e("span",{children:s.password})})]}),e("div",{className:"form-control",children:e("button",{type:"submit",disabled:l,children:"Login"})})]})})]})};const S=()=>{const r=g(),[n,o]=p.exports.useState(!1);return t("div",{className:"login-container",children:[t("div",{className:"login-info",children:[t("div",{className:"login-header",children:["Welcome to world's best",e("br",{}),"Burger & Pizza Shop"]}),t("div",{className:"login-image-container",children:[e("div",{children:e("img",{className:"login-image",alt:"Burger",src:J})}),e("div",{children:e("img",{className:"login-image",alt:"Pizza",src:G})})]})]}),e("div",{className:"login-form",children:e(T,{onLogin:s=>{const a=r==null?void 0:r.login(s);a===!1&&o(!a)}})})]})},X=()=>e("div",{children:"Profile"}),Y=()=>e("div",{children:"Unauthorized"}),v=i=>{var s=i,{children:r,to:n}=s,o=x(s,["children","to"]);const a=I(n),l=U({path:a.pathname,end:!0});return e($,w(b({to:n,className:l?"active":""},o),{children:r}))};const Z=()=>{const r=g(),n=()=>{r==null||r.logout()};return t("nav",{className:"nav-bar",children:[t("div",{className:"nav-block",children:[e("div",{className:"nav-logo",children:"\u{1F354} \u{1F355}"}),e("div",{className:"nav-link",children:e(v,{to:"/",children:"Home"})}),e("div",{className:"nav-link",children:e(v,{to:"/profile",children:"Profile"})})]}),e("div",{className:"nav-block",children:t("div",{className:"nav-link",children:[(r==null?void 0:r.user)&&t("span",{className:"nav-username",children:["Hi ",r.user.username]}),(r==null?void 0:r.user)!==null?e("a",{onClick:n,children:"Logout"}):e(v,{to:"/login",children:"Login"})]})})]})},P=({allowedRoles:r})=>{var s,a;const n=g(),o=k();if((n==null?void 0:n.user)===null)return e(S,{});let i=(a=(s=n==null?void 0:n.user)==null?void 0:s.role)!=null?a:"";return r.includes(i)?e(H,{}):e(q,{to:"/unauthorized",state:{from:o},replace:!0})},_=()=>e(M,{basename:"/react-shop-vite",children:t(Q,{children:[e(Z,{}),e("div",{className:"container",children:t(V,{children:[e(d,{element:e(P,{allowedRoles:["admin","normal"]}),children:e(d,{path:"/",element:e(W,{})})}),e(d,{element:e(P,{allowedRoles:["admin"]}),children:e(d,{path:"profile",element:e(X,{})})}),e(d,{path:"login",element:e(S,{})}),e(d,{path:"unauthorized",element:e(Y,{})})]})})]})});D.render(e(R.StrictMode,{children:e(_,{})}),document.getElementById("root"));