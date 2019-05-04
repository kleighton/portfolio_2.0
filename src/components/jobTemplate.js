import PrimaryBtn from '../utilities/buttons';

//JOB TEMPLATE COMPONENT
export default function jobTemplate(cont, name, url){
  var job = document.createElement('div')
  job.className = 'jobContainer widget';
  job.name = name;
  job.url = url;
  job.innerHTML = '<div style="display:inline-block;width:calc(100% - 290px);">' + job.name + '</div>';
  job.style.height = '31px';
  job.style.transition =  '.2s ease-out';
  job.style.overflow = 'hidden'

  /** buttons **/
  var removeJobBtn = new PrimaryBtn('secondary','Remove Lead', removeBtn);
  function removeBtn(){
    job.style.height = '0px';
    job.style.margin = '0px';
    job.style.paddingTop = '0px';
    job.style.paddingBottom = '0px';
    setTimeout(function(){
      job.remove();
    },200)
  }

  var goToUrl = new PrimaryBtn('primary','View Client', redirectToUrl);
  function redirectToUrl(){
    window.location = job.url;
  }

  job.appendChild(goToUrl.btn);
  job.appendChild(removeJobBtn.btn);
  cont.appendChild(job);

  return job;
}
