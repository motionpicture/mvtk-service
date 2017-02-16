import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 券種情報
 * @interface
 */
export interface KnshInfo {
    KNSHKBN_NM: string; // 券種区分名称
    KNY_NUM: string; // 購入枚数
}

export default class TicktResult {
    public knyknrNo: string; // 購入管理番号
    public skhnCd: string; // 作品コード
    public skhnNm: string; // 作品名称
    public pstrgzUrl: string; // ポスター画像URL
    public znkkkkikishYmd: string; // 全国公開開始年月日 YYYY/MM/DD
    public znkkkkijkDspt: string; // 全国公開時期記述
    public knyYmd: string; // 購入日 YYYY/MM/DD
    public knymiNumSum: string; // 購入枚数合計
    public knshInfo: KnshInfo[]; // 券種情報(itemArray)
    public dgtlincntvdwnlodgmnUrl: string; // デジタルインセンティブダウンロード画面ＵＲＬ
    public zskyykkFlg: string; // 座席予約可フラグ
    public shknhikygishCd: string; // ???

    public static PARSE(resultObject: any): TicktResult {
        const result = new TicktResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (const info of property.KnshInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    };
}
