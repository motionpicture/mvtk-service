import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import DeliveryIn from './Models/DeliveryIn';

export default class MailService extends Service {
    /**
     * 購入管理番号メール送信
     *
     * @param {DeliveryIn} args
     */
    public delivery(params: Object, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'Delivery';

        let args = new DeliveryIn(params);

        let message = args.toXml();

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