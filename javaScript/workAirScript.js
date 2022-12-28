var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYdN7Jur6PIL9sJ'}).base('appSpjcbZHvKRY8O0');

GenerateInfo();
loadContent('dt');
loadContent('experiment');
loadContent('drawing');


function loadContent(category){
    const kind = document.getElementById(category);
    const mainSection = document.getElementById('content-grid'); 
    const kindWrapper = document.createElement('div');
    //drawing info
    const imgDate = document.getElementById('time');
    const imgDescr = document.getElementById('method');
    const imgName = document.getElementById('title');
    base(category).select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const image = document.createElement('img');
            const time = record.get('Date');
            const note = record.get('Notes');
            const type = record.get('Type');
            const projectTitle = record.get('Name');
            const infoSection = document.getElementById('descr-wrapper');
            const link = document.createElement('a');
            if(category == 'drawing'){
                link.href = 'javascript: void(0)';
                link.style.cursor = 'default';
            }else{
                link.href = `project.html?${projectTitle}`;
            }
            image.setAttribute('class','projectPic');
            image.src = record.get('Image')[0].url;

            link.addEventListener('mouseenter', function(evt){
                imgDate.innerText = time;
                imgDescr.innerText = (category == 'drawing' ? note: type);
                imgName.innerText = (category == 'drawing' ? projectTitle: note);
                // evt.target.style.opacity = '0.7';
                evt.target.appendChild(infoSection);
                infoSection.classList.toggle('visible');
                        
            });

            link.addEventListener('mouseleave',()=>{
                infoSection.classList.toggle('visible');
            });

            link.appendChild(image);
            kindWrapper.appendChild(link);

            if(category == 'dt'){
                // show default project when first landing // style the default categories
                mainSection.appendChild(kindWrapper);
                kind.style.backgroundColor ='rgb(202, 151, 20)';
                kind.style.color = 'white';
                }
                
        });
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    kind.addEventListener('mouseover',(evt)=>{
        evt.target.style.backgroundColor ='black';
        evt.target.style.color = 'white';
    });

    kind.addEventListener('mouseleave',(evt)=>{
        if(evt.target.style.backgroundColor == 'rgb(202, 151, 20)'){
            return;
        }else{
            evt.target.style.backgroundColor ='white';
            evt.target.style.color = 'black';
        }
    });

    kind.addEventListener('click', (e)=>{
        // hide the drawing info when clicking other categories
        // if(category != 'drawing'){
            //click完之后都变金色
        e.target.style.backgroundColor ='rgb(202, 151, 20)';
        e.target.style.color = 'white';
        console.log(kind);
        const mainChild = mainSection.childNodes;
        console.log(mainChild[0]);
        mainChild.forEach(child => mainSection.removeChild(child));
        console.log(mainChild);
        mainSection.appendChild(kindWrapper);
    });
}


function Info(){
    //old info box
    // const projectbox = document.getElementById('content-grid');
    const infobox = document.createElement('div');
    const time = document.createElement('div');
    const descr = document.createElement('p');
    const name = document.createElement('h3');
    time.setAttribute('id','time');
    descr.setAttribute('id','method');
    name.setAttribute('id','title');
    infobox.appendChild(name);
    infobox.appendChild(time);
    infobox.appendChild(descr);
    // projectbox.appendChild(infobox);
}
function GenerateInfo(){
    let temp = document.getElementById('description');
    let clone = temp.content.cloneNode(true);
    // template clone needs to be append into the html in order to be called in other places. 
    temp.parentNode.appendChild(clone);
    // clone.style.display = 'none';
}
