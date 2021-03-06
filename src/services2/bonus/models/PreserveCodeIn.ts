import { BaseIn } from '../../../common/models/BaseIn';

/**
 * 特典コード確保inクラス
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
     * 決済方法区分 (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済 12：ポイント 22：楽天ペイ 26：プロモーションコード)
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
     * ポイント利用フラグ
     */
    public PINTRY_FLG: '0' | '1';
    /*
     * プロモーションコード利用フラグ
     */
    public PRMTNCDRY_FLG: '0' | '1';
    /**
     * 映画ギフト利用フラグ
     */
    public EGGFTRY_FLG: '0' | '1';

    /**
     * XML変換
     * @method toXml
     */
    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        return {
            IN_PARAMETER: {
                TKN_ID: this.TKN_ID,
                SKHN_CD: this.SKHN_CD,
                KSSIHH_TYP: this.KSSIHH_TYP,
                HIYKSSI_FLG: this.HIYKSSI_FLG === '1' ? this.HIYKSSI_FLG : undefined,
                HIYKSSI_TYP: this.HIYKSSI_FLG === '1' ? this.HIYKSSI_TYP : undefined,
                KNY_DT: this.KNY_DT,
                KNSHKN_INFO: this.KNSHKN_INFO !== null ? {
                    KnshknInfo: this.KNSHKN_INFO.KnshknInfo.map((info) => {
                        return {
                            KNSH_TYP: info.KNSH_TYP,
                            KNYMI_NUM: Number(info.KNYMI_NUM),
                            targetNSAlias: 'tns',
                            // tslint:disable-next-line:no-http-string max-line-length
                            targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
                        };
                    }),
                    targetNSAlias: 'tns',
                    // tslint:disable-next-line:no-http-string max-line-length
                    targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
                } : undefined,
                PINTRY_FLG: this.PINTRY_FLG,
                PRMTNCDRY_FLG: this.PRMTNCDRY_FLG,
                EGGFTRY_FLG: this.EGGFTRY_FLG,
                targetNSAlias: 'q1',
                // tslint:disable-next-line:no-http-string max-line-length
                targetNamespace: 'http://schemas.datacontract.org/2004/07/MWCFWebRole.Model.Services'
            }
        };

        //         let message = `
        // <tns:PreserveCode>
        //     <tns:IN_PARAMETER>
        //         <q1:TKN_ID>${this.TKN_ID}</q1:TKN_ID>
        //         <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
        //         <q1:KSSIHH_TYP>${this.KSSIHH_TYP}</q1:KSSIHH_TYP>
        // `;
        //         if (this.HIYKSSI_FLG === '1') {
        //             message += `
        //         <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
        //         <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
        // `;
        //         }
        //         message += `
        //         <q1:KNY_DT>${this.KNY_DT}</q1:KNY_DT>
        // `;
        //         if (this.KNSHKN_INFO !== null) {
        //             message += '<q1:KNSHKN_INFO>';
        //             for (const info of this.KNSHKN_INFO.KnshknInfo) {
        //                 message += `
        //             <q2:KnshknInfo>
        //                 <q2:KNSH_TYP>${info.KNSH_TYP}</q2:KNSH_TYP>
        //                 <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
        //             </q2:KnshknInfo>
        // `;
        //             }
        //         }

        //         message += '</q1:KNSHKN_INFO>';

        //         message += `
        //         <q1:PINTRY_FLG>${this.PINTRY_FLG}</q1:PINTRY_FLG>
        // `;
        //         message += `
        //         <q1:PINTRY_FLG>${this.PINTRY_FLG}</q1:PINTRY_FLG>
        //         <q1:PRMTNCDRY_FLG>${this.PRMTNCDRY_FLG}</q1:PRMTNCDRY_FLG>
        // `;
        //         message += '</tns:IN_PARAMETER>';
        //         message += '</tns:PreserveCode>';
        //         message += '</tns:IN_PARAMETER>';
        //         message += '</tns:PreserveCode>';

        //         return message;
    }
}

/**
 * 鑑賞券情報
 */
export interface IKnshknInfo {
    KNSH_TYP: string;
    KNYMI_NUM: string;
}

/**
 * 特典コード確保in型
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
    /**
     * ポイント利用フラグ
     */
    PINTRY_FLG: '0' | '1';
    /**
     * プロモーションコード利用フラグ
     */
    PRMTNCDRY_FLG: '0' | '1';
    /**
     * 映画ギフト利用フラグ
     */
    EGGFTRY_FLG:  '0' | '1';
}
