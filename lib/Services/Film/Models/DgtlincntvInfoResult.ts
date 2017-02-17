import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 特典取得out
 * @class
 */
export default class DgtlincntvInfoResult {
    public dvcTyp: string; // デバイス区分
    public dgtlincntvCd: string; // デジタルインセンティブコード
    public dgtlincntvTtl: string; // デジタルインセンティブタイトル
    public dgtlincntvstsmiTxt: string; // デジタルインセンティブ説明本文
    public smplqzUrl: string; // サンプル画像URL
    public dgtlincntvknykishYmd: string; // デジタルインセンティブ購入開始年月日
    public dgtlincntvknyshryYmd: string; // デジタルインセンティブ購入終了年月日
    public dgtlincntvdwnlodykTm: string; // デジタルインセンティブダウンロード有効期間
    public dgtlincntvdwnlodjgnkiNum: string; // デジタルインセンティブダウンロード上限回数
    public skhndgtlincntvRmk: string; // 作品デジタルインセンティブ備考
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {DgtlincntvInfoResult} 特典取得out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): DgtlincntvInfoResult {
        const result = new DgtlincntvInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    };
}
