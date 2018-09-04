function updateViewportDimensions() {
    var display = window
    var doc = document
    var width = doc.documentElement
    var heigth = doc.getElementsByTagName("body")[0];
    return {
        width: display.innerWidth || width.clientWidth || heigth.clientWidth,
        height: display.innerHeight || width.clientHeight || heigth.clientHeight
    }
}
function loadGravatars() {
    viewport = updateViewportDimensions(),
    viewport.width >= 768 && jQuery(".comment img[data-gravatar]").each(function() {
        jQuery(this).attr("src", jQuery(this).attr("data-gravatar"))
    })
}

jQuery(document).ready(function($) {
    $('[data-toggle="tooltip"]').tooltip(),
    loadGravatars(),
    $(".add-active").hover(function() {
        $(this).toggleClass("active")
    }),
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
        $(".tab-content").find(".show-person-detail").removeClass("show-person-detail"),
        $(".person-wrapper").removeClass("hide-person-wrapper")
    }),
    $("#mobile-menu-button, .menu-item").click(function() {
        $(".menu-wrapper").toggleClass("mobile-menu-open")
    }),
    $("#mobile-search-wrap").click(function() {
        $(".mobile-search-form").toggleClass("mobile-search-open")
    }),
    $("#mobile-menu-exit").click(function() {
        $(".menu-wrapper").toggleClass("mobile-menu-open")
    }),
    $("#mobile-search-exit").click(function() {
        $(".mobile-search-form").toggleClass("mobile-search-open")
    }),
    $(".menu-item-has-children > a").one("click", function(e) {
        isMobile() && e.preventDefault(),
        $(this).parent().find(".sub-menu").toggleClass("sub-menu-open")
    }),
    $(".menu-item-has-children").click(function() {
        $(this).find(".mobile-menu-chevron").toggleClass("glyphicon-triangle-top"),
        $(this).find(".mobile-menu-chevron").toggleClass("glyphicon-triangle-bottom")
    }),
    $(".mobile-menu-chevron").click(function() {
        $(this).parent().find(".sub-menu").toggleClass("sub-menu-open")
    });
   
});
