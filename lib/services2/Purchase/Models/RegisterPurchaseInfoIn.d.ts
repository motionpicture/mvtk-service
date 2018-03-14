import { BaseIn } from '../../../common/models/BaseIn';
/**
 * 購入情報登録inクラス
 * @extends {BaseIn}
 */
export declare class RegisterPurchaseInfoIn extends BaseIn {
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
    TKTNCDKKH_INFO: {
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
    PTKSSI_UUID?: string;
    /**
     * 利用ポイント数
     */
    RY_PT: number;
    toXml(): string;
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
    PTKSSI_UUID?: string;
    /**
     * 利用ポイント数
     */
    RY_PT: number;
}
