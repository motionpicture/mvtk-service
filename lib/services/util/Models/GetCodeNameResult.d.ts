export interface TypInfo {
    TYP: string;
    KBN_NM: string;
}
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
    typInfo: Array<TypInfo>;
    static parse(resultObject: any): GetCodeNameResult;
}
