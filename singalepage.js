function reloaddataHome(){
    var data = new XMLHttpRequest;
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('home').innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById('home').innerHTML = "File not Found!";
        }
    }

    data.open('GET', "./showdata/home.html", true);
    data.send();
}


function reloaddataAbout(){
    var data = new XMLHttpRequest;
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('home').innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById('home').innerHTML = "File not Found!";
        }
    }

    data.open('GET', "./showdata/about.html", true);
    data.send();
}

function reloaddataServices(){
    var data = new XMLHttpRequest;
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('home').innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById('home').innerHTML = "File not Found!";
        }
    }

    data.open('GET', "./showdata/services.html", true);
    data.send();
}

function reloaddataImage(){
    var data = new XMLHttpRequest;
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('home').innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById('home').innerHTML = "File not Found!";
        }
    }

    data.open('GET', "./showdata/image.html", true);
    data.send();
}