function more(e){
   var name = String(e.target.id);

   if(name == 'planea'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('planeac').style.display = 'block';
    var data = document.getElementsByClassName('planeacion');
    data[0].style.display = 'block';
   }
   if(name == 'cali'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('calid').style.display = 'block';
    var data = document.getElementsByClassName('calidad');
    data[0].style.display = 'block';
   }
   if(name == 'capita'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('capit').style.display = 'block';
    var data = document.getElementsByClassName('capital');
    for(var i=0; i<data.length; i++) 
      data[i].style.display = 'block';
   }
   if(name == 'fina'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('finan').style.display = 'block';
    var data = document.getElementsByClassName('finanzas');
    data[0].style.display = 'block';
   }
   if(name == 'tecno'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('tecnol').style.display = 'block';
    var data = document.getElementsByClassName('tecnologias');
    data[0].style.display = 'block';
   }
}

function less(e){
   var name = String(e.target.id);

   if(name == 'planeac'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('planea').style.display = 'block';
    var data = document.getElementsByClassName('planeacion');
    data[0].style.display = 'none';
   }
   if(name == 'calid'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('cali').style.display = 'block';
    var data = document.getElementsByClassName('calidad');
    data[0].style.display = 'none';
   }
   if(name == 'capit'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('capita').style.display = 'block';
    var data = document.getElementsByClassName('capital');
    for(var i=0; i<data.length; i++) 
      data[i].style.display = 'none';
   }
   if(name == 'finan'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('fina').style.display = 'block';
    var data = document.getElementsByClassName('finanzas');
    data[0].style.display = 'none';
   }
   if(name == 'tecnol'){
    document.getElementById(name).style.display = 'none';
    document.getElementById('tecno').style.display = 'block';
    var data = document.getElementsByClassName('tecnologias');
    data[0].style.display = 'none';
   }
}