import{m as y,o,f as i,b as t,F as p,l as m,n as c,t as a,d,g as r,i as k,k as g,M as b,c as h}from"./app-Bv3Nug7u.js";import{P as A}from"./Pagination-CM8t7jUx.js";const w={class:"alert alert-light my-2 rounded-0"},C={class:"d-flex w-100 flex-wrap align-items-center"},F=["onClick"],$={class:"alert alert-light my-2 rounded-0"},L={class:"d-flex w-100 flex-wrap align-items-center"},O=["onClick"],P={key:0,class:"alert alert-light my-2 rounded-0"},I={class:"d-flex w-100 flex-wrap align-items-center"},S=["onClick"],j={key:1,class:"alert alert-light my-2 rounded-0"},G={class:"d-flex w-100 flex-wrap align-items-center"},U=["onClick"],V={class:"alert alert-light mb-2 rounded-0"},M={class:"d-flex w-100 flex-wrap align-items-center"},T={class:"form-floating mr-2"},N={class:"form-floating"},B={class:"row"},R={class:"col-12"},D={class:"input-group"},J={class:"form-floating"},z={class:"d-flex w-100 flex-wrap align-items-center mt-2"},E={key:2,class:"mt-3 mb-0"},q={class:"fw-bold"},H={key:3,class:"d-flex scrollable-area py-5 mb-3"},K={key:0,class:"table table-responsive"},Q={key:0},W={key:1},X={key:0},Y={key:1},Z={key:0},_={key:1},x={key:0},ss={key:1},es={key:0},ts={key:1},os={key:0},is={key:1},ls={key:0},rs={key:1},ns={key:0},ds={key:1},as={key:0},us={key:1},ps={key:0},fs={key:1},cs={key:0},ms={key:1},ks={key:0},gs={key:1},vs={key:0},ys={key:1},bs={key:0},hs={key:1},As={key:0},ws={key:1},Cs={key:0},Fs={key:1},$s={key:1,style:{"min-width":"200px"},class:"text-center"},Ls={class:"form-floating"},Os=["onChange","onUpdate:modelValue"],Ps=["value"],Is=["onClick"],Ss=["onClick"],js={key:4,class:"text-center"},Gs={key:5,class:"text-center"},Us={key:6,class:"text-center"},Vs={key:7,class:"text-center"},Ms=["onClick","href"],Ts={key:0,class:"small fst-italic mb-0 mt-1",style:{"line-height":"100%"}},Ns={key:8,class:"text-center"},Bs={key:9,class:"text-center"},Rs={key:10,class:"text-center"},Ds={key:11,class:"text-center"},Js={key:12,class:"text-center"},zs={key:13,class:"text-center"},Es={key:14,class:"text-center"},qs={key:15,class:"text-center"},Hs={key:4,class:"alert alert-success",role:"alert"},Ks={key:5,class:"row mb-3"},Qs={class:"col-12"},Ws={class:"modal fade",id:"city-modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Xs={class:"modal-dialog modal-lg"},Ys={class:"modal-content"},Zs={class:"modal-body"},_s=["onClick"],xs={class:"modal fade",id:"group-modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},se={class:"modal-dialog modal-lg"},ee={class:"modal-content"},te={class:"modal-body"},oe=["onClick"],ie={data(){return{loaded:!0,loaded_cities:!0,loaded_groups:!0,sort:{column:null,direction:"desc",filters:{statuses:[],cities:[],groups:[],age:{from:null,to:null}}},search:null,current_page:0,paginate_object:null,cities:[],groups:[],statuses:["Только добавлен","Взят в обработку","Отказ","Сомневается","Успех"],visible_fields:[{title:"№",key:"id",order:0,active:!0},{title:"Статус",key:"status",order:0,active:!1},{title:"Ф.И.О.",key:"name",order:0,active:!0},{title:"Возраст",key:"age",order:0,active:!0},{title:"Д.Р.",key:"birthday",order:0,active:!0},{title:"Группа в ВК",key:"vk_group_link",order:0,active:!1},{title:"Ссылка на пользователя",key:"vk_user_link",order:0,active:!0},{title:"Источник сбора",key:"from",order:0,active:!1},{title:"Город проживания",key:"city",order:0,active:!0},{title:"Число общих друзей",key:"common_count",order:0,active:!1},{title:"Родной город",key:"home_town",order:0,active:!1},{title:"Дата последнего онлайна",key:"last_seen",order:0,active:!1},{title:"Профиль открыть",key:"is_profile_closed",order:0,active:!1},{title:"Сообщения открыты",key:"is_messages_closed",order:0,active:!1},{title:"Состояние учетки",key:"deactivated",order:0,active:!1},{title:"Взят в работу",key:"checked_at",order:0,active:!1},{title:"Пояснение по человеку",key:"checked_comment",order:0,active:!0},{title:"Дата обновления данных",key:"updated_at",order:0,active:!1}],items:[{id:null,name:null,age:null,birthday:null,vk_group_link:null,vk_user_link:null,city:null,from:null,common_count:0,home_town:null,last_seen:null,is_profile_closed:!1,is_messages_closed:!1,deactivated:!1,owner_id:null,checked_at:null,vk_id:null,status:0,checked_comment:null}]}},computed:{...y(["getPersons","getPersonsPaginateObject"]),selectedCities(){return this.cities.filter(n=>this.sort.filters.cities.indexOf(n)!==-1)},selectedGroups(){return this.groups.filter(n=>this.sort.filters.groups.indexOf(n)!==-1)}},mounted(){if(this.loadAllCities(),this.loadAllGroups(),this.loadPersons(),localStorage.getItem("ya_v_dele_visible_fields")){let n=JSON.parse(localStorage.getItem("ya_v_dele_visible_fields"))||[];this.visible_fields.length===n.length&&(this.visible_fields=n)}},methods:{loadAllCities(){this.loaded_cities=!1,this.$store.dispatch("loadAllCities").then(n=>{this.cities=n.cities||[],this.loaded_cities=!0}).catch(()=>{})},loadAllGroups(){this.loaded_groups=!1,this.$store.dispatch("loadAllGroups").then(n=>{this.groups=n.groups||[],this.loaded_groups=!0}).catch(()=>{})},checkItem(n){this.items[n].checked_at=new Date,this.$store.dispatch("checkPerson",{person_id:this.items[n].id})},changePersonStatus(n){this.$store.dispatch("changePersonStatus",{person_id:this.items[n].id,status:this.items[n].status||0}).then(()=>{this.$notify({title:"Смена статуса",text:"Статус успешно изменен",type:"success"})}).catch(()=>{this.$notify({title:"Смена статуса",text:"Ошибка изменения статуса",type:"error"})})},changeFieldStatus(n){this.loaded=!1,this.$nextTick(()=>{this.visible_fields[n].active=!this.visible_fields[n].active,localStorage.setItem("ya_v_dele_visible_fields",JSON.stringify(this.visible_fields)),this.loaded=!0})},isFieldActive(n){if(!this.visible_fields||(this.visible_fields||[]).length===0)return!0;let e=this.visible_fields.findIndex(s=>s.key===n);return e===-1?!0:this.visible_fields[e].active},sortAndLoad(n){this.sort.column=n,this.sort.direction=this.sort.direction==="desc"?"asc":"desc",this.loadPersons(this.current_page)},resetFilters(){this.sort.filters.age.from=null,this.sort.filters.age.to=null,this.sort.filters.cities=[],this.sort.filters.statuses=[],this.search=null,this.loadPersons(0)},loadPersons(n=0){this.current_page=n,this.$store.dispatch("loadPersons",{dataObject:{search:this.search,filters:this.sort.filters,order:this.sort.column,direction:this.sort.direction},page:this.current_page}).then(e=>{this.items=this.getPersons,this.paginate_object=this.getPersonsPaginateObject}).catch(()=>{this.loading=!1})},selectItem(n){this.$emit("select",n)},changeGroupFilter(n){let e=this.sort.filters.groups.findIndex(s=>s===n);e===-1?this.sort.filters.groups.push(n):this.sort.filters.groups.splice(e,1)},changeCityFilter(n){let e=this.sort.filters.cities.findIndex(s=>s===n);e===-1?this.sort.filters.cities.push(n):this.sort.filters.cities.splice(e,1)},filterAndLoad(){axios({url:"/persons/excel-download",method:"POST",responseType:"blob",data:{search:this.search,filters:this.sort.filters,order:this.sort.column,direction:this.sort.direction,fields:this.visible_fields}}).then(n=>{const e=URL.createObjectURL(n.data);window.open(e,"_blank").focus(),URL.revokeObjectURL(e)})},changeStatusFilter(n){let e=this.sort.filters.statuses.findIndex(s=>s===n);e===-1?this.sort.filters.statuses.push(n):this.sort.filters.statuses.splice(e,1)},removeItem(n){this.$store.dispatch("removePerson",{materialId:n}).then(()=>{this.sortAndLoad("id")})}}},ne=Object.assign(ie,{__name:"PersonTable",setup(n){return(e,s)=>(o(),i(p,null,[t("div",w,[t("div",C,[s[25]||(s[25]=t("h6",{class:"mr-2"},"Отображаемые поля: ",-1)),(o(!0),i(p,null,m(e.visible_fields,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":l.active,"bg-secondary text-white":!l.active}]),onClick:f=>e.changeFieldStatus(u)},a(l.title),11,F),s[24]||(s[24]=d(", "))],64))),256))])]),t("div",$,[t("div",L,[s[27]||(s[27]=t("h6",{class:"mr-2"},"Фильтры статуса: ",-1)),(o(!0),i(p,null,m(e.statuses,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.statuses.indexOf(u)!==-1,"bg-secondary text-white":e.sort.filters.statuses.indexOf(u)===-1}]),onClick:f=>e.changeStatusFilter(u)},a(l),11,O),s[26]||(s[26]=d(", "))],64))),256))])]),e.loaded_cities?(o(),i("div",P,[t("div",I,[s[29]||(s[29]=t("h6",{class:"mr-2"},"Фильтры городов: ",-1)),t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.cities.indexOf("Без города")!==-1,"bg-secondary text-white":e.sort.filters.cities.indexOf("Без города")===-1}]),onClick:s[0]||(s[0]=l=>e.changeCityFilter("Без города"))}," Без города ",2),s[30]||(s[30]=d(", ")),(o(!0),i(p,null,m(e.selectedCities,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.cities.indexOf(l)!==-1,"bg-secondary text-white":e.sort.filters.cities.indexOf(l)===-1}]),onClick:f=>e.changeCityFilter(l)},a(l),11,S),s[28]||(s[28]=d(", "))],64))),256)),s[31]||(s[31]=t("button",{type:"button",class:"btn btn-link","data-bs-toggle":"modal","data-bs-target":"#city-modal"}," Выбрать города ",-1))])])):r("",!0),e.loaded_groups?(o(),i("div",j,[t("div",G,[s[33]||(s[33]=t("h6",{class:"mr-2"},"Фильтры групп: ",-1)),t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.groups.indexOf("Не указана")!==-1,"bg-secondary text-white":e.sort.filters.groups.indexOf("Не указана")===-1}]),onClick:s[1]||(s[1]=l=>e.changeGroupFilter("Не указана"))}," Не указана ",2),s[34]||(s[34]=d(", ")),(o(!0),i(p,null,m(e.selectedGroups,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.groups.indexOf(l)!==-1,"bg-secondary text-white":e.sort.filters.groups.indexOf(l)===-1}]),onClick:f=>e.changeGroupFilter(l)},a(l),11,U),s[32]||(s[32]=d(", "))],64))),256)),s[35]||(s[35]=t("button",{type:"button",class:"btn btn-link","data-bs-toggle":"modal","data-bs-target":"#group-modal"}," Выбрать группу ",-1))])])):r("",!0),t("div",V,[t("div",M,[s[38]||(s[38]=t("h6",{class:"mr-2"},"Фильтр возраста: ",-1)),t("div",T,[k(t("input",{type:"number",min:"0","onUpdate:modelValue":s[2]||(s[2]=l=>e.sort.filters.age.from=l),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[g,e.sort.filters.age.from]]),s[36]||(s[36]=t("label",{for:"floatingInput"},"Начальное значение",-1))]),t("div",N,[k(t("input",{type:"number",max:"200","onUpdate:modelValue":s[3]||(s[3]=l=>e.sort.filters.age.to=l),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[g,e.sort.filters.age.to]]),s[37]||(s[37]=t("label",{for:"floatingInput"},"Конечное значение",-1))])])]),t("form",B,[t("div",R,[t("div",D,[t("div",J,[k(t("input",{type:"search","onUpdate:modelValue":s[4]||(s[4]=l=>e.search=l),class:"form-control",id:"search-persons"},null,512),[[g,e.search]]),s[39]||(s[39]=t("label",{for:"search-persons"},"Поиск по клиентам",-1))]),t("button",{type:"button",onClick:s[5]||(s[5]=l=>e.loadPersons(0)),class:"btn btn-outline-secondary rounded-0"},s[40]||(s[40]=[t("i",{class:"fa-solid fa-magnifying-glass"},null,-1),d(" Применить фильтры ")])),t("button",{type:"button",onClick:s[6]||(s[6]=(...l)=>e.resetFilters&&e.resetFilters(...l)),class:"btn btn-outline-danger rounded-0"}," Сбросить ")])])]),t("div",z,[t("button",{type:"button",onClick:s[7]||(s[7]=(...l)=>e.filterAndLoad&&e.filterAndLoad(...l)),class:"btn btn-primary rounded-0"}," Скачать эксель ")]),e.paginate_object?(o(),i("p",E,[s[41]||(s[41]=d("Всего найдено: ")),t("span",q,a(e.paginate_object.meta.total||0),1)])):r("",!0),e.loaded?(o(),i("div",H,[e.items.length>0?(o(),i("table",K,[t("thead",null,[t("tr",null,[e.isFieldActive("id")?(o(),i("th",{key:0,scope:"col",class:"cursor-pointer",onClick:s[8]||(s[8]=l=>e.sortAndLoad("id"))},[s[44]||(s[44]=d("# ")),e.sort.direction==="desc"&&e.sort.column==="id"?(o(),i("span",Q,s[42]||(s[42]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="id"?(o(),i("span",W,s[43]||(s[43]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("status")?(o(),i("th",{key:1,scope:"col",class:"text-center cursor-pointer",onClick:s[9]||(s[9]=l=>e.sortAndLoad("status"))},[s[47]||(s[47]=d("Статус ")),e.sort.direction==="desc"&&e.sort.column==="status"?(o(),i("span",X,s[45]||(s[45]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="status"?(o(),i("span",Y,s[46]||(s[46]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("name")?(o(),i("th",{key:2,scope:"col",class:"text-center cursor-pointer",onClick:s[10]||(s[10]=l=>e.sortAndLoad("name"))},[s[50]||(s[50]=d("ФИО ")),e.sort.direction==="desc"&&e.sort.column==="name"?(o(),i("span",Z,s[48]||(s[48]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="name"?(o(),i("span",_,s[49]||(s[49]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("age")?(o(),i("th",{key:3,scope:"col",class:"text-center cursor-pointer",onClick:s[11]||(s[11]=l=>e.sortAndLoad("age"))},[s[53]||(s[53]=d("Возраст ")),e.sort.direction==="desc"&&e.sort.column==="age"?(o(),i("span",x,s[51]||(s[51]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="age"?(o(),i("span",ss,s[52]||(s[52]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("birthday")?(o(),i("th",{key:4,scope:"col",class:"text-center cursor-pointer",onClick:s[12]||(s[12]=l=>e.sortAndLoad("birthday"))},[s[56]||(s[56]=d("Д.Р. ")),e.sort.direction==="desc"&&e.sort.column==="birthday"?(o(),i("span",es,s[54]||(s[54]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="birthday"?(o(),i("span",ts,s[55]||(s[55]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("city")?(o(),i("th",{key:5,scope:"col",class:"text-center cursor-pointer",onClick:s[13]||(s[13]=l=>e.sortAndLoad("city"))},[s[59]||(s[59]=d("Текущий город ")),e.sort.direction==="desc"&&e.sort.column==="city"?(o(),i("span",os,s[57]||(s[57]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="city"?(o(),i("span",is,s[58]||(s[58]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("vk_group_link")?(o(),i("th",{key:6,scope:"col",class:"text-center cursor-pointer",onClick:s[14]||(s[14]=l=>e.sortAndLoad("vk_group_link"))},[s[62]||(s[62]=d("Группа вк ")),e.sort.direction==="desc"&&e.sort.column==="vk_group_link"?(o(),i("span",ls,s[60]||(s[60]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="vk_group_link"?(o(),i("span",rs,s[61]||(s[61]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("vk_user_link")?(o(),i("th",{key:7,scope:"col",class:"text-center cursor-pointer",onClick:s[15]||(s[15]=l=>e.sortAndLoad("vk_user_link"))},[s[65]||(s[65]=d("Ссылка ")),e.sort.direction==="desc"&&e.sort.column==="vk_user_link"?(o(),i("span",ns,s[63]||(s[63]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="vk_user_link"?(o(),i("span",ds,s[64]||(s[64]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("from")?(o(),i("th",{key:8,scope:"col",class:"text-center cursor-pointer",onClick:s[16]||(s[16]=l=>e.sortAndLoad("from"))},[s[68]||(s[68]=d("Источник ")),e.sort.direction==="desc"&&e.sort.column==="from"?(o(),i("span",as,s[66]||(s[66]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="from"?(o(),i("span",us,s[67]||(s[67]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("common_count")?(o(),i("th",{key:9,scope:"col",class:"text-center cursor-pointer",onClick:s[17]||(s[17]=l=>e.sortAndLoad("common_count"))},[s[71]||(s[71]=d("Число общих друзей ")),e.sort.direction==="desc"&&e.sort.column==="common_count"?(o(),i("span",ps,s[69]||(s[69]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="common_count"?(o(),i("span",fs,s[70]||(s[70]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("home_town")?(o(),i("th",{key:10,scope:"col",class:"text-center cursor-pointer",onClick:s[18]||(s[18]=l=>e.sortAndLoad("home_town"))},[s[74]||(s[74]=d("Родной город ")),e.sort.direction==="desc"&&e.sort.column==="home_town"?(o(),i("span",cs,s[72]||(s[72]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="home_town"?(o(),i("span",ms,s[73]||(s[73]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("last_seen")?(o(),i("th",{key:11,scope:"col",class:"text-center cursor-pointer",onClick:s[19]||(s[19]=l=>e.sortAndLoad("last_seen"))},[s[77]||(s[77]=d("Дата последнего онлайна ")),e.sort.direction==="desc"&&e.sort.column==="last_seen"?(o(),i("span",ks,s[75]||(s[75]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="last_seen"?(o(),i("span",gs,s[76]||(s[76]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("is_profile_closed")?(o(),i("th",{key:12,scope:"col",class:"text-center cursor-pointer",onClick:s[20]||(s[20]=l=>e.sortAndLoad("is_profile_closed"))},[s[80]||(s[80]=d("Закрыт профиль? ")),e.sort.direction==="desc"&&e.sort.column==="is_profile_closed"?(o(),i("span",vs,s[78]||(s[78]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="is_profile_closed"?(o(),i("span",ys,s[79]||(s[79]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("is_messages_closed")?(o(),i("th",{key:13,scope:"col",class:"text-center cursor-pointer",onClick:s[21]||(s[21]=l=>e.sortAndLoad("is_messages_closed"))},[s[83]||(s[83]=d("Закрыты сообщения? ")),e.sort.direction==="desc"&&e.sort.column==="is_messages_closed"?(o(),i("span",bs,s[81]||(s[81]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="is_messages_closed"?(o(),i("span",hs,s[82]||(s[82]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("deactivated")?(o(),i("th",{key:14,scope:"col",class:"text-center cursor-pointer",onClick:s[22]||(s[22]=l=>e.sortAndLoad("deactivated"))},[s[86]||(s[86]=d("Состояние учетки ")),e.sort.direction==="desc"&&e.sort.column==="deactivated"?(o(),i("span",As,s[84]||(s[84]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="deactivated"?(o(),i("span",ws,s[85]||(s[85]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0),e.isFieldActive("updated_at")?(o(),i("th",{key:15,scope:"col",class:"text-center cursor-pointer",onClick:s[23]||(s[23]=l=>e.sortAndLoad("updated_at"))},[s[89]||(s[89]=d(" Дата изменения ")),e.sort.direction==="desc"&&e.sort.column==="updated_at"?(o(),i("span",Cs,s[87]||(s[87]=[t("i",{class:"fa-solid fa-caret-down"},null,-1)]))):r("",!0),e.sort.direction==="asc"&&e.sort.column==="updated_at"?(o(),i("span",Fs,s[88]||(s[88]=[t("i",{class:"fa-solid fa-caret-up"},null,-1)]))):r("",!0)])):r("",!0)])]),t("tbody",null,[(o(!0),i(p,null,m(e.items,(l,u)=>(o(),i("tr",null,[e.isFieldActive("id")?(o(),i("th",{key:0,class:c({"bg-warning":l.checked_at!=null}),scope:"row"},a(l.id||u),3)):r("",!0),e.isFieldActive("status")?(o(),i("td",$s,[t("div",Ls,[k(t("select",{onChange:f=>e.changePersonStatus(u),"onUpdate:modelValue":f=>e.items[u].status=f,class:"form-select",id:"floatingSelect","aria-label":"Floating label select example"},[(o(!0),i(p,null,m(e.statuses,(f,v)=>(o(),i("option",{value:v},a(f),9,Ps))),256))],40,Os),[[b,e.items[u].status]]),s[90]||(s[90]=t("label",{for:"floatingSelect"},"Статус обработки клиента",-1))])])):r("",!0),e.isFieldActive("name")?(o(),i("td",{key:2,class:"text-center",onClick:f=>e.selectItem(l)},a(l.name||"-"),9,Is)):r("",!0),e.isFieldActive("age")?(o(),i("td",{key:3,class:"text-center",onClick:f=>e.selectItem(l)},a(l.age||"-"),9,Ss)):r("",!0),e.isFieldActive("birthday")?(o(),i("td",js,a(l.birthday||"-"),1)):r("",!0),e.isFieldActive("city")?(o(),i("td",Gs,a(l.city||"-"),1)):r("",!0),e.isFieldActive("vk_group_link")?(o(),i("td",Us,a(l.vk_group_link||"-"),1)):r("",!0),e.isFieldActive("vk_user_link")?(o(),i("td",Vs,[t("a",{target:"_blank",onClick:f=>e.checkItem(u),class:"btn btn-success",href:"https://vk.com/im?sel="+l.vk_id},"Открыть диалог",8,Ms),l.is_messages_closed?(o(),i("p",Ts,"Сообщения закрыты")):r("",!0)])):r("",!0),e.isFieldActive("from")?(o(),i("td",Ns,a(l.from||"-"),1)):r("",!0),e.isFieldActive("common_count")?(o(),i("td",Bs,a(l.common_count||"-"),1)):r("",!0),e.isFieldActive("home_town")?(o(),i("td",Rs,a(l.home_town||"-"),1)):r("",!0),e.isFieldActive("last_seen")?(o(),i("td",Ds,a(l.last_seen||"-"),1)):r("",!0),e.isFieldActive("is_profile_closed")?(o(),i("td",Js,a(l.is_profile_closed?"Закрытый":"Открытый"),1)):r("",!0),e.isFieldActive("is_messages_closed")?(o(),i("td",zs,a(l.is_messages_closed?"Закрытые":"Открытые"),1)):r("",!0),e.isFieldActive("deactivated")?(o(),i("td",Es,a(l.deactivated||"Активна"),1)):r("",!0),e.isFieldActive("updated_at")?(o(),i("td",qs,a(l.updated_at||"-"),1)):r("",!0)]))),256))])])):r("",!0)])):r("",!0),e.items.length===0?(o(),i("div",Hs,s[91]||(s[91]=[t("h4",{class:"alert-heading"},"Клиенты",-1),t("p",null,"К сожалению, раздел клиентов пуст. Вы еще не добавили ни одного клиента, которых можно отобразить на этой странице.",-1),t("hr",null,null,-1),t("p",{class:"mb-0"},"Воспользуйтесь формой выше и добавьте своего первого клиента",-1)]))):r("",!0),e.items.length>0?(o(),i("div",Ks,[t("div",Qs,[e.paginate_object?(o(),h(A,{key:0,onPagination_page:e.loadPersons,pagination:e.paginate_object},null,8,["onPagination_page","pagination"])):r("",!0)])])):r("",!0),t("div",Ws,[t("div",Xs,[t("div",Ys,[s[93]||(s[93]=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Выбор города"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",Zs,[(o(!0),i(p,null,m(e.cities,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.cities.indexOf(l)!==-1,"bg-secondary text-white":e.sort.filters.cities.indexOf(l)===-1}]),onClick:f=>e.changeCityFilter(l)},a(l),11,_s),s[92]||(s[92]=d(", "))],64))),256))]),s[94]||(s[94]=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть")],-1))])])]),t("div",xs,[t("div",se,[t("div",ee,[s[96]||(s[96]=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Выбор группы"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",te,[(o(!0),i(p,null,m(e.groups,(l,u)=>(o(),i(p,null,[t("span",{class:c(["badge m-0 cursor-pointer",{"bg-primary":e.sort.filters.groups.indexOf(l)!==-1,"bg-secondary text-white":e.sort.filters.groups.indexOf(l)===-1}]),onClick:f=>e.changeGroupFilter(l)},a(l),11,oe),s[95]||(s[95]=d(", "))],64))),256))]),s[97]||(s[97]=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть")],-1))])])])],64))}});export{ne as _};
