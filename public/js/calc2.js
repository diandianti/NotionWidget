(function(){ 

  var calcu = {
    data : [],
    lastContent : []
  };

  calcu.eventListen = function(){
  	var self = this;
    var btns = document.querySelector(".calculator").querySelectorAll("button");
    Array.prototype.forEach.call(btns,function(el){
      el.addEventListener("click",function(){
        this.eventTriggle(el.value);
      }.bind(this))
    }.bind(this))
  }

  calcu.eventTriggle = function(value){
  	switch (value){
  		case "AC" : 
  			this.ACHandel();
  			break;
  		case "CE" : 
  			this.CEHandel();
  			break;
  		case "Ans" : 
  			this.AnsHandel();
  			break;
  		case "=" : 
  			this.equalHandel();
  			break;
  		default :
  			this.normalHandel(value);
  	}
  }

  calcu.normalHandel = function(v){
  	this.data.push(v);
  	this.render();
  }

  calcu.ACHandel = function(){
  	this.lastContent = this.data;
  	this.data = [];
  	this.render();
  }

  calcu.CEHandel = function(){
  	this.data.pop();
  	this.render();
  }

  calcu.AnsHandel = function(){
  	this.data = this.data.concat(this.lastContent);
  	this.render();
  }

  calcu.equalHandel = function(){
  	this.lastContent = this.data;
  	this.eval();
  	this.render();
  	this.data = [];
  }

  calcu.eval = function(){
  	var result = this.data.join("");
  	this.data = [eval(result)];
  }

  calcu.render = function(){
  	var content = this.data.join("");
  	document.querySelector(".cal-input").innerHTML = content;
  }

 calcu.eventListen();
}());