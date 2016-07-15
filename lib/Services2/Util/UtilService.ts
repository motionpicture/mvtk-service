import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import CreateQrCodeIn from './Models/CreateQrCodeIn';

export default class UtilService extends Service {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    public createQrCode(params: Object, cb: (err, response, qrcdUrl: string) => any) {
        let method = 'CreateQrCode';

        let args = CreateQrCodeIn.create(params);

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
