import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券情報
 * @class InvalidTicketResult
 */
export default class InvalidTicketResult {
    /**
     * 無効券種区分
     */
    public mkknshTyp: string;
    /**
     * 無効券種別枚数
     */
    public mkknKnshbtsmiNum: string;
    /**
     * 無効事由区分
     */
    public mkjyTyp: string;
    /**
     * 予約日時
     */
    public yykDt: string;
    /**
     * 使用上映日時
     */
    public shyJeiDt: string;
    /**
     * 使用サイトコード
     */
    public shyStCd: string;
    /**
     * 使用スクリーンコード
     */
    public shyScrnCd: string;
    /**
     * 使用作品コード
     */
    public shySkhnCd: string;
    /**
     * 使用作品名
     */
    public shySkhnNm: string;

    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidTicketResult} InvalidTicketResultout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): InvalidTicketResult {
        const result = new InvalidTicketResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            (<any>result)[normalizedName] = property;
        });

        return result;
    };

}
