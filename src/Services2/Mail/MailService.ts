import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import DeliveryIn from './models/DeliveryIn';

export default class MailService extends Service {
    /**
     * 購入管理番号メール送信
     *
     * @param {DeliveryIn} args
     */
    public delivery(params: Object) {
        let method = 'Delivery';

        let args = new DeliveryIn(params);

        let message = args.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isSuccess = false;

                if (result.ResultInfo.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
}