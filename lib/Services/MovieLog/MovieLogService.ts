import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';

export default class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    public getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp, cb: (err, response, getFavoriteFilmListResult: GetFavoriteFilmListResult) => any) {
        let method = 'GetFavoriteFilmList';

        let args = {
            'kiinCd': kiinCd,
            'rcdNum': rcdNum,
            'shtkNum': shtkNum,
            'dvcTyp': dvcTyp
        };

        let getFavoriteFilmListResult: GetFavoriteFilmListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getFavoriteFilmListResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getFavoriteFilmListResult = GetFavoriteFilmListResult.parse(result);
            }

            cb(err, response, getFavoriteFilmListResult);
        });
    }

    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getUnusedTicketList(kiinCd, dvcTyp, cb: (err, response, getUnusedTicketListResult: GetUnusedTicketListResult) => any) {
        let method = 'GetUnusedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let getUnusedTicketListResult: GetUnusedTicketListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getUnusedTicketListResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getUnusedTicketListResult = GetUnusedTicketListResult.parse(result);
            }

            cb(err, response, getUnusedTicketListResult);
        });
    }

    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getSeatReservedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => any) {
        let method = 'GetSeatReservedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getWatchedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => any) {
        let method = 'GetWatchedTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getGiftTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => any) {
        let method = 'GetGiftTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getExpiredTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => any) {
        let method = 'GetExpiredTicketList';

        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    public registerFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'RegisterFavoriteFilm';

        let args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            // L002は登録済みとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L002') {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    public deleteFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'DeleteFavoriteFilm';

        let args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            // 作品コード指定の上でSTATUS_CHECK_ERROR(L001)は対象なしとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001') {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
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
    public getFilmReviewList(skhnCd, kiinCd, rcdNum, shtkNum, cb: Function) {
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
    public deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn, cb: Function) {
        let method = 'DeleteUsedTicketHistory';

        let args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };
    }

    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getSeatReservationStatusList(mvilgNo, cb: Function) {
        let method = 'GetSeatReservationStatusList';

        let args = {
            mvilgNo: mvilgNo
        };
    }

    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getWatchRecordList(mvilgNo, cb: Function) {
        let method = 'GetWatchRecordList';

        let args = {
            mvilgNo: mvilgNo
        };
    }

    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    public getSentGiftStatusList(mvilgNo, cb: Function) {
        let method = 'GetSentGiftStatusList';

        let args = {
            mvilgNo: mvilgNo
        };
    }

    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    public createQrCodeInMovieLog(knyknrNo, cb: (err, response, qrcdUrl: string) => any) {
        let method = 'CreateQrCodeInMovieLog';

        let args = {
            knyknrNo: knyknrNo
        };

        let qrcdUrl: string;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, qrcdUrl);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }

            cb(err, response, qrcdUrl);
        });
    }
}