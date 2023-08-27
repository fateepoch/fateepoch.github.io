import{_ as P,r as j,w as U,o as r,c as f,a as t,b as a,F as v,d as V,e as W,u as M,f as g,t as z,g as O,h as S,i as D,j as J,I as R,k as q,l as A,B as G,m as H,n as K,p as Q,S as X,q as Y,s as Z}from"./index-6950d0e2.js";let x=[{link:"https://izumi.finance/trade/swap",name:"izumi"},{link:"https://app.mav.xyz/?chain=324",name:"maverick"},{link:"https://www.ko.one/swap",name:"ko swap"},{link:"https://starmaker.exchange/",name:"starmaker"},{link:"https://app.overnight.fi/swap?action=swap-in",name:"overfinance"},{link:"https://app.odos.xyz/",name:"odos"},{link:"https://app.eralend.com/",name:"eraland"},{link:"https://app.lfgswap.finance/swap",name:"lfgswap"},{link:"https://app.xy.finance/",name:"xy finance"},{link:"https://zksync.satori.finance/portfolio",name:"satori finance"},{link:"https://deri.io/#/trade/futures",name:"deri"},{link:"https://zkfox.io/",name:"zkfox"},{link:"https://swap-zksync.spacefi.io/#/swap",name:"spacefi"},{link:"https://app.bounce.finance/",name:"bounce finance"},{link:"https://tevaera.com",name:"tevaera"},{link:"https://zks.network/",name:"zns"},{link:"https://nft.openmeta.finance/#/home?lang=zh-cn",name:"openmeta"},{link:"https://element.market/account",name:"element"},{link:"https://vesync.finance/",name:"vesync"},{link:"https://onchain.trade/",name:"onchain"},{link:"https://leverage.unidex.exchange/",name:"unidex"},{link:"https://app.reactorfusion.xyz/",name:"reactorfusion"},{link:"https://interport.fi/",name:"interport finance"},{link:"https://fi.woo.org/swap/",name:"woofi swap"},{link:"https://app.mute.io/swap",name:"mute"},{link:"https://pancakeswap.finance/swap",name:"pancake swap"},{link:"https://app.symbiosis.finance/",name:"symbiosis"},{link:"https://app.para.space/?chain=zksync_era",name:"paraspace"},{link:"https://app.wagmi.com/#/swap",name:"wagmi"},{link:"https://www.xbank.finance/",name:"xbank"},{link:"https://draculafi.xyz/",name:"draculafi"},{link:"https://app.pinnako.io/#/",name:"pinnako"},{link:"https://app.onsenswap.xyz/",name:"onsenswap"},{link:"https://app.titi.finance/swap",name:"titi protocol"},{link:"https://vivaleva.com/lend/",name:"vivaleva"},{link:"https://app.basilisk.org/",name:"basilisk"},{link:"https://www.zilch.capital/",name:"zlich"},{link:"https://derpdex.com/",name:"derpdex"},{link:"https://app.zerolend.xyz/markets/",name:"zerolend"},{link:"https://app.crowdswap.org/swap",name:"crowdswap"},{link:"https://app.zk-swap.xyz/swap",name:"zk-swap"},{link:"https://roci.fi/app/markets",name:"rocifi"},{link:"https://zksync.zks.app/swap",name:"zkswap(zksync)"},{link:"https://sharelock.win/#/",name:"sharelock"},{link:"https://sugarswap.exchange/",name:"sugarswap"},{link:"https://zkswap.biz/",name:"zkswap-era"},{link:"https://trade.synfutures.com/",name:"synfuture"},{link:"https://race.cryptomaze.app/",name:"race"},{link:"https://mail.dmail.ai/sent",name:"dmail"},{link:"https://kyberswap.com/swap/zksync",name:"kyber"}];function ee(m,i){return m.every(s=>i.includes(s))}function te(m,i){const s=m.slice();for(let c=s.length-1;c>0;c--){const k=Math.floor(Math.random()*(c+1));[s[c],s[k]]=[s[k],s[c]]}return s.slice(0,i)}function ae(m,i){for(const s of i)if(ee(m,s))return!1;return!0}function ne(m=300,i=15,s=30,c=60){const k=Array.from({length:c},(y,d)=>d),o=[];for(;o.length<m;){const y=Math.floor(Math.random()*(s-i+1))+i,d=te(k,y);ae(d,o)&&o.push(d)}return o}const se=["href"],le={key:1,style:{"font-weight":"normal"}},oe={__name:"Project",setup(m){const i=j([{title:"统计",dataIndex:"info",align:"center",width:"30px",fixed:"left",sorter:(l,e)=>d(l)-d(e)},{title:"地址",dataIndex:"address",align:"center",width:"30px",fixed:"left"}]);x.forEach((l,e)=>{i.value.push({title:l.name,dataIndex:"result_"+e,align:"center",width:"30px"})});const s=j([]);async function c(){const l=localStorage.getItem("zksync-local-project");l&&(s.value=JSON.parse(l))}U(s,()=>{localStorage.setItem("zksync-local-project",JSON.stringify(s.value))},{deep:!0});function k(){let l=ne(o.value.targetCount,o.value.min,o.value.max,x.length);s.value=[],l.forEach((e,u)=>{let _={};e.forEach((h,b)=>{_.address="addr"+u,_["result_"+h]=0}),s.value.push(_)}),localStorage.setItem("zksync-local-project",JSON.stringify(s.value))}const o=j({project:[...x.map(l=>l.name)],min:5,max:15,targetCount:100});function y(l){let e=0,u=0;return Object.keys(l).map(_=>{_.startsWith("result_")&&(e++,l[_]==1&&u++)}),`${u}/${e}`}function d(l){let e=0;return Object.keys(l).map(u=>{u.startsWith("result_")&&l[u]==1&&e++}),e}return(l,e)=>{const u=X,_=D,h=J,b=R,$=q,w=A,C=G,N=H,B=K,I=V,T=Y,E=Z,F=Q;return r(),f(v,null,[t(I,null,{default:a(()=>[t(w,{span:20,offset:2,class:"tool-bar"},{default:a(()=>[t(I,{gutter:16},{default:a(()=>[t(w,null,{default:a(()=>[t($,{layout:"inline"},{default:a(()=>[t(h,{label:"项目列表"},{default:a(()=>[t(_,{value:o.value.project,"onUpdate:value":e[0]||(e[0]=n=>o.value.project=n),style:{width:"200px"},mode:"multiple",maxTagCount:1,maxTagTextLength:5},{default:a(()=>[(r(!0),f(v,null,W(M(x),(n,p)=>(r(),S(u,{value:n.name},{default:a(()=>[g(z(p+1+" "+n.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1}),t(h,{label:"最小项目"},{default:a(()=>[t(b,{value:o.value.min,"onUpdate:value":e[1]||(e[1]=n=>o.value.min=n),valueModifiers:{number:!0},style:{width:"100px"},"allow-clear":""},null,8,["value"])]),_:1}),t(h,{label:"最大项目"},{default:a(()=>[t(b,{value:o.value.max,"onUpdate:value":e[2]||(e[2]=n=>o.value.max=n),valueModifiers:{number:!0},style:{width:"100px"},"allow-clear":""},null,8,["value"])]),_:1}),t(h,{label:"地址数目"},{default:a(()=>[t(b,{value:o.value.targetCount,"onUpdate:value":e[3]||(e[3]=n=>o.value.targetCount=n),valueModifiers:{number:!0},style:{width:"100px"},"allow-clear":""},null,8,["value"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(C,{type:"primary",onClick:e[4]||(e[4]=n=>c())},{default:a(()=>[g(" 加载本地数据 ")]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(N,{title:"重新生成会覆盖已有数据","ok-text":"是","cancel-text":"否",onConfirm:e[5]||(e[5]=n=>k())},{default:a(()=>[t(C,{type:"primary"},{default:a(()=>[g(" 生成 ")]),_:1})]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(C,{type:"primary",danger:""},{icon:a(()=>[t(B)]),default:a(()=>[g(" 设置 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(I,{style:{"margin-top":"10px"}},{default:a(()=>[t(w,{span:20,offset:2},{default:a(()=>[t(F,{columns:i.value,"data-source":s.value,pagination:!1,scroll:{x:5e3,y:500},size:"small",showSorterTooltip:!1},{headerCell:a(({title:n,column:p})=>[p.dataIndex.startsWith("result_")?(r(),f("a",{key:0,target:"_blank",href:M(x)[parseInt(p.dataIndex.substring(7))].link},z(n),9,se)):(r(),f("span",le,z(n),1))]),bodyCell:a(({column:n,record:p,index:ie})=>[n.dataIndex=="info"?(r(),f(v,{key:0},[g(z(y(p)),1)],64)):O("",!0),n.dataIndex.startsWith("result_")?(r(),f(v,{key:1},[p[n.dataIndex]===0?(r(),S(T,{key:0,style:{color:"red"},onClick:L=>p[n.dataIndex]=1},null,8,["onClick"])):p[n.dataIndex]===1?(r(),S(E,{key:1,style:{color:"green"},onClick:L=>p[n.dataIndex]=0},null,8,["onClick"])):(r(),f(v,{key:2},[g(" - ")],64))],64)):O("",!0)]),_:1},8,["columns","data-source"])]),_:1})]),_:1})],64)}}},re=P(oe,[["__scopeId","data-v-08d7bb1b"]]);export{re as default};
