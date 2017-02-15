import * as CommonUtil from '../../../Common/Util/Util';

/**
 * バナーリスト取得out
 */
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

    public static PARSE(resultObject: any): BnnrInfoResult {
        const result: any = new BnnrInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            result[normalizedName] = property;
        });

        return result;
    };
}
