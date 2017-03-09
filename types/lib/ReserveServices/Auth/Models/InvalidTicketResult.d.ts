/**
 * 無効券情報
 * @class InvalidTicketResult
 */
export default class InvalidTicketResult {
    /**
     * MKKNSH_TYP
     */
    mkknshTyp: string;
    /**
     * MKKN_KNSHBTSMI_NUM
     */
    mkknKnshbtsmiNum: string;
    /**
     * MKJY_TYP
     */
    mkjyTyp: string;
    /**
     * YYK_DT
     */
    yykDt: string;
    /**
     * SHY_JEI_DT
     */
    shyJeiDt: string;
    /**
     * SHY_ST_CD
     */
    shyStCd: string;
    /**
     * SHY_SCRN_CD
     */
    shyScrnCd: string;
    /**
     * SHY_SKHN_CD
     */
    shySkhnCd: string;
    /**
     * SHY_SKHN_NM
     */
    shySkhnNm: string;
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidTicketResult} InvalidTicketResultout
     */
    static parse(resultObject: any): InvalidTicketResult;
}