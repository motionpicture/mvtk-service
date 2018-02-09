const mvtk = require('../../lib/index');

mvtk.services.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);

main();

async function main() {
    try {
        const filmService = mvtk.services.createFilmService();
        const filmTopPage = await filmService.getFilmTopPage(mvtk.services.Constants.DVC_TYP_PC);
        console.log(filmTopPage.result);
    } catch (err) {
        console.log(err);
    }

}