const APIUtil = require('./util_api.js');

class FollowToggle {
  constructor($el){
    this.el = $el;
    this.userId = $el.data("id");
    this.followstate = $el.data("followstate");
    this.render();
    this.handleClick();
  }
  
  render(){
    let text;
    if (this.followstate === 'unfollowed'){
      text = 'Follow!';
    } else {
      text = 'Unfollow!';
    }
    this.el.text(text);
  }
  
  handleClick(){
    this.el.on('click', e => {      
      e.preventDefault();
      if (this.followstate === 'unfollowed'){
        console.log(this.userId);
        APIUtil.followUser(this.userId);
      }
      else{
        APIUtil.unfollowUser(this.userId);
      }
    });
  }
}

module.exports = FollowToggle;
