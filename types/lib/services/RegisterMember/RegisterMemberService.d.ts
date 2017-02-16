import Service from '../../Common/Service';
import { IRegisterMemberTemporaryIn } from './Models/RegisterMemberTemporaryIn';
/**
 * RegisterMemberService
 * @class
 * @extends {Service}
 */
export default class RegisterMemberService extends Service {
    /**
     * 会員情報仮登録
     *
     * @param {IRegisterMemberTemporaryIn} registerMemberTemporaryIn
     */
    registerMemberTemporary(params: IRegisterMemberTemporaryIn, cb: (err: any, resonse: any, kiinCd: string | null) => void): void;
    /**
     * 会員情報仮登録完了メール送信
     *
     * @param {string} kiinCd 会員コード
     */
    sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err: any, response: any, isSuccess: boolean | null) => void): void;
    /**
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string, cb: (err: any, response: any, kiinCd: string | null) => void): void;
}
