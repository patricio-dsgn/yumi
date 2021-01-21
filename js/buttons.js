$(document).ready(function(){

	function clear_btn() {
		$("#btn-drive").removeClass("sel");
		$("#btn-walk").removeClass("sel");
		$("#btn-bus").removeClass("sel");
		$("#btn-taxi").removeClass("sel");
	}

	function clear_way() {
		$("#way-drive").removeClass("show");
		$("#way-walk").removeClass("show");
		$("#way-bus").removeClass("show");
		$("#way-taxi").removeClass("show");
	}

	$("#btn-drive").click(function(){
		clear_btn();
		clear_way();
		$("#way-drive").removeClass("hide");
		$("#way-drive").addClass("show");
		$("#btn-drive").addClass("sel");
	});

	$("#btn-walk").click(function(){
		clear_btn();
		clear_way();
		$("#way-walk").removeClass("hide");
		$("#way-walk").addClass("show");
		$("#btn-walk").addClass("sel");
	});

	$("#btn-bus").click(function(){
		clear_btn();
		clear_way();
		$("#way-bus").removeClass("hide");
		$("#way-bus").addClass("show");
		$("#btn-bus").addClass("sel");
	});

	$("#btn-taxi").click(function(){
		clear_btn();
		clear_way();
		$("#way-taxi").removeClass("hide");
		$("#way-taxi").addClass("show");
		$("#btn-taxi").addClass("sel");
	});







	$("#btn-taxi").click(function(){
		clear_btn();
		clear_way();
		$("#way-taxi").removeClass("hide");
		$("#way-taxi").addClass("show");
		$("#btn-taxi").addClass("sel");
	});

	







	var arr_places = [
		[1,'quĳote-restaurant','Quĳote Restaurant'],
		[0,'ecco-sushi-and-burguer','Ecco Sushi & Burguer'],
		[0,'sushi-all-star','Sushi All Star'],
		[0,'okita','Okita'],
		[0,'kingu-sushi','Kingu Sushi'],
		[0,'ichiban','Ichiban'],
		[0,'aomori-nikkei-and-sushi','Aomori Nikkei & Sushi'],
		[0,'kioto-sushi','Kioto Sushi'],
		[0,'ootoya-noodles-house','Ootoya Noodles House'],
		[0,'vip-sushi','Vip Sushi'],
		[0,'sushi-house-plaza ','Sushi House Plaza '],
		[0,'nippon-sushi-bar & Delivery','Nippon Sushi Bar & Delivery'],
		[0,'bushido-sushi-bar','Bushido Sushi Bar'],
		[0,'sushi-buffet','Sushi Buffet'],
		[0,'sushi-a-la-romana','Sushi a la Romana'],
		[0,'kioto-sushi','Kioto Sushi'],
	];


	$('.input-box').on('input', function() {

		if (this.value.trim().length == 2) {
			$('#panel-results').empty();
			$('#panel-results').append('\n<ul>');
			for (var i = 0; i <= arr_places.length; i++) {
				if (arr_places[i][0]==1) {
					$('#panel-results').append(
						'\n\t<li>'
						+'<button type="button" value="'
						+arr_places[i][1]
						+'" class="btn-result-place">'
						+arr_places[i][2]
						+'</button>'
						+'</li>'
					);
				}else if(arr_places[i][0]==0) {
					$('#panel-results').append(
						'\n\t<li>'
						+arr_places[i][2]
						+'</li>'
					);
				}
			}
			$('#panel-results').append('</ul>');
		}
	});

	$('.input-box').on('input', function() {
		if (this.value.trim().length == 0) {
			$('#panel-results').empty();
			$("#panel-options").addClass("hide");
		}
	});


	$("#panel-options").addClass("hide");
	$(document).on('click','.btn-result-place',function(){
		$("#panel-results").empty();
		$("#panel-options").removeClass("hide");
	});



	$("#btn-close").click(function() {
		$("#panel-search").toggle("hide", function() {});
		$("#panel-options-sub").toggle("hide", function() {});
		$("#panel-results").toggle("hide", function() {});
	});







});
