import Service from '../../Common/Service';
import { ISendInquiryMailIn } from './Models/SendInquiryMailIn';
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
    sendInquiryMail(params: ISendInquiryMailIn, cb: (err: any, resonse: any, isSuccess: boolean) => void): void;
}
