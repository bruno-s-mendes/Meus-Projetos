(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(30),a(10)),c=a(1),s=a(3),u=a(4),m=a(6),d=a(5),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.id,n=e.imagePath,r=e.rating,o=e.storyline;return i.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:n}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{className:"movie-card-title"},t),i.a.createElement("h4",{className:"movie-card-rate"},"".concat(r))),i.a.createElement("h4",{className:"movie-card-sinopse"},"".concat(o)),i.a.createElement(l.b,{to:"movies/".concat(a),className:"button card-btn"},"VER DETALHES"))}}]),a}(i.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-content"},"Carregando...")}}]),a}(n.Component),p=a(15),b=a(12),f=a(11),g=(a(36),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(b.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(p.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title",className:"text-input-label"},"T\xedtulo",i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate text-input-input",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle",className:"text-input-label"},"Subt\xedtulo",i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)},className:"text-input-input"})))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image",className:"text-input-label"},"Imagem",i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)},className:"text-input-input"})))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline",className:"textarea-input-label"},"Sinopse",i.a.createElement("br",null),i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)},className:"textarea-input-input"})))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre",className:"text-input-label"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},className:"text-input-input"},i.a.createElement("option",{value:"action",className:"text-input-input"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy",className:"text-input-input"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller",className:"text-input-input"},"Suspense"),i.a.createElement("option",{value:"fantasy",className:"text-input-input"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating",className:"text-input-label"},"Avalia\xe7\xe3o",i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)},className:"text-input-input"})))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit,className:"button"},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"form"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component)),E=a(24),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var N=function(){return JSON.parse(localStorage.getItem("movies"))},O=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},S=function(e){var t=N().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={movies:[],loading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=this;this.setState({loading:!0},(function(){new Promise((function(e){var t=N();k(t)(e)})).then((function(t){e.setState({movies:t,loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return console.log(t),i.a.createElement("div",{"data-testid":"movie-list",className:"main-content"},i.a.createElement("div",{className:"content"},a?i.a.createElement(h,null):t.map((function(e){return i.a.createElement(v,{key:e.title,movie:e})}))),i.a.createElement(l.b,{to:"/movies/new",className:"button"},"ADICIONAR CART\xc3O"))}}]),a}(n.Component),I=(a(37),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).removeMovie=function(){!function(e){var t=N();t=t.filter((function(t){return t.id!==parseInt(e,10)})),O(t),new Promise((function(e){k({status:"OK"})(e)}))}(n.state.id)},n.state={movie:[],loading:!1,id:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=this,t=this.props.match.params.id;this.setState({loading:!0},(function(){S(t).then((function(a){e.setState({movie:a,loading:!1,id:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.movie,n=e.id,r=a.title,o=a.storyline,c=a.imagePath,s=a.genre,u=a.rating,m=a.subtitle;return!0===t?i.a.createElement(h,null):i.a.createElement("main",{className:"main-content"},i.a.createElement("div",{"data-testid":"movie-details",className:"movie-card-detail"},i.a.createElement("p",{className:"movie-card-detail-title"},"".concat(r)),i.a.createElement("p",{className:"movie-card-detail-subtitle"},"".concat(m)),i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(c),className:"movie-detail-img"}),i.a.createElement("p",{className:"movie-card-detail-storyline"},"".concat(o)),i.a.createElement("div",{className:"movie-card-detail-bottom"},i.a.createElement("p",{className:"movie-card-detail-genre"},"Genre: ".concat(s)),i.a.createElement("p",{className:"movie-card-detail-rating"},"Rating: ".concat(u))),i.a.createElement("div",{className:"btn-container"},i.a.createElement(l.b,{to:"/movies/".concat(n,"/edit"),className:"button"},"EDITAR"),i.a.createElement(l.b,{to:"/",className:"button"},"VOLTAR"),i.a.createElement(l.b,{to:"/",onClick:this.removeMovie,className:"button"},"DELETAR"))))}}]),a}(n.Component)),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=N(),n=a[a.length-1].id+1,i=Object(b.a)(Object(b.a)({},t),{},{id:n});a=[].concat(Object(E.a)(a),[i]),O(a),k("OK")(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie",className:"main-content"},i.a.createElement(g,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:[],loading:!1,shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var a=N().map((function(t){return t.id===parseInt(e.id,10)?Object(b.a)(Object(b.a)({},t),e):t}));O(a),k("OK")(t)}))}(e),this.setState({shouldRedirect:!0})}},{key:"fetchMovie",value:function(){var e=this,t=this.props.match.params.id;this.setState({loading:!0},(function(){S(t).then((function(t){e.setState({movie:t,loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):!0===t?i.a.createElement(h,null):i.a.createElement("div",{"data-testid":"edit-movie",className:"main-content"},i.a.createElement(g,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("h1",{"data-testid":"404-error",className:"main-content"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(38);var w=function(){return i.a.createElement(l.a,null,i.a.createElement("h1",{className:"title"},"Movie Card Library CRUD"),i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",render:function(e){return i.a.createElement(j,e)}}),i.a.createElement(c.b,{path:"/movies/new",render:function(e){return i.a.createElement(C,e)}}),i.a.createElement(c.b,{path:"/movies/:id/edit",render:function(e){return i.a.createElement(_,e)}}),i.a.createElement(c.b,{path:"/movies/:id",render:function(e){return i.a.createElement(I,e)}}),i.a.createElement(c.b,{component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.dda57ece.chunk.js.map