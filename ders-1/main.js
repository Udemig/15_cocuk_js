// * Javascript Nedir ?

// Javascript etkileşimli web siteleri oluşturmak için kullanılan bir programlama dilidir.Javascript dünya üzerindeki en popüler programamla dilidir.

// * Javascript Çıktı Metotları

// 1-) document.write():

// ? document nedir?

// Html kısmındaki body'nin javascript'deki karşılığı document'dir.Bu kısıma 'write' komutu ile yazı çıktısı verebiliriz.

document.write("Javascript dersinden selamlar", "<br/>");

document.write("Javascript dünyadaki en popüler programalama dilidir", "<br/>");

// 2-) console.log():

// console.log() metodu tarayıcıdaki (chrome,safari,yandex,...) console kısmına çıktı vermek için kullanılır.Bu metot veri kontrolü,bağlantı kontrolü için kullanılır.Program içerisinde bir hata alınırsada bunun bu kısımda görebiliriz.

console.log("Selamlar,udemig akademide javascript derslerine başladık.");

// ? console tarayıcıda nerede bulunur ?

// Tarayıcıda sağ tık > incele kısımı açılır.Açılan bu panelde console kısmı bulunur.

// 3-) alert():

// alert() metodu tarayıcıda açılan bir popup ile kullanıcıya çıktı vermek  için kullanılır.

// alert("Udemig akademiye hoşgeldiniz");

// * Javascript Değişkenler

// Javascript'de verilerimizi yönetmek için değişkenler kullanırız.

// Javascript'de değişkenler kullanılırken değişkenin tanımlanması,değişkene değer atanması,değişkenin proje içerisinde kullanılması aşamaları izlenmelidir.

// Javascript'de değişken tanımlama

// Javascript'de değişken tanımlarken 'var' anahtar kelimesi kullanılır.Bu anahtar kelime sonrasında oluşturulacak  değişkene bir isim verilir.bu şekilde bir değişken tanımlanır.

// Bir değişkenin tanımlanması
// var isim;

// Javascript'de değişkene değer atanması

// Bir değişkene değer atanmak için '=' operatörü kullanılır. Bu operatör sonrasında tanımlanacak değişkenin  değerleri yazılır.

var isim = "Yasin";

var yaş = 15;

var kullanıcıAdı = "ciyademir7";

document.write(isim, "<br/>");

document.write(yaş, "<br/>");

document.write(kullanıcıAdı, "<br/>");

// Değişken isimlendirmesi yapılırken bu ismin değişken içeriği ile ilintili olmasına dikkat edilmelidir.Birden fazla kelimeden oluşan bir değişken isimlendirmesi yapılacaksa bunu ilk kelimenin tüm harfleri küçük birinci kelimenin haricindeki diğer kelimelerin ise sadece ilk harfi büyük olacak şekilde yazılır.Bu sayede daha kolay bir okunurluk elde edilir.Bu isimlendirmeye 'camelCase' isimlendirmesi denir.

// * Javascript Operatörler

// Javascript operatörleri değerle ile işlem yapmamızı sağlar.

var sayı1 = 15;
var sayı2 = 5;

// 1. Toplama (+)

// 2. Çıkarma (-)

// 3. Çarpma (*)

// 4. Bölme (/)

document.write("Toplam:", sayı1 + sayı2, "<br/>");

document.write("Çıkarma:", sayı1 - sayı2, "<br/>");

document.write("Çarpma:", sayı1 * sayı2, "<br/>");

document.write("Bölme:", sayı1 / sayı2, "<br/>");
