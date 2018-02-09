import { Service } from '../../common/Service';
/**
 * UtilService2
 */
export declare class UtilService2 extends Service {
    /**
     * 電子券QRコード生成
     *
     */
    createQrCode(params: Object): Promise<{
        response: any;
        result: string;
    }>;
}
