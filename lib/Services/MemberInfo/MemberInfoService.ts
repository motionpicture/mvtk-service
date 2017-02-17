import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import { EditMemberInfoIn, IEditMemberInfoIn } from './Models/EditMemberInfoIn';
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
    public getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err: any, resonse: any, kiinCd: string | null) => void): void {
        const method = 'GetMemberAuthorization';

        const args = {
            kiinMladdr: kiinMladdr,
            kiinPwd: kiinPwd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let kiinCd = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                kiinCd = result.KIIN_CD;
            }

            cb(err, response, kiinCd);
        });
    }

    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    public getMemberInfoDetail(cb: (err: any, resonse: any, memberInfoResult: MemberInfoResult | null) => void): void {
        const method = 'GetMemberInfoDetail';

        const args = {};

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let memberInfoResult: MemberInfoResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                memberInfoResult = MemberInfoResult.parse(result);
            }

            cb(err, response, memberInfoResult);
        });
    }

    /**
     * パスワード変更
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    public editPassword(
        kiinCd: string,
        kiingnziPwd: string,
        kiingnzipwdhssFlg: string,
        kiinsnPwd: string,
        cb: (err: any, resonse: any, isSuccess: boolean | null) => void
    ): void {
        const method = 'EditPassword';

        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * パスワード変更(svc)
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    public editPasswordSvc(
        kiinCd: string,
        kiingnziPwd: string,
        kiingnzipwdhssFlg: string,
        kiinsnPwd: string,
        cb: (err: any, resonse: any, isSuccess: boolean | null) => void
    ): void {
        const method = 'EditPasswordSvc';

        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    public sendPasswordResetRequestMail(kiinMladdr: string, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void {
        const method = 'SendPasswordResetRequestMail';

        const args = {
            kiinMladdr: kiinMladdr
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    public getPasswordResetMemberAuthorization(
        psswrdhnkyUrl: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, kiinCd: string | null) => void
    ): void {
        const method = 'GetPasswordResetMemberAuthorization';

        const args = {
            psswrdhnkyUrl: psswrdhnkyUrl,
            dvcTyp: dvcTyp,
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let kiinCd = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                kiinCd = result.KIIN_CD;
            }

            cb(err, response, kiinCd);
        });
    }

    /**
     * 会員情報更新
     *
     * @param {IEditMemberInfoIn} editMemberInfoIn
     */
    public editMemberInfo(params: IEditMemberInfoIn, cb: (err: any, resonse: any, isSuccess: boolean | null) => void): void {
        const method = 'EditMemberInfo';

        const args = new EditMemberInfoIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }
}