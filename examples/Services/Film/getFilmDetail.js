/**
 * filmService.getFilmTopPage example
 */
var mvtkService = require('../../../lib/mvtk-service');
mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);
const filmService = mvtkService.createFilmService();
filmService.getFilmDetail('062674', '01', (_, __, result) => {
    // tslint:disable-next-line:no-console
    console.log('getFilmDetail', result.tktnzikjkymsgTxt);
});

filmService.getFilmDetail('031695', '01', (_, __, result) => {
    // tslint:disable-next-line:no-console
    console.log('getFilmDetail 特典の在庫がある作品', result.tktnzikjkymsgTxt);
});


filmService.getFilmDetail('063492', '01', (_, __, result) => {
    // tslint:disable-next-line:no-console
    console.log('getFilmDetail 特典が在庫切れとなった作品', result.tktnzikjkymsgTxt);
});