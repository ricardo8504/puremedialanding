Dependencies

02/05/2018

npm i --> install pending versions
npm i --save-dev webpack webpack-dev-server

^ -- bring major versions
~ -- bring minor versions

Webpack
- Any import is a module
- Rules(these ones tell to webpack the way to load modules)
* style-loader(put css in-line),css-loader(convert from sass to css native),sass-loader(preproccesor-loader) -- node modules
* url-loader --> usually for images

Concepts

- sass vs css --> you can read css styles without stops and sass allow to create rules
- Slice images --> it is more performant because only dowload one file instead of multiple files
- Image base64
- Name Mehtologies CSS --> https://smacss.com/ ,  
- CSS Specificity
  * Sharks
  * Identifiers
  * Class / Pseudo Class --> 
  * Elements / Pseudo Elements --> eg. h3,div,p / ::before,::after,::target
  eg.
  div > div > ul > li
  0004
  
- Pseudo Elements --> to makeup the code to make it prettier 
Suggestions

- Bigger files instead of multiple files for downloading(there should be a balance)--> it is reliant to what i want to get



Plugins Visual Studio Code

- Emmet --> scafolding html,eg.
 !
 p>ul>li*4
- Sass --> syntax
