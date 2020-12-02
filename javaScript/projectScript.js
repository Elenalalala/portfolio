const main = document.getElementById('content');
const Feature = {
    'cornStarch':'cornStarch/product/featureImage.png',
    '5x5':'assets/instaMe.png',
    'weathering':'Weathering/featureImage.png'
}
const Title = {
    'cornStarch':'Bioplastics Jewelry Collection: Corn to Cornucopia',
    '5x5':'Insta Me',
    'weathering':'Weathering with Mars'
};
const Time ={
    'cornStarch':'2020 Spring',
    '5x5':'2020 Fall',
    'weathering':'2020 Spring'
}
const Type ={
    'cornStarch':'Individual Project',
    '5x5':'Individual Project',
    'weathering':'Individual Project'
}
const Duration ={
    'cornStarch':'1 month',
    '5x5':'2.5 weeks',
    'weathering':'1 week'
}
const Skill ={
    'cornStarch':['research and experiment', 'hand crafting', 'video production', 'photography', 'styling', 'adobe CC'],
    '5x5':['html/css', 'JavaScript', 'p5.js'],
    'weathering':['p5.js', 'html/css', 'RiveScript', 'NASA Insight API', 'P5speech.js']
}
const Goal ={
    'cornStarch':[
        'Exploring the possibility of bioplastics',
        'Refine the recipe of corn starch bioplastics.',
        'Design wearable jewelry collection'
    ],
    '5x5':[
        'Explore the notion of online self in personal Instagram data',
	    'Explore the possibility of data visualization'
    ],
    'weathering':[
        'explore audio interaction, basic AI and using API.', 
        'Design UIUX interface'
    ]
}
const Description ={
    'cornStarch':{
        'summary':['This is a bio-design research project that explore the various properties of bioplastics and the possible application bio-degradable materials.','Corn to Cornucopia Jewelry Collection breaks through the stereotypical notion of jewels, exploring the possibility and the organic and exotic beauty of the most mundane, corn starch.','The collection of jewelries is only composed of corn starch bioplastics pieces, copper wire for wearable purposes, cohesion and some pearls. The relatively abstract look embraces the conformation of flowers and the notion of nature since the major component of it is natural.'],

        'inspiration':'When I was a kid, my grandma showed me the magic property of sweet potato starch, but it was only for food purpose. I didn’t know that something organic can feel and look synthetic until my professor, Shuyi Cao brought all the bioplastics experiments of wired organic shapes to class. I could not guess what material they were made of. Her experimental pieces inspired me to research more about the possibility corn starch.,' ,

        'process':'In the research process, I experimented in my kitchen and refined the recipe of bioplastics into different textures for various uses, creating food-graded and disposable alternatives for plastics and biodegradable plastics.'
    },
    '5x5':{
        'summary':['Insta Me is a set of explorations of web media in which I express the notion of online self based on my personal instagram data.'],
        'Inspiration':'',
        'process':'',
    },
    'weathering':{
        'summary':[
            'Weathering with Mars is A voice-activated Mars weather assistance, using the P5speech.js library and the information from NASA Insight API.',

            'With a simplistic yet animated illustrations, the bot will travel with you to Mars and chat with you about the temperature, time, wind-speed and more information about Mars.', 
            
            'This project mainly targets children and younger teenagers, being envisioned in settings like museum interactive displays or educational websites.'
        ],
        'Inspiration':'',
        'process':'',
    }
}
const Pics = {
    'cornStarch':{
        'process': ['processOverview.jpg','materialOverview1.jpg','materialOverview2.jpg','material1.jpg','material2.jpg','material3.jpg','material4.jpg','material5.jpg','material6.jpg','material7.jpg','material8.jpg'],
        'product':['all1.jpg','all2.jpg','p1_inuse.jpg','p1.jpg','p2_inuse.jpg','p2.jpg','p3_00.jpg','p3_01.jpg','p3_02.jpg','p4.jpg','p5_01.jpg','p5.jpg','p6_00.jpg','p6_01.jpg','p6_inuse.jpg','set_inuse.jpg','set1.jpg','set2_inuse.jpg']
    },
    '5x5':'',
    'weathering':{
        'process':['process1.png','process2.png'],
        'product':['weathering.gif']
    }
};
const Link ={
    'cornStarch':'<iframe width="760" height="415" src="https://www.youtube.com/embed/qfNkB9sB-WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '5x5':'<button><a href="https://elenalalala.github.io/InstaMe/">Click here to Know more!</a></button>',
    'weathering':'<button><a href="https://editor.p5js.org/ElenaPeng/present/4PXWmeeWU">Play it yourself!</a></button>'
}

