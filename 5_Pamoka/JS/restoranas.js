let restaurant = {
    name: 'A nice restaurant',
    seats: 30,
    reserved: 0,

    reserveSeat: function (number) {
        if(this.reserved + number > this.seats){
            console.log("There is not enought seats!");
        } else {
            this.reserved += number;
        }
    },

    cancelSeat: function (number) {
        if(this.reserved < number){
            console.log("There was no such reservation!");
        } else {
            this.reserved -= number;
        }
    }
}