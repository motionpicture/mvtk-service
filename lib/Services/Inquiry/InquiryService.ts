import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import SendInquiryMailIn from './Models/SendInquiryMailIn';

export default class InquiryService extends Service {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    public sendInquiryMail(params: Object, cb: (err, resonse, isSuccess: boolean) => any): void {
        let method = 'SendInquiryMail';

        let args = SendInquiryMailIn.create(params);

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }
}