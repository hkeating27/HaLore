/* These four functions all define how the article changes when nav buttons are pushed */

/* I attempted to start by making one function and passing a value, but didn't get far, so I had to hardcode. 
    multiple versions of the same function. Adding more buttons using this method would be inefficient, so 
    any more than five/six buttons would require a rewrite */

/* Each function sets the others to "none" and becomes a "block". The default displayed is Home */

    function showHome() {      
        var x = document.getElementById("Home");
        x.style.display = "block";
        x = document.getElementById("Characters");
        x.style.display = "none";
        x = document.getElementById("Factions");
        x.style.display = "none";
        x = document.getElementById("Contact");
        x.style.display = "none";
    }


    function showCharacters() {      
        var x = document.getElementById("Home");
        x.style.display = "none";
        x = document.getElementById("Characters");
        x.style.display = "block";
        x = document.getElementById("Factions");
        x.style.display = "none";
        x = document.getElementById("Contact");
        x.style.display = "none";
    }



    function showFactions() {      
        var x = document.getElementById("Home");
        x.style.display = "none";
        x = document.getElementById("Characters");
        x.style.display = "none";
        x = document.getElementById("Factions");
        x.style.display = "block";
        x = document.getElementById("Contact");
        x.style.display = "none";
    }


    function showContact() {      
        var x = document.getElementById("Home");
        x.style.display = "none";
        x = document.getElementById("Characters");
        x.style.display = "none";
        x = document.getElementById("Factions");
        x.style.display = "none";
        x = document.getElementById("Contact");
        x.style.display = "block";
    }

    //This function switches to the new theme
    function switchTheme() {
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "css/theme.css";
        link.name = "New Theme";
        link.id = "themeSheet";
        head.appendChild(link);
        document.getElementById("swapButton").childNodes[0].nodeValue= "Dark Theme On";
}
