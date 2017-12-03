<p align="center">
  <a href="https://dnymic.github.io/typeCast/">
  </a>

  <h3 align="center">typeCast Keyboard</h3>

  <p align="center">
    typeCast is a russian keyboard mapper to US keyboard layout, that can be extended to other user layouts and other target languages.
    <br>
    <a href="https://dnymic.github.io/typeCast/#home"><strong>-- Live Example here --</strong></a>
    <br>
    <br>
    
</p>

## Table of Contents
- [Quickstart](#quickstart)
- [Install](#Install)
- [Configure](#Configure)
- [Copyright and license](#copyright-and-license)

## Quickstart:

- [Download](https://github.com/dnymic/typeCast) directly from GitHub.
- Clone the repo: `git clone https://github.com/dnymic/typeCast.git`



## Install

Run the command below to set up locally:
**Setup client App**
```bash
git clone https://github.com/dnymic/typeCast.git .
cd typeCast
cd docs
node .\client
```
to run a local server for hosting the HTML.

Take note on the loading order of the Script files.


Then add below your **jQuery** and **jQuery UI** imports the following HTML:


##  Configure and run
The two major russian layouts can be selected as below.
These can be defined in the html calling these functions.

1) ru : "русская клавиатура" just means russian keyboard.
https://docs.microsoft.com/en-us/globalization/keyboards/kbdru.html

2) ruty: Russian typewriter layout
https://docs.microsoft.com/en-us/globalization/keyboards/kbdru1.html 

In order to run the keyboard you have to call the `typeCast('<Language>')` function which is part of the typeCast object after the page is loaded.

## To Change the default layout
You can specify your target layout by providing a keyboard language layout as a parameter to the typeCast. That way your keyboard layout could be changed onlyby the application calling it.

Here is the sample code defined in app_init.js:
Replace "ru" with "ruty" as below to use the other layout.
Available layout names are ru, ruty, rug, rugty.

```javascript
typeCast("ruty");
```

## Custom Layouts

If you can't find your needed language layout from the existing ones (which is very likely to be so), you can create your own one. 
1) Quick retrival way by editing the typeCast.js file and adding the most used layout like below:
Notice the way the unicode characters are escaped this can be of much help as encoding during file save doesnt have any effect. 

  ```javascript
 var targetLayout = {
  "ruty": {
        "name": "ms-Russian (Typewriter)",
        "lang": ["ru"],
        "normal": [
          "| \u2116 - / \" : , . _ ? % ! ; \u0008",
          "\u0009 \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a )",
          "\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d \u000D",
          "{shift} ) \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e / {shift}",
          "{accept} {space} {cancel}"
        ],
        "shift": [
          "+ 1 2 3 4 5 6 7 8 9 0 = \\ \u0008",
          "\u0009 \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a (",
          "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d \u000D",
          "{shift} ( \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e / {shift}",
          "{accept} {space} {cancel}"
        ],
        'caps' : [
          "| \u2116 - / \" : , . _ ? % ! ; \u0008",
          "\u0009 \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a (",
          "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d \u000D",
          "{shift} ( \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e / {shift}",
          "{accept} {space} {cancel}"
        ]
      }
```



**Layout Objects**

After we are ready with the script file, we can proceed with filling the `layouts` array with our objects. Each layout object has a name - `ru`, which must be unique and identifies the layout (I suggest you keeping it short, eg. en for English).

`layout` **Property**

As you probably already noticed, the `layout` is an array of strings where each string represents a line, a new row of the keyboard. Each character is separated by space. The normal, shift and caps key mappings are defined here. Make sure that the input and target layouts match.


**Normal, Shift and Caps Lock**

If the character you entered supports lower/upper case, it will get automatically changed whenever you press Shift or Caps Lock. This is implemented by specifing the array in the layout. In the cases where you want to change the button sign completely whenever you press Shift you have to implicitly describe it in the character string .

**Non-ASCII Characters**

In order to render characters from different languages part of UTF-8 encoding, you should escape them accordingly. You can check English-Russian layout above for example.


2) Alternatively if there is a big list of layouts the performance can be improved by loading only the required layout as a ajax request refer to /server/server.js for an example implementation for Node server.

To run the server:
```bash
cd server
node ./server
```

**Contribution**

Please feel free to fork this repo.


## Copyright and license
Code released under the MIT license.