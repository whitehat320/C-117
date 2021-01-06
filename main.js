function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    /*Teachable machine's link is not given */
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/875GZQ1FS/model.json',modelLoaded);
    /*Teachable machine's link is not given */

}

function draw(){
    image(video, 0,0,400,300); 
    classifier.classify(video,gotResult);
}

function modelLoaded(){
  console.log('Model Loaded');  
}

function gotResult(error , results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

        
    }
}