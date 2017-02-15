import Service from '../../common/Service';
import MemberInfoResult from './Models/MemberInfoResult';
export default class MemberInfoService extends Service {
    /**
     * 会員認証
     *
     * @param {string} kiinMladdr
     * @param {string} kiinPwd
     */
    getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err, resonse, kiinCd: string) => void): void;
    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    getMemberInfoDetail(cb: (err, response, memberInfoResult: MemberInfoResult) => void): void;
    /**
     * パスワード変更
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPassword(kiinCd: any, kiingnziPwd: any, kiingnzipwdhssFlg: any, kiinsnPwd: any, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * パスワード変更(svc)
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd: any, kiingnziPwd: any, kiingnzipwdhssFlg: any, kiinsnPwd: any, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr: any, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl: any, dvcTyp: any, cb: (err, response, kiinCd: string) => void): void;
    /**
     * 会員情報更新
     *
     * @param {EditMemberInfoIn} editMemberInfoIn
     */
    editMemberInfo(params: Object, cb: (err, response, isSuccess: boolean) => void): void;
}
