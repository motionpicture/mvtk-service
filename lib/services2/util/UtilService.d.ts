import Service from '../../common/Service';
export default class UtilService extends Service {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    createQrCode(params: Object): Promise<{
        response: any;
        result: string;
    }>;
}
