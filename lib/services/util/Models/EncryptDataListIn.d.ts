import BaseIn from '../../../common/models/BaseIn';
export default class EncryptDataListIn extends BaseIn {
    /**
     * 暗号化文字列リスト
     */
    list: Array<string>;
    toXml(): string;
}
