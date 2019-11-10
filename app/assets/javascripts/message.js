$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var content = message.content ? `<p class="text__content">${ message.content }</p>` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message">
                  <div class="upper-info">
                    <div class="upper-info__talker">
                      ${message.user_name}
                    </div>
                    <p class="upper-info__date">
                      ${message.datetime}
                    </p>
                  </div>
                  <div class="text">
                    ${content} 
                    ${img}
                  </div>
                </div>`;
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html);
      $('.messages').animate({
        scrollTop: $('.messages')[0].scrollHeight
      });
      $("#new_message")[0].reset();
    })
    .fail(function(data){
      alert('メッセージ送信に失敗しました');
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false); 
    })
  })
})
