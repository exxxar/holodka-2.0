import{_ as b}from"./AuthenticatedLayout-DzZnZWrT.js";import{o as e,f as o,b as s,i as g,k as f,d as k,g as d,e as v,m as y,F as h,l as m,t as r,c as w,a as c,u as $,w as _,Z as j}from"./app-D_xPiCYI.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as V}from"./Pagination-7MxZZdZf.js";import"./ApplicationLogo-Cnn4CpTp.js";const x={data(){return{link:null,form:{group:null,max_post_count:30}}},computed:{user(){return window.user}},watch:{"form.group":{handler:function(n){if(this.form.group.indexOf("http")!==-1){let t=this.form.group.lastIndexOf("/")+1;this.form.group=this.form.group.substring(t)}},deep:!0}},mounted(){this.requestToken()},methods:{submit(){this.$store.dispatch("addWork",this.form).then(n=>{const t=new CustomEvent("jobs-reload-event");document.dispatchEvent(t)})},requestToken(){this.$store.dispatch("requestVKToken").then(n=>{this.link=n})}}},T={class:"form-floating mb-3"},q={key:0,class:"alert alert-light my-2"},C=["href"],I={class:"d-flex w-100 justify-center"},O=["disabled"];function P(n,t,i,l,a,u){return e(),o("form",{onSubmit:t[1]||(t[1]=v((...p)=>u.submit&&u.submit(...p),["prevent"])),class:"mb-2"},[s("div",T,[g(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=p=>a.form.group=p),id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,a.form.group]]),t[2]||(t[2]=s("label",{for:"floatingInput"},"Группа",-1))]),u.user.is_active_token?d("",!0):(e(),o("div",q,[t[3]||(t[3]=k(" Ваш тоукен недействительный! Обновите его! ")),a.link?(e(),o("a",{key:0,class:"btn btn-success mt-2 w-100 rounded-0 p-3",href:a.link},"Получить токен",8,C)):d("",!0)])),s("div",I,[s("button",{disabled:!u.user.is_active_token,class:"btn btn-primary rounded-0"},"Добавить задачу ",8,O)])],32)}const E=J(x,[["render",P]]),K={key:0,class:"row"},B={class:"col-12"},N={class:"table"},D={scope:"row"},F={key:0},L={key:1},M=["onClick"],S={key:1,class:"alert alert-light"},G={key:2,class:"row mb-3"},R={class:"col-12"},U={data(){return{current_page:0,jobs:[],pagination:null}},computed:{...y(["getJobs","getJobsPaginateObject"])},mounted(){this.loadJobs(),document.addEventListener("jobs-reload-event",n=>{this.loadJobs()})},methods:{removeJob(n){this.$store.dispatch("removeJob",{id:n.id}).then(t=>{this.loadJobs()})},loadJobs(n=0){this.current_page=n,this.$store.dispatch("loadJobs",{page:this.current_page}).then(t=>{this.jobs=this.getJobs,this.pagination=this.getJobsPaginateObject})}}},W=Object.assign(U,{__name:"JobsTable",setup(n){return(t,i)=>(e(),o(h,null,[t.jobs.length>0?(e(),o("div",K,[s("div",B,[s("table",N,[i[0]||(i[0]=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Группа"),s("th",{scope:"col"},"Максимальный охват"),s("th",{scope:"col"},"Собрано пользователей"),s("th",{scope:"col"},"Статус"),s("th",{scope:"col"},"Дата добавления"),s("th",{scope:"col"},"Действие")])],-1)),s("tbody",null,[(e(!0),o(h,null,m(t.jobs,(l,a)=>(e(),o("tr",null,[s("th",D,r(a+1),1),s("td",null,r(l.group),1),s("td",null,r(l.max_post_count),1),s("td",null,r(l.result_count),1),s("td",null,[l.completed_at==null?(e(),o("span",F,"В обработке")):(e(),o("span",L,"Завершено"))]),s("td",null,r(l.created_at),1),s("td",null,[s("button",{onClick:u=>t.removeJob(l),class:"btn btn-danger"},"Удалить",8,M)])]))),256))])])])])):(e(),o("div",S," Вы еще не добавили задачи в очередь! ")),t.jobs.length>0?(e(),o("div",G,[s("div",R,[t.pagination?(e(),w(V,{key:0,onPagination_page:t.loadJobs,pagination:t.pagination},null,8,["onPagination_page","pagination"])):d("",!0)])])):d("",!0)],64))}}),Z={class:"py-12"},z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},H={class:"row p-3"},Q={class:"col-4"},X={class:"card rounded-0"},Y={class:"card-body"},ss={key:0,class:"list-group rounded-0"},ts={class:"list-group-item"},es={class:"list-group-item"},os={class:"list-group-item"},ns={key:0},is={key:1},ls={class:"list-group-item"},rs={key:0},as={key:1},ds=["href"],us={class:"alert alert-success mb-2 rounded-0"},cs={class:"col-8"},hs={class:"row p-3"},ps={class:"col-12"},_s={data(){return{link:null,company:null,messages:[]}},mounted(){this.requestToken(),this.company=this.user.company||null,pusher.subscribe("my-channel").bind("my-event",t=>{t.userId===this.user.id&&(this.messages.push(t),this.$notify({title:"Внимание!",text:"Ваше задание #"+t.jobId+" успешно выполнено!",type:"success"}))})},computed:{logo(){return window.logo},user(){return window.user}},methods:{fillVK(){this.$store.dispatch("fillVK").then(n=>{})},storeCompany(){this.$store.dispatch("storeCompany",{company:this.company}).then(n=>{window.location.reload()})},requestToken(){this.$store.dispatch("requestVKToken",this.form).then(n=>{this.link=n})}}},vs=Object.assign(_s,{__name:"Dashboard",setup(n){return(t,i)=>(e(),o(h,null,[c($(j),{title:"Панель управления"}),c(b,null,{header:_(()=>i[0]||(i[0]=[s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Панель управления",-1)])),default:_(()=>[s("div",Z,[s("div",z,[s("div",A,[s("div",H,[s("div",Q,[s("div",X,[s("div",Y,[i[1]||(i[1]=s("h6",{class:"my-2 fw-bold"},"Профиль пользователя",-1)),t.user?(e(),o("ul",ss,[s("li",ts,r(t.user.name||"Без имени"),1),s("li",es,r(t.user.email||"Без почты"),1),s("li",os,[t.user.vk_access_token!=null&&t.user.is_active_token?(e(),o("p",ns,"Тоукен успешно установлен")):(e(),o("p",is,"Тоукен не задан"))]),s("li",ls,[t.user.vk_token_expired_at!=null?(e(),o("p",rs,r(t.user.vk_token_expired_at),1)):(e(),o("p",as,"Тоукен не задан"))])])):d("",!0),t.link&&t.user.company?(e(),o("a",{key:1,class:"btn btn-success mt-2 w-100 rounded-0 p-3",href:t.link},"Получить токен",8,ds)):d("",!0),i[2]||(i[2]=s("hr",{class:"my-2"},null,-1)),(e(!0),o(h,null,m(t.messages,l=>(e(),o("div",us," Собраны данные по группе "+r(l.group)+" (#"+r(l.jobId)+") ",1))),256))])])]),s("div",cs,[c(E)])]),s("div",hs,[s("div",ps,[i[3]||(i[3]=s("h6",{class:"my-2 fw-bold"},"Задачи в очереди",-1)),c(W)])])])])])]),_:1})],64))}});export{vs as default};
