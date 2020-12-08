$(document).ready(function(){
    //toggler.btn
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })
    
    //sticky navbar less padding
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        
        if(position>=0){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })
    

    //ripples
$("#header, .info").ripple({
                            dropRadius: 25,
                            perturbance: 0.6,
    
                            });
    //popup gallery
    $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
        
gallery:{
    enabled:true,
},

callbacks: {
                    resize: changeImgSize,
                    imageLoadComplete:changeImgSize,
                    change:changeImgSize
                }
 
  // other options
});
                            

});

 function changeImgSize(){
            var img = this.content.find('img');
            img.css('max-height', '100%');
            img.css('width', 'auto');
            img.css('max-width', 'auto');
        }

$("#phone").on("click", function(){
$(".bg-modal, .modal-content").addClass("active");
});

$(".close, .bg-modal").on("click", function(){
$(".bg-modal, .modal-content").removeClass("active");
});


