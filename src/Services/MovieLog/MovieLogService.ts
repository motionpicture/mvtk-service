import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';
import WatchRecordResult from './Models/WatchRecordResult';
import SeatReservationStatusListResult from './Models/SeatReservationStatusListResult';
import SentGiftStatusListResult from './Models/SentGiftStatusListResult';



export default class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    public getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp) {
        let method = 'GetFavoriteFilmList';

        let args = {
            kiinCd: kiinCd,
            rcdNum: rcdNum,
            shtkNum: shtkNum,
            dvcTyp: dvcTyp
        };

        let getFavoriteFilmListResult: GetFavoriteFilmListResult;

        return new Promise<{
            response: any;
            result: GetFavoriteFilmListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getFavoriteFilmListResult = GetFavoriteFilmListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getFavoriteFilmListResult
                });
            });
        });
    }

    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getUnusedTicketList(kiinCd, dvcTyp) {
        let method = 'GetUnusedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let getUnusedTicketListResult: GetUnusedTicketListResult;

        return new Promise<{
            response: any;
            result: GetUnusedTicketListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getUnusedTicketListResult = GetUnusedTicketListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getUnusedTicketListResult
                });
            });
        });
    }

    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getSeatReservedTicketList(kiinCd, dvcTyp) {
        let method = 'GetSeatReservedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }

    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getWatchedTicketList(kiinCd, dvcTyp) {
        let method = 'GetWatchedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }

    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getGiftTicketList(kiinCd, dvcTyp) {
        let method = 'GetGiftTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }

    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getExpiredTicketList(kiinCd, dvcTyp) {
        let method = 'GetExpiredTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }

    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    public registerFavoriteFilm(skhnCd: string) {
        let method = 'RegisterFavoriteFilm';

        let args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L002') {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    public deleteFavoriteFilm(skhnCd: string) {
        let method = 'DeleteFavoriteFilm';

        let args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * 作品感想検索
     *
     * @param skhnCd  作品コード
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     */
    public getFilmReviewList(skhnCd, kiinCd, rcdNum, shtkNum) {
        let method = 'GetFilmReviewList';

        let args = {
        };
    }

    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     */
    public deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn) {
        let method = 'DeleteUsedTicketHistory';

        let args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getSeatReservationStatusList(mvilgNo) {
        let method = 'GetSeatReservationStatusList';

        let args = {
            mvilgNo: mvilgNo
        };

        let seatReservationStatusListResults: SeatReservationStatusListResult[];

        return new Promise<{
            response: any;
            result: SeatReservationStatusListResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    seatReservationStatusListResults = [];
    
                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (let zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(zskyykjykyInfo));
                        }
                    } else {
                        seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: seatReservationStatusListResults
                });
            });
        });
    }

    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getWatchRecordList(mvilgNo) {
        let method = 'GetWatchRecordList';

        let args = {
            mvilgNo: mvilgNo
        };

        let watchRecordResults: WatchRecordResult[];

        return new Promise<{
            response: any;
            result: WatchRecordResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    watchRecordResults = [];
    
                    if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                        for (let knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                            watchRecordResults.push(WatchRecordResult.parse(knshkrkInfo));
                        }
                    } else {
                        watchRecordResults.push(WatchRecordResult.parse(result.KNSHKRK_INFO.KnshkrkInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: watchRecordResults
                });
            });
        });
    }

    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getSentGiftStatusList(mvilgNo) {
        let method = 'GetSentGiftStatusList';

        let args = {
            mvilgNo: mvilgNo
        };

        let sentGiftStatusListResults: SentGiftStatusListResult[];

        return new Promise<{
            response: any;
            result: SentGiftStatusListResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    sentGiftStatusListResults = [];
    
                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (let zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            sentGiftStatusListResults.push(SentGiftStatusListResult.parse(zskyykjykyInfo));
                        }
                    } else {
                        sentGiftStatusListResults.push(SentGiftStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: sentGiftStatusListResults
                });
            });
        });
    }

    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    public createQrCodeInMovieLog(knyknrNo) {
        let method = 'CreateQrCodeInMovieLog';

        let args = {
            knyknrNo: knyknrNo
        };

        let qrcdUrl: string;

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}