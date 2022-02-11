
let screenHeight = $(window).height();

$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if (currentPosition > screenHeight-100){
        $('.site-nav').addClass("site-nav-scroll")
    }else{
        $('.site-nav').removeClass("site-nav-scroll");
        setActive("home");
    }
});

$(".navbar-toggler").click(function () {
    let result = $('.navbar-collapse').hasClass("show");
    if(result){

        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");

    }else{

        $(".menu-icon").removeClass("fa-bars").addClass("fa-times");

    }
});


    function setActive(current) {
        $('.nav-link').removeClass("current-section");
        $(`.nav-link[href='#${current}']`).addClass("current-section");
    }
    function navScroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
            if (direction == "down"){
                let currentSectionId = $(this.element).attr("id");
                console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{
            offset:'50px'
        });
        currentSection.waypoint(function (direction) {
            if (direction == "up"){
                let currentSectionId = $(this.element).attr("id");
                console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{
            offset: '-800px',
        });
    }
    navScroll();



wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();


    $(".sponsor-slide").slick({
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
$(window).on("load",function () {
    $(".loader-container").fadeOut(500,function () {
        $(this).remove();
    });
});














