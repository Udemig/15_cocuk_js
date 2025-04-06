// ! Html'deki elemanlara eriş
// Form'a eriş
var form = document.querySelector("form");
// console.log(form);

// Harcama Listesi elemanına eriş
var harcamaListesi = document.querySelector("#expense-list");

// console.log(harcamaListesi);

// ! Form gönderildiğinde çalışacak fonksiyon

form.addEventListener("submit", function (event) {
  // Formlar default olarak sayfa yeniler.Su sebeple sayfa yenilemesini engellememiz gerekir.

  // Sayfa yenilemesini engelle
  event.preventDefault();

  // Inputlardaki değerlere eriş
  var harcamaAdı = event.target[0].value;
  var harcamaMiktarı = event.target[1].value;

  // Harcama'yı ekranda göstermek için bir html elemanı oluştur
  var harcamaDiv = document.createElement("div");

  // Oluşturulan harcamaDiv elemanına class ekle
  harcamaDiv.classList.add("expense");

  // harcamaDiv elemanının içeriğini belirle
  harcamaDiv.innerHTML = `
           <h2>${harcamaAdı} </h2>
          <h3>${harcamaMiktarı} TL</h3>
          <img id='delete-icon' src="./images/trash.png" alt="" />`;

  // Oluşturulan,class verilen ve içeriği belirlenen harcamaDiv elemanını html arayüzüne ekle
  harcamaListesi.appendChild(harcamaDiv);

  // Inputların içeriğini sıfırla
  event.target[0].value = "";
  event.target[1].value = "";
});

// harcamaListesi alanındaki tıklamaları  izle

harcamaListesi.addEventListener("click", function (event) {
  // Eğer sil iconuna tıklanırsa
  if (event.target.id == "delete-icon") {
    // parentElement ==> Bir elemanın kapsayıcısı olan elemana erişmek için kullanılır.
    //     remove ==> Bir elemanı html'den kaldırmak için kullanılır
    event.target.parentElement.remove();
  }
});
