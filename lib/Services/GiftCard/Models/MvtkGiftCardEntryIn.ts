import BaseIn from '../../../common/models/BaseIn';

export default class MvtkGiftCardEntryIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    public MVTKGFTCRD_INFO_IN: {
        MvtkgftcrdInfoIn: Array<{
            /**
             * ギフトカード決済管理番号
             */
            GFTCRDKSSIKNR_NO: string;
            /**
             * ムビチケギフトカードPINコード
             */
            MVTKGFTCRDPIN_CD: string;
            /**
             * ムビチケギフトカードID
             */
            MVTKGFTCRD_ID: string;
            /**
             * 利用金額
             */
            RYUKNGK: string;
        }>;
    };
    /**
     * ご利用金額
     */
    public DVC_TYP: string;

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:MvtkGiftCardEntry>
    <tns:MVTKGFTCRD_INFO_IN>
`;
        for (let info of this.MVTKGFTCRD_INFO_IN.MvtkgftcrdInfoIn) {
            message += `
        <q4:MvtkgftcrdInfoIn>
            <q4:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q4:GFTCRDKSSIKNR_NO>
            <q4:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q4:MVTKGFTCRDPIN_CD>
            <q4:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q4:MVTKGFTCRD_ID>
            <q4:RYUKNGK>${info.RYUKNGK}</q4:RYUKNGK>
        </q4:MvtkgftcrdInfoIn>
`;
        }

        message +=`
    </tns:MVTKGFTCRD_INFO_IN>
    <tns:DVC_TYP>${this.DVC_TYP}</tns:DVC_TYP>
</tns:MvtkGiftCardEntry>
`;

        return message;
    }
}
