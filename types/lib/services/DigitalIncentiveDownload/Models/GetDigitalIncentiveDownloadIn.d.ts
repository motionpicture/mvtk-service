import BaseIn from '../../../Common/models/BaseIn';
/**
 * デジタルインセンティブダウンロードin
 * @interface IGetDigitalIncentiveDownloadIn
 */
export interface IGetDigitalIncentiveDownloadIn {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブコード
     */
    dgtlincntvCd: string;
    /**
     * デジタルインセンティブ枝番号
     */
    dgtlincntvedNo: string;
}
/**
 * デジタルインセンティブダウンロードinクラス
 * @class GetDigitalIncentiveDownloadIn
 * @extends {BaseIn}
 */
export declare class GetDigitalIncentiveDownloadIn extends BaseIn {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブコード
     */
    dgtlincntvCd: string;
    /**
     * デジタルインセンティブ枝番号
     */
    dgtlincntvedNo: string;
}
