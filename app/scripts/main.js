/******** import verge and create it like module of jquery *****/
jQuery.extend(verge);

	var wSlider = verge.viewportW() - $('#menu').width() ;
  	var hSlider = verge.viewportH() ;
  	var hHeader=$('#logo-xcoreisc').height() ;
  	$('header').css({'height': hHeader +"px"});

angular.module('xcoreisc', ['ngRoute'])
 
.config(function($routeProvider, $locationProvider) {
 	$routeProvider.when('/',              { templateUrl: 'templates/slider.html',controller: SliderCntl });
 	$routeProvider.when('/login',         { templateUrl: 'templates/login.html',controller: LoginCntl });
 	$routeProvider.when('/info',          { templateUrl: 'templates/info.html',controller: InfoCntl });
 	$routeProvider.when('/blog',          { templateUrl: 'templates/blog.html',controller: BlogCntl });
 	$routeProvider.when('/eventos',          { templateUrl: 'templates/eventos.html',controller: EventosCntl });
/*
 	$routeProvider.when('/eventos',       { templateUrl: 'templates/eventos.html',controller: EventosCntl });
 	$routeProvider.when('/speakers',      { templateUrl: 'templates/speakers.html',controller: SpeakersCntl });
 	$routeProvider.when('/concursos',     { templateUrl: 'templates/concursos.html',controller: ConcursosCntl });
 	$routeProvider.when('/cronograma',    { templateUrl: 'templates/cronograma.html',controller: CronogramaCntl });
 	$routeProvider.when('/turismo',       { templateUrl: 'templates/turismo.html',controller: TurismoCntl });
 	$routeProvider.when('/transporte',    { templateUrl: 'templates/transporte.html',controller: TransporteCntl });
 	$routeProvider.when('/hoteles',       { templateUrl: 'templates/hoteles.html',controller: HotelesCntl });
 	$routeProvider.when('/restaurantes',  { templateUrl: 'templates/restaurantes.html',controller: RestaurantesCntl });
 	$routeProvider.when('/inscripciones', { templateUrl: 'templates/inscripciones.html',controller: InscripcionesCntl });*/
	// configure html5 to get links working on jsfiddle
	$locationProvider.html5Mode(true);
});
 
