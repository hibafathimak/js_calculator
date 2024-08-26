const displaydata=(content)=>{
    dis.value+=content
}
const clearCalScreen=()=>{
    dis.value=""
}
const delCal=()=>{
    dis.value=dis.value.slice(0,-1)
}
const evaluateExpr=()=>{
    try{
        dis.value=eval(dis.value)
    }catch{
        dis.value="Invalid Expression"
    }
}
