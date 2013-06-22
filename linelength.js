$("document").ready(function(){
//Process the inputs: font size & characters per line
function processInputs(smallestWidth){
	var charsPerLine = $("#charsline").val()
	var fontSize = $("#fontsize").val()
	var letterSpacing = $("#letterspacing").val()
	var kafkaWidth = (smallestWidth*fontSize + parseInt(letterSpacing)*50)*charsPerLine/50
	var kafkaWidthEms = kafkaWidth/fontSize

	$(".kafka").width(kafkaWidth)
	$(".thewidth").text(Math.round(kafkaWidth))
	$(".emswidth").text(kafkaWidthEms.toPrecision(4))
}

//Get smallest em value for inputs that aren't the font-changing button
function getSmallestWidth(){
	return $("."+$(".kafka").attr("class").split(" ")[1]).eq(1).data("size")
}

//Change font
$(".button").on("click",function(){
	var smallestWidth = $(this).data("size")
	$(".kafka").attr("class","kafka")
	$(".kafka").addClass($(this).attr("class").split(" ")[1])
	processInputs(smallestWidth)
})

//Change characters per line
$("#charsline").on("change",function(){
	$(".charsline").text($(this).val())
	processInputs(getSmallestWidth())
})

//Change font size
$("#fontsize").on("change",function(){
	$(".fontsize").text($(this).val())
	$(".kafka").css("font-size",$(this).val()+"px")
	processInputs(getSmallestWidth())
})

//Change letter spacing
$("#letterspacing").on("change",function(){
	$(".letterspacing").text($(this).val())
	$(".kafka").css("letter-spacing",$(this).val()+"px")
	processInputs(getSmallestWidth())
})

})