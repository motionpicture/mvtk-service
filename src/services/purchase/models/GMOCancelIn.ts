
import { BaseIn } from '../../../common/models/BaseIn';

/**
 * GMOCancelIn
 */
export class GMOCancelIn extends BaseIn {
    public accessId: string; // 取引ＩＤ(決済代行会社が取引を識別するために発行するＩＤ)
    public accessPwd: string; // 取引パスワード(決済代行会社が取引を識別するために発行するパスワード)
    public kssihhTyp: string; // 決済方法区分
    public hiykssihhTyp: string; // 併用決済方法区分
    public kssiknrNo: string; // 決済管理番号
    public grykngk: string; // ご利用金額
    public tranDt: string; // 決済日時(2016/05/18 13:31:25)

    public toXml(): string {
        return `
<tns:GMOCancel>
    <tns:accessId>${this.accessId}</tns:accessId>
    <tns:accessPwd>${this.accessPwd}</tns:accessPwd>
    <tns:kssihhTyp>${this.kssihhTyp}</tns:kssihhTyp>
    <tns:hiykssihhTyp>${this.hiykssihhTyp}</tns:hiykssihhTyp>
    <tns:kssiknrNo>${this.kssiknrNo}</tns:kssiknrNo>
    <tns:grykngk>${this.grykngk}</tns:grykngk>
    <tns:tranDt>${this.tranDt}</tns:tranDt>
</tns:GMOCancel>
`;
    }
}
