import Service from '../../Common/Service';
import { IEditMemberInfoIn } from './Models/EditMemberInfoIn';
import MemberInfoResult from './Models/MemberInfoResult';
/**
 * MemberInfoService
 * @class
 * @extends {Service}
 */
export default class MemberInfoService extends Service {
    /**
     * 会員認証
     *
     * @param {string} kiinMladdr
     * @param {string} kiinPwd
     */
    getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err: any, resonse: any, kiinCd: string | null) => void): void;
    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    getMemberInfoDetail(cb: (err: any, resonse: any, memberInfoResult: MemberInfoResult | null) => void): void;
    /**
     * パスワード変更
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPassword(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void;
    /**
     * パスワード変更(svc)
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void;
    /**
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr: string, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void;
    /**
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl: string, dvcTyp: string, cb: (err: any, resonse: any, kiinCd: string | null) => void): void;
    /**
     * 会員情報更新
     *
     * @param {IEditMemberInfoIn} editMemberInfoIn
     */
    editMemberInfo(params: IEditMemberInfoIn, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void;
}
