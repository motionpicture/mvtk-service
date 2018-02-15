import { BaseIn } from '../../../common/models/BaseIn';

/**
 * GiftCardIDAuthIn
 */
export class GiftCardIDAuthIn extends BaseIn {
    /**
     *  ギフトカードID情報
     */
    public MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdInfo: {
            /**
             * ムビチケギフトカードID
             */
            MVTKGFTCRD_ID: string;
            /**
             * ムビチケギフトカードPINコード
             */
            MVTKGFTCRDPIN_CD: string;
            /**
             * ギフトカード決済管理番号
             */
            GFTCRDKSSIKNR_NO: string;
        }[];
    };

    /**
     * 利用金額
     */
    public KSSIKNR_NO: string;
    /**
     * デバイス区分
     */
    public RYUKNGK: string;
    /**
     * ご利用金額
     */
    public DVC_TYP: string;
    /**
     * ロックフラグ
     */
    public LOCK_FLG: string;
    /**
     * 併用決済フラグ
     */
    public HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    public HIYKSSI_TYP: string;
    /**
     * 購入者コード
     */
    public KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    public KIIN_FLG: string;
    /**
     * 作品コード
     */
    public SKHN_CD: string;

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = '<tns:GiftCardIDAuth>';
        message += '<tns:IN_PARAMETER>';
        message += '<q1:MVTKGFTCRD_INFO_IN>';

        for (const info of this.MVTKGFTCRD_INFO_IN.MvtkGftcrdInfo) {
            if (this.LOCK_FLG === '1') {
                message += `
            <q1:MvtkGftcrdInfo>
                <q1:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q1:MVTKGFTCRD_ID>
                <q1:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q1:MVTKGFTCRDPIN_CD>
                <q1:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q1:GFTCRDKSSIKNR_NO>
            </q1:MvtkGftcrdInfo>
`;
            } else {
                message += `
            <q1:MvtkGftcrdInfo>
                <q1:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q1:MVTKGFTCRD_ID>
                <q1:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q1:MVTKGFTCRDPIN_CD>
            </q1:MvtkGftcrdInfo>
`;
            }
        }

        message += '</q1:MVTKGFTCRD_INFO_IN>';
        if (this.KSSIKNR_NO !== undefined && this.KSSIKNR_NO !== null && this.KSSIKNR_NO !== '') {
            message += `
        <q1:KSSIKNR_NO>${this.KSSIKNR_NO}</q1:KSSIKNR_NO>
`;
        }

        message += `
        <q1:RYUKNGK>${this.RYUKNGK}</q1:RYUKNGK>
        <q1:DVC_TYP>${this.DVC_TYP}</q1:DVC_TYP>
        <q1:LOCK_FLG>${this.LOCK_FLG}</q1:LOCK_FLG>
        <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
`;

        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
`;
        }

        if (this.KIIN_FLG === '1') {
            message += `
        <q1:KNYSH_CD>${this.KNYSH_CD}</q1:KNYSH_CD>
`;
        }

        message += `
        <q1:KIIN_FLG>${this.KIIN_FLG}</q1:KIIN_FLG>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:GiftCardIDAuth>
`;

        return message;
    }
}
