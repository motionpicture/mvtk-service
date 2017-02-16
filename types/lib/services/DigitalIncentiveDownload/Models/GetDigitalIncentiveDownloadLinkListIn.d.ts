import BaseIn from '../../../Common/models/BaseIn';
/**
 * デジタルインセンティブダウンロード情報検索in
 * @interface
 */
export interface IGetDigitalIncentiveDownloadLinkListIn {
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * デジタルインセンティブダウンロード画面URL
     */
    dgtlincntvdwnlodgmnUrl: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * ムビチケ暗証番号
     */
    pinCd: string;
}
/**
 * デジタルインセンティブダウンロード情報検索inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class GetDigitalIncentiveDownloadLinkListIn extends BaseIn {
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * デジタルインセンティブダウンロード画面URL
     */
    dgtlincntvdwnlodgmnUrl: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * ムビチケ暗証番号
     */
    pinCd: string;
}
