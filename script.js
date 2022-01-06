

// ------------------jquery area-----------------


$(document).ready(function (){

    // for explore and find the job  area

    $(".for-hide").click(function (){
        $(".for-hide").hide();
        $(".right-ex-secondary").css("display", "block");
        $(".show-less-hide").show();
        
    });

    $(".show-less-hide").click(function (){
        $(".show-less-hide").hide();
        $(".right-ex-secondary").css("display", "none");
        $(".for-hide").show();
        
       
        
    });

    // conent with people area

    $(".choose-title h3").click(function (){
        $(".choose-single-item").toggleClass("choose-single-visible");
    });


    // form validation

    $(".loginButton").on({
        click: function () {
            // $(".agree-and-joinButton-area strong").css("bottom", "21%");
            return passwordVal();
        },
        focus: function () {
            return emlval();
        },
        
    });

    // password eye section
    
    $(".fa-eye-slash").click(function () {
        $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye');
        $('#pass').get(0).type = 'text';
    });

    $(".fa-eye").click(function () {
        $(this).toggleClass('fa-eye').toggleClass('fa-eye-slash');
        // $(".join-password-area input[type=password]").css("type", "text")
        $('#pass').get(-1).type = 'text';
    });


    // feed header search area-----------

    $(".feed-header-search-area").click(function(){
    //    $(this).css({"width": "300px" , "transition": ".7s"});
       $(this).toggleClass('feed-header-search-area-click');
    });

    $(".after-header-all-wrap").click(function(){
        //    $(this).css({"width": "300px" , "transition": ".7s"});
           $(".feed-header-search-area").removeClass('feed-header-search-area-click');
    });
    

    // message area for jq

    $(".chat-box-angle-down").click(function (){
        $(".messessing-chat-box-whole-wrap-with-out-myProfile").toggleClass('active');
        $(this).toggleClass("fa-angle-up").toggleClass("fa-angle-down");
    });

    $(".for-fixed-header-reosponsive-message-area").click(function (){
        $(".messessing-chat-box-whole-wrap-with-out-myProfile").toggleClass('active');
        $("i").toggleClass("fa-angle-up").toggleClass("fa-angle-down");
    });

    $(".feed-main-body-three-section-wrap").click(function(){
        $(".messessing-chat-box-whole-wrap-with-out-myProfile").removeClass('active');
    });

    $(".messessing-show-message").click(function (){
        $(this).toggleClass("active");
        $(".messessing-chat-box-whole-wrap-with-out-myProfile").toggleClass('active');
        $("i").toggleClass("fa-angle-up").toggleClass("fa-angle-down");
    });

    // me profile area

    $(".myprofile-img").click(function(){
        $(".me-profile-header-after-area-wrap").toggleClass("active");
    });

    $(".for-fixed-header-responsive-img").click(function (){
        $(".me-profile-header-after-area-wrap").toggleClass("active");
    });

    $(".feed-main-body-three-section-wrap").click(function(){
        $(".me-profile-header-after-area-wrap").removeClass("active");
    })
    


});



//---------------------- end jquery area--------------------------



// swiper script area

const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 3700,
    disableOninteraction: false,
    },
    
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },  
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    
});




function emlval() {

    // email validation
    const emailinput = document.getElementById("email").value;
    const regemail = /^([a-zA-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,7})(.[a-z]{2,6})?$/;
    
        
        
    if (regemail.test(emailinput)) {

        document.getElementById("email").style.border = "1.7px solid green";
        document.querySelector(".join-email-area small").style.display = "none";
        document.querySelector(".join-email-area strong").style.display = "none";
        document.getElementById("email").style.outline = "none";
        $('input').removeClass('your-class');
        return true
            
    }

    else if(emailinput === "") {
        document.querySelector(".join-email-area small").style.display = "block";
        document.getElementById("email").style.border = "1.7px solid red";
        $('input').addClass('your-class');
        document.querySelector(".join-email-area strong").style.display = "none";
        return false
    }

    else  {
        document.querySelector(".join-email-area strong").style.display = "block";
        document.getElementById("email").style.border = "1.7px solid red";
        document.getElementById("email").style.outline = "1.7px solid red";
        document.querySelector(".join-email-area small").style.display = "none";
        return false
    }
        
   
   

}



function passwordVal() {

    // pass validation
    const passwordVal = document.getElementById("pass").value.trim();
    
    
    if (passwordVal === "") {


        document.querySelector(".join-password-area small").style.display = "block";
        document.querySelector(".join-password-area strong").style.display = "none";
        document.getElementById("pass").style.border = "1.7px solid red";
        $('input').addClass('your-class');
        return false
        
    }

    else if(passwordVal.length <= 5) {
        document.getElementById("pass").style.border = "1.7px solid red";
        document.querySelector(".join-password-area small").style.display = "none";
        document.querySelector(".join-password-area strong").style.display = "block";
        document.getElementById("pass").style.outline = "1.7px solid red";
        return false
    }

    else  {
        document.querySelector(".join-password-area strong").style.display = "none";
        document.getElementById("pass").style.border = "1.7px solid green";
        document.querySelector(".join-password-area small").style.display = "none";
        document.getElementById("pass").style.outline = "none";
        $('input').removeClass('your-class');
        return true
    }
    

   

}

// function mainvalid () {
//     const emailinput = document.getElementById("email").value;
//     const passwordVal = document.getElementById("pass").value.trim();

//     if (emailinput===true && passwordVal===true) {
//         return true
//     }

//     else {
//         return false
//     }
// }



// scroll up and down system

/*

const head = document.querySelector('.feed-whole-body-area');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	

	if (preScroll < currentScroll) {
		head.classList.add('hide');
	}
	
	else {
		head.classList.remove('hide');
	}
	
	preScroll = currentScroll;
});



const head0 = document.querySelector('.feed-main-body-left');
const head1 = document.querySelector('.feed-main-body-middle');
const head2 = document.querySelector('.feed-main-body-right');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
    
	if (preScroll < currentScroll) {
		head0.classList.add('hide0');
        head1.classList.add('hide1');
        head2.classList.add('hide2');
	}
	
	else {
		head0.classList.remove('hide0');
        head1.classList.remove('hide1');
        head2.classList.remove('hide2');
	}
	
	preScroll = currentScroll;
});

*/


// linkedin middle body scroll and others are blocked

const head = document.querySelector('.feed-whole-body-area');
const headResponsiveFixed = document.querySelector('.fixed-header-responsive-area');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	

	if (preScroll < currentScroll) {
		head.classList.add('hide');
        headResponsiveFixed.classList.add('hide-fixed-responsive');
	}
	
	else {
		head.classList.remove('hide');
        headResponsiveFixed.classList.remove('hide-fixed-responsive')
	}
	
	preScroll = currentScroll;
});


// for responsive fixed header
/*
const headResponsive = document.querySelector('.header-responsive');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
	if (preScroll < currentScroll) {
		head.classList.add('hide-responsive');
	}
	
	else {
		headResponsive.classList.remove('hide-responsive');
	}
	
	preScroll = currentScroll;
});
*/



// preloader area

var loader = document.getElementById('preloader-body');

function myload() {
	
	setTimeout(function() {
		loader.style.display = "none";
	}, 2200);
	
	
}