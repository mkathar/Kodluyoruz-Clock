let Name = prompt("Adınızı Girin");
let myName= document.querySelector("#myName");
    if(Name.length>0)
    {
        myName.innerHTML= Name
        console.log("girilen isim uzunluğu; " + Name.length, "isim; " +Name)
    }
    else
    {
    alert("Bir isim Girmelisiniz")
    location.reload();
    console.log("isim girmedi ki " )
    }
    function saatIste()
    {
        let dt = new Date();
        switch(dt.getDay())
        {
            case 1: 
            gun="Pazartesi"
            break;
            case 2: 
            gun="Salı"
            break;
            case 3:
            gun="Çarşamba"
            break;
            case 4: 
            gun="Perşembe"
            break;
            case 5: 
            gun="Cuma"
            break;
            case 6:
            gun="Cumartesi"
            break;
            case 7:
            gun="Pazar"
            break;
        }
        let saat = dt.getHours();
        let dakika= dt.getMinutes();
        let saniye= dt.getSeconds();
        let smth = document.querySelector("#myClock");
        smth.innerHTML = saat +":"+dakika+":"+saniye+"  "+gun;    
    }
    var sn= 0, dk = 0, st = 0;
    time = setInterval
    time = setInterval('saatIste()', 1000);
    