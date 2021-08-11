let carMake = []
module.exports = {
problem6: function(data) {
    for(let i=0; i< data.length; i++)
    {
        if(data[i].car_make == "BMW" || data[i].car_make == "Audi")
        {
            carMake.push(data[i]);
        }
    }
    return JSON.stringify(carMake);
}
};