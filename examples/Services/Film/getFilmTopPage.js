/**
 * filmService.getFilmTopPage example
 */
var mvtkService = require('../../../lib/mvtk-service');
mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);
const filmService = mvtkService.createFilmService();
filmService.getFilmTopPage('01', (_, __, result) => {
    // tslint:disable-next-line:no-console
    console.log(result);
});