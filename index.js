window.onload=function() {

var i=60,
    button1=document.getElementById("button1"),
    button2=document.getElementById("button2"),
    button3=document.getElementById("button3"),
    num1=document.getElementsByClassName("num1")[0],
    num2=document.getElementsByClassName("num2")[0],
    flag=true,
    flag2=false;

button1.addEventListener("click",function(){
    if(button1.innerHTML=="停止"){
        button1.innerHTML="开始";
        flag=false;
        flag2=false;
        // i=null
    }else if(button1.innerHTML=="开始"){
        i=60;
        button1.innerHTML="停止";
        circle1();
        circle2();
        flag=true;
        flag2=true;
    }
});
    var circle1=function(){
        var timer1 = setTimeout(function(){
            num1.innerHTML="0";
        },1000)};

    var circle2=function(){
        var timer2 = setInterval(function(){
            if(i>10){
                i=i-1;
                num2.innerHTML=i;
            }else if(i>0&&i<11){
                i=i-1;
                i1="0"+i;
                num2.innerHTML=i1;
            }else if(i==0){
                button1.innerHTML="开始";
                num1.innerHTML="1";
            }
            if(flag==false){
                window.clearInterval(timer2);
                num1.innerHTML="1";
                num2.innerHTML="00";
            }
        },1000)};

    //右边半个
    var ii=0,board=document.getElementById("board");
    button3=document.getElementById("button3");

    button3.addEventListener("click",function(){
        if(flag2==false){
            alert("请先开始计时！");
        }else{
            if(ii<6){
                var record = document.createElement("div");
                board.appendChild(record);
                record.className = "record";
                var hr = document.createElement("span");
                record.appendChild(hr);
                hr.className = "hr";
                var count = document.createElement("span");
                hr.appendChild(count);
                count.className = "count";
                var time = document.createElement("span");
                hr.appendChild(time);
                time.className = "time";
                ii=ii+1;
                count.innerHTML=(ii)+". ";
                time.innerHTML="00:"+num2.innerHTML;
            }else{
                alert("储存数据已达上限！")
            }
        }
    });
    var record=document.getElementsByClassName("record");
    button2=document.getElementById("button2");
    button2.addEventListener("click",function(){
        if(ii===0){
             alert("储存数据为空！")
         }else{
            board.innerHTML="<h2>计时器</h2>";
            ii=0;
         }
    })
}