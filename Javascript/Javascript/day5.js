function check(){
    // var v1=document.getElementById("para");
    // v1.innerText="Who are you";
    // v1.style.backgroundcolor="red";
    // document.writeln(v1.innerText);
    // document.writeln(v1.style.backgroundcolor);
    let paragraph=document.createElement("p");
    paragraph.textContent="This is created by me";
    document.getElementsByClassName("example")[0].appendChild(paragraph)

    let header=document.createElement("h2");
    header.textContent="this is js";
    document.getElementsByClassName("example")[0].appendChild(header);
}