import * as mvtk from '../lib/mvtk-service';

mvtk.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp',
    'https://reservetest.movieticket.jp'
);

const filmService = mvtk.createFilmService();

filmService.getFilmTopPage('01', (err, res, result) => {
    console.log(result);
});
