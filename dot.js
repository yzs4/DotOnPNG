var img = new Image();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var dir = '2021-12-23-17-46-59'
img.src = dir + '/image.png';
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

    
    // dot(ctx, 100, 100, "red")
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

// function drawcontour(){
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
    
//     dot(ctx, 555, 500, 'red')
// //     for (var i in data.FACE) {
        
// // dot(ctx, data.FACE[i].x+125, data.FACE[i].y+90, 'red')}
// }

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
  