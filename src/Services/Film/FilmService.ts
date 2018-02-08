import Service from '../../common/Service';
import Constants from '../../common/Util/Constants';
import BnnrInfoResult from './models/BnnrInfoResult';
import DgtlincntvInfoResult from './models/DgtlincntvInfoResult';
import FilmResult from './models/FilmResult';
import GetTrailerDetailResult from './models/GetTrailerDetailResult';
import TicketInfoResult from './models/TicketInfoResult';

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
    public getFilmDetail(skhnCd: string, dvcTyp: string) {
        const method = 'GetFilmDetail';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let filmResult: FilmResult;
        return new Promise<{
            response: any;
            result: FilmResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    result = FilmResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: filmResult
                });
            });
        });
    }

    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    public getFilmTopPage(dvcTyp: string) {
        const method = 'GetFilmTopPage';

        const args = {
            dvcTyp: dvcTyp
        };

        let filmResults: FilmResult[] = [];

        return new Promise<{
            response: any;
            result: FilmResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {

                    if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                        for (const skhnInfo of result.SKHN_INFO.SkhnInfo) {
                            filmResults.push(FilmResult.parse(skhnInfo));
                        }
                    } else {
                        filmResults.push(FilmResult.parse(result.SKHN_INFO.SkhnInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: filmResults
                });
            });
        });
    }

    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    public getTicketInfoList(skhnCd: string) {
        const method = 'GetTicketInfoList';

        const args = {
            skhnCd: skhnCd
        };

        let ticketInfoResult: TicketInfoResult[];

        return new Promise<{
            response: any;
            result: TicketInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    ticketInfoResult = [];

                    if (Array.isArray(result.KNSHKN_INFO.KnshknInfo)) {
                        for (const knshknInfo of result.KNSHKN_INFO.KnshknInfo) {
                            ticketInfoResult.push(TicketInfoResult.parse(knshknInfo));
                        }
                    } else {
                        ticketInfoResult.push(TicketInfoResult.parse(result.KNSHKN_INFO.KnshknInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: ticketInfoResult
                });
            });
        });
    }

    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getBannerList(skhnCd: string, dvcTyp: string) {
        const method = 'GetBannerList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let bnnrInfoResults: BnnrInfoResult[];

        return new Promise<{
            response: any;
            result: BnnrInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    bnnrInfoResults = [];

                    if (result.BNNR_INFO !== null && result.BNNR_INFO.hasOwnProperty('BnnrInfo')) {
                        if (Array.isArray(result.BNNR_INFO.BnnrInfo)) {
                            for (const info of result.BNNR_INFO.BnnrInfo) {
                                bnnrInfoResults.push(BnnrInfoResult.parse(info));
                            }
                        } else {
                            bnnrInfoResults.push(BnnrInfoResult.parse(result.BNNR_INFO.BnnrInfo));
                        }
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: bnnrInfoResults
                });
            });
        });
    }

    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getTrailerDetail(skhnCd: string, dvcTyp: string) {
        const method = 'GetTrailerDetail';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let getTrailerDetailResult: GetTrailerDetailResult;

        return new Promise<{
            response: any;
            result: GetTrailerDetailResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getTrailerDetailResult = GetTrailerDetailResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getTrailerDetailResult
                });
            });
        });
    }

    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    public getDigitalIncentiveList(skhnCd: string, dvcTyp: string) {
        const method = 'GetDigitalIncentiveList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        let dgtlincntvInfoResults: DgtlincntvInfoResult[];

        return new Promise<{
            response: any;
            result: DgtlincntvInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    dgtlincntvInfoResults = [];

                    if (result.DGTLINCNTV_INFO !== null && result.DGTLINCNTV_INFO.hasOwnProperty('DgtlincntvInfo')) {
                        if (Array.isArray(result.DGTLINCNTV_INFO.DgtlincntvInfo)) {
                            for (const info of result.DGTLINCNTV_INFO.DgtlincntvInfo) {
                                dgtlincntvInfoResults.push(DgtlincntvInfoResult.parse(info));
                            }
                        } else {
                            dgtlincntvInfoResults.push(DgtlincntvInfoResult.parse(result.DGTLINCNTV_INFO.DgtlincntvInfo));
                        }
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: dgtlincntvInfoResults
                });
            });
        });
    }
}
