# novi-plugin-rd-twitterfeed
Novi Builder Plugin for visual [RD Twitterfeed](https://github.com/TemplatemonsterPlugins/rd-twitterfeed) customization

## How to Install
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-rd-twitterfeed.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder
 
## What you are able to do
* Change user name which posts are shown
 
## Developer Settings
* querySelector — containes a css selector which defines the Plugin container.

## How to add RD Twitterfeed on your page
If your website doesn't contain RD Twitterfeed follow the instructions below to install it.

### Include RD Twitterfeed files to Website
Copy the "assets/rd-twitterfeed.js", "assets/rd-twitterfeed.css", assets/bat to website's JS, CSS and PHP folders respectively and include this files to your website.

### Add RD Twitterfeed HTML Layout
Add basic RD Twitterfeed HTML Layout:

```html
<div class="twitter" data-twitter-username="novibuilder" data-twitter-date-hours=" hours ago" data-twitter-date-minutes=" minutes ago">
  <div class="twitter-feed" data-twitter-type="tweet">
    ...
  </div>
  <div class="twitter-feed" data-twitter-type="tweet">
    ...
  </div>
</div>
```

Markup in given block may be any, including elements of the grid, etc. It is only necessary presence element with the attribute data-twitter-type = "tweet".
You can find more detailed information about tweet html markup in the [official documentation](https://github.com/TemplatemonsterPlugins/rd-twitterfeed)

Example of RD Twitterfeed markup using [Bootstrap](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/):
```html
<div class="twitter" data-twitter-username="templatemonster" data-twitter-date-hours=" hours ago" data-twitter-date-minutes=" minutes ago">
    <div class="twitter-feed" data-twitter-type="tweet">
        <div class="media">
            <div class="media-left">
                <span class="fa fa-twitter twitter-icon"></span>
            </div>
            <div class="media-body">
                <div class="twitter-feed-content" data-tweet="text"></div>
                <div class="twitter-feed-name text-bold big" data-screen_name="text"></div>
                <div class="twitter-date">
                    <div class="time" data-date="text"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="twitter-feed" data-twitter-type="tweet">
        <div class="media">
            <div class="media-left">
                <span class="fa fa-twitter twitter-icon"></span>
            </div>
            <div class="media-body">
                <div class="twitter-feed-content" data-tweet="text"></div>
                <div class="twitter-feed-name text-bold big" data-screen_name="text"></div>
                <div class="twitter-date">
                    <div class="time" data-date="text"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Initialize RD Twitterfeed
```js
/**
 * Global variables
 */
"use strict";

var plugins = {
  twitterfeed: $(".twitter"),
};


/**
 * Initialize All Scripts
 */
$document.ready(function () {

  /**
   * RD Twitter Feed
   * @description Enables RD Twitter Feed plugin
   */
  if (plugins.twitterfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.twitterfeed.length; i++) {
      var twitterfeedItem = plugins.twitterfeed[i];
      $(twitterfeedItem).RDTwitter({});
    }
  }
});
```
