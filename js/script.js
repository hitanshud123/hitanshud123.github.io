// when you click get-started, stores the inputted name into name

// const { title } = require("process");

var link; //namelink;
var widthlink;
var heightlink;
var image;
var myStorage = window.localStorage;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
var mouseX,mouseY
function onMouseUpdate(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

function initialize() {
    /* Welcome Message */
    localStorage.setItem('widgets', [0,3]);

    // localStorage.setItem('name', name)
    document.getElementById("outputText").innerHTML = "Welcome, " + myStorage.getItem('name') + "!";
    //document.getElementById("outputText").innerHTML = "Welcome, " + name + "!";

    /* Change Background Colour */
    document.getElementById('forest-green').addEventListener('click', function () {
        document.body.style.background = '#3DB85E';
        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#3FBD61";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('lime').addEventListener('click', function () {
        document.body.style.background = '#87FF91';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#9DFFA6";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('turquoise').addEventListener('click', function () {
        document.body.style.background = '#7EE7D0';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#81EBD4";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('sky-blue').addEventListener('click', function () {
        document.body.style.background = 'skyblue';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#8AD4F1";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('pink').addEventListener('click', function () {
        document.body.style.background = '#FFDDF9';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#FFE1FA";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('purple').addEventListener('click', function () {
        document.body.style.background = '#FD9AFF';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#FDA2FF";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    document.getElementById('red').addEventListener('click', function () {
        document.body.style.background = '#FF6767';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#FF6C6C";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black';
        document.getElementById("time-weather").style.color = 'black';
    });

    /* Light Mode */
    document.getElementById('light-mode').addEventListener('click', function () {
        document.body.style.background = 'white';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#F5F5F5";
        }

        document.getElementById("outputText").style.color = 'black';
        document.getElementsByTagName("a")[0].style.color = 'black';
        document.getElementsByTagName("a")[1].style.color = 'black';
        document.getElementsByTagName("a")[2].style.color = 'black'; document.getElementById("time-weather").style.color = 'black';
    });

    /* Dark Mode */
    document.getElementById('dark-mode').addEventListener('click', function () {
        document.body.style.background = '#212121';

        for (var i = 0; i < (document.querySelectorAll('.empty-widget')).length; i++) {
            document.querySelectorAll('.empty-widget')[i].style.backgroundColor = "#252525";
        }

        document.getElementById('outputText').style.color = 'white';
        document.getElementsByTagName("a")[0].style.color = 'white';
        document.getElementsByTagName("a")[1].style.color = 'white';
        document.getElementsByTagName("a")[2].style.color = 'white';
        document.getElementById("time-weather").style.color = 'white';
    });



    
    /* Get Data URL */
    document.querySelector('#photo').addEventListener("change", function() {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            localStorage.setItem("recent-image", reader.result);
        });

        reader.readAsDataURL(this.files[0]);
    });
    

    /* Create Widget onClick */
    document.querySelector('#add').addEventListener("click", function() {
        const recentImageDataUrl = localStorage.getItem("recent-image");

        if (recentImageDataUrl) {
            addLinkWidget(col, row, parseInt(myStorage.getItem('width')),
             parseInt(myStorage.getItem('height')), myStorage.getItem('title'),
              myStorage.getItem('link'), "red", recentImageDataUrl)
        }
    });
    
    /* Get Edit Photo URL */
    document.querySelector('#edit-photo').addEventListener("change", function() {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            localStorage.setItem("recent-image", reader.result);
        });

        reader.readAsDataURL(this.files[0]);
    });

    /* Edit Widget onClick */
    
    document.querySelector('#edit-widget').addEventListener("click", function() {
        const recentImageDataUrl = myStorage.getItem("recent-image");
        document.getElementById(col + "," + row).remove()
        myStorage.setItem('title', document.getElementById("edit-name-link").value)
        myStorage.setItem('link', document.getElementById("edit-link").value)
        myStorage.setItem('width', document.getElementById("edit-width").value)
    myStorage.setItem('height', document.getElementById("edit-height").value)
        if (recentImageDataUrl) {
            //updateWidget();
            addLinkWidget(col, row, parseInt(myStorage.getItem('width')),
             parseInt(myStorage.getItem('height')), myStorage.getItem('title'),
              myStorage.getItem('link'), "red", recentImageDataUrl)
              
        }
        document.getElementById("edit-modal").style.display = 'none';

    });
    
}





function resetName() {
    getName();

    document.getElementById('settings-modal').style.display = 'none';

    document.getElementById("outputText").innerHTML = "Welcome, " + myStorage.getItem('name') + "!";

    document.getElementById('name').value = "";
}

function getName() {
    localStorage.setItem('name', document.getElementById("name").value);
}

// changes css to flex when clicked so settings box opens
document.getElementById('open-settings').addEventListener('click', function () {
    document.getElementById('settings-modal').style.display = 'flex';
});

// changes css to none when clicked so settings box closes
document.getElementById('settings-close').addEventListener('click', function () {
    document.getElementById('settings-modal').style.display = 'none';
});

var row, col;
function addNew(x = 1) {
    
getRowCol();
    
    document.getElementById('add-new-modal').style.display = 'flex';
}

function getRowCol() {
    const rect = document.getElementById("time-weather").getBoundingClientRect();
    // const gridComputedStyle = window.getComputedStyle(document.getElementById("widget-grid"));

    // const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
    
    // const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        const width = rect.width/3;
        const yPos = mouseX - (window.innerWidth) * 0.02
        col = Math.ceil(yPos / width);
        const height = rect.height;
        const xPos = mouseY - (window.innerHeight) * (0.02 + 0.96 * 0.2);

        row = Math.ceil(xPos / height);
    console.log(col,row)
}

