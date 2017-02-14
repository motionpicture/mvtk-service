/**
 * 無効券種情報
 * @class
 */
export default class InvalidNoteTypeResult {
    /**
     * 無効券種区分
     */
    mkknshTyp: string;
    /**
     * 要求枚数
     */
    reqMiNum: string;
    /**
     * 有効枚数
     */
    ykMiNum: string;
    /**
     * 無効枚数
     */
    mkMiNum: string;
    /**
     * データ整形
     * @method
     */
    static PARSE(resultObject: any): InvalidNoteTypeResult;
}
