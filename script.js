console.log('script....');
var n,phi,evalue,d,encmsg,decmsg;
function pqupdate(){
    document.getElementById('p1').innerHTML=document.getElementById('p').value; 
    document.getElementById('q1').innerHTML=document.getElementById('q').value;    
    n=document.getElementById('p').value*document.getElementById('q').value;
    phi=(document.getElementById('p').value-1)*(document.getElementById('q').value-1);
    document.getElementById('p1q1').innerHTML=n;
    document.getElementById('phi').innerHTML=phi;
    //console.log(document.getElementById('p').value);
}
function pb(){
    var e = document.getElementById("e");
    evalue = parseInt(e.options[e.selectedIndex].value);
    document.getElementById('pbkey').innerHTML=evalue+','+n;
    console.log(evalue+','+n);
    
}
function add(x){
    var option = document.createElement("option");
    option.text = x;
    option.value = x;
    var select = document.getElementById("e");
    select.appendChild(option);
}
function ecalc(){
    var e;
    for(e=2;e<phi;e++)
    {
        if(gcd(e,phi)==1)    // e is for public key exponent
        { 
            add(e);  
            break;
        }
    }
}
function prkey(){
    var i;
    for(i=0;i<=9;i++)
    {
        var x=1+(i*phi);
        if(x%evalue==0)      //d is for private key exponent
        {
            d=x/evalue;
            console.log(d);            
            break;
        }
    }    
    document.getElementById('prkey').innerHTML=d+','+n;
}
function gcd(e,z)
{
    if(e==0)
        return z; 
    else
        return gcd(z%e,e);
}
function get_encrypt(){
    var msg=document.getElementById('message').value;    
    encmsg=Math.pow(parseInt(msg),evalue)%n;
    document.getElementById('encmsg').innerHTML=encmsg;
    document.getElementById('encmsg1').innerHTML=encmsg;
}
function recieve(){
    var N=BigInt(n);
    decmsg=pow(encmsg,d)%N;    
    document.getElementById('decmsg').innerHTML=decmsg;
    document.getElementById('sending').style.display='none';
    document.getElementById('decrypted').style.display='block';
}


function pow(a,b){
    var p=BigInt(a)
    var s=BigInt(1),i;
    for(i=1;i<=b;i++){
        s=s*p;
    }      
    return s;    
}
