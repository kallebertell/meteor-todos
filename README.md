Prototype of prototyping app
======

Predictable directory layout so one can utilize generators.


Folder structure
=====
App structure is a recursive module structure.

```
module1
  \
   +- lib ................. Shared code between client and server
   |
   +- client .............. Client only sources and assets
   |    \
   |     +- module1.html .. Html template for module1 (if applicable)
   |     |
   |     +- module1.js .... Js for module1 template
   |     |
   |     +- module1.scss .. Styles for module1
   |     |
   |     +- components .. UI Components
   |           \
   |            +- component1 ................. Directory for component1
   |            |     \
   |            |      +- component1.js ....... component1 js
   |            |      |
   |            |      +- component1.html ..... component1 html
   |            |      |
   |            |      +- component1.scss ..... component1 styles
   |            |
   |            |       
   |            +- component2 
   |                  
   |
   |
   +- server .............. Server only sources
   |
   +- modules ............. Sub-modules of this module
        \
         +- [submodule1] .. Contains the same structure as the root of this structure

```

the "app" directory essentially the top level module.


Boilerplate generators
======

Generate module
```
gen module [name]
```

Generate ui component
```
gen component [module] [component]
```

Generate collection 
```
gen collection todos
```

Other ideas
======
Collection definitions could/should probably have a pre-defined place?
Screw being secure and explictly publishing crud since this is prototyping.

