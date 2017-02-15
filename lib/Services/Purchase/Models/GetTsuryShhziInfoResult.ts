import * as CommonUtil from '../../../Common/Util/Util';

export default class GetTsuryShhziInfoResult {
    public knshknknrmisiNo: string; // 鑑賞券管理明細番号
    public mvitckthikyftntsuryUnip: string; // ムビチケ配給負担手数料単価
    public mvitcktkgyftntsuryUnip: string; // ムビチケ興行負担手数料単価
    public mvitcktusrtsuryUnip: string; // ムビチケユーザー手数料単価
    public shhziRt: string; // 消費税率
    public shhziTyp: string; // 消費税区分
    public shhziUnip: string; // 消費税単価

    public static PARSE (resultObject): GetTsuryShhziInfoResult {
        let result = new GetTsuryShhziInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
