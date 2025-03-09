// todo: haftagün adındaki bir değişkenin alacağı değer bir haftanın hangi gününe karşılık geliyorsa bunu yazdıran bir code-script yazınız [1 ise pazartesi,2 salı,...]

var haftagün = 4;

// switch (haftagün) {
//   case 1:
//     document.write("Pazartesi", "<br/>"); // haftagün değişkeninin değeri 1 ise
//     break;
//   case 2:
//     document.write("Salı", "<br/>"); // haftagün değişkeninin değeri 2 ise
//     break;
//   case 3:
//     document.write("Çarşamba", "<br/>"); // haftagün değişkeninin değeri 3 ise
//     break;
//   case 4:
//     document.write("Perşembe", "<br/>"); // haftagün değişkeninin değeri 4 ise
//     break;
//   case 5:
//     document.write("Cuma", "<br/>"); // haftagün değişkeninin değeri 5 ise
//     break;
//   case 6:
//     document.write("Cumartesi", "<br/>"); // haftagün değişkeninin değeri 6 ise
//     break;
//   case 7:
//     document.write("Pazar", "<br/>"); // haftagün değişkeninin değeri 7 ise
//     break;
//   default:
//     document.write("Tanımsız gün !!", "<br/>"); //  haftagün değişkeninin değeri 1-7 arasında değilse
// }

// switch-case yapısı bir değişkenin alacağı değerlere göre işlem yapmak için kullanılır.switch(){} yapısında () içerisinde kontrol edilecek değişkenin adı yazılır.Bu değişkenin alacağı değeler ise case 'değer' ile kontrol edilir.case karşılık gelen değer : dan sonra yazılır.

// * DOM (Document Object Modal) Manipülasyonları

// Javascript'de Html arayüzündeki elemanlara erişmek ve bu elemanlar üzerinde manipülasyonlar yapmamızı sağlayan yapıya DOM denir.

// Bir elemana javascript kısmından erişerek müdahelede bulunmak için ilk olarak bu elemanı js kısmına çekmemiz gerekir.Html'den js'e eleman çekerken şu metotlar kullanılır.

// * 1-)document.getElementsByTagName():Html'deki elemanlara etiket adına göre erişmek için kullanılır.() içerisinde hangi elemana erişmek istiyorsak bunun etiket adını yazmamız gerekir.Bu sayede bu metot html'deki elemanı javascript kısmına çeker.

var başlık1 = document.getElementsByTagName("h1");

var link1 = document.getElementsByTagName("a");

// console.log(başlık1);
// console.log(link1);

// * 2-)document.getElementsByClassName():Html'deki elemanlara class adına göre erişmek için kullanılır.() içerisinde hangi elemana erişmek istiyorsak bunun class adını yazarak bu elemana js kısmında erişebiliriz.

var başlık2 = document.getElementsByClassName("title-1");

// console.log(başlık2);

// * 3-)document.getElementsById():

var başlık3 = document.getElementById("title-2");

// console.log(başlık3);

// * 4-) document.querySelector(): Bu metot yukarıda sayılan üç metodun işlevini tek başına yapabilir.Yani elemanlara class adına,id'sine veya tag (etiket) adına göre erişmek için kullanılır.

// ! Not: document.querySelector() ile elemanlara erişirken erişilecek eleman bir class ise document.querySelector() buradaki () içerisinde class adının başına .; id ise document.querySelector() buradaki () içerisinde başına # işareti konulmalıdır.Aksi halde istenilen elemana erişemeyiz.

var başlık4 = document.querySelector(".title-3");

// console.log(başlık4);

var başlık5 = document.querySelector("#title-4");

// console.log(başlık5);

// Html'den Javascript kısmına çekilen elemanlara still özellikleri verme:

// başlık5.style.backgroundColor = "red";

// başlık5.style.fontSize = "44px";

// başlık5.style.padding = "10px";

// başlık5.style.borderRadius = "5px";

// ! Html'den js e çekilen elemanlara still özellikleri yukarıda gibi verilebilir.Fakat bunu yapmak hem otomatik tamamlamaması hemde alacağı değerleri (eğer renk özelliği verilecekse kırmız,mavi,... ) bize sunmamasından dolayı bizi zorlar.Bizde bunu ilgili elemana css dosyasında oluşturduğumuz classı ekeleyerek yaparız.

// Bir elemana javascript'den class ile ilgili işlemler yapmak için classList özelliği kullanılır.

// * classList.add() ==> Bir elemana class eklemek için kullanılır.() içerisinde verilecek class adı yazılır.

başlık5.classList.add("başlık5");

var link = document.querySelector("#udemig");

// console.log(link);

link.classList.add("link");

var button = document.querySelector("#btn");

// * classList.remove() ==> Bir elemana verilen classı çıkarmak için kullanılır.() içerisinde yazılan classı elemandan kaldırır.

button.classList.remove("btn");

// ! toogle işlenecek

// * DOM Olay İzleyicileri (addEventListener):

// Bir eleman üzerinde bir olay gerçekleştiğinde (tıklanma,sürüklenme,formun gönderilmesi,...) bir işlev yapabilmemizi sağlayan yapılara olay izleyicileri denir.Olay izleyicileri bizden iki şey ister:

// 1-) Hangi olayın gerçekleşeceği

// 2-) Bu olay gerçekleşince ne yapılacağı

// ? Örnek: Uyarı Ver butonuna tıklanıca bir alert tetikleyiniz.

// Butonu Js kısmına çek
var alertBtn = document.querySelector("#give-alert");

// console.log(alertBtn);

// Butona bir olay izleyicisi eklemek

alertBtn.addEventListener("click", () => {
  alert("Uyarı butonuna tıklandı");
});
