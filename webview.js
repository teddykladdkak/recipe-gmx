module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    // Get count of unread messages; must manually navigate to the "E-Mail" tab.
    let count = 0;
    // getElementsByClassName returns an empty array; don't know why: that class 
    // name is clearly present several times in the DOM. Long line split for debugging.
    let els = document.getElementsByClassName('badge');
    /*count = els.length;*/ //This doesent make sense, why is number of elements with class "badge" on the page a number to setBadge?
    let el = els[1]; //So you know that the second element in dom with class "badge" is the one with your badge number
    /*let val = el.getAttribute('value');*/ //This is the value of what? Is the notification number in the elements value or innerHTML?
    /*if (document.getElementsByClassName('badge')[1].getAttribute('value') != null) {
      count = parseInt(document.getElementsByClassName('badge')[1].innerHTML.replace(/[^0-9.]/g, ''), 10);
    }*/
    if(!el){
      count = 0; //If element dont exist
    }else{
      count = Number(el.innerHTML.replace(/[^0-9.]/g, '')); //Use "Number()" instead of "parseInt();"
    };
    
    // Just in case we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count) || count == '') { //If count dont have any numbers, not only NaN
      count = 0;
    }
    
    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
