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
export class GetDigitalIncentiveDownloadIn extends BaseIn {
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * デジタルインセンティブコード
     */
    public dgtlincntvCd: string;
    /**
     * デジタルインセンティブ枝番号
     */
    public dgtlincntvedNo: string;
}
