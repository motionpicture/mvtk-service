import BaseIn from '../../../Common/models/BaseIn';
/**
 * ギフトカード利用in
 * @class
 * @extends {BaseIn}
 */
export default class MvtkGiftCardEntryIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkgftcrdInfoIn: MvtkgftcrdInfoIn[];
    };
    /**
     * ご利用金額
     */
    DVC_TYP: string;
    toXml(): string;
}
/**
 * ギフトカードID情報
 * @interface
 */
export interface MvtkgftcrdInfoIn {
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
}
