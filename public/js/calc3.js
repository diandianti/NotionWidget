var lightbtn = document.getElementById('light');
var back = document.getElementById('main');
var cont = document.getElementById('container');
var items = document.querySelectorAll(".griditem");
var nums = document.getElementsByName('numo');
var numst = document.getElementsByName('nump');

console.log(lightbtn.classList);
lightbtn.addEventListener('click', function () {
    if (lightbtn.classList.contains('fa-moon')) {
        lightbtn.classList.replace('fa-moon', 'fa-sun')
        back.style.backgroundColor = "#212121";
        cont.style.backgroundColor = "#3a4042";
        for (var j = 0, max = nums.length; j < max; j++) {
            
            nums[j].style.backgroundColor = "#212529";
            nums[j].style.color = "#f5f5f5";
            
        }
        

    } else {
        lightbtn.classList.replace('fa-sun', 'fa-moon')
        back.style.backgroundColor = "#f5f5f5";
        cont.style.backgroundColor = "#ffffff";
        for (var j = 0, max = nums.length; j < max; j++) {
            
            nums[j].style.backgroundColor = "#eeeeee";
            nums[j].style.color = "#2d4059";
        }

    }
})


var output = document.getElementById("fetch");
var calcu = document.getElementById('retrive');
var calc_val = (calcu.innerText)

document.addEventListener('keydown', (k)=> {
    var key = k.keyCode;
    var character = (String.fromCharCode(k.keyCode))
    console.log(character)
    if (calc_val == '0') {
        calc_val = "";
    }
    if (isFinite(parseInt(character)) )
    {
        calc_val += (character);    
    }
    else if(key == 13)
    {
        
        output.value = eval(calc_val)
        calc_val = output.value;

    }
    else if(character == "¿")
    {
        calc_val += "/" 
    }
    else if(key == 187)
    {
    
        calc_val += "+" 
    }
    else if(key == 189)
    {
     
        calc_val += "-" 
    }
    else if(character == "")
    {
     calc_val = calc_val.slice(0, calc_val.length - 1);
            output.value = 0;
            if(calc_val.length == 0)
            {
                calc_val = "0";
            }
    }

    


    calcu.innerText = calc_val;
})



for (x of items) {

    x.addEventListener('click', (e) => {
        if (calc_val == '0') {
            calc_val = "";
        }

        itemtext = e.target.innerText;
        
        if (itemtext == "✕") {
            itemtext = "*";
        } else if (itemtext == "÷") {
            itemtext = "/";
        }
        
        calc_val += itemtext;
        //avoiding more than one operators
        //FOR SAME
        if (calc_val[calc_val.length - 1] == ("+") && calc_val[calc_val.length - 2] == "+") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "-" && calc_val[calc_val.length - 2] == "-") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "*" && calc_val[calc_val.length - 2] == "*") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "/" && calc_val[calc_val.length - 2] == "/") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        }
        //+
        else if (calc_val[calc_val.length - 1] == "+" && calc_val[calc_val.length - 2] == "-") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "+" && calc_val[calc_val.length - 2] == "*") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "+" && calc_val[calc_val.length - 2] == "/") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        }
        //-
        else if (calc_val[calc_val.length - 1] == "-" && calc_val[calc_val.length - 2] == "*") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "-" && calc_val[calc_val.length - 2] == "+") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "-" && calc_val[calc_val.length - 2] == "/") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        }
        //*
        else if (calc_val[calc_val.length - 1] == "*" && calc_val[calc_val.length - 2] == "+") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "*" && calc_val[calc_val.length - 2] == "-") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "*" && calc_val[calc_val.length - 2] == "/") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        }
        // /
        else if (calc_val[calc_val.length - 1] == "/" && calc_val[calc_val.length - 2] == "+") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "/" && calc_val[calc_val.length - 2] == "-") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        } else if (calc_val[calc_val.length - 1] == "/" && calc_val[calc_val.length - 2] == "*") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
        }


        if (itemtext == "C") {
            calc_val = calc_val.slice(0, calc_val.length - 2);
            output.value = 0;
            if(calc_val.length == 0)
            {
                calc_val = "0";
            }
        } else if (itemtext == "=") {
            calc_val = calc_val.slice(0, calc_val.length - 1);
            output.value = eval(calc_val)
            

        }

        calcu.innerText = calc_val;

        if (itemtext == "=") {
            calc_val = output.value;
            calcu.innerText = calc_val;

        }

    })

}