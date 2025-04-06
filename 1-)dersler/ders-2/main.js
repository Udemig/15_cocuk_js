var konu = "Javascript";

// * Javascript Atama ve Eşitlik Operatörleri

/*

! Atama Operatörü

* Atama işlemi '=' ile yapılır.Bu operatör bizim için sağındaki değeri alıp solundakinin içerisine atar.Eğer sağında bir işlem varsa önce bunu yapar sonra bu işlem sonucunda elde edilen değeri solundaki değere atar.


! Eşitlik Operatörü

* Eşitlik kontrolü '==' ile yapılır.Bu operatör sağında ve solunda bulunan değerlerin eşit olup olmadığını kontrol eder.


*/

var sonuç = (44 + 50) / 2;

document.write(konu, "<br/>");

document.write(sonuç, "<br/>");

document.write(44 == 55, "<br/>");

// * Javascript Karşılaştırma Operatörleri

/*

1. Eşittir (==)
2. Büyüktür (>)
3. Küçüktür (<)

* Bu operatörler bizim için sağındaki ve solundaki sayılara göre kontrol yapar eğer ilgili kontrol sonucu doğruysa 'true' yanlışsa 'false' değer döndürür.

*/

var sayı1 = 44;
var sayı2 = 22;

document.write("Sayı1 ve Sayı2 eşit mi ? ", sayı1 == sayı2, "<br/>");

document.write("Sayı1 Sayı2'den büyük mü ? ", sayı1 > sayı2, "<br/>");

document.write("Sayı1 Sayı2'den küçük mü ? ", sayı1 < sayı2, "<br/>");

// * Javascript Veri Tipleri

// Javascriptdeki yapıların veri tipleri mevcuttur.Bunlar string,number,boolean'dır.

// 1-) String: Metin ifadelerin veri tipi 'string' dir.String ifadeler yazılırken "" arasında yazılmalıdır.

// 2-) Number: Sayı ifadelerin veri 'number' dir.Number ifadeler yazılırken direkt olarak yazılır.'' kullanılmasına gerek yoktur.

// 3-) Boolean: True yada false ifadelerin veri tipi booelan'dır.

// ! Javascript'deki değişkenlerin veri tipini 'typeof' ile kontrol ederiz.

var isim = "Mehmet Musab";

var yaş = 15;

var öğrenciMi = true;

document.write(typeof isim, "<br/>");
document.write(typeof yaş, "<br/>");
document.write(typeof öğrenciMi, "<br/>");
document.write(typeof 44, "<br/>");
document.write(typeof "Yusuf Esat", "<br/>");

document.write("--------------------", "<br/>");

// * Javascript String Metotları

// String yani metin değerine sahip değerler ile kullanılan bazı metotolar:

var mesaj =
  "Merhabalar,Udemig akademinin kaliteli yazılım eğitimleri ile geleceğin başarılı yazılımcılarını yetiştiriyoruz.Bu kapsamda sıradaki konumuz Javascript.Javascript ile dinamik websiteleri oluşturacağız.";

document.write(mesaj, "<br/>");

// ! length ==> Bir string ifadenin uzunluğunu ölçmek için kullanılır.Saymaya ise 0'dan başlar.

document.write("Mesajın Uzunluğu: ", mesaj.length, "<br/>");

// ! indexOf ==>  Bir string ifade içerisinde bir kelimenin sırasını bulmak için kullanılır.Bu metot () içerisinde hangi kelimenin sırası bulunacaksa bunun yazılmasını ister.Ve sonuç olarak bu kelimenin sırasını döndürür.

// indexOf aratılan kelimenin ilk harfinin kaçıncı sırada olduğunu bulmak için kullanılır.

document.write("Mesajın Uzunluğu: ", mesaj.indexOf("Udemig"), "<br/>");

