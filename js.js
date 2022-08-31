// create a button to scrolling to the top

let test = true;
let myBttn = document.getElementById("up-button");
console.log(myBttn);
// verify the button by CONSOLE

if (test === true) {
  window.onscroll = function () {
    if (window.scrollY > 600) {
      myBttn.style.display = "block";
      // myBttn.classList.add("show-up-button");
    } else {
      myBttn.style.display = "none";
      // myBttn.classList.remove("show-up-button");
    }
  };
  // create the function
  function up() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // apply the function
  myBttn.onclick = function () {
    up();
  };
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// change content by bullet or angle

let angleRight = document.getElementById("angleRight");
let angleLeft = document.getElementById("angleLeft");
let text = document.getElementById("textLanding");
let content1 = document.getElementById("first-content");
let content2 = document.getElementById("main-content");
// bullets of the section
let BulletSection1 = document.getElementById("firstBulletSection");
let BulletSection2 = document.getElementById("secondBulletSection");
let BulletSection3 = document.getElementById("thirdBulletSection");
// colors
let colorOne = "#00b4d883";
let colorTwo = "#63616183";

// ----

// functions

function ChangeToFirst() {
  text.style.backgroundColor = colorOne;
  content1.style.display = "block";
  content2.style.display = "none";
  BulletSection1.style.backgroundColor = "#00b4d8";
  BulletSection1.style.borderColor = "#00b4d8";
  BulletSection2.style.backgroundColor = "transparent";
  BulletSection2.style.borderColor = "#fff";
}

function ChangeToMain() {
  text.style.backgroundColor = colorTwo;
  content2.style.display = "block";
  content1.style.display = "none";
  BulletSection2.style.backgroundColor = "#00b4d8";
  BulletSection2.style.borderColor = "#00b4d8";
  BulletSection1.style.backgroundColor = "transparent";
  BulletSection1.style.borderColor = "#fff";
}

// onclick

BulletSection1.addEventListener("click", ChangeToFirst);
BulletSection2.addEventListener("click", ChangeToMain);
angleLeft.addEventListener("click", ChangeToFirst);
angleRight.addEventListener("click", ChangeToMain);

// -----------------------------------------------

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// Afficher searchInput and searchButton

let searchIcon = document.getElementById("searchIcon");
let myDiv = document.getElementById("inputButton");
let x = true;

// function afficherConcept() {
//   myDiv.style.display = "block";
// }

searchIcon.onclick = function () {
  myDiv.classList.toggle("class-test");
};

console.log(myDiv.classList.contains("input-button")); // true

// function xxaa() {
//   myDiv.classList.toggle("class-test");
// }

// searchIcon.addEventListener("click", xxaa);

// if (x == true) {
//   searchIcon.addEventListener("click", afficherConcept);
// }

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// error when the field is empty

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

// function testText() {
//   if (searchInput.value.length == 0) {
//     alert("Empty!!");
//   } else if (searchInput.value.length != 0) {
//     alert("Full of something!");
//   }
// }

// function TestPhones() {
//   if (searchInput.value.length == 0) {
//     alert("Type Something!!");
//   } else if (searchInput.value.length != 0) {
//     if (
//       searchInput.value == "Phones" ||
//       searchInput.value == "phones" ||
//       searchInput.value == "PHONES"
//     ) {
//       window.open("https://www.samsung.com/us/", "blank");
//     } else if (
//       searchInput.value == "Pc" ||
//       searchInput.value == "pc" ||
//       searchInput.value == "PC"
//     ) {
//       window.open("https://www.apple.com/mac/", "blank");
//     } else if (
//       searchInput.value == "SmartWatch" ||
//       searchInput.value == "smartwatch" ||
//       searchInput.value == "Smartwatch" ||
//       searchInput.value == "SMARTWATCH"
//     ) {
//       window.open("https://www.apple.com/watch/", "blank");
//     } else if (
//       searchInput.value == "airpods" ||
//       searchInput.value == "Airpods" ||
//       searchInput.value == "AirPods" ||
//       searchInput.value == "AIRPODS"
//     ) {
//       window.open("https://www.apple.com/airpods/", "blank");
//     } else {
//       alert("Undefined!!");
//     }
//     //
//   }
// }

function Empty() {
  searchInput.value = "";
  // delete the input's value after search
}

// searchButton.addEventListener("click", testPhones);
searchButton.addEventListener("click", GotoASection);
searchButton.addEventListener("click", Empty);

//

function GotoASection() {
  if (searchInput.value.length == 0) {
    alert("Type Something!!");
  } else if (searchInput.value.length != 0) {
    if (
      searchInput.value == "Products" ||
      searchInput.value == "products" ||
      searchInput.value == "PRODUCTS"
    ) {
      window.open("index.html#products", "_self");
    }
    //
    else if (
      searchInput.value == "About" ||
      searchInput.value == "about" ||
      searchInput.value == "about".toUpperCase()
    ) {
      window.open("index.html#about", "_self");
    }
    //
    else if (
      searchInput.value == "Contact" ||
      searchInput.value == "contact" ||
      searchInput.value == "CONTACT"
    ) {
      window.open("index.html#contact", "_self");
    }
    //
    else if (
      searchInput.value == "Phones" ||
      searchInput.value == "phones" ||
      searchInput.value == "PHONES"
    ) {
      window.open("https://www.samsung.com/us/", "blank");
    }
    //
    else if (
      searchInput.value == "Pc" ||
      searchInput.value == "pc" ||
      searchInput.value == "PC"
    ) {
      window.open("https://www.apple.com/mac/", "blank");
    }
    //
    else if (
      searchInput.value == "SmartWatch" ||
      searchInput.value == "smartwatch" ||
      searchInput.value == "Smartwatch" ||
      searchInput.value == "SMARTWATCH"
    ) {
      window.open("https://www.apple.com/watch/", "blank");
    }
    //
    else if (
      searchInput.value == "airpods" ||
      searchInput.value == "Airpods" ||
      searchInput.value == "AirPods" ||
      searchInput.value == "AIRPODS"
    ) {
      window.open("https://www.apple.com/airpods/", "blank");
    }
    //
    else {
      alert("Undefined!!");
    }
    //
  }
}

//

//

//

//

//

//

//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// SHUFFLE THING

// call vars

// let prdct = document.getElementById("products-shuffle");
let pc = document.getElementById("pc-shuffle");
let phones = document.getElementById("phones-shuffle");
let smartWatches = document.getElementById("smartwatches-shuffle");
let airPods = document.getElementById("airpods-shuffle");
//
// p var
let p_pc1 = document.getElementById("p-pc1");
let p_phone1 = document.getElementById("p-phone1");
let p_smartWatch1 = document.getElementById("p-smartWatch1");
let p_airPods1 = document.getElementById("p-airPods1");

let p_pc2 = document.getElementById("p-pc2");
let p_phone2 = document.getElementById("p-phone2");
let p_smartWatch2 = document.getElementById("p-smartWatch2");
let p_airPods2 = document.getElementById("p-airPods2");

let p_pc3 = document.getElementById("p-pc3");
let p_phone3 = document.getElementById("p-phone3");
let p_smartWatch3 = document.getElementById("p-smartWatch3");
let p_airPods3 = document.getElementById("p-airPods3");

let p_pc4 = document.getElementById("p-pc4");
let p_phone4 = document.getElementById("p-phone4");
let p_smartWatch4 = document.getElementById("p-smartWatch4");
let p_airPods4 = document.getElementById("p-airPods4");

let p_pc5 = document.getElementById("p-pc5");
let p_phone5 = document.getElementById("p-phone5");
let p_smartWatch5 = document.getElementById("p-smartWatch5");
let p_airPods5 = document.getElementById("p-airPods5");

let p_pc6 = document.getElementById("p-pc6");
let p_phone6 = document.getElementById("p-phone6");
let p_smartWatch6 = document.getElementById("p-smartWatch6");
let p_airPods6 = document.getElementById("p-airPods6");

let p_pc7 = document.getElementById("p-pc7");
let p_phone7 = document.getElementById("p-phone7");
let p_smartWatch7 = document.getElementById("p-smartWatch7");
let p_airPods7 = document.getElementById("p-airPods7");

let p_pc8 = document.getElementById("p-pc8");
let p_phone8 = document.getElementById("p-phone8");
let p_smartWatch8 = document.getElementById("p-smartWatch8");
let p_airPods8 = document.getElementById("p-airPods8");

//
// imgs var
let img1Pc = document.getElementById("img1-pc");
let img1Phone = document.getElementById("img1-phone");
let img1SmartWatch = document.getElementById("img1-smartWatch");
let img1AirPods = document.getElementById("img1-airPods");

let img2Pc = document.getElementById("img2-pc");
let img2Phone = document.getElementById("img2-phone");
let img2SmartWatch = document.getElementById("img2-smartWatch");
let img2AirPods = document.getElementById("img2-airPods");

let img3Pc = document.getElementById("img3-pc");
let img3Phone = document.getElementById("img3-phone");
let img3SmartWatch = document.getElementById("img3-smartWatch");
let img3AirPods = document.getElementById("img3-airPods");

let img4Pc = document.getElementById("img4-pc");
let img4Phone = document.getElementById("img4-phone");
let img4SmartWatch = document.getElementById("img4-smartWatch");
let img4AirPods = document.getElementById("img4-airPods");

let img5Pc = document.getElementById("img5-pc");
let img5Phone = document.getElementById("img5-phone");
let img5SmartWatch = document.getElementById("img5-smartWatch");
let img5AirPods = document.getElementById("img5-airPods");

let img6Pc = document.getElementById("img6-pc");
let img6Phone = document.getElementById("img6-phone");
let img6SmartWatch = document.getElementById("img6-smartWatch");
let img6AirPods = document.getElementById("img6-airPods");

let img7Pc = document.getElementById("img7-pc");
let img7Phone = document.getElementById("img7-phone");
let img7SmartWatch = document.getElementById("img7-smartWatch");
let img7AirPods = document.getElementById("img7-airPods");

let img8Pc = document.getElementById("img8-pc");
let img8Phone = document.getElementById("img8-phone");
let img8SmartWatch = document.getElementById("img8-smartWatch");
let img8AirPods = document.getElementById("img8-airPods");

//

// b1Color
let b1Color = "#22a4cc";

function PcClick() {
  phones.style.backgroundColor = "white";
  phones.style.color = "black";
  pc.style.backgroundColor = b1Color;
  pc.style.color = "white";
  smartWatches.style.backgroundColor = "white";
  smartWatches.style.color = "black";
  airPods.style.backgroundColor = "white";
  airPods.style.color = "black";
  //
  p_pc1.style.display =
    p_pc2.style.display =
    p_pc3.style.display =
    p_pc4.style.display =
    p_pc5.style.display =
    p_pc6.style.display =
    p_pc7.style.display =
    p_pc8.style.display =
      "block";
  p_phone1.style.display =
    p_phone2.style.display =
    p_phone3.style.display =
    p_phone4.style.display =
    p_phone5.style.display =
    p_phone6.style.display =
    p_phone7.style.display =
    p_phone8.style.display =
      "none";
  p_smartWatch1.style.display =
    p_smartWatch2.style.display =
    p_smartWatch3.style.display =
    p_smartWatch4.style.display =
    p_smartWatch5.style.display =
    p_smartWatch6.style.display =
    p_smartWatch7.style.display =
    p_smartWatch8.style.display =
      "none";
  p_airPods1.style.display =
    p_airPods2.style.display =
    p_airPods3.style.display =
    p_airPods4.style.display =
    p_airPods5.style.display =
    p_airPods6.style.display =
    p_airPods7.style.display =
    p_airPods8.style.display =
      "none";
  //
  img1Pc.style.display = "block";
  img1Phone.style.display = "none";
  img1SmartWatch.style.display = "none";
  img1AirPods.style.display = "none";

  img2Pc.style.display = "block";
  img2Phone.style.display = "none";
  img2SmartWatch.style.display = "none";
  img2AirPods.style.display = "none";

  img3Pc.style.display = "block";
  img3Phone.style.display = "none";
  img3SmartWatch.style.display = "none";
  img3AirPods.style.display = "none";

  img4Pc.style.display = "block";
  img4Phone.style.display = "none";
  img4SmartWatch.style.display = "none";
  img4AirPods.style.display = "none";

  img5Pc.style.display = "block";
  img5Phone.style.display = "none";
  img5SmartWatch.style.display = "none";
  img5AirPods.style.display = "none";

  img6Pc.style.display = "block";
  img6Phone.style.display = "none";
  img6SmartWatch.style.display = "none";
  img6AirPods.style.display = "none";

  img7Pc.style.display = "block";
  img7Phone.style.display = "none";
  img7SmartWatch.style.display = "none";
  img7AirPods.style.display = "none";

  img8Pc.style.display = "block";
  img8Phone.style.display = "none";
  img8SmartWatch.style.display = "none";
  img8AirPods.style.display = "none";
}

function PhonesClick() {
  pc.style.backgroundColor = "white";
  pc.style.color = "black";
  phones.style.backgroundColor = b1Color;
  phones.style.color = "white";
  smartWatches.style.backgroundColor = "white";
  smartWatches.style.color = "black";
  airPods.style.backgroundColor = "white";
  airPods.style.color = "black";
  //
  p_pc1.style.display =
    p_pc2.style.display =
    p_pc3.style.display =
    p_pc4.style.display =
    p_pc5.style.display =
    p_pc6.style.display =
    p_pc7.style.display =
    p_pc8.style.display =
      "none";
  p_phone1.style.display =
    p_phone2.style.display =
    p_phone3.style.display =
    p_phone4.style.display =
    p_phone5.style.display =
    p_phone6.style.display =
    p_phone7.style.display =
    p_phone8.style.display =
      "block";
  p_smartWatch1.style.display =
    p_smartWatch2.style.display =
    p_smartWatch3.style.display =
    p_smartWatch4.style.display =
    p_smartWatch5.style.display =
    p_smartWatch6.style.display =
    p_smartWatch7.style.display =
    p_smartWatch8.style.display =
      "none";
  p_airPods1.style.display =
    p_airPods2.style.display =
    p_airPods3.style.display =
    p_airPods4.style.display =
    p_airPods5.style.display =
    p_airPods6.style.display =
    p_airPods7.style.display =
    p_airPods8.style.display =
      "none";
  //
  img1Pc.style.display = "none";
  img1Phone.style.display = "block";
  img1SmartWatch.style.display = "none";
  img1AirPods.style.display = "none";

  img2Pc.style.display = "none";
  img2Phone.style.display = "block";
  img2SmartWatch.style.display = "none";
  img2AirPods.style.display = "none";

  img3Pc.style.display = "none";
  img3Phone.style.display = "block";
  img3SmartWatch.style.display = "none";
  img3AirPods.style.display = "none";

  img4Pc.style.display = "none";
  img4Phone.style.display = "block";
  img4SmartWatch.style.display = "none";
  img4AirPods.style.display = "none";

  img5Pc.style.display = "none";
  img5Phone.style.display = "block";
  img5SmartWatch.style.display = "none";
  img5AirPods.style.display = "none";

  img6Pc.style.display = "none";
  img6Phone.style.display = "block";
  img6SmartWatch.style.display = "none";
  img6AirPods.style.display = "none";

  img7Pc.style.display = "none";
  img7Phone.style.display = "block";
  img7SmartWatch.style.display = "none";
  img7AirPods.style.display = "none";

  img8Pc.style.display = "none";
  img8Phone.style.display = "block";
  img8SmartWatch.style.display = "none";
  img8AirPods.style.display = "none";

  //
}

function SmartWatchClick() {
  pc.style.backgroundColor = "white";
  pc.style.color = "black";
  phones.style.backgroundColor = "white";
  phones.style.color = "black";
  smartWatches.style.backgroundColor = b1Color;
  smartWatches.style.color = "white";
  airPods.style.backgroundColor = "white";
  airPods.style.color = "black";
  //
  p_pc1.style.display =
    p_pc2.style.display =
    p_pc3.style.display =
    p_pc4.style.display =
    p_pc5.style.display =
    p_pc6.style.display =
    p_pc7.style.display =
    p_pc8.style.display =
      "none";
  p_phone1.style.display =
    p_phone2.style.display =
    p_phone3.style.display =
    p_phone4.style.display =
    p_phone5.style.display =
    p_phone6.style.display =
    p_phone7.style.display =
    p_phone8.style.display =
      "none";
  p_smartWatch1.style.display =
    p_smartWatch2.style.display =
    p_smartWatch3.style.display =
    p_smartWatch4.style.display =
    p_smartWatch5.style.display =
    p_smartWatch6.style.display =
    p_smartWatch7.style.display =
    p_smartWatch8.style.display =
      "block";
  p_airPods1.style.display =
    p_airPods2.style.display =
    p_airPods3.style.display =
    p_airPods4.style.display =
    p_airPods5.style.display =
    p_airPods6.style.display =
    p_airPods7.style.display =
    p_airPods8.style.display =
      "none";
  //
  img1Pc.style.display = "none";
  img1Phone.style.display = "none";
  img1SmartWatch.style.display = "block";
  img1AirPods.style.display = "none";

  img2Pc.style.display = "none";
  img2Phone.style.display = "none";
  img2SmartWatch.style.display = "block";
  img2AirPods.style.display = "none";

  img3Pc.style.display = "none";
  img3Phone.style.display = "none";
  img3SmartWatch.style.display = "block";
  img3AirPods.style.display = "none";

  img4Pc.style.display = "none";
  img4Phone.style.display = "none";
  img4SmartWatch.style.display = "block";
  img4AirPods.style.display = "none";

  img5Pc.style.display = "none";
  img5Phone.style.display = "none";
  img5SmartWatch.style.display = "block";
  img5AirPods.style.display = "none";

  img6Pc.style.display = "none";
  img6Phone.style.display = "none";
  img6SmartWatch.style.display = "block";
  img6AirPods.style.display = "none";

  img7Pc.style.display = "none";
  img7Phone.style.display = "none";
  img7SmartWatch.style.display = "block";
  img7AirPods.style.display = "none";

  img8Pc.style.display = "none";
  img8Phone.style.display = "none";
  img8SmartWatch.style.display = "block";
  img8AirPods.style.display = "none";
  //
}

function AirPodsClick() {
  pc.style.backgroundColor = "white";
  pc.style.color = "black";
  phones.style.backgroundColor = "white";
  phones.style.color = "black";
  smartWatches.style.backgroundColor = "white";
  smartWatches.style.color = "black";
  airPods.style.backgroundColor = b1Color;
  airPods.style.color = "white";
  //
  p_pc1.style.display =
    p_pc2.style.display =
    p_pc3.style.display =
    p_pc4.style.display =
    p_pc5.style.display =
    p_pc6.style.display =
    p_pc7.style.display =
    p_pc8.style.display =
      "none";
  p_phone1.style.display =
    p_phone2.style.display =
    p_phone3.style.display =
    p_phone4.style.display =
    p_phone5.style.display =
    p_phone6.style.display =
    p_phone7.style.display =
    p_phone8.style.display =
      "none";
  p_smartWatch1.style.display =
    p_smartWatch2.style.display =
    p_smartWatch3.style.display =
    p_smartWatch4.style.display =
    p_smartWatch5.style.display =
    p_smartWatch6.style.display =
    p_smartWatch7.style.display =
    p_smartWatch8.style.display =
      "none";
  p_airPods1.style.display =
    p_airPods2.style.display =
    p_airPods3.style.display =
    p_airPods4.style.display =
    p_airPods5.style.display =
    p_airPods6.style.display =
    p_airPods7.style.display =
    p_airPods8.style.display =
      "block";
  //
  img1Pc.style.display = "none";
  img1Phone.style.display = "none";
  img1SmartWatch.style.display = "none";
  img1AirPods.style.display = "block";

  img2Pc.style.display = "none";
  img2Phone.style.display = "none";
  img2SmartWatch.style.display = "none";
  img2AirPods.style.display = "block";

  img3Pc.style.display = "none";
  img3Phone.style.display = "none";
  img3SmartWatch.style.display = "none";
  img3AirPods.style.display = "block";

  img4Pc.style.display = "none";
  img4Phone.style.display = "none";
  img4SmartWatch.style.display = "none";
  img4AirPods.style.display = "block";

  img5Pc.style.display = "none";
  img5Phone.style.display = "none";
  img5SmartWatch.style.display = "none";
  img5AirPods.style.display = "block";

  img6Pc.style.display = "none";
  img6Phone.style.display = "none";
  img6SmartWatch.style.display = "none";
  img6AirPods.style.display = "block";

  img7Pc.style.display = "none";
  img7Phone.style.display = "none";
  img7SmartWatch.style.display = "none";
  img7AirPods.style.display = "block";

  img8Pc.style.display = "none";
  img8Phone.style.display = "none";
  img8SmartWatch.style.display = "none";
  img8AirPods.style.display = "block";

  //
}

// onclick
phones.addEventListener("click", PhonesClick);
pc.addEventListener("click", PcClick);
smartWatches.addEventListener("click", SmartWatchClick);
airPods.addEventListener("click", AirPodsClick);

// ONE PROBLEM
// ==> lblaaan dyl hover, makyb9sh khdaaam
// WHY ???

// ------------------------------------------------------------------------------
// --------- onClick img ==> go to see the full img (download option) -----------
// ------------------------------------------------------------------------------

function SeeFullPcImg() {
  let way = "images/normal_images/pc4.jpg";
  let picPage = document.getElementById("IMG");
  let jjj = document.getElementById("box");
  img1Pc.onclick = () => {
    window.open("picPage.html", "_blank");
    picPage.src = "images/normal_images/pc1.jpg";
    console.log(jjj);
  };
  img2Pc.onclick = () => {
    window.open("picPage.html", "_blank");
    document.getElementById("box").innerHTML += '<img src = "' + way + '" />';
    console.log("IMG 2 !!!");
  };
  img3Pc.onclick = () => {
    window.open("picPage.html", "_blank");
    document.getElementById("IMG").src = way;
  };
}
SeeFullPcImg();

console.log(document.getElementById("IMG"));
console.log(document.querySelector(".mainDiv"));
console.log("test");

// div. innerHTML += '<img src="'+img. src+'" />';

// jQ
// $("#imageID").attr('src', 'srcImage.jpg');

// !!!!!!
// add img <> MN LWL

// function TestImg() {
//   window.open("picPage.html", "_blank");
// }

/* 

if img x ==> onclick ==> window.open() && picPage.html(replace the img)


*/

// function JqueryTest() {
//   img1Pc.onclick = () => {
//     $("#IMG").attr("src", "images/normal_images/background.jpg");
//     window.open("picPage.html", "_blank");
//   };
// }

// JqueryTest();

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// video

// let myVideo = document.querySelector("video");
// let videoButton = document.getElementById("videoButton");
// console.log(myVideo);
// console.log(videoButton);
// videoButton.onclick = () => {
//   myVideo.pause();
// };

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// CHANGE customers pics (bullets again)

let imgClient1 = document.getElementById("client1");
let imgClient1_1 = document.getElementById("client1_1");
let imgClient2 = "images/normal_images/customer3.png";
let imgClient2_2 = "images/normal_images/customer4.png";
let imgClient3 = "images/normal_images/customer5.jpg";
let imgClient3_3 = "images/normal_images/customer6.png";
//
let mainBullet = document.getElementById("mainB");
let firstBullet = document.getElementById("firstB");
let lastBullet = document.getElementById("lastB");
//
let nameOne = document.getElementById("nameOne");
let nameTwo = document.getElementById("nameTwo");
let pOne = document.getElementById("pOne");
let pTwo = document.getElementById("pTwo");
let pMain =
  "Hello Customers! Do you know that you are a special customers? yes ofc you are, and by the way you are the";
//
let myColor = "#00b4d8";
let aaaColor = "#aaa";

function ChangeCustomersPics() {
  mainBullet.onclick = () => {
    imgClient1.src = "images/normal_images/customer1.jpg";
    imgClient1_1.src = "images/normal_images/customer2.jpg";
    mainBullet.style.backgroundColor = myColor;
    mainBullet.style.borderColor = myColor;
    firstBullet.style.backgroundColor = "transparent";
    firstBullet.style.borderColor = aaaColor;
    lastBullet.style.backgroundColor = "transparent";
    lastBullet.style.borderColor = aaaColor;
    nameOne.innerHTML = "John Wick, Top";
    nameTwo.innerHTML = "Tonny Soprano, Top";
    pOne.innerHTML = `${pMain} 'TOP'`;
    pTwo.innerHTML = `${pMain} 'TOP'`;
  };
  firstBullet.onclick = () => {
    imgClient1.src = imgClient2;
    imgClient1_1.src = imgClient2_2;
    firstBullet.style.backgroundColor = myColor;
    firstBullet.style.borderColor = myColor;
    mainBullet.style.backgroundColor = "transparent";
    mainBullet.style.borderColor = aaaColor;
    lastBullet.style.backgroundColor = "transparent";
    lastBullet.style.borderColor = aaaColor;
    nameOne.innerHTML = "Alex Beo, Best";
    nameTwo.innerHTML = "Sara Ilo, Best";
    pOne.innerHTML = `${pMain} 'BEST'`;
    pTwo.innerHTML = `${pMain} 'BEST'`;
  };
  lastBullet.onclick = () => {
    imgClient1.src = imgClient3;
    imgClient1_1.src = imgClient3_3;
    lastBullet.style.backgroundColor = lastBullet.style.borderColor = myColor;
    mainBullet.style.backgroundColor = firstBullet.style.backgroundColor =
      "transparent";
    mainBullet.style.borderColor = firstBullet.style.borderColor = aaaColor;
    nameOne.innerHTML = "Loli Kinreth, Nice";
    nameTwo.innerHTML = "Anass Saiss, Nice";
    pOne.innerHTML = pTwo.innerHTML = `${pMain} 'NICE'`;
  };
}
// same code, just in the last bullet we shorten the code a littleBit
ChangeCustomersPics();

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// increase numbers while scrolling
let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false; // function started ? NO

// nums.forEach((num) => startCount(num));
// num => just a name

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 120) {
    if (!started) {
      // !started ==> started = false
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
//

// element function => htsh kula haja (pc, phones...) 3ndu diff number so kula mrra ghadi ykun number (mkynsh number fix ghadi ywsslu lih kamlin)
function startCount(x) {
  // goal li khass ywssl lih
  let goal = x.dataset.goal;
  // ghadi nkhdmu b setInterval htsh bghina kul wa7d duree tw93 lina wa7d action
  // 100 => 0.1s ; 1000s => 1s
  let count = setInterval(() => {
    x.textContent++;
    // mnin ghadi ywli number kayssawi dak number li dayru f data-goal ghadi y7bss (clearInterval)
    if (x.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// NOTE: 9ssma DURATION 3la GOAL ===> bash y9ssm lina duration 3la goals kamlin li 3ndna bash kulshi ywwsssl l goal in the same time (2s)

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// LocalStorage - Contact Us

let myForm = document.getElementById("myForm");
//
let inptName = document.getElementById("inptName");
let inptEmail = document.getElementById("inptEmail");
let txtArea = document.getElementById("txtArea");
//
let labelName = document.getElementById("lName");
let labelEmail = document.getElementById("lEmail");
let labelTxtArea = document.getElementById("lTxtArea");
//
let inptSend = document.getElementById("inptSend");

// create regExp

// at least one w (letter)
let reName = /\w{1,}/g;
let reName2 = /[a-zA-Z]{1,}/g;

// at least one w ; @ ; at least one w ; . ; at least two w
let reEmail = /\w{1,}\@\w{1,}\.\w{2,}/g;

//
// ^ begin with ; \w+ any word char (ONE or MORE) ; \  GHI SPACE (one or more) ; * zero or more ; $ end with
let reTxtArea1 = /^\w+( +\w+)*$/g;
//
// ^ begin with ; \w+ any word char (ONE or MORE) ; \s+ whiteSpaces char (tab, space, newLine) (one or more) ; * zero or more ; $ end with
let reTxtArea2 = /^\w+(\s+\w+)*$/g;

// create the mainFunction

function MainFunction() {
  let test = false;
  // Name
  if (inptName.value.match(reName2)) {
    labelName.innerHTML = "";
  } else {
    labelName.innerHTML = "Enter ur Name!";
    test = true;
  }
  // Email
  if (inptEmail.value.match(reEmail)) {
    labelEmail.innerHTML = "";
  } else {
    labelEmail.innerHTML = "Enter ur Email!";
    test = true;
  }
  // TxtArea
  if (txtArea.value.match(reTxtArea1) || txtArea.value.match(reTxtArea2)) {
    labelTxtArea.innerHTML = "";
  } else {
    labelTxtArea.innerHTML = "Enter ur Message!";
    test = true;
  }
  // ---
  if (test) {
    console.log("not good!");
    return false;
  } else {
    console.log("gooood!");
    let myJsonObject = {
      theName: inptName.value,
      theEmail: inptEmail.value,
      theMessage: txtArea.value,
    };
    //
    // stringify ==> to convert from JSON to STRING
    let myObject = JSON.stringify(myJsonObject);
    //
    // to get customer 1, cu 2, ....
    let customers = localStorage.length + 1;
    //
    // customers ==> 1 2 3....
    localStorage.setItem("Customer " + customers, myObject);
    return true;
  }
}

// apply the function
myForm.onsubmit = MainFunction;
