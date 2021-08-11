module.exports = {
    problem2: function (data){
        if (data.length==0){
            return []
        }
        let i = data.length - 1;
        return "Last Car is a"+" "+ data[i].car_make+ " "+data[i].car_model;
    }
    }