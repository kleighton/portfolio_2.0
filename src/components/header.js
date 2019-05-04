/* Header Component*/
import PrimaryBtn from '../utilities/buttons';

var header = function () {
  const appContainer = document.getElementById('appContainer');
  var headerContainer = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerAccount = document.createElement('div');
  const headerProfile = document.createElement('div');
  var headerProfileDropdown = document.createElement('div');

  headerContainer.className = 'headerContainer';
  headerTitle.className = 'headerTitle';
  headerTitle.innerHTML = 'Client Leads';
  headerAccount.className = 'headerAccount';
  headerProfile.className = 'headerProfile';
  headerProfileDropdown.className = 'headerProfileDropdown';

  headerContainer.appendChild(headerTitle);

  const addBtn = new PrimaryBtn('secondary','Add Client');
  headerContainer.appendChild(addBtn.btn);
  headerContainer.className = 'headerContainer';

  /* Methods */
  var render = function(){
    appContainer.appendChild(headerContainer);
  }
  return {
    render: render
  }

}();

export { header }