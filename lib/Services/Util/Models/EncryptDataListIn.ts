export default class EncryptDataListIn {
    /**
     * 暗号化文字列リスト
     */
    public list: Array<string>;

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }

    public toXml(): string {
        let message = `
<tns:EncryptDataList>
    <tns:list>

`;
        for (let data of this.list) {
            message += `
        <q13:string>${data}</q13:string>
`;
        }

        message += `
    </tns:list>
</tns:EncryptDataList>
`;

        return message;
    }
}
