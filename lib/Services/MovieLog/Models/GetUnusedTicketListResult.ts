import CommonUtil from '../../../common/util/Util';

interface KnshInfo {
    KNSHKBN_NM: string; // 券種区分名称
    KNY_NUM: string; // 購入枚数
}

class MshyticktInfo {
    public knyknrNo: string; // 購入管理番号
    public skhnCd: string; // 作品コード
    public skhnNm: string; // 作品名称
    public pstrgzUrl: string; // ポスター画像URL
    public znkkkkikishYmd: string; // 全国公開開始年月日 YYYY/MM/DD
    public znkkkkijkDspt: string; // 全国公開時期記述
    public knyYmd: string; // 購入日 YYYY/MM/DD
    public knymiNumSum: string; // 購入枚数合計
    public knshInfo: Array<KnshInfo>; // 券種情報(itemArray)
    public dgtlincntvdwnlodgmnUrl: string; // デジタルインセンティブダウンロード画面ＵＲＬ
    public zskyykkFlg: string; // 座席予約可フラグ
    public shknhikygishCd: string; // ???

    public static parse (resultObject): MshyticktInfo {
        let result = new MshyticktInfo();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (let info of property.KnshInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };
}

export default class GetUnusedTicketListResult {
    public kiinCd: string; // 会員コード
    public mshyticktInfo: Array<MshyticktInfo>; // 作品詳細情報(itemArray)

    public static parse (resultObject): GetUnusedTicketListResult {
        let result = new GetUnusedTicketListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'mshyticktInfo') {
                let infos: Array<MshyticktInfo> = [];

                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (let info of property.MshyticktInfo) {
                            infos.push(MshyticktInfo.parse(info));
                        }
                    } else {
                        infos.push(MshyticktInfo.parse(property.MshyticktInfo));
                    }
                }

                result[normalizedName] = infos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };
}
