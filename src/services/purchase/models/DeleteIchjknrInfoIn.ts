
import { BaseIn } from '../../../common/models/BaseIn';

/**
 * DeleteIchjknrInfoIn
 */
export class DeleteIchjknrInfoIn extends BaseIn {
    public accessIdList: string[] = []; // 取引ＩＤリスト

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        // return {
        //     list: {
        //         string: this.accessIdList,
        //         targetNSAlias: 'q11',
        //         // tslint:disable-next-line:no-http-string max-line-length
        //         targetNamespace: `http://schemas.microsoft.com/2003/10/Serialization/Arrays`
        //     }
        // };

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

        return { _xml: message };
    }
}
