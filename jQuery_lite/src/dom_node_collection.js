class DOMNodeCollection {
  constructor(arr){
    //array of HTML elements
    this.arr = arr;
  }

  html(string) {

    if (string) { 
      this.arr.forEach(function(ele) {
        ele.innerHTML = string;       
      })
    } else {
      return this.arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach(function(ele) {
      ele.innerHTML = "";       
    })
  }

  append(arg) {
    if(typeof(arg) === "string"){
      this.arr.forEach(function(ele) {
        ele.innerHTML += arg;
      }) 
    } else if(arg instanceof HTMLElement) {
      // debugger
      this.arr.forEach(function(ele) {
        let clone = arg.cloneNode(true);
        ele.appendChild(clone);
   
        // debugger
        // arg.outerHTML = ele.innerHTML;
      }) 
    } else {
      this.arr.forEach(function(ele1) {

        if (Array.isArray(arg.arr)) {
          arg.arr.forEach(function(ele2){
            let clone = ele2.cloneNode(true);
            ele1.appendChild(clone);        
        })
        } else {  
          // debugger
          let clone = arg.arr.cloneNode(true);
          ele1.appendChild(clone);
        }
      }) 
    }
  }

  attr(attributeName, value) {
   if (value) {
     this.arr.forEach(function(ele){
       ele.setAttribute(attributeName, value);
     })
   } else {
     return this.arr[0].getAttribute(attributeName);
   }
    
  }

  addClass(className) {
    if (typeof (className) === "string") {
      let classNames = className.split(" ");
      this.arr.forEach(function(ele){
        // ele.classList.add(classNames);
        classNames.forEach(function(name){
          ele.classList.add(name);
        })
      })
    } else if (Array.isArray(className)) {
      this.arr.forEach(function(ele) {
        // ele.classList.add(className);
        className.forEach(function(name){
          ele.classList.add(name);
        })
      })
    }
  }

  removeClass(className) {
    if (typeof (className) === "string") {
      let classNames = className.split(" ");
      this.arr.forEach(function(ele){
        // ele.classList.remove(classNames);
        classNames.forEach(function(name){
          ele.classList.remove(name);
        })
      })
    } else if (Array.isArray(className)) {
      this.arr.forEach(function(ele) {
        // ele.classList.remove(className);
        className.forEach(function(name){
          ele.classList.remove(name);
        })
      })    
    }
  }

  children(){
    let childNodes = [];
    this.arr.forEach(function(ele){
      const nodeList = ele.children;
      childNodes = childNodes.concat(Array.from(nodeList));
    })
    return new DOMNodeCollection(childNodes);
  }

  parent(){
    let parentNodes = [];
    this.arr.forEach(function(ele){
      parentNodes.push(ele.parentNode);
    })
    parentNodes = Array.from(new Set(parentNodes))
    return new DOMNodeCollection(parentNodes);
  }
  
  find(selector){
    let childNodes = [];
    this.arr.forEach(function(ele){
      const nodeList = ele.querySelectorAll(selector);
      childNodes = childNodes.concat(Array.from(nodeList));
    })
    return new DOMNodeCollection(childNodes);
  }

  remove(){
    this.arr.forEach(function(ele){
      ele.remove()
    })
  }

  on(typeOfEvent, callback){
    this.arr.forEach(function(ele){
      
      ele.addEventListener(typeOfEvent, callback);
      ele.listeners = ele.listeners || [];
      ele.listeners.push(callback);
    })
  }

  off(typeOfEvent){
    this.arr.forEach(function(ele){
      ele.listeners.forEach(function(listener){
        ele.removeEventListener(typeOfEvent, listener)
      })    
    })
  }

}

module.exports = DOMNodeCollection;