// changes css to none when clicked so settings box closes
document.getElementById('add-new-close').addEventListener('click', function () {
    document.getElementById('add-new-modal').style.display = 'none';
})

function editWidget() {
    getRowCol();
    document.getElementById('edit-modal').style.display = 'flex';
}

document.getElementById('edit-close').addEventListener('click', function () {
    document.getElementById('edit-modal').style.display = 'none';
})

// help box
function openhelp() {
    document.getElementById('help').style.display = 'flex';
}

// help box
function closehelp() {
    document.getElementById('help').style.display = 'none';
}



function addLinkWidget(xPos, yPos, width, length, title, link, colour = "grey", image = "n/a") {
    var p = document.getElementById("widget-grid");
    var widget = document.createElement("div");
    widget.setAttribute('onclick', "window.open('" + link + "','mywindow'); event.cancelBubble = true; if (event.stopPropagation) event.stopPropagation(); return false;");
    widget.setAttribute('class', "widget");
    widget.setAttribute('id', xPos + "," + yPos);
    widget.setAttribute('target', "_blank");

    widget.style.gridColumn = xPos + "/" + (xPos + width);
    widget.style.gridRow = yPos + "/" + (yPos + length);


    if (image != "n/a") {
        console.log("image")
        widget.style.backgroundImage = "url('" + image + "')";
        widget.style.backgroundSize = "cover";
        widget.style.backgroundRepeat = "no-repeat";
    } else {
        widget.style.backgroundColor = colour;

    }

    var edit = document.createElement("div");
    edit.innerHTML = "Edit";
    edit.setAttribute('onclick', 'editWidget(); event.cancelBubble = true; if (event.stopPropagation) event.stopPropagation(); return false;')
    edit.setAttribute('class', 'widget-edit-button')
    var titleTag = document.createElement("div")
    titleTag.innerHTML = title;
    titleTag.width = "100%";
    widget.appendChild(edit);
    widget.appendChild(titleTag);
    p.appendChild(widget); 

    //widget.setAttribute('onmouseout', 'widgetNormal()')

}

function showTimeWeather() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time-weather").innerText = time;
    document.getElementById("time-weather").textContent = time;
    
    setTimeout(showTimeWeather, 1000);
    
}
showTimeWeather();

function storeinput() {    

    myStorage.setItem('title', document.getElementById("name-link").value)
    myStorage.setItem('link', document.getElementById("link").value)
    //imgData = getBase64Image(document.getElementById('image'));
    image = document.getElementById('image');
    //localStorage.setItem("imgData", imgData);
    myStorage.setItem('width', document.getElementById("width").value)
    myStorage.setItem('height', document.getElementById("height").value)
    //(col, row, parseInt(myStorage.getItem('width')), parseInt(myStorage.getItem('height')), myStorage.getItem('title'), myStorage.getItem('link'), "red", "../img/background2.png")


        // localStorage.setItem("img", loadFile());

    document.getElementById('name-link').value = "";
    document.getElementById('link').value = "";
    document.getElementById('photo').value = "";
    document.getElementById('width').value = "";
    document.getElementById('height').value = "";

    // console.log(namelink);
    // console.log(image);
    // console.log(link);
    // console.log(widthlink);
    // console.log(heightlink);
    // console.log(namelink);
    // console.log(image);
    // console.log(link);
    // console.log(widthlink);
    // console.log(heightlink);
    // console.log(namelink);
    // console.log(image);
    // console.log(link);
    // console.log(widthlink);
    // console.log(heightlink);
    document.getElementById("add-new-modal").style.display = 'none';
    

}
function updateWidget() {
    document.getElementById(col + "," + row).remove()
    myStorage.setItem('title', document.getElementById("edit-name-link").value)
    myStorage.setItem('link', document.getElementById("edit-link").value)
    //imgData = getBase64Image(document.getElementById('image'));

    
    //img = document.getElementById('edit-photo');
    //localStorage.setItem("imgData", imgData);

    //if img upload is empty, then return the old picture
    if ((document.getElementById('#edit-photo')).length != 0) {
        image = document.getElementById('#edit-photo');
    } else {
        image = myStorage.getItem('recent-image');
    }

    myStorage.setItem('width', document.getElementById("edit-width").value)
    myStorage.setItem('height', document.getElementById("edit-height").value)
    //addLinkWidget(col, row, parseInt(myStorage.getItem('width')), parseInt(myStorage.getItem('height')), myStorage.getItem('title'), myStorage.getItem('link'), "red", "../img/background2.png")
    //addLinkWidget(col, row, parseInt(myStorage.getItem('width')), parseInt(myStorage.getItem('height')), myStorage.getItem('title'), myStorage.getItem('link'), "red", image)

        // localStorage.setItem("img", loadFile());

    document.getElementById('edit-name-link').value = "";
    document.getElementById('edit-link').value = "";
    document.getElementById('edit-photo').value = "";
    document.getElementById('edit-width').value = "";
    document.getElementById('edit-height').value = "";

    document.getElementById("edit-modal").style.display = 'none';

}

function deleteWidget() {   
    document.getElementById(col + "," + row).remove()
    document.getElementById("edit-modal").style.display = 'none';

}
// var loadFile = function(event) {
//     var image = document.getElementById('output');
//     image.src = URL.createObjectURL(event.target.files[0]);
// };


































