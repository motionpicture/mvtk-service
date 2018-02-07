import BaseIn from '../../../common/models/BaseIn';
export default class MvtkGiftCardEntryIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
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
    DVC_TYP: string;
    toXml(): string;
}
