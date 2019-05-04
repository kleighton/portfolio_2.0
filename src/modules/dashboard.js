import jobTemplate from '../components/jobTemplate';

var dashboard = function () {
  const appContainer = document.getElementById('appContainer');
  var container = document.createElement('div');
  container.id = 'container';

  const mockData = [{
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'back end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }, {
    name: 'Front end dev',
    link: 'https://www.cukeragency.com/careers/show/responsive-web-developer/'
  }];

  for (var a = 0; mockData[a]; a++) {
    var item = new jobTemplate(container, mockData[a].name, mockData[a].link);
    container.appendChild(item);
  }

  /* Methods */
  var render = function () {
    appContainer.appendChild(container);
  }
  return {
    render: render
  }

}();

export {
  dashboard
}