import CommonUtil from '../../../common/util/Util';

export default class BnnrInfoResult {
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * バナーコード
     */
    public bnnrCd: string;
    /**
     * バナー名称
     */
    public bnnrNm: string;
    /**
     * バナー表示箇所区分
     */
    public bnnrhyjkshTyp: string;
    /**
     * バナー画像URL
     */
    public bnnrgzUrl: string;
    /**
     * バナーリンク先URL
     */
    public bnnrlnkskUrl: string;
    /**
     * バナー説明本文
     */
    public bnnrstsmiTxt: string;
    /**
     * バナー掲載開始年月日
     */
    public bnnrkisikishYmd: string;
    /**
     * バナー掲載終了年月日
     */
    public bnnrkisishryYmd: string;

    public static parse (resultObject): BnnrInfoResult {
        let result = new BnnrInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    };
}
