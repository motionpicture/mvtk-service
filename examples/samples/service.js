const mvtk = require('../../lib/index');

mvtk.service.initialize(
    'https://ssl.movieticket.jp',
    'https://test service.movieticket.jp'
);

main();

async function main() {
    try {
        const filmService = mvtk. service.createFilmService();
        const filmTopPage = await filmService.getFilmTopPage(mvtk. service.Constants.DVC_TYP_PC);
        console.log(filmTopPage.result);
    } catch (err) {
        console.log(err);
    }

}