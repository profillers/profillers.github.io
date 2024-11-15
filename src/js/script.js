const Sayfa = document.getElementById("Page");
console.log(Sayfa.innerText)
if (Sayfa.innerText == "Anasayfa") {

  const AktifSayfa = document.getElementById("anasayfa");
  AktifSayfa.className = "active has-sub";

}
else if (Sayfa.innerText == "Lojistik") {

  const AktifSayfa = document.getElementById("lojistik");
  AktifSayfa.className = "active has-sub";

}

else
  console.log("giriş Yanlış")