// ! slice ==> Bir string ifade içerisinde belirli bir aralığı almak için kullanılır.Örneğin 12-34. karakter aralığını al.Bu işlem için slice metodu kullanılır.Bu metot bizden bir başlangıç birde bitiş değeri ister.Ve bu iki değer arasındaki kısmı alıp geri döndürür.

// slice metodunun alacağı bitiş değeri opsiyoneldir.Yani zorunlu değildir.Ama başlangıç değeri zorunludur.Eğer sadece başlangıç değeri verilirse bizim için başlangıç sırasından string ifadenin sonuna kadarki aralığı alır ve geri döndürür.

document.write(
  "Mesajın İçerisinde 12-34 aralığı: ",
  mesaj.slice(12, 34),
  "<br/>",
  "<br/>"
);

// ! replace ==>  Bir string ifade içerisindeki bir kelimeyi başka bir kelime ile değiştirmek için kullanılır.Bu metot bizden hangi kelimenin aranacağı ve bu kelimenin hangi kelime ile değiştirileceğini yazmamızı ister.

document.write(
  "Mesaj sıradaki--önümüzdeki değişimi: ",
  mesaj.replace("sıradaki", "önümüzdeki"),
  "<br/>"
);

// ! toLocaleUpperCase ==> String ifadenin tüm harflerinin büyük harf olmasını sağlar.

document.write(
  "Mesaj her kelime büyük harf :",
  mesaj.toLocaleUpperCase(),
  "<br/>",
  "<br/>"
);

// ! toLocaleLowerCase ==> String ifadenin tüm harflerinin küçük harf olmasını sağlar.

document.write(
  "Mesaj her kelime küçük harf :",
  mesaj.toLocaleLowerCase(),
  "<br/>",
  "<br/>"
);

document.write("--------------------", "<br/>");

//  * Javascript Number Metotları

// Numberların sahip olduğu bazı metotlar şunlardır:

var number = 44.765456789876;

// ! toFixed ==> Ondalıklı bir sayının .'dan sonra kaç basamaktan oluşacağını belirlemek için kullanılır.

document.write("Sayı:", number, "<br/>");

document.write("Sayının tipi:", typeof number, "<br/>");

document.write(
  "Sayının ondalıklı kısmının 2 basamak:",
  number.toFixed(2),
  "<br/>"
);

// ! Math.round ==> Ondalıklı bir sayıyı en yakın tam sayıya yuvarlamak için kullanılır.[Eğer bir sayı .5'u geçerse bir üst tam sayıya; geçmezse bir alt tam sayıya yuvarlanır.]

document.write(
  "Sayının en yakın tam sayıya yuvarlanmış hali:",
  Math.round(number),
  "<br/>"
);

document.write(
  "Sayının en yakın tam sayıya yuvarlanmış hali:",
  Math.round(17.2),
  "<br/>"
);

// ! Math.ceil ==> Ondalıklı bir sayıyı her zaman bir üst tam sayıya yuvarlamak için kullanılır.

document.write("Math.ceil: ", Math.ceil(17.1), "<br/>");

// ! Math.floor ==> Ondalıklı bir sayıyı her zaman bir alt tam sayıya yuvarlamak için kullanılır.

document.write("Math.floor: ", Math.floor(17.9), "<br/>");

// ! Math.max ==> Bir sayı kümesi içerisinden en büyük sayıyı almak için kullanılır.

document.write("En büyük: ", Math.max(12, 456, 1234, 144), "<br/>");

// ! Math.min ==> Bir sayı kümesi içerisinden en küçük sayıyı almak için kullanılır.

document.write("En büyük: ", Math.min(12, 456, 1234, 144), "<br/>");

// ! Math.random ==> 0-1 aralığında rastgele sayı oluşturmak için kullanılır.

document.write("Rastgele sayı: ", Math.random(), "<br/>");

document.write("Rastgele sayı 0-10: ", Math.random() * 10, "<br/>");

document.write(
  "Rastgele sayı 0-10 tam sayı: ",
  Math.round(Math.random() * 100),
  "<br/>"
);
