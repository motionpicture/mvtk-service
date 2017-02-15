import BaseIn from '../../../Common/models/BaseIn';

export default class DeleteIchjknrInfoIn extends BaseIn {
    public accessIdList: Array<string> = null; // 取引ＩＤリスト

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
