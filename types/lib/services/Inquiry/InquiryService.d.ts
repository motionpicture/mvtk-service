import Service from '../../common/Service';
export default class InquiryService extends Service {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    sendInquiryMail(params: Object, cb: (err, resonse, isSuccess: boolean) => void): void;
}
