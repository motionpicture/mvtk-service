import { BaseIn } from '../../../common/models/BaseIn';

/**
 * BaseIn
 */
export class DeliveryIn extends BaseIn {
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
        KNSHKN: {
            /**
             * 券種区分名称
             */
            KNSHKBN_NM: string;
            /**
             * 購入枚数
             */
            KNYMI_NUM: string;
        }[];
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
    /**
     * 獲得ポイント
     */
    public KKTK_PT: number;
    /**
     * 販売区分
     */
    public HMBI_TYP: string;

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        return {
            IN_PARAMETER: {
                KSSIKNR_NO: this.KSSIKNR_NO,
                KNYKNR_NO: this.KNYKNR_NO,
                MAILADDRESS: this.MAILADDRESS,
                ADDRESS: this.ADDRESS,
                SKHN_NM: this.SKHN_NM,
                KNSHKN_INFO: this.KNSHKN_INFO !== null ? {
                    KNSHKN: this.KNSHKN_INFO.KNSHKN.map((info) => {
                        return {
                            KNSHKBN_NM: info.KNSHKBN_NM,
                            KNYMI_NUM: info.KNYMI_NUM,
                            targetNSAlias: 'tns',
                            // tslint:disable-next-line:no-http-string max-line-length
                            targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
                        };
                    }),
                    targetNSAlias: 'tns',
                    // tslint:disable-next-line:no-http-string max-line-length
                    targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
                } : undefined,
                QRCD_URL: this.QRCD_URL,
                DGTLINCNTV_URL: this.DGTLINCNTV_URL,
                DVC_TYP: this.DVC_TYP,
                MLTMPLT_CD: this.MLTMPLT_CD,
                TOTALCOST: this.TOTALCOST,
                SKHN_CD: this.SKHN_CD,
                KKTK_PT: Number(this.KKTK_PT),
                HMBI_TYP: this.HMBI_TYP,
                targetNSAlias: 'q1',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
            }
        };

        //         let message = `
        // <tns:Delivery>
        //     <tns:IN_PARAMETER>
        //         <q1:KSSIKNR_NO>${this.KSSIKNR_NO}</q1:KSSIKNR_NO>
        //         <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
        //         <q1:MAILADDRESS>${this.MAILADDRESS}</q1:MAILADDRESS>
        //         <q1:ADDRESS>${this.ADDRESS}</q1:ADDRESS>
        //         <q1:SKHN_NM>${this.SKHN_NM}</q1:SKHN_NM>
        // `;

        //         if (this.KNSHKN_INFO !== null) {
        //             message += '<q1:KNSHKN_INFO>';
        //             for (const info of this.KNSHKN_INFO.KNSHKN) {
        //                 message += `
        //             <q2:KNSHKN>
        //                 <q2:KNSHKBN_NM>${info.KNSHKBN_NM}</q2:KNSHKBN_NM>
        //                 <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
        //             </q2:KNSHKN>
        // `;
        //             }

        //             message += '</q1:KNSHKN_INFO>';
        //         }

        //         message += `
        //         <q1:QRCD_URL>${this.QRCD_URL}</q1:QRCD_URL>
        //         <q1:DGTLINCNTV_URL>${this.DGTLINCNTV_URL}</q1:DGTLINCNTV_URL>
        //         <q1:DVC_TYP>${this.DVC_TYP}</q1:DVC_TYP>
        //         <q1:MLTMPLT_CD>${this.MLTMPLT_CD}</q1:MLTMPLT_CD>
        //         <q1:TOTALCOST>${this.TOTALCOST}</q1:TOTALCOST>
        //         <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
        //         <q1:KKTK_PT>${this.KKTK_PT}</q1:KKTK_PT>
        //     </tns:IN_PARAMETER>
        // </tns:Delivery>
        // `;

        //         return message;
    }
}
