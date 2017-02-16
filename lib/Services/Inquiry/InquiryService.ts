import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {ISendInquiryMailIn, SendInquiryMailIn} from './Models/SendInquiryMailIn';

/**
 * InquiryService
 * @class
 * @extends {Service}
 */
export default class InquiryService extends Service {
    /**
     * 問合せメール送信
     *
     * @param {ISendInquiryMailIn} sendInquiryMailIn
     */
    public sendInquiryMail(params: ISendInquiryMailIn, cb: (err: any, resonse: any, isSuccess: boolean) => void ): void {
        const method = 'SendInquiryMail';

        const args = new SendInquiryMailIn(params);

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
