const makeBtn = document.getElementById("makeBtn");
const imageA = document.getElementById("imageA");
const imageB = document.getElementById("imageB");
const topCaptionA = document.querySelector(".topCaptionA");
const bottomCaptionA = document.querySelector(".bottomCaptionA");
const topCaptionB = document.querySelector(".topCaptionB");
const bottomCaptionB = document.querySelector(".bottomCaptionB");

let memeCount = 0;

makeBtn.addEventListener("click", function () {
  const imgUrl = document.getElementById("imgUrl").value;
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;

  if (imgUrl.trim() === "" || topText.trim() === "" || bottomText.trim() === "") {
    alert("Please fill in all Fields before submitting Meme.");
    return;
  }

  if (memeCount === 0) {
    imageA.src = imgUrl;
    topCaptionA.textContent = topText;
    bottomCaptionA.textContent = bottomText;
    memeCount++;
  } else if (memeCount === 1) {
    imageB.src = imgUrl;
    topCaptionB.textContent = topText;
    bottomCaptionB.textContent = bottomText;
    memeCount++;
  } else {
    imageA.src = imgUrl;
    topCaptionA.textContent = topText;
    bottomCaptionA.textContent = bottomText;
    memeCount = 1;
  }

  document.getElementById("imgUrl").value = ""
  document.getElementById("topText").value = ""
  document.getElementById("bottomText").value = ""

});

clearImgA.addEventListener("click", function() {
  imageA.src = "";
  topCaptionA.textContent = "";
  bottomCaptionA.textContent = "";
  memeCount = 0;
});

clearImgB.addEventListener("click", function() {
    imageB.src = "";
    topCaptionB.textContent = "";
    bottomCaptionB.textContent = "";
    memeCount = 1;
});




