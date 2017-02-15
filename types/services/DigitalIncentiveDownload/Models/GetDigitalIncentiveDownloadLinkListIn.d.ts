import BaseIn from '../../../Common/models/BaseIn';
export default class GetDigitalIncentiveDownloadLinkListIn extends BaseIn {
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
