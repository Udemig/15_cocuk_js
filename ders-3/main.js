// * Javascript Diziler (Array)

// Diziler program içerisinde verilerimizi daha kolay yönetmek için kullanılan yapılardır.Diziler hem kolayca verilerimizi tutma hemde sahip olduğu metotlar ile bu verileri yönetmemizi sağladığından bizim program içerisinde çokca kullanacağımız yapılardır.

// var öğrenci1 = "Mehmet Musab";
// var öğrenci2 = "Mehmet Emre";
// var öğrenci3 = "Yasir";
// var öğrenci4 = "Çiya";

// ? Bir dizi nasıl tanımlanır ?

// var anahtar kelimesi yazılır.Sonrasında bu diziye bir isim verilir.Verilen isim sonrasında atama operatörü (=) çağırılır sonrasında ise [] konulur.Buradaki [] içerisinde dizinin elemanlarını yazarız.

var öğrenciler = ["Mehmet Musab", "Mehmet Emre", "Yasir", "Çiya"];

document.write("Dizi:", öğrenciler, "<br/>"); // Dizinin tüm elemanlarına erişme

document.write("Dizinin 1. elemanı:", öğrenciler[0], "<br/>"); // Dizin belirli bir elemanına erişme

// ! Dizinin belirli bir elemanına erişmek için bunu dizi adı sonrasında [] içerisinde dizinin hangi sıradaki elemanına erişmek istiyorsak bunu yazarak erişebiliriz.Fakat dizi içerisindeki bir elemana erişmeye çalışırken ufak bir sorunla karşılaşırız.Bu sorun bizim ve javascript in dizi elemanlarını farklı şekilde saymasıdır.Biz dizi elemanlarını 1,2,3,... şeklinde sayarken javascript bunu 0,1,2,3,... şeklinde sayar.Bundan dolayı dizinin bir elemanına erişmek isterken bunu erişilmek istenen elemanın bir eksik sıra sayısı yazarak elde edebeliriz.

document.write("-------------------------------------------------", "<br/>");

// * Dizi Metotları

var şehirler = ["Malatya", "Elazığ", "Hatay", "Konya", "Ankara", "İstanbul"];

document.write("Şehirler:", şehirler, "<br/>");

// 1-) push ==> Bir diziye sondan eleman eklemek için kullanılır.Bu metot () içerisinde diziye eklenecek elemanın yazılmasını ister.

şehirler.push("İzmir");
şehirler.push("Antalya");

document.write("Şehirler-1:", şehirler, "<br/>"); // Şehirler dizisine İzmir elemanı eklendi

// 2-) pop ==> Bir dizinin son elemanını diziden kaldırmak için kullanılır.

şehirler.pop();

document.write("Şehirler-2:", şehirler, "<br/>"); // Şehirler dizisinin son elemanı diziden kaldırıldı

// 3-) unshift ==> Bir dizinin başına eleman eklemek için kullanılır.Dizinin başına eklenecek elemanı () içerisinde yazmamız gerekir.

şehirler.unshift("Kahramanmaraş");

document.write("Şehirler-3:", şehirler, "<br/>"); // Şehirler dizisinin başına Kahramanmaraş elemanı eklendi

// 4-) shift ==> Bir dizinin başından eleman kaldırmak için kullanılır.

şehirler.shift();

document.write("Şehirler-4:", şehirler, "<br/>"); // Şehirler dizisin başındaki elemanı kaldırıldı

// 5-) length ==> Bir dizinin uzunluğunu ölçmek için kullanılır

document.write("Şehirler dizisi uzunluğu:", şehirler.length, "<br/>"); // Şehirler dizisin başındaki elemanı kaldırıldı

// 6-) Bir dizideki elemanı güncelleme

şehirler[6] = "Muş";

document.write("Şehirler-5:", şehirler, "<br/>"); // Şehirler dizisin 6. indexteki elemanı Muş olarak güncellendi

document.write("-------------------------------", "<br/>");

// * Javascript Fonksiyonlar (Functions)

// Fonksiyonlar bir işi (iki sayıyı toplama,ortalama hesaplama,sepete ürün ekleme) gerçekleştirmek için oluşturulan kod parçacıklarıdır.Bir fonksiyon program içerisinde kullanılırken bu fonksiyonu ilk olarak tanımlamalı sonrasında ise program içerisinde çağırarak kullanmalıyız.

// Bir fonksiyon 'function' anahtar kelimesi ile tanımlanır.Bu anahtar kelime sonrasında fonksiyona bir isim verilir verilen bu isim sonrasında (){} açılarak {} içerisinde fonksiyonun yapması istenen işlemler kodlanır.

// Fonksiyon tanımlandı
function selamla() {
  document.write(
    "Udemig akademiden selamlar.Piyasanın en iyi yazılım akademinde javascript konusunu işliyoruz.",
    "<br/>"
  );
}

// Fonksiyon çağırıldı
selamla();

// ! Fonksiyon çağırılmazsa belirtilen işlev çalışmayacaktır

// todo: Bir tane fonksiyon oluşturunuz.Bu fonskiyon sayı1=44 ve sayı2=30 sayılarını toplasın ve sonucu ekrana yazdırsın

function toplama() {
  var sayı1 = 44;
  var sayı2 = 30;

  var toplam = sayı1 + sayı2;

  document.write("Toplam:", toplam, "<br/>");
}

toplama();
// toplama();
// toplama(); Burada toplama fonksiyonu kaç defa çağırılırsa çağırılsın her seferinde 74 sonucunun bulacak.Peki biz nasıl dinamil sonuç elde eden fonksiyonlar elde edeceğiz ?

// Bir fonksiyonu dinamik hale getirmek için parametre kullanılır.Fonksiyonlarda parametre kullanırken ilk olarak bu fonksiyona parametre geçmeli sonrasında ise bu parametreyi fonksiyon içerisinde kullanmalıyız.

// Buradaki fonksiyona dışarıdan iki sayı geleceğini belirttik.a, b dedik ama istediğimiz isimlendirmeyi yapabilirdik.Buradaki isimlendirmeler () içerisinde girilecek değerleri karşılayacaktır.
function parametreliToplama(a, b) {
  // Dışarıdan girilen değerleri alarak fonksiyonu dinamik hale getirdik
  var toplam = a + b;

  document.write("Parametreli Toplama:", toplam, "<br/>");
}

// Fonksiyonun dinamik işlem yapabilmesi için parametre geçtik
parametreliToplama(12, 13);
parametreliToplama(44, 78);
