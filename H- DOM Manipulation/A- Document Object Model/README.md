   When a web page is loaded, the browser creates a Document Object Model of the page.

   DOM IN SIMPLE WORDS :
   SO THE DOM IS SOMETHING THAT BROWSER CREATES TO ALLOW US TO MODIFY THE HTML AND CSS ELEMENT

    each browser has its javascript engine
    chrome: V8 engine
    edge: CHAKRA CORE engine
    safari: NITROS engine
    firefox: SPIDERMONKEY engine
    - these are the engin which read the javascript file line by line and execute it 

   JavaScript can change all the HTML elements in the page
   JavaScript can change all the HTML attributes in the page
   JavaScript can change all the CSS styles in the page
   JavaScript can remove existing HTML elements and attributes
   JavaScript can add new HTML elements and attributes
   JavaScript can react to all existing HTML events in the page
   JavaScript can create new HTML events in the page

   


   IMP:

   a web browser has the window object that has a several properties like document
   document specified the content to display its only the one property among many
   the (DOM)Document object model reads the html css and deside the content to display 

   for ex:
   if we give the command inside the console.log

        console.log(window);

   it will give us the output:-  

        Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
        0: global {window: global, self: global, location: {…}, closed: false, frames: global, …}
        JSCompiler_renameProperty: ƒ (prop,obj)
        ShadyCSS: {prepareTemplate: ƒ, prepareTemplateStyles: ƒ, prepareTemplateDom: ƒ, styleSubtree: ƒ, styleElement: ƒ, …}
        alert: ƒ alert()
        .
        .
        document: document
        .
        .
        webkitURL: ƒ URL()
        __proto__: Window

    
   in here we can see that the window is actualy a object contain the propertys like the alert, document, etc.