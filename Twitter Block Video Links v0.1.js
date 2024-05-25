// ==UserScript==
// @name         Twitter Block Video Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prevent opening a new tab or exiting Twitter when a video link is clicked
// @author       Microsoft CoPilot
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to handle click events
    function handleClick(event) {
        // Check if the clicked element is a video
        if (event.target.tagName.toLowerCase() === 'video') {
            // Prevent the default action (opening in a new tab)
            event.preventDefault();
        }
    }

    // Add the event listener to the document
    document.addEventListener('click', handleClick, true);
})();