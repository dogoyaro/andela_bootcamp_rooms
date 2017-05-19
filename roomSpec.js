describe("Room Class: Create a room", function() {

    it("The room should be a type of `object`, and an instance of the `Room` class", function() {
      var room = new Room('block',4,"meeting");
      expect(typeof honda).toEqual(typeof {});
      expect(room instanceof Room).toBeTruthy();
    });
    
    it("The size, type and name are property of the room",function(){
      var room = new Room("block",4,"meeting");
      expect(room.size).toEqual(4);
      expect(room.name).toEqual("block");
      expect(room.type).toEqual("meeting");
      
    });
    
    it("Should return room that are availaible", function(){
      let room1 = ["hornHouse",4,"meeting"] ;
      let room2 = ["trumpetHouse",6,"lobby"] ;
      var totalRooms = [room1,room2];
      expect(findRoomByType(room1,"meeting").toEqual(["hornHouse",4,"meeting"] ));
    });
    
}); 