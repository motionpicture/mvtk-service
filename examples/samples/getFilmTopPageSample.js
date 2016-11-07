var mvtkService = require('../../lib/mvtk-service');

console.log('Constants:', mvtkService.Constants);

mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);

var filmService = mvtkService.createFilmService();
filmService.getFilmTopPage(mvtkService.Constants.DVC_TYP_PC, (err, response, results) => {
    if (err) {
        //console.log('getFilmTopPage processed. err:', err);
    } else {
        //console.log('getFilmTopPage processed. err:', err, response, results);
    }
});
