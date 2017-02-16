import Service from '../../Common/Service';
import { IDeliveryIn } from './Models/DeliveryIn';
/**
 * MailService
 * @class
 * @extends {Service}
 */
export default class MailService extends Service {
    /**
     * 購入管理番号メール送信
     *
     * @param {IDeliveryIn} args
     */
    delivery(params: IDeliveryIn, cb: (err: any, response: any, isSuccess: boolean) => void): void;
}
