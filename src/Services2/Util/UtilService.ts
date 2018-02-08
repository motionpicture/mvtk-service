import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import CreateQrCodeIn from './models/CreateQrCodeIn';

export default class UtilService extends Service {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    public createQrCode(params: Object) {
        let method = 'CreateQrCode';

        let args = new CreateQrCodeIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let qrcdUrl: string = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}
