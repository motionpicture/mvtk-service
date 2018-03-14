import { BaseIn } from '../../../common/models/BaseIn';
/**
 * CreateQrCodeIn
 */
export declare class CreateQrCodeIn extends BaseIn {
    /**
     * 購入管理番号
     */
    KNYKNR_NO: string;
    /**
     * PIN コード
     */
    PIN_CD: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}