//add subject btn
let varl = document.getElementById("btn");
//empty div for display
let varl2 = document.getElementById("sub2");
//display
let varl5 = document.getElementById("display")
//clear all btn
let varl3 = document.getElementById("btn2");
//calculate btn
let varl4 = document.getElementById("btn3");
let count = 1;
let totalsum =0;
let credits = 0;
//clear all function
varl3.addEventListener("click", function () {
  varl2.innerHTML = "<p></p>";
  varl5.innerHTML = "<p></p>";
  count = 1;
});
//calling add function
varl.addEventListener("click", add);
varl4.addEventListener("click",calc);
//remove sub
//add a new sub to the html and increase count.
function add() {
     count += 1;
     let newelement = document.createElement('div')
     newelement.innerHTML =
       '<div class="sub">' +
       ' <label for="">subject : ' +
       count +
       "</label>" +
       '<div class="grade">' +
       '<select name="" id="grade-ops' +
       count +
       '">' +
       '  <option value="10">O</option>' +
       ' <option value="9">A+</option>' +
       ' <option value="8">A</option>' +
       '  <option value="7">B+</option>' +
       '  <option value="6">B</option>' +
       ' <option value="5">C</option>' +
       '<option value="4">w</option>' +
       " </select>" +
       '  <select name="credits" id="cred-ops' +
       count +
       '">' +
       '  <option value="5">5</option>' +
       '  <option value="4">4</option>' +
       ' <option value="3">3</option>' +
       ' <option value="2">2</option>' +
       ' <option value="1">1</option>' +
       ' <option value="0">0</option>' +
       " </select>" +
       "</div>" +
       " </div>"+'<br>';
  varl2.append(newelement)
}
function calc()
{
    var i =0;
    let firstgrade = document.getElementById("grade-ops").value
    let firstcredit = document.getElementById("cred-ops").value
    totalsum = firstcredit * firstgrade;
    credits = parseInt(firstcredit)
    console.log(credits)
    for(i=2;i<=count;i++)
      {
         
           totalsum += document.getElementById("grade-ops"+i).value * document.getElementById("cred-ops"+i).value;
          //  console.log(totalsum)
           let credit = parseInt(document.getElementById("cred-ops"+i).value); 
           credits += credit
          //  console.log(credits)
      }
    cgpa = totalsum/credits;
    cgpa.toPrecision(2);
    varl5.innerHTML =
      '<div id="result"><h2>CGPA : ' +
      cgpa.toPrecision(4) +
      "</h2></div>";
  if(cgpa > 8)
    {
      const startit = () => {
        setTimeout(function () {
          console.log("start");
          confetti.start();
        }, 10);
      };

      const stopit = () => {
        setTimeout(function () {
          console.log("stop");
          confetti.stop();
        }, 9000);
      };

      startit();
      stopit();
    }
}







