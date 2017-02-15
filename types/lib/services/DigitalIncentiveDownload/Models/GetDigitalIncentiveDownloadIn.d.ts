import BaseIn from '../../../Common/models/BaseIn';
/**
 * デジタルインセンティブダウンロードin
 * @class
 * @extends {BaseIn}
 */
export default class GetDigitalIncentiveDownloadIn extends BaseIn {
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
