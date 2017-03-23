import Service from '../../Common/Service';
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
    getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, result: FilmResult) => void): void;
    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    getFilmTopPage(dvcTyp: string, cb: (err: any, response: any, result: FilmResult[]) => void): void;
    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    getTicketInfoList(skhnCd: string, cb: (err: any, response: any, result: TicketInfoResult[]) => void): void;
    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getBannerList(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, bnnrInfoResults: BnnrInfoResult[]) => void): void;
    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, getTrailerDetailResult: GetTrailerDetailResult) => void): void;
    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd: string, dvcTyp: string, cb: (err: any, response: any, dgtlincntvInfoResults: DgtlincntvInfoResult[]) => void): void;
}
