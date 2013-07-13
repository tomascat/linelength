$("document").ready ->
	$(".fonts").on 'click', ->
		$('.length1').attr 'class', 'test length1'
		$('.length2').attr 'class', 'test length2'
		$(".test").addClass $(@).attr("class").split(" ")[1]
		$('.width').text "#{$('.length1').innerWidth()/20}em/#{$('.length2').innerWidth()/20}em"