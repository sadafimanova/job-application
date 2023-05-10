const recentJobsSection = document.querySelector(".job-listing");
fetch('jobs-data.json').then(response=>response.json())
.then(data=>{
  const jobs=data.recentJobs;
  jobs.forEach(element => {
    const jobElement=document.createElement('div');
    jobElement.className='job'
    jobElement.innerHTML=`
    <h3 className="title">${element.title}</h3>
    <p className="company">${element.company}</p>
    <p className="location">${element.location}</p>
    <p className="description">${element.description}</p>
    <p className="requirements">${element.requirements}</p>
    <a href="${element.applyLink}">Apply now!<a>
    `;
    recentJobsSection.appendChild(jobElement)
  }); 
});

const popularJobsSection = document.querySelector(".popular-job-listing");
fetch('jobs-data.json').then(response=>response.json())
.then(data=>{
  const popularJobs=data.jobs;
  console.log(data.jobs)
  popularJobs.forEach(element => {
    const jobElement=document.createElement('div');
    jobElement.className='job'
    jobElement.innerHTML=`
    <h3 className="title">${element.title}</h3>
    <p className="company">${element.company}</p>
    <p className="location">${element.location}</p>
    <p className="description">${element.description}</p>
    <p className="requirements">${element.requirements}</p>
    <a href="${element.applyLink}">Apply now!<a>
    `;
    popularJobsSection.appendChild(jobElement)
  }); 

  const input=document.querySelector('input');
  const jobs=document.querySelectorAll('.job')
  console.log(document.querySelector('.title'))
  input.addEventListener('keyup',(e)=>{
    const searchItem=e.target.value.toLowerCase().trim()
    jobs.forEach(job=>{
      if(job.textContent.toLowerCase().includes(searchItem)){
        job.style.display='block'
      }
      else{
        job.style.display='none'
      }
    })
  })

});
