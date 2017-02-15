import BaseIn from '../../../Common/models/BaseIn';
export default class GiftCardIDAuthIn extends BaseIn {
    /**
     *  ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdInfo: Array<{
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
        }>;
    };
    /**
     * 利用金額
     */
    KSSIKNR_NO: string;
    /**
     * デバイス区分
     */
    RYUKNGK: string;
    /**
     * ご利用金額
     */
    DVC_TYP: string;
    /**
     * ロックフラグ
     */
    LOCK_FLG: string;
    /**
     * 併用決済フラグ
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    HIYKSSI_TYP: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}
