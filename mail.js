$(document).ready(function() {

    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        var data = {
            lastName: $(this.lastName).val(),
            firstName:$(this.firstName).val(),
            emailAdress: $(this.emailAdress).val(),
            phone: $(this.phone).val(),
            type: $(this.type).val(),
            entreprise: $(this.entreprise).val(),
            adress: $(this.adress).val(),
            city: $(this.city).val(),
            cp: $(this.cp).val(),
            message: $(this.message).val()
        };
        Email.send({
            SecureToken : "048f4df7-bddd-43f7-8bb4-634e4ed5249f",
            To : 'evolutionpositive85@gmail.com',
            From : "contact@evolutionpositive.fr",
            Subject : "Nouveau message de evolutionpositive.fr",
            Body : data.lastName + ' ' + data.firstName + '<br /><br />' + data.phone + '<br />' + data.emailAdress + '<br />' + data.adress + ', ' + data.cp + ' ' + data.city + '<br />' + data.type + ' - ' + data.entreprise + '<br /><br />' + data.message
        }).then(
          message => message === 'OK' ? alert('Votre message à bien été envoyé.') : alert('Une erreur est survenue, veuillez réesayez')
        );
    });

});
