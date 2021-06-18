(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(454)},205:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l);a(205),a(206),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(47),s=a(48),i=a(52),u=a(49),m=a(51),d=a(116),p=a(38),h=a(16),f=a(55),E=a(456),g=(a(122),a(21)),b=a.n(g),v=a(182),y=a.n(v),O=a(50),w="SET_DAYS",T="SET_START_DATE",S="UPDATE_CATEGORIES",C="SET_SCHEDULE_TIME",j="SET_USER_LOCATION",x="SET_FETCHED_DATA",N=a(211),D=a(53),k=D.compose,_=D.withProps,M=D.lifecycle,F=a(28),q=F.withScriptjs,A=F.withGoogleMap,P=F.GoogleMap,L=F.Marker,R=a(405).SearchBox,H=k(_({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCKzbdK1wXzCIQf7UAMxpTgV6S5l2AjRGc&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"90%"}}),containerElement:r.a.createElement("div",{style:{height:"500px"}}),mapElement:r.a.createElement("div",{style:{height:"90%"}})}),M({componentWillMount:function(){var e=this,t={};this.setState({center:{lat:-.210689,lng:-78.489132},markers:[],onMapMounted:function(e){t.map=e},onSearchBoxMounted:function(e){t.searchBox=e},onPlacesChanged:function(a,n){var r=t.searchBox.getPlaces().map(function(e){return{position:e.geometry.location}}),l=N.get(r,"0.position",e.state.center);void 0!==r.length[0]&&n(r[0].position.toJSON()),e.setState({center:l,markers:r})},onMapClicked:function(t,a){e.setState({markers:[{position:t.latLng}]}),a(t.latLng.toJSON())}})}}),q,A)(function(e){return r.a.createElement(P,{ref:e.onMapMounted,defaultZoom:15,center:e.center,onClick:function(t){return e.onMapClicked(t,e.setLocation)},options:{mapTypeControl:!1}},r.a.createElement(R,{ref:e.onSearchBoxMounted,controlPosition:google.maps.ControlPosition.TOP_CENTER,onPlacesChanged:function(t){return e.onPlacesChanged(t,e.setLocation)}},r.a.createElement("input",{type:"text",placeholder:"\xbfWhere will you stay?",style:{boxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",marginTop:"27px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}})),e.markers.map(function(e,t){return r.a.createElement(L,{key:t,position:e.position,icon:"home-address.png"})}))}),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.validator.allValid()?a.props.history.push("/tours"):(a.validator.showMessages(),a.forceUpdate())},a.handleSelectCategory=function(e){var t=e.target,n=t.checked,r=t.value;n?a.props.updateCategories([].concat(Object(f.a)(a.props.request.categories),[r])):a.props.updateCategories(a.props.request.categories.filter(function(e){return e!==r}))},a.handleDays=function(e){var t=Number(e.target.value);a.props.setDays(t>0?t:1)},a.onTimeChange=function(e,t,n){return a.props.setTime(t,n,null===e?e:e.format("HHmm"))},a.validator=new y.a({element:function(e){return r.a.createElement("div",{style:{color:"red"}},r.a.createElement("strong",null,e))},messages:{required:"Required",min:"You must select at least 1 category"}}),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container center_form"},r.a.createElement("form",{className:"card form-horizontal rounded-lg",onSubmit:this.handleSubmit,style:{backgroundColor:"#FDFCF9"}},r.a.createElement("h1",{className:"card-title text-center"},"Tourist Trip Design Problem"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"totalDays",className:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-form-label"},r.a.createElement("h5",null,"Total days")),r.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6"},r.a.createElement("input",{type:"number",className:"form-control",id:"totalDays",min:1,value:this.props.request.totalDays,onChange:this.handleDays}),this.validator.message("totalDays",this.props.request.totalDays,"required"))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"startDate",className:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-form-label"},r.a.createElement("h5",null,"Start date")),r.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6"},r.a.createElement("input",{type:"date",className:"form-control",id:"startDate",onChange:function(t){return e.props.setStartDate(t.target.value)},min:b()().add(1,"d").format("YYYY-MM-DD")}),this.validator.message("startDate",this.props.request.startDate,"required"))),r.a.createElement(z,{title:"Desired schedule for tours",scheduleType:"travelSchedule",start:"09:00",end:"18:00",onTimeChange:this.onTimeChange,validator:this.validator,wtf:this.props.request.travelSchedule}),r.a.createElement(z,{title:"Desired schedule for lunch",scheduleType:"lunchTime",start:"13:00",end:"14:00",onTimeChange:this.onTimeChange,validator:this.validator,wtf:this.props.request.lunchTime}),r.a.createElement("h5",null,"Places of preference:"),this.validator.message("categories",this.props.request.categories,"min:1"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"row col-10"},[{text:"Aquariums",value:"aquarium"},{text:"Art Galleries",value:"art_gallery"},{text:"Amusement Parks",value:"amusement_park"},{text:"Cemeteries",value:"cemetery"},{text:"City Halls",value:"city_hall"},{text:"Hindu Temples",value:"hindu_temple"},{text:"Mosques",value:"mosque"},{text:"Stadiums",value:"stadium"},{text:"Zoos",value:"zoo"},{text:"Museums",value:"museum"},{text:"Churches",value:"church"},{text:"Parks",value:"park"},{text:"Premise",value:"premise"}].map(function(t,a){return r.a.createElement("div",{key:"wtf".concat(a),className:"col-4 custom-control custom-checkbox"},r.a.createElement("input",{id:"check".concat(a),type:"checkbox",className:"custom-control-input",value:t.value,onChange:e.handleSelectCategory}),r.a.createElement("label",{htmlFor:"check".concat(a),className:"custom-control-label",style:{cursor:"pointer"}},t.text))})),r.a.createElement("div",{className:"col-1"})),r.a.createElement("h5",null,"Lodging place"),this.validator.message("location",this.props.request.location,"required"),r.a.createElement(H,{setLocation:this.props.setLocation}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-10"},r.a.createElement("button",{type:"submit",className:"btn btn-pill btn-success btn-lg btn-block"},"Create itineraries")),r.a.createElement("div",{className:"col-1"})))))}}]),t}(n.Component),z=function(e){var t=e.title,a=e.scheduleType,n=e.start,l=e.end,o=e.onTimeChange,c=e.wtf,s=e.validator;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h5",null,t),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"col-1"}),r.a.createElement(U,{className:"col-lg-4 col-md-4 col-sm-12",labelText:"Inicio",defaultTime:n,onTimeChange:o,schedule:a,time:"start",validator:s,wtf:c}),r.a.createElement("div",{className:"col-2"}),r.a.createElement(U,{className:"col-lg-4 col-md-4 col-sm-12",labelText:"Fin",defaultTime:l,onTimeChange:o,schedule:a,time:"end",validator:s,wtf:c}),r.a.createElement("div",{className:"col-1"})))},U=function(e){var t=e.labelText,a=e.defaultTime,n=e.onTimeChange,l=e.schedule,o=e.time,c=e.validator,s=e.wtf;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"travelStart",className:"col-form-label",style:{marginRight:"0.5rem"}},t),r.a.createElement(E.a,{id:"travelStart",defaultValue:b()(a,"HH:mm"),format:"HH:mm",onChange:function(e){return n(e,l,o)},placeholder:"HH:mm"}),c.message(o,s[o],"required")))},G=Object(O.b)(function(e){return{request:Object(h.a)({},e)}},function(e){return{setDays:function(t){return e(function(e){return{type:w,payload:{days:e}}}(t))},setStartDate:function(t){return e({type:T,payload:{newDate:t}})},updateCategories:function(t){return e(function(e){return{type:S,payload:{categories:e}}}(t))},setTime:function(t,a,n){return e(function(e,t,a){return{type:C,payload:{type:e,time:t,newTime:a}}}(t,a,n))},setLocation:function(t){return e(function(e){return{type:j,payload:{location:e}}}(t))}}})(Object(p.e)(I)),B=a(195),V=a(196),X=a.n(V),Y=a(53),W=a(28),J=Object(Y.compose)(Object(Y.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCKzbdK1wXzCIQf7UAMxpTgV6S5l2AjRGc&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"1000px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),W.withScriptjs,W.withGoogleMap),K=["FF851B","01FF70","0074D9","FF4136","a52a2a","00ffff","00008b","a9a9a9","006400","bdb76b","8b008b","556b2f","ff8c00","9932cc","8b0000","e9967a","ff00ff","4b0082","f0e68c","add8e6","e0ffff","90ee90","d3d3d3","ffb6c1","ffffe0","00ff00","800000","808000","ffa500","ffc0cb","800080","800080","ff0000"],Z=J(function(e){return r.a.createElement(W.GoogleMap,{defaultZoom:15,defaultCenter:Object(h.a)({},e.tour[0].location)},r.a.createElement($,{key:"tour".concat(e.n),name:"tour".concat(e.n),color:K[e.n],tour:e.tour}),e.restaurants.map(function(e,t){return r.a.createElement(ee,Object.assign({key:"restaurant".concat(t)},e,{position:Object(h.a)({},e.location),icon:"restaurant.png"}))}))}),Q=J(function(e){return r.a.createElement(W.GoogleMap,{defaultZoom:15,defaultCenter:Object(h.a)({},e.data[0].tour[0].location)},e.data.reduce(function(e,t){var a=t.tour;return[].concat(Object(f.a)(e),[a])},[]).map(function(e,t){return r.a.createElement($,{key:"tour".concat(t),name:"tour".concat(t),color:K[t],tour:e})}),e.data.reduce(function(e,t){var a=t.restaurants;return[].concat(Object(f.a)(e),Object(f.a)(a))},[]).map(function(e,t){return r.a.createElement(ee,Object.assign({key:"restaurant".concat(t)},e,{position:Object(h.a)({},e.location),icon:"restaurant.png"}))}))}),$=function(e){var t=e.name,a=e.tour,n=e.color,l=0;return r.a.createElement(r.a.Fragment,null,a.map(function(e,a){switch(e.type){case"poi":return l++,r.a.createElement(ee,Object.assign({key:"".concat(t,"-").concat(a),position:Object(h.a)({},e.location)},e,{icon:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=".concat(l,"|").concat(n)}));case"route":return r.a.createElement(W.Polyline,{key:"".concat(t,"-").concat(a),path:google.maps.geometry.encoding.decodePath(e.points),options:{strokeColor:"#".concat(n)}});case"home":return r.a.createElement(W.Marker,{key:"".concat(t,"-").concat(a),position:e.location,icon:"home.png"}," ");default:return null}}))},ee=Object(Y.compose)(Object(Y.withStateHandlers)(function(){return{isOpen:!1}},{onToggleOpen:function(e){var t=e.isOpen;return function(){return{isOpen:!t}}}}))(function(e){return r.a.createElement(W.Marker,{position:e.position,onClick:e.onToggleOpen,icon:e.icon},e.isOpen&&r.a.createElement(W.InfoWindow,{onCloseClick:e.onToggleOpen},r.a.createElement("div",null,r.a.createElement("h6",null,e.name),r.a.createElement("p",null,r.a.createElement("b",null,"Inicio: "),e.schedule.start),r.a.createElement("p",null,r.a.createElement("b",null,"Fin: "),e.schedule.end),r.a.createElement("p",null,r.a.createElement("b",null,"Sitio web: "),r.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},e.website)),r.a.createElement("p",null,r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"M\xe1s detalles")))))}),te=a(197),ae=a.n(te),ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,selected:-1},a.toRender=function(){return-1===a.state.selected?a.props.data.length>0?r.a.createElement(Q,{data:a.props.data}):null:r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,Object.assign({},a.props.data[a.state.selected],{n:a.state.selected})),r.a.createElement("br",null),r.a.createElement("h5",null,"Details"),r.a.createElement(re,{tour:a.props.data[a.state.selected].tour}))},a.handleSelected=function(e){a.setState({selected:Number(e.target.value)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.props.data.length&&(this.setState({loading:!0}),ae.a.post("/ttdp",this.props.request).then(function(t){e.setState({loading:!1}),e.props.setFetchedData(t.data)}).catch(function(t){e.setState({loading:!1}),alert(t.message)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.loading?r.a.createElement("div",{className:"override"},r.a.createElement(X.a,{type:"CradleLoader"})):r.a.createElement("div",{className:"container center_form"},r.a.createElement("div",{className:"card",style:{backgroundColor:"#FDFCF9"}},r.a.createElement("h1",{className:"card-title text-center"},"TTDP Results"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"toursSelect"},r.a.createElement("h5",null,"Select the tour:")),r.a.createElement("select",{className:"form-control",id:"toursSelect",style:{cursor:"pointer"},onChange:this.handleSelected},r.a.createElement("option",{defaultValue:-1,value:-1},"All"),this.props.data.map(function(e,t){return r.a.createElement("option",{key:t,value:t},"Day ",t+1)}))),this.toRender()))))}}]),t}(n.Component),re=function(e){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Schedule"),r.a.createElement("th",{scope:"col"},"Event"))),r.a.createElement("tbody",null,e.tour.slice(1).map(function(e,t,a){switch(e.type){case"route":return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.schedule.start," - ",e.schedule.end),r.a.createElement("td",null,"Moving to"," ","lunch"===a[t+1].type?a[t+2].name:a[t+1].name));case"poi":return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.schedule.start," - ",e.schedule.end),r.a.createElement("td",null,"Visit of ",e.name));case"lunch":return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.schedule.start," - ",e.schedule.end),r.a.createElement("td",null,"Lunch time"));default:return null}}))))},le=Object(O.b)(function(e){var t=e.fetchedData;return{request:Object(B.a)(e,["fetchedData"]),data:t}},function(e){return{setFetchedData:function(t){return e(function(e){return{type:x,payload:{data:e}}}(t))}}})(ne),oe=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:G}),r.a.createElement(p.a,{path:"/tours",component:le})))}}]),t}(n.Component),ce=a(88),se=a(60),ie={totalDays:"",startDate:null,location:null,travelSchedule:{start:"0900",end:"1800"},lunchTime:{start:"1300",end:"1400"},categories:[],fetchedData:[]},ue=Object(ce.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(h.a)({},e,{totalDays:t.payload.days});case T:return Object(h.a)({},e,{startDate:t.payload.newDate});case S:return Object(h.a)({},e,{categories:t.payload.categories});case C:var a=t.payload,n=a.type,r=a.time,l=a.newTime;return Object(h.a)({},e,Object(se.a)({},n,Object(h.a)({},e[n],Object(se.a)({},r,l))));case j:return Object(h.a)({},e,{location:t.payload.location});case x:return Object(h.a)({},e,{fetchedData:t.payload.data});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(O.a,{store:ue},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,1,2]]]);
//# sourceMappingURL=main.48f3e842.chunk.js.map