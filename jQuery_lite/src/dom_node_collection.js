class DOMNodeCollection {
  constructor(arr){
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
      debugger
      this.arr.forEach(function(ele) {
        // ele.appendChild(arg);
        ele.innerHTML += arg
        // ele.each((child) => Node.appendChild(arg))
        debugger
        // arg.outerHTML = ele.innerHTML;
      }) 
    } else {
      this.arr.forEach(function(ele1) {
        arg.arr.forEach(function(ele2){
          ele2.outerHTML = ele1.innerHTML;
        })
      }) 
    }
  }


}

module.exports = DOMNodeCollection;