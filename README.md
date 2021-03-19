# AddThat

Simple share widget for adding share links.

## Features
* Works with and without JS - without JS it will act as a link, with JS will open share link in window
* Sends event to google analytics on share button click - requires using gtag.js

## Demo
Demo can be found here: https://marcinrek.github.io/addthat/

## Configuration
* embed HTML markup from addthat.html to your page and replace {PAGEURL} with a proper URL
* add proper css and JS
* additional configuration is possible using data-* parameters

| data-*              | Value         | Description                                                          |
| ------------------- |:-------------:| -------------------------------------------------------------------- |
| ```data-gaevent```          | ```no value```  | Enables sending event to google analytics |
| ```data-debug```          | ```no value```  | Shows additional details in console.log |
| ```data-minwidth```          | ```integer```  | Share window minimal width |
| ```data-widthfactor```          | ```float```  | Current window width will be multiplied by this factor and used as Share window width  |
| ```data-minheight```          | ```integer```  | Share window minimal height |
| ```data-heightfactor```          | ```float```  | Current window height will be multiplied by this factor and used as Share window height |

## Donate 
If you find this piece of code to be useful, please consider a donation :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=ZPSPDRNU99V4Y)