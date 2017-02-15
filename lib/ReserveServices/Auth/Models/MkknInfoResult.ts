import * as CommonUtil from '../../../Common/Util/Util';

/**
 * MkknInfo
 * @class
 */
export default class MkknInfoResult {
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
     * @method
     */
    public static PARSE(resultObject: any): MkknInfoResult {
        const result: any = new MkknInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });

        return result;
    };

}
