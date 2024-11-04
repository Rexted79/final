$(document).ready(function() {
    $(".boxs").click(function() {
      if ($("body").hasClass("night")) {
        $("body").removeClass("night");
        $(".boxs").removeClass("boxsedin");
        $(".switch").removeClass("switchedin");
        $(".te").removeClass("teedin");
        $("body").addClass("light");
        $(".yoke").addClass("unyoked");
        $(".boxs").addClass("boxsedout");
        $(".switch").addClass("switchedout");
        $(".te").addClass("teedout");
      } else {
        $(".yoke").removeClass("unyoked");
        $(".switch").removeClass("switchedout");
        $(".te").removeClass("teedout");
        $("body").removeClass("light");
        $(".boxs").removeClass("boxsedout");
        $(".yoke").addClass("yoked");
        $("body").addClass("night");
        $(".boxs").addClass("boxsedin");
        $(".switch").addClass("switchedin");
        $(".te").addClass("teedin");
      }
    });
  }); //#f44327 really awesome red