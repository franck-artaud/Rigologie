$(document).ready(function() {

    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize(),
            success: function(res){
                if(res == 'Success'){
                    $(this).find('input').val('');
                    $(this).find('textarea').val('');
                    $('#submitResult').append('<div class="alert success"><i class="fas fa-check"></i> Votre message a bien été envoyé</div>');
                    $('#contactForm').trigger('reset');
                } else {
                    $('#submitResult').append('<div class="alert error"><i class="fas fa-times"></i> Une erreur est survenue, réessayer s\'il vous plait</div>');
                }
            }
        })
        return false;
    });

});
