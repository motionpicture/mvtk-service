import { BaseIn } from '../../../common/models/BaseIn';

/**
 * EncryptDataListIn
 */
export class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    public list: string[];

    public toXml(): string {
        let message = `
<tns:EncryptDataList>
    <tns:list>

`;
        for (const data of this.list) {
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
