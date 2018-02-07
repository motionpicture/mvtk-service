export default class MemberInfoResult {
    /**
     * 会員コード
     */
    kiinCd: string;
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
     * 会員生年月日(1999/01/01形式)
     */
    kiinsiYmd: string;
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
     * メルマガ希望フラグ
     */
    mlmgznkbFlg: string;
    /**
     * ニックネーム
     */
    nckNm: string;
    /**
     * 自己紹介本文
     */
    jkshkiTxt: string;
    /**
     * プロフィール画像ＵＲＬ
     */
    prflgzUrl: string;
    /**
     * 性別公開フラグ
     */
    sibtskkiFlg: string;
    /**
     * 生年月日公開フラグ
     */
    sinngppkkiFlg: string;
    static parse(resultObject: any): MemberInfoResult;
}
