
// NAVBAR TRANSPARENT TO FONT COLOR

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
	  
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-sticky";
    document.getElementById("headertext").className = "navbar-brand headertext-bgwhite";
	
  } else {
	  
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-fixed";
	document.getElementById("headertext").className = "navbar-brand headertext";
  }
}

// AUTOMATED CAROUSEL
$('.carousel').carousel({
    interval: 2000
})

/*// CAPTCHA
var verifyCallback = function(response) {
    document.getElementById("sub").innerHTML = "<input type='submit' name='submit' class='btn btn-primary w-100 d-block' value='Envoyer'>"; 
};
	  
var onloadCallback = function() {
    grecaptcha.render('recaptcha', {
        'sitekey' : '6Ldn_uQUAAAAAJUIocVy53lqrQF0voJCozSTrVOV',
        'callback' : verifyCallback,
        'theme' : 'light'
    });
};
*/
