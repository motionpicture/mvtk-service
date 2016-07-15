export default class GetDigitalIncentiveDownloadLinkListIn {
    /**
     * デバイス区分
     */
    public dvcTyp: string = '';
    /**
     * デジタルインセンティブダウンロード画面URL
     */
    public dgtlincntvdwnlodgmnUrl: string = '';
    /**
     * 購入管理番号
     */
    public knyknrNo: string = '';
    /**
     * ムビチケ暗証番号
     */
    public pinCd: string = '';

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }
}
