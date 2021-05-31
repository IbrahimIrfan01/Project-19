function isTouching(){
    if (
      rectangle2.x - rectangle1.x < rectangle1.width / 2 + rectangle2.width / 2 && 
      rectangle1.x - rectangle2.x < rectangle1.width / 2 + rectangle2.width / 2 && 
      rectangle2.y - rectangle1.y < rectangle1.height / 2 + rectangle2.height / 2 && 
      rectangle1.y - rectangle2.y < rectangle1.height / 2 + rectangle2.height / 2 )
   {
     rectangle1.shapeColor = "green";
     rectangle2.shapeColor = "blue";
   }
   else{
     rectangle1.shapeColor = "blue";
     rectangle2.shapeColor = "green";
   }
  }