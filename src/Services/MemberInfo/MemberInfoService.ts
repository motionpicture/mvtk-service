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
    public getMemberAuthorization(kiinMladdr: string, kiinPwd: string) {
        let method = 'GetMemberAuthorization';

        let args = {
            kiinMladdr: kiinMladdr,
            kiinPwd: kiinPwd
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let kiinCd = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kiinCd
                });
            });
        });
    }

    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    public getMemberInfoDetail() {
        let method = 'GetMemberInfoDetail';

        let args = {
        };

        return new Promise<{
            response: any;
            result: MemberInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let memberInfoResult: MemberInfoResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    memberInfoResult = MemberInfoResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: memberInfoResult
                });
            });
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
    public editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        let method = 'EditPassword';

        let args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
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
    public editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        let method = 'EditPasswordSvc';

        let args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    public sendPasswordResetRequestMail(kiinMladdr) {
        let method = 'SendPasswordResetRequestMail';

        let args = {
            kiinMladdr: kiinMladdr
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    public getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp) {
        let method = 'GetPasswordResetMemberAuthorization';

        let args = {
            psswrdhnkyUrl: psswrdhnkyUrl,
            dvcTyp: dvcTyp
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let kiinCd = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kiinCd
                });
            });
        });
    }

    /**
     * 会員情報更新
     *
     * @param {EditMemberInfoIn} editMemberInfoIn
     */
    public editMemberInfo(params: Object) {
        let method = 'EditMemberInfo';

        let args = new EditMemberInfoIn(params);

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
}