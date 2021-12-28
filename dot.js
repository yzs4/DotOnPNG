var img = new Image();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var dir = '2021-12-20-01-59-21'
img.src = dir + '/image.png';
document.getElementById('viewer').window = dir;
console.log(document.getElementById('viewer').document)
console.log(img.width)
console.log(img.height)
var clr 
img.onload = function() {
   
  draw(this);
  readTextFile("face_contourscolors.json", function(colors){
    clr = JSON.parse(colors);
console.log(clr)
  })
  readTextFile(dir + "/face_contours.json", function(text){
    var data = JSON.parse(text);
  
    console.log(data);
    console.log(data.FACE[0])
    for ( j in data ){
      for ( i in data[j]){
        dot(ctx, data[j][i].x, data[j][i].y, clr[j])

      }
    }

    
   
  });
  readTextFile(dir + "/face_landmarks.json", function(dots){
    var datas = JSON.parse(dots);
  
    console.log(datas);
    
    for ( i in datas ){

        dot(ctx, datas[i].x, datas[i].y, clr[i])

      
    }

    
    
  });
};

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}



function draw(img) {
  console.trace()
    var canvas = document.getElementById('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    img.style.display = 'none';
}
function dot(ctx, x, y, color){
    var circle = new Path2D();
    circle.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = color
    ctx.fill(circle);
    
}
  console.log(dir)