function changeh1text(){
    document.getElementById('heading').innerText='Congrulations! You have purchased the book.Now you can access the discount of 40% this month'
   document.getElementById('btn').style.display='none'
    document.getElementById('para').style.display='none'
}
function nameadd(){
    let res=document.getElementById('input').value
    document.getElementById('heading').innerText=`Congrulations! ${res} You have purchased the book.Now you can access the discount of 40% this month`
    document.getElementById('para').style.display='none'
    document.getElementById('input').value=""
}
