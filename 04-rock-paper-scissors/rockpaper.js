var k="1";
        var d="2";
        var q="3";
        var komp=Math.floor(Math.random() * 3+1);

        prompt("Zehmet olmasa adinizi daxil edin");
       var secilen=prompt("Birini secin \n" + k +"-kagiz \n"  + d +"-das \n"+q+"-qayci");

    document.write("Sizin secdiyiniz: " + secilen + '<br>');
    document.write("Kompyuterin secdiyi: \n" + komp + '<br>');

    if(secilen==1 && komp==1 || secilen==2 && komp==2 || secilen==3 && komp==3){
        document.write("Beraber");
    }
    else if(secilen==1 && komp==2 || secilen==3 && komp==1 || secilen==2 && komp==3 ){
        document.write("Qazandiniz");
    }
    else {
        document.write("Meglub oldunuz");
    }