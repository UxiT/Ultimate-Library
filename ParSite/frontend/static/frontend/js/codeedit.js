$(document).ready(function () {
  $("textarea").keydown(function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      $(this).val(
        $(this).val().substring(0, start) + "\t" + $(this).val().substring(end)
      );

      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;
    }
  });

  function getHTML() {
    return $("#html").val();
  }

  function getCSS() {
    return $("#css").val();
  }

  function getJS() {
    return $("#js").val();
  }

  $("textarea").keyup(function (e) {
    let targetIframe = $("iframe")[0].contentWindow.document;

    targetIframe.open();
    targetIframe.close();

    console.log(getCSS());
    let html = getHTML();
    let css = "<style>" + getCSS() + "</style>";
    let js = "<script>" + getJS() + "</script>";

    $("body", targetIframe).append(html);
    $("head", targetIframe).append(css);
    $("body", targetIframe).append(js);
  });
});
