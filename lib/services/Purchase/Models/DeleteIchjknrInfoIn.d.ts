import BaseIn from '../../../common/models/BaseIn';
export default class DeleteIchjknrInfoIn extends BaseIn {
    accessIdList: Array<string>;
    toXml(): string;
}
