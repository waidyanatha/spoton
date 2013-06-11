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

}

function prof_name(x){
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