import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券種情報
 * @class
 */
export default class InvalidNoteTypeResult {
    /**
     * 無効券種区分
     */
    public mkknshTyp: string;
    /**
     * 要求枚数
     */
    public reqMiNum: string;
    /**
     * 有効枚数
     */
    public ykMiNum: string;
    /**
     * 無効枚数
     */
    public mkMiNum: string;

    /**
     * データ整形
     * @method
     */
    public static PARSE(resultObject: any): InvalidNoteTypeResult {
        const result: any = new InvalidNoteTypeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });

        return result;
    };

}
