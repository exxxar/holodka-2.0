import{i as u,y as c,o as t,f as s,b as d,t as l,r as m,G as p,x as _,q as f,k as g}from"./app-B-WCtaZJ.js";const v={class:"text-sm text-red-600"},S={__name:"InputError",props:{message:{type:String}},setup(e){return(a,o)=>u((t(),s("div",null,[d("p",v,l(e.message),1)],512)),[[c,e.message]])}},x={class:"block font-medium text-sm text-gray-700"},y={key:0},h={key:1},V={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,o)=>(t(),s("label",x,[e.value?(t(),s("span",y,l(e.value),1)):(t(),s("span",h,[m(a.$slots,"default")]))]))}},M={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const o=p(e,"modelValue"),n=_(null);return f(()=>{n.value.hasAttribute("autofocus")&&n.value.focus()}),a({focus:()=>n.value.focus()}),(b,r)=>u((t(),s("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[0]||(r[0]=i=>o.value=i),ref_key:"input",ref:n},null,512)),[[g,o.value]])}};export{V as _,M as a,S as b};
