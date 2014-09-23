$("document").ready(function(){
   
 

    $("#kimmat").keyup(function(evt){
        var key=evt.keyCode;
        console.log($(this).val()+":"+key);
        // "/" balgisi
     if(key==191){
        var hamza="/";
        $(this).val($(this).val().replace(/hamza/g,"")+"ئ")


     }
       if(key==66){
        $(this).val($(this).val().replace(/b/g,"")+"ب")
     }

     //f
       if(key==70){
        $(this).val($(this).val().replace(/f/g,"")+"ف")
     }
     //f
       if(key==70){
        $(this).val($(this).val().replace(/f/g,"")+"ف")
     }
       if(key==71){
        $(this).val($(this).val().replace(/g/g,"")+"ە")
     }
      if(key==16){
        $(this).val($(this).val().replace(/H/g,"")+"ح")
     }
    });

})
