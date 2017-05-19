'use strict';

module.exports = {

	room: function(name, size, type)
	{
	   this.name = name;
	   this.type = type;
	   this.size = size;
	   this.isOccupied = false;
	   
    	 this.occupy =  function() 
    		{
    		     this.isOccupied = true ;
    		     return this;
    		};
    	
    	this.getStatus = function()
	      	{
	      	  return this.isOccupied;
	      	};
      	
      	this.getName = function()
	        {
	          return this.name;
	        };
        
      	this.getType = function()
	        {
	          return this.type;
	        };
      	this.getSize = function()
	        {
	          return this.size;
	        };
	},	
}