function MainCntl($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
}
function LoginCntl($scope, $routeParams) {
  $scope.name = "login";
  $scope.params = $routeParams;
  $('#main-content > div').css({'margin-top': hHeader +'px', 'height': (hSlider - hHeader) +'px' });
}
function BlogCntl($scope, $routeParams) {
  $scope.name = "Blog";
  $scope.params = $routeParams;
  $scope.categories=[
  	{anchorText: "Concursos", href: "blog/concursos"},
  	{anchorText: "Social"   , href: "blog/social"},
  	{anchorText: "Deportes" , href: "blog/deportes"},
  	{anchorText: "Amenidad" , href: "blog/amenidad"}
  ];

  $('#main-content').css({'margin-top': hHeader +'px'});
}
function EventosCntl($scope, $routeParams) {
  $scope.name = "eventos";
  $scope.params = $routeParams;
  $scope.categories=[
  	{anchorText: "Concursos", href: "blog/concursos"},
  	{anchorText: "Social"   , href: "blog/social"},
  	{anchorText: "Deportes" , href: "blog/deportes"},
  	{anchorText: "Amenidad" , href: "blog/amenidad"}
  ];

  $('#main-content').css({'margin-top': hHeader +'px'});
}
function SliderCntl($scope, $routeParams) {
  $scope.name = "Bienvenido";
  $scope.params = $routeParams;
  $scope.slides=[
  	{description: "La Plaza del Saber de la Universidad Nacional Pedro Ruiz Gallo, ubicada al ingreso de la misma, nos resalta esfuerzo y valor en el estudio. Y se viste de gala en el Décimo Congreso Regional de Ingeniería de Sistemas y Computación. ¡Te esperamos! UNPRG, Lambayeque", img: "images/1.jpg"},
  	{description: "Somos una universidad pública que crea, imparte, difunde conocimientos científicos,  tecnológicos y humanísticos; forma científicos y profesionales innovadores, éticos, críticos y competitivos, que participan activamente en el desarrollo integral  y sustentable de la sociedad. "   , img: "images/2.jpg"},
  	{description: "El Señor de Sipan, ilustre representación de nuestra cultura Lambayecana.  El Señor de Sipán fue un antiguo gobernante del siglo III, cuyo dominio abarcó una zona  del actual Perú. El arqueólogo peruano Walter Alva, junto a su equipo, descubrió la tumba  del Señor de Sipán en 1987. El hallazgo de las tumbas reales del Señor de Sipán marcó un  importante hito en la arqueología del continente americano porque, por primera vez,  se halló intacto y sin huellas de saqueos, un entierro real de una civilización peruana anterior a los Incas. " , img: "images/3.jpg"},
  	{description: "El Museo Tumbas Reales de Sipán es una institución pública del Perú.  Su principal misión es la protección, investigación, conservación y difusión del extraordinario  legado cultural y documental recuperado durante las investigaciones arqueológicas en el santuario  mochica de Sipán y otros yacimientos de la región. El museo custodia más de dos mil piezas de oro. Lambayeque, Perú " , img: "images/4.jpg"},
  	{description: "Te presentamos a la gastronomía lambayecana, la cual significa hablar de palabras mayores.  Esta deliciosa comida goza de una fama bien merecida, es el resultado del mestizaje cultural  entre sus antiguas culturas pre-hispánicas y el mundo occidental. Tenemos el Arroz con pato, que tiene su origen en las paellas españolas que llegaron con las mujeres europeas  y que mestizaron las comidas con los recursos de las jóvenes tierras peruanas con la nostalgia de la patria lejana. " , img: "images/4.jpg"},
  	{description: "La artesanía en Lambayeque está basada en materiales como al paja toquilla y palma, fibras vegetales como el mimbre,  el laurel, el sauce y textiles como telares de cintura marcados y bordados. Complementan la actividad artesanal productos  de cerámica, utilitaria y artística, orfebrería y cuero. Entre los productos elaborados encontraremos sombreros y  representaciones en paja; mantos, alforjas, vestimenta variada y objetos utilitarios elaborados en telares de cintura;  alfombras y menaje de fibra natural; representaciones pre incaicas elaboradas en cerámica y metal; y objetos de cuero.  " , img: "images/4.jpg"},
  	{description: "Estamos convencidos que el impacto del emprendimiento y la innovación sobre los negocios avanza de una manera tan rápida y tiene un alcance tan vasto, que resulta difícil entender cómo actuar para lograr los resultados que un país como Perú busca en este frente.  Es por ello que te invitamos a formar parte del Décimo Congreso Regional de Ingeniería de Sistemas y Computación, donde  daremos a conocer la noción de “emprendimiento innovador”, o “innovación emprendedora”, que tiene una importancia extraordinaria para la economía moderna. ¡Te esperamos!  " , img: "images/4.jpg"}
  ];

   	$(".seven_container").sevenslider({
	      width: wSlider ,
	      height: hSlider ,
	      fullwidth:true,
	      animation:59,
	      automation:true,
	      autointerval:10,
	      progress:false,
	      progresstype:"linear",
	      bullet:true,
	      carousel:false,
	      circular:true,
	      responsive:true,
	      swipe:true,
	      keyboard:true,
	      skin:"fullwidth",
	      lightbox:false
    });

      $('.bullet').attr('checked',true);
      $('.fullwidth').attr('checked',true);
      $('.responsive').attr('checked',true);
      $('.circular').attr('checked',true);
      $('.swipe').attr('checked',true);
      $('.keyboard').attr('checked',true);
      $('.automate').attr('checked',true);
      $('.lightbox').attr('checked',true);
      $('.p_type').attr('checked',true);
}
function InfoCntl($scope, $routeParams) {
	$('#main-content').css({'margin-top': hHeader +'px'});
	$scope.name = "Info";
	$scope.params = $routeParams;
  $scope.team=[
  	{nombre:" Abanto Herrera Maryl Carolina			" ,cargo:" Delegado Fraterno de la UNPRG ante APEISC            "},
	{nombre:" Aldana Vidaurre Juan Manuel			" ,cargo:"                                                      "},
	{nombre:" Altamirano Zelada Jean				" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Alvarado Vigo Percy					" ,cargo:"                                                      "},
	{nombre:" Aquino Sánchez Fiorella Inés			" ,cargo:" Sub coordinador de la comisión de Asuntos Académico   "},
	{nombre:" Ayala Suárez Lourdes					" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Bonilla Acuña Noelia					" ,cargo:"                                                      "},
	{nombre:" Bonilla Coronado Amado				" ,cargo:"                                                      "},
	{nombre:" Bravo Díaz Mayra del Milagro			" ,cargo:" Secretaria de la comisión de Eventos                 "},
	{nombre:" Bravo Merlo Cristian Jonathan			" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Calderón Riojas Junior's				" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Campos Alvites Jerson					" ,cargo:"                                                      "},
	{nombre:" Carrillo Ucañay Melisa				" ,cargo:"                                                      "},
	{nombre:" Castillo Elera Luis					" ,cargo:"                                                      "},
	{nombre:" Chanta Gallardo Jesús					" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Chávez Valle Claudia					" ,cargo:"                                                      "},
	{nombre:" Chung Luna Shirley					" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Clavo Monsalve Keler Humberto			" ,cargo:"                                                      "},
	{nombre:" Cobeñas Mendoza Manuel Fernando		" ,cargo:"                                                      "},
	{nombre:" Coronel Pérez Carlos					" ,cargo:" Creador del Logo XCOREISC 2014                       "},
	{nombre:" Espinoza Arias Victor					" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Espinoza Guevara Miluska				" ,cargo:"                                                      "},
	{nombre:" Espinoza Sandoval Angel				" ,cargo:" sub Coordinador de la Comisión de Logística          "},
	{nombre:" Fernández Alcántara Santiago			" ,cargo:"                                                      "},
	{nombre:" Fernández Requejo Gleny				" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Figueroa Piscoya Eder					" ,cargo:"                                                      "},
	{nombre:" García Rebaza Carlos					" ,cargo:"                                                      "},
	{nombre:" Granados Alcántara Aldo				" ,cargo:"                                                      "},
	{nombre:" Horna Llontop Paulo					" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Hurtado Vásquez Milner				" ,cargo:"                                                      "},
	{nombre:" Ilatoma Salcedo Milagros				" ,cargo:"                                                      "},
	{nombre:" Inoñan Coral Christian Cesar		    " ,cargo:"                                                      "},
	{nombre:" Jordan Chero Alexander				" ,cargo:" Secretario de la comisión de Finanzas                "},
	{nombre:" Larrea Dupis Carlo					" ,cargo:"                                                      "},
	{nombre:" Lisboa Díaz Michel Alexis				" ,cargo:"                                                      "},
	{nombre:" Llerena Sánchez Tatiana del Rocío		" ,cargo:" Coordinador de la Comisión de Finanzas                "},
	{nombre:" Lozada Huaman Omar					" ,cargo:" Delegado Pleno de la UNPRG ante APEISC               "},
	{nombre:" Maco Elera Franchesca					" ,cargo:" Miembro  de comisión de Asuntos Académicos        	"},
	{nombre:" Mendoza Cabrera Yohswar Alberto		" ,cargo:"                                                      "},
	{nombre:" Mendoza Lozano Willy					" ,cargo:"                                                      "},
	{nombre:" Mendoza Monja Carmen					" ,cargo:"                                                      "},
	{nombre:" Mío Gallegos Paula del Milagro		" ,cargo:" Miembro  de comisión de Asuntos Académicos        	"},
	{nombre:" Monge Castro Henrry					" ,cargo:" Coordinador de la comisión de Finanzas 				"},
	{nombre:" Mora Piscoya Luz Magaly				" ,cargo:" Miembro  de comisión de Asuntos Académicos        	"},
	{nombre:" Niño Mendoza Abel						" ,cargo:" Miembro  de comisión de Asuntos Académicos        	"},
	{nombre:" Pedraza Nolazco Aaron					" ,cargo:"                                                      "},
	{nombre:" Pérez Bonilla Luis					" ,cargo:"                                                      "},
	{nombre:" Pérez Gil Juan Carlos					" ,cargo:" Miembro de la comisión de Software                   "},
	{nombre:" Pérez Pérez Janna Yamileth			" ,cargo:" Miembro  de comisión de Asuntos Académicos           "},
	{nombre:" Pérez Sandoval Carla Maricielo		" ,cargo:"                                                      "},
	{nombre:" Pintado Zevallos Renato				" ,cargo:"                                                      "},
	{nombre:" Piñin Falla Victor Hugo				" ,cargo:"                                                      "},
	{nombre:" Piscoya Santisteban Luis				" ,cargo:"                                                      "},
	{nombre:" Portocarrero Bustamante Antony Pierres" ,cargo:" Miembro de la comisión de Eventos                    "},
	{nombre:" Quesquén Mechán Katerin Liseth		" ,cargo:"                                                      "},
	{nombre:" Quispe Abad Ericson Luis				" ,cargo:"                                                      "},
	{nombre:" Quispe Asenjo Jhonatan Alberto		" ,cargo:"                                                      "},
	{nombre:" Ramírez Sánchez Clarisa				" ,cargo:" Miembro de la comisión de Logística                  "},
	{nombre:" Rojas Viera Cinthia					" ,cargo:"                                                      "},
	{nombre:" Romero Ramos Yovany					" ,cargo:" Coordinador de la Comisión de Asuntos Académicos     "},
	{nombre:" Rubio Díaz Erik Carlos				" ,cargo:"                                                      "},
	{nombre:" Ruiz Figueroa Adrián					" ,cargo:" Miembro de la comisión de Software                   "},
	{nombre:" Saavedra Zuñiga Maribel				" ,cargo:"                                                      "},
	{nombre:" Salas Salvador Jheferson				" ,cargo:" Miembro  de la comisión de Asuntos Académicos        "},
	{nombre:" Salazar Ballena Claudio				" ,cargo:" Secretario de la comisión de Asuntos Académicos      "},
	{nombre:" Sánchez Govea Giancarlo				" ,cargo:" Coordinador de la Comisión de Eventos                 "},
	{nombre:" Sanjinéz Chero Giancarlos				" ,cargo:"                                                      "},
	{nombre:" Santa Cruz Salazar Vania				" ,cargo:"                                                      "},
	{nombre:" Silva Rengifo Raúl Ricardo			" ,cargo:"                                                      "},
	{nombre:" Sevilla Reyes Luis Alonso				" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Sirlopú Cumpa Miguel Angel			" ,cargo:" Miembro de la comisión de Software                   "},
	{nombre:" Suclupe Tejada kely Karina			" ,cargo:"                                                      "},
	{nombre:" Supo Oliden Jhordy					" ,cargo:"                                                      "},
	{nombre:" Terán Chang Andre Abel				" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Tocto Niño Ronal						" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Torres Ventura Marco					" ,cargo:"                                                      "},
	{nombre:" Túllume Millones Kevin				" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Uceda Gonzales Oscar					" ,cargo:" Miembro  de la comisión de Asuntos Académicos        "},
	{nombre:" Ugaz Iñape Diego						" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Vásquez Guerra Christian				" ,cargo:" Miembro  de la comisión de Asuntos Académicos        "},
	{nombre:" Vela Inoñan Jenner Adrian				" ,cargo:"                                                      "},
	{nombre:" Vilca Ramos David						" ,cargo:" Miembro  de la comisión de Asuntos Académicos        "},
	{nombre:" Zaña Bances Giancarlos				" ,cargo:" Miembro de la Comisión de Eventos                    "},
	{nombre:" Zapata Llonto Ingrid Gabriela			" ,cargo:"                                                      "},
	{nombre:" Zavaleta Verona Tefhany				" ,cargo:" Miembro de la Comisión de Eventos                    "}
  ];
}


