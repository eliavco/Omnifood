$(document).ready(function(){
    
//    A simple Waypoints with direction and offset:
//    
//        var waypoint = new Waypoint({
//          element: document.getElementById('px-offset-waypoint'),
//          handler: function(direction) {
//            notify('I am 20px from the top of the window')
//          },
//          offset: 20 
//        })
    
    
////    Sticky Navigation
////        -Add a class "js--sticky-nav" to #main-nav-bar
    
$('.js--section-features').waypoint(function(direction) {
    if (direction == "down"){
        $('#main-nav-bar').addClass('js--sticky-nav');
    } else {
        $('#main-nav-bar').removeClass('js--sticky-nav');
    }
  },{
    offset: '71px;'
})    
    
});