function loadPage(project){
    loadImage(project);
    loadTitle(project);
    loadTime(project);
    loadType(project);
    loadDuration(project);
    loadGoal(project);
    loadSkillSet(project);
    loadFeature(project);
    loadDescription(project);
    loadLink(project);
}
function loadFeature(projectName){
    const feature = document.getElementById('featureImage');
    const image = document.createElement('img');
    image.src = Feature[projectName];
    feature.appendChild(image);
}
function loadTitle(projectName){
    const pageTitle = document.getElementById('page-title');
    const title = document.getElementById('title');
    pageTitle.innerText = Title[projectName];
    title.innerText = Title[projectName];
}

function loadTime(projectName){
    const time = document.getElementById('time');
    time.innerText =Time[projectName];
}
function loadType(projectName){
    const projectType = document.getElementById('projectType');
    projectType.innerText = Type[projectName];
}
function loadDuration(projectName){
    const duration = document.getElementById('duration');
    duration.innerText = `Duration: ${Duration[projectName]}`;
}
function loadSkillSet(projectName){
    const skillSet = document.querySelector('#skillSet ul');
    Skill[projectName].forEach( element =>{
        const skill = document.createElement('li');
        skill.innerText = element;
        skillSet.appendChild(skill);
    });
}
function loadGoal(projectName){
    const goals = document.getElementById('goal');
    Goal[projectName].forEach( element =>{
        const goal = document.createElement('li');
        goal.innerText = element;
        goals.appendChild(goal);
    });
}
function loadDescription(projectName){
    const description = document.getElementById('description');

    Description[projectName].summary.forEach(element =>{
        const summary = document.createElement('p');
        summary.setAttribute('class','summary');
        summary.innerText = element;
        description.appendChild(summary);
    });

    if(Description[projectName].inspiration != ''){
        const inspiration = document.createElement('p');
        inspiration.setAttribute('class','inspiration');
        inspiration.innerText = Description[projectName].inspiration;
        description.appendChild(inspiration);
    }
    if(Description[projectName].process != ''){
        const process = document.createElement('p');
        process.setAttribute('class','process');
        process.innerText = Description[projectName].process;
        description.appendChild(process);
    }
    
}
function loadImage(projectName){
    const processWrapper = document.createElement('div');
    const productWrapper = document.createElement('div');
    processWrapper.setAttribute('id','processImage');
    productWrapper.setAttribute('id','productImage');
    if(projectName == 'cornStarch' || projectName =='weathering'){
    Pics[projectName].product.forEach(element => {
        const pic = document.createElement('img');
        pic.src = `${projectName}/product/${element}`;
        pic.alt = `${element}`;
        // pic.style.width ='50vw';
        // pic.style.height ='auto';
        productWrapper.appendChild(pic);
    });
    Pics[projectName].process.forEach(element => {
        const pic = document.createElement('img');
        pic.src = `${projectName}/process/${element}`;
        pic.alt = `${element}`;
        // pic.style.width ='50vw';
        // pic.style.height ='auto';
        processWrapper.appendChild(pic);
    });
    main.appendChild(productWrapper);
    main.appendChild(processWrapper);
}
}
function loadLink(projectName){
    const link = document.getElementById('link');
    link.innerHTML = Link[projectName];
}

let id = window.location.search.substring(1);
loadPage(id);