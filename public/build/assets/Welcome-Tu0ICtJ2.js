import{f as a,a as d,u as o,b as s,c as f,w as i,F as g,g as c,o as t,Z as m,d as n,j as l}from"./app-B-WCtaZJ.js";const y={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},x={key:0,class:"sm:fixed sm:top-0 sm:right-0 p-6 text-end"},p={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(u){return(r,e)=>(t(),a(g,null,[d(o(m),{title:"Welcome"}),s("div",y,[u.canLogin?(t(),a("div",x,[r.$page.props.auth.user?(t(),f(o(l),{key:0,href:r.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>e[0]||(e[0]=[n("Холодка 2.0")])),_:1},8,["href"])):(t(),a(g,{key:1},[d(o(l),{href:r.route("login"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>e[1]||(e[1]=[n("Войти")])),_:1},8,["href"]),u.canRegister?(t(),f(o(l),{key:0,href:r.route("register"),class:"ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>e[2]||(e[2]=[n("Регистрация")])),_:1},8,["href"])):c("",!0)],64))])):c("",!0),e[3]||(e[3]=s("div",{class:"max-w-7xl mx-auto p-6 lg:p-8"},[s("div",{class:"flex justify-center"},[s("img",{src:"/logo.png",alt:"",style:{width:"200px"}})])],-1))])],64))}};export{p as default};