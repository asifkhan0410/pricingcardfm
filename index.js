
    let slider;
    var discount = document.getElementById("checkbox");
    let pricing;  
    let pageviews;
    let overlayslider;
    
    let valueofslider;
    let widthconstant;
    
    //console.log(overlayslider);
    
    if(screen.width <=375){
        widthconstant=.78;
        slider = document.getElementById("myRangemobile");
        pricing = document.getElementById("pamountmobile");
        pageviews= document.getElementById("pageviewsmobile");
        overlayslider = document.getElementById("slidecontainer__overlaymobile").style
    }else if(screen.width > 375){
        widthconstant=.82;
        slider= document.getElementById("myRange");
        pricing =document.getElementById("pamount");
        pageviews= document.getElementById("pageviews");
        overlayslider = document.getElementById("slidecontainer__overlay").style
    }
    valueofslider = slider.value;
    overlayslider.width = valueofslider*widthconstant+"%";
    pricing.innerHTML = "$" + 16
    pageviews.innerHTML = 100+"K"
    

    discount.onclick = function(){
        console.log(discount.checked)
        if(discount.checked==true){
            pricing.innerHTML = "$" + 12;
        }else{
            pricing.innerHTML = "$" + 16;
        }
    }

    slider.oninput = function() {
      valueofslider = this.value;
      //console.log(this.value)
        overlayslider.width = this.value*widthconstant+"%";
      discount.onclick = function(){
        console.log(discount.checked)
        if(discount.checked==true){
            if(valueofslider>=0 && valueofslider<20){
                pricing.innerHTML = "$" + 6 
                pageviews.innerHTML = 10+"K"
            }else if(valueofslider>=20 && valueofslider<40){
                pricing.innerHTML = "$" + 9
                pageviews.innerHTML = 50+"K"
            }else if(valueofslider>=40 && valueofslider<60){
                pricing.innerHTML = "$" + 12
                pageviews.innerHTML = 100+"K"
            }else if(valueofslider>=60 && valueofslider<80){
                pricing.innerHTML = "$" + 18
                pageviews.innerHTML = 500+"K"
            }else if(valueofslider>=80 && valueofslider<=100){
                pricing.innerHTML = "$" + 27
                pageviews.innerHTML = 1+"M"
            }
        }else if(discount.checked==false){
            if(valueofslider>=0 && valueofslider<20){
                pricing.innerHTML = "$" + 8 
                pageviews.innerHTML = 10+"K"
            }else if(valueofslider>=20 && valueofslider<40){
                pricing.innerHTML = "$" + 12
                pageviews.innerHTML = 50+"K"
            }else if(valueofslider>=40 && valueofslider<60){
                pricing.innerHTML = "$" + 16
                pageviews.innerHTML = 100+"K"
            }else if(valueofslider>=60 && valueofslider<80){
                pricing.innerHTML = "$" + 24
                pageviews.innerHTML = 500+"K"
            }else if(valueofslider>=80 && valueofslider<=100){
                pricing.innerHTML = "$" + 36
                pageviews.innerHTML = 1+"M"
            }
        }
    }

      if(valueofslider>=0 && valueofslider<20){
        pricing.innerHTML = "$" + 8 
        pageviews.innerHTML = 10+"K"
    }else if(valueofslider>=20 && valueofslider<40){
        pricing.innerHTML = "$" + 12
        pageviews.innerHTML = 50+"K"
    }else if(valueofslider>=40 && valueofslider<60){
        pricing.innerHTML = "$" + 16
        pageviews.innerHTML = 100+"K"
    }else if(valueofslider>=60 && valueofslider<80){
        pricing.innerHTML = "$" + 24
        pageviews.innerHTML = 500+"K"
    }else if(valueofslider>=80 && valueofslider<=100){
        pricing.innerHTML = "$" + 36
        pageviews.innerHTML = 1+"M"
    }

    
}

    
    