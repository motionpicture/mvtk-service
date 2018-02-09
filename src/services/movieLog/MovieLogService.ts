
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { GetFavoriteFilmListResult } from './models/GetFavoriteFilmListResult';
import { GetUnusedTicketListResult } from './models/GetUnusedTicketListResult';
import { SeatReservationStatusListResult } from './models/SeatReservationStatusListResult';
import { SentGiftStatusListResult } from './models/SentGiftStatusListResult';
import { ShyzmtcktInfoListResult } from './models/ShyzmtcktInfoListResult';
import { WatchRecordResult } from './models/WatchRecordResult';

/**
 * MovieLogService
 */
export class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     * @param dvcTyp  デバイス区分
     */
    public async getFavoriteFilmList(kiinCd: string, rcdNum: string, shtkNum: string, dvcTyp: string) {
        const method = 'GetFavoriteFilmList';

        const args = {
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
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getFavoriteFilmListResult = GetFavoriteFilmListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    public async getUnusedTicketList(kiinCd: string, dvcTyp: string) {
        const method = 'GetUnusedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let getUnusedTicketListResult: GetUnusedTicketListResult;

        return new Promise<{
            response: any;
            result: GetUnusedTicketListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getUnusedTicketListResult = GetUnusedTicketListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    public async getSeatReservedTicketList(kiinCd: string, dvcTyp: string) {
        const method = 'GetSeatReservedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    public async getWatchedTicketList(kiinCd: string, dvcTyp: string) {
        const method = 'GetWatchedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    public async getGiftTicketList(kiinCd: string, dvcTyp: string) {
        const method = 'GetGiftTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    public async getExpiredTicketList(kiinCd: string, dvcTyp: string) {
        const method = 'GetExpiredTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        return new Promise<{
            response: any;
            result: ShyzmtcktInfoListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param skhnCd 作品コード
     */
    public async registerFavoriteFilm(skhnCd: string) {
        const method = 'RegisterFavoriteFilm';

        const args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L002') {
                    isSuccess = true;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param skhnCd 作品コード
     */
    public async deleteFavoriteFilm(skhnCd: string) {
        const method = 'DeleteFavoriteFilm';

        const args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
    // tslint:disable-next-line:prefer-function-over-method
    public async getFilmReviewList(_skhnCd: string, _kiinCd: string, _rcdNum: string, _shtkNum: string) {
        // const method = 'GetFilmReviewList';

        // const args = {
        //     skhnCd: skhnCd,
        //     kiinCd: kiinCd,
        //     rcdNum: rcdNum,
        //     shtkNum: shtkNum
        // };
    }

    /**
     * 使用済チケット履歴削除
     *
     * @param mvilgNo        ムビログ番号
     * @param knytcktSttsKbn 購入チケットステータス区分
     */
    public async deleteUsedTicketHistory(mvilgNo: string, knytcktSttsKbn: string) {
        const method = 'DeleteUsedTicketHistory';

        const args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    isSuccess = true;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param mvilgNo ムビログ番号
     */
    public async getSeatReservationStatusList(mvilgNo: string) {
        const method = 'GetSeatReservationStatusList';

        const args = {
            mvilgNo: mvilgNo
        };

        let seatReservationStatusListResults: SeatReservationStatusListResult[];

        return new Promise<{
            response: any;
            result: SeatReservationStatusListResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    seatReservationStatusListResults = [];

                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(zskyykjykyInfo));
                        }
                    } else {
                        seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param mvilgNo ムビログ番号
     */
    public async getWatchRecordList(mvilgNo: string) {
        const method = 'GetWatchRecordList';

        const args = {
            mvilgNo: mvilgNo
        };

        let watchRecordResults: WatchRecordResult[];

        return new Promise<{
            response: any;
            result: WatchRecordResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    watchRecordResults = [];

                    if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                        for (const knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                            watchRecordResults.push(WatchRecordResult.parse(knshkrkInfo));
                        }
                    } else {
                        watchRecordResults.push(WatchRecordResult.parse(result.KNSHKRK_INFO.KnshkrkInfo));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param mvilgNo ムビログ番号
     */
    public async getSentGiftStatusList(mvilgNo: string) {
        const method = 'GetSentGiftStatusList';

        const args = {
            mvilgNo: mvilgNo
        };

        let sentGiftStatusListResults: SentGiftStatusListResult[];

        return new Promise<{
            response: any;
            result: SentGiftStatusListResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    sentGiftStatusListResults = [];

                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            sentGiftStatusListResults.push(SentGiftStatusListResult.parse(zskyykjykyInfo));
                        }
                    } else {
                        sentGiftStatusListResults.push(SentGiftStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     * @param knyknrNo 購入管理番号
     */
    public async createQrCodeInMovieLog(knyknrNo: string) {
        const method = 'CreateQrCodeInMovieLog';

        const args = {
            knyknrNo: knyknrNo
        };

        let qrcdUrl: string;

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}
