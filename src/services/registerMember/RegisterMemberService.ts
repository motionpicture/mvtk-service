
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { RegisterMemberTemporaryIn } from './models/RegisterMemberTemporaryIn';

/**
 * RegisterMemberService
 */
export class RegisterMemberService extends Service {
    /**
     * 会員情報仮登録
     */
    public async registerMemberTemporary(params: Object) {
        const method = 'RegisterMemberTemporary';

        const args = new RegisterMemberTemporaryIn(params);

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
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
                    response: response,
                    result: kiinCd
                });
            });
        });
    }

    /**
     * 会員情報仮登録完了メール送信
     */
    public async sendMemberTemporaryCompletionMail(kiinCd: string) {
        const method = 'SendMemberTemporaryCompletionMail';

        const args = {
            kiinCd: kiinCd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }

    /**
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param kiintrkdvcTyp 会員登録デバイス区分
     */
    public async registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string) {
        const method = 'RegisterMemberProperly';

        const args = {
            hmbntrkyUrl: hmbntrkyUrl,
            kiintrkdvcTyp: kiintrkdvcTyp
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
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
                    response: response,
                    result: kiinCd
                });
            });
        });
    }
}
