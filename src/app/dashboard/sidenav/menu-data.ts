import { DynamicFlatNode } from "./sidenav.component";

export var menu = new Map<DynamicFlatNode,DynamicFlatNode[]>([
    [{item:'Admin',level:0,expandable:true,isLoading:false,link:'route',icon:'dashboard'},
                [{item:'Sales',level:1,expandable:false,isLoading:false,link:'sales',icon:'account_balance'},
                {item:'Gamer Profile',level:1,expandable:false,isLoading:false,link:'user',icon:'face_5'}]],
    [{item:'Pages',level:0,expandable:true,isLoading:false,link:'route',icon:'description'},
              [{item:'Games Catalog',level:1,expandable:false,isLoading:false,link:'games',icon:'videogame_asset'},
                {item:'Pricing',level:1,expandable:false,isLoading:false,link:'pricing',icon:'credit_card'},
              {item:'Login',level:1,expandable:false,isLoading:false,link:'login',icon:'key'}]],
    [{item:'Widgets',level:0,expandable:true,isLoading:false,link:'route',icon:'widgets'},
              [{item:'Tables',level:1,expandable:false,isLoading:false,link:'tables',icon:'table'},
              {item:'forms',level:1,expandable:false,isLoading:false,link:'forms',icon:'lists'},
              {item:'Buttons',level:1,expandable:false,isLoading:false,link:'buttons',icon:'smart_button'},
              {item:'Apex Charts',level:1,expandable:false,isLoading:false,link:'apex-charts',icon:'analytics'},
              {item:'Ngx Charts',level:1,expandable:false,isLoading:false,link:'ngx-charts',icon:'analytics'}]],
  ]);