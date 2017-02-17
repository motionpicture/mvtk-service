var mvtkService = require('../../lib/mvtk-service');

mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp',
    'https://reservetest.movieticket.jp'
);


let utilService = mvtkService.createUtilService();
let args = {
    list: [
        '充浩'
    ]
};
utilService.encryptDataList(args, (err, response, encryptedStrings) => {
    console.log(response);
});