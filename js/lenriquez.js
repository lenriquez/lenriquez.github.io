$(function() {
  $(".dialog-fonts").dialog({
    autoOpen: false,
    width: 600,
    height: 500,
    modal: true,
    show: {
      effect: "blind",
      duration: 1000
    }
    }).dialog("widget").find(".ui-dialog-title").hide();

  $(".portfolio-item").click(function() {
   var name = $(event.target).parent().parent().attr('id');
   console.log("#dialog_"+name);
    $("#dialog_"+name).dialog("open");
  });
});