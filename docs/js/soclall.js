$(document).ready(function() {
    $('.rst-content img').on('click', function(){
        if($(this).hasClass('original-size')) {
            $(this).removeClass('original-size').removeAttr('style');
        } else {
            var orW = 0;
            $("<img/>").attr("src", $(this).attr("src")).load(function() {
                orW = this.width;
            });
            
            if(orW) {
                $(this).addClass('original-size').css("width", orW + "px");
            }
        }
    });
});