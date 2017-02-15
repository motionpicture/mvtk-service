import Service from '../../common/Service';
export default class RegisterMemberService extends Service {
    /**
     * 会員情報仮登録
     *
     * @param {RegisterMemberTemporaryIn} registerMemberTemporaryIn
     */
    registerMemberTemporary(params: Object, cb: (err, resonse, kiinCd: string) => void): void;
    /**
     * 会員情報仮登録完了メール送信
     *
     * @param {string} kiinCd 会員コード
     */
    sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string, cb: (err, response, kiinCd: string) => void): void;
}
