(function () {
    "use strict";
    /*
   hook up event handlers 
 */
    function register_event_handlers() {


        /* button  Show Splashscreen */
        $(document).on("click", ".uib_w_2", function (evt) {
            /* your code goes here */
            "use strict";
            var fName = "showSplashScreen():";
            console.log(fName, "function entry");

            if (navigator.splashscreen) {
                navigator.splashscreen.show();
                setTimeout(function () {
                    navigator.splashscreen.hide();
                }, 5000);
            }

            console.log(fName, "function exit");
        });

        /* button  View 9-patch Tutorial */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
         var ref = window.open('https://software.intel.com/en-us/xdk/articles/android-splash-screens-using-nine-patch-png', '_blank', 'location=yes');
    });
    
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();