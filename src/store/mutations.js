export default {
    changeCity (state, city) {
        state.tCity = city
        try{
            localStorage.tCity = city
        }catch (e){}
    }
}