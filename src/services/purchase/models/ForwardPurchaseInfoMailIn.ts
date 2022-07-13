
import { BaseIn } from '../../../common/models/BaseIn';

/**
 * ForwardPurchaseInfoMailIn
 *
 * @deprecated APIが廃止予定
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
