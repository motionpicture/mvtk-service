import { Service } from '../../common/Service';
import { MemberInfoResult } from './models/MemberInfoResult';
/**
 * MemberInfoService
 */
export declare class MemberInfoService extends Service {
    /**
     * 会員認証
     */
    getMemberAuthorization(kiinMladdr: string, kiinPwd: string): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    getMemberInfoDetail(): Promise<{
        response: any;
        result: MemberInfoResult;
    }>;
    /**
     * パスワード変更
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    editPassword(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * パスワード変更(svc)
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * パスワード再設定依頼メール送信
     *
     * @param kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * パスワード再設定会員認証
     *
     * @param psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl: string, dvcTyp: string): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * 会員情報更新
     */
    editMemberInfo(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
