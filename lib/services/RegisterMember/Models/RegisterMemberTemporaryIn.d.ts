import BaseIn from '../../../common/models/BaseIn';
export default class RegisterMemberTemporaryIn extends BaseIn {
    kiinsiNm: string;
    kiimmiNm: string;
    kiinsiKnnm: string;
    kiimmiKnnm: string;
    sibtsTyp: string;
    kiinsiYmd: string;
    tdfknCd: string;
    kiinjshiDo: string;
    kiinjshkiDo: string;
    kiinshgikykNo: string;
    kiinshnikykNo: string;
    kiinknyshNo: string;
    kiinMladdr: string;
    kiinmladdrssdvcTyp: string;
    kiinPwd: string;
    mlmgkbFlg: string;
    kiintrkdvcTyp: string;
    toXml(): string;
}
