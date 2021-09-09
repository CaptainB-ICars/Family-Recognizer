Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera")
Webcam.attach('#camera')

function capture_image()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="musa" src="'+data_uri+'">'
    })
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/czDdr8ai2/',modelLoaded);

function modelLoaded()
{
    console.log("Model Is Loaded");
}

function identify_image()
{
    img=document.getElementById("musa")
    classifier.classify(img,gotResult)
}

function gotResult(error,results)
{
    if(error)
    {
    console.error(error)
    }
    else
    {
    console.log(results)
    document.getElementById("object").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence
    }
}

