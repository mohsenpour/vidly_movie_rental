//import * as Sentry from '@sentry/browser';

function init() {
  //Sentry.init({ dsn: "https://4513bcbbc63643fa8f23648cd13f81e4@o393087.ingest.sentry.io/5241656" });
}

function log(error) {
  //Sentry.captureException(error);
  console.error(error)
}

export default {
  init,
  log
};