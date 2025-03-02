function toplamaİşlemi() {
  var sayı1 = 44;
  var sayı2 = 35;

  var toplam = sayı1 + sayı2;

  return toplam;
}

document.write("Toplama Sonuç:", toplamaİşlemi(), "<br/>");

// Bir fonksiyonun bir değeri fonksiyon dışarısına çıkarabilmesi için `return` satırı kullanılır.Return satırında yazılan değer fonksiyon çağırıldığında dışarı döndürülecektir.

// todo: Bir fonksiyon oluşturunuz.Bu fonksiyon kendisine paramtere olarak verilen 2 sayıyı çarpsın ve fonksiyon çağırıldığında bu işlem sonucunu geri döndürsün.

function çarpmaİşlemi(s1, s2) {
  var çarpım = s1 * s2;

  return çarpım;
}

document.write("Çarpım Sonuç:", çarpmaİşlemi(3, 4), "<br/>");

// * Javascript Objeler (Nesneler)

// Javascript objeleri içerisinde key-value (anahtar-değer) çiftleri halinde değerler tutmak için kullanılan yapılardır.Obje içerisindeki key değeri çağırıldığında bunun karşılığı olan value'yu getirecektir.

// Bir javascript objesi 'var' anahtar kelimesi ile tanımlanır.var anahtar kelimesi yazılır sonrasında bu objeye bir isim verilir.Verilen isim sonrasında = {} konulup {} içerisinde bu objenin sahip olacağı key-value çiftleri yazılır.

var kişi = {
  isim: "Yusuf",
  soyisim: "YAMAN",
  yaş: 23,
  eposta: "yusuf@yaman.com",
  hobiler: ["Yazılım", "Spor", "Müzik"],
};

// Bir objeye erişme
console.log(kişi);

// Bir obje içerisindeki bir değere erişme

console.log("Kişi adı:", kişi.isim);

console.log("Kişi yaş:", kişi.yaş);

// Bir obje içerisindeki bir diziye erişme

console.log("Kişi hobiler:", kişi.hobiler);

// Bir obje içerisindeki bir dizinin bir elemanına erişme

console.log("Kişi hobiler-1:", kişi.hobiler[0]);

document.write("----------------------------------------", "<br/>");

// * Javascript Koşullu Yapılar (if-else)

// todo: Kullanıcının yaşı 18'den büyükse ehliyet alabilir değilse ehliyet alamaz yazdırınız.

var yaş = 17;

if (yaş > 18) {
  document.write("Ehliyet alabilir.", "<br/>");
} else {
  document.write("Ehliyet alamaz.", "<br/>");
}

// todo: Bir öğrencinin ortalaması 50'den büyükse geçtiniz değilse kaldınız yazdırınız.

var ortalama = 45;

if (ortalama > 50) {
  // Ortalama 50'den büyükse bu kısım çalışır
  document.write("Geçtiniz", "<br/>");
} else {
  // Ortalama 50'den büyük değilse bu kısım çalışır
  document.write("Kaldınız", "<br/>");
}

document.write("----------------------------------------", "<br/>");

//  if-else ile javascript'de karar yapıları oluşturulur.if eğer demektir.
// if(){} else{} yapısında () içerisinde yazılacak koşul sağlanırsa buradaki {} içerisindeki kod çalışır.Ama eğer sağlanmazsa else kısmındaki {} içerisindeki kod çalışır.

// ? Birden fazla kontrol koşullu yapılarda nasıl kullanılır ?

// Birden fazla koşul yapısı ilk if'den sonra else if'ler kullanılarak yapılır.Sonuncu durumda ise else kullanılır.

// todo: Kullanıcını  ortalaması 50'den küçükse 'Kaldınız' 50-64 arasında ise 'Geçtiniz ama belge alamadınız' 65-84 arasında ise 'Geçtiniz ve teşekkür belgesi aldınız' 85 ve üzerinde ise 'Geçtiniz ve takdir belgesi aldınız' yazdırınız.

var kullanıcıOrtalama = 85;

if (kullanıcıOrtalama < 50) {
  document.write("Kaldınız", "<br/>");
} else if (kullanıcıOrtalama >= 50 && kullanıcıOrtalama < 65) {
  document.write("Geçtiniz ama belge alamadınız", "<br/>");
} else if (kullanıcıOrtalama >= 65 && kullanıcıOrtalama < 85) {
  document.write("Geçtiniz ve teşekkür belgesi  aldınız", "<br/>");
} else {
  document.write("Geçtiniz ve takdir belgesi  aldınız", "<br/>");
}

document.write("----------------------------------------", "<br/>");

// * Javascript switch-case yapısı

// switch-case yapısı javascript'de bir ifadenin sahip olduğu değerlere göre işlem yapmamızı sağlar.Ör. kurs numarası 1 ise Frontend 2 ise Backend 3 ise Mobile 4 ise ingilizce yazdrıma işlemi.

var kursNumarası = 3;

switch (kursNumarası) {
  //  kursNumarası 1 ise bu case çalışır
  case 1:
    document.write("Frontend Kursu", "<br/>");
    break;
  //  kursNumarası 2 ise bu case çalışır

  case 2:
    document.write("Backend Kursu", "<br/>");
    break; // Bir case çalıştıktan sonra dur demezsek diğer case'lerde çalışır.Bunu engellemek için 'break' komutu kullanılır.

  //  kursNumarası 3 ise bu case çalışır

  case 3:
    document.write("Mobile Kursu", "<br/>");
    break;

  //  kursNumarası 4 ise bu case çalışır

  case 4:
    break;
    document.write("İngilizce Kursu", "<br/>");
    break;
}
