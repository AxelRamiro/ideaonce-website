function show(e){
  var name = String(e.target.id);

  var txt2 = document.getElementsByClassName('tvalores2');
  txt2[0].style.display = 'none'; 
  var txt3 = document.getElementsByClassName('tvalores3');
  txt3[0].style.display = 'none'; 

  if(name == 'mision'){
    document.getElementById('up').style.display = 'none';
    document.getElementById('down').style.display = 'none';
    document.getElementById('valores').style.opacity = '0.5';
    document.getElementById('textv').style.opacity = '0.5';
    var data = document.getElementsByClassName('tvalores');
    data[0].style.display = 'none';

    document.getElementById(name).style.opacity = '1';
    document.getElementById('textm').style.opacity = '1';
    var data = document.getElementsByClassName('tmision');
    data[0].style.display = 'block';
  }
  if(name == 'valores'){
    document.getElementById('up').style.display = 'block';
    document.getElementById('down').style.display = 'block';
    document.getElementById('mision').style.opacity = '0.5';
    document.getElementById('textm').style.opacity = '0.5';
    var data = document.getElementsByClassName('tmision');
    data[0].style.display = 'none';

    document.getElementById(name).style.opacity = '1';
    document.getElementById('textv').style.opacity = '1';
    var data = document.getElementsByClassName('tvalores');
    data[0].style.display = 'block';
  }
}

function values(e){
  var arrow = String(e.target.id);
  var txt1 = document.getElementsByClassName('tvalores');
  var status = txt1[0].style.display; 
  var txt2 = document.getElementsByClassName('tvalores2');
  var status2 = txt2[0].style.display; 
  var txt3 = document.getElementsByClassName('tvalores3');
  var status3 = txt3[0].style.display; 
  if(status == 'block')
    if(arrow == 'down'){
      txt1[0].style.display = 'none';
      txt2[0].style.display = 'block';
    }
  if(status2 == 'block'){
    if(arrow == 'down'){
      txt2[0].style.display = 'none';
      txt3[0].style.display = 'block';
    }
    if(arrow == 'up'){
      txt2[0].style.display = 'none';
      txt1[0].style.display = 'block';
    }
  }
  if(status3 == 'block')
    if(arrow == 'up'){
      txt3[0].style.display = 'none';
      txt2[0].style.display = 'block';
    }
}