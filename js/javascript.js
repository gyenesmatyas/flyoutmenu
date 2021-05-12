

// lange versie
$(document).ready(function(){
    //ALS ER OP DE HAMBU
    $("#burger").click(function(){
        $('#nav a:not(:first-child)').toggle();
    });
    // WANNEER ER GERESIZED WORDT
    $(window).resize(function(){
        // DIT ZAL HET NORMALE MENU OPNIEUW OPENEN ALS ER GERESIZED WORDT NAAR GROOT
        if(window.matchMedia("(min-width: 501px)").matches){
            $('#nav a:not(:first-child)').show();
        }
        // DIT ZAL HET MENU SLUITEN ALS HET AAN WAS GEZET, GERESIZED WERD NAAR GROOT EN VERVOLGENS WEER GERESIZED WERD NAAR KLEIN
        if(window.matchMedia("(max-width: 500px)").matches){
            $('#nav a:not(:first-child)').hide();
        }
    })
});



