import BaseIn from '../../../Common/models/BaseIn';

/**
 * 購入管理番号メール転送inクラス
 * @class
 * @extends {BaseIn}
 */
export class ForwardPurchaseInfoMailIn extends BaseIn {
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * 宛先
     */
    public mailaddress: string;
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * QRコードURL
     */
    public qrcdUrl: string;
}

/**
 * 購入管理番号メール転送in
 * @interface
 */
export interface IForwardPurchaseInfoMailIn {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * 宛先
     */
    mailaddress: string;
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * QRコードURL
     */
    qrcdUrl: string;
}
