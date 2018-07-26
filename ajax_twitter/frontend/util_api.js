const APIUtil = {
  followUser: id => {
    $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      success(data){
        console.log('whaddduppp');
      },
      error(){
        console.log('did not work');
      },
    });
  },
  unfollowUser: id => {
    $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      success(data){
        console.log('whaddduppp');
      },
      error(){
        console.log('did not work');
      },
    });
  }
};

module.exports = APIUtil;