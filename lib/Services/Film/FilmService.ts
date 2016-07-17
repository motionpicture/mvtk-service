import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import FilmResult from './Models/FilmResult';
import TicketInfoResult from './Models/TicketInfoResult';
import BnnrInfoResult from './Models/BnnrInfoResult';
import DgtlincntvInfoResult from './Models/DgtlincntvInfoResult';
import GetTrailerDetailResult from './Models/GetTrailerDetailResult';

export default class FilmService extends Service {
    /**
    * 作品詳細情報照会
    *
    * @param {string} skhnCd 作品コード
    * @param {string} dvcTyp デバイス区分
    */
    public getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err, response, result: FilmResult) => void ): void {
        let method = 'GetFilmDetail';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let filmResult: FilmResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, filmResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                filmResult = FilmResult.parse(result);
            }

            cb(err, response, filmResult);
        });
    }

    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    public getFilmTopPage(dvcTyp: string, cb: (err, response, result: Array<FilmResult>) => void ): void {
        let method = 'GetFilmTopPage';

        let args = {
            dvcTyp: dvcTyp
        };

        let filmResults: Array<FilmResult>;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, filmResults);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                filmResults = [];

                if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                    for (let skhnInfo of result.SKHN_INFO.SkhnInfo) {
                        filmResults.push(FilmResult.parse(skhnInfo));
                    }
                } else {
                    filmResults.push(FilmResult.parse(result.SKHN_INFO.SkhnInfo));
                }
            }

            cb(err, response, filmResults);
        });
    }

    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    public getTicketInfoList(skhnCd: string, cb: (err, response, result: Array<TicketInfoResult>) => void ): void {
        let method = 'GetTicketInfoList';

        let args = {
            skhnCd: skhnCd
        };

        let ticketInfoResult: Array<TicketInfoResult>;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, ticketInfoResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                ticketInfoResult = [];

                if (Array.isArray(result.KNSHKN_INFO.KnshknInfo)) {
                    for (let knshknInfo of result.KNSHKN_INFO.KnshknInfo) {
                        ticketInfoResult.push(TicketInfoResult.parse(knshknInfo));
                    }
                } else {
                    ticketInfoResult.push(TicketInfoResult.parse(result.KNSHKN_INFO.KnshknInfo));
                }
            }

            cb(err, response, ticketInfoResult);
        });
    }

    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getBannerList(skhnCd: string, dvcTyp: string, cb: (err, response, bnnrInfoResults: Array<BnnrInfoResult>) => void ): void {
        let method = 'GetBannerList';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let bnnrInfoResults: Array<BnnrInfoResult>;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, bnnrInfoResults);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                bnnrInfoResults = [];

                if (result.BNNR_INFO !== null && result.BNNR_INFO.hasOwnProperty('BnnrInfo')) {
                    if (Array.isArray(result.BNNR_INFO.BnnrInfo)) {
                        for (let info of result.BNNR_INFO.BnnrInfo) {
                            bnnrInfoResults.push(BnnrInfoResult.parse(info));
                        }
                    } else {
                        bnnrInfoResults.push(BnnrInfoResult.parse(result.BNNR_INFO.BnnrInfo));
                    }
                }
            }

            cb(err, response, bnnrInfoResults);
        });
    }

    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getTrailerDetail(skhnCd, dvcTyp, cb: (err, response, getTrailerDetailResult: GetTrailerDetailResult) => void ): void {
        let method = 'GetTrailerDetail';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let getTrailerDetailResult: GetTrailerDetailResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getTrailerDetailResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getTrailerDetailResult = GetTrailerDetailResult.parse(result);
            }

            cb(err, response, getTrailerDetailResult);
        });
    }

    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getDigitalIncentiveList(skhnCd: string, dvcTyp: string, cb: (err, response, dgtlincntvInfoResults: Array<DgtlincntvInfoResult>) => void ): void {
        let method = 'GetDigitalIncentiveList';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let dgtlincntvInfoResults: Array<DgtlincntvInfoResult>;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, dgtlincntvInfoResults);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === 'L001')
            {
                dgtlincntvInfoResults = [];

                if (result.DGTLINCNTV_INFO !== null && result.DGTLINCNTV_INFO.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(result.DGTLINCNTV_INFO.DgtlincntvInfo)) {
                        for (let info of result.DGTLINCNTV_INFO.DgtlincntvInfo) {
                            dgtlincntvInfoResults.push(DgtlincntvInfoResult.parse(info));
                        }
                    } else {
                        dgtlincntvInfoResults.push(DgtlincntvInfoResult.parse(result.DGTLINCNTV_INFO.DgtlincntvInfo));
                    }
                }
            }

            cb(err, response, dgtlincntvInfoResults);
        });
    }
}