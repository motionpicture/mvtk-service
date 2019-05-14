import { BaseIn } from '../../../common/models/BaseIn';

/**
 * 購入情報登録inクラス
 * @extends {BaseIn}
 */
export class RegisterPurchaseInfoIn extends BaseIn {
    /**
     * 決済管理番号
     */
    public KSSIKNR_NO: string;
    /**
     * 決済代行会社が取引を識別するために発行する ID
     */
    public ACCESS_ID: string;
    /**
     * 決済代行会社が取引を識別するために発行するパスワード
     */
    public ACCESS_PWD: string;
    /**
     * 作品コード
     */
    public SKHN_CD: string;
    /**
     * 鑑賞券管理番号
     */
    public KNSHKNKNR_NO: string;
    /**
     * 鑑賞券情報
     */
    public KNSHKN_INFO: {
        KnshknInfo: KnshknInfo[];
    };
    /**
     * 会員フラグ(0:非会員 1:会員)
     */
    public KIIN_FLG: string;
    /**
     * 決済方法区分
     */
    public KSSIHH_TYP: string;
    /**
     * 購入者姓名称
     */
    public KNYSHSI_NM: string;
    /**
     * 購入者名名称
     */
    public KNYSHMI_NM: string;
    /**
     * 購入者姓カナ名称
     */
    public KNYSHSI_KNNM: string;
    /**
     * 購入者名カナ名称
     */
    public KNYSHMI_KNNM: string;
    /**
     * 購入者ＰＣメールアドレス
     */
    public KNYSHPC_MLADDR: string;
    /**
     * 購入者携帯メールアドレス
     */
    public KNYSHKITI_MLADDR: string;
    /**
     * 購入者市外局番号
     */
    public KNYSHSHGIKYK_NO: string;
    /**
     * 購入者市内局番号
     */
    public KNYSHSHNIKYK_NO: string;
    /**
     * 購入者加入者番号
     */
    public KNYSHKNYSH_NO: string;
    /**
     * 購入日時（yyyy/mm/ddThh24:mm:ss）
     */
    public KNY_DT: string;
    /**
     * チケットの販売チャネル
     */
    public HMBICHNNL_TYP: string;
    /**
     * チケット販売会社のコード
     */
    public HMBGISH_CD: string;
    /**
     * 決済を行った日時（yyyy/mm/ddThh24:mm:ss）
     */
    public TRAN_DT: string;
    /**
     * 与信を行ったカード会社の会社コード(決済方法区分が 00 の場合は必須)
     */
    public FORWARD_CD: string;

    /**
     * カード会社が発行した与信の承認番号
     * 決済方法区分が 00、01、02 の場合は必須
     * maximum length of 7
     */
    public APPROVE_NO: string;
    /**
     * 決済代行会社が処理を行う毎に発行している処理番号(決済方法区分が 00 の場合は必須)
     */
    public TRAN_ID: string;
    /**
     * 購入チケットの合計金額
     */
    public GRYKNGK: string;
    /**
     * 購入したデバイスの区分
     */
    public KNYDVC_TYP: string;
    /**
     * au 簡単決済の支払方法
     */
    public AU_PAYMETHOD: string;
    /**
     * ギフトカード情報
     */
    public GFTCRD_INFO: {
        GftcrdInfo: GftcrdInfo[];
    };
    /**
     * デバイス区分
     */
    public DVC_TYP: string;
    /**
     * 併用決済フラグ(0:単独決済 1:併用決済)
     */
    public HIYKSSI_FLG: string;
    /**
     * 併用決済方法
     */
    public HIYKSSIHH_TYP: string;
    /**
     * 併用決済で使用したムビチケオンラインギフトカードの決済金額合計
     */
    public HIYKSSIRYGKI_MNY: string;
    /**
     * WebMoney決済情報
     */
    public WEBMONEYKSSIINFO: WebmoneykssiInfo;
    /**
     * 特典情報
     */
    public TKTNCDKKH_INFO: {
        /**
         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
         */
        TKTNCDKKH_NO: string;
    }[];

    /**
     * ポイント利用フラグ
     */
    public PINTRY_FLG: '0' | '1';

