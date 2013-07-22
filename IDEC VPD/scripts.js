


/*var d_5oo = Idec.device_read("D", 500, 1, 0, 0);
var savedState = 0;

function changeState(newState) {
    //var d_5oo = Idec.device_read("D", 500, 1, 0, 0);
    var eleButton = document.getElementById('stateButton');
    if (newState == 1) {
        eleButton.innerHTML = "On";
        // eleButton.class = "stateOn";
        eleButton.setAttribute('class', "stateOn");
    }
    else if (newState == 0) {
        eleButton.innerHTML = "Off";
        // eleButton.class = "stateOff";
        eleButton.setAttribute('class', "stateOff");
    }
    else {
        if (savedState == 1) {
            changeState(0);
            savedState = 0;
        }
        else {
            changeState(1);
            savedState = 1;
        }
    }
}
*/
var savedState = 0;

function buttonState(newState){

    var dR_5oo = Idec.device_read("D", 500, 1, 0, 0); //Get initial Button State
    var savedState = d_5oo;
    var b_State = document.getElementById('stateButton');
    // Initialize button state
    if (savedState == 1) {
        b_State.innerHTML = "On";
        b_State.setAttribute('class', "stateOn");
    }
    else if (savedState == 0) {
        b_State.innerHTML = "Off";
        b_State.setAttribute('class', "stateOff");
    }
    else {
        if (savedState == 1) {
            changeState(0);
            savedState = 0;
            var dW_500 = Idec.device_write("D", 500, 1, 0,0, "0");
        }
        else {
        changeState(1);
        savedState = 1;
        var dW_500 = Idec.device_write("D", 500, 1, 0 ,0, "1");
        }
    }
}
