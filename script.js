console.log('script....');
document.getElementById("quizdiv").style.display = "none";
var n, phi, evalue, d, encmsg, decmsg, p, q;
function pqupdate() {
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;    
    document.getElementById('p1').innerHTML = document.getElementById('p').value;
    document.getElementById('q1').innerHTML = document.getElementById('q').value;
    n = document.getElementById('p').value * document.getElementById('q').value;
    phi = (document.getElementById('p').value - 1) * (document.getElementById('q').value - 1);
    document.getElementById('p1q1').innerHTML = n;
    document.getElementById('phi').innerHTML = phi;
    //console.log(document.getElementById('p').value);
}
function pb() {
    var e = document.getElementById("e");    
    evalue = parseInt(e.options[e.selectedIndex].value);
    document.getElementById('pbkey').innerHTML = evalue + ',' + n;
    console.log(evalue + ',' + n);

}
function add(x) {
    var option = document.createElement("option");
    option.text = x;
    option.value = x;
    var select = document.getElementById("e");
    select.appendChild(option);
}
function ecalc() {
    var e;
    for (e = 2; e < phi; e++) {
        if (gcd(e, phi) == 1 && e != p && e != q)    // e is for public key exponent
        {
            add(e);
            break;
        }
    }
}
function prkey() {
    var i;
    for (i = 1; i <= 9; i++) {
        var x = 1 + (i * phi);
        if (x % evalue == 0)      //d is for private key exponent
        {
            d = x / evalue;
            console.log(d);
            break;
        }
    }
    document.getElementById('prkey').innerHTML = d + ',' + n;
}
function gcd(e, z) {
    if (e == 0)
        return z;
    else
        return gcd(z % e, e);
}
function get_encrypt() {
    var msg = document.getElementById('message').value;
    encmsg = Math.pow(parseInt(msg), evalue) % n;
    document.getElementById('encmsg').innerHTML = encmsg;
    document.getElementById('encmsg1').innerHTML = encmsg;
}
function recieve() {
    var N = BigInt(n);
    decmsg = pow(encmsg, d) % N;
    document.getElementById('decmsg').innerHTML = decmsg;
    document.getElementById('sending').style.display = 'none';
    document.getElementById('gif').innerHTML = '<img src="decryption.gif" width="650px" height="250px" style="background: transparent;">';
    document.getElementById('decrypted').style.display = 'block';
    document.getElementById('quizalert').innerHTML = "Attempt the task given below!";
    document.getElementById("quizdiv").style.display = "block";
}


function pow(a, b) {
    var p = BigInt(a)
    var s = BigInt(1), i;
    for (i = 1; i <= b; i++) {
        s = s * p;
    }
    return s;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function reset(){
   window.location.reload();
}



function viewresult() {
    var qans = 0;
    var selected = 0;

    //checking for total marked answers
    if (document.getElementById("op11").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op12").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op13").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op14").checked == true) {
        selected = selected + 1;
    }
    //question 2
    if (document.getElementById("op31").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op32").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op33").checked == true) {
        selected = selected + 1;
    }
    if (document.getElementById("op34").checked == true) {
        selected = selected + 1;
    }
   

    if (selected == 2) {
        //checking users response
        if (document.getElementById("op11").checked == true) {
            document.getElementById("lop11").style.color = 'red'; // red or #fffff
        }
        if (document.getElementById("op12").checked == true) {
            document.getElementById("lop12").style.color = 'red';
        }
        if (document.getElementById("op13").checked == true) {
            document.getElementById("lop13").style.color = 'red';
        }
        if (document.getElementById("op14").checked == true) {
            document.getElementById("lop14").style.color = 'red';
        }
        //question 2
        if (document.getElementById("op31").checked == true) {
            document.getElementById("lop31").style.color = 'red';
        }
        if (document.getElementById("op32").checked == true) {
            document.getElementById("lop32").style.color = 'red';
        }
        if (document.getElementById("op33").checked == true) {
            document.getElementById("lop33").style.color = 'red';
        }
        if (document.getElementById("op34").checked == true) {
            document.getElementById("lop34").style.color = 'red';
        }        


        //checking correct answers
        if (document.getElementById("op12").checked == true) {
            qans = qans + 1;
        }
        
        if (document.getElementById("op32").checked == true) {
            qans = qans + 1;
        }
        
        //marking correct answers
        document.getElementById("lop12").style.color = '#2fd677';        
        document.getElementById("lop32").style.color = '#2fd677';                

        //Rating according to number of correct answers
        document.getElementById('score').innerHTML = "Your score is " + qans + "/5.";
        document.getElementById('quizsubmit').disabled = true;
        document.getElementById('quizsubmit').style.backgroundColor = 'grey';
    }
    else {
        document.getElementById('score').innerHTML = "Attempt all questions!";
        document.getElementById("score").style.color = 'red';
    }
}