    /**
     * ポイント決済UUID
     */
    public PINTKSSI_UUID?: string;

    /**
     * 利用ポイント数
     */
    public RYPINT_NUM: number;

    /**
     * 契約コード 簡易法人決済時のみセット
     */
    public KIYK_CD?: string;

    /**
     * 購入者コード 会員購入時のみセット
     */
    public KNYSH_CD?: string;

    /**
     * 獲得予定ポイント
     */
    public KKTKYTI_PT?: string;

    /**
     * プロモーションコード利用フラグ
     */
    public PRMTNCDRY_FLG: string;

    /**
     * プロモーションコード
     */
    public PRMTN_CD: string;

    /**
     * プロモーションコード決済UUID
     */
    public PRMTNCDKSSI_UUID: string;

    /**
     * プロモーションコード割引額
     */
    public PRMTNCDWRBK_GK: string;

    /**
     * 映画ギフト利用フラグ
     */
    public EGGFTRY_FLG: string;

    /**
     * 映画ギフト情報
     */
    public EGGFT_INFO: {
        EggftInfo: EggftInfo[];
    };

    // tslint:disable-next-line:max-func-body-length
    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:RegisterPurchaseInfo>
    <tns:IN_PARAMETER>
        <q5:KSSIKNR_NO>${this.KSSIKNR_NO}</q5:KSSIKNR_NO>
        <q5:ACCESS_ID>${this.ACCESS_ID}</q5:ACCESS_ID>
        <q5:ACCESS_PWD>${this.ACCESS_PWD}</q5:ACCESS_PWD>
        <q5:SKHN_CD>${this.SKHN_CD}</q5:SKHN_CD>
        <q5:KNSHKNKNR_NO>${this.KNSHKNKNR_NO}</q5:KNSHKNKNR_NO>
        <q5:KNSHKN_INFO>
`;

        for (const info of this.KNSHKN_INFO.KnshknInfo) {
            message += `
            <q5:KnshknInfo>
                <q5:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q5:KNSHKNKNRMISI_NO>
                <q5:KNSH_TYP>${info.KNSH_TYP}</q5:KNSH_TYP>
                <q5:KNYMI_NUM>${info.KNYMI_NUM}</q5:KNYMI_NUM>
                <q5:KNSHKNHMBI_UNIP>${info.KNSHKNHMBI_UNIP}</q5:KNSHKNHMBI_UNIP>
            </q5:KnshknInfo>
`;
        }

        message += `
        </q5:KNSHKN_INFO>
        <q5:KIIN_FLG>${this.KIIN_FLG}</q5:KIIN_FLG>
        <q5:KSSIHH_TYP>${this.KSSIHH_TYP}</q5:KSSIHH_TYP>
        <q5:KNYSHSI_NM>${this.KNYSHSI_NM}</q5:KNYSHSI_NM>
        <q5:KNYSHMI_NM>${this.KNYSHMI_NM}</q5:KNYSHMI_NM>
        <q5:KNYSHSI_KNNM>${this.KNYSHSI_KNNM}</q5:KNYSHSI_KNNM>
        <q5:KNYSHMI_KNNM>${this.KNYSHMI_KNNM}</q5:KNYSHMI_KNNM>
        <q5:KNYSHPC_MLADDR>${this.KNYSHPC_MLADDR}</q5:KNYSHPC_MLADDR>
        <q5:KNYSHKITI_MLADDR>${this.KNYSHKITI_MLADDR}</q5:KNYSHKITI_MLADDR>
        <q5:KNYSHSHGIKYK_NO>${this.KNYSHSHGIKYK_NO}</q5:KNYSHSHGIKYK_NO>
        <q5:KNYSHSHNIKYK_NO>${this.KNYSHSHNIKYK_NO}</q5:KNYSHSHNIKYK_NO>
        <q5:KNYSHKNYSH_NO>${this.KNYSHKNYSH_NO}</q5:KNYSHKNYSH_NO>
        <q5:KNY_DT>${this.KNY_DT}</q5:KNY_DT>
        <q5:HMBICHNNL_TYP>${this.HMBICHNNL_TYP}</q5:HMBICHNNL_TYP>
        <q5:HMBGISH_CD>${this.HMBGISH_CD}</q5:HMBGISH_CD>
        <q5:TRAN_DT>${this.TRAN_DT}</q5:TRAN_DT>
        <q5:FORWARD_CD>${this.FORWARD_CD}</q5:FORWARD_CD>
        <q5:APPROVE_NO>${this.APPROVE_NO}</q5:APPROVE_NO>
        <q5:TRAN_ID>${this.TRAN_ID}</q5:TRAN_ID>
        <q5:GRYKNGK>${this.GRYKNGK}</q5:GRYKNGK>
        <q5:KNYDVC_TYP>${this.KNYDVC_TYP}</q5:KNYDVC_TYP>
`;

        if (this.AU_PAYMETHOD !== '') {
            message += `
        <q5:AU_PAYMETHOD>${this.AU_PAYMETHOD}</q5:AU_PAYMETHOD>
`;
        }

        if (this.GFTCRD_INFO !== null && this.GFTCRD_INFO.GftcrdInfo.length > 0) {
            // tslint:disable-next-line:no-multiline-string
            message += `
        <q5:GFTCRD_INFO>
`;

            for (const info of this.GFTCRD_INFO.GftcrdInfo) {
                message += `
            <q5:GftCrdInfo>
                <q5:GFTCRD_ID>${info.GFTCRD_ID}</q5:GFTCRD_ID>
                <q5:GFTCRDPIN_CD>${info.GFTCRDPIN_CD}</q5:GFTCRDPIN_CD>
                <q5:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q5:GFTCRDKSSIKNR_NO>
                <q5:KSSI_DT>${info.KSSI_DT}</q5:KSSI_DT>
                <q5:KSSISYNN_NO>${info.KSSISYNN_NO}</q5:KSSISYNN_NO>
                <q5:GFTCRD_STTS>${info.GFTCRD_STTS}</q5:GFTCRD_STTS>
                <q5:RY_MNY>${info.RY_MNY}</q5:RY_MNY>
                <q5:RYME_ZNDK>${info.RYME_ZNDK}</q5:RYME_ZNDK>
                <q5:RYG_ZNDK>${info.RYG_ZNDK}</q5:RYG_ZNDK>
                <q5:TPPNSRVCRSPNS>${info.TPPNSRVCRSPNS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</q5:TPPNSRVCRSPNS>
            </q5:GftCrdInfo>
`;
            }
            // tslint:disable-next-line:no-multiline-string
            message += `
        </q5:GFTCRD_INFO>
`;
        }

        message += `
        <q5:DVC_TYP>${this.DVC_TYP}</q5:DVC_TYP>
`;

        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q5:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q5:HIYKSSI_FLG>
        <q5:HIYKSSIHH_TYP>${this.HIYKSSIHH_TYP}</q5:HIYKSSIHH_TYP>
        <q5:HIYKSSIRYGKI_MNY>${this.HIYKSSIRYGKI_MNY}</q5:HIYKSSIRYGKI_MNY>
`;
        }

