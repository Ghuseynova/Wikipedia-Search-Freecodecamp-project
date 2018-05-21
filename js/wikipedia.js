$(document).ready(function(){

	$("#search-btn").click(function(){

		var searchTitle = $("#search").val();

		var apiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +searchTitle+ "&limit=10&namespace=0&format=json&callback=?";
	
	
	
		$.ajax({
			url: apiUrl,
			type: "GET",
			dataType: "json",
			success: function(data) {
				var dataUrl = data[3];
				var dataTitle = data[1];
				var dataContent = data[2];
					$(".search_result").html('');

					for (var i = 0; i < dataTitle.length; i++) {
						$(".search_result").append('<div class="search_result-item"><h2>' + dataTitle[i] + '</h2><p>' + dataContent[i] + '</p><a href="' + dataUrl[i] + '" target="_blank">Read More</a></div>');

					}
					searchTitle = $("#search").val('');

				
			}

		})

});
});