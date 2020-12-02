var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYdN7Jur6PIL9sJ'}).base('appSpjcbZHvKRY8O0');




base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
        let obj =[];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Date'));
        // console.log(record);
        const time = record.get('Date');
        const note = record.get('Notes');
        const imageURL = record.get('Image')[0].url;
        const name = record.get('Name');
        const id = record.id;
        obj =[id,imageURL,time,note,name];
        // insertImage(id,imageURL,time,note,name);//need a name of the new html and image url for input
        changeContent(obj);
    });

}, function done(err) {
    if (err) { console.error(err); return; }
});
const contentWrapper = document.createElement('div');
const dtContentWrapper = document.createElement('div');
timeUpdater();
dtUpdater();
otherUpdater();

function timeUpdater(){
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
function otherUpdater(){
                // let imgDate = document.getElementById('time');
                // let imgDescr = document.getElementById('method');
                // let imgName = document.getElementById('title');
    const other = document.getElementById('other');
    other.addEventListener('mouseenter',()=>{
    const mainSection = document.getElementById('content-grid');
    // const otherDescr = document.createElement('div');
    // otherDescr.innerHTML =`
    // <h2>Corn Starch Bioplastics Project</h2>
    // <h3>Design Goals</h3>
    // <ul>
    //     <li>Explore the possibility of bioplastics</li>
    //     <li>Refine the recipes of corn starch bioplastics</li>
    //     <li>Design wearable jewelry collection</li>
    // </ul>
    // `
   
    
    // imgName.innerText = 'Corn Starch Bioplastics Project';
    // imgDescr.innerHTML = `
    //                     <h3>Design Goals</h3>
    //                     <ul>
    //                         <li>Explore the possibility of bioplastics</li>
    //                         <li>Refine the recipes of corn starch bioplastics</li>
    //                         <li>Design wearable jewelry collection</li>
    //                     </ul>
    // `
    // imgDate.innerText = '2020 Spring';
    contentWrapper.setAttribute('id', 'otherContent');
    contentWrapper.innerHTML =`
    <h2>Corn Starch Bioplastics Project</h2>
    <p>2020 Spring</p>
    <h3>Design Goals</h3>
    <ul>
        <li>Explore the possibility of bioplastics</li>
        <li>Refine the recipes of corn starch bioplastics</li>
        <li>Design wearable jewelry collection</li>
    </ul>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qfNkB9sB-WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;


    //load image from corns
for(let i = 1 ; i <14; i++){
    const pic = document.createElement('img');
    pic.src = `assets/cornStarch/${i}.jpg`;
    pic.alt = 'cornStarch pics';
    pic.style.width = '560px';
    pic.style.height = 'auto';
    contentWrapper.appendChild(pic);
}

    mainSection.appendChild(contentWrapper);
});
}
function dtUpdater(){
    const dt = document.getElementById('dt');
    dt.addEventListener('mouseenter',()=>{
        const mainSection = document.getElementById('content-grid');
        dtContentWrapper.setAttribute('id','dtContent');
        dtContentWrapper.innerHTML =`
            <h3>2020 Fall</h3>
            <p>A set of data explorations based on personal data from Instagram.</p>
            <a href = "https://elenalalala.github.io/InstaMe/">
            <h2>Insta Me</h2>
            <img src="assets/instaMe.png" width ="100%" height ="auto">
            </a>
        `;
        console.log('dt stuff here');
        mainSection.appendChild(dtContentWrapper);
    });
}
function changeContent(obj){
        // timeUpdater();
        const dt = document.getElementById('dt');
        const visual = document.getElementById('drawing');
        const other = document.getElementById('other');

        const mainSection = document.getElementById('content-grid');
        // let imgWrapperIsHidden = false;
        // let imgDateIsHidden = false;
        // let imgDescrIsHidden = false;
        // let imgNameIsHidden = false;

        let imageWrapper = document.createElement('div');
            console.log(dtContentWrapper);
            
        const id = obj[0];
        const imageURL = obj[1];
        const time = obj[2];
        const note = obj[3];
        const name = obj[4];

        dt.addEventListener('mouseenter',()=>{
            let imgDate = document.getElementById('time');
            let imgDescr = document.getElementById('method');
            let imgName = document.getElementById('title');
            // imageWrapper.hidden = true;
            imgDate.hidden  = true;
            imgDescr.hidden  = true;
            imgName.hidden  = true;
            imageWrapper.innerHTML ='';
            // show others
            contentWrapper.hidden = true;
            // dtcontentWrapper.hidden = false;
            
        });

        other.addEventListener('mouseenter',()=>{
            let imgDate = document.getElementById('time');
            let imgDescr = document.getElementById('method');
            let imgName = document.getElementById('title');
            // imageWrapper.hidden = true;
            imgDate.hidden  = true;
            imgDescr.hidden  = true;
            imgName.hidden  = true;
            imageWrapper.innerHTML ='';
            // show others
            contentWrapper.hidden = false;
        });



            visual.addEventListener('mouseenter',()=>{
                let imgDate = document.getElementById('time');
                let imgDescr = document.getElementById('method');
                let imgName = document.getElementById('title');

      
                imgDate.hidden  = false;
                imgDescr.hidden  = false;
                imgName.hidden  = false;
           
            //hide others
            contentWrapper.hidden = true;
            // dtcontentWrapper.hidden = true;

            imageWrapper.setAttribute('class','drawings');
            // imageWrapper.style.backgroundImage = `url(${img})`;
            imageWrapper.innerHTML =`
                    <img src ="${imageURL}">
            `;
            imageWrapper.addEventListener('mouseover', ()=>{
                imgDate.innerText = time;
                imgDescr.innerText = note;
                imgName.innerText = name;
            });
            mainSection.appendChild(imageWrapper);
            });
}
