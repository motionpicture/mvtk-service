import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券種情報out
 * @class InvalidNoteTypeResult
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
     *
     * @param {any} resultObject
     * @returns {InvalidNoteTypeResult} 無効券種情報out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): InvalidNoteTypeResult {
        const result = new InvalidNoteTypeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            (<any>result)[normalizedName] = property;
        });

        return result;
    };

}
