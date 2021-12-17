//success messagen for registration
function logSubmit(event) {
    alertBox1.style.display = "block";
    event.preventDefault();
}
var alertBox1 = document.getElementById("alert-box-1");
var form = document.getElementById('form');
var msg = document.getElementById('msg');
form.addEventListener('submit', logSubmit);



var sähköposti = document.getElementById("posti");
var ky_koko = document.getElementById("ky_koko");
var monot_koko = document.getElementById("monot_koko");
var sukset_koko = document.getElementById("sukset_koko");

ky_koko.disabled = true;
monot_koko.disabled = true;
sukset_koko.disabled = true;


// email select

function mailSelect() {

    if (sähköposti.value != "") {

        ky_koko.disabled = false;
        monot_koko.disabled = false;
        sukset_koko.disabled = false;
    }

    if (sähköposti.value == "") {

        ky_koko.disabled = true;
        monot_koko.disabled = true;
        sukset_koko.disabled = true;

    }
}

//Väline_vuokra_form
var vaara_button = document.getElementById("vaara_button");
vaara_button.disabled = true; //vaara buuton is disabled 
vaara_button.style.background = "grey"; // vaara button grey 
vaara_button.style.border = "grey";



/*Enables the button when any one of the select value is not null and disables when it is not selected */



function selectKoko() {


    if (ky_koko.value != '' || monot_koko.value != '' || sukset_koko.value != '') {
        vaara_button.disabled = false;
        vaara_button.style.background = "#000C66";
        vaara_button.style.border = "#000C66";
    }

    if (ky_koko == '' && monot_koko == '' && sukset_koko == '') {
        vaara_button.disabled = true;
        vaara_button.style.background = "grey";
        vaara_button.style.border = "grey";

    }
    /*Changes the price of kypärät based on the size */
    var kyky_price = document.getElementById("kyky_price");

    if (ky_koko.value == '47-51') {

        kyky_price.innerHTML = '5 &euro;';

    }
    if (ky_koko.value == '51-54') {

        kyky_price.innerHTML = '7 &euro;';
    }
    if (ky_koko.value == '54-58') {

        kyky_price.innerHTML = ' 9 &euro;';
    }

    //changes the price of monot based on the size

    var monot_price = document.getElementById("monot_price");
    if (monot_koko.value == "15") {
        monot_price.innerHTML = "10 &euro;";
    }
    if (monot_koko.value == "16") {
        monot_price.innerHTML = "12 &euro;";
    }
    if (monot_koko.value == "17") {
        monot_price.innerHTML = "14 &euro;";
    }
    if (monot_koko.value == "18") {
        monot_price.innerHTML = "16 &euro;";
    }
    if (monot_koko.value == "19") {
        monot_price.innerHTML = "18 &euro;";
    }
    if (monot_koko.value == "20") {
        monot_price.innerHTML = "20 &euro;";
    }
    if (monot_koko.value == "21") {
        monot_price.innerHTML = "22 &euro;";
    }

    var sukset_price = document.getElementById("sukset_price");

    if (sukset_koko.value == "116") {
        sukset_price.innerHTML = "10 &euro;";
    }
    if (sukset_koko.value == "120") {
        sukset_price.innerHTML = "12 &euro;";
    }
    if (sukset_koko.value == "128") {
        sukset_price.innerHTML = "14 &euro;";
    }
    if (sukset_koko.value == "134") {
        sukset_price.innerHTML = "16 &euro;";
    }

}

/*to display alert box  and disables the select */
function reserve() {
    document.getElementById("alert-box").style.display = "block";
    ky_koko.disabled = true;
    monot_koko.disabled = true;
    sukset_koko.disabled = true;

    vaara_button.disabled = true; //vaara buuton is disabled 
    vaara_button.style.background = "grey"; // vaara button grey 
    vaara_button.style.border = "grey";

    sähköposti.disabled = true;

    /*display mail id in alert */


    var mail = document.getElementById("mail");

    mail.innerHTML = sähköposti.value;


}