'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

    var addThatWrapper = document.querySelector('.addthat--js');

    // AddThat present
    if (addThatWrapper) {

        /**
         * Open share window
         * @param {object} windowHref window href
         * @param {number} width window width
         * @param {number} height window height
         * @param {boolean} debugMode runs in debug mode
         */
        var openShareWindow = function openShareWindow(windowHref, width, height) {
            window.open(windowHref, 'Share', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + width + ',height=' + height);
            if (debugMode) {
                console.log('Open share window');
                console.log('windowHref', windowHref);
                console.log('width', width);
                console.log('height', height);
            }
        };

        /**
         * Send google analytics event
         * @param {string} action action to be send via ga
         * @param {string} pageURL current page url
         * @param {boolean} debugMode runs in debug mode
         */
        var sendGaEvent = function sendGaEvent(action, pageURL) {
            gtag('event', action, {
                'event_category': 'Share',
                'event_label': pageURL,
                'non_interaction': false,
                'event_callback': function event_callback() {
                    if (debugMode) {
                        console.log('Google analytics event send');
                        console.log('action', action);
                        console.log('event_category', 'Share');
                        console.log('event_label', pageURL);
                        console.log('non_interaction', false);
                    }
                }
            });
        };

        // Variables
        var addThatButton = document.querySelectorAll('.addthat__link--js');
        var widthFactor = parseFloat(addThatWrapper.dataset['widthfactor'], 10);
        var heightFactor = parseFloat(addThatWrapper.dataset['heightfactor'], 10);
        var minWidth = parseInt(addThatWrapper.dataset['minwidth'], 10);
        var minHeight = parseInt(addThatWrapper.dataset['minheight'], 10);
        var gaEvent = addThatWrapper.hasAttribute('data-gaevent');
        var debugMode = addThatWrapper.hasAttribute('data-debug');

        // Bind
        [].concat(_toConsumableArray(addThatButton)).forEach(function (button) {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                var width = Math.round(window.innerWidth * widthFactor) < minWidth ? minWidth : Math.round(window.innerWidth * widthFactor);
                var height = Math.round(window.innerHeight * heightFactor) < minHeight ? minHeight : Math.round(window.innerHeight * heightFactor);

                // Open window
                openShareWindow(e.target.href, width, height, debugMode);

                // Send google analytics event if enabled
                if (gaEvent) {
                    sendGaEvent(e.target.dataset['action'], window.location.href, debugMode);
                }
            }, false);
        });
    }
})();