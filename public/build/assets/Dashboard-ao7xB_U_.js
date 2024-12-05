import{_ as g}from"./AuthenticatedLayout-C6-T0Ejd.js";import{o as e,f as o,b as s,i as h,k as m,g as d,e as v,F as p,m as k,l as f,t as r,c as y,a as _,u as w,w as b,Z as $}from"./app-DrZA31Hp.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as J}from"./Pagination-Crsr8c9P.js";import"./ApplicationLogo-klrTZtGm.js";const x={data(){return{form:{group:null,max_post_count:30}}},computed:{user(){return window.user}},watch:{"form.group":{handler:function(n){if(this.form.group.indexOf("http")!==-1){let t=this.form.group.lastIndexOf("/")+1;this.form.group=this.form.group.substring(t)}},deep:!0}},methods:{submit(){this.$store.dispatch("addWork",this.form).then(n=>{const t=new CustomEvent("jobs-reload-event");document.dispatchEvent(t)})}}},V={class:"form-floating mb-3"},I={class:"form-floating mb-3"},q={key:0,class:"alert alert-light my-2"},O={class:"d-flex w-100 justify-center"},P=["disabled"],C={class:"d-flex w-100 justify-center mb-2"},E=["href"];function T(n,t,l,i,a,u){return e(),o(p,null,[s("form",{onSubmit:t[2]||(t[2]=v((...c)=>u.submit&&u.submit(...c),["prevent"])),class:"mb-2"},[s("div",V,[h(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=c=>a.form.group=c),id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[m,a.form.group]]),t[3]||(t[3]=s("label",{for:"floatingInput"},"Группа",-1))]),t[5]||(t[5]=s("div",{class:"alert alert-info rounded-0"}," Количество постов, которые можно охватить. Чем больше глубина тем дольше время ожидания обработки. Рекомендуемое значение от 30 до 100 в зависимости от числа подписчиков в группе. Чем больше подписчиков тем ниже должна быть глубина обработки. ",-1)),s("div",I,[h(s("input",{type:"number",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=c=>a.form.max_post_count=c),max:"100",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[m,a.form.max_post_count]]),t[4]||(t[4]=s("label",{for:"floatingInput"},"Глубина обработки страницы",-1))]),u.user.is_active_token?d("",!0):(e(),o("div",q," Ваш тоукен недействительный! Обновите его! ")),s("div",O,[s("button",{disabled:!u.user.is_active_token,class:"btn btn-primary rounded-0"},"Добавить задачу ",8,P)])],32),s("div",C,[n.link?(e(),o("a",{key:0,class:"btn btn-success rounded-0",href:n.link},"Запустить процесс",8,E)):d("",!0)])],64)}const B=j(x,[["render",T]]),K={key:0,class:"row"},D={class:"col-12"},F={class:"table"},N={scope:"row"},L={key:0},M={key:1},S=["onClick"],U={key:1,class:"alert alert-light"},G={key:2,class:"row mb-3"},R={class:"col-12"},W={data(){return{current_page:0,jobs:[],pagination:null}},computed:{...k(["getJobs","getJobsPaginateObject"])},mounted(){this.loadJobs(),document.addEventListener("jobs-reload-event",n=>{this.loadJobs()})},methods:{removeJob(n){this.$store.dispatch("removeJob",{id:n.id}).then(t=>{this.loadJobs()})},loadJobs(n=0){this.current_page=n,this.$store.dispatch("loadJobs",{page:this.current_page}).then(t=>{this.jobs=this.getJobs,this.pagination=this.getJobsPaginateObject})}}},Z=Object.assign(W,{__name:"JobsTable",setup(n){return(t,l)=>(e(),o(p,null,[t.jobs.length>0?(e(),o("div",K,[s("div",D,[s("table",F,[l[0]||(l[0]=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Группа"),s("th",{scope:"col"},"Максимальный охват"),s("th",{scope:"col"},"Собрано пользователей"),s("th",{scope:"col"},"Статус"),s("th",{scope:"col"},"Дата добавления"),s("th",{scope:"col"},"Действие")])],-1)),s("tbody",null,[(e(!0),o(p,null,f(t.jobs,(i,a)=>(e(),o("tr",null,[s("th",N,r(a+1),1),s("td",null,r(i.group),1),s("td",null,r(i.max_post_count),1),s("td",null,r(i.result_count),1),s("td",null,[i.completed_at==null?(e(),o("span",L,"В обработке")):(e(),o("span",M,"Завершено"))]),s("td",null,r(i.created_at),1),s("td",null,[s("button",{onClick:u=>t.removeJob(i),class:"btn btn-danger"},"Удалить",8,S)])]))),256))])])])])):(e(),o("div",U," Вы еще не добавили задачи в очередь! ")),t.jobs.length>0?(e(),o("div",G,[s("div",R,[t.pagination?(e(),y(J,{key:0,onPagination_page:t.loadJobs,pagination:t.pagination},null,8,["onPagination_page","pagination"])):d("",!0)])])):d("",!0)],64))}}),z={class:"py-12"},A={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Q={class:"row p-3"},X={class:"col-4"},Y={class:"card"},ss={class:"card-body"},ts={key:0,class:"list-group"},es={class:"list-group-item"},os={class:"list-group-item"},ns={class:"list-group-item"},ls={key:0},is={key:1},rs={class:"list-group-item"},as={key:0},ds={key:1},us=["href"],cs={class:"alert alert-success mb-2"},ps={class:"col-8"},_s={class:"row p-3"},hs={class:"col-12"},ms={data(){return{link:null,messages:[]}},mounted(){this.requestToken(),pusher.subscribe("my-channel").bind("my-event",t=>{t.userId===this.user.id&&(this.messages.push(t),this.$notify({title:"Внимание!",text:"Ваше задание #"+t.jobId+" успешно выполнено!",type:"success"}))})},computed:{logo(){return window.logo},user(){return window.user}},methods:{fillVK(){this.$store.dispatch("fillVK").then(n=>{})},requestToken(){this.$store.dispatch("requestVKToken",this.form).then(n=>{this.link=n})}}},ys=Object.assign(ms,{__name:"Dashboard",setup(n){return(t,l)=>(e(),o(p,null,[_(w($),{title:"Панель управления"}),_(g,null,{header:b(()=>l[0]||(l[0]=[s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Панель управления",-1)])),default:b(()=>[s("div",z,[s("div",A,[s("div",H,[s("div",Q,[s("div",X,[s("div",Y,[s("div",ss,[l[1]||(l[1]=s("h6",{class:"my-2 fw-bold"},"Профиль пользователя",-1)),t.user?(e(),o("ul",ts,[s("li",es,r(t.user.name||"Без имени"),1),s("li",os,r(t.user.email||"Без почты"),1),s("li",ns,[t.user.vk_access_token!=null&&t.user.is_active_token?(e(),o("p",ls,"Тоукен успешно установлен")):(e(),o("p",is,"Тоукен не задан"))]),s("li",rs,[t.user.vk_token_expired_at!=null?(e(),o("p",as,r(t.user.vk_token_expired_at),1)):(e(),o("p",ds,"Тоукен не задан"))])])):d("",!0),t.link?(e(),o("a",{key:1,class:"btn btn-success mt-2 w-100 rounded-2",href:t.link},"Получить токен",8,us)):d("",!0),l[2]||(l[2]=s("hr",{class:"my-2"},null,-1)),(e(!0),o(p,null,f(t.messages,i=>(e(),o("div",cs," Собраны данные по группе "+r(i.group)+" (#"+r(i.jobId)+") ",1))),256))])])]),s("div",ps,[_(B)])]),s("div",_s,[s("div",hs,[l[3]||(l[3]=s("h6",{class:"my-2 fw-bold"},"Задачи в очереди",-1)),_(Z)])])])])])]),_:1})],64))}});export{ys as default};
