import BaseIn from '../../../Common/models/BaseIn';

export default class CreateQrCodeIn extends BaseIn {
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

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:CreateQrCode>
    <tns:IN_PARAMETER>
        <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
        <q1:PIN_CD>${this.PIN_CD}</q1:PIN_CD>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:CreateQrCode>
`;

        return message;
    }
}
