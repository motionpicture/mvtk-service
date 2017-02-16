import BaseIn from '../../../Common/models/BaseIn';

/**
 * 代行会社決済取消呼出inクラス
 * @class
 * @extends {BaseIn}
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
        const message = `
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

        return message;
    }
}

/**
 * 代行会社決済取消呼出in
 * @interface
 */
export interface IGMOCancelIn {
    /**
     * 取引ＩＤ(決済代行会社が取引を識別するために発行するＩＤ)
     */
    accessId: string;
    /**
     * 取引パスワード(決済代行会社が取引を識別するために発行するパスワード)
     */
    accessPwd: string;
    /**
     * 決済方法区分
     */
    kssihhTyp: string;
    /**
     * 併用決済方法区分
     */
    hiykssihhTyp: string;
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * ご利用金額
     */
    grykngk: string;
    /**
     * 決済日時(2016/05/18 13:31:25)
     */
    tranDt: string;
}