        if (this.WEBMONEYKSSIINFO !== null) {
            message += `
        <q5:WEBMONEYKSSIINFO>
            <q5:DECRYPTEDKSSIINFO>${this.WEBMONEYKSSIINFO.DECRYPTEDKSSIINFO}</q5:DECRYPTEDKSSIINFO>
            <q5:VRSINJH>${this.WEBMONEYKSSIINFO.VRSINJH}</q5:VRSINJH>
            <q5:WBMNYSETTLE_CD>${this.WEBMONEYKSSIINFO.WBMNYSETTLE_CD}</q5:WBMNYSETTLE_CD>
            <q5:TRAN_DT>${this.WEBMONEYKSSIINFO.TRAN_DT}</q5:TRAN_DT>
            <q5:WBMNYMANAGEMENT_NO>${this.WEBMONEYKSSIINFO.WBMNYMANAGEMENT_NO}</q5:WBMNYMANAGEMENT_NO>
            <q5:SINYJSHKBTS_FLG>${this.WEBMONEYKSSIINFO.SINYJSHKBTS_FLG}</q5:SINYJSHKBTS_FLG>
            <q5:SHHN_NUM>${this.WEBMONEYKSSIINFO.SHHN_NUM}</q5:SHHN_NUM>
            <q5:SHHN_CD>${this.WEBMONEYKSSIINFO.SHHN_CD}</q5:SHHN_CD>
            <q5:HCCH_CD>${this.WEBMONEYKSSIINFO.HCCH_CD}</q5:HCCH_CD>
        </q5:WEBMONEYKSSIINFO>
`;
        } else {
            //             format += `
            //         <q5:WEBMONEYKSSIINFO/>
            // `;
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
        <q5:TKTNCDKKH_INFO>`;

        for (const tktncdkkhInfo of this.TKTNCDKKH_INFO) {
            message += `
            <q5:TktncdkkhInfo>
                <q5:TKTNCDKKH_NO>${tktncdkkhInfo.TKTNCDKKH_NO}</q5:TKTNCDKKH_NO>
            </q5:TktncdkkhInfo>
`;
        }

        // tslint:disable-next-line:no-multiline-string
        message += `
        </q5:TKTNCDKKH_INFO>

        <q5:PINTRY_FLG>${this.PINTRY_FLG}</q5:PINTRY_FLG>
        `;
        if (this.PINTKSSI_UUID !== undefined) {
            message += `
            <q5:PINTKSSI_UUID>${this.PINTKSSI_UUID}</q5:PINTKSSI_UUID>
            `;
        }
        message += `
        <q5:RYPINT_NUM>${this.RYPINT_NUM}</q5:RYPINT_NUM>
        `;

        if (this.KIYK_CD !== undefined) {
            message += `
        <q5:KIYK_CD>${this.KIYK_CD}</q5:KIYK_CD>
        `;
        }

        if (this.KNYSH_CD !== undefined) {
            message += `
        <q5:KNYSH_CD>${this.KNYSH_CD}</q5:KNYSH_CD>
        `;
        }

        if (this.KKTKYTI_PT !== undefined) {
            message += `
        <q5:KKTKYTI_PT>${this.KKTKYTI_PT}</q5:KKTKYTI_PT>
        `;
        }

        if (this.PRMTNCDRY_FLG !== undefined) {
            message += `
        <q5:PRMTNCDRY_FLG>${this.PRMTNCDRY_FLG}</q5:PRMTNCDRY_FLG>
        `;
            if (this.PRMTNCDRY_FLG === '1') {
                if (this.PRMTN_CD !== undefined) {
                    message += `
        <q5:PRMTN_CD>${this.PRMTN_CD}</q5:PRMTN_CD>
        `;
                }

                if (this.PRMTNCDKSSI_UUID !== undefined) {
                    message += `
        <q5:PRMTNCDKSSI_UUID>${this.PRMTNCDKSSI_UUID}</q5:PRMTNCDKSSI_UUID>
        `;
                }

                if (this.PRMTNCDWRBK_GK !== undefined) {
                    message += `
        <q5:PRMTNCDWRBK_GK>${this.PRMTNCDWRBK_GK}</q5:PRMTNCDWRBK_GK>
        `;
                }
            }
        }

        if (this.EGGFTRY_FLG !== undefined) {
            message += `
        <q5:EGGFTRY_FLG>${this.EGGFTRY_FLG}</q5:EGGFTRY_FLG>
        `;
        }

        if (this.EGGFT_INFO !== null && this.EGGFT_INFO.EggftInfo.length > 0) {
            // tslint:disable-next-line:no-multiline-string
            message += `
        <q5:EGGFT_INFO>
`;

            for (const info of this.EGGFT_INFO.EggftInfo) {
                message += `
            <q5:EggftInfo>
                <q5:EGGFT_CD>${info.EGGFT_CD}</q5:EGGFT_CD>
                <q5:EGGFTPIN_CD>${info.EGGFTPIN_CD}</q5:EGGFTPIN_CD>
                <q5:EGGFTKSSIKNR_NO>${info.EGGFTKSSIKNR_NO}</q5:EGGFTKSSIKNR_NO>
                <q5:EGGFTKSSI_DT>${info.EGGFTKSSI_DT}</q5:EGGFTKSSI_DT>
                <q5:EGGFTKSSISYNN_NO>${info.EGGFTKSSISYNN_NO}</q5:EGGFTKSSISYNN_NO>
                <q5:RY_MNY>${info.RY_MNY}</q5:RY_MNY>
                <q5:RYME_ZNDK>${info.RYME_ZNDK}</q5:RYME_ZNDK>
                <q5:RYG_ZNDK>${info.RYG_ZNDK}</q5:RYG_ZNDK>
            </q5:GftCrdInfo>
`;
            }
            // tslint:disable-next-line:no-multiline-string
            message += `
        </q5:GFTCRD_INFO>
`;
        }

        message += `
    </tns:IN_PARAMETER>
</tns:RegisterPurchaseInfo>
`;

        return message;
    }
}

/**
 * WebMoney決済情報
 */
export interface WebmoneykssiInfo {
    /**
     * 復号化済み決済情報
     * WebMoney 決済の結果情報
     */
    DECRYPTEDKSSIINFO: string;
    /**
     * バージョン情報
     * WebMoney 決済の結果情報のフォーマットに関するバージョン
     */
    VRSINJH: string;
    /**
     * 決済コード
     * WebMoney 決済が割り当てた決済ごとのユニークなコード
     */
    WBMNYSETTLE_CD: string;
    /**
     * 決済日時
     * 決済が行われた日時
     */
    TRAN_DT: string;
    /**
     * 管理番号
     * 決済に使用された WebMoneyの管理番号
     */
    WBMNYMANAGEMENT_NO: string;
    /**
     * 再入場識別フラグ
     * 新規決済かショッピングプロテクション期間中の再入場かを出力
     * 0:新規決済
     * 1:再入場（ショッピングプロテクション）
     */
    SINYJSHKBTS_FLG: string;
    /**
     * 商品個数
     * チケットの購入個数
     */
    SHHN_NUM: string;
    /**
     * 商品コード
     * WebMoney で商品を区別するコード
     */
    SHHN_CD: string;
    /**
     * 発注コード
     * WebMoney の発注コード
     */
    HCCH_CD: string;
}

/**
 * 映画ギフト情報
 */
export interface EggftInfo {
    /**
     * 映画ギフトコード
     */
    EGGFT_CD : string;
    /**
     * 映画ギフトPINコード
     */
    EGGFTPIN_CD : string;
    /**
     * 映画ギフト決済管理番号
     */
    EGGFTKSSIKNR_NO : string;
    /**
     * 映画ギフト決済日時
     */
    EGGFTKSSI_DT : string;
    /**
     * 映画ギフト決済承認番号
     */
    EGGFTKSSISYNN_NO : string;
    /**
     * 映画ギフト利用金額
     */
    RY_MNY : number;
    /**
     * 映画ギフト利用前残高
     */
    RYME_ZNDK : number;
    /**
     * 映画ギフト利用後残高
     */
    RYG_ZNDK : number;
}


/**
 * 鑑賞券情報
 */
export interface KnshknInfo {
    KNSHKNKNRMISI_NO: string;
    KNSH_TYP: string;
    KNYMI_NUM: string;
    KNSHKNHMBI_UNIP: string;
}

/**
 * ギフトカード情報
 */
export interface GftcrdInfo {
    GFTCRDKSSIKNR_NO: string;
    GFTCRDPIN_CD: string;
    GFTCRD_ID: string;
    GFTCRD_STTS: string;
    KSSISYNN_NO: string;
    KSSI_DT: string;
    RYG_ZNDK: string;
    RYME_ZNDK: string;
    RY_MNY: string;
    TPPNSRVCRSPNS: string;
}

/**
 * 購入情報登録in
 */
export interface IRegisterPurchaseInfoIn {
    /**
     * 決済管理番号
     */
    KSSIKNR_NO: string;
    /**
     * 決済代行会社が取引を識別するために発行する ID
     */
    ACCESS_ID: string;
    /**
     * 決済代行会社が取引を識別するために発行するパスワード
     */
    ACCESS_PWD: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 鑑賞券管理番号
     */
    KNSHKNKNR_NO: string;
    /**
     * 鑑賞券情報
     */
    KNSHKN_INFO: {
        KnshknInfo: KnshknInfo[];
    };
    /**
     * 会員フラグ(0:非会員 1:会員)
     */
    KIIN_FLG: string;
    /**
     * 決済方法区分
     */
    KSSIHH_TYP: string;
    /**
     * 購入者姓名称
     */
    KNYSHSI_NM: string;
    /**
     * 購入者名名称
     */
    KNYSHMI_NM: string;
    /**
     * 購入者姓カナ名称
     */
    KNYSHSI_KNNM: string;
    /**
     * 購入者名カナ名称
     */
    KNYSHMI_KNNM: string;
    /**
     * 購入者ＰＣメールアドレス
     */
    KNYSHPC_MLADDR: string;
    /**
     * 購入者携帯メールアドレス
     */
    KNYSHKITI_MLADDR: string;
    /**
     * 購入者市外局番号
     */
    KNYSHSHGIKYK_NO: string;
    /**
     * 購入者市内局番号
     */
    KNYSHSHNIKYK_NO: string;
    /**
     * 購入者加入者番号
     */
    KNYSHKNYSH_NO: string;
    /**
     * 購入日時（yyyy/mm/ddThh24:mm:ss）
     */
    KNY_DT: string;
    /**
     * チケットの販売チャネル
     */
    HMBICHNNL_TYP: string;
    /**
     * チケット販売会社のコード
     */
    HMBGISH_CD: string;
    /**
     * 決済を行った日時（yyyy/mm/ddThh24:mm:ss）
     */
    TRAN_DT: string;
    /**
     * 与信を行ったカード会社の会社コード(決済方法区分が 00 の場合は必須)
     */
    FORWARD_CD: string;

    /**
     * カード会社が発行した与信の承認番号
     * 決済方法区分が 00、01、02 の場合は必須
     * maximum length of 7
     */
    APPROVE_NO: string;
    /**
     * 決済代行会社が処理を行う毎に発行している処理番号(決済方法区分が 00 の場合は必須)
     */
    TRAN_ID: string;
    /**
     * 購入チケットの合計金額
     */
    GRYKNGK: string;
    /**
     * 購入したデバイスの区分
     */
    KNYDVC_TYP: string;
    /**
     * au 簡単決済の支払方法
     */
    AU_PAYMETHOD: string;
    /**
     * ギフトカード情報
     */
    GFTCRD_INFO: {
        GftcrdInfo: GftcrdInfo[];
    };
    /**
     * デバイス区分
     */
    DVC_TYP: string;
    /**
     * 併用決済フラグ(0:単独決済 1:併用決済)
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済方法
     */
    HIYKSSIHH_TYP: string;
    /**
     * 併用決済で使用したムビチケオンラインギフトカードの決済金額合計
     */
    HIYKSSIRYGKI_MNY: string;
    /**
     * WebMoney決済情報
     */
    WEBMONEYKSSIINFO: WebmoneykssiInfo;
    /**
     * 特典情報
     */
    TKTNCDKKH_INFO?: {
        /**
         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
         */
        TKTNCDKKH_NO: string;
    }[];
    /**
     * ポイント利用フラグ
     */
    PINTRY_FLG: '0' | '1';

    /**
     * ポイント決済UUID
     */
    PINTKSSI_UUID?: string;

    /**
     * 利用ポイント数
     */
    RYPINT_NUM: number;

    /**
     * 契約コード 簡易法人決済時のみセット
     */
    KIYK_CD?: string;

    /**
     * 購入者コード 会員購入時のみセット
     */
    KNYSH_CD?: string;

    /**
     * プロモーションコード利用フラグ
     */
    PRMTNCDRY_FLG: '0' | '1';

    /**
     * プロモーションコード
     */
    PRMTN_CD: string;

    /**
     * プロモーションコード決済UUID
     */
    PRMTNCDKSSI_UUID: string;

    /**
     * プロモーションコード割引額
     */
    PRMTNCDWRBK_GK: string;

    /**
     * 映画ギフト利用フラグ
     */
    EGGFTRY_FLG: '0' | '1';

    /**
     * 映画ギフト情報
     */
    EGGFT_INFO?: {
        EggftInfo: EggftInfo[];
    };
}
