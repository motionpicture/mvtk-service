import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import BnnrInfoResult from './Models/BnnrInfoResult';
import DgtlincntvInfoResult from './Models/DgtlincntvInfoResult';
import FilmResult from './Models/FilmResult';
import GetTrailerDetailResult from './Models/GetTrailerDetailResult';
import TicketInfoResult from './Models/TicketInfoResult';

/**
 * FilmService
 * @class
 */
export default class FilmService extends Service {
    /**
     * 作品詳細情報照会
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, result: FilmResult) => void): void {
        const method = 'GetFilmDetail';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let filmResult: FilmResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, filmResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                filmResult = FilmResult.PARSE(result);
            }

            cb(err, response, filmResult);
        });
    }

    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    public getFilmTopPage(dvcTyp: string, cb: (err: any, response: any, result: FilmResult[]) => void): void {
        const method = 'GetFilmTopPage';

        const args = {
            dvcTyp: dvcTyp
        };

        let filmResults: FilmResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, filmResults);
            // console.log('result', result.SKHN_INFO.SkhnInfo[0])
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                filmResults = [];

                if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                    for (const skhnInfo of result.SKHN_INFO.SkhnInfo) {
                        filmResults.push(FilmResult.PARSE(skhnInfo));
                    }
                } else {
                    filmResults.push(FilmResult.PARSE(result.SKHN_INFO.SkhnInfo));
                }
            }
            // console.log('filmResults', filmResults[0])
            cb(err, response, filmResults);
        });
    }

    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    public getTicketInfoList(skhnCd: string, cb: (err: any, response: any, result: TicketInfoResult[]) => void): void {
        const method = 'GetTicketInfoList';

        const args = {
            skhnCd: skhnCd
        };

        let ticketInfoResult: TicketInfoResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, ticketInfoResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                ticketInfoResult = [];

                if (Array.isArray(result.KNSHKN_INFO.KnshknInfo)) {
                    for (const knshknInfo of result.KNSHKN_INFO.KnshknInfo) {
                        ticketInfoResult.push(TicketInfoResult.PARSE(knshknInfo));
                    }
                } else {
                    ticketInfoResult.push(TicketInfoResult.PARSE(result.KNSHKN_INFO.KnshknInfo));
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
    public getBannerList(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, bnnrInfoResults: BnnrInfoResult[]) => void): void {
        const method = 'GetBannerList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let bnnrInfoResults: BnnrInfoResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, bnnrInfoResults);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                bnnrInfoResults = [];

                if (result.BNNR_INFO !== null && result.BNNR_INFO.hasOwnProperty('BnnrInfo')) {
                    if (Array.isArray(result.BNNR_INFO.BnnrInfo)) {
                        for (const info of result.BNNR_INFO.BnnrInfo) {
                            bnnrInfoResults.push(BnnrInfoResult.PARSE(info));
                        }
                    } else {
                        bnnrInfoResults.push(BnnrInfoResult.PARSE(result.BNNR_INFO.BnnrInfo));
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
    public getTrailerDetail(
        skhnCd: string,
        dvcTyp: string,
        cb: (err: any, response: any, getTrailerDetailResult: GetTrailerDetailResult) => void
    ): void {
        const method = 'GetTrailerDetail';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let getTrailerDetailResult: GetTrailerDetailResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getTrailerDetailResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getTrailerDetailResult = GetTrailerDetailResult.PARSE(result);
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
    public getDigitalIncentiveList(
        skhnCd: string,
        dvcTyp: string,
        cb: (err: any, response: any, dgtlincntvInfoResults: DgtlincntvInfoResult[]) => void
    ): void {
        const method = 'GetDigitalIncentiveList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let dgtlincntvInfoResults: DgtlincntvInfoResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, dgtlincntvInfoResults);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                dgtlincntvInfoResults = [];

                if (result.DGTLINCNTV_INFO !== null && result.DGTLINCNTV_INFO.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(result.DGTLINCNTV_INFO.DgtlincntvInfo)) {
                        for (const info of result.DGTLINCNTV_INFO.DgtlincntvInfo) {
                            dgtlincntvInfoResults.push(DgtlincntvInfoResult.PARSE(info));
                        }
                    } else {
                        dgtlincntvInfoResults.push(DgtlincntvInfoResult.PARSE(result.DGTLINCNTV_INFO.DgtlincntvInfo));
                    }
                }
            }

            cb(err, response, dgtlincntvInfoResults);
        });
    }
}
