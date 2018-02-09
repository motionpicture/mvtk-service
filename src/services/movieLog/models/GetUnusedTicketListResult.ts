
import { Util } from '../../../common/util/Util';

export interface KnshInfo {
    KNSHKBN_NM: string; // 券種区分名称
    KNY_NUM: string; // 購入枚数
}

/**
 * MshyticktInfo
 */
export class MshyticktInfo {
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

    public static parse(resultObject: any): MshyticktInfo {
        const result = new MshyticktInfo();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
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
        }

        return result;
    }
}

/**
 * GetUnusedTicketListResult
 */
export class GetUnusedTicketListResult {
    public kiinCd: string; // 会員コード
    public mshyticktInfo: MshyticktInfo[]; // 作品詳細情報(itemArray)

    public static parse(resultObject: any): GetUnusedTicketListResult {
        const result = new GetUnusedTicketListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'mshyticktInfo') {
                const infos: MshyticktInfo[] = [];

                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (const info of property.MshyticktInfo) {
                            infos.push(MshyticktInfo.parse(info));
                        }
                    } else {
                        infos.push(MshyticktInfo.parse(property.MshyticktInfo));
                    }
                }

                result[normalizedName] = infos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        }

        return result;
    }
}
