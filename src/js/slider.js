var imgnum = 0;
var maxnum = myimage.length - 1;
var timeout = 1000;
var slideshow = true;
var myimage = new Array();
myimage[0] = "src/assets/images/group1.jpg";
myimage[1] = "src/assets/images/group2.jpg";
myimage[2] = "src/assets/images/group3.jpg";
myimage[3] = "src/assets/images/group4.jpg";
myimage[4] = "src/assets/images/group5.jpg";
myimage[5] = "src/assets/images/group6.jpg";
function ShowImage(num) {
  document.picbox1.src = myimage[num];
}
function SelectImage() {
  index = document.myform.imgselect.selectedIndex;
  ShowImage(index);
}
function ShowNextImage() {
  imgnum += 1;
  if (imgnum > maxnum) {
    imgnum = 0;
  }
  ShowImage(imgnum);
}
function ShowPreviousImage() {
  imgnum -= 1;
  if (imgnum < 0) {
    imgnum = maxnum;
  }
  ShowImage(imgnum);
}

function SlideShowImage() {
  imgnum += 1;
  if (imgnum > maxnum) {
    imgnum = 0;
  }
  ShowImage(imgnum);
  if (slideshow == true) {
    setTimeout("SlideShowImage()", timeout);
  }
}

function StartSlideShow() {
  slideshow = true;
  SlideShowImage();
}
function StopSlideShow() {
  slideshow = false;
}
