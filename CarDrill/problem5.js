let cnt=0;
module.exports = {
problem5: function (carYears){
    for(let i=0; i < carYears.length; i++)
{
    if(carYears[i] < 2000)
        cnt = cnt + 1;
}
return cnt;
}
};