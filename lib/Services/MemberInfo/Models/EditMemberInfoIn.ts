import BaseIn from '../../../Common/models/BaseIn';

export default class EditMemberInfoIn extends BaseIn {
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
