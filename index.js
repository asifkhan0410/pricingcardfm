
    var slider = document.getElementById("myRange");
    var discount = document.getElementById("checkbox1");
    var pricing = document.getElementById("pamount");
    var pageviews = document.getElementById("pageviews");
    
    let valueofslider;
    valueofslider = slider.value;
    
    pricing.innerHTML = "$" + 16
    pageviews.innerHTML = 100+"K"

    slider.oninput = function() {
      //valueofslider = this.value;
      //console.log(this.value)
      if(this.value>=0 && this.value<20){
        pricing.innerHTML = "$" + discount.checked==true? 6:8
        pageviews.innerHTML = 10+"K"
    }else if(this.value>=20 && this.value<40){
        pricing.innerHTML = "$" + 12
        pageviews.innerHTML = 50+"K"
    }else if(this.value>=40 && this.value<60){
        pricing.innerHTML = "$" + 16
        pageviews.innerHTML = 100+"K"
    }else if(this.value>=60 && this.value<80){
        pricing.innerHTML = "$" + 24
        pageviews.innerHTML = 500+"K"
    }else if(this.value>=80 && this.value<=100){
        pricing.innerHTML = "$" + 36
        pageviews.innerHTML = 1+"M"
    }
    }
    console.log(discount.checked)
    discount.onclick = function checked(){
         console.log(discount.checked)
    }