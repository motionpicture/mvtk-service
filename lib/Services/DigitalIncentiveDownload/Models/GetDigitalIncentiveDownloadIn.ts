export default class GetDigitalIncentiveDownloadIn {
    /**
     * 購入管理番号
     */
    public knyknrNo: string = '';
    /**
     * デジタルインセンティブコード
     */
    public dgtlincntvCd: string = '';
    /**
     * デジタルインセンティブ枝番号
     */
    public dgtlincntvedNo: string = '';

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }
}
