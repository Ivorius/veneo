function veneoToggle() {
  $("[data-toggle]").on("click", function(event) {
    event.preventDefault();
    
    var
      $thisEl = $(this);

    $html
      .toggleClass($thisEl.attr("data-toggle"));

    $thisEl
      .toggleClass("toggle--is-active");
  });

  $("[data-remove]").on("click", function(event) {
    event.preventDefault();

    var
      $thisEl = $(this);

    $html
      .removeClass($thisEl.attr("data-remove"));
  });

  var checkObj = document.querySelectorAll("[data-check]");

  for (var i = 0; i < checkObj.length; i++) {
    checkObj[i].addEventListener("click", function(event) {
      $html.toggleClass(this.dataset.check, this.checked);
    });
  }
}
