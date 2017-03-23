import BaseIn from '../../../Common/models/BaseIn';
/**
 * 代行会社決済取消呼出inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class GMOCancelIn extends BaseIn {
    accessId: string;
    accessPwd: string;
    kssihhTyp: string;
    hiykssihhTyp: string;
    kssiknrNo: string;
    grykngk: string;
    tranDt: string;
    toXml(): string;
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
