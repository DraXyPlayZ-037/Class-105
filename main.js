Webcam.set({
    height: 300,
    width: 350,
    img_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera").value;
Webcam.attach("#camera");
//let stop
function CaptureIt() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img src=" + data_uri + " id='camr'>"
    });
};
//lets stop
console.log("ML5. Version is: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hbUBO_NFN/model.json", modelloaded)



function modelloaded() {
    console.log("Model Has Been Loaded succesfully attempted! ")
};

//good job
function IdentifyIt() {
    img = document.getElementById("camr");
    classifier.classify(img, GotResults);

    function GotResults(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results)
            document.getElementById("Obj").innerHTML = "Object:" + results[0].label;
            document.getElementById("Ary").innerHTML = "Accuracy:" + results[0].confidence.toFixed(2);
        }

    }

};