
var name;
var rollno;
var email;
var store;

var sscvalue;
var sscmarks;
var sscmarks1;
var sscradio;
var sscper;
var sscyop;

var intervalue;
var intermarks;
var intermarks1;
var interradio;
var interper;
var interyop;

var Btechvalue;
var Btechmarks;
var Btechmarks1;
var Btechradio;
var Btechper;
var Btechyop;
function getDetails() {
sscvalue=document.getElementById('sscvalue').value;
sscmarks=document.getElementById('sscmarks');
sscmarks1=document.getElementById('sscmarks1');
sscper=document.getElementById('sscper').value;
sscyop=document.getElementById('sscyop').value;

intervalue=document.getElementById('intervalue').value;
intermarks=document.getElementById('intermarks');
intermarks1=document.getElementById('intermarks1');
interper=document.getElementById('interper').value;
interyop=document.getElementById('interyop').value;

Btechvalue=document.getElementById('Btechvalue').value;
Btechmarks=document.getElementById('Btechmarks');
Btechmarks1=document.getElementById('Btechmarks1');
Btechper=document.getElementById('Btechper').value;
Btechyop=document.getElementById('Btechyop').value;



  console.log(sscvalue);
  if(sscmarks.checked){
     sscradio=sscmarks.value;
  }else {
     sscradio=sscmarks1.value;
  }

  if(intermarks.checked){
     interradio=intermarks.value;
  }else {
     interradio=intermarks1.value;
  }

  if(Btechmarks.checked){
     Btechradio=Btechmarks.value;
  }else {
     Btechradio=Btechmarks1.value;

  }
  console.log(sscvalue+" "+sscradio+" "+sscper+" "+sscyop);
    console.log(intervalue+" "+interradio+" "+interper+" "+interyop);
      console.log(Btechvalue+" "+Btechradio+" "+Btechper+" "+Btechyop);




         name=document.getElementById('name').value;
         rollno=document.getElementById('rollno').value;
         email=document.getElementById('email').value;
        console.log(name+" "+rollno+" "+email);
        if (!window.indexedDB){
          console.log("indexed db is not working...!")
        }
        var request=window.indexedDB.open("svitDB",1);
        request.onerror=(para)=e=>{
          console.log(e);
        }
        request.onupgradeneeded=e=>{
          var dbname=e.target.result;
          dbname.createObjectStore("cse",{keyPath:"name"});
          console.log("upgraded..!");
        }
        request.onsuccess=e=>{
          var dbname=e.target.result;
          store=dbname.transaction("cse","readwrite").objectStore("cse");
          store.put(
          {
            "name": name,
            "roll": rollno,
            "email": email,

            "eduDetails":{
            "ssc":[
              sscvalue,
              sscradio,
              sscper,
              sscyop
            ],
            "inter":[
              intervalue,
              interradio,
            interper,
              interyop
            ],
            "Btech":[
              Btechvalue,
              Btechradio,
            Btechper,
              Btechyop
            ]
          }
          }
          );
          console.log("success..!");
        }
        localStorage.setItem("name",name);
        window.open("resumed.html","_self");
}
