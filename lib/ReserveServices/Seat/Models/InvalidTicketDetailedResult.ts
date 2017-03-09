import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券詳細情報out
 * @class InvalidTicketDetailedResult
 */
export default class InvalidTicketDetailedResult {
    /**
     * 券種区分
     */
    public knshTyp: string;
    /**
     * 枚数
     */
    public miNum: string;
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
     * @returns {InvalidTicketDetailedResult} 無効券詳細情報out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): InvalidTicketDetailedResult {
        const result = new InvalidTicketDetailedResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            (<any>result)[normalizedName] = property;
        });

        return result;
    };

}