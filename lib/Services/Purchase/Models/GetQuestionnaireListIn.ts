export default class GetQuestionnaireListIn {
    /**
     * 作品コード
     */
    public skhnCd: string;

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }
}