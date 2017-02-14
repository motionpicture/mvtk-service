// tslint:disable-next-line:missing-jsdoc
import * as mvtkService from '../../lib/mvtk-service';
mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp',
    'https://reservetest.movieticket.jp'
);



describe('購入管理番号認証サービス', () => {
    it('購入管理番号認証', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: '',
            jhshbtsCd: '',
            knyknrNoInfoIn: [],
            skhnCd: '',
            stCd: '',
            jeiYmd: ''
        }).then(
            (result) => {
                console.log(result);
                done();
            },
            (err) => {
                done(new Error(err.message()));
            }
        );
    });
});
