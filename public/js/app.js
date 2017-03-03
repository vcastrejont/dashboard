$( document ).ready(function() {
  var weather = 'https://api.darksky.net/forecast/2d6b84a6f07c2fe6424bc4624bbc1b8d/29.089,-111.008?units=si';
  
  setInterval(function(){
    var content = '<p class="day">'
      +moment().format('dddd')+'</p><p class="date">'
      +moment().format('LL')+'</p><p class="hour">'
      +moment().format('h:mm:ss a')+'</p>';
      $('time').html(content);
     var eventdate = moment("2017-05-29");
     var count =  eventdate.diff(moment(), 'days');
     $('p.sub').html(count + ' <span>days</span>');

  }, 1000);
  
  
    
    // $.ajax({ 
    //    type: "GET",
    //    dataType: "jsonp",
    //    url: weather,
    //    success: function(data){        
    //      console.log(data.currently)
    //    }
    // });

});
