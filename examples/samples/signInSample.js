
var mvtkService = require('../../lib/mvtk-service');

mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp'
);

var utilService = mvtkService.createUtilService();
utilService.signIn('00000539', (err, response, cookieString) => {
    if (err) {
        console.log('signIn processed. err:', err);
    } else {
        // サービス側でログイン成功

        // 会員情報詳細を取得(クッキーをセットしてサービスを再生成)
        mvtkService.setCookie(cookieString);

        memberInfoService = mvtkService.createMemberInfoService();
        memberInfoService.getMemberInfoDetail((err, response, memberInfoResult) => {
            if (err) {
                console.log('getMemberInfoDetail processed. err:', err);
            } else {
                console.log('getMemberInfoDetail processed. memberInfoResult:', memberInfoResult);
            }
            var movieLogService = mvtkService.createMovieLogService();
            
        });
    }
});
