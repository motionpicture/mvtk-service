import BaseIn from '../../../common/models/BaseIn';

export default class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    public list: Array<string>;

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
