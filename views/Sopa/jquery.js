$(document).ready(function () {

    //REDUCE
    $(".reduce").hover(function () {
        $(".reduce").addClass("resaltar");

    });

    $(".reduce").mouseleave(function () {
        $(".reduce").removeClass("resaltar");

    });
    $(".reduce").click(function () {
        document.getElementById("ocultar1").style.display = "block";
        $(".reduce").hover(function () {
            $(".reduce").addClass("resaltar");

        });
        $(".caja").css("color", "green").slideUp(3000).slideDown(3000);

    });
    //RECICLA
    $(".recicla").hover(function () {
        $(".recicla").addClass("resaltar");

    });
    $(".recicla").mouseleave(function () {
        $(".recicla").removeClass("resaltar");

    });
    $(".recicla").click(function () {
        document.getElementById("ocultar2").style.display = "block";
        $(".recicla").hover(function () {
            $(".recicla").addClass("resaltar");
        });
        $(".caja").css("color", "yellow").slideToggle(3000).slideDown(3000);
    });
    //REUTILIZA
    $(".reutiliza").hover(function () {
        $(".reutiliza").addClass("resaltar");
        
    });
    $(".reutiliza").mouseleave(function () {
        $(".reutiliza").removeClass("resaltar");
        
    });
    $(".reutiliza").click(function () {
        document.getElementById("ocultar3").style.display = "block";
        $(".reutiliza").hover(function () {
            $(".reutiliza").addClass("resaltar");
        });
        $(".caja").css("color", "pink").slideUp(3000).slideDown(3000);
    });
    
    //SEPARAR
    $(".separar").hover(function () {
        $(".separar").addClass("resaltar");
        
    });
    $(".separar").mouseleave(function () {
        $(".separar").removeClass("resaltar");
        
    });
    $(".separar").click(function () {
        document.getElementById("ocultar4").style.display = "block";
        $(".separar").hover(function () {
            $(".separar").addClass("resaltar");
        });
        $(".caja").css("color", "purple").slideToggle(3000).slideDown(3000);
    });
    //APAGAR
    $(".apagar").hover(function () {
        $(".apagar").addClass("resaltar");
        
    });
    $(".apagar").mouseleave(function () {
        $(".apagar").removeClass("resaltar");
        
    });
    $(".apagar").click(function () {
        document.getElementById("ocultar9").style.display = "block";
        $(".apagar").hover(function () {
            $(".apagar").addClass("resaltar");
        });
        $(".caja").css("color", "blue").slideToggle(3000).slideDown(3000);
    });
    //EVITAR
    $(".evitar").hover(function () {
        $(".evitar").addClass("resaltar");
        
    });
    $(".evitar").mouseleave(function () {
        $(".evitar").removeClass("resaltar");
        
    });
    $(".evitar").click(function () {
        document.getElementById("ocultar6").style.display = "block";
        $(".evitar").hover(function () {
            $(".evitar").addClass("resaltar");
        });
        $(".caja").css("color", "orange").slideToggle(3000).slideDown(3000);
    });
    //CERRAR
    $(".cerrar").hover(function () {
        $(".cerrar").addClass("resaltar");
        
    });
    $(".cerrar").mouseleave(function () {
        $(".cerrar").removeClass("resaltar");
        
    });
    $(".cerrar").click(function () {
        document.getElementById("ocultar5").style.display = "block";
        $(".cerrar").hover(function () {
            $(".cerrar").addClass("resaltar");
        });
        $(".caja").css("color", "red").slideToggle(3000).slideDown(3000);
    });
    //PLANTAR
    $(".plantar").hover(function () {
        $(".plantar").addClass("resaltar");
        
    });
    $(".plantar").mouseleave(function () {
        $(".plantar").removeClass("resaltar");
        
    });
    $(".plantar").click(function () {
        document.getElementById("ocultar7").style.display = "block";
        $(".plantar").hover(function () {
            $(".plantar").addClass("resaltar");
        });
        $(".caja").css("color", "brown").slideToggle(3000).slideDown(3000);
    });
    //LLEVAR
    $(".llevar").hover(function () {
        $(".llevar").addClass("resaltar");
        
    });
    $(".llevar").mouseleave(function () {
        $(".llevar").removeClass("resaltar");
        
    });
    $(".llevar").click(function () {
        document.getElementById("ocultar8").style.display = "block";
        $(".llevar").hover(function () {
            $(".llevar").addClass("resaltar");
        });
        $(".caja").css("color", "grey").slideToggle(3000).slideDown(3000);
    });
    //MUEVETE    
    $(".muevete").hover(function () {
        $(".muevete").addClass("resaltar");
        
    });
    $(".muevete").mouseleave(function () {
        $(".muevete").removeClass("resaltar");
        
    });
    $(".muevete").click(function () {
        document.getElementById("ocultar10").style.display = "block";
        $(".muevete").hover(function () {
            $(".muevete").addClass("resaltar");
        });
        $(".caja").css("color", "violet").slideToggle(3000).slideDown(3000);
    });
});
