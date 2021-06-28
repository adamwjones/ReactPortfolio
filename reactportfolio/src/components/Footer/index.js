import React, {useEffect } from "react";
import "./style.css"




function Footer() {

        useEffect(()=>{ 
        let mybutton = document.getElementsByClassName("fa")[0];
        window.onscroll = function() {scrollFunction()};

        mybutton.style.display = "none";
    
        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    })
    
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        }
    

//     useEffect(() => {
//     const switchLogo =(() => {
//         if(window.location.pathname === "/resume" || window.location.pathname === "/contact"){
//             document.getElementsByClassName("blackLogo")[0].style.display = "none";
//             }

//         else {
//             document.getElementsByClassName("whiteLogo")[0].style.display = "none";
//         }
//     })
//     switchLogo();
// })


    return (
    <footer className='footer'>
        <i variant="info" onClick={topFunction} className="upArrow fa fa-long-arrow-up" id="scrollBTN " title="Go to top"></i>
        <div className="blackLogo">
        <a href="https://www.linkedin.com/in/adam-w-jones-6403bb3a/"><img src="../assets/linkedinlogo.svg" alt="Linkedin logo" className="linkedin aTag" ></img></a>
        <a href="https://github.com/adamwjones"><img src="../assets/githublogo.svg" alt="Github logo" className="Github aTag" ></img></a>
        </div>    
    </footer>
    );
}

export default Footer;