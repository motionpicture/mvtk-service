export default class GetGmoEntryTranIn {
    /**
     * 決済管理番号
     */
    public KSSIKNR_NO: string = '';
    /**
     * 決済方法区分
     */
    public KSSIHH_TYP: string = '';
    /**
     * ご利用金額
     */
    public GRYKNGK: string = '';
    /**
     * 購入者コード
     */
    public KNYSH_CD: string = '';
    /**
     * 会員フラグ
     */
    public KIIN_FLG: string = '0';
    /**
     * 併用決済フラグ
     */
    public HIYKSSI_FLG: string = '0';
    /**
     * 併用決済区分
     */
    public HIYKSSI_TYP: string = '';
    /**
     * 作品コード
     */
    public SKHN_CD: string = '';

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:GetGmoEntryTran>
    <tns:IN_PARAMETER>
        <q3:KSSIKNR_NO>${this.KSSIKNR_NO}</q3:KSSIKNR_NO>
        <q3:KSSIHH_TYP>${this.KSSIHH_TYP}</q3:KSSIHH_TYP>
        <q3:GRYKNGK>${this.GRYKNGK}</q3:GRYKNGK>
        <q3:KNYSH_CD>${this.KNYSH_CD}</q3:KNYSH_CD>
        <q3:KIIN_FLG>${this.KIIN_FLG}</q3:KIIN_FLG>
`;
        if (this.HIYKSSI_FLG === '1') {
            message +=`
        <q3:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q3:HIYKSSI_FLG>
        <q3:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q3:HIYKSSI_TYP>
`;
        }
            message +=`
        <q3:SKHN_CD>${this.SKHN_CD}</q3:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:GetGmoEntryTran>
`;

        return message;
    }
}
