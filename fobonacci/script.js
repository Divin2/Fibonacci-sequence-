function CustomAlert() {
    
    this.render = function() {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        var button = document.getElementById('button')
        
        
        var numberEntered = document.getElementById('txtNumber').value;
        var counter = 1;
        var fib = [];

        if (numberEntered == 0) {
            fib = [0];
            document.getElementById('dialogboxbody').innerHTML = fib;
        } else if(numberEntered == 1){
            fib = [1];
            document.getElementById('dialogboxbody').innerHTML = fib;
        } else if(numberEntered == 2){
            fib = [1, 1];
            document.getElementById('dialogboxbody').innerHTML = fib;
        } else if(numberEntered > 2){
            fib = [1, 1];
            while (counter < (numberEntered - 1)) {
                fib.push(fib[counter] + fib[counter - 1]);
                counter++;
            }
            document.getElementById('dialogboxbody').innerHTML = fib;
        }

 
       
        dialogbox.style.top = "30";
        dialogbox.style.display = "flex";
        dialogbox.style.visibility="hidden"
        button.onclick=function(){
        dialogbox.style.visibility="visible"
        }
        
        document.getElementById('dialogboxhead').innerHTML = "Your Fibonacci Sequence is: ";
        // document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="button" onclick="Alert.ok()">OK</button>';
    }
    
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogbox').style.textAlign = "center";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Alert = new CustomAlert();
