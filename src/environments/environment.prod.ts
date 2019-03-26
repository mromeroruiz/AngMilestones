export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'ang-milestones.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'milestones1150.azurewebsites.net'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'localhost:50492';
}