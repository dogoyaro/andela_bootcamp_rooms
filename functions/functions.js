'use strict';

module.exports = {

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
	}


	/**
	* findRoomByType() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), type (type of room)
	*/

	findRoomByType: (anArrayContainingRooms, typeOfRoom) => {

		let roomsRetuned = [];

		let noOfRooms = anArrayContainingRooms.length;

		for(let i = 0; i < noOfRooms; i++){
			if(anArrayContainingRooms[i].getType() === typeOfRoom){
				roomsReturned.push(anArrayContainingRooms[i]);
			}
		}


		return roomsReturned;
	}


	/**
	* findRoomByName() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), nameOfRoom (name of room)
	*/

	findRoomByName: (anArrayContainingRooms, nameOfRoom) => {

		let roomsRetuned = [];

		let noOfRooms = anArrayContainingRooms.length;

		for(let i = 0; i < noOfRooms; i++){
			if(anArrayContainingRooms[i].getName() == nameOfRoom){
				roomsReturned.push(anArrayContainingRooms[i]);
			}
		}

		return roomsReturned;
	}



	/**
	* findRoomBySize() find rooms for Andelans based on the type of rooms.
	* @params: anArrayContainingRooms (array of rooms), sizeOfRoom(name of room)
	*/

	findRoomByName: (anArrayContainingRooms, sizeOfRoom) => {

		let roomsRetuned = [];

		let noOfRooms = anArrayContainingRooms.length;

		for(let i = 0; i < noOfRooms; i++){
			if(anArrayContainingRooms[i].getSize() == sizeOfRoom){
				roomsReturned.push(anArrayContainingRooms[i]);
			}
		}

		return roomsReturned;
	}

}


