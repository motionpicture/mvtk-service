import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import { IRegisterMemberTemporaryIn, RegisterMemberTemporaryIn } from './Models/RegisterMemberTemporaryIn';

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
    public registerMemberTemporary(params: IRegisterMemberTemporaryIn, cb: (err: any, resonse: any, kiinCd: string | null) => void): void {
        const method = 'RegisterMemberTemporary';

        const args = new RegisterMemberTemporaryIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let kiinCd = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                kiinCd = result.KIIN_CD;
            }

            cb(err, response, kiinCd);
        });
    }

    /**
     * 会員情報仮登録完了メール送信
     *
     * @param {string} kiinCd 会員コード
     */
    public sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err: any, response: any, isSuccess: boolean | null) => void): void {
        const method = 'SendMemberTemporaryCompletionMail';

        const args = {
            kiinCd: kiinCd
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
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
     */
    public registerMemberProperly(
        hmbntrkyUrl: string,
        kiintrkdvcTyp: string,
        cb: (err: any, response: any, kiinCd: string | null) => void
    ): void {
        const method = 'RegisterMemberProperly';

        const args = {
            hmbntrkyUrl: hmbntrkyUrl,
            kiintrkdvcTyp: kiintrkdvcTyp
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
}
