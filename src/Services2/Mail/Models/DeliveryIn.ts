import BaseIn from '../../../common/models/BaseIn';

export default class DeliveryIn extends BaseIn {
    /**
     * 決済管理番号
     */
    public KSSIKNR_NO: string;
    /**
     * 購入管理番号
     */
    public KNYKNR_NO: string;
    /**
     * 宛先
     */
    public MAILADDRESS: string;
    /**
     * 宛名
     */
    public ADDRESS: string;
    /**
     * 作品名
     */
    public SKHN_NM: string;
    /**
     * 鑑賞券情報(ItemArray)
     */
    public KNSHKN_INFO: {
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
    public QRCD_URL: string;
    /**
     * デジタルインセンティブ URL
     */
    public DGTLINCNTV_URL: string;
    /**
     * デバイス区分
     */
    public DVC_TYP: string;
    /**
     * メールテンプレートコード
     */
    public MLTMPLT_CD: string;
    /**
     * 合計金額
     */
    public TOTALCOST: string;
    /**
     * 作品コード
     */
    public SKHN_CD: string;

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:Delivery>
    <tns:IN_PARAMETER>
        <q1:KSSIKNR_NO>${this.KSSIKNR_NO}</q1:KSSIKNR_NO>
        <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
        <q1:MAILADDRESS>${this.MAILADDRESS}</q1:MAILADDRESS>
        <q1:ADDRESS>${this.ADDRESS}</q1:ADDRESS>
        <q1:SKHN_NM>${this.SKHN_NM}</q1:SKHN_NM>
`;

        if (this.KNSHKN_INFO !== null) {
            message += `
        <q1:KNSHKN_INFO>
`;
            for (let info of this.KNSHKN_INFO.KNSHKN) {
                message += `
            <q2:KNSHKN>
                <q2:KNSHKBN_NM>${info.KNSHKBN_NM}</q2:KNSHKBN_NM>
                <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
            </q2:KNSHKN>
`;
            }

            message += `
        </q1:KNSHKN_INFO>
`;
        } else {
        }

        message += `
        <q1:QRCD_URL>${this.QRCD_URL}</q1:QRCD_URL>
        <q1:DGTLINCNTV_URL>${this.DGTLINCNTV_URL}</q1:DGTLINCNTV_URL>
        <q1:DVC_TYP>${this.DVC_TYP}</q1:DVC_TYP>
        <q1:MLTMPLT_CD>${this.MLTMPLT_CD}</q1:MLTMPLT_CD>
        <q1:TOTALCOST>${this.TOTALCOST}</q1:TOTALCOST>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:Delivery>
`;

        return message;
    }
}
