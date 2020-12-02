var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYdN7Jur6PIL9sJ'}).base('appSpjcbZHvKRY8O0');

drawingInfo();
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
            if(category == 'drawing'){
                    const time = record.get('Date');
                    const note = record.get('Notes');
                    const imageURL = record.get('Image')[0].url;
                    const name = record.get('Name');
                    image.src = imageURL;
                    image.setAttribute('class','drawings');
                        image.addEventListener('mouseover', ()=>{
                            imgDate.innerText = time;
                            imgDescr.innerText = note;
                            imgName.innerText = name;
                        });
                    kindWrapper.appendChild(image);

            }else{
                const projectTitle = record.get('Name');
                const link = document.createElement('a');
                link.href = `project.html?${projectTitle}`;
                image.setAttribute('class','projectPic');
                image.src = record.get('Image')[0].url;
                link.appendChild(image);
                kindWrapper.appendChild(link);
            }
        });
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    kind.addEventListener('click', ()=>{
        // hide the drawing info when clicking other categories
        if(category != 'drawing'){
            imgDate.innerText='';
            imgDescr.innerText = '';
            imgName.innerText = '';
        }
        console.log(kind);
        const mainChild = mainSection.childNodes;
        mainChild.forEach(child => mainSection.removeChild(child));
        mainSection.appendChild(kindWrapper);
    });
}


function drawingInfo(){
    const footer = document.getElementById('description');
    const time = document.createElement('div');
    const descr = document.createElement('p');
    const name = document.createElement('h3');
    time.setAttribute('id','time');
    descr.setAttribute('id','method');
    name.setAttribute('id','title');
    footer.appendChild(name);
    footer.appendChild(time);
    footer.appendChild(descr);
    
}

