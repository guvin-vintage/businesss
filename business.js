$(document).ready(function(){
    $(".show").hide()
    $("#hide").hide()
    $("#show").click(function(){
        $(".show").show("slow",function() {
            $("#show").hide()
            $("#hide").show()
           
        })

    })
    $("#hide").click(function() {
        $(".show").hide("slow",function() {
            $("#show").show()
            $("#hide").hide()
        })
    })

    $("#gototop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >=344 )
        $("#gototop").show("slow");
        else
        $("#gototop").hide("slow");


    })
    $("#gototop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },2000)
    })
   
})

function init()
{

            var months
            var today = new Date();
         
            var day=today.getDate();
            var month = (today.getMonth()+1);
            var year = today.getFullYear();

            var n = (day +2*month +(3*(month+1))/5 + year +(year /4)) % 7
            Math.round(n);
            n = parseInt(n);
            if(n== 1)
                n='Sunday'
                else if(n==2)
                n='Monday'
                else if(n==3)
                n='Tuesday'
                else if(n==4)
                n='Wednesday'
                else if(n==5)
                n='Thursday'
                else if(n==6)
                n='Friday'
                else if(n==7)
                n='Saturday'
            
            
                if(month == 1)
                    month='January'
                    else if(month == 2)
                    month = 'February'
                    else if(month == 3)
                    month='March'
                    else if(month == 4)
                    month='April'
                    else if(month == 5)
                    month='May'
                    else if(month == 6)
                    month='June'
                    else if(month == 7)
                    month='July'
                    else if(month == 8)
                    month='August'
                    else if(month ==9)
                    month='September'
                    else if(month == 10)
                    month='October'
                    else if(month == 11)
                    month = 'November'
                    else if(month == 12)
                    month='December'

            
            var d1=document.getElementById('day');
            
            var date1 = n +', '+month+' '+day +', ' + year;
            var t1 = document.createTextNode(date1);
            d1.appendChild(t1);
}