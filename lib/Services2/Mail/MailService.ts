import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {DeliveryIn, IDeliveryIn} from './Models/DeliveryIn';

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
    public delivery(params: IDeliveryIn, cb: (err: any, response: any, isSuccess: boolean) => void): void {
        const method = 'Delivery';

        const args = new DeliveryIn(params);

        const message = args.toXml();

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, false);

            let isSuccess = false;

            if (result.ResultInfo.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }
}
