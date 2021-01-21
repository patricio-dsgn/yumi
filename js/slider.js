$(document).ready(function() {
    var slides, timer;
    slides = $('#slider .slidesContainer > .slide');

    function sliderScroll(direction) {
        //Calcula la posicion actual del contenedor
        position = $('#slider').scrollLeft();
        //Calcula la anchura total menos el ultimo slide.
        totalWidth = (slides.length * slides[0].offsetWidth) - slides[0].offsetWidth
        //variable direction para hacer el scroll hacia izquierda o derecha
        switch (direction) {
        case 'right':
            if (position + slides[0].offsetWidth > totalWidth) { 
                $('#slider:not(:animated)').animate({
                    scrollLeft: 0 }, 1000);
            } else { 
                $('#slider:not(:animated)').animate({
                    scrollLeft: position + slides[0].offsetWidth }, 1000);
            }
            break;

        case 'left':
            if (position - slides[0].offsetWidth < 0) { 
                $('#slider:not(:animated)').animate({
                    scrollLeft: totalWidth  }, 1000);
            } else { 
                $('#slider:not(:animated)').animate({
                    scrollLeft: position - slides[0].offsetWidth }, 1000);
            }
            break;
        }
    }

    function initTimer() {
        timer = setInterval(function() {
            sliderScroll('right'); }, 5000);
    }


    $('#slider .slidesContainer').css('width', slides[0].offsetWidth * slides.length);

    //Inicia el temporizador
    initTimer();

});