module.exports = {
    problem1: function (data)
    {
        for (var i= 0; i< data.length; i++)
        {
            if (data[i].id == 300003)
            {
                return "Car " + data[i].id + " is a " + data[i].car_year+" "+ data[i].car_make+ " "+data[i].car_model;
            } 
        }
        return []
    }
    }