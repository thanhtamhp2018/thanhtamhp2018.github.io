
// EX 1 -----------------------


function luckyNum(num){
    var strNum=num.toString();
    var length=strNum.length;
    var sumFirst=0;
    var sumLast=0;
    console.log(strNum);
    if(num<11 || length%2 !=0 ||typeof num != 'number'){
        return "Nhap so nguyen lon hon 10 va tong cac chu so la chan"
    }else{
        strNum=strNum.split('');
        var lengthArr=strNum.length;
        console.log(lengthArr/2);
        for(var i=0;i<lengthArr/2;i++){
            sumFirst+=parseInt(strNum[i]);
            sumLast+=parseInt(strNum[i+lengthArr/2]);
        }
        if (sumFirst === sumLast){
            return true;
        }else return false;
        
    }
}
// console.log(luckyNum(1230));

// EX 2 -----------------------


function spellText(str){
    if(typeof str!='string' || str===""){
        return "nhap chuoi khong rong";
    }else{
        
        str=str.toLowerCase();
        str=str.split('');
        str[0]=str[0].toUpperCase();
        str=str.join("");
        str=str.replace(/,/g , "")+'.';
        return str;
    }
}
// console.log(spellText("dsa,dsd,ds sd,dsdsd,SAFSFDd,fdsfdsf ,fdsfSas asdas, dasdsa f"));


// EX 3 -----------------------

function findTextLongest(arr){
var res=[];
var max=0;
if(arr=='' || typeof arr != "object"){
return 'nhap mang ko rong';
}
for (var i=0;i<arr.length;i++){
    if(typeof arr[i] != 'string'){
        return "co phan tu cua mang ko phai la string";
    }
}
for(var i=0;i<arr.length;i++){
if(arr[i].length>max){
    max=arr[i].length;
}
for (var i=0;i<arr.length;i++){    
    if(arr[i].length==max){
        res.push(arr[i]);
    }
}
}
return res;
}
// console.log(findTextLongest(['987564321','123456789','3']));


// EX 4 -----------------------


function getCash(weight1,value1,weight2,value2,weight3){
    if(typeof weight1 !='number' || typeof weight2 !='number' || typeof weight3 !='number' || typeof value1 !='number' || typeof value2 !='number'){
        return 'cac gia tri nhap vao la so';
    }
    if(weight1<1 || weight2 <1 || weight3 <1 || value1 < 1 || value2< 1){
        return 'cac gia tri phai lon hon 0';
    }
    if(weight3<weight2 && weight3<weight1){
        return 0;
    }
    if(weight1+weight2 <= weight3){
        return value1+value2;
    }else if(value2>value1){
        return value2;
    }else {
        return value1;
    }
}

// console.log(getCash(5,10,4,6,8));






// EX5 _________________________________



var tds =document.querySelectorAll('td');
var count = 0;
// console.log(tds);
var tick=true;
var arrPosition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function getArrContainCell(cell){    
return arrPosition.filter(function(item){   
    // console.log(item); 
        for(let j=0; j< item.length;j++){
            if (cell===item[j]){
                return true;
            }                    
    }
    return false;    
})
}
function checkWin2(){
    var m= getArrContainCell(0);
    console.log(m);
    
}
checkWin2();
// console.log(getArrContainCell(1));

function getAttr(obj,str){
   return obj.getAttribute(str);
}
function checkWin(){

    // check Xxxxxx
    // 1 2 3
    if(getAttr(tds[0],"data-tick")=="1" && getAttr(tds[1],"data-tick")=="1" && getAttr(tds[2],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    //4 5 6
    if(getAttr(tds[3],"data-tick")=="1" && getAttr(tds[4],"data-tick")=="1" && getAttr(tds[5],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    //7 8 9
    if(getAttr(tds[6],"data-tick")=="1" && getAttr(tds[8],"data-tick")=="1" && getAttr(tds[7],"data-tick")=="1" ){
        alert('X win');
        return true;

    } 
    //1 4 7
    if(getAttr(tds[0],"data-tick")=="1" && getAttr(tds[3],"data-tick")=="1" && getAttr(tds[6],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    // 2 5 8
    if(getAttr(tds[1],"data-tick")=="1" && getAttr(tds[4],"data-tick")=="1" && getAttr(tds[7],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    //3 6 9
    if(getAttr(tds[2],"data-tick")=="1" && getAttr(tds[5],"data-tick")=="1" && getAttr(tds[8],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    //1 5 9
    if(getAttr(tds[0],"data-tick")=="1" && getAttr(tds[4],"data-tick")=="1" && getAttr(tds[8],"data-tick")=="1" ){
        alert('X win');
        return true;
    } 
    // 3 5 7
    if(getAttr(tds[2],"data-tick")=="1" && getAttr(tds[4],"data-tick")=="1" && getAttr(tds[6],"data-tick")=="1" ){
        alert('X win');
        return true;
    }
    // check OOoooo
    //1 2 3
    if(getAttr(tds[0],"data-tick")=="0" && getAttr(tds[1],"data-tick")=="0" && getAttr(tds[2],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    //4 5 6
    if(getAttr(tds[3],"data-tick")=="0" && getAttr(tds[4],"data-tick")=="0" && getAttr(tds[5],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    //7 8 9
    if(getAttr(tds[6],"data-tick")=="0" && getAttr(tds[8],"data-tick")=="0" && getAttr(tds[7],"data-tick")=="0" ){
        alert('O win');
        return true;

    } 
    //1 4 7
    if(getAttr(tds[0],"data-tick")=="0" && getAttr(tds[3],"data-tick")=="0" && getAttr(tds[6],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    // 2 5 8
    if(getAttr(tds[1],"data-tick")=="0" && getAttr(tds[4],"data-tick")=="0" && getAttr(tds[7],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    //3 6 9
    if(getAttr(tds[2],"data-tick")=="0" && getAttr(tds[5],"data-tick")=="0" && getAttr(tds[8],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    //1 5 9
    if(getAttr(tds[0],"data-tick")=="0" && getAttr(tds[4],"data-tick")=="0" && getAttr(tds[8],"data-tick")=="0" ){
        alert('O win');
        return true;
    } 
    // 3 5 7
    if(getAttr(tds[2],"data-tick")=="0" && getAttr(tds[4],"data-tick")=="0" && getAttr(tds[6],"data-tick")=="0" ){
        alert('O win');
        return true;
    }
    return false;
    
}
for(var i=0;i<tds.length;i++){ 
    tds[i].addEventListener('click',function(){
      
        var _this = this;
        var dataTick = getAttr(this,"data-tick");
        if(checkWin()==true){
            alert('End Game');
            return;
        }
        
        // if(dataTick!='yes'){
        //     alert("Danh vao o khac");

        //     return;
        // }
        
        if(tick==true){
            var idTd=_this.getAttribute('id');
            console.log(idTd);
            _this.innerHTML="X";
            _this.setAttribute("data-tick",'1');
            _this.classList.add('X');
            count++;
            _this.style.pointerEvents='none';
            checkWin();
            tick=false;
        }else{
            _this.innerHTML="O";
            _this.setAttribute("data-tick",'0');
            _this.classList.add('X');
            
            count++;
            _this.style.pointerEvents='none';
            checkWin();
            tick=true;
        }
        if(count==9){
            alert("hoa");
            return;
        }
    })
}

