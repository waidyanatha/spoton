<<<<<<< HEAD
function prof_pics(){
$.getJSON('./data/team.json', function(data) {
    var output = new String;
    var c = 4;
    
    var ub=Math.ceil(data.team.length/c);
    output += "<table cellpadding='9'>"
    for (var i=0; i<ub; i++) 
    {
        output += "<tr>";
        if ((i+1)*c > data.team.length){
            var z=data.team.length; }
        else {
             z=(i+1)*c; }
        for (var j=i*c; j<z; j++)
        {
            output += "<td class='tooltip' id='tooltip_" +j+ "' ><image src='" + data.team[j].profImg + "' ";
            output += " alt='" + data.team[j].name + "' ";
            output += " onclick='prof_info(" + j + ");' ";
            output += " id='image_" +j+ "' ></image> ";
                        output += "<span><strong>" + data.team[j].name + "</strong>";
                        output += "<br>" + data.team[j].designation + "</span></td>";
            output += "";            
        }
        output += "</tr>";
    }
    
    output += "</table>";
    document.getElementById("team").innerHTML=output;
    });
}

function prof_info(x){
$.getJSON('./data/team.json', function(data) {
    var output = new String;
    
    //output += "<table><tr>";
	output += "<image src='" + data.team[x].profImg + "' />";
    output += "<div class='summary-image'><p><strong><span>" + data.team[x].name + "</span></strong>";
    output += "<br>" + data.team[x].summary + "</p></div>";    
    //output += "</tr></table>";
    document.getElementById("prof_info").innerHTML=output;
    
//	document.getElementById("prof_info_"+x).style.display = 'none';
	
//  	$("#prof_info_"+x).position({at: 'bottom center', of: $('#image_'+x), my: 'top'});
$("#prof_info").addClass("imgbackcolor");
	$("#prof_info").show();
        });
=======
var data = {
    "team": [
        {
            "index": 0,
            "category": "leadership",
            "name": "Nuwan Waidyanatha",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/nuwan2.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/nuwan2.jpg"
        },
        {
            "index": 1,
            "category": "advisor",
            "name": "Rohan Samarajiva",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/rohan.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/sambro.png"
        },
        {
            "index": 2,
            "category": "consultant",
            "name": "Chamindu Sampath",
            "designation" : "Medical Doctor",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/chamindu.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/chamindu.jpg"
        },
        {
            "index": 3,
            "category": "consultant",
            "name": "Roshan Hewapathirana",
            "designation" : "eHealth Specialist/Senior Project Manager",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/sambro.png",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/sambro.png"
        },
        {
            "index": 4,
            "category": "engineering",
            "name": "Tharaka Wilfred",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/tharaka.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/tharaka.jpg"
        },
        {
            "index": 5,
            "category": "engineering",
            "name": "Manoj Silva",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/manoj2.png",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/manoj2.png"
        },
        {
            "index": 6,
            "category": "engineering",
            "name": "Madhuka Udantha",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/madhuka.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/madhuka.jpg"
        },
        {
            "index": 7,
            "category": "administration",
            "name": "Binu",
            "designation" : "CEO/Chair",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/sambro.png",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/sambro.png"
        },
        {
            "index": 4,
            "category": "engineering",
            "name": "Kasun Perera",
            "designation" : "Junior Software Engineer",
            "expertise": "Operations Research with Computer and Systems Engineering",
            "profImg" : "img/prof/kasun.jpg",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "profURL": "Omni-Sat, Yazmi, Unitel",
            "cvTitle": "SAMBRO",
            "cvURL": "img/prof/kasun.jpg"
        }
    ]
}


function prof_pics(x){

    var output = new String;
    var c = 4;
    var ub=Math.ceil(data.team.length/c);

    for (var i=0; i<ub; i++) 
    {
        output += "<table border='-1' cellpadding='12'><tr>";
        if ((i+1)*c > data.team.length){
            var z=data.team.length; }
        else {
            var z=(i+1)*c; }
        for (var j=i*c; j<z; j++)
        {
            output += "<td><image src='" + data.team[j].profImg + "' ";
            output += " alt='" + data.team[j].name + "' ";
            output += " onclick='prof_info(" + j + ");' ";
            output += " onmouseover='prof_name(" + j + ");'></image> ";
            output += "";            
        }
        output += "</tr></table>";
    }
    document.getElementById("team").innerHTML=output;
};

function prof_info(x){
    var output = new String;
    
    output += "<table><tr>";
    output += "<td><p><strong><span>" + data.team[x].name + "</span></strong>";
    output += "<br>" + data.team[x].summary + "</p></td>";    
    output += "</tr></table>";
    document.getElementById("prof_info").innerHTML=output;
>>>>>>> d10b76d465e9f3b85df866cd74322222a235e950

}

function prof_name(x){
<<<<<<< HEAD
$.getJSON('./data/team.json', function(data) {
    var output = new String;
    
    output += "<strong><span>" + data.team[x].name + "</span></strong>";
	output += "<br><strong><span>" + data.team[x].designation + "</span></strong>";
//    output += "<br>" + data.team[x].summary + "</p>";    
    document.getElementById("tooltip_"+x).innerHTML=output;
	document.getElementById("prof_info_"+x).style.display = 'none';
    
	$("#prof_info_"+x).position({at: 'bottom center', of: $('#image_'+x), my: 'top'});
	$("#prof_info_"+x).show();
        });
}

//function mouse_out(x){
//	document.getElementById("prof_info_"+x).style.display = 'none';
//}
=======
    var output = new String;
    
    output += "<strong><span>" + data.team[x].name + "</span></strong>";
    output += "<br>" + data.team[x].summary + "</p>";    
    document.getElementById("prof_info").innerHTML=output;
}
>>>>>>> d10b76d465e9f3b85df866cd74322222a235e950
