import * as Sentry from '@sentry/browser';


function init(){

    Sentry.init({dsn: "https://2e343aac6fdf46ac9fb07613d3572e41@sentry.io/2205593"});

}

function capture(error){
Sentry.captureException(error)
}
export default{

    init,capture
}