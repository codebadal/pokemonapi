// search dealy function
function UseDebounce(cb, dealy=2000) {
    let time;
    return(...argu) => {
        clearTimeout(time)
        time = setTimeout(()=>{
            cb(...argu)
        }, dealy)

    }
}
export default UseDebounce

