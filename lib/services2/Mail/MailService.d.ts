import Service from '../../common/Service';
export default class MailService extends Service {
    /**
     * 購入管理番号メール送信
     *
     * @param {DeliveryIn} args
     */
    delivery(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
