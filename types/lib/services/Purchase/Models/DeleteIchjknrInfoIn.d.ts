import BaseIn from '../../../Common/models/BaseIn';
export default class DeleteIchjknrInfoIn extends BaseIn {
    accessIdList: Array<string>;
    toXml(): string;
}
