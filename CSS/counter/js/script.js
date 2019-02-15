$(document).ready(function(){
  var count = 0;
  var counter = setInterval(function(){
    if(count <= 100 ){
      $('.count').text(Math.ceil(count)+"%");
      $('.loader').css('width', count + '%');
      count+=0.1;
    } else {
      clearInterval(counter);
    }
  },8.5)
});
