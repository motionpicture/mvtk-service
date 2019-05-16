import { BaseIn } from '../../../common/models/BaseIn';

/**
 * CreateQrCodeIn
 */
export class CreateQrCodeIn extends BaseIn {
    /**
     * 購入管理番号
     */
    public KNYKNR_NO: string;
    /**
     * PIN コード
     */
    public PIN_CD: string;
    /**
     * 作品コード
     */
    public SKHN_CD: string;

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        return {
            IN_PARAMETER: {
                KNYKNR_NO: this.KNYKNR_NO,
                PIN_CD: this.PIN_CD,
                SKHN_CD: this.SKHN_CD,
                targetNSAlias: 'q1',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
            }
        };

//         return `
// <tns:CreateQrCode>
//     <tns:IN_PARAMETER>
//         <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
//         <q1:PIN_CD>${this.PIN_CD}</q1:PIN_CD>
//         <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
//     </tns:IN_PARAMETER>
// </tns:CreateQrCode>
// `;
    }
}
