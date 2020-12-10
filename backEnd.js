var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var elem = this.nextElementSibling;
        if (elem.style.maxHeight){
        elem.style.maxHeight = null;
        this.lastElementChild.innerHTML = "+";
        elem.style.padding = "0 18px";
        elem.style.marginBottom = "0";
        elem.style.border = "none";

    }

    else {
        elem.style.maxHeight = "3000px";
        this.lastElementChild.innerHTML = "-";
        elem.style.padding = "18px 18px 18px 18px";
        elem.style.marginBottom = "20px";
        elem.style.border = "3px solid";

    }
  });
}
