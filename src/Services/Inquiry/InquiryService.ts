import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import SendInquiryMailIn from './models/SendInquiryMailIn';

export default class InquiryService extends Service {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    public sendInquiryMail(params: Object) {
        let method = 'SendInquiryMail';

        let args = new SendInquiryMailIn(params);

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
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