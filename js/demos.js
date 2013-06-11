<<<<<<< HEAD
//var data = {
//    "demos": [
//        {
//            "category": "health",
//            "title": "HEADSUP",
//            "summary": "To login to the demo, <b>username=me@demo.lk</b> and <b>password=demo.lk</b> <br> The demo will allow you to add/edit a payee, add the payee to a group. Thereafter, you can use your Androin POS app to send in a transaction, then view the transaction in the History.",
//            "demoURL": "http://www.samanathetha.lk/sahana-demo",
//            "imgURL": "img/prod/four_tech.jpg"
//        },
//        {
//            "category": "POS",
//            "title": "POS-on-da-SPOT",
//            "summary": "To login to the demo, <b>username=me@demo.lk</b> and <b>password=demo.lk</b> <br> The demo will allow you to add/edit a payee, add the payee to a group. Thereafter, you can use your Androin POS app to send in a transaction, then view the transaction in the History.",
//            "demoURL": "https://202.69.197.115:9443/hypna/",
//            "imgURL": "img/prod/pos.png"
//        }
//    ]
//}

function paint(){
    
    $.getJSON('./data/demos.json', function(data) {
=======
var data = {
    "demos": [
        {
            "category": "health",
            "title": "HEADSUP",
            "summary": "To login to the demo, <b>username=me@demo.lk</b> and <b>password=demo.lk</b> <br> The demo will allow you to add/edit a payee, add the payee to a group. Thereafter, you can use your Androin POS app to send in a transaction, then view the transaction in the History.",
            "demoURL": "http://www.samanathetha.lk/sahana-demo",
            "imgURL": "img/prod/four_tech.jpg"
        },
        {
            "category": "POS",
            "title": "POS-on-da-SPOT",
            "summary": "To login to the demo, <b>username=me@demo.lk</b> and <b>password=demo.lk</b> <br> The demo will allow you to add/edit a payee, add the payee to a group. Thereafter, you can use your Androin POS app to send in a transaction, then view the transaction in the History.",
            "demoURL": "demo/pos/index.htm",
            "imgURL": "img/prod/pos.png"
        }
    ]
}

function paint(){
>>>>>>> d10b76d465e9f3b85df866cd74322222a235e950
    var output = "";
    var c = 2;
    var ub=Math.ceil(data.demos.length/c);

    for (var i=0; i<ub; i++) 
    {
        output += "<table cellpadding='20'><tr>";
        if ((i+1)*c > data.demos.length){
            var z=data.demos.length; }
        else {
            var z=(i+1)*c; }
        for (var j=i*c; j<z; j++)
        {
            output += "<td>";
            output += "<a href='" + data.demos[j].demoURL + "'>";
            output += "<p><strong><span>" + data.demos[j].title + "</span></strong></p>";
            output += "</a>";
            output += "<a href='" + data.demos[j].demoURL + "'>";
            output += "<image src='" + data.demos[j].imgURL + "'></image>";
            output += "</a>";
            output += "<p>" + data.demos[j].summary + "</p></td>";
        }
        output += "</tr></table>";
    }
    document.getElementById("demo").innerHTML=output;
<<<<<<< HEAD
    });
=======
>>>>>>> d10b76d465e9f3b85df866cd74322222a235e950
};

