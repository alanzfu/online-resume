
//TODO: Add actual skills, maybe change to an object with subsets of skills
//TODO: change yearStart and yearEnd to one property with time as a string





var bio = {
	name: "Alan Fu",
	role: "Software Developer-in-training, Entrepreneur",
	welcomeMessage: "Welcome to my first Javascript project, an online resume!",
	contacts: {
		"email": "alanzfu@gmail.com",
		"phone": "650-575-8062",
		"github": "alanzfu",
		"location": "978 Clara Drive, Palo Alto, CA"},
	skills: ["To Pay The Bills","Javascript", "HTML/CSS", "Git", "Matlab","CES"],
	pic: "images/alanfu.jpg"
};



var work = [
		{
			"employer": "LifeShel",
			"position": "President, COO",
			"location": "Pittsburgh, PA",
			"dates": "Mar 2014 – Jun 2015",
			"yearStart": [3,2014],
			"yearEnd": [6,2015],
			"description": [
				"Grew team to 15 during development and marketing of Self Defense Smartphone Case",
				"Coordinated product development and logistics for beta test of with 50 outside participants",
				"Coordinated launch and marketing of KickStarter, which raised $45,000",
				"Developed IP strategy for both business directions and wrote provisional patents for all flagship products, vetted IP lawyers to execute full patents"
				],
			"url": "http://www.lifeshel.com"
		},

		{
			"employer": "LifeShel",
			"position": "CEO",
			"location": "Pittsburgh, PA",
			"dates": "Sep 2012 – Mar 2014",
			"yearStart": [9,2012],
			"yearEnd": [3,2014],
			"description": [
				"Founded a team of 4 engineers integrating larger mechanical devices with smartphones in desirable, elegant form factors",
				"Raised seed round of $50,000 and gained acceptance into startup accelerator",
				"Created regulatory strategy to pursue NDA (New Drug Application), working alongside regulatory proposal consultants"
				],
			"url": "http://www.lifeshel.com"
		},

		{
			"employer": "Maxim Integrated",
			"position": "Process Engineer Intern",
			"location": "San Jose, CA",
			"dates": "May 2013 – Aug 2013",		
			"yearStart": [5,2013],
			"yearEnd": [8,2013],
			"description": [
				"Created and executed design of experiments to characterize wafer uniformity on wet etch tool, determined that the tool could not fit the spec for the process, and recommended an upgrade on the tool that would potentially improve uniformity by 40%.",
				"Created and wrote operation spec for a new 3D microscopy tool that will be utilized by the entire fab, hosted a seminar to trainall engineers in the facility"
				],
			"url": "http://www.maximintegrated.com"
		},
	
		{
			"employer": "Stryker",
			"position": "Robotics R&D Intern",
			"location": "Kalamazoo, MI",
			"dates": "Jun 2012 – Aug 2012",	
			"yearStart": [6,2012],
			"yearEnd": [8,2012],
			"description": [
				"Created a simulation that utilized multiple collision detection algorithms and force calculators to select optimal configuration for the development of their surgical robot",
				"Presented the resultant run-time and physics analysis to the head of R&D and robotics division, resulting in the selection of suggested configuration"
				],
			"url": "http://www.stryker.com"
		},

		{
			"employer": "Stryker",
			"position": "Design Intern",
			"location": "Kalamazoo, MI",
			"dates": "May 2011 – Aug 2011",	
			"yearStart": [5,2011],
			"yearEnd": [8,2011],
			"description": [
				"Designed test fixture and wrote test scripts to screen optical sensors in a tracking application for a surgical robot",
				"Developed image-processing algorithms that increased chosen sensor’s resolution by 100x",
				"Collaborated with sensor vendors to improve tracking accuracy in specific application by 10%"
				],
			"url": "http://www.stryker.com"
		}	

]

var education = {
	"schools": [
		{
			"name": "Carnegie Mellon University",
			"location": "Pittsburgh, PA",
			"majors": ["Material Science and Engineering"],
			"graduationYear": 2014,
			"dates": "Aug 2013 – May 2014",	
			"degree": "Masters",
			"gpa": 3.71,
			"url": "http://www.cmu.edu"
		},

		{
			"name": "Carnegie Mellon University",
			"location": "Pittsburgh, PA",
			"majors": ["Material Science and Engineering","Biomedical Engineering"],
			"graduationYear": 2013,
			"dates": "Aug 2009 – May 2013",
			"degree": "Bachelors",
			"gpa": 3.27,
			"url": "http://www.cmu.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Javascript Track",
			"school": "Code Academy",
			"dates": "July 2015",
			"yearStart": [6,2015],
			"yearEnd": [6,2015],
			"url": "http://www.codeacademy.com"
		},

		{
			"title": "Hack Reactor JS Fundamentals 2/2",
			"school": "Hack Reactor",
			"dates": "July 2015",
			"yearStart": [7,2015],
			"yearEnd": [7,2015],
			"url": "http://www.hackreactor.com"
		},

		{
			"title": "Udacity Javascript Basics",
			"school": "Udacity",
			"dates": "July 2015",
			"yearStart": [7,2015],
			"yearEnd": [7,2015],
			"url": "http://www.udacity.edu"
		}

	]

};

