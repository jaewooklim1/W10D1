// window.$l(oneArg)
const DOMNodeCollection = require("./dom_node_collection")

const $l = function(arg){
  debugger
  if(typeof(arg) === "string"){
    debugger
    let nodeList = document.querySelectorAll(arg);
    let nodeArr = Array.from(nodeList);
    return nodeArr;
  } else if (arg instanceof HTMLElement){
    return new DOMNodeCollection(arg);
  }
}

window.$l = $l;