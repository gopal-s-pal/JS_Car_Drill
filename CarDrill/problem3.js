module.exports = {
    problem3: function(data)
    {
        for( let i=0; i<data.length;i++)
            for( let j=0; j<data.length-i-1;j++)
                 {
                    if(data[j].car_model.toLowerCase()>data[j+1].car_model.toLowerCase()) 
                    {
                        let temp=data[j+1];
                        data[j+1]=data[j]; 
                        data[j]=temp;
                    }
                 }
        return data;
    }
    }