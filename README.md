On Twitter some accounts have videos with links that are activated if you click on the image rather than on the controls.

That missaction may lead you involuntarily onto dubious websites, some just Ads, others that might be harmful.

—————————— —————————— —————————— —————————— ——————————

I went to Bing and using CoPilot by Microsoft I made the querie:
— Make me a Tampermonkey script that will block opening a new tab or exiting Twitter if a video with link is clicked.


And it spewed:

Sure, here’s a basic Tampermonkey script that should prevent opening a new tab when clicking on a video link on Twitter. This script works by intercepting click events on video elements and preventing their default action.
Please note that this script might not work perfectly for all video links, especially if Twitter changes its website structure or if the videos are embedded in a different way. Always test scripts in a safe environment before using them regularly.

// ==UserScript==
// @name         Block Twitter Video Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prevent opening a new tab or exiting Twitter when a video link is clicked
// @author       You
// @match        https://twitter.com/*
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

AI-generated code. Please review and use carefully. Learn more about the FAQ.
Remember to install this script through your Tampermonkey dashboard, and ensure that Tampermonkey is enabled when you want this functionality. Let me know if you need help with anything else! 😊

—————————— —————————— —————————— —————————— ——————————

Imagine that. It works just fine on 2024-05-25
