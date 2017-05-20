
module.exports ={	
	function room (name, size, type)
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
		
	function getRooms()
	{
		let roomsList = [];
		
		let meeting1 = new room("Meeting1", 10, "meetings");
		roomsList.push(meeting1);

		let meeting2 = new room("Meeting2", 10, "meetings");
		meeting2.occupy();
		roomsList.push(meeting2);

		let game1 = new room("Game1", 10, "games");
		roomsList.push(game1);

		let game2 = new room("Game2", 3, "games");
		game2.occupy();
		roomsList.push(game2);

		let quite1 = new room("Quiet-Time1", 4, "quiet-time");
		roomsList.push(quite1);

		let quite2 = new room("Quiet-Time2", 2, "quiet-time");
		quite2.occupy();
		roomsList.push(quite2);

		let working1 = new room("Working1", 6, "Working");
		roomsList.push(working1);

		let working2 = new room("Working2", 12, "Working");
		working2.occupy();
		roomsList.push(working2);

		let learning1 = new room("Learning1", 6, "learning");
		roomsList.push(learning1);

		let learning2 = new room("Learning2", 8, "learning");
		learning2.occupy();
		roomsList.push(learning2);

		return roomsList;
	},
	
	/** 
	*  findRoomByStatus() finds rooms for Andelans based on the Status of the room 
	*/

	findRoomByStatus: (anArrayContainingRooms) => {

		let roomsReturned = [];

		let noOfRooms = anArrayContainingRooms.length;

		for(let i = 0; i < noOfRooms; i++){
			if(anArrayContainingRooms[i].getStatus()){
				roomsReturned.push(anArrayContainingRooms[i]);
			}
		}

		return roomsReturned;
	},


	/**
	* findRoomByType() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), type (type of room)
	*/

	function findRoomByType(typeOfRoom){
		alert('Whatever');
		let anArrayContainingRooms = getRoom();

		let roomsReturned = [];

		let noOfRooms = anArrayContainingRooms.length;

		for(let i = 0; i < noOfRooms; i++){
			if(anArrayContainingRooms[i].getType() === typeOfRoom){
				roomsReturned.push(anArrayContainingRooms[i]);
			}
		}

		document.getElementById("result").innerHTML = roomsReturned;
		return roomsReturned;
	}
}

	/**
	* findRoomByName() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), nameOfRoom (name of room)
	*/

	// findRoomByName: (anArrayContainingRooms, nameOfRoom) => {

	// 	let roomsRetuned = [];

	// 	let noOfRooms = anArrayContainingRooms.length;

	// 	for(let i = 0; i < noOfRooms; i++){
	// 		if(anArrayContainingRooms[i].getName() == nameOfRoom){
	// 			roomsReturned.push(anArrayContainingRooms[i]);
	// 		}
	// 	}

	// 	return roomsReturned;
	// },



	/**
	* findRoomBySize() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), sizeOfRoom(name of room)
	*/


		
