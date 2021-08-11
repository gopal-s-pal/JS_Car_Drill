let carYears=[];
module.exports = {
problem4: function(data)
{
    for(let i=0; i< data.length; i++)
    {
        carYears.push(data[i].car_year);
    }
    return carYears;
}
}