function load_discount() {
    document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="discount.html" width="100%" height="100%"></object>';
}

function load_app() {
    document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="app.html" width="100%" height="100%"></object>';
}

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
           
            /*====================================
              LOAD APPROPRIATE MENU BAR
           ======================================*/
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

          
     
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
