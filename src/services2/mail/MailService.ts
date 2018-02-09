import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { DeliveryIn } from './models/DeliveryIn';

/**
 * MailService
 */
export class MailService extends Service {
    /**
     * 購入管理番号メール送信
     */
    public async delivery(params: Object) {
        const method = 'Delivery';

        const args = new DeliveryIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

                if (result.ResultInfo.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
}
