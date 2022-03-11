$(document).ready(function(){
    site.view_form();
    
    $('.bx_stars_bg').on('click',function(){
         return false;
    });
});
var site = new function() {

    this.view_form = function() {
        $('.callbackForm.view.form form, .js_form').on('submit', function(){
            var data = $(this).serialize();
            var form = $(this);
            $.ajax({
                url: "/local/scripts/view_form.php",
                type: "POST",
                data: data,
                success: function(msg){console.log(msg);
                    if(msg == 1){
                        form.before('<p style="color:#039232;">Форма отправлена</p>');
                    }
                    else{
                        form.before('<p style="color:#8e0505;">Ошибка! Попробуйте еще раз!</p>');
                    }
                },
            });
            return false;
        });
    };

};
