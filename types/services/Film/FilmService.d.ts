import Service from '../../common/Service';
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
    getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err, response, result: FilmResult) => void): void;
    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    getFilmTopPage(dvcTyp: string, cb: (err, response, result: Array<FilmResult>) => void): void;
    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    getTicketInfoList(skhnCd: string, cb: (err, response, result: Array<TicketInfoResult>) => void): void;
    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getBannerList(skhnCd: string, dvcTyp: string, cb: (err, response, bnnrInfoResults: Array<BnnrInfoResult>) => void): void;
    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd: any, dvcTyp: any, cb: (err, response, getTrailerDetailResult: GetTrailerDetailResult) => void): void;
    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd: string, dvcTyp: string, cb: (err, response, dgtlincntvInfoResults: Array<DgtlincntvInfoResult>) => void): void;
}