var projects = [
		{
			"title": "Fabrication of Metal-Polymer Films",
			"location": "Carnegie Mellon University",
			"start": [8,2012],
			"end": [5,2013],
			"dates": "Aug 2012 - May 2013",
			"description": [
				"Designed transmissive material composed of alternating layers of Silver and Polystyrene through spin coating and thermal evaporation",
				"Performed modeling in Matlab; performed reflectivity tests, transmission tests, and SEM to characterize properties of samples"
				]
		},

		{
			"title": "The Effects of Surface Roughness on Carbon Nanotube Growth",
			"location": "NASA Ames Research Center",
			"yearStart": [9,2008],
			"yearEnd": [6,2009],
			"dates": "Sep 2008 - Jun 2009",
			"description": [
				"Tuned bulk material processing for carbon nanotube formation resulting in findings that suggested a direct correlation between surface roughness and nanotube growth. (Findings published in the Journal of Nanoscience and Nanotechnology)",
				"Fabricated high surface area solar cells using masked carbon nanotube growth"
				]
		},

		{
			"title": "Online Resume (The one you're currently browsing)",
			"yearStart": [7,2015],
			"yearEnd": [7,2015],
			"dates": "July 11, 2015",
			"description": [
				"Created an online resume through usage of current Javascript knowledge base to get hands dirty coding"
				]
		},

		{
			"title": "Last Night",
			"yearStart": [7,2015],
			"yearEnd": null,
			"dates": "Jul 2015 - Ongoing",
			"description": [
				"Created a basic journaling app iOS app in Swift that tracks daily drinking habits and ultimately outputs trends",
				"Utilized Parse back-end service to store data and create a feed of network's drinking habits"
				]
		}

	];

//______________________________________________________________________________________________________________________________


//Display the rest of bio

$("#header").append(HTMLheaderName.replace("%data%", bio.name)); //displays my name
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));


for(cont in bio.contacts){ 														//displays by contact
	var stringholder = HTMLcontactGeneric.replace("%contact%", cont);
	stringholder = stringholder.replace("%data%", bio.contacts[cont]);
	$("#header").append(stringholder);
}


$("#header").append(HTMLbioPic.replace("%data%", bio.pic)); //display pic
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)); //display welcome message


//Displays Skills
if("skills" in bio){
	//console.log("itworked");
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(a){
		$("#skills").append(HTMLskills.replace("%data%", a));
		}
	);
}

//_____________________________________________

function displayWork(){

//Shows Job Titles
work.forEach(function(job){
	$("#workExperience").append(HTMLworkStart);	
	$(".work-entry:last").append(
		HTMLworkEmployer.replace("%data%", job["employer"])+HTMLworkTitle.replace("%data%", job["position"])
		);

	$(".work-entry:last").append(
		HTMLworkDates.replace("%data%", job.dates));

	$(".work-entry:last").append(
		HTMLworkLocation.replace("%data%", job.location));


	for(bullet in job.description){
		$(".work-entry:last").append(
		HTMLworkDescription.replace("%data%", job.description[bullet]));
	}
})
};

displayWork();


//exercises:_____________________________________________

$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});

function locationizer(array){
	return array.map(function(a){
		return a.location;
	});
};

//console.log(locationizer(work));

$("#main").append(internationalizeButton);
function inName (string){
	var array = string.split(" ");
	array[1] = array[1].toUpperCase();
	return array.join(" ");
};


//projects display:_____________________________________________

projects.display = function(){
	projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.dates));
			
			for(bullet in project.description){
				$(".project-entry:last").append(
				HTMLprojectDescription.replace("%data%", project.description[bullet]));
			}
			
			
		}

	);

	
};
projects.display();

//education display:_____________________________________________

education.display = function(){
	education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",school.name)+HTMLschoolDegree.replace("%data%",school.degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location));

			var majorString = school.majors.reduce(function(a,b) {return a+", " +b});
			console.log(majorString);

			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majorString));
		}
	);

	$("#education").append(HTMLonlineClasses);	

	education.onlineCourses.forEach(function(online){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",online.title)+HTMLonlineSchool.replace("%data%",online.school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",online.dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",online.url));
	})



};

education.display();



$("#map-div").append(googleMap);














































