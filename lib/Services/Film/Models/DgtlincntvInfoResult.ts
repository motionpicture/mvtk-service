import CommonUtil from '../../../Common/Util/Util';

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

    public static parse (resultObject): DgtlincntvInfoResult {
        let result = new DgtlincntvInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    };
}
