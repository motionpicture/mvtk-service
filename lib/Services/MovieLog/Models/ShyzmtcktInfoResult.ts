import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 作品詳細情報out
 * @class
 */
export default class ShyzmtcktInfoResult {
    public mvilgNo: string; // ムビログ番号
    public knyDt: string; // 購入日時
    public knyknrNo: string; // 購入管理番号
    public skhnCd: string; // 作品コード
    public skhnNm: string; // 作品名称
    public pstrgzUrl: string; // ポスター画像URL
    public znkkkkikishYmd: string; // 全国公開開始年月日
    public znkkkkijkDspt: string; // 全国公開時期記述
    public knshkmmisumNum: string; // 鑑賞券合計枚数
    public knshInfo: KnshInfo[]; // 券種情報(itemArray)
    public dgtlincntvdwnlodgmnUrl: string; // デジタルインセンティブダウンロード画面ＵＲＬ
    public knytcktSttsKbn: string; // 購入チケットステータス区分
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {ShyzmtcktInfoResult} 作品詳細情報out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): ShyzmtcktInfoResult {
        const result = new ShyzmtcktInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshInfo') {
                const infos: KnshInfo[] = [];
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

/**
 * 券種情報
 * @interface
 */
export interface KnshInfo {
    /**
     * 券種区分名称
     */
    KNSHKBN_NM: string;
    /**
     * 購入枚数
     */
    KNY_NUM: string;
}
