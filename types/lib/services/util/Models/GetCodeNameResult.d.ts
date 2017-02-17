/**
 * 区分情報
 * @interface
 */
export interface TypInfo {
    TYP: string;
    KBN_NM: string;
}
/**
 * 各種コード検索out
 * @class
 */
export default class GetCodeNameResult {
    /**
     * 項目区分
     */
    kmkTyp: string;
    /**
     * 項目区分名称
     */
    kmkkbnNm: string;
    /**
     * 選択区分
     */
    slcttyp: string;
    /**
     * 区分情報(itemArray)
     */
    typInfo: TypInfo[];
    static parse(resultObject: any): GetCodeNameResult;
}
