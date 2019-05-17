let defaultCity = '深圳'
try{
    if(localStorage.tCity) {
        defaultCity = localStorage.tCity
    }
}catch (e){}

export default{
    tCity: localStorage.tCity || '深圳'
}