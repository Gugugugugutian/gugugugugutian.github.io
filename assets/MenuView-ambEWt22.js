import{_ as d,o as c,c as l,t as x,m as y,u as k,w as W,v as C,a as m,r as w,b as e,d as T,F as g,e as b,f as j,g as A,h as S}from"./index-CFec08u8.js";const V={class:"btn2"},$={__name:"button2",props:{_content:String},setup(t){return(a,i)=>(c(),l("div",V,x(t._content),1))}},f=d($,[["__scopeId","data-v-4987ed49"]]),L={class:"input"},G=["placeholder"],z={__name:"input",props:y({place:{type:String,default:"Please input your text here. "}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=k(t,"modelValue");return(i,s)=>(c(),l("div",L,[W(m("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),placeholder:t.place,required:""},null,8,G),[[C,a.value]])]))}},q=d(z,[["__scopeId","data-v-dd692968"]]),M={id:"bar"},U={__name:"Search",props:{searchText:{},searchTextModifiers:{}},emits:["update:searchText"],setup(t){const a=k(t,"searchText"),i=w({name:"Google",link:"https://www.google.com/search?q="});function s(){i.value.name==="Google"?i.value={name:"Bing",link:"https://cn.bing.com/search?q="}:i.value={name:"Google",link:"https://www.google.com/search?q="}}function n(){a.value.length>=0&&window.open(i.value.link+a.value)}return(v,p)=>(c(),l("div",{class:"search",onKeyup:T(n,["enter"])},[e(q,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=o=>a.value=o),place:"搜索"},null,8,["modelValue"]),m("div",M,[e(f,{_content:"Switch",onClick:s}),e(f,{_content:i.value.name,onClick:n},null,8,["_content"])])],32))}},I=d(U,[["__scopeId","data-v-e8c1c055"]]),B={sites:[{character:"c",text:"ChatGPT",searchWord:"ChatGPT",link:"https://chat.openai.com/chat"},{character:"G",text:"Github",searchWord:"Github",link:"https://github.com/"},{character:"v",text:"Vue.js",searchWord:"vuejsvue3vue2",link:"https://cn.vuejs.org/"},{character:"z",text:"zlibrary",searchWord:"zlibrary",link:"https://z-library.sk/"},{character:"g",text:"Gmail",searchWord:"Gmail",link:"https://mail.google.com/"},{character:"t",text:"图书馆",searchWord:"tushuguan图书馆library",link:"https://www.lib.whu.edu.cn/"},{character:"z",text:"智慧珞珈",searchWord:"智慧逻辑zhihuiluojia",link:"https://zhlj.whu.edu.cn/"},{character:"l",text:"Leetcode",searchWord:"Leetcode",link:"https://leetcode.cn/problemset/all/"},{character:"g",text:"高德地图",searchWord:"gaodeditu_amap",link:"https://ditu.amap.com/"},{character:"i",text:"iiiLab",searchWord:"iiiLab",link:"https://bili.iiilab.com/"},{character:"q",text:"雀魂麻将",searchWord:"quehunmajiang雀魂麻将majsoul",link:"https://game.maj-soul.net/1/"},{character:"i",text:"iKuuu",searchWord:"ikuuu_vpn_fanqiang",link:"https://ikuuu.org/"},{character:"s",text:"SteamDB",searchWord:"steamdb",link:"https://steamdb.info/"},{character:"j",text:"教务系统",searchWord:"jiaowuxitong教务系统",link:"https://jwgl.whu.edu.cn/"},{character:"b",text:"bilibili",searchWord:"bilibili哔哩哔哩",link:"https://www.bilibili.com/"},{character:"t",text:"体育馆",searchWord:"gym体育馆tiyuguan羽毛球yumaoqiu",link:"https://gym.whu.edu.cn/hsdsqhafive/"},{character:"f",text:"翻译",searchWord:"fanyi翻译translate",link:"https://translate.google.com/"},{character:"t",text:"torrent",searchWord:"torrent",link:"https://byigruha.org/en/"},{character:"c",text:"成绩单",searchWord:"cjd成绩单chengjidan_grade",link:"https://kxdz.whu.edu.cn"},{character:"i",text:"iLovePDF",searchWord:"ilovepdf",link:"https://www.ilovepdf.com/"},{character:"u",text:"upwork",searchWord:"upwork",link:"https://www.upwork.com/"},{character:"f",text:"freelancer",searchWord:"freelancer",link:"https://www.freelancer.com/"},{character:"t",text:"淘宝",searchWord:"tb淘宝taobao",link:"https://www.taobao.com/"},{character:"j",text:"京东",searchWord:"jd京东jingdong",link:"https://www.jd.com/"}]},D={},P={content:B,profile:D},R=["href","title"],F={__name:"link",props:{text:String,link:String},setup(t){return(a,i)=>(c(),l("a",{class:"link",href:t.link,title:t.text},x(t.text),9,R))}},r=d(F,[["__scopeId","data-v-5c13cf59"]]),K={class:"link-list-title"},N={class:"link-list"},E={class:"link-list-links"},Z={__name:"CharacterLinkList",props:{title:String,links:Array},setup(t){return(a,i)=>(c(),l(g,null,[m("h1",K,x(t.title.toUpperCase()?t.title.toUpperCase():"#"),1),m("div",N,[(c(!0),l(g,null,b(t.links,s=>(c(),l("div",E,[e(r,{text:s.text,link:s.link},null,8,["text","link"])]))),256)),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}}),e(r,{style:{visibility:"hidden",height:"0"}})])],64))}},H=d(Z,[["__scopeId","data-v-ca9fd106"]]),J={class:"character-list"},O={__name:"CharacterList",props:{searchText:{},searchTextModifiers:{}},emits:["update:searchText"],setup(t){const a=P.content.sites,i=w({}),s=k(t,"searchText");function n(){for(let o=97;o<=122;++o)i.value[String.fromCharCode(o).toUpperCase()]=new Array;i.value["#"]=new Array}function v(o=s){n();for(const _ of a){let u=!0;if(o.value.length>0&&(_.searchWord.toLowerCase().includes(o.value.toLowerCase())||(u=!1)),u){let h=_.character;h.charCodeAt(0)>=97&&h.charCodeAt(0)<=122||h.charCodeAt(0)>=65&&h.charCodeAt(0)<=90?h=h.toUpperCase():h="#",i.value[h].push(_)}}}v();var p;return j(s,()=>{clearTimeout(p),p=setTimeout(v,250)}),(o,_)=>(c(!0),l(g,null,b(i.value,u=>(c(),l("div",J,[u[0]?(c(),A(H,{key:0,title:u[0].character,links:u},null,8,["title","links"])):S("",!0)]))),256))}},Q=d(O,[["__scopeId","data-v-aa47fbef"]]),X={class:"menu-view"},Y={__name:"MenuView",setup(t){const a=w("");return(i,s)=>(c(),l("div",X,[e(I,{searchText:a.value,"onUpdate:searchText":s[0]||(s[0]=n=>a.value=n)},null,8,["searchText"]),e(Q,{searchText:a.value,"onUpdate:searchText":s[1]||(s[1]=n=>a.value=n)},null,8,["searchText"])]))}},te=d(Y,[["__scopeId","data-v-ee8dc31a"]]);export{te as default};
