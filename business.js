
$(window).on('load', function (event) {
    $('body').removeClass('preloading');
    $('.load').delay(1000).fadeOut('fast');
})

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
    //Go to top
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

    //An nut login
    $(".login").hide();
    $("#login").click(function(){
        $(".login").show(function() {
            $(".login").css({
                "position" :"fixed",
                "top":"18rem",
                "z-index":"9999"
            })
        })
        
    })

    //Click dau X
    $(".exit").click(function(){
        $(".login").hide("slow")
    })

    $(".user").hide();
    $("#thongbao").hide();  

    //Click Dang nhap
    $("#enter").click(function(){
        var user=$("#user-name").val()
        $(".user-infor").html(user)
        $("#thongbao").show(500,function(){
            $(".login").hide(4000)
            $(".user").show("slow")
            $("#thongbao").hide(5000);  
        })

    })
    //Dang Xuat
    $("#logout").click(function(){
        $(".user").hide("slow")
    })

    //Click nut subscribe
    $(".header-button").click(function(){
        $("html,body").animate({
            scrollTop:5000
        },1000)
    })

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      /**SEARCH */

      $(".box ").click(function ( ){
        $(".box .input ").css({
            "width":"200px"
        })
      })
     $(".box .input").change(function() {
        $(".box .input ").css({
            "width":"0"
        })
     })
    
      var topics = ["World","War","Us","News","game", "movies"]
      $("#search").keyup(function () {
    
        let text = $(this).val().toLowerCase();
        let h = ""
        for ( let c of topics)
        {
            if(c.toLowerCase().indexOf(text) >=0 )
            {
                h+= ` <li><a href="javascript:;">${c}</a></li>`
            }
            if(h != "")
                {
                    $("#list").html(h);
                    $("#list").show()
                }
               $("#list").on("click", "a", function() {
                $(".input").val($(this).text());
                $("#list").hide()
    
               }) 
    
        }
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
            n=Math.round(n);
            n = parseInt(n);
            if(n==7 || n == 0)
                n='Saturday'
            else if(n== 1)
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
function checkMail()
{
    
       var form=document.getElementById("form");
       var email=document.getElementById("email").value;
       var text=document.getElementById("text");
       var reg= /[a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-zA-Z]{2,})+$/;
        if(email.match(reg))
        {
         
      
            text.innerHTML="Thank you for your subscribing"
            text.style.color="#00ff00";


        }
        else
        {
          
            text.innerHTML="Please enter your email correctly"
            text.style.color="#ff0000";

        }   
}