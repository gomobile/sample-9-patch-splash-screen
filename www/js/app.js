/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict";

    var ua = navigator.userAgent;
    var str;

    if (window.Cordova && dev.isDeviceReady.c_cordova_ready__) {
        str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!";
    } else if (window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______) {
        str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!";
    } else {
        str = "Bad device ready, or none available because we're running in a browser.";
    }

    console.log(str);
}


// ...additional event handlers here...

function emulator() {
    alert("Please build this app to see custom splashscreen");
}

function showSplashscreen() {
    "use strict";
    var fName = "showSplashscreen():";
    console.log(fName, "entry");
    try {
        if (window.tinyHippos) {
            emulator();
            console.log(fName, "emulator alert");
        }

        if (navigator.splashscreen) {
            navigator.splashscreen.show();
            setTimeout(function () {
                navigator.splashscreen.hide();
            }, 5000);
        }
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}

function showTutorial() {
    "use strict";
    var fName = "showTutorial():";
    console.log(fName, "entry");
    try {
        var ref = window.open('https://github.com/gomobile/sample-9-patch-splash-screen/blob/master/docs/README.md', '_blank', 'location=yes');
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}