$("document").ready ->
	
	#Process the inputs: font size & characters per line
	processInputs = (smallestWidth) ->
		charsPerLine = $("#charsline").val()
		fontSize = $("#fontsize").val()
		letterSpacing = $("#letterspacing").val()
		kafkaWidth = (smallestWidth*fontSize + parseInt(letterSpacing)*50)*charsPerLine/50
		kafkaWidthEms = kafkaWidth/fontSize
		$(".kafka").width kafkaWidth
		$(".thewidth").text(Math.round kafkaWidth)
		$(".emswidth").text(kafkaWidthEms.toPrecision 4)
	
	#Get smallest em value for inputs that aren't the font-changing button
	getSmallestWidth = ->
		$("."+$(".kafka").attr("class").split(" ")[1]).eq(1).data("size")
	
	#Change font
	$(".button").on 'click', ->
		smallestWidth = $(@).data("size")
		$(".kafka").attr 'class', 'kafka'
		$(".kafka").addClass $(@).attr("class").split(" ")[1]
		processInputs smallestWidth
	
	#Change characters per line
	$("#charsline").on 'change', ->
		$('.charsline').text $(@).val()
		processInputs getSmallestWidth()
	
	#Change font size
	$("#fontsize").on 'change', ->
		$(".fontsize").text $(@).val()
		$(".kafka").css 'font-size', $(@).val()+"px"
		processInputs getSmallestWidth()
	
	#Change letter spacing
	$("#letterspacing").on 'change', ->
		$(".letterspacing").text $(@).val()
		$(".kafka").css 'letter-spacing', $(@).val()+"px"
		processInputs getSmallestWidth()