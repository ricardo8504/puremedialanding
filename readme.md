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
  * Identifiers : #
  * Class / Pseudo Class --> .Class, :hover,:focus
  * Elements / Pseudo Elements --> eg. h3,div,p / ::before,::after,::target
      eg.
      div > div > ul > li
      0004

      .h1 ::after{
        content : ".",
        display : inline
      }
- Box Model: 
  https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model
  https://www.w3.org/TR/CSS2/box.html

- Position: by default every element has an static position
  * static:
  * relative: usually use with absolute 
  * absolute : top and left position(eg . popup , alert)
  * fix : in a position of the viewport(it is the area that the user always can see)
  
- Fonts
- Naming methodologies(don't create styles just because, try to find patterns)
  * smacss(baset/reset,Layout,Components,themes)
  * oxygencss
  Notes:
    - Think in objects and objects heritance
    - we should think on this way classes --> subclasses -->behavior or state
      eg.
        .btn  --> Class
        .btn_default -->Subclass
        .is_disabled -->behavior
        .is_current -->behavior
    - Think always in classes , ID only for javascript(Oxygen CSS)
    - 
- Box Sizing : it is to expensive
  *{} -->apply to any rule
  *remove only if it is neccesary
- Display Flex
- Media Queries
  @media screen and (min_width:400px) 


Notes
  - If you are extremely specific you will affect the application performance
    Wrong
    div > div > div > ul > li --> only the first LI
    div > div > div > ul  li  --> every single LI 


  - Pseudo Elements --> to makeup the code to make it prettier 
  - Box Sizing  

  Suggestions
  - Bigger files instead of multiple files for downloading(there should be a balance)--> it is reliant to what i want to get
  - Avoid important when we are using rules



  Plugins Visual Studio Code
  - Emmet --> scafolding html,eg.
  !
  p>ul>li*4
  - Sass --> syntax

  Books
  - HandBook CSS
