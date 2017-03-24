// tslint:disable:missing-jsdoc no-console
import * as assert from 'assert';
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
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID, //情報種別コード
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '3472695908', //購入管理番号
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1622100', //作品コード
            stCd: '18', //サイトコード
            jeiYmd: '2017/02/16' //上映年月日
        }).then(() => {
            done();
        });
    });

    it('購入管理番号認証　存在しない購入管理番号', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000', //興行会社コード
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID, //情報種別コード
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '1111111111', //購入管理番号
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1622100', //作品コード
            stCd: '18', //サイトコード
            jeiYmd: '2017/02/16' //上映年月日
        }).then((result) => {
            assert(result[0].knyknrNoMkujyuCd, mvtkService.PurchaseNumberAuthUtilities.PURCHASE_INVALIDITY_REASON_NO_EXISTENCE);
            done();
        });
    });

    it('購入管理番号認証　存在しない作品', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000', //興行会社コード
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID, //情報種別コード
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '3472695908', //購入管理番号
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1000000', //作品コード
            stCd: '18', //サイトコード
            jeiYmd: '2017/02/16' //上映年月日
        }).catch((err)=>{
            assert(err.message, '存在しない作品コードが入力されました。');
            done();
        });
    });
});
describe('座席指定情報連携サービス', () => {
    it('座席指定情報連携', (done) => {
        const service = mvtkService.createSeatInfoSyncService();
        service.seatInfoSync({
            kgygishCd: 'SSK000', //興行会社コード
            yykDvcTyp: mvtkService.SeatInfoSyncUtilities.RESERVED_DEVICE_TYPE_MVTK_SITE, //予約デバイス区分
            trkshFlg: mvtkService.SeatInfoSyncUtilities.DELETE_FLAG_FALSE, //取消フラグ
            kgygishSstmZskyykNo: '118124', //興行会社システム座席予約番号
            kgygishUsrZskyykNo: '124', //興行会社ユーザー座席予約番号
            jeiDt: '2017/03/02 10:00:00', //上映日時
            kijYmd: '2017/03/02', //計上年月日
            stCd: '18', //サイトコード
            screnCd: '10', //スクリーンコード
            knyknrNoInfo: [
                {
                    KNYKNR_NO: '4450899842', //購入管理番号（ムビチケ購入番号）
                    PIN_CD: '7648', //PINコード（ムビチケ暗証番号）
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01', //券種区分
                            MI_NUM: '2' //枚数
                        }
                    ]
                }
            ],
            zskInfo: [
                {
                    ZSK_CD: 'Ａ－２' //座席コード
                },
                {
                    ZSK_CD: 'Ａ－３' //座席コード
                }
            ],
            skhnCd: '1622700' //作品コード
        }).then((result) => {
            assert.equal(result.zskyykResult, mvtkService.SeatInfoSyncUtilities.RESERVATION_SUCCESS);
            done();
        });
    });
    it('座席指定情報連携削除', (done) => {
        const service = mvtkService.createSeatInfoSyncService();
        service.seatInfoSync({
            kgygishCd: 'SSK000', //興行会社コード
            yykDvcTyp: mvtkService.SeatInfoSyncUtilities.RESERVED_DEVICE_TYPE_MVTK_SITE, //予約デバイス区分
            trkshFlg: mvtkService.SeatInfoSyncUtilities.DELETE_FLAG_TRUE, //取消フラグ
            kgygishSstmZskyykNo: '118124', //興行会社システム座席予約番号
            kgygishUsrZskyykNo: '124', //興行会社ユーザー座席予約番号
            jeiDt: '2017/03/02 10:00:00', //上映日時
            kijYmd: '2017/03/02', //計上年月日
            stCd: '15', //サイトコード
            screnCd: '1', //スクリーンコード
            knyknrNoInfo: [
                {
                    KNYKNR_NO: '4450899842', //購入管理番号（ムビチケ購入番号）
                    PIN_CD: '7648', //PINコード（ムビチケ暗証番号）
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01', //券種区分
                            MI_NUM: '2' //枚数
                        }
                    ]
                }
            ],
            zskInfo: [
                {
                    ZSK_CD: 'Ａ－２' //座席コード
                },
                {
                    ZSK_CD: 'Ａ－３' //座席コード
                }
            ],
            skhnCd: '1622700' //作品コード
        }).then((result) => {
            assert.equal(result.zskyykResult, mvtkService.SeatInfoSyncUtilities.RESERVATION_CANCEL_SUCCESS);
            done();
        });
    });
});
