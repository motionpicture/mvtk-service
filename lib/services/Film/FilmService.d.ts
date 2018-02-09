import { Service } from '../../common/Service';
import { BnnrInfoResult } from './models/BnnrInfoResult';
import { DgtlincntvInfoResult } from './models/DgtlincntvInfoResult';
import { FilmResult } from './models/FilmResult';
import { GetTrailerDetailResult } from './models/GetTrailerDetailResult';
import { TicketInfoResult } from './models/TicketInfoResult';
/**
 * FilmService
 */
export declare class FilmService extends Service {
    /**
     * 作品詳細情報照会
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getFilmDetail(skhnCd: string, dvcTyp: string): Promise<{
        response: any;
        result: FilmResult;
    }>;
    /**
     * トップページ作品検索
     */
    getFilmTopPage(dvcTyp: string): Promise<{
        response: any;
        result: FilmResult[];
    }>;
    /**
     * 鑑賞券情報検索
     *
     * @param skhnCd 作品コード
     */
    getTicketInfoList(skhnCd: string): Promise<{
        response: any;
        result: TicketInfoResult[];
    }>;
    /**
     * バナーリスト取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getBannerList(skhnCd: string, dvcTyp: string): Promise<{
        response: any;
        result: BnnrInfoResult[];
    }>;
    /**
     * 予告編取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd: string, dvcTyp: string): Promise<{
        response: any;
        result: GetTrailerDetailResult;
    }>;
    /**
     * 特典取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd: string, dvcTyp: string): Promise<{
        response: any;
        result: DgtlincntvInfoResult[];
    }>;
}
