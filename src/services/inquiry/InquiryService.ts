
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { SendInquiryMailIn } from './models/SendInquiryMailIn';

/**
 * InquiryService
 */
export class InquiryService extends Service {
    /**
     * 問合せメール送信
     */
    public async sendInquiryMail(params: Object) {
        const method = 'SendInquiryMail';

        const args = new SendInquiryMailIn(params);

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
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
