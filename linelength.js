// Generated by CoffeeScript 1.6.3
(function() {
  $("document").ready(function() {
    var getSmallestWidth, processInputs;
    processInputs = function(smallestWidth) {
      var charsPerLine, fontSize, kafkaWidth, kafkaWidthEms, letterSpacing;
      charsPerLine = $("#charsline").val();
      fontSize = $("#fontsize").val();
      letterSpacing = $("#letterspacing").val();
      kafkaWidth = (smallestWidth * fontSize + parseInt(letterSpacing) * 50) * charsPerLine / 50;
      kafkaWidthEms = kafkaWidth / fontSize;
      $(".kafka").width(kafkaWidth);
      $(".thewidth").text(Math.round(kafkaWidth));
      return $(".emswidth").text(kafkaWidthEms.toPrecision(4));
    };
    getSmallestWidth = function() {
      return $("." + $(".kafka").attr("class").split(" ")[1]).eq(1).data("size");
    };
    $(".button").on('click', function() {
      var smallestWidth;
      smallestWidth = $(this).data("size");
      $(".kafka").attr('class', 'kafka');
      $(".kafka").addClass($(this).attr("class").split(" ")[1]);
      return processInputs(smallestWidth);
    });
    $("#charsline").on('change', function() {
      $('.charsline').text($(this).val());
      return processInputs(getSmallestWidth());
    });
    $("#fontsize").on('change', function() {
      $(".fontsize").text($(this).val());
      $(".kafka").css('font-size', $(this).val() + "px");
      return processInputs(getSmallestWidth());
    });
    return $("#letterspacing").on('change', function() {
      $(".letterspacing").text($(this).val());
      $(".kafka").css('letter-spacing', $(this).val() + "px");
      return processInputs(getSmallestWidth());
    });
  });

}).call(this);
