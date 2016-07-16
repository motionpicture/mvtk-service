import CommonUtil from '../../../common/util/Util';

interface KnshInfo {
    KNSHKBN_NM: string; // 券種区分名称
    KNY_NUM: string; // 購入枚数
}

class ShyzmtcktInfo {
    public mvilgNo: string; // ムビログ番号
    public knyDt: string; // 購入日時
    public knyknrNo: string; // 購入管理番号
    public skhnCd: string; // 作品コード
    public skhnNm: string; // 作品名称
    public pstrgzUrl: string; // ポスター画像URL
    public znkkkkikishYmd: string; // 全国公開開始年月日
    public znkkkkijkDspt: string; // 全国公開時期記述
    public knshkmmisumNum: string; // 鑑賞券合計枚数
    public knshInfo: Array<KnshInfo>; // 券種情報(itemArray)
    public dgtlincntvdwnlodgmnUrl: string; // デジタルインセンティブダウンロード画面ＵＲＬ
    public knytcktSttsKbn: string; // 購入チケットステータス区分

    public static parse (resultObject): ShyzmtcktInfo {
        let result = new ShyzmtcktInfo();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshInfo') {
                let infos: Array<KnshInfo> = [];
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

export default class ShyzmtcktInfoListResult {
    public kiinCd: string = ''; // 会員コード
    public shyzmtcktInfo: Array<ShyzmtcktInfo> = null; // 作品詳細情報(itemArray)

    public static parse (resultObject): ShyzmtcktInfoListResult {
        let result = new ShyzmtcktInfoListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'shyzmtcktInfo') {
                let infos: Array<ShyzmtcktInfo> = [];

                if (property !== null && property.hasOwnProperty('ShyzmtcktInfo')) {
                    if (Array.isArray(property.ShyzmtcktInfo)) {
                        for (let info of property.ShyzmtcktInfo) {
                            infos.push(ShyzmtcktInfo.parse(info));
                        }
                    } else {
                        infos.push(ShyzmtcktInfo.parse(property.ShyzmtcktInfo));
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
