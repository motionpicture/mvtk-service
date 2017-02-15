import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import EditMemberInfoIn from './Models/EditMemberInfoIn';
import MemberInfoResult from './Models/MemberInfoResult';

export default class MemberInfoService extends Service {
    /**
     * 会員認証
     *
     * @param {string} kiinMladdr
     * @param {string} kiinPwd
     */
    public getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err, resonse, kiinCd: string) => void ): void {
        let method = 'GetMemberAuthorization';

        let args = {
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
    public getMemberInfoDetail(cb: (err, response, memberInfoResult: MemberInfoResult) => void ): void {
        let method = 'GetMemberInfoDetail';

        let args = {
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let memberInfoResult: MemberInfoResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                memberInfoResult = MemberInfoResult.PARSE(result);
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
    public editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => void ): void {
        let method = 'EditPassword';

        let args = {
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
    public editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => void ): void {
        let method = 'EditPasswordSvc';

        let args = {
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
    public sendPasswordResetRequestMail(kiinMladdr, cb: (err, response, isSuccess: boolean) => void ): void {
        let method = 'SendPasswordResetRequestMail';

        let args = {
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
    public getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp, cb: (err, response, kiinCd: string) => void ): void {
        let method = 'GetPasswordResetMemberAuthorization';

        let args = {
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
     * @param {EditMemberInfoIn} editMemberInfoIn
     */
    public editMemberInfo(params: Object, cb: (err, response, isSuccess: boolean) => void ): void {
        let method = 'EditMemberInfo';

        let args = new EditMemberInfoIn(params);

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