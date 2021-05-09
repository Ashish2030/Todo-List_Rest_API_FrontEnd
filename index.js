function enable() {
    var Name = document.getElementById("a").value;
    var mob_no = document.getElementById("b").value;
    var email = document.getElementById("c").value;
    if (Name.length === 0 || mob_no.length !== 10 || email.length < 5 ) {
        alert("Invalid Input")
    }
    else {

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://todo98123.herokuapp.com/posts", true);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

            }
        };


        var json = {
            "name": Name,
            "number": mob_no,
            "email": email,
        };
        xhttp.send(JSON.stringify(json));
    }

    setTimeout(function () { window.location.reload(); }, 200);
}
function load()
{
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", "https://todo98123.herokuapp.com/posts", true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list=JSON.parse(this.responseText);
           console.log("a");
            var temp=document.getElementById('append');
            var count=1;
              for (var i = 0; i < list.length; i++) {
                var table = document.createElement('tr');
                var temp22 = document.createElement('td');
                var temp2 = document.createElement('td');
                temp2.classList.add("l");
                temp2.style.width = "10px";
                var temp3 = document.createElement('td');
                temp3.classList.add("l");
                var temp4 = document.createElement('td');
                temp4.classList.add("l");
               
                var temp5 = document.createElement('td');
                temp22.innerHTML = list[i].id;
                temp22.style.display = "none";

                temp2.innerHTML = list[i].name;
                temp3.innerHTML = list[i].number;
                temp4.innerHTML = list[i].email;
                
                temp5.innerHTML = '<button class="mn"  onclick="deleteRow(this)">Delete</Button>'


                table.appendChild(temp22);
                table.appendChild(temp2);
                table.appendChild(temp3);
                table.appendChild(temp4);
              
                table.appendChild(temp5);

                temp.appendChild(table);
            }
         
         
                temp.style.display="block";
           
        }
    };
    xhttp1.send();

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var m = document.getElementById('append').rows[i].cells[0].innerHTML;
    var url = "https://todo98123.herokuapp.com/posts/" + m;
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function () {

    }
    xhr.send(null);
    
    setTimeout(function () { window.location.reload(); }, 600);
}
 
