$(function(){

  const MSG_EMPTY = '入力必須です。';
  const MSG_TEXT_MAX = '20文字以内で入力してください。';
  const MSG_EMAIL_TYPE = 'emailの形式ではありません。';
  const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';

  /*必須事項*/
  $(".valid-must").click(function(){

    var form_g = $(this).closest('.form-group');

    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMPTY)
  });

  /*名前*/
  $(".valid-name").keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });

  /*携帯番号*/
  $(".format-number").change(function(){

    var format_before = $(this).val();

    format_before = format_before.replace(/-/g,'');

    var format_after = format_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });

    if(format_after.length === 11){
      $(this).val(format_after.substr(0,3)+'-'+format_after.substr(3,4)+'-'+format_after.substr(7,4));
    }else{
      $(this).val(format_after);
    }
  });

  /*email */
  $(".valid-email").keyup(function(){

    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) ){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMAIL_TYPE);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });

  /*comment */
  $(".valid-textarea").keyup(function(){

    var form_g = $(this).closest('.form-group');
    var count = $(this).val().length;

    $('.show-count-text').text(count);

    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 200){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }

  });

});

