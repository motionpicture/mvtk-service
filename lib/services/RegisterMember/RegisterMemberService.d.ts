import { Service } from '../../common/Service';
/**
 * RegisterMemberService
 */
export declare class RegisterMemberService extends Service {
    /**
     * 会員情報仮登録
     */
    registerMemberTemporary(params: Object): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * 会員情報仮登録完了メール送信
     */
    sendMemberTemporaryCompletionMail(kiinCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string): Promise<{
        response: any;
        result: string;
    }>;
}
