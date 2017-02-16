import BaseIn from '../../../Common/models/BaseIn';

/**
 * 一時管理テーブル（情報）削除inクラス
 * @class
 * @extends {BaseIn}
 */
export class DeleteIchjknrInfoIn extends BaseIn {
    public accessIdList: string[] | null = null; // 取引ＩＤリスト

    public toXml(): string {
        // tslint:disable-next-line:no-multiline-string
        let message = `
<tns:DeleteIchjknr>
    <tns:model>

`;
        if (this.accessIdList) {
            for (const accessId of this.accessIdList) {
                message += `
    <q25:string>${accessId}</q25:string>
`;
            }
        }

        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:model>
</tns:DeleteIchjknr>
`;

        return message;
    }
}

/**
 * 一時管理テーブル（情報）削除in
 * @interface
 */
export interface IDeleteIchjknrInfoIn {
    /**
     * 取引ＩＤリスト
     */
    accessIdList: string[];
}
