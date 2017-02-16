import BaseIn from '../../../Common/models/BaseIn';
/**
 * 暗号化（配列）out
 * @class
 * @extends {BaseIn}
 */
export default class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    list: string[];
    toXml(): string;
}
