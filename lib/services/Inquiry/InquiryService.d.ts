import Service from '../../common/Service';
export default class InquiryService extends Service {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    sendInquiryMail(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
