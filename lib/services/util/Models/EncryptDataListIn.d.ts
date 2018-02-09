import { BaseIn } from '../../../common/models/BaseIn';
/**
 * EncryptDataListIn
 */
export declare class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    list: string[];
    toXml(): string;
}
