// tslint:disable:missing-jsdoc no-console
import * as mvtkService from '../../lib/mvtk-service';
mvtkService.initialize(
    'https://ssl.movieticket.jp',
    'https://testservices.movieticket.jp',
    'https://reservetest.movieticket.jp'
);

/**
 * テスト
 */

describe('購入管理番号認証サービス', () => {
    it('購入管理番号認証　存在する', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000', //興行会社コード
            jhshbtsCd: '1', //情報種別コード
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '6890200303', //購入管理番号
                    PIN_CD: '7648' // PINコード
                },
                {
                    KNYKNR_NO: '6890200303', //購入管理番号
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '16140', //作品コード
            stCd: '18', //サイトコード
            jeiYmd: '2017/02/16' //上映年月日
        }).then(
            (result) => {
                console.log(result);
                done();
            },
            (err) => {
                done(new Error(err.message));
            }
        );
    });

    it('購入管理番号認証　存在しない', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: '',
            jhshbtsCd: '',
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '',
                    PIN_CD: ''
                }
            ],
            skhnCd: '',
            stCd: '',
            jeiYmd: ''
        }).then(
            // tslint:disable-next-line:variable-name
            (_result) => {
                done(new Error('存在する'));
            },
            // tslint:disable-next-line:variable-name
            (_err) => {
                done();
            }
        );
    });
});
