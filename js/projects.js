var data = {
    "projects": [
        {
            "category": "satellite",
            "projTitle": "Unitel's Univision Satellite Entertainment",
            "startdt": {
                "year": 2013,
                "month": "January"
            },
            "enddt": {
                "year": 2013,
                "month": "December"
            },
            "status": "Planning",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "partners": "Omni-Sat, Yazmi, Unitel",
            "projURL": "http://www.samanathetha.lk/sahana-demo",
            "imgTitle": "SAMBRO",
            "imgURL": "img/sambro.png"
        },
        {
            "category": "disaster",
            "projTitle": "ITU CAP-enabled Demo Software - Phase I",
            "startdt": {
                "year": 2012,
                "month": "November"
            },
            "enddt": {
                "year": 2012,
                "month": "December"
            },
            "status": "Completed",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "partners": "Click to access the SAMBRO DEMO",
            "projURL": "http://www.samanathetha.lk/sahana-demo",
            "imgTitle": "SAMBRO",
            "imgURL": "img/sambro.png"
        },
        {
            "category": "data-mining",
            "projTitle": "LIRNEasia Mobile Big Data for Social Science",
            "startdt": {
                "year": 2012,
                "month": "September"
            },
            "enddt": {
                "year": 2012,
                "month": "September"
            },
            "status": "work-in-progress",
            "summary": "SAMBRO - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "partners": "Click to access the SAMBRO DEMO",
            "projURL": "http://www.samanathetha.lk/sahana-demo",
            "imgTitle": "SAMBRO",
            "imgURL": "img/sambro.png"
        },
        {
            "category": "mhealth",
            "projTitle": "Health Ministry - Sri Lanka HEADSUP demo",
            "startdt": {
                "year": 2012,
                "month": "August"
            },
            "enddt": {
                "year": 2012,
                "month": "October"
            },
            "status": "Completed",
            "summary": "HEADSUP - <a href='http://www.sahanafoundation.org/'>Sahana</a> Alerting and Messaging Broker - is a Common Alerting Protocol-enabled Free and Open Source Humanitarian Software designed for Closed User Group and Public Alerting.",
            "partners": "Sri Lanka Ministry of Health",
            "projURL": "http://www.samanathetha.lk/sahana-demo",
            "imgTitle": "SAMBRO",
            "imgURL": "img/sambro.png"
        }
    ]
}

function paint(){
    var output = "";

    for (var i in data.projects) 
    {
        output += "<table><tr><td><p><strong><span>";
        output += data.projects[i].projTitle + "</span></strong></p></td></tr></table>";
        output += "<table><tr><td><image src='" + data.projects[i].imgURL + "'></image></td>";
        output += "<td><p>" + data.projects[i].summary + "</p></td></tr></table>";
        output += "<table align='right'><tr><td><p>"  + data.projects[i].status + ": "; 
        output += data.projects[i].startdt.year + "-" + data.projects[i].startdt.month + " to ";
        output += data.projects[i].enddt.year + "-" + data.projects[i].enddt.month + "</p></td></tr></table>";
        output += "<br><br>";
    }

    document.getElementById("projTitle").innerHTML=output;
};

