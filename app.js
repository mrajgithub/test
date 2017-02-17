var myApp = angular.module("firstApp",[]);
myApp.controller("cltrlFunction",cltrlFunction);
function cltrlFunction(){
	this.result = 0;
	this.buttonClicked = function(action){
		this.selectedOperation= action;		
	}
	this.resultFinal = function(){
		if(this.selectedOperation==="+"){
			this.result = Number(this.input1) + Number(this.input2);	
		}else if (this.selectedOperation==="-"){
			this.result = Number(this.input1) - Number(this.input2);	
		}else if (this.selectedOperation==="*"){
			this.result = Number(this.input1) * Number(this.input2);	
		}else if (this.selectedOperation==="/"){
			this.result = Number(this.input1) / Number(this.input2);	
		}
		
	}
}
