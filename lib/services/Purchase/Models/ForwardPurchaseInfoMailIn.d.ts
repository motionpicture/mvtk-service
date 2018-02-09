import { BaseIn } from '../../../common/models/BaseIn';
/**
 * ForwardPurchaseInfoMailIn
 */
export declare class ForwardPurchaseInfoMailIn extends BaseIn {
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
