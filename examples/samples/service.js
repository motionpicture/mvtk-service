const mvtk = require('../../lib/mvtk-service');

mvtk.service.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);

main();

async function main() {
    const filmService = mvtk.service.createFilmService();
    const filmTopPage = await filmService.getFilmTopPage(mvtk.service.Constants.DVC_TYP_PC);
    console.log(filmTopPage.result);
}