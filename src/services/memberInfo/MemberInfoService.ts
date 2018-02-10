
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { EditMemberInfoIn } from './models/EditMemberInfoIn';
import { MemberInfoResult } from './models/MemberInfoResult';

/**
 * MemberInfoService
 */
export class MemberInfoService extends Service {
    /**
     * 会員認証
     */
    public async getMemberAuthorization(kiinMladdr: string, kiinPwd: string) {
        const method = 'GetMemberAuthorization';

        const args = {
            kiinMladdr: kiinMladdr,
            kiinPwd: kiinPwd
        };

        return new Promise<{
            response: any;
            result: string | null;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let kiinCd: null | string = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                }
                resolve({
                    response: result,
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
    public async getMemberInfoDetail() {
        const method = 'GetMemberInfoDetail';

        const args = {
        };

        return new Promise<{
            response: any;
            result: MemberInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let memberInfoResult: MemberInfoResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    memberInfoResult = MemberInfoResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: memberInfoResult
                });
            });
        });
    }

    /**
     * パスワード変更
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    public async editPassword(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string) {
        const method = 'EditPassword';

        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: result,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * パスワード変更(svc)
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    public async editPasswordSvc(kiinCd: string, kiingnziPwd: string, kiingnzipwdhssFlg: string, kiinsnPwd: string) {
        const method = 'EditPasswordSvc';

        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: result,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * パスワード再設定依頼メール送信
     *
     * @param kiinMladdr 会員メールアドレス
     */
    public async sendPasswordResetRequestMail(kiinMladdr: string) {
        const method = 'SendPasswordResetRequestMail';

        const args = {
            kiinMladdr: kiinMladdr
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: result,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * パスワード再設定会員認証
     *
     * @param psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param dvcTyp        デバイス区分
     */
    public async getPasswordResetMemberAuthorization(psswrdhnkyUrl: string, dvcTyp: string) {
        const method = 'GetPasswordResetMemberAuthorization';

        const args = {
            psswrdhnkyUrl: psswrdhnkyUrl,
            dvcTyp: dvcTyp
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let kiinCd = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: kiinCd
                });
            });
        });
    }

    /**
     * 会員情報更新
     */
    public async editMemberInfo(params: Object) {
        const method = 'EditMemberInfo';

        const args = new EditMemberInfoIn(params);

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: result,
                    result: isSuccess
                });
            });
        });
    }
}
