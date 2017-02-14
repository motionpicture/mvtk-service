import CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券詳細情報
 * @class
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
     * @method
     */
    public static PARSE(resultObject: any): InvalidTicketDetailedResult {
        const result: any = new InvalidTicketDetailedResult();
        Object.keys(resultObject).forEach((value) => {
            const propertyName = value;
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });

        return result;
    };

}
