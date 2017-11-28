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
- [Documentation](#documentation)
- [Supported Browsers](#supported-browsers)
- [Copyright and license](#copyright-and-license)

## Quickstart:

- [Download](https://github.com/dnymic/typeCast) directly from GitHub.
- Clone the repo: `git clone https://github.com/dnymic/typeCast.git`


## Documentation
The documentation can be found at <https://dnymic.github.io/typeCast/#home>. 

Run these commands to set up locally:
1 Way using git
```bash
git clone https://github.com/dnymic/typeCast.git .
cd typeCast
cd docs
```
2nd way if using bower
Run the below from the project folder
```bash
bower install git://github.com/dnymic/typeCast.git
```


## Usage
The two major russian layouts can be selected as below.

1) ru : "русская клавиатура" just means russian keyboard.
https://docs.microsoft.com/en-us/globalization/keyboards/kbdru.html

2) ruty: Russian typewriter layout
https://docs.microsoft.com/en-us/globalization/keyboards/kbdru1.html 

These can be defined in the Web app calling these layouts.

Edit app_init.js:
Replace "ru" with "ruty" as below to use the other layout.
```bash
typeCast("ruty");
```


## Supported Browsers:
typeCast is compatible with the following browsers:

- Chrome 35+


## Copyright and license
Code released under the MIT license.
