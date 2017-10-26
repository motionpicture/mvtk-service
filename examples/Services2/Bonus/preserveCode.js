/**
 * BonusGrantingService.getFilmTopPage example
 */
var mvtkService = require('../../../lib/mvtk-service');
mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);
const bonusGrantingService = mvtkService.createBonusGrantingService();
bonusGrantingService.preserveCode({
    "HIYKSSI_FLG": "0",
    "HIYKSSI_TYP": "",
    "KNSHKN_INFO": {
        "KnshknInfo": [
            {
                "KNSH_TYP": "01",
                "KNYMI_NUM": "2"
            }
        ]
    },
    "KNY_DT": "2017/10/26 15:38:58",
    "KSSIHH_TYP": "00",
    "SKHN_CD": "048278",
    "TKN_ID": "b4aa2eb4796fbf8ec8ed89044939eff6"
}, (err, response, result) => {
    // tslint:disable-next-line:no-console
    console.log(err, response, result);
});