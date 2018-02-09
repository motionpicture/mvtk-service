import { BaseIn } from '../../../common/models/BaseIn';

/**
 * GetDigitalIncentiveDownloadLinkListIn
 */
export class GetDigitalIncentiveDownloadLinkListIn extends BaseIn {
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * デジタルインセンティブダウンロード画面URL
     */
    public dgtlincntvdwnlodgmnUrl: string;
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * ムビチケ暗証番号
     */
    public pinCd: string;
}
