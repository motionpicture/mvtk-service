/**
 * 利用明細情報
 * @interface
 */
export interface RymisiInfo {
    /**
     * ギフトカード決済管理番号
     */
    GFTCRDKSSIKNR_NO: string;
    /**
     * 代行決済ステータス区分
     * 41:減算（売上）/42:取消/43:障害取消
     */
    DIKKSSISTTS_TYP: string;
    /**
     * 使用日付(2017/12/01)
     */
    SHY_YMD: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 作品名称
     */
    SKHN_NM: string;
    /**
     * 使用金額
     */
    SHY_MNY: string;
    /**
     * 非表示フラグ
     * 0：画面に表示する
     * 1：画面に表示しない
     */
    HHYJ_FLG: string;
}
/**
 * ムビチケギフトカード残高確認out
 * @class
 */
export default class MvtkGiftCardBalanceInquiryResult {
    /**
     * 凸版サービス返却値
     */
    tppnsrvcrspns: string;
    /**
     * ムビチケギフトカードID
     */
    mvtkgftcrdId: string;
    /**
     * ムビチケギフトカードPINコード
     */
    mvtkgftcrdpinCd: string;
    /**
     * ムビチケギフトカード券種区分
     */
    mvtkgftcrdknshTyp: string;
    /**
     * ムビチケギフトカード券種名称
     */
    mvtkgftcrdknshNm: string;
    /**
     * 有効期限(2017/12/01)
     */
    ykkgnYmd: string;
    /**
     * 残高
     */
    zndk: string;
    /**
     * 初回チャージ金額
     */
    shkichrgkngk: string;
    /**
     * 利用明細情報(itemArray)
     */
    rymisiInfo: RymisiInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {MvtkGiftCardBalanceInquiryResult} ムビチケギフトカード残高確認out
     */
    static parse(resultObject: any): MvtkGiftCardBalanceInquiryResult;
}
