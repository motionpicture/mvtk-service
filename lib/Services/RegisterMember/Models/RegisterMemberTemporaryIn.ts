import CommonUtil from '../../../common/util/Util';

export default class RegisterMemberTemporaryIn {
    public nckNm: string = ''; // ニックネーム
    public kiinsiNm: string = ''; // 会員姓名称
    public kiimmiNm: string = ''; // 会員名名称
    public kiinsiKnnm: string = ''; // 会員姓カナ名称
    public kiimmiKnnm: string = ''; // 会員名カナ名称
    public sibtsTyp: string = ''; // 性別区分
    public kiinsiYmd: string = ''; // 会員生年月日(1999/01/01形式)
    public kiinybnNo: string = ''; // 会員郵便番号(123-5678形式)
    public tdfknCd: string = ''; // 都道府県コード
    public kiinshkchsnAddr: string = ''; // 会員市区町村住所
    public kiimbnchAddr: string = ''; // 会員番地住所
    public kiinttmnAddr: string = ''; // 会員建物住所
    public kiinjshiDo: string = ''; // 会員住所緯度
    public kiinjshkiDo: string = ''; // 会員住所経度
    public kiinshgikykNo: string = ''; // 会員市外局番号
    public kiinshnikykNo: string = ''; // 会員市内局番号
    public kiinknyshNo: string = ''; // 会員加入者番号
    public kiinMladdr: string = ''; // 会員メールアドレス
    public kiinmladdrssdvcTyp: string = ''; // 会員メールアドレスデバイス区分
    public kiinsbMladdr: string = ''; // 会員サブメールアドレス
    public kiinsbmladdrssdvcTyp: string = ''; // 会員サブメールアドレスデバイス区分
    public kiinPwd: string = ''; // 会員パスワード
    public kiintrkmekssiknrNo: string = ''; // 会員登録前決済管理番号
    public mlmgkbFlg: string = ''; // 
    public kiintrkdvcTyp: string = ''; // 会員登録デバイス区分

    public static create(propertyValues: Object) {
        let instance = new this();

        for (let property in propertyValues) {
            instance[property] = propertyValues[property];
        }

        return instance;
    }

    public toXml(): string {
        let message = `
<tns:RegisterMemberTemporary>
    <tns:nckNm>${this.nckNm}</tns:nckNm>
    <tns:kiinsiNm>${this.kiinsiNm}</tns:kiinsiNm>
    <tns:kiimmiNm>${this.kiimmiNm}</tns:kiimmiNm>
    <tns:kiinsiKnnm>${this.kiinsiKnnm}</tns:kiinsiKnnm>
    <tns:kiimmiKnnm>${this.kiimmiKnnm}</tns:kiimmiKnnm>
    <tns:sibtsTyp>${this.sibtsTyp}</tns:sibtsTyp>
    <tns:kiinsiYmd>${this.kiinsiYmd}</tns:kiinsiYmd>
    <tns:kiinybnNo>${this.kiinybnNo}</tns:kiinybnNo>
    <tns:tdfknCd>${this.tdfknCd}</tns:tdfknCd>
    <tns:kiinshkchsnAddr xsi:nil="true"/>
    <tns:kiimbnchAddr xsi:nil="true"/>
    <tns:kiinttmnAddr xsi:nil="true"/>
    <tns:kiinjshiDo>${this.kiinjshiDo}</tns:kiinjshiDo>
    <tns:kiinjshkiDo>${this.kiinjshkiDo}</tns:kiinjshkiDo>
    <tns:kiinshgikykNo>${this.kiinshgikykNo}</tns:kiinshgikykNo>
    <tns:kiinshnikykNo>${this.kiinshnikykNo}</tns:kiinshnikykNo>
    <tns:kiinknyshNo>${this.kiinknyshNo}</tns:kiinknyshNo>
    <tns:kiinMladdr>${this.kiinMladdr}</tns:kiinMladdr>
    <tns:kiinmladdrssdvcTyp>${this.kiinmladdrssdvcTyp}</tns:kiinmladdrssdvcTyp>
    <tns:kiinsbMladdr>${this.kiinsbMladdr}</tns:kiinsbMladdr>
    <tns:kiinsbmladdrssdvcTyp>${this.kiinsbmladdrssdvcTyp}</tns:kiinsbmladdrssdvcTyp>
    <tns:kiinPwd>${this.kiinPwd}</tns:kiinPwd>
    <tns:kiintrkmekssiknrNo xsi:nil="true"/>
    <tns:mlmgkbFlg>${this.mlmgkbFlg}</tns:mlmgkbFlg>
    <tns:kiintrkdvcTyp>${this.kiintrkdvcTyp}</tns:kiintrkdvcTyp>
</tns:RegisterMemberTemporary>
`;

        return message;
    }}
