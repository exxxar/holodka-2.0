import{o as s,f as i,b as o,n as f,F as c,G as g,t as d,g as l,L as h,d as a,i as v,k as y,M as b,c as A}from"./app-CZlpIIZB.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={props:["pagination"],data(){return{currentPage:1}},computed:{hasPagination(){return!(this.pagination===null||!this.pagination||this.pagination.meta.links[0].active===!1&&this.pagination.meta.links[this.pagination.meta.links.length-1].active===!1)},filteredLinks(){return this.pagination?(parseInt(this.pagination.meta.current_page),this.pagination.meta.links):[]}},methods:{nextPage(){this.currentPage=this.pagination.meta.current_page+1,this.$emit("pagination_page",this.pagination.meta.current_page+1)},page(r){this.currentPage=r,window.scrollTo({top:500,behavior:"smooth"}),this.$emit("pagination_page",r)},prevPage(){this.currentPage!==1&&(this.currentPage=this.pagination.meta.current_page-1,this.$emit("pagination_page",this.pagination.meta.current_page-1))}}},F={key:0,class:"row d-flex justify-content-center"},P={key:0,class:"col-lg-6 dt-pagination d-flex justify-content-center align-items-center"},$={"aria-label":"Page navigation example"},L={class:"pagination"},I={class:"page-item"},S=["onClick"],O={class:"page-item"};function j(r,t,e,n,p,u){return e.pagination?(s(),i("div",F,[e.pagination.links?(s(),i("div",P,[o("nav",$,[o("ul",L,[o("li",I,[o("a",{class:f(["page-link rounded-0",{disabled:e.pagination.links.prev===null}]),onClick:t[0]||(t[0]=(...m)=>u.prevPage&&u.prevPage(...m)),"aria-label":"Previous"},t[2]||(t[2]=[o("span",{"aria-hidden":"true"},"«",-1)]),2)]),(s(!0),i(c,null,g(u.filteredLinks,(m,k)=>(s(),i("li",{class:f(["page-item",{"active-dark":k===e.pagination.meta.current_page}]),key:"paginate"+k,onClick:it=>u.page(k)},[k!==0&&k!==u.filteredLinks.length-1?(s(),i("a",{key:0,class:f(["page-link rounded-0",{"text-secondary":k!==e.pagination.meta.current_page}]),href:"#"},d(m.label),3)):l("",!0)],10,S))),128)),o("li",O,[o("a",{class:f(["page-link rounded-0 text-secondary",{disabled:e.pagination.links.next===null}]),onClick:t[1]||(t[1]=(...m)=>u.nextPage&&u.nextPage(...m)),"aria-label":"Next "},t[3]||(t[3]=[o("span",{"aria-hidden":"true"},"»",-1)]),2)])])])])):l("",!0)])):l("",!0)}const _=w(C,[["render",j]]),U={class:"alert alert-light my-2 rounded-0"},V={class:"d-flex w-100 flex-wrap align-items-center"},T=["onClick"],N={class:"alert alert-light my-2 rounded-0"},B={class:"d-flex w-100 flex-wrap align-items-center"},R=["onClick"],D={key:0,class:"alert alert-light my-2 rounded-0"},M={class:"d-flex w-100 flex-wrap align-items-center"},G=["onClick"],J={class:"alert alert-light mb-2 rounded-0"},z={class:"d-flex w-100 flex-wrap align-items-center"},E={class:"form-floating mr-2"},q={class:"form-floating"},H={class:"row"},K={class:"col-12"},Q={class:"input-group"},W={class:"form-floating"},X={class:"d-flex w-100 flex-wrap align-items-center mt-2"},Y={key:1,class:"mt-3 mb-0"},Z={class:"fw-bold"},x={key:2,class:"d-flex scrollable-area py-5 mb-3"},ee={key:0,class:"table table-responsive"},te={key:0},se={key:1},ie={key:0},oe={key:1},le={key:0},ne={key:1},re={key:0},ae={key:1},de={key:0},ue={key:1},pe={key:0},ce={key:1},fe={key:0},me={key:1},ke={key:0},ge={key:1},ve={key:0},ye={key:1},he={key:0},be={key:1},Ae={key:0},we={key:1},Ce={key:0},Fe={key:1},Pe={key:0},$e={key:1},Le={key:0},Ie={key:1},Se={key:0},Oe={key:1},je={key:0},_e={key:1},Ue={key:1,style:{"min-width":"200px"},class:"text-center"},Ve={class:"form-floating"},Te=["onChange","onUpdate:modelValue"],Ne=["value"],Be=["onClick"],Re=["onClick"],De={key:4,class:"text-center"},Me={key:5,class:"text-center"},Ge={key:6,class:"text-center"},Je={key:7,class:"text-center"},ze=["onClick","href"],Ee={key:0,class:"small fst-italic mb-0 mt-1",style:{"line-height":"100%"}},qe={key:8,class:"text-center"},He={key:9,class:"text-center"},Ke={key:10,class:"text-center"},Qe={key:11,class:"text-center"},We={key:12,class:"text-center"},Xe={key:13,class:"text-center"},Ye={key:14,class:"text-center"},Ze={key:15,class:"text-center"},xe={key:3,class:"alert alert-success",role:"alert"},et={key:4,class:"row mb-3"},tt={class:"col-12"},st={data(){return{loaded:!0,loaded_cities:!0,sort:{column:null,direction:"desc",filters:{statuses:[],cities:[],age:{from:null,to:null}}},search:null,current_page:0,paginate_object:null,cities:[],statuses:["Только добавлен","Взят в обработку","Отказ","Сомневается","Успех"],visible_fields:[{title:"№",key:"id",order:0,active:!0},{title:"Статус",key:"status",order:0,active:!1},{title:"Ф.И.О.",key:"name",order:0,active:!0},{title:"Возраст",key:"age",order:0,active:!0},{title:"Д.Р.",key:"birthday",order:0,active:!0},{title:"Группа в ВК",key:"vk_group_link",order:0,active:!1},{title:"Ссылка на пользователя",key:"vk_user_link",order:0,active:!0},{title:"Источник сбора",key:"from",order:0,active:!1},{title:"Город проживания",key:"city",order:0,active:!0},{title:"Число общих друзей",key:"common_count",order:0,active:!1},{title:"Родной город",key:"home_town",order:0,active:!1},{title:"Дата последнего онлайна",key:"last_seen",order:0,active:!1},{title:"Профиль открыть",key:"is_profile_closed",order:0,active:!1},{title:"Сообщения открыты",key:"is_messages_closed",order:0,active:!1},{title:"Состояние учетки",key:"deactivated",order:0,active:!1},{title:"Взят в работу",key:"checked_at",order:0,active:!1},{title:"Пояснение по человеку",key:"checked_comment",order:0,active:!0},{title:"Дата обновления данных",key:"updated_at",order:0,active:!1}],items:[{id:null,name:null,age:null,birthday:null,vk_group_link:null,vk_user_link:null,city:null,from:null,common_count:0,home_town:null,last_seen:null,is_profile_closed:!1,is_messages_closed:!1,deactivated:!1,owner_id:null,checked_at:null,vk_id:null,status:0,checked_comment:null}]}},computed:{...h(["getPersons","getPersonsPaginateObject"])},mounted(){if(this.loadAllCities(),this.loadPersons(),localStorage.getItem("ya_v_dele_visible_fields")){let r=JSON.parse(localStorage.getItem("ya_v_dele_visible_fields"))||[];this.visible_fields.length===r.length&&(this.visible_fields=r)}},methods:{loadAllCities(){this.loaded_cities=!1,this.$store.dispatch("loadAllCities").then(r=>{this.cities=r.cities||[],this.loaded_cities=!0}).catch(()=>{})},checkItem(r){this.items[r].checked_at=new Date,this.$store.dispatch("checkPerson",{person_id:this.items[r].id})},changePersonStatus(r){this.$store.dispatch("changePersonStatus",{person_id:this.items[r].id,status:this.items[r].status||0}).then(()=>{this.$notify({title:"Смена статуса",text:"Статус успешно изменен",type:"success"})}).catch(()=>{this.$notify({title:"Смена статуса",text:"Ошибка изменения статуса",type:"error"})})},changeFieldStatus(r){this.loaded=!1,this.$nextTick(()=>{this.visible_fields[r].active=!this.visible_fields[r].active,localStorage.setItem("ya_v_dele_visible_fields",JSON.stringify(this.visible_fields)),this.loaded=!0})},isFieldActive(r){if(!this.visible_fields||(this.visible_fields||[]).length===0)return!0;let t=this.visible_fields.findIndex(e=>e.key===r);return t===-1?!0:this.visible_fields[t].active},sortAndLoad(r){this.sort.column=r,this.sort.direction=this.sort.direction==="desc"?"asc":"desc",this.loadPersons(this.current_page)},resetFilters(){this.sort.filters.age.from=null,this.sort.filters.age.to=null,this.sort.filters.cities=[],this.sort.filters.statuses=[],this.search=null,this.loadPersons(0)},loadPersons(r=0){this.current_page=r,this.$store.dispatch("loadPersons",{dataObject:{search:this.search,filters:this.sort.filters,order:this.sort.column,direction:this.sort.direction},page:this.current_page}).then(t=>{this.items=this.getPersons,this.paginate_object=this.getPersonsPaginateObject}).catch(()=>{this.loading=!1})},selectItem(r){this.$emit("select",r)},changeCityFilter(r){let t=this.sort.filters.cities.findIndex(e=>e===r);t===-1?this.sort.filters.cities.push(r):this.sort.filters.cities.splice(t,1)},filterAndLoad(){axios({url:"/persons/excel-download",method:"POST",responseType:"blob",data:{search:this.search,filters:this.sort.filters,order:this.sort.column,direction:this.sort.direction,fields:this.visible_fields}}).then(r=>{const t=URL.createObjectURL(r.data);window.open(t,"_blank").focus(),URL.revokeObjectURL(t)})},changeStatusFilter(r){let t=this.sort.filters.statuses.findIndex(e=>e===r);t===-1?this.sort.filters.statuses.push(r):this.sort.filters.statuses.splice(t,1)},removeItem(r){this.$store.dispatch("removePerson",{materialId:r}).then(()=>{this.sortAndLoad("id")})}}},nt=Object.assign(st,{__name:"PersonTable",setup(r){return(t,e)=>(s(),i(c,null,[o("div",U,[o("div",V,[e[24]||(e[24]=o("h6",{class:"mr-2"},"Отображаемые поля: ",-1)),(s(!0),i(c,null,g(t.visible_fields,(n,p)=>(s(),i(c,null,[o("span",{class:f(["badge m-0 cursor-pointer",{"bg-primary":n.active,"bg-secondary text-white":!n.active}]),onClick:u=>t.changeFieldStatus(p)},d(n.title),11,T),e[23]||(e[23]=a(", "))],64))),256))])]),o("div",N,[o("div",B,[e[26]||(e[26]=o("h6",{class:"mr-2"},"Фильтры статуса: ",-1)),(s(!0),i(c,null,g(t.statuses,(n,p)=>(s(),i(c,null,[o("span",{class:f(["badge m-0 cursor-pointer",{"bg-primary":t.sort.filters.statuses.indexOf(p)!==-1,"bg-secondary text-white":t.sort.filters.statuses.indexOf(p)===-1}]),onClick:u=>t.changeStatusFilter(p)},d(n),11,R),e[25]||(e[25]=a(", "))],64))),256))])]),t.loaded_cities?(s(),i("div",D,[o("div",M,[e[28]||(e[28]=o("h6",{class:"mr-2"},"Фильтры городов: ",-1)),o("span",{class:f(["badge m-0 cursor-pointer",{"bg-primary":t.sort.filters.cities.indexOf("Без города")!==-1,"bg-secondary text-white":t.sort.filters.cities.indexOf("Без города")===-1}]),onClick:e[0]||(e[0]=n=>t.changeCityFilter("Без города"))}," Без города ",2),e[29]||(e[29]=a(", ")),(s(!0),i(c,null,g(t.cities,(n,p)=>(s(),i(c,null,[o("span",{class:f(["badge m-0 cursor-pointer",{"bg-primary":t.sort.filters.cities.indexOf(n)!==-1,"bg-secondary text-white":t.sort.filters.cities.indexOf(n)===-1}]),onClick:u=>t.changeCityFilter(n)},d(n),11,G),e[27]||(e[27]=a(", "))],64))),256))])])):l("",!0),o("div",J,[o("div",z,[e[32]||(e[32]=o("h6",{class:"mr-2"},"Фильтр возраста: ",-1)),o("div",E,[v(o("input",{type:"number",min:"0","onUpdate:modelValue":e[1]||(e[1]=n=>t.sort.filters.age.from=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[y,t.sort.filters.age.from]]),e[30]||(e[30]=o("label",{for:"floatingInput"},"Начальное значение",-1))]),o("div",q,[v(o("input",{type:"number",max:"200","onUpdate:modelValue":e[2]||(e[2]=n=>t.sort.filters.age.to=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[y,t.sort.filters.age.to]]),e[31]||(e[31]=o("label",{for:"floatingInput"},"Конечное значение",-1))])])]),o("form",H,[o("div",K,[o("div",Q,[o("div",W,[v(o("input",{type:"search","onUpdate:modelValue":e[3]||(e[3]=n=>t.search=n),class:"form-control",id:"search-persons"},null,512),[[y,t.search]]),e[33]||(e[33]=o("label",{for:"search-persons"},"Поиск по клиентам",-1))]),o("button",{type:"button",onClick:e[4]||(e[4]=n=>t.loadPersons(0)),class:"btn btn-outline-secondary rounded-0"},e[34]||(e[34]=[o("i",{class:"fa-solid fa-magnifying-glass"},null,-1),a(" Применить фильтры ")])),o("button",{type:"button",onClick:e[5]||(e[5]=(...n)=>t.resetFilters&&t.resetFilters(...n)),class:"btn btn-outline-danger rounded-0"}," Сбросить ")])])]),o("div",X,[o("button",{type:"button",onClick:e[6]||(e[6]=(...n)=>t.filterAndLoad&&t.filterAndLoad(...n)),class:"btn btn-primary rounded-0"}," Скачать эксель ")]),t.paginate_object?(s(),i("p",Y,[e[35]||(e[35]=a("Всего найдено: ")),o("span",Z,d(t.paginate_object.meta.total||0),1)])):l("",!0),t.loaded?(s(),i("div",x,[t.items.length>0?(s(),i("table",ee,[o("thead",null,[o("tr",null,[t.isFieldActive("id")?(s(),i("th",{key:0,scope:"col",class:"cursor-pointer",onClick:e[7]||(e[7]=n=>t.sortAndLoad("id"))},[e[38]||(e[38]=a("# ")),t.sort.direction==="desc"&&t.sort.column==="id"?(s(),i("span",te,e[36]||(e[36]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="id"?(s(),i("span",se,e[37]||(e[37]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("status")?(s(),i("th",{key:1,scope:"col",class:"text-center cursor-pointer",onClick:e[8]||(e[8]=n=>t.sortAndLoad("status"))},[e[41]||(e[41]=a("Статус ")),t.sort.direction==="desc"&&t.sort.column==="status"?(s(),i("span",ie,e[39]||(e[39]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="status"?(s(),i("span",oe,e[40]||(e[40]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("name")?(s(),i("th",{key:2,scope:"col",class:"text-center cursor-pointer",onClick:e[9]||(e[9]=n=>t.sortAndLoad("name"))},[e[44]||(e[44]=a("ФИО ")),t.sort.direction==="desc"&&t.sort.column==="name"?(s(),i("span",le,e[42]||(e[42]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="name"?(s(),i("span",ne,e[43]||(e[43]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("age")?(s(),i("th",{key:3,scope:"col",class:"text-center cursor-pointer",onClick:e[10]||(e[10]=n=>t.sortAndLoad("age"))},[e[47]||(e[47]=a("Возраст ")),t.sort.direction==="desc"&&t.sort.column==="age"?(s(),i("span",re,e[45]||(e[45]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="age"?(s(),i("span",ae,e[46]||(e[46]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("birthday")?(s(),i("th",{key:4,scope:"col",class:"text-center cursor-pointer",onClick:e[11]||(e[11]=n=>t.sortAndLoad("birthday"))},[e[50]||(e[50]=a("Д.Р. ")),t.sort.direction==="desc"&&t.sort.column==="birthday"?(s(),i("span",de,e[48]||(e[48]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="birthday"?(s(),i("span",ue,e[49]||(e[49]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("city")?(s(),i("th",{key:5,scope:"col",class:"text-center cursor-pointer",onClick:e[12]||(e[12]=n=>t.sortAndLoad("city"))},[e[53]||(e[53]=a("Текущий город ")),t.sort.direction==="desc"&&t.sort.column==="city"?(s(),i("span",pe,e[51]||(e[51]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="city"?(s(),i("span",ce,e[52]||(e[52]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("vk_group_link")?(s(),i("th",{key:6,scope:"col",class:"text-center cursor-pointer",onClick:e[13]||(e[13]=n=>t.sortAndLoad("vk_group_link"))},[e[56]||(e[56]=a("Группа вк ")),t.sort.direction==="desc"&&t.sort.column==="vk_group_link"?(s(),i("span",fe,e[54]||(e[54]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="vk_group_link"?(s(),i("span",me,e[55]||(e[55]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("vk_user_link")?(s(),i("th",{key:7,scope:"col",class:"text-center cursor-pointer",onClick:e[14]||(e[14]=n=>t.sortAndLoad("vk_user_link"))},[e[59]||(e[59]=a("Ссылка ")),t.sort.direction==="desc"&&t.sort.column==="vk_user_link"?(s(),i("span",ke,e[57]||(e[57]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="vk_user_link"?(s(),i("span",ge,e[58]||(e[58]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("from")?(s(),i("th",{key:8,scope:"col",class:"text-center cursor-pointer",onClick:e[15]||(e[15]=n=>t.sortAndLoad("from"))},[e[62]||(e[62]=a("Источник ")),t.sort.direction==="desc"&&t.sort.column==="from"?(s(),i("span",ve,e[60]||(e[60]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="from"?(s(),i("span",ye,e[61]||(e[61]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("common_count")?(s(),i("th",{key:9,scope:"col",class:"text-center cursor-pointer",onClick:e[16]||(e[16]=n=>t.sortAndLoad("common_count"))},[e[65]||(e[65]=a("Число общих друзей ")),t.sort.direction==="desc"&&t.sort.column==="common_count"?(s(),i("span",he,e[63]||(e[63]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="common_count"?(s(),i("span",be,e[64]||(e[64]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("home_town")?(s(),i("th",{key:10,scope:"col",class:"text-center cursor-pointer",onClick:e[17]||(e[17]=n=>t.sortAndLoad("home_town"))},[e[68]||(e[68]=a("Родной город ")),t.sort.direction==="desc"&&t.sort.column==="home_town"?(s(),i("span",Ae,e[66]||(e[66]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="home_town"?(s(),i("span",we,e[67]||(e[67]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("last_seen")?(s(),i("th",{key:11,scope:"col",class:"text-center cursor-pointer",onClick:e[18]||(e[18]=n=>t.sortAndLoad("last_seen"))},[e[71]||(e[71]=a("Дата последнего онлайна ")),t.sort.direction==="desc"&&t.sort.column==="last_seen"?(s(),i("span",Ce,e[69]||(e[69]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="last_seen"?(s(),i("span",Fe,e[70]||(e[70]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("is_profile_closed")?(s(),i("th",{key:12,scope:"col",class:"text-center cursor-pointer",onClick:e[19]||(e[19]=n=>t.sortAndLoad("is_profile_closed"))},[e[74]||(e[74]=a("Закрыт профиль? ")),t.sort.direction==="desc"&&t.sort.column==="is_profile_closed"?(s(),i("span",Pe,e[72]||(e[72]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="is_profile_closed"?(s(),i("span",$e,e[73]||(e[73]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("is_messages_closed")?(s(),i("th",{key:13,scope:"col",class:"text-center cursor-pointer",onClick:e[20]||(e[20]=n=>t.sortAndLoad("is_messages_closed"))},[e[77]||(e[77]=a("Закрыты сообщения? ")),t.sort.direction==="desc"&&t.sort.column==="is_messages_closed"?(s(),i("span",Le,e[75]||(e[75]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="is_messages_closed"?(s(),i("span",Ie,e[76]||(e[76]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("deactivated")?(s(),i("th",{key:14,scope:"col",class:"text-center cursor-pointer",onClick:e[21]||(e[21]=n=>t.sortAndLoad("deactivated"))},[e[80]||(e[80]=a("Состояние учетки ")),t.sort.direction==="desc"&&t.sort.column==="deactivated"?(s(),i("span",Se,e[78]||(e[78]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="deactivated"?(s(),i("span",Oe,e[79]||(e[79]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0),t.isFieldActive("updated_at")?(s(),i("th",{key:15,scope:"col",class:"text-center cursor-pointer",onClick:e[22]||(e[22]=n=>t.sortAndLoad("updated_at"))},[e[83]||(e[83]=a(" Дата изменения ")),t.sort.direction==="desc"&&t.sort.column==="updated_at"?(s(),i("span",je,e[81]||(e[81]=[o("i",{class:"fa-solid fa-caret-down"},null,-1)]))):l("",!0),t.sort.direction==="asc"&&t.sort.column==="updated_at"?(s(),i("span",_e,e[82]||(e[82]=[o("i",{class:"fa-solid fa-caret-up"},null,-1)]))):l("",!0)])):l("",!0)])]),o("tbody",null,[(s(!0),i(c,null,g(t.items,(n,p)=>(s(),i("tr",null,[t.isFieldActive("id")?(s(),i("th",{key:0,class:f({"bg-warning":n.checked_at!=null}),scope:"row"},d(n.id||p),3)):l("",!0),t.isFieldActive("status")?(s(),i("td",Ue,[o("div",Ve,[v(o("select",{onChange:u=>t.changePersonStatus(p),"onUpdate:modelValue":u=>t.items[p].status=u,class:"form-select",id:"floatingSelect","aria-label":"Floating label select example"},[(s(!0),i(c,null,g(t.statuses,(u,m)=>(s(),i("option",{value:m},d(u),9,Ne))),256))],40,Te),[[b,t.items[p].status]]),e[84]||(e[84]=o("label",{for:"floatingSelect"},"Статус обработки клиента",-1))])])):l("",!0),t.isFieldActive("name")?(s(),i("td",{key:2,class:"text-center",onClick:u=>t.selectItem(n)},d(n.name||"-"),9,Be)):l("",!0),t.isFieldActive("age")?(s(),i("td",{key:3,class:"text-center",onClick:u=>t.selectItem(n)},d(n.age||"-"),9,Re)):l("",!0),t.isFieldActive("birthday")?(s(),i("td",De,d(n.birthday||"-"),1)):l("",!0),t.isFieldActive("city")?(s(),i("td",Me,d(n.city||"-"),1)):l("",!0),t.isFieldActive("vk_group_link")?(s(),i("td",Ge,d(n.vk_group_link||"-"),1)):l("",!0),t.isFieldActive("vk_user_link")?(s(),i("td",Je,[o("a",{target:"_blank",onClick:u=>t.checkItem(p),class:"btn btn-success",href:"https://vk.com/im?sel="+n.vk_id},"Открыть диалог",8,ze),n.is_messages_closed?(s(),i("p",Ee,"Сообщения закрыты")):l("",!0)])):l("",!0),t.isFieldActive("from")?(s(),i("td",qe,d(n.from||"-"),1)):l("",!0),t.isFieldActive("common_count")?(s(),i("td",He,d(n.common_count||"-"),1)):l("",!0),t.isFieldActive("home_town")?(s(),i("td",Ke,d(n.home_town||"-"),1)):l("",!0),t.isFieldActive("last_seen")?(s(),i("td",Qe,d(n.last_seen||"-"),1)):l("",!0),t.isFieldActive("is_profile_closed")?(s(),i("td",We,d(n.is_profile_closed?"Закрытый":"Открытый"),1)):l("",!0),t.isFieldActive("is_messages_closed")?(s(),i("td",Xe,d(n.is_messages_closed?"Закрытые":"Открытые"),1)):l("",!0),t.isFieldActive("deactivated")?(s(),i("td",Ye,d(n.deactivated||"Активна"),1)):l("",!0),t.isFieldActive("updated_at")?(s(),i("td",Ze,d(n.updated_at||"-"),1)):l("",!0)]))),256))])])):l("",!0)])):l("",!0),t.items.length===0?(s(),i("div",xe,e[85]||(e[85]=[o("h4",{class:"alert-heading"},"Клиенты",-1),o("p",null,"К сожалению, раздел клиентов пуст. Вы еще не добавили ни одного клиента, которых можно отобразить на этой странице.",-1),o("hr",null,null,-1),o("p",{class:"mb-0"},"Воспользуйтесь формой выше и добавьте своего первого клиента",-1)]))):l("",!0),t.items.length>0?(s(),i("div",et,[o("div",tt,[t.paginate_object?(s(),A(_,{key:0,onPagination_page:t.loadPersons,pagination:t.paginate_object},null,8,["onPagination_page","pagination"])):l("",!0)])])):l("",!0)],64))}});export{nt as _};
