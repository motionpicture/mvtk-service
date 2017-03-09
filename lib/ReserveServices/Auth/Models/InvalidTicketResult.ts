import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 無効券情報
 * @class InvalidTicketResult
 */
export default class InvalidTicketResult {
    /**
     * MKKNSH_TYP
     */
    public mkknshTyp: string;
    /**
     * MKKN_KNSHBTSMI_NUM
     */
    public mkknKnshbtsmiNum: string;
    /**
     * MKJY_TYP
     */
    public mkjyTyp: string;
    /**
     * YYK_DT
     */
    public yykDt: string;
    /**
     * SHY_JEI_DT
     */
    public shyJeiDt: string;
    /**
     * SHY_ST_CD
     */
    public shyStCd: string;
    /**
     * SHY_SCRN_CD
     */
    public shyScrnCd: string;
    /**
     * SHY_SKHN_CD
     */
    public shySkhnCd: string;
    /**
     * SHY_SKHN_NM
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