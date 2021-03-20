const main = document.getElementById('content');
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
    image.setAttribute('alt',data.Feature[projectName]);
    image.src = data.Feature[projectName];
    feature.appendChild(image);
    if(projectName = 'zero'){
        image.style.marginTop = '10%';
        image.style.width = '50%';
    }
}
function loadTitle(projectName){
    const pageTitle = document.getElementById('page-title');
    const title = document.getElementById('title');
    pageTitle.innerText = data.Title[projectName];
    title.innerText = data.Title[projectName];
}

function loadTime(projectName){
    const time = document.getElementById('time');
    time.innerText =data.Time[projectName];
}
function loadType(projectName){
    const projectType = document.getElementById('projectType');
    projectType.innerText = data.Type[projectName];
}
function loadDuration(projectName){
    const duration = document.getElementById('duration');
    duration.innerText = `Duration: ${data.Duration[projectName]}`;
}
function loadSkillSet(projectName){
    const skillSet = document.querySelector('#skillSet ul');
    data.Skill[projectName].forEach( element =>{
        const skill = document.createElement('li');
        skill.innerText = element;
        skillSet.appendChild(skill);
    });
}
function loadGoal(projectName){
    const goals = document.getElementById('goal');
    data.Goal[projectName].forEach( element =>{
        const goal = document.createElement('li');
        goal.innerText = element;
        goals.appendChild(goal);
    });
}
function loadDescription(projectName){
    const description = document.getElementById('description');

    data.Description[projectName].summary.forEach(element =>{
        const summary = document.createElement('p');
        summary.setAttribute('class','summary');
        summary.innerText = element;
        description.appendChild(summary);
    });
    if(data.Description[projectName].inspiration != undefined){
        const inspiration = document.createElement('p');
        inspiration.setAttribute('class','inspiration');
        inspiration.innerText = data.Description[projectName].inspiration;
        description.appendChild(inspiration);
    }
    if(data.Description[projectName].process != undefined){
        const process = document.createElement('p');
        process.setAttribute('class','process');
        process.innerText = data.Description[projectName].process;
        description.appendChild(process);
    }
    if(projectName == 'zero'){
        console.log(projectName);
        const settingWrapper = document.createElement('div');
        const Setting = document.createElement('h3');
        Setting.innerText = 'World Setting';
        settingWrapper.appendChild(Setting);
        const backgroundWrapper = document.createElement('div');
        const Background = document.createElement('h3');
        Background.innerText = 'Project Background';
        backgroundWrapper.appendChild(Background);

        data.Description[projectName].setting.forEach(para =>{
            const setting = document.createElement('p');
            setting.innerText = para;
            settingWrapper.appendChild(setting);
        });
        data.Description[projectName].background.forEach(para =>{
            const background = document.createElement('p');
            background.innerText = para;
            backgroundWrapper.appendChild(background);
        });
        
        
        

        const functionality = document.createElement('ul');
        const functionTitle = document.createElement('h3');
        functionTitle.innerText = 'Main Function';
        functionality.appendChild(functionTitle);

        data.Description[projectName].functionality.forEach(list =>{
            const point = document.createElement('li');
            point.style.listStyle = 'square';
            point.style.textAlign = 'left';
            point.style.width = '270px';
            point.style.margin = '20px';
            point.style.marginLeft = '35%';
            point.innerText = list;
            functionality.appendChild(point);
        });
        const zeroWrapper = document.createElement('section');
        zeroWrapper.appendChild(settingWrapper);
        zeroWrapper.appendChild(backgroundWrapper);
        zeroWrapper.appendChild(functionality);
        description.appendChild(zeroWrapper);
    }
    
}
function loadImage(projectName){
    const processWrapper = document.createElement('div');
    const productWrapper = document.createElement('div');
    processWrapper.setAttribute('id','processImage');
    productWrapper.setAttribute('id','productImage');
    if(data.Pics[projectName].product != undefined || data.Pics[projectName].process != undefined){
    data.Pics[projectName].product.forEach(element => {
        const pic = document.createElement('img');
        pic.src = `${projectName}/product/${element}`;
        pic.alt = `${element}`;
        // pic.style.width ='50vw';
        // pic.style.height ='auto';
        productWrapper.appendChild(pic);
    });
    data.Pics[projectName].process.forEach(element => {
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
    link.innerHTML = data.Link[projectName];
}

let id = window.location.search.substring(1);
loadPage(id);