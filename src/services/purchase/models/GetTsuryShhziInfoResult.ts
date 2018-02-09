import { Util } from '../../../common/util/Util';

/**
 * GetTsuryShhziInfoResult
 */
export class GetTsuryShhziInfoResult {
    public knshknknrmisiNo: string; // 鑑賞券管理明細番号
    public mvitckthikyftntsuryUnip: string; // ムビチケ配給負担手数料単価
    public mvitcktkgyftntsuryUnip: string; // ムビチケ興行負担手数料単価
    public mvitcktusrtsuryUnip: string; // ムビチケユーザー手数料単価
    public shhziRt: string; // 消費税率
    public shhziTyp: string; // 消費税区分
    public shhziUnip: string; // 消費税単価

    public static parse(resultObject: any): GetTsuryShhziInfoResult {
        const result = new GetTsuryShhziInfoResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
