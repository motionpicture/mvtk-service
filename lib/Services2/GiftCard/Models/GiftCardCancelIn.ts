export default class GiftCardCancelIn {
    /**
     * ギフトカードID情報
     */
    public MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdCancelInfo: Array<{
            MVTKGFTCRD_ID: string; // ムビチケギフトカードID
            MVTKGFTCRDPIN_CD: string; // ムビチケギフトカードPINコード
            GFTCRDKSSIKNR_NO: string; // ギフトカード決済管理番号
            RYUKNGK: string; // ムビチケオンラインギフトカードで決済した金額
            SYRYKY_DT: string; // 取消を行う決済処理を要求した日時(取消区分が2の場合は必須)
        }>;
    } = null;

    /**
     * 取消区分
     * 決済取消を行う区分
     * 0：ロック解除 1：取消 2：障害取消
     */
    public TRKSH_TYP: string = '';

    /**
     * ギフトカード決済取消を行うデバイスの区分
     * 1：PC 09：SmartPhone
     */
    public DVC_TYP: string = '';
    /**
     * 取消しする作品のコード
     */
    public SKHN_CD: string = '';
    /**
     * 取消しする決済の管理番号
     */
    public KSSIKNR_NO: string = '';

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
<tns:GiftCardCancel>
    <tns:IN_PARAMETER>
        <q3:MVTKGFTCRD_INFO_IN>
`;

        for (let info of this.MVTKGFTCRD_INFO_IN.MvtkGftcrdCancelInfo) {
            message += `
            <q3:MvtkGftcrdCancelInfo>
                <q3:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q3:MVTKGFTCRD_ID>
                <q3:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q3:MVTKGFTCRDPIN_CD>
                <q3:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q3:GFTCRDKSSIKNR_NO>
                <q3:RYUKNGK>${info.RYUKNGK}</q3:RYUKNGK>
`;
            if (info.SYRYKY_DT) {
                message += `
                <q3:SYRYKY_DT>${info.SYRYKY_DT}</q3:SYRYKY_DT>
`;
            }

            message += `
            </q3:MvtkGftcrdCancelInfo>
`;
        }

        message +=`
        </q3:MVTKGFTCRD_INFO_IN>
`;

        message +=`
        <q3:TRKSH_TYP>${this.TRKSH_TYP}</q3:TRKSH_TYP>
        <q3:DVC_TYP>${this.DVC_TYP}</q3:DVC_TYP>
        <q3:SKHN_CD>${this.SKHN_CD}</q3:SKHN_CD>
        <q3:KSSIKNR_NO>${this.KSSIKNR_NO}</q3:KSSIKNR_NO>
    </tns:IN_PARAMETER>
</tns:GiftCardCancel>
`;

        return message;
    }
}
