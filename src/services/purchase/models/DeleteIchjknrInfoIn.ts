
import { BaseIn } from '../../../common/models/BaseIn';

/**
 * DeleteIchjknrInfoIn
 */
export class DeleteIchjknrInfoIn extends BaseIn {
    public accessIdList: string[] = []; // 取引ＩＤリスト

    public toXml(): string {
        let message = `
<tns:DeleteIchjknr>
    <tns:model>

`;
        for (const accessId of this.accessIdList) {
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
