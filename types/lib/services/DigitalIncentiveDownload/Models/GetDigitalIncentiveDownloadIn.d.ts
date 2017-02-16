import BaseIn from '../../../Common/models/BaseIn';
/**
 * デジタルインセンティブダウンロードin
 * @
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
 * @class
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
