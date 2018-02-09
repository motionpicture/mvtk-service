import { Service } from '../../common/Service';
/**
 * MailService
 */
export declare class MailService extends Service {
    /**
     * 購入管理番号メール送信
     */
    delivery(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
