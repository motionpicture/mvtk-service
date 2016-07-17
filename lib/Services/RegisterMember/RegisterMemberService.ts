import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import RegisterMemberTemporaryIn from './Models/RegisterMemberTemporaryIn';

export default class RegisterMemberService extends Service {
    /**
     * 会員情報仮登録
     *
     * @param {RegisterMemberTemporaryIn} registerMemberTemporaryIn
     */
    public registerMemberTemporary(registerMemberTemporaryIn: RegisterMemberTemporaryIn, cb: (err, resonse, kiinCd: string) => void ): void {
        let method = 'RegisterMemberTemporary';

        this.call(method, registerMemberTemporaryIn.toXml(), (err, response, result) => {
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
    public sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err, response, isSuccess: boolean) => void): void {
        let method = 'SendMemberTemporaryCompletionMail';

        let args = {
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
    public registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string, cb: (err, response, kiinCd: string) => void): void {
        let method = 'RegisterMemberProperly';

        let args = {
            hmbntrkyUrl: hmbntrkyUrl,
            kiintrkdvcTyp: kiintrkdvcTyp,
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
