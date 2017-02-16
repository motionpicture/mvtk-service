import Service from '../../Common/Service';
import { ICreateQrCodeIn } from './Models/CreateQrCodeIn';
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
    createQrCode(params: ICreateQrCodeIn, cb: (err: any, response: any, qrcdUrl: string | null) => void): void;
}
