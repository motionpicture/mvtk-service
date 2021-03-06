import { Util } from '../../../common/util/Util';

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
 * MvtkGiftCardBalanceInquiryResult
 */
export class MvtkGiftCardBalanceInquiryResult {
    /**
     * 凸版サービス返却値
     */
    public tppnsrvcrspns: string;
    /**
     * ムビチケギフトカードID
     */
    public mvtkgftcrdId: string;
    /**
     * ムビチケギフトカードPINコード
     */
    public mvtkgftcrdpinCd: string;
    /**
     * ムビチケギフトカード券種区分
     */
    public mvtkgftcrdknshTyp: string;
    /**
     * ムビチケギフトカード券種名称
     */
    public mvtkgftcrdknshNm: string;
    /**
     * 有効期限(2017/12/01)
     */
    public ykkgnYmd: string;
    /**
     * 残高
     */
    public zndk: string;
    /**
     * 初回チャージ金額
     */
    public shkichrgkngk: string;

    /**
     * 利用明細情報(itemArray)
     */
    public rymisiInfo: RymisiInfo[];

    public static parse(resultObject: any): MvtkGiftCardBalanceInquiryResult {
        const result = new MvtkGiftCardBalanceInquiryResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'rymisiInfo') {
                const rymisiInfos: RymisiInfo[] = [];

                if (property !== null && property.hasOwnProperty('RymisiInfo')) {
                    if (Array.isArray(property.RymisiInfo)) {
                        for (const info of property.RymisiInfo) {
                            rymisiInfos.push(info);
                        }
                    } else {
                        rymisiInfos.push(property.RymisiInfo);
                    }
                }

                result[normalizedName] = rymisiInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        }

        return result;
    }
}
