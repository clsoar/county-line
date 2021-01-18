//https://script.google.com/macros/s/AKfycbwRSCpXWL9Id8ihsyBDU5xQQQAVmAW9pZ5G-gy-8iXYsiOXh2hV/exec
//const form = document.querySelector("#form"),
//      url = 'https://script.google.com/macros/s/AKfycbwRSCpXWL9Id8ihsyBDU5xQQQAVmAW9pZ5G-gy-8iXYsiOXh2hV/exec';

//let submitForm = document.querySelector("");

$(document).ready(function(){

  var $form = $('#form'),
    url = 'https://script.google.com/macros/s/AKfycbwRSCpXWL9Id8ihsyBDU5xQQQAVmAW9pZ5G-gy-8iXYsiOXh2hV/exec';


  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    }).success(
      // do something
    );
  })

});
