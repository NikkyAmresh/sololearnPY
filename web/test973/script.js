$.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: "2008514756.1677ed0.84025d28b2294901ac14158a96b48a02"},
      success: function(data){
    $(".load").hide();
    $(".name").append(data['data']['full_name'])
    $(".username").append(data['data']['username'])
    $(".bio").append(data['data']['bio'])
    $(".website").append(data['data']['website'])
    $(".pic").attr("src",data['data']['profile_picture'])
    $(".followers").append(data['data']['counts']['followed_by']);
    $(".media").append(data['data']['counts']['media']);
    $(".follows").append(data['data']['counts']['follows']);},
      error: function(data){
             console.log(data);
      }
  });
