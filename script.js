alert("Kullanıcı Kayıt sayfasına Hoşgeldiniz..");
alert("Lütfen sisteme girdiğiniz bilgileri UNUTMAYIN")
let adSoyad = prompt(`Ad Soyad giriniz: `);
let rol = prompt(`Şirketteki rolünüzü giriniz: `);
alert("Başarıyla Kaydoldunuz. Lütfen Giriş Bilgilerinizi unutmayın...")
let adKontrol=prompt(" Ad Soyad: ");
let rolKontrol=prompt("Rolünüz: ");

if(adSoyad == adKontrol && rol == rolKontrol ){
    alert(`Hoşgeldin  ${rol} - ${adSoyad}`);
}
else if(adSoyad != adKontrol || rol != rolKontrol){
    secim=prompt("Kullanıcı adı veya şifre hatalı tekrar denemek ister misin ? \n(E/H) )");
    if(secim =="E" || secim== "e"){
        adKontrol=prompt(" Ad Soyad: ");
        rolKontrol=prompt("Rolünüz: ");
        if(adSoyad == adKontrol && rol == rolKontrol ){
        alert(`Hoşgeldin  ${rol} - ${adSoyad}`);
        }
        else{
            alert("Giriş yapılamadı, sistemden çıkış yapılıyor");
        }
    }
    else if(secim== "H" || secim== "h"){
         alert("Giriş yapılamadı, sistemden çıkış yapılıyor");
    }
}
else{
    alert("Giriş yapılamadı, sistemden çıkış yapılıyor");
}