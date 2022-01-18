var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYdN7Jur6PIL9sJ'}).base('appSpjcbZHvKRY8O0');


loadContent('dt');
loadContent('experiment');
loadContent('drawing');


function loadContent(category){
    const kind = document.getElementById(category);
    const mainSection = document.getElementById('content-grid'); 
    base(category).select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const image = document.createElement('img');
            const link = document.createElement('a');

            const time = record.get('Date');
            const note = record.get('Notes');
            const imageURL = record.get('Image')[0].url;
            const projectTitle = record.get('Name');

            
            image.setAttribute('class','projectPic');
            image.src = imageURL;

            link.href = `project.html?${projectTitle}`;
            link.appendChild(image);

            mainSection.appendChild(link);

    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
})
}


    
  


function Info(){
    const infoWrapper = document.createElement('div');
    const time = document.createElement('div');
    const descr = document.createElement('p');
    const name = document.createElement('h3');
    time.setAttribute('id','time');
    descr.setAttribute('id','method');
    name.setAttribute('id','title');
    infoWrapper.appendChild(name);
    infoWrapper.appendChild(time);
    infoWrapper.appendChild(descr);
}

