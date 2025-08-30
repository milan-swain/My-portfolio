//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //if want to use animation that repeate an scroll use this
        else{
            sec.classList.remove('show-animate');

        }
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate' , this.innerHeight + this.scrolly >= document.scrollingElement.
    scrollHeight);

}


document.getElementById("downloadButton").addEventListener("click", function() {
    // Create a dummy file URL (replace with your actual file URL)
    var fileUrl = "F:/cv/N.Nihar J";
    
    // Create a link element
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "N.Nihar J.pdf"; // Specify the desired file name

    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);



    //------------------------------------------

   const form = document.querySelector("form"),
   statusTxt = form.querySelector(".btn-box btns span");

   form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "white";
    statusTxt.style.display = "block";
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST","Index.php",true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!") ){
            statusTxt.style.color = "red";
        }else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";
            },3000);
        }
        statusTxt.innerText = response;
      }
    }
    let formData = new FormData(form);
    xhr.send();
   }
      
});