import BaseIn from '../../../common/models/BaseIn';

/**
 * 特典コード確保inクラス
 * @class
 * @extends {BaseIn}
 */
export class PreserveCodeIn extends BaseIn {
    /**
     * トークンID (購入フローユニークID)
     */
    public TKN_ID: string;
    /**
     * 作品コード
     */
    public SKHN_CD: string;
    /**
     * 決済方法区分 (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済)
     */
    public KSSIHH_TYP: string;
    /**
     * 併用決済フラグ (併用決済であるかどうかのフラグ)
     */
    public HIYKSSI_FLG: string;
    /**
     * 併用決済区分 (併用決済を行う決済方法区分 04：ギフトカード決済)
     */
    public HIYKSSI_TYP: string;
    /**
     * 購入日時 (チケットの購入日時)
     */
    public KNY_DT: string;
    /**
     * 鑑賞券情報 (購入した鑑賞券の情報)
     */
    public KNSHKN_INFO: {
        KnshknInfo: IKnshknInfo[];
    };

    /**
     * XML変換
     * @method toXml
     */
    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:PreserveCodeIn>
    <tns:IN_PARAMETER>
        <q1:TKN_ID>${this.TKN_ID}</q1:TKN_ID>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
        <q1:KSSIHH_TYP>${this.KSSIHH_TYP}</q1:KSSIHH_TYP>
`;
        if (this.HIYKSSI_FLG === '1') {
        message += `
        <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
`;
        }
        message += `
        <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
        <q1:KNY_DT>${this.KNY_DT}</q1:KNY_DT>
`;

        if (this.KNSHKN_INFO !== null) {
        message += `
        <q1:KNSHKN_INFO>`;
            for (let info of this.KNSHKN_INFO.KnshknInfo) {
                message += `
            <q2:KnshknInfo>
                <q2:KNSH_TYP>${info.KNSH_TYP}</q2:KNSH_TYP>
                <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
            </q2:KnshknInfo>
`;
            }
        }

        message += `
        </q1:KNSHKN_INFO>
        `;        
        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:IN_PARAMETER>
</tns:PreserveCodeIn>
`;

        return message;
    }
}

/**
 * 鑑賞券情報
 * @interface
 */
export interface IKnshknInfo {
    KNSH_TYP: string;
    KNYMI_NUM: string;
}

/**
 * 特典コード確保in型
 * @interface
 */
export interface IPreserveCodeIn {
    /**
     * トークンID (購入フローユニークID)
     */
    TKN_ID: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 決済方法区分 (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済)
     */
    KSSIHH_TYP: string;
    /**
     * 併用決済フラグ (併用決済であるかどうかのフラグ)
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分 (併用決済を行う決済方法区分 04：ギフトカード決済)
     */
    HIYKSSI_TYP: string;
    /**
     * 購入日時 (チケットの購入日時)
     */
    KNY_DT: string;
    /**
     * 鑑賞券情報 (購入した鑑賞券の情報)
     */
    KNSHKN_INFO: {
        KnshknInfo: IKnshknInfo[];
    };
}
