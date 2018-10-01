var name=localStorage.getItem("name");




if (!window.indexedDB) {
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
  var data=store.get(name);
  data.onsuccess=e=>{

    var res=e.target.result;
    var main=document.getElementById("mainDiv");
    var left=document.createElement("div");
    left.classList.add("leftDiv");
    var na=document.createElement("h3");
    na.textContent=res.name;
    left.appendChild(na);
    main.appendChild(left);
    var hr=document.createElement("hr");
    left.appendChild(hr);

    var roll=document.createElement("p");
    roll.textContent=res.roll;
    left.appendChild(roll);

    var email=document.createElement("p");
    email.textContent=res.email;
    left.appendChild(email);

    var right=document.createElement("div");
    right.classList.add("rightDiv");
    var co=document.createElement("p");
    co.textContent=res.co;
    right.appendChild(co);
    main.appendChild(right);

    var ssc=document.createElement("div");
    percentage.textContent=res.percentage;
    right.appendChild(percentage);
    yearofpassing.textContent=res.yearofpassing;
    right.appendChild(yearofpassing);

    var hr=document.createElement("hr");
    right.appendChild(hr);

    }

  console.log("success..!");
}
