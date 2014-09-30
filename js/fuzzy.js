
  var $elementList = $('#toSearchFor').find('tr');
  $('#searchInput').keyup(function(eve){
      searchString=$(this).val().toLowerCase();
  searchArray=searchString.split(' ');
  var len = searchArray.length;
  $elementList.each(function(index,elem){
        $eleli = $(elem)
        $eleli.removeClass('hideThisLine');
        var oneLine = $eleli.text().toLowerCase()
        match = true,
        sal = len;
        while(sal--){
          if( oneLine.indexOf( searchArray[sal] ) == -1 ){
            match = false;
          }
        }
        if(!match){
          //console.log('this one is gets hidden',searchString);
          $eleli.addClass('hideThisLine');
        }
      });
      $('.dontShow').removeClass('dontShow');
      $('.hideThisLine').addClass('dontShow');
    });
  $('#clearSearch').click(function (e){
    $('#cBuscador').val('').keyup();
  });


