import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import CreateQrCodeIn from './Models/CreateQrCodeIn';

export default class UtilService extends Service {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    public createQrCode(params: Object, cb: (err, response, qrcdUrl: string) => void): void {
        let method = 'CreateQrCode';

        let args = new CreateQrCodeIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let qrcdUrl: string = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }

            cb(err, response, qrcdUrl);
        });
    }
}
