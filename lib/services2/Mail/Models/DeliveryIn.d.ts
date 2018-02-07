import BaseIn from '../../../common/models/BaseIn';
export default class DeliveryIn extends BaseIn {
    /**
     * 決済管理番号
     */
    KSSIKNR_NO: string;
    /**
     * 購入管理番号
     */
    KNYKNR_NO: string;
    /**
     * 宛先
     */
    MAILADDRESS: string;
    /**
     * 宛名
     */
    ADDRESS: string;
    /**
     * 作品名
     */
    SKHN_NM: string;
    /**
     * 鑑賞券情報(ItemArray)
     */
    KNSHKN_INFO: {
        KNSHKN: Array<{
            /**
             * 券種区分名称
             */
            KNSHKBN_NM: string;
            /**
             * 購入枚数
             */
            KNYMI_NUM: string;
        }>;
    };
    /**
     * QR コード URL
     */
    QRCD_URL: string;
    /**
     * デジタルインセンティブ URL
     */
    DGTLINCNTV_URL: string;
    /**
     * デバイス区分
     */
    DVC_TYP: string;
    /**
     * メールテンプレートコード
     */
    MLTMPLT_CD: string;
    /**
     * 合計金額
     */
    TOTALCOST: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}
