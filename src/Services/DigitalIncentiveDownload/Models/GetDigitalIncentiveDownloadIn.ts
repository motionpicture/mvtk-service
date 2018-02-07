import BaseIn from '../../../common/models/BaseIn';

export default class GetDigitalIncentiveDownloadIn extends BaseIn {
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
