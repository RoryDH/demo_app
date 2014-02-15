var getNames = function() {
  $.getJSON("/names", function(data) {
    writeNames(data);
  });
};

var writeNames = function(list) {
  $("ul").html("");
  $.each(list, function(i, n) {
    $("ul").append("<li>" + n + "</li>");
  });
};

var sendName = function(name) {
  $.post("/new?name=" + name, function(name) {
    getNames();
  });
};

$(document).ready(function() {
  $("#sign").submit(function(e) {
    e.preventDefault();

    var inputBox = $("#sign").find("input");
    var newName = inputBox.val();
    inputBox.val("");

    if (newName) {
      sendName(newName);
    }
  });

  $("#refresh").click(function(e) {
    e.preventDefault();
    getNames();
  });

  getNames();
});