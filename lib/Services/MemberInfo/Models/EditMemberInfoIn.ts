import BaseIn from '../../../Common/models/BaseIn';

/**
 * 会員情報更新in
 * @interface
 */
export interface IEditMemberInfoIn {
    /**
     * ニックネーム
     */
    nckNm: string;
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
     * 会員郵便番号(123-5678形式)
     */
    kiinybnNo: string;
    /**
     * 都道府県コード
     */
    tdfknCd: string;
    /**
     * 会員市区町村住所
     */
    kiinshkchsnAddr: string;
    /**
     * 会員番地住所
     */
    kiimbnchAddr: string;
    /**
     * 会員建物住所
     */
    kiinttmnAddr: string;
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
     * 会員サブメールアドレス
     */
    kiinsbMladdr: string;
    /**
     * 会員サブメールアドレスデバイス区分
     */
    kiinsbmladdrssdvcTyp: string;
    /**
     * メルマガ希望フラグ
     */
    mlmgkbFlg: string;
}

/**
 * 会員情報更新inクラス
 * @class
 * @extends {BaseIn}
 */
export class EditMemberInfoIn extends BaseIn {
    /**
     * ニックネーム
     */
    public nckNm: string;
    /**
     * 会員姓名称
     */
    public kiinsiNm: string;
    /**
     * 会員名名称
     */
    public kiimmiNm: string;
    /**
     * 会員姓カナ名称
     */
    public kiinsiKnnm: string;
    /**
     * 会員名カナ名称
     */
    public kiimmiKnnm: string;
    /**
     * 性別区分
     */
    public sibtsTyp: string;
    /**
     * 会員生年月日(19990101形式)
     */
    public kiinsiYmd: string;
    /**
     * 会員郵便番号(123-5678形式)
     */
    public kiinybnNo: string;
    /**
     * 都道府県コード
     */
    public tdfknCd: string;
    /**
     * 会員市区町村住所
     */
    public kiinshkchsnAddr: string;
    /**
     * 会員番地住所
     */
    public kiimbnchAddr: string;
    /**
     * 会員建物住所
     */
    public kiinttmnAddr: string;
    /**
     * 会員住所緯度
     */
    public kiinjshiDo: string;
    /**
     * 会員住所経度
     */
    public kiinjshkiDo: string;
    /**
     * 会員市外局番号
     */
    public kiinshgikykNo: string;
    /**
     * 会員市内局番号
     */
    public kiinshnikykNo: string;
    /**
     * 会員加入者番号
     */
    public kiinknyshNo: string;
    /**
     * 会員メールアドレス
     */
    public kiinMladdr: string;
    /**
     * 会員メールアドレスデバイス区分
     */
    public kiinmladdrssdvcTyp: string;
    /**
     * 会員サブメールアドレス
     */
    public kiinsbMladdr: string;
    /**
     * 会員サブメールアドレスデバイス区分
     */
    public kiinsbmladdrssdvcTyp: string;
    /**
     * メルマガ希望フラグ
     */
    public mlmgkbFlg: string;
}
