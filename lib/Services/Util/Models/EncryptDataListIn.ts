import BaseIn from '../../../Common/models/BaseIn';

/**
 * 暗号化（配列）out
 * @class
 * @extends {BaseIn}
 */
export default class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    public list: string[];

    public toXml(): string {
        // tslint:disable-next-line:no-multiline-string
        let message = `
<tns:EncryptDataList>
    <tns:list>

`;
        for (const data of this.list) {
            message += `
        <q13:string>${data}</q13:string>
`;
        }

        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:list>
</tns:EncryptDataList>
`;

        return message;
    }
}
