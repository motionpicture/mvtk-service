
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { CreateQrCodeIn } from './models/CreateQrCodeIn';

/**
 * UtilService2
 */
export class UtilService2 extends Service {
    /**
     * 電子券QRコード生成
     *
     */
    public async createQrCode(params: Object) {
        const method = 'CreateQrCode';

        const args = new CreateQrCodeIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let qrcdUrl: string;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}
