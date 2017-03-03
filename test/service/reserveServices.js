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
            stCd: '15',
            jeiYmd: '2017/02/16' //上映年月日
        }).then(() => {
            done();
        }, (err) => {
            done(new Error(err.message));
        });
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
            stCd: '15',
            screnCd: '1',
            knyknrNoInfo: [
                {
                    KNYKNR_NO: '4104989123',
                    PIN_CD: '7648',
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01',
                            MI_NUM: '1' //枚数
                        }
                    ]
                }
            ],
            zskInfo: [
                {
                    ZSK_CD: 'Ａ－２' //座席コード
                }
            ],
            skhnCd: '1622100' //作品コード
        }).then((result) => {
            assert.equal(result.zskyykResult, mvtkService.SeatInfoSyncUtilities.RESERVATION_SUCCESS);
            done();
        }, (err) => {
            done(new Error(err.message));
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
                    KNYKNR_NO: '4104989123',
                    PIN_CD: '7648',
                    KNSH_INFO: [
                        {
                            KNSH_TYP: '01',
                            MI_NUM: '1' //枚数
                        }
                    ]
                }
            ],
            zskInfo: [
                {
                    ZSK_CD: 'Ａ－２' //座席コード
                }
            ],
            skhnCd: '1622100' //作品コード
        }).then((result) => {
            assert.equal(result.zskyykResult, mvtkService.SeatInfoSyncUtilities.RESERVATION_CANCEL_SUCCESS);
            done();
        }, (err) => {
            done(new Error(err.message));
        });
    });
});
