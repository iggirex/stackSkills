$("document").ready(function() {
  var speed= 500
  var autoswitch = true
  var autoswitch_speed = 4000

  $(".slide").first().addClass("active")

  $(".slide").hide()

  $(".active").show()

  $("#next").click(function() {
    $(".active").removeClass("active").addClass("oldActive")
      if($(".oldActive").is(":last-child")) {
        $(".slide").first().addClass("active")
      } else {
        $(".oldActive").next().addClass("active")
      }
    $(".oldActive").removeClass("oldActive")
    $(".slide").fadeOut(speed)
    $(".active").fadeIn(speed)
  })

  $("#prev").click(function() {
    $(".active").removeClass("active").addClass("oldActive")
      if($(".oldActive").is(":first-child")) {
        $(".slide").last().addClass("active")
      } else {
        $(".oldActive").prev().addClass("active")
      }
    $(".oldActive").removeClass("oldActive")
    $(".slide").fadeOut(speed)
    $(".active").fadeIn(speed)
  })

    if(autoswitch == true) {
      setInterval(function() {
        $(".active").removeClass("active").addClass("oldActive")
          if($(".oldActive").is(":last-child")) {
            $(".slide").first().addClass("active")
          } else {
            $(".oldActive").next().addClass("active")
          }
        $(".oldActive").removeClass("oldActive")
        $(".slide").fadeOut(speed)
        $(".active").fadeIn(speed)
      }, autoswitch_speed)
    }

})
