console.log("contact.js");

import $ from 'jquery';

//  Config the entry point in webpack.config.js
//  ex: .addEntry('home', './assets/js/affiliation.js')
//  et, ajouter le point d'entré ainsi défini dans votre fichier twig
//  ex:
//  affiliation/index.html.twig
//
// {% block javascripts %}
// {# {{ encore_entry_script_tags('affiliation') }} #}
// {% endblock %}
//  Vous venez de modifier le webpack.config.js fichier, assurez-vous d'arrêter et de redémarrer Encore
// {% block body %}....
// ....
// {% endblock %}



function validMail(mail) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}

//captcha
import {
    Captcha
} from './jquery-captcha';


// Initialize the plugin to activate the captch widget
const captcha = new Captcha($('#canvas'));

$("#inputCode").removeClass("is-invalid");
$("#codeVideHelp").removeClass("d-block");


// Déclanche le outton submit du formulaire affiliation
$('#valid').on('click', function () {

    //$( "#spin1" ).removeClass( "d-none" );
    //$( "#spin1" ).addClass( "d-block" );

    // verification du mail
    let mailValidate = validMail($("#emailAddress").val());

    let nomClub = false;
    if (!$("#nomClub").val() == "") {
        nomClub = true;
    } else nomClub = false;
    //console.log("val nom" + $("#nom").val()  );
    // verification du nom
    let nom = false;
    if (!$("#nom").val() == "") {
        nom = true;
    } else nom = false;
    // verification du mail
    let mail = false;
    if (!$("#emailAddress").val() == "") {
        mail = true;
    } else mail = false;

    // verification du prenom
    let prenom = false;
    if (!$("#prenom").val() == "") {
        prenom = true;
    } else prenom = false;

    // verification de la ville
    let ville = false;
    if (!$("#ville").val() == "") {
        ville = true;
    } else nomClub = false;

    // verification de la telephone
    let telephone = false;
    if (!$("#telephone").val() == "") {
        telephone = true;
    } else nomClub = false;

    // verification du message
    let message = false;
    if (!$("#message").val() == "") {
        message = true;
    } else nomClub = false;



    $("#spin1").addClass("spinner-border spinner-border-sm");

    setTimeout(function () {

        //reset champ code du captcha
        $("#codeVideHelp").addClass("d-none");
        $("#codeVideHelp").removeClass("d-block");
        $("#codeErrHelp").addClass("d-none");
        $("#codeErrHelp").removeClass("d-block");
        $("#emailAddress").removeClass("is-invalid");
        $("#nomClub").removeClass("is-invalid");
        $("#nom").removeClass("is-invalid");
        $("#prenom").removeClass("is-invalid");
        $("#ville").removeClass("is-invalid");
        $("#telephone").removeClass("is-invalid");
        $("#message").removeClass("is-invalid");


        //mail input traitment
        if (!mailValidate) {
            $("#emailAddress").addClass("is-invalid");
        } else if (mailValidate) {
            $("#emailAddress").removeClass("is-invalid");

        }
        if (!nom) {
            $("#nom").addClass("is-invalid");
        } else if (nom) {
            $("#nom").removeClass("is-invalid");

        }
        if (!message) {
            $("#message").addClass("is-invalid");
        } else if (message) {
            $("#message").removeClass("is-invalid");

        }

// en attente si besoin:
/*        if (!telephone) {
            $("#telephone").addClass("is-invalid");
        } else if (telephone) {
            $("#telephone").removeClass("is-invalid");

        }*/


/*        if (!nomClub) {
            $("#nomClub").addClass("is-invalid");
        } else if (nomClub) {
            $("#nomClub").removeClass("is-invalid");

        }*/

/*        if (!prenom) {
            $("#prenom").addClass("is-invalid");
        } else if (prenom) {
            $("#prenom").removeClass("is-invalid");

        }*/
/*        if (!ville) {
            $("#ville").addClass("is-invalid");
        } else if (ville) {
            $("#ville").removeClass("is-invalid");

        }*/

        const captchaTest = captcha.valid($('input[name="code"]').val());

        let codeFieldEmpty = false;
        if ($('input[name="code"]').val() == "") {
            codeFieldEmpty = true;
        }

        //if (captchaTest == true  && nom && telephone && message && mailValidate && mail) {
        if (true) {

            //------------------------------------------------submit------------------------------------------------------//
            //Form submition
            //document.forms["contactForm"].submit();

            //ici !!!
/*            const formData = new FormData();
            formData.append("file", file);
            return await $fetch('/mail/contact', {
                method: "POST",
                body: formData,
            });*/
/*            async function fetchMoviesJSON() {
                const response = await fetch('/mail/contact');
                const movies = await response.json();
                return movies;
            }
            fetchMoviesJSON().then(movies => {
                movies; // fetched movies
            });*/

            //Recupération des données et génération du formData
            const form = document.getElementById("contactForm");
            const formData = new FormData(form);

            const nomField = document.getElementById('nom')
            const prenomField = document.getElementById('prenom')
            const telephoneField = document.getElementById('telephone')
            const emailField = document.getElementById('emailAddress')
            const messageField = document.getElementById('message')

            formData.set('nom', nomField.value);
            formData.set('prenom', prenomField.value);
            formData.set('telephone', telephoneField.value);
            formData.set('email', emailField.value);
            formData.set('message', messageField.value);

            //console.log('formData::', formData.get('formData'))

            //const output = document.getElementById("output");

/*            for (const [key, value] of formData) {
                //output.textContent += `${key}: ${value}\n`;
                console.log(`${key}: ${value}\n`)
            }*/


            fetch(`/mail/contact`, {
                method: "POST",
                headers : {
                    //fetch génère automatiquement le header
/*                   'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'processData': false,
                    'contentType': false,
                    'cache': false,
                    'enctype' : "multipart/form-data"*/
                },
                body: formData

            })
                .then((response) => console.log(response.json()))
                .then((messages) => {console.log("messages");});



            //$("#contactForm").submit();
            //-------------------------------------------------------------------------------------------------------------//
            $("#spin1").removeClass("spinner-border spinner-border-sm");

            //champ code faux
        } else if (captchaTest == false && !codeFieldEmpty) {
            $("#spin1").removeClass("spinner-border spinner-border-sm");
            //$( "#inputCode" ).addClass("is-invalid");
            $("#codeErrHelp").removeClass("d-none");
            $("#codeErrHelp").addClass("d-block");

            //champ code vide
        } else {
            $("#spin1").removeClass("spinner-border spinner-border-sm");

            if (!captchaTest == true) {
                $("#inputCode").addClass("is-invalid");
                $("#codeVideHelp").removeClass("d-none");
                $("#codeVideHelp").addClass("d-block");
            }


        }



    }, 500)


});

$('#refresh').on('click', function () {

    captcha.refresh();

});



// // Determine the length of alphanumeric characters to be generated. Default: 4
//   const captcha = new Captcha($('#canvas'),{
//     length: 6
// });

// // Determine whether to refresh the captcha after testing. Default: true.
// const captcha = new Captcha($('#canvas'),{
//     autoRefresh: false
// });

// // Determine if is casesensitive. Default: false.
// const captcha = new Captcha($('#canvas'),{
//     caseSensitive: true
// });

// // More configurations.
// const captcha = new Captcha($('#canvas'),{
//     width: 100,
//     height: 40,
//     font: 'bold 23px Arial',
//     resourceType: 'aA0', // a-lowercase letters, A-uppercase letter, 0-numbers
//     resourceExtra: [],
//     clickRefresh: true,
// });


//API:
//refresh
// captcha.refresh();

// // get the code
// captcha.getCode();

// // test if the code is correct
// captcha.valid("");
