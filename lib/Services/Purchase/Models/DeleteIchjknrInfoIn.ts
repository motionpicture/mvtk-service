export default class DeleteIchjknrInfoIn {
    public accessIdList: Array<string>; // 取引ＩＤリスト

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }

    public toXml(): string {
        let message = `
<tns:DeleteIchjknr>
    <tns:model>

`;
        for (let accessId of this.accessIdList) {
            message += `
    <q25:string>${accessId}</q25:string>
`;
        }

        message += `
    </tns:model>
</tns:DeleteIchjknr>
`;

        return message;
    }
}
