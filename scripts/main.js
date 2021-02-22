  
// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：


//self.setInterval("loadXMLDoc()",3000);
function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
  }
  else {// code for IE6, IE5
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  document.getElementById("myp").innerHTML = xmlhttp.responseText;
	}
  }
  xmlhttp.open("POST", "https://www.boursorama.com/bourse/action/graph/ws/GetTicksEOD?symbol=MP-28371&length=3650&period=0&guid=.html", true);
  xmlhttp.send();
}


/* $(function) loadData() {
	$.ajax({
        type:'GET'/'POST',
        url:"https://www.boursorama.com/bourse/action/graph/ws/GetTicksEOD?symbol=MP-28371&length=3650&period=0&guid=.html",
        async:true,
        dataType:'JSONP',
        success(res){
            console.log(res);
        }
    })
} */