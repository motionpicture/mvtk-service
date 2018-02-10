import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { BnnrInfoResult } from './models/BnnrInfoResult';
import { DgtlincntvInfoResult } from './models/DgtlincntvInfoResult';
import { FilmResult } from './models/FilmResult';
import { GetTrailerDetailResult } from './models/GetTrailerDetailResult';
import { TicketInfoResult } from './models/TicketInfoResult';

/**
 * FilmService
 */
export class FilmService extends Service {
    /**
     * 作品詳細情報照会
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    public async getFilmDetail(skhnCd: string, dvcTyp: string) {
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
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    filmResult = FilmResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: filmResult
                });
            });
        });
    }

    /**
     * トップページ作品検索
     */
    public async getFilmTopPage(dvcTyp: string) {
        const method = 'GetFilmTopPage';

        const args = {
            dvcTyp: dvcTyp
        };

        const filmResults: FilmResult[] = [];

        return new Promise<{
            response: any;
            result: FilmResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
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
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: filmResults
                });
            });
        });
    }

    /**
     * 鑑賞券情報検索
     *
     * @param skhnCd 作品コード
     */
    public async getTicketInfoList(skhnCd: string) {
        const method = 'GetTicketInfoList';

        const args = {
            skhnCd: skhnCd
        };

        let ticketInfoResult: TicketInfoResult[];

        return new Promise<{
            response: any;
            result: TicketInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
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
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: ticketInfoResult
                });
            });
        });
    }

    /**
     * バナーリスト取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    public async getBannerList(skhnCd: string, dvcTyp: string) {
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
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
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
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: bnnrInfoResults
                });
            });
        });
    }

    /**
     * 予告編取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    public async getTrailerDetail(skhnCd: string, dvcTyp: string) {
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
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getTrailerDetailResult = GetTrailerDetailResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: getTrailerDetailResult
                });
            });
        });
    }

    /**
     * 特典取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    public async getDigitalIncentiveList(skhnCd: string, dvcTyp: string) {
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
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
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
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: dgtlincntvInfoResults
                });
            });
        });
    }
}
