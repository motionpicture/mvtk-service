import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {CreateQrCodeIn, ICreateQrCodeIn} from './Models/CreateQrCodeIn';

/**
 * UtilService
 * @class
 * @extends {Service}
 */
export default class UtilService extends Service {
    /**
     * 電子券QRコード生成
     *
     * @param {ICreateQrCodeIn} args
     */
    public createQrCode(params: ICreateQrCodeIn, cb: (err: any, response: any, qrcdUrl: string | null) => void): void {
        const method = 'CreateQrCode';

        const args = new CreateQrCodeIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let qrcdUrl: string | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }

            cb(err, response, qrcdUrl);
        });
    }
}
