import { BaseIn } from '../../../common/models/BaseIn';

/**
 * EncryptDataListIn
 */
export class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    public list: string[];

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        return {
            list: {
                string: this.list,
                targetNSAlias: 'q13',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: `http://schemas.microsoft.com/2003/10/Serialization/Arrays`
            }
        };

        //         let message = `
        // <tns:EncryptDataList>
        //     <tns:list>

        // `;
        //         for (const data of this.list) {
        //             message += `
        //         <q13:string>${data}</q13:string>
        // `;
        //         }

        //         message += `
        //     </tns:list>
        // </tns:EncryptDataList>
        // `;

        //         return message;
    }
}
