var data = {
    "partners": [
        {
            "index": 0,
            "category": "policy",
            "name": "LIRNEasia",
            "desc" : "Think Tank",
            "url": "http://www.lirneasia.net/",
            "logo": "img/part/lirneasia.jpg"
        },
        {
            "index": 1,
            "category": "CBO",
            "name": "Sarvodaya",
            "desc" : "Community-based Organization",
            "url": "http://www.sarvodaya.org/",
            "logo": "img/part/sarvo_logo.png"
        },
        {
            "index": 2,
            "category": "FOSS",
            "name": "Sahana Software Foundation",
            "desc" : "Humanitarian Software Organizations",
            "url": "http://www.sahanafoundation.org/",
            "logo": "img/part/sahana.jpg"
        },
        {
            "index": 3,
            "category": "FOSS",
            "name": "Freedom Fone",
            "desc" : "Interactive Voice Response System",
            "url": "http://www.freedom.org/",
            "logo": "img/part/ff_logo.jpg"
        },
        {
            "index": 4,
            "category": "Academic",
            "name": "Carnegie Mellon University's Auton Lab",
            "desc" : "Business Intelligence",
            "url": "http://www.autonlab.org/",
            "logo": "img/part/autonlab.png"
        },
        {
            "index": 5,
            "category": "Private",
            "name": "Yazmi LLC",
            "desc" : "Satellite communications provider",
            "url": "http://www.yazmi.com/",
            "logo": "img/part/autonlab.png"
        }
    ]
}

function display_logos(){
    var output = new String;
    var c = 4;
    var ub=Math.ceil(data.partners.length/c);

    for (var i=0; i<ub; i++) 
    {
        output += "<table cellpadding='10'><tr>";
        if ((i+1)*c > data.partners.length){
            var z=data.partners.length; }
        else {
            var z=(i+1)*c; }
        for (var j=i*c; j<z; j++)
        {
            output += "<td><a href='" + data.partners[j].url + "'>";
            output += "<img src='" + data.partners[j].logo + "' height='40' ";
            output += " alt='" + data.partners[j].name + "' ";
            output += "</img></a></td>";
        }
        output += "</tr></table>";
    }
    document.getElementById("partner_logos").innerHTML=output;
};

function goto_url(x){
    var output = new String;
    
    output += "<table><tr>";
    output += "<td><p><strong><span>" + data.partners[x].name + "</span></strong>";
    output += "<br>" + data.partners[x].summary + "</p></td>";    
    output += "</tr></table>";
    document.getElementById("prof_info").innerHTML=output;

}
