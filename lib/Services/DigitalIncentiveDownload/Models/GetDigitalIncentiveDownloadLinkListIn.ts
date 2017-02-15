import BaseIn from '../../../Common/models/BaseIn';

/**
 * デジタルインセンティブダウンロード情報検索in
 * @class
 */
export default class GetDigitalIncentiveDownloadLinkListIn extends BaseIn {
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
