import BaseIn from '../../../Common/models/BaseIn';
/**
 * 会員情報仮登録inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class RegisterMemberTemporaryIn extends BaseIn {
    kiinsiNm: string;
    kiimmiNm: string;
    kiinsiKnnm: string;
    kiimmiKnnm: string;
    sibtsTyp: string;
    kiinsiYmd: string;
    tdfknCd: string;
    kiinjshiDo: string;
    kiinjshkiDo: string;
    kiinshgikykNo: string;
    kiinshnikykNo: string;
    kiinknyshNo: string;
    kiinMladdr: string;
    kiinmladdrssdvcTyp: string;
    kiinPwd: string;
    mlmgkbFlg: string;
    kiintrkdvcTyp: string;
    toXml(): string;
}
/**
 * 会員情報仮登録in
 * @interface
 */
export interface IRegisterMemberTemporaryIn {
    /**
     * 会員姓名称
     */
    kiinsiNm: string;
    /**
     * 会員名名称
     */
    kiimmiNm: string;
    /**
     * 会員姓カナ名称
     */
    kiinsiKnnm: string;
    /**
     * 会員名カナ名称
     */
    kiimmiKnnm: string;
    /**
     * 性別区分
     */
    sibtsTyp: string;
    /**
     * 会員生年月日(19990101形式)
     */
    kiinsiYmd: string;
    /**
     * 都道府県コード
     */
    tdfknCd: string;
    /**
     * 会員住所緯度
     */
    kiinjshiDo: string;
    /**
     * 会員住所経度
     */
    kiinjshkiDo: string;
    /**
     * 会員市外局番号
     */
    kiinshgikykNo: string;
    /**
     * 会員市内局番号
     */
    kiinshnikykNo: string;
    /**
     * 会員加入者番号
     */
    kiinknyshNo: string;
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * 会員メールアドレスデバイス区分
     */
    kiinmladdrssdvcTyp: string;
    /**
     * 会員パスワード
     */
    kiinPwd: string;
    /**
     * ???
     */
    mlmgkbFlg: string;
    /**
     * 会員登録デバイス区分
     */
    kiintrkdvcTyp: string;
}
