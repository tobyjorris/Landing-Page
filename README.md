# Landing Page Project

## Table of Contents

* [Features](#features)

## Features

* On page load, dynamically decides whether to add 1-4 sections instead of always adding 4

* the getTargetCoordinates function works on both 
    1) `<a>` tags to be used in scroll navigation when you click the anchor tag for each section
    2) detecting the position of all `<section>` tags when scrolling - in order to add your-active-classes to any `<section>` that is more than 5% away from the top of the viewport and less than 85% away from the bottom of the viewport.

* does used window.scrollTo() instead of the arguably easier window.scrollIntoView :wink:

