//function to bind events to elements
function bindEvent(elem,event_name,event_handler){
  if(elem.addEventListener){
    elem.addEventListener(event_name, event_handler, false);
  } else if(elem.attachEvent) {
    elem.attachEvent('on' + event_name, event_handler);
  }
}
function close_popup(){
  var popup_box = document.getElementsByClassName('popup-wrapper')[0]; 
  //hide temporarily
  popup_box.className = 'popup-wrapper fake-hide';
  //after sometime, set display to none
  setTimeout(real_hide,250);
  function real_hide(){
    popup_box.className = 'popup-wrapper hide';
  }
}
function open_popup(){
  var popup_box = document.getElementsByClassName('popup-wrapper')[0]; 
  var first = document.getElementsByClassName('popup-text')[0];
  var second = document.getElementsByClassName('final-popup')[0];
  popup_box.className = 'popup-wrapper show';
  first.className = 'popup-text show'
  second.className = 'final-popup hide';
}
function calls(){
  var close_btn = document.getElementsByClassName('close-btn')[0];
  var btn = document.getElementsByClassName('open-btn')[0];
  var no = document.getElementsByTagName('a')[0];
  var btn2 = document.getElementsByTagName('button')[0]; 
  var wrapper = document.getElementsByClassName('popup-wrapper')[0];
  var box = document.getElementsByClassName('popup-box')[0];
  bindEvent(close_btn,'click',function(){
    close_popup();
  });
  bindEvent(no,'click',function(){
    close_popup();
  });
  bindEvent(btn,'click',function(){
    open_popup();
  });
  bindEvent(btn2,'click',function(){
    validate_email(0);
  });
  bindEvent(box,'mousemove',function(event){
   
    if(window.event){
    event = window.event; // IE fix
  }
  var mouseX = event.clientX; // get mouse X-coordinates
  var mouseY = event.clientY; // get mouse Y-coordinates
  var target = document.getElementsByClassName('popup-box')[0];
  target.style.transform = 'rotateX('+ -mouseY/-30 +'deg) rotateY('+ -mouseX/95 +'deg)';
  });
  bindEvent(wrapper,'mouseover',function(){
    var target = document.getElementsByClassName('popup-box')[0];
  target.style.transform = 'rotateX('+ 0 +'deg) rotateY('+ 0 +'deg)';
  });
}
function validate_email(index){
  var email_input = document.getElementsByTagName('input')[index];
  var popup_box = document.getElementsByClassName('popup-wrapper')[0]; 
  var first = document.getElementsByClassName('popup-text')[0];
  var second = document.getElementsByClassName('final-popup')[0];
  var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  if(email_input.value == null || email_input.value == ''){
    alert('Email is required');
  } else if(!email_input.value.match(pattern)) {
    alert('Email is invalid');      
    email_input.value = '';
  } else {
    first.className = 'popup-text hide'
    second.className = 'final-popup show';
    email_input.value = '';
  }
}
calls();