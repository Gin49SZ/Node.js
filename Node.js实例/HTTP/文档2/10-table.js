let tdList = document.querySelectorAll("td");
for(let i=0;i<tdList.length;i++){
    tdList[i].onclick = function(){
        this.style.border = "1px solid yellow";
        this.style.backgroundColor = "#ffff0099";
        for(let i=0;i<tdList.length;i++){
            if(tdList[i] != this){
                tdList[i].style = "";
            }
        }
    };
}