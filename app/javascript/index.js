function result (){
  const commit = document.getElementById("result");
  commit.addEventListener("click", (e) => {
    e.preventDefault();
    const year_id = document.getElementById("year");
    var num1 = "";
      if (year_id.value <= 18) {
      num1 = 4;
      } else if (year_id.value <= 28) {
        num1 = 3;
      } else if (year_id.value <= 38) {
        num1 = 2;
      } else if (year_id.value <= 48) {
        num1 = 1;
      } 
    const month_id = document.getElementById("month");
    var num2 = "";
    if (month_id.value <= 4) {
      num2 = 4;
    } else if (month_id.value <= 7) {
      num2 = 3;
    } else if (month_id.value <= 10) {
      num2 = 2;
    } else if (month_id.value <= 13) {
      num2 = 1;
    } 
    const sleep = document.getElementById("sleeping");
    var num3 = "";
    if (document.getElementById("sleeping1").checked) {
      num3 = 3;
    } else if (document.getElementById("sleeping2").checked) {
      num3 = 2;
    } else if (document.getElementById("sleeping3").checked) {
      num3 =1;
    }
    const eat = document.getElementById("eating");
    var num4 = "";
    if (document.getElementById("eating1").checked) {
      num4 = 3;
    }  else if (document.getElementById("eating2").checked) {
      num4 = 2;
    } else if (document.getElementById("eating3").checked) {
      num4 = 1;
    }
    const condition = document.getElementById("condition");
    var num5 = "";
    if (document.getElementById("condition1").checked) {
      num5 = 3;
    } else if (document.getElementById("condition2").checked) {
      num5 = 2;
    } else if (document.getElementById("condition3").checked) {
      num5 = 1;
    }
    const total_num = num1 + num2 + num3 + num4 + num5 
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/dailies", true);
    XHR.responseType = 'arraybuffer';
    XHR.send(formData);
  });
}

window.addEventListener('load', result);
