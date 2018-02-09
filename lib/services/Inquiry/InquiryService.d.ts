import { Service } from '../../common/Service';
/**
 * InquiryService
 */
export declare class InquiryService extends Service {
    /**
     * 問合せメール送信
     */
    sendInquiryMail(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
