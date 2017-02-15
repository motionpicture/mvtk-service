import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 鑑賞券明細情報out
 * @class
 */
export default class TicketInfoTypeResult {
    public knshknknrmisiNo: string; // 鑑賞券管理明細番号
    public knshTyp: string; // 券種区分
    public shhziTyp: string; // 消費税区分
    public shhziRt: string; // 消費税率
    public shhziUnip: string; // 消費税単価
    public mvitckthikyftntsuryUnip: string; // ムビチケ配給負担手数料単価
    public mvitcktkgyftntsuryUnip: string; // ムビチケ興行負担手数料単価
    public mvitcktusrtsuryUnip: string; // ムビチケユーザ手数料単価
    public sisnjknRmk: string; // 精算条件備考
    public parknFlg: string; // ペア券フラグ
    public knshknhmbiUnip: string; // 鑑賞券販売単価
    public knshkbnNm: string; // 券種区分名称
    public eishhshkTyp: string; // 映写方式区分
    public knshkmmiNum: string; // 鑑賞券枚数
    public parkntntiknshFlg: string; // ペア券単体券種フラグ
    public kmawsskknshTyp: string; // 組合せ先券種区分

    public static PARSE(resultObject: any): TicketInfoTypeResult {
        const result: any = new TicketInfoTypeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            result[normalizedName] = property;
        });

        return result;
    };
}
