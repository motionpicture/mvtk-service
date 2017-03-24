"use strict";
// tslint:disable:missing-jsdoc no-console
const assert = require("assert");
const mvtkService = require("../../lib/mvtk-service");
mvtkService.initialize('https://ssl.movieticket.jp', 'https://testservices.movieticket.jp', 'https://reservetest.movieticket.jp');
/**
 * テスト
 */
describe('購入管理番号認証サービス', () => {
    it('購入管理番号認証　存在する', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000',
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID,
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '3472695908',
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1622100',
            stCd: '18',
            jeiYmd: '2017/02/16' //上映年月日
        }).then(() => {
            done();
        });
    });
    it('購入管理番号認証　存在しない購入管理番号', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000',
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID,
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '1111111111',
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1622100',
            stCd: '18',
            jeiYmd: '2017/02/16' //上映年月日
        }).then((result) => {
            assert(result[0].knyknrNoMkujyuCd, mvtkService.PurchaseNumberAuthUtilities.PURCHASE_INVALIDITY_REASON_NO_EXISTENCE);
            done();
        });
    });
    it('購入管理番号認証　存在しない作品', (done) => {
        const service = mvtkService.createPurchaseNumberAuthService();
        service.purchaseNumberAuth({
            kgygishCd: 'SSK000',
            jhshbtsCd: mvtkService.PurchaseNumberAuthUtilities.INFORMATION_TYPE_CODE_VALID,
            knyknrNoInfoIn: [
                {
                    KNYKNR_NO: '3472695908',
                    PIN_CD: '7648' // PINコード
                }
            ],
            skhnCd: '1000000',
            stCd: '18',
            jeiYmd: '2017/02/16' //上映年月日
        }).catch((err) => {
            assert(err.message, '存在しない作品コードが入力されました。');
            done();
        });
    });
});
describe('座席指定情報連携サービス', () => {
    it('座席指定情報連携', (done) => {
        const service = mvtkService.createSeatInfoSyncService();
        service.seatInfoSync({
            kgygishCd: 'SSK000',
            yykDvcTyp: mvtkService.SeatInfoSyncUtilities.RESERVED_DEVICE_TYPE_MVTK_SITE,
            trkshFlg: mvtkService.SeatInfoSyncUtilities.DELETE_FLAG_FALSE,
            kgygishSstmZskyykNo: '118124',
            kgygishUsrZskyykNo: '124',
            jeiDt: '2017/03/02 10:00:00',
            kijYmd: '2017/03/02',
            stCd: '18',
            screnCd: '10',
            knyknrNoInfo: [
                {
                    KNYKNR_NO: '4450899842',
                    PIN_CD: '7648',
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01',
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
            kgygishCd: 'SSK000',
            yykDvcTyp: mvtkService.SeatInfoSyncUtilities.RESERVED_DEVICE_TYPE_MVTK_SITE,
            trkshFlg: mvtkService.SeatInfoSyncUtilities.DELETE_FLAG_TRUE,
            kgygishSstmZskyykNo: '118124',
            kgygishUsrZskyykNo: '124',
            jeiDt: '2017/03/02 10:00:00',
            kijYmd: '2017/03/02',
            stCd: '15',
            screnCd: '1',
            knyknrNoInfo: [
                {
                    KNYKNR_NO: '4450899842',
                    PIN_CD: '7648',
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01',
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
