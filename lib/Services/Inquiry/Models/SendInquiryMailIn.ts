export default class SendInquiryMailIn {
    /**
     * 問合せ日時
     */
    public tiawsDt: string;
    /**
     * 問合せ区分
     */
    public tiawsKbn: string;
    /**
     * 問合せメール本文
     */
    public tiawsniyTxt: string;
    /**
     * 問合せ者姓名称
     */
    public tiawsshsiNm: string;
    /**
     * 問合せ者名名称
     */
    public tiawsshmiNm: string;
    /**
     * 問合せ者市外局番号
     */
    public tiawsshshgikykNo: string;
    /**
     * 問合せ者市内局番号
     */
    public tiawsshshnikykNo: string;
    /**
     * 問合せ者加入者番号
     */
    public tiawsshknyshNo: string;
    /**
     * 問合せ者メールアドレス
     */
    public tiawsshMladdr: string;
    /**
     * 会員コード
     */
    public kiinCd: string;

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }
}
