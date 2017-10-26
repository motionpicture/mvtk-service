declare module "@motionpicture/mvtk-service" {
    import soap = require('soap');

    module mvtkservice {
        module common {
            module util {
                module util {
                    /**
                     * soapサービス実行結果のプロパティ名をaBcdEfgの形式に変換する
                     * 
                     * @param {strign} propertyName
                     * @return {string}
                     */
                    export function normalizePropertyName(propertyName: string): string;
                }

                module constants {
                    /** デバイス区分 */
                    export var DVC_TYP_PC: string;
                    /** デバイス区分 */
                    export var DVC_TYP_MOBILE: string;
                    /** デバイス区分 */
                    export var DVC_TYP_SP: string;

                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_SUCCESS: string;
                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_CRITICAL_ERROR: string;
                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_CHECK_ERROR: string;
                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_REPLICATION_ERROR: string;
                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_CLIENT_ERROR: string;
                    /** レスポンスステータス */
                    export var RESULT_INFO_STATUS_OVERFLOW_ERROR: string;

                    /** auステータス(要求登録) */
                    export var AU_RESPONSE_STATUS_REQSUCCESS: string;
                    /** auステータス(認証中) */
                    export var AU_RESPONSE_STATUS_AUTHPROCESS: string;
                    /** auステータス(仮売上) */
                    export var AU_RESPONSE_STATUS_AUTH: string;
                    /** auステータス(即時売上) */
                    export var AU_RESPONSE_STATUS_CAPTURE: string;
                    /** auステータス(決済失敗) */
                    export var AU_RESPONSE_STATUS_PAYFAIL: string;

                    /** au支払方法 */
                    export var AU_PAY_METHOD_TOTALING: string;
                    /** au支払方法 */
                    export var AU_PAY_METHOD_CREDIT_CARD: string;
                    /** au支払方法 */
                    export var AU_PAY_METHOD_WEB_MONEY: string;

                    /** docomoステータス(要求登録) */
                    export var DOCOMO_RESPONSE_STATUS_REQSUCCESS: string;
                    /** docomoステータス(認証中) */
                    export var DOCOMO_RESPONSE_STATUS_AUTHPROCESS: string;
                    /** docomoステータス(仮売上) */
                    export var DOCOMO_RESPONSE_STATUS_AUTH: string;
                    /** docomoステータス(即時売上) */
                    export var DOCOMO_RESPONSE_STATUS_CAPTURE: string;
                    /** docomoステータス(決済失敗) */
                    export var DOCOMO_RESPONSE_STATUS_PAYFAIL: string;

                    /** docomo支払方法 */
                    export var DOCOMO_PAY_METHOD_TOTALING: string;
                    /** docomo支払方法 */
                    export var DOCOMO_PAY_METHOD_CREDIT_CARD: string;
                    /** docomo支払方法 */
                    export var DOCOMO_PAY_METHOD_WEB_MONEY: string;

                    /** 都道府県リスト */
                    export var TDFKN_INFO: Array<{CD: string, NM: string}>;

                    /** モバイルメールアドレスドメインリスト */
                    export var KIIN_MLADDR_MB_DOMAINS: Array<string>;

                    /** メール種類区分(購入完了(PC)) */
                    export var MLTMPLT_CD_PURCHASE_COMPLETE: string;
                    /** メール種類区分(購入完了(PC)) */
                    export var MLTMPLT_CD_KNYKNR_NO_TRANSFER: string;
                    /** メール種類区分(購入完了(モバイル)) */
                    export var MLTMPLT_CD_PURCHASE_COMPLETE_MOBILE: string;
                    /** メール種類区分(購入完了(モバイル)) */
                    export var MLTMPLT_CD_KNYKNR_NO_TRANSFER_MOBILE: string;
                }
            }

            class Service {
                constructor(wsdl: string);
                setCookie(cookie): void;
                /**
                 * soapメソッドを呼び出す
                 */
                protected call(method: string, args: Object|string, cb: (err: Error, response: any, result: any, lastResponseHeaders: any) => void): void;
                /**
                 * sopaクライアントを生成する
                 */
                private createClient(cb: (err: Error, client: soap.Client) => void): void;
            }
        }

        module services {
            module DigitalIncentiveDownload {
                module models {
                    export interface GetDigitalIncentiveDownloadIn {
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** デジタルインセンティブコード */
                        dgtlincntvCd: string;
                        /** デジタルインセンティブ枝番号 */
                        dgtlincntvedNo: string;
                    }
                    export interface GetDigitalIncentiveDownloadResult {
                        /**  ダウンロードファイル名 */
                        dwnlodflNm: string;
                        /** ダウンロードファイルバイナリデータ */
                        dwnlodflDt: string;
                    }
                    export interface GetDigitalIncentiveDownloadLinkListIn {
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** デジタルインセンティブダウンロード画面URL */
                        dgtlincntvdwnlodgmnUrl: string;
                        /** 購入管理番号 */
                        knyknrNo?: string;
                        /** ムビチケ暗証番号 */
                        pinCd?: string;
                    }
                    export interface GetDigitalIncentiveDownloadLinkListResult {
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** デジタルインセンティブ情報（itemArray） */
                        dgtlincntvInfo: Array<DgtlincntvInfo>

                    }

                    interface DgtlincntvInfo {
                        /** デジタルインセンティブコード */
                        DGTLINCNTV_CD: string;
                        /** デジタルインセンティブタイトル */
                        DGTLINCNTV_TTL: string;
                        /** デジタルインセンティブ説明本文 */
                        DGTLINCNTVSTSMI_TXT: string;
                        /** サンプル画像URL */
                        SMPLGZ_URL: string;
                        /** デジタルインセンティブ購入開始年月日 */
                        DGTLINCNTVKNYKISH_YMD: string;
                        /** デジタルインセンティブ購入終了年月日 */
                        DGTLINCNTVKNYSHRY_YMD: string;
                        /** デジタルインセンティブダウンロード有効期間 */
                        DGTLINCNTVDWNLODYK_TM: string;
                        /** デジタルインセンティブダウンロード上限回数 */
                        DGTLINCNTVDWNLODJGNKI_NUM: string;
                        /** 作品デジタルインセンティブ備考 */
                        SKHNDGTLINCNTV_RMK: string;
                        /** ダウンロード回数 */
                        DWNLODKI_NUM: string;
                        /** デジタルインセンティブ詳細情報 （itemArray） */
                        DGTLINCNTVSHSI_INFO: {
                            DgtlincntvshsiInfo: Array<{
                                /** デジタルインセンティブ枝番号 */
                                DGTLINCNTVED_NO: string;
                                /** デジタルインセンティブ詳細タイトル */
                                DGTLINCNTVSHSI_TTL: string;
                            }>
                        };
                    }
                }

                export class DigitalIncentiveDownloadService extends common.Service {
                    getDigitalIncentiveDownload(params: models.GetDigitalIncentiveDownloadIn, cb: (err, response, getDigitalIncentiveDownloadResult: models.GetDigitalIncentiveDownloadResult) => void): void;
                    getDigitalIncentiveDownloadLinkList(params: models.GetDigitalIncentiveDownloadLinkListIn, cb: (err, response, getDigitalIncentiveDownloadLinkListResult: models.GetDigitalIncentiveDownloadLinkListResult) => void): void;
                }

                module DigitalIncentiveDownloadUtilities {
                }

            }


            module Film {
                module models {
                    export interface FilmResult {
                        /** 作品コード */
                        skhnCd: string;
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** 作品名称 */
                        skhnNm: string;
                        /** 全国公開開始年月日(YYYY/MM/DD) */
                        znkkkkikishYmd: string;
                        /** 全国公開時期記述 */
                        znkkkkijkDspt: string;
                        /** ポスター画像URL */
                        pstrgzUrl: string;
                        /** 作品コメント本文(解説) */
                        skhncmmntKistsTxt: string;
                        /** 作品コメント本文(物語) */
                        skhncmmntMngtrTxt: string;
                        /** 作品コメント本文(注釈-共通) */
                        skhncmmntChshkKytsu: string;
                        /** 作品コメント本文(注釈-作品詳細) */
                        skhncmmntChshkShsi: string;
                        /** 作品コメント本文(セールスコピー1) */
                        skhncmmntSlscpy1Txt: string;
                        /** 作品コメント本文(セールスコピー2) */
                        skhncmmntSlscpy2Txt: string;
                        /** 作品コメント本文(セールスコピー3) */
                        skhncmmntSlscpy3Txt: string;
                        /** キャスト情報（itemArray） */
                        cstInfo: Array<FilmCastResult>;
                        /** スタッフ情報（itemArray） */
                        stffInfo: Array<FilmStaffResult>;
                        /** フォトギャラリー情報（itemArray） */
                        phtgllryInfo: Array<FilmPhotoGalleryResult>;
                        /** 作品名オリジナル名称 */
                        skhmmiorgnlNm: string;
                        /** 制作年 */
                        siskY: string;
                        /** 製作国名称 */
                        siskkkNm: string;
                        /** 配給会社名称 */
                        hikygishNm: string;
                        /** 上映時間分 */
                        jeiTmm: string;
                        /** 映倫レイティングコード */
                        eirnrtngCd: string;
                        /** 公式サイトURL */
                        kshkstUrl: string;
                        /** 作品著作権記述 */
                        skhnchskknDspt: string;
                        /** ジャンル情報（itemArray） */
                        gnrInfo: Array<FilmGenreResult>;
                        /** 観たい登録者数 */
                        mtitrksyNum: string;
                        /** 観たい登録済フラグ */
                        mtitrkzmFlg: string;
                        /** 鑑賞券販売フラグ */
                        knshknhmbiFlg: string;
                        /** 鑑賞券販売開始日時 */
                        knshknhmbikishYmd: string;
                        /** 鑑賞券販売終了年月日 */
                        knshknhmbishryYmd: string;
                        /** ECサイト販売承認済みフラグ */
                        ecsthmbishnnzmFlg: string;
                        /** 座席予約終了フラグ */
                        zskyykshryFlg: string;

                        // 以下は、作品検索APIのOUTにのみ含まれる(詳細APIには含まれない)
                        /** 予告編URL */
                        ykkhnUrl?: string;
                        /** 予告編番号 */
                        ykkhnNo?: string;
                        /** 購入特典フラグ */
                        knytktnFlg?: string;
                        /** 観たいフラグ */
                        mtiFlg?: string;
                        /** 予告編有りフラグ */
                        ykkhnarFlg?: string;
                        /** 売れ筋ランキング */
                        urszrnkngNo?: string;
                        /** 期待度ランキング */
                        ktidrnkngNo?: string;
                        /** 注目度ランキング */
                        chmkdrnkngNo?: string;
                        /** 作品アクセスランキング順位 */
                        skhnaccssrnkngNo?: string;
                        /** 予告編アクセスランキング順位 */
                        ykkhnaccssrnkngNo?: string;
                        /** 話題・感想数 */
                        wdiknsNum?: string;
                        /** 話題性ランキング順位 */
                        wdisirnkngNo?: string;
                        /** 興行ランキング順位 */
                        kgyrnkngNo?: string;
                        /** 鑑賞券情報(itemArray) */
                        knshknInfo?: Array<TicketInfoResult>;
                        /**
                         * 主管配給会社コード
                         */
                        shknhikygishCd: string;
                        /**
                         * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
                         */
                        tktnzikjkymsgTxt: string[];

                        /**
                         * 公開状態かどうかを取得する
                         *
                         * @return {boolean}
                         */
                        isShowing(): boolean;

                        /**
                         * 媒体区分が電子券のチケットがあるかどうか
                         *
                         * @return {boolean}
                         */
                        hasOnlinetTicket(): boolean;

                        /**
                         * チケットリストから、媒体区分が電子券のチケットを取得する
                         *
                         * @return {TicketInfoResult}
                         */
                        getOnlineTicket(): TicketInfoResult;

                        /** キャスト名リストを取得する */
                        getCastNames(): string;

                        /** 監督名リストを取得する */
                        getDirectors(): Array<string>;

                        /** スタッフデータを生成 */
                        getStaffs(): Array<FilmStaffResult>;
                    }

                    export interface FilmCastResult {
                        /** キャスト表示順番号 */
                        cstHyjjnNo: string;
                        /** キャスト人物名称 */
                        cstJmbtsNm: string;
                        /** キャスト役名称 */
                        cstYkNm: string;
                        /** キャスト主演フラグ */
                        cstShenFlg: string;
                        /** キャスト人物コード */
                        cstJmbtsCd: string;
                    }
                    export interface FilmGenreResult {
                        /** ジャンル区分 */
                        gnrTyp: string;
                        /** ジャンル区分名称 */
                        gnrKbnNm: string;
                    }
                    export interface FilmPhotoGalleryResult {
                        /** 画像番号 */
                        gzNo: string;
                        /** 画像ファイルURL */
                        gzflUrl: string;

                    }
                    export interface FilmStaffResult {
                        /** スタッフ表示順番号 */
                        stffHyjjnNo: string;
                        /** スタッフ人物名称 */
                        stffJmbtsNm: string;
                        /** スタッフ役割名称 */
                        stffYkwrNm: string;
                        /** スタッフ人物コード */
                        stffJmbtsCd: string;
                    }

                    export interface TicketInfoResult {
                        /** 鑑賞券管理番号 */
                        knshknknrNo: string;
                        /** チケット媒体区分 */
                        tcktbitiTyp: string;
                        /** 鑑賞券オーナー区分 */
                        knshknownrTyp: string;
                        /** 鑑賞券オーナーコード */
                        knshknownrCd: string;
                        /** 鑑賞券販売開始年月日(20160523) */
                        knshknhmbikishYmd: string;
                        /**
                         * 鑑賞券販売開始時刻 Hi形式(sがないので注意)(0000)
                         */
                        knshknhmbikishHms: string;
                        /** 鑑賞券販売終了年月日(20160731) */
                        knshknhmbishryYmd: string;
                        /** チェーンマスタコード */
                        chanmstCd: string;
                        /** 預り金支払タイミング区分 */
                        azkrknshhritmngTyp: string;
                        /** 預り金支払先区分 */
                        azkrknshhriskTyp: string;
                        /** ３Ｄメガネ代金単価(100.000) */
                        thredmgndiknUnip: string;
                        /** 販売時３Ｄメガネ代金支払先区分 */
                        hmbijthredmgndiknshhriskTyp: string;
                        /** 未着券精算年月日 */
                        mchkknsisnYmd: string;
                        /** 興行ギフト券フラグ */
                        kgygftknFlg: string;
                        /** 興行ギフト券有効期間 */
                        kgygftknykTm: string;
                        /** 購入上限枚数 */
                        knyjgmmiNum: string;
                        /** ECサイト販売承認済フラグ */
                        ecsthmbishnnzmFlg: string;
                        /** ECサイト販売承認者コード */
                        ecsthmbishnnshCd: string;
                        /**
                         * ECサイト販売承認日時(2016-05-23 21:26:33)
                         */
                        ecsthmbishnnDt: string;
                        /** 登録ステータス区分 */
                        trksttsTyp: string;
                        /** 鑑賞券明細情報(itemArray) */
                        knshkmmisiInfo: Array<TicketInfoTypeResult>;
                        /** 券種情報(itemArray) */
                        knshInfo: Array<TicketInfoTypeResult>;

                        /**
                         * 販売状態かどうかを取得する
                         *
                         * @return {boolean}
                         */
                        isOnSale(): boolean;
                    }

                    export interface TicketInfoTypeResult {
                        /** 鑑賞券管理明細番号 */
                        knshknknrmisiNo: string;
                        /** 券種区分 */
                        knshTyp: string;
                        /** 消費税区分 */
                        shhziTyp: string;
                        /** 消費税率 */
                        shhziRt: string;
                        /** 消費税単価 */
                        shhziUnip: string;
                        /** ムビチケ配給負担手数料単価 */
                        mvitckthikyftntsuryUnip: string;
                        /** ムビチケ興行負担手数料単価 */
                        mvitcktkgyftntsuryUnip: string;
                        /** ムビチケユーザ手数料単価 */
                        mvitcktusrtsuryUnip: string;
                        /** 精算条件備考 */
                        sisnjknRmk: string;
                        /** ペア券フラグ */
                        parknFlg: string;
                        /** 鑑賞券販売単価 */
                        knshknhmbiUnip: string;
                        /** 券種区分名称 */
                        knshkbnNm: string;
                        /** 映写方式区分 */
                        eishhshkTyp: string;
                        /** 鑑賞券枚数 */
                        knshkmmiNum: string;
                        /** ペア券単体券種フラグ */
                        parkntntiknshFlg: string;
                        /** 組合せ先券種区分 */
                        kmawsskknshTyp: string;
                    }

                    export interface BnnrInfoResult {
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** バナーコード */
                        bnnrCd: string;
                        /** バナー名称 */
                        bnnrNm: string;
                        /** バナー表示箇所区分 */
                        bnnrhyjkshTyp: string;
                        /** バナー画像URL */
                        bnnrgzUrl: string;
                        /** バナーリンク先URL */
                        bnnrlnkskUrl: string;
                        /** バナー説明本文 */
                        bnnrstsmiTxt: string;
                        /** バナー掲載開始年月日 */
                        bnnrkisikishYmd: string;
                        /** バナー掲載終了年月日 */
                        bnnrkisishryYmd: string;

                    }
                    export interface GetTrailerDetailResult {
                        /** 作品コード */
                        skhnCd: string;
                        /** 予告編情報 */
                        ykkhnInfo: Array<YkkhnInfo>;
                    }
                    interface YkkhnInfo {
                        YKKHN_NO: string;
                        DVC_TYP: string;
                        YKKHN_TTL: string;
                        YKKHN_URL: string;
                    }
                    export interface DgtlincntvInfoResult {
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** デジタルインセンティブコード */
                        dgtlincntvCd: string;
                        /** デジタルインセンティブタイトル */
                        dgtlincntvTtl: string;
                        /** デジタルインセンティブ説明本文 */
                        dgtlincntvstsmiTxt: string;
                        /** サンプル画像URL */
                        smplqzUrl: string;
                        /** デジタルインセンティブ購入開始年月日 */
                        dgtlincntvknykishYmd: string;
                        /** デジタルインセンティブ購入終了年月日 */
                        dgtlincntvknyshryYmd: string;
                        /** デジタルインセンティブダウンロード有効期間 */
                        dgtlincntvdwnlodykTm: string;
                        /** デジタルインセンティブダウンロード上限回数 */
                        dgtlincntvdwnlodjgnkiNum: string;
                        /** 作品デジタルインセンティブ備考 */
                        skhndgtlincntvRmk: string;

                    }
                }

                export class FilmService extends common.Service {
                    /**
                    * 作品詳細情報照会
                    *
                    * @param {string} skhnCd 作品コード
                    * @param {string} dvcTyp デバイス区分
                    */
                    getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err, response, result: models.FilmResult) => void): void;

                    /**
                     * トップページ作品検索
                     *
                     * @param {string} dvcTyp
                     */
                    getFilmTopPage(dvcTyp: string, cb: (err, response, result: Array<models.FilmResult>) => void): void;

                    /**
                     * 鑑賞券情報検索
                     *
                     * @param {string} skhnCd 作品コード
                     */
                    getTicketInfoList(skhnCd: string, cb: (err, response, result: Array<models.TicketInfoResult>) => void): void;

                    /**
                     * バナーリスト取得
                     *
                     * @param {string} skhnCd 作品コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getBannerList(skhnCd: string, dvcTyp: string, cb: (err, response, bnnrInfoResults: Array<models.BnnrInfoResult>) => void): void;

                    /**
                     * 予告編取得
                     *
                     * @param {string} skhnCd 作品コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getTrailerDetail(skhnCd, dvcTyp, cb: (err, response, getTrailerDetailResult: models.GetTrailerDetailResult) => void): void;

                    /**
                     * 特典取得
                     *
                     * @param {string} skhnCd 作品コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getDigitalIncentiveList(skhnCd: string, dvcTyp: string, cb: (err, response, dgtlincntvInfoResults: Array<models.DgtlincntvInfoResult>) => void): void;
                }

                module FilmUtilities {
                    /**
                     * チケット媒体区分 電子券（オンライン券）
                     */
                    export var TCKTBITI_TYP_ELECTRON_TICKET: string;
                    /**
                     * チケット媒体区分 電子バウチャー
                     */
                    export var TCKTBITI_TYP_ELECTRON_VOUCHAER: string;
                    /**
                     * チケット媒体区分 カード券
                     */
                    export var TCKTBITI_TYP_CARD_TICKET: string;

                    /** 表示箇所区分（PC） */
                    export var BNNRHYJKSH_TYP_PC_FILM_RIGHT: string;
                    /** 表示箇所区分（PC） */
                    export var BNNRHYJKSH_TYP_PC_FILM_BOTTOM: string;
                    /** 表示箇所区分（PC） */
                    export var BNNRHYJKSH_TYP_PC_PURCHASE: string;

                    /** 表示箇所区分（SP) */
                    export var BNNRHYJKSH_TYP_SP_UNUSED: string;
                    /** 表示箇所区分（SP) */
                    export var BNNRHYJKSH_TYP_SP_FILM: string;
                    /** 表示箇所区分（SP) */
                    export var BNNRHYJKSH_TYP_SP_PURCHASE: string;
                }

            }

            module GiftCard {
                module models {
                    export interface MvtkGiftCardBalanceInquiryResult {
                        /** 凸版サービス返却値 */
                        tppnsrvcrspns: string;
                        /** ムビチケギフトカードID */
                        mvtkgftcrdId: string;
                        /** ムビチケギフトカードPINコード */
                        mvtkgftcrdpinCd: string;
                        /** ムビチケギフトカード券種区分 */
                        mvtkgftcrdknshTyp: string;
                        /** ムビチケギフトカード券種名称 */
                        mvtkgftcrdknshNm: string;
                        /** 有効期限(2017/12/01) */
                        ykkgnYmd: string;
                        /** 残高 */
                        zndk: string;
                        /** 初回チャージ金額 */
                        shkichrgkngk: string;
                        /** 利用明細情報(itemArray) */
                        rymisiInfo: Array<RymisiInfo>;
                    }

                    interface RymisiInfo {
                        /** ギフトカード決済管理番号 */
                        GFTCRDKSSIKNR_NO: string;
                        /** 代行決済ステータス区分 41:減算（売上）/42:取消/43:障害取消 */
                        DIKKSSISTTS_TYP: string;
                        /** 使用日付(2017/12/01) */
                        SHY_YMD: string;
                        /** 作品コード */
                        SKHN_CD: string;
                        /** 作品名称 */
                        SKHN_NM: string;
                        /** 使用金額 */
                        SHY_MNY: string;
                        /** 非表示フラグ */
                        HHYJ_FLG: string;
                    }
                    export interface MvtkGiftCardEntryIn {
                        /** ギフトカードID情報 */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkgftcrdInfoIn: Array<{
                                /** ギフトカード決済管理番号 */
                                GFTCRDKSSIKNR_NO: string;
                                /** ムビチケギフトカードPINコード */
                                MVTKGFTCRDPIN_CD: string;
                                /** ムビチケギフトカードID */
                                MVTKGFTCRD_ID: string;
                                /** 利用金額 */
                                RYUKNGK: string;
                            }>;
                        };
                        /** ご利用金額 */
                        DVC_TYP: string;

                    }
                    export interface MvtkGiftCardEntryResult {
                        /** 凸版サービス返却値 */
                        tppnsrvcrspns: string;
                        /** ムビチケギフトカードID */
                        mvtkgftcrdId: string;
                        /** ムビチケギフトカード認証番号 */
                        mvtkgftcrdpinCd: string;
                        /** ギフト決済管理番号 */
                        gftcrdkssiknrNo: string;
                        /** 利用金額 */
                        ryukngk: string;
                        /** 利用前残高 */
                        ryumezndk: string;
                        /** 残高 */
                        zndk: string;
                        /** 承認番号 */
                        synnNo: string;
                        /** 処理要求日時 */
                        syrykyDt: string;
                        /** ギフトカードステータス */
                        giftcardstatus: string;
                    }
                }

                export class GiftCardService extends common.Service {
                    /**
                     * ムビチケギフトカード残高確認
                     *
                     * @param {string} mvtkgftcrdId ギフトカードID
                     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
                     */
                    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string, cb: (err, response, mvtkGiftCardBalanceInquiryResult: models.MvtkGiftCardBalanceInquiryResult) => void): void;

                    /**
                     * ギフトカード利用
                     *
                     * @param {MvtkGiftCardEntryIn} args
                     */
                    mvtkGiftCardEntry(params: models.MvtkGiftCardEntryIn, cb: (err, response, mvtkGiftCardEntryResults: Array<models.MvtkGiftCardEntryResult>) => void): void;
                }

            }

            module Inquiry {
                module models {
                    export interface SendInquiryMailIn {
                        /** 問合せ日時 */
                        tiawsDt: string;
                        /** 問合せ区分 */
                        tiawsKbn: string;
                        /** 問合せメール本文 */
                        tiawsniyTxt: string;
                        /** 問合せ者姓名称 */
                        tiawsshsiNm: string;
                        /** 問合せ者名名称 */
                        tiawsshmiNm: string;
                        /** 問合せ者市外局番号 */
                        tiawsshshgikykNo: string;
                        /** 問合せ者市内局番号 */
                        tiawsshshnikykNo: string;
                        /** 問合せ者加入者番号 */
                        tiawsshknyshNo: string;
                        /** 問合せ者メールアドレス */
                        tiawsshMladdr: string;
                        /** 会員コード */
                        kiinCd: string;
                    }
                }

                export class InquiryService extends common.Service {
                    /**
                     * 問合せメール送信
                     *
                     * @param {SendInquiryMailIn} sendInquiryMailIn
                     */
                    sendInquiryMail(params: models.SendInquiryMailIn, cb: (err, resonse, isSuccess: boolean) => void): void;
                }

                module InquiryUtilities {
                }

            }

            module MemberInfo {
                module models {
                    export interface MemberInfoResult {
                        /** 会員コード */
                        kiinCd: string;
                        /** 会員メールアドレス */
                        kiinMladdr: string;
                        /** 会員メールアドレスデバイス区分 */
                        kiinmladdrssdvcTyp: string;
                        /** 会員サブメールアドレス */
                        kiinsbMladdr?: string;
                        /** 会員サブメールアドレスデバイス区分 */
                        kiinsbmladdrssdvcTyp?: string;
                        /** 会員姓名称 */
                        kiinsiNm: string;
                        /** 会員名名称 */
                        kiimmiNm: string;
                        /** 会員姓カナ名称 */
                        kiinsiKnnm: string;
                        /** 会員名カナ名称 */
                        kiimmiKnnm: string;
                        /** 性別区分 */
                        sibtsTyp: string;
                        /** 会員生年月日(1999/01/01形式) */
                        kiinsiYmd: string;
                        /** 会員市外局番号 */
                        kiinshgikykNo: string;
                        /** 会員市内局番号 */
                        kiinshnikykNo: string;
                        /** 会員加入者番号 */
                        kiinknyshNo: string;
                        /** 会員郵便番号(123-5678形式) */
                        kiinybnNo: string;
                        /** 都道府県コード */
                        tdfknCd: string;
                        /** 会員市区町村住所 */
                        kiinshkchsnAddr?: string;
                        /** 会員番地住所 */
                        kiimbnchAddr?: string;
                        /** 会員建物住所 */
                        kiinttmnAddr?: string;
                        /** 会員住所緯度 */
                        kiinjshiDo: string;
                        /** 会員住所経度 */
                        kiinjshkiDo: string;
                        /** メルマガ希望フラグ */
                        mlmgznkbFlg: string;
                        /** ニックネーム */
                        nckNm?: string;
                        /** 自己紹介本文 */
                        jkshkiTxt?: string;
                        /** プロフィール画像ＵＲＬ */
                        prflgzUrl?: string;
                        /** 性別公開フラグ */
                        sibtskkiFlg?: string;
                        /** 生年月日公開フラグ */
                        sinngppkkiFlg?: string;
                    }

                    export interface EditMemberInfoIn {
                        /** ニックネーム */
                        nckNm?: string;
                        /** 会員姓名称 */
                        kiinsiNm: string;
                        /** 会員名名称 */
                        kiimmiNm: string;
                        /** 会員姓カナ名称 */
                        kiinsiKnnm: string;
                        /** 会員名カナ名称 */
                        kiimmiKnnm: string;
                        /** 性別区分 */
                        sibtsTyp: string;
                        /** 会員生年月日(19990101形式) */
                        kiinsiYmd: string;
                        /** 会員郵便番号(123-5678形式) */
                        kiinybnNo?: string;
                        /** 都道府県コード */
                        tdfknCd: string;
                        /** 会員市区町村住所 */
                        kiinshkchsnAddr?: string;
                        /** 会員番地住所 */
                        kiimbnchAddr?: string;
                        /** 会員建物住所 */
                        kiinttmnAddr?: string;
                        /** 会員住所緯度 */
                        kiinjshiDo?: string;
                        /** 会員住所経度 */
                        kiinjshkiDo?: string;
                        /** 会員市外局番号 */
                        kiinshgikykNo: string;
                        /** 会員市内局番号 */
                        kiinshnikykNo: string;
                        /** 会員加入者番号 */
                        kiinknyshNo: string;
                        /** 会員メールアドレス */
                        kiinMladdr: string;
                        /** 会員メールアドレスデバイス区分 */
                        kiinmladdrssdvcTyp: string;
                        /** 会員サブメールアドレス */
                        kiinsbMladdr?: string;
                        /** 会員サブメールアドレスデバイス区分 */
                        kiinsbmladdrssdvcTyp?: string;
                        /** メルマガ希望フラグ */
                        mlmgkbFlg: string;
                    }
                }

                export class MemberInfoService extends common.Service {
                    /**
                     * 会員認証
                     *
                     * @param {string} kiinMladdr
                     * @param {string} kiinPwd
                     */
                    getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err, resonse, kiinCd: string) => void): void;

                    /**
                     * 会員情報照会
                     *
                     * APIにてセッションに保存されている会員情報が取得される。
                     */
                    getMemberInfoDetail(cb: (err, response, memberInfoResult: models.MemberInfoResult) => void): void;

                    /**
                     * パスワード変更
                     *
                     * @param {string} kiinCd            会員コード
                     * @param {string} kiingnziPwd       会員現在パスワード
                     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
                     * @param {string} kiingnzipwdhssFlg 会員新パスワード
                     */
                    editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * パスワード変更(svc)
                     *
                     * @param {string} kiinCd            会員コード
                     * @param {string} kiingnziPwd       会員現在パスワード
                     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
                     * @param {string} kiingnzipwdhssFlg 会員新パスワード
                     */
                    editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * パスワード再設定依頼メール送信
                     *
                     * @param {string} kiinMladdr 会員メールアドレス
                     */
                    sendPasswordResetRequestMail(kiinMladdr, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * パスワード再設定会員認証
                     *
                     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
                     * @param {string} dvcTyp        デバイス区分
                     */
                    getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp, cb: (err, response, kiinCd: string) => void): void;

                    /**
                     * 会員情報更新
                     *
                     * @param {EditMemberInfoIn} editMemberInfoIn
                     */
                    editMemberInfo(params: models.EditMemberInfoIn, cb: (err, response, isSuccess: boolean) => void): void;
                }

                module MemberInfoUtilities {
                    /** メールアドレス区分PC */
                    export var KIINMLADDRSSDVC_TYP_PC: string;
                    /** メールアドレス区分モバイル */
                    export var KIINMLADDRSSDVC_TYP_MOBILE: string;
                    /** 性別区分男性 */
                    export var SIBTS_TYP_MEN: string;
                    /** 性別区分女性 */
                    export var SIBTS_TYP_WOMEN: string;
                }

            }

            module MovieLog {
                module models {
                    export interface GetFavoriteFilmListResult {
                        /** 会員コード */
                        kiinCd: string;
                        /** レコード数 */
                        rcdNum: string;
                        /** 作品詳細情報(itemArray) */
                        skhnInfo: Array<SkhnInfo>;

                    }

                    export interface SkhnInfo {
                        /** 作品コード */
                        skhnCd: string;
                        /** 作品名称 */
                        skhnNm: string;
                        /** ポスター画像URL */
                        pstrgzUrl: string;
                        /** 全国公開開始年月日 */
                        znkkkkikishYmd: string;
                        /** 全国公開時期記述 */
                        znkkkkijkDspt: string;
                        /** ＥＣサイト鑑賞券販売承認済フラグ */
                        ecsthmbishnnzmFlg: string;
                        /** 鑑賞券販売開始日時(鑑賞券販売開始年月日＋鑑賞券販売開始時刻)(YYYY-MM-DD hh:mm:ss) */
                        knshknhmbikishDt: string;
                        /** 鑑賞券販売終了年月日(YYYY/MM/DD) */
                        knshknhmbishryYmd: string;
                        /** 観たい登録年月日(YYYY/MM/DD) */
                        trkDt: string;
                        /** 感想ありフラグ */
                        knsFlg: string;
                        /** 観たフラグ */
                        mtaFlg: string;
                        /** 観たい登録者数 */
                        mtitrksyNum: string;
                        /** 観た登録者数 */
                        mtatrksyNum: string;
                        /** 購入ボタンフラグ */
                        knyFlg: string;
                        /** 座席予約終了フラグ */
                        zskyykshryFlg: string;
                    }

                    export interface GetUnusedTicketListResult {
                        /** 会員コード */
                        kiinCd: string;
                        /** 作品詳細情報(itemArray) */
                        mshyticktInfo: Array<MshyticktInfo>;
                    }

                    interface MshyticktInfo {
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** 作品コード */
                        skhnCd: string;
                        /** 作品名称 */
                        skhnNm: string;
                        /** ポスター画像URL */
                        pstrgzUrl: string;
                        /** 全国公開開始年月日(YYYY/MM/DD) */
                        znkkkkikishYmd: string;
                        /** 全国公開時期記述 */
                        znkkkkijkDspt: string;
                        /** 購入日(YYYY/MM/DD) */
                        knyYmd: string;
                        /** 購入枚数合計 */
                        knymiNumSum: string;
                        /** 券種情報(itemArray) */
                        knshInfo: Array<KnshInfo>;
                        /** デジタルインセンティブダウンロード画面URL */
                        dgtlincntvdwnlodgmnUrl: string;
                        /** 座席予約可フラグ */
                        zskyykkFlg: string;
                        /** ??? */
                        shknhikygishCd: string;
                    }

                    export interface ShyzmtcktInfoListResult {
                        /** 会員コード */
                        kiinCd: string;
                        /** 作品詳細情報(itemArray) */
                        shyzmtcktInfo: Array<ShyzmtcktInfo>;
                    }

                    interface ShyzmtcktInfo {
                        /** ムビログ番号 */
                        mvilgNo: string;
                        /** 購入日時 */
                        knyDt: string;
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** 作品コード */
                        skhnCd: string;
                        /** 作品名称 */
                        skhnNm: string;
                        /** ポスター画像URL */
                        pstrgzUrl: string;
                        /** 全国公開開始年月日 */
                        znkkkkikishYmd: string;
                        /** 全国公開時期記述 */
                        znkkkkijkDspt: string;
                        /** 鑑賞券合計枚数 */
                        knshkmmisumNum: string;
                        /** 券種情報(itemArray) */
                        knshInfo: Array<KnshInfo>;
                        /** デジタルインセンティブダウンロード画面URL */
                        dgtlincntvdwnlodgmnUrl: string;
                        /** 購入チケットステータス区分 */
                        knytcktSttsKbn: string;
                    }

                    interface KnshInfo {
                        /** 券種区分名称 */
                        KNSHKBN_NM: string;
                        /** 購入枚数 */
                        KNY_NUM: string;
                    }
                }

                export class MovieLogService extends common.Service {
                    /**
                     * 観たい作品検索
                     *
                     * @param {string} kiinCd  会員コード
                     * @param {number} rcdNum  レコード数
                     * @param {number} shtkNum 取得件数
                     * @param {string} dvcTyp  デバイス区分
                     */
                    getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp, cb: (err, response, getFavoriteFilmListResult: models.GetFavoriteFilmListResult) => void): void;

                    /**
                     * 未使用チケット検索
                     *
                     * @param {string} kiinCd 会員コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getUnusedTicketList(kiinCd, dvcTyp, cb: (err, response, getUnusedTicketListResult: models.GetUnusedTicketListResult) => void): void;

                    /**
                     * 座席予約済チケット検索
                     *
                     * @param {string} kiinCd 会員コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getSeatReservedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: models.ShyzmtcktInfoListResult) => void): void;

                    /**
                     * 鑑賞済チケット検索
                     *
                     * @param {string} kiinCd 会員コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getWatchedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: models.ShyzmtcktInfoListResult) => void): void;

                    /**
                     * ギフト贈呈済チケット検索
                     *
                     * @param {string} kiinCd 会員コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getGiftTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: models.ShyzmtcktInfoListResult) => void): void;

                    /**
                     * 有効期限切れチケット検索
                     *
                     * @param {string} kiinCd 会員コード
                     * @param {string} dvcTyp デバイス区分
                     */
                    getExpiredTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: models.ShyzmtcktInfoListResult) => void): void;

                    /**
                     * 観たい作品登録
                     *
                     * @param {string} skhnCd 作品コード
                     */
                    registerFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 観たい作品削除
                     *
                     * @param {string} skhnCd 作品コード
                     */
                    deleteFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 作品感想検索
                     *
                     * @param skhnCd  作品コード
                     * @param kiinCd  会員コード
                     * @param rcdNum  レコード数
                     * @param shtkNum 取得件数
                     */
                    getFilmReviewList(skhnCd, kiinCd, rcdNum, shtkNum, cb: Function): void;

                    /**
                     * 使用済チケット履歴削除
                     *
                     * @param {string} mvilgNo        ムビログ番号
                     * @param {string} knytcktSttsKbn 購入チケットステータス区分
                     */
                    deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn, cb: Function): void;

                    /**
                     * 座席予約状況
                     *
                     * @param {string} mvilgNo ムビログ番号
                     */
                    getSeatReservationStatusList(mvilgNo, cb: Function): void;

                    /**
                     * 鑑賞記録リスト検索
                     *
                     * @param {string} mvilgNo ムビログ番号
                     */
                    getWatchRecordList(mvilgNo, cb: Function): void;

                    /**
                     * ギフト送信状況リスト検索
                     *
                     * @param {string} mvilgNo ムビログ番号
                     */
                    getSentGiftStatusList(mvilgNo, cb: Function): void;

                    /**
                     * 電子券QRコード生成 (ムビログ用)
                     *
                     * @param {string} knyknrNo 購入管理番号
                     */
                    createQrCodeInMovieLog(knyknrNo, cb: (err, response, qrcdUrl: string) => void): void;
                }

            }

            module Purchase {
                module models {
                    export interface CreditCardInfoResult {
                        /** カード登録連番 */
                        cardseq: string;
                        /** クレジットカード番号 */
                        crdtcrdNo: string;
                        /** カード有効期限 */
                        crdykkgn: string;
                        /** 名義人 */
                        mignn: string;
                        /** セキュリティコード */
                        scrtyCd: string;

                    }
                    export interface GetGmoExecTranIn {
                        /** 決済管理番号 */
                        kssiknrNo: string;
                        /** 決済方法区分 */
                        kssihhTyp: string;
                        /** 取引ID */
                        accessId: string;
                        /** 取引パスワード */
                        accessPwd: string;
                        /** カード情報入力区分 */
                        crdtcrdinputKbn: string;
                        /** HTTP_ACCEPT */
                        httpAccept: string;
                        /** HTTP_USER_AGENT */
                        httpUserAgent: string;
                        /** デバイス区分 */
                        dvcTyp: string;
                        /** クレジットカード番号 */
                        crdtcrdNo?: string;
                        /** カード有効期限 */
                        crdykkgn?: string;
                        /** セキュリティーコード */
                        scrtyCd?: string;
                        /** 会員コード */
                        kiinCd?: string;
                        /** カード登録連番 */
                        cardseq?: string;
                        /** 購入者名 */
                        knyshNm?: string;
                        /** ??? */
                        shhnTyp?: string;
                    }
                    export interface GetGmoExecTranResult {
                        /** 本人認証サービス対応区分 */
                        acsKbn: string;
                        /** 本人認証パスワード入力画面URL */
                        acsurl: string;
                        /** 本人認証要求電文 */
                        pareq: string;
                        /** 取引ID */
                        md: string;
                        /** 仕向先会社コード */
                        forwardCd: string;
                        /** 決済日時(形式：20160518133125) */
                        tranDt: string;
                        /** 決済承認番号 */
                        approveNo: string;
                        /** トランザクションID(形式1605181331111111111111878508：) */
                        tranId: string;
                        /** au取引ID */
                        auaccssId: string;
                        /** auトークン */
                        autkn: string;
                        /** au支払手続きインターフェイスURL */
                        austrtUrl: string;
                        /** ドコモ取引ID */
                        docomoaccssId: string;
                        /** ドコモトークン */
                        docomotkn: string;
                        /** ドコモ支払手続きインターフェイスURL */
                        docomostrtUrl: string;
                        /** 決済エラー種類区分 */
                        kssierrrshriTyp: string;
                        /** 決済エラーメッセージ本文 */
                        kssierrrmssgTxt: string;
                    }

                    export interface RegisterIchjknrInfoIn {
                        /** 取引ID */
                        ACCESS_ID: string;
                        /** 取引パスワード */
                        ACCESS_PWD: string;
                        /** トークンID */
                        TKN_ID: string;
                        /** 決済管理番号 */
                        KSSIKNR_NO: string;
                        /** 表示カード番号 */
                        HYJCRD_NO?: string;
                        /** カード名義人名称 */
                        CRDMIGNN_NM?: string;
                        /** カード情報保持フラグ */
                        CRDJHHJ_FLG?: string;
                        /** 購入者コード */
                        KNYSH_CD: string;
                        /** 会員フラグ */
                        KIIN_FLG: string;
                        /** 購入者姓名称 */
                        KNYSHSI_NM: string;
                        /** 購入者名名称 */
                        KNYSHMI_NM: string;
                        /** 購入者姓カナ名称 */
                        KNYSHSI_KNNM: string;
                        /** 購入者名カナ名称 */
                        KNYSHMI_KNNM: string;
                        /** 購入者PCメールアドレス */
                        KNYSHPC_MLADDR: string;
                        /** 購入者携帯メールアドレス */
                        KNYSHKITI_MLADDR: string;
                        /** 購入者市外局番号 */
                        KNYSHSHGIKYK_NO: string;
                        /** 購入者市内局番号 */
                        KNYSHSHNIKYK_NO: string;
                        /** 購入者加入者番号 */
                        KNYSHKNYSH_NO: string;
                        /** メール送付フラグ */
                        MLSF_FLG: string;
                        /** 作品コード */
                        SKHN_CD: string;
                        /** 鑑賞券管理番号 */
                        KNSHKNKNR_NO: string;
                        /** 預り金支払タイミング区分 */
                        AZKRKNSHHRITMNG_TYP: string;
                        /** 預り金支払先区分 */
                        AZKRKNSHHRISK_TYP: string;
                        /** 3Dメガネ代金単価 */
                        THREDMGNDIKN_UNIP: number;
                        /** 販売時3Dメガネ代金支払先区分 */
                        HMBIJTHREDMGNDIKNSHHRISK_TYP: string;
                        /** チケット一時管理リスト */
                        TICKETICHJKNR_LIST: ArrayOfTicketichjknrList;
                    }

                    interface ArrayOfTicketichjknrList {
                        TicketichjknrList: Array<Ticketichjknr>;
                    }

                    interface Ticketichjknr {
                        /** 鑑賞券管理番号 */
                        KNSHKNKNR_NO: string;
                        /** 鑑賞券管理明細番号 */
                        KNSHKNKNRMISI_NO: string;
                        /** 鑑賞券販売単価 */
                        KNSHKNHMBI_UNIP: string;
                        /** ムビチケ配給負担手数料単価 */
                        MVITCKTHIKYFTNTSURY_UNIP: string;
                        /** ムビチケ興行負担手数料単価 */
                        MVITCKTKGYFTNTSURY_UNIP: string;
                        /** ムビチケユーザー手数料単価 */
                        MVITCKTUSRTSURY_UNIP: string;
                        /** 消費税率 */
                        SHHZI_RT: string;
                        /** 消費税区分 */
                        SHHZI_TYP: string;
                        /** 消費税単価 */
                        SHHZI_UNIP: string;
                        /** 購入枚数 */
                        KNYMI_NUM: string;
                    }

                    export interface SelectIchjknrInfoResult {
                        /** 取引ID */
                        accessId: string;
                        /** 取引パスワード */
                        accessPwd: string;
                        /** トークンID */
                        tknId: string;
                        /** 決済管理番号 */
                        kssiknrNo: string;
                        /** 表示カード番号 */
                        hyjcrdNo: string;
                        /** カード情報保持フラグ */
                        crdjhhjFlg: string;
                        /** カード名義人名称 */
                        crdmignnNm: string;
                        /** 購入者コード */
                        knyshCd: string;
                        /** 会員フラグ */
                        kiinFlg: string;
                        /** 購入者姓名称 */
                        knyshsiNm: string;
                        /** 購入者名名称 */
                        knyshmiNm: string;
                        /** 購入者姓カナ名称 */
                        knyshsiKnnm: string;
                        /** 購入者名カナ名称 */
                        knyshmiKnnm: string;
                        /** 購入者PCメールアドレス */
                        knyshpcMladdr: string;
                        /** 購入者携帯メールアドレス */
                        knyshkitiMladdr: string;
                        /** 購入者市外局番号 */
                        knyshshgikykNo: string;
                        /** 購入者市内局番号 */
                        knyshshnikykNo: string;
                        /** 購入者加入者番号 */
                        knyshknyshNo: string;
                        /** メール送付フラグ */
                        mlsfFlg: string;
                        /** 作品コード */
                        skhnCd: string;
                        /** 作品名称 */
                        skhnNm: string;
                        /** 鑑賞券管理番号 */
                        knshknknrNo: string;
                        /** 預り金支払タイミング区分 */
                        azkrknshhriskTyp: string;
                        /** 預り金支払先区分 */
                        azkrknshhritmngTyp: string;
                        /** 3Dメガネ代金単価 */
                        thredmgndiknUnip: string;
                        /** 販売時3Dメガネ代金支払先区分 */
                        hmbijthredmgndiknshhriskTyp: string;
                        /** 鑑賞券管理明細番号 */
                        knshknknrmisiNo: string;
                        /** 購入枚数 */
                        knymiNum: string;
                        /** 消費税区分 */
                        shhziTyp: string;
                        /** 消費税率 */
                        shhziRt: string;
                        /** 消費税単価 */
                        shhziUnip: string;
                        /** ムビチケ配給負担手数料単価 */
                        mvitckthikyftntsuryUnip: string;
                        /** ムビチケ興行負担手数料単価 */
                        mvitcktkgyftntsuryUnip: string;
                        /** ムビチケユーザー手数料単価 */
                        mvitcktusrtsuryUnip: string;
                        /** 鑑賞券販売単価 */
                        knshknhmbiUnip: string;
                        /** ポスター画像URL */
                        pstrgzUrl: string;
                        /** 主幹配給会社コード */
                        shknhikygishCd: string;
                        /** 映写方式区分 */
                        eishhshkTyp: string;
                        /** 券種区分 */
                        knshTyp: string;
                        /** 券種区分名称 */
                        knshkbnNm: string;
                    }
                    export interface GetTsuryShhziInfoResult {
                        /** 鑑賞券管理明細番号 */
                        knshknknrmisiNo: string;
                        /** ムビチケ配給負担手数料単価 */
                        mvitckthikyftntsuryUnip: string;
                        /** ムビチケ興行負担手数料単価 */
                        mvitcktkgyftntsuryUnip: string;
                        /** ムビチケユーザー手数料単価 */
                        mvitcktusrtsuryUnip: string;
                        /** 消費税率 */
                        shhziRt: string;
                        /** 消費税区分 */
                        shhziTyp: string;
                        /** 消費税単価 */
                        shhziUnip: string;
                    }

                    export interface GetShhriInfoByKeyResult {
                        /** 預り金支払タイミング区分 */
                        azkrknshhritmngTyp: string;
                        /** 預り金支払先区分 */
                        azkrknshhriskTyp: string;
                        /** 販売時3Dメガネ代金支払先区分 */
                        hmbijthredmgndiknshhriskTyp: string;
                    }

                    export interface GMOCancelIn {
                        /** 取引ID(決済代行会社が取引を識別するために発行するＩＤ) */
                        accessId: string;
                        /** 取引パスワード(決済代行会社が取引を識別するために発行するパスワード) */
                        accessPwd: string;
                        /** 決済方法区分 */
                        kssihhTyp: string;
                        /** 併用決済方法区分 */
                        hiykssihhTyp: string;
                        /** 決済管理番号 */
                        kssiknrNo: string;
                        /** ご利用金額 */
                        grykngk: string;
                        /** 決済日時(2016/05/18 13:31:25) */
                        tranDt: string;
                    }
                    export interface GetQuestionnaireListIn {
                        /** 作品コード */
                        skhnCd: string;
                    }
                    export interface GetQuestionnaireListResult {
                        /** アンケート設問情報(itemArray) */
                        qustinnarstsmnInfo: Array<QustinnarstsmnInfo>;

                    }

                    interface QustinnarstsmnInfo {
                        /** アンケート設問番号 */
                        QUSTINNARSTSMN_NO: string;
                        /** アンケート設問本文 */
                        QUSTINNARSTSMN_TXT: string;
                        /** 回答方式区分 */
                        KITHSHK_TYP: string;
                        /** アンケート表示形式区分 */
                        QUSTINNARHYJKISHK_TYP: string;
                        /** 回答上限数 */
                        KITJGN_NUM: string;
                        /** アンケート選択肢情報(itemArray) */
                        QUSTINNARSNTKSH_INFO: Array<QustinnarsntkshInfo>;
                    }

                    interface QustinnarsntkshInfo {
                        /** 選択肢番号 */
                        SNTKSH_NO: string;
                        /** 選択肢名称 */
                        SNTKSH_NM: string;
                    }

                    export interface RegisterQuestionnaireIn {
                        /** 作品コード */
                        skhnCd: string;
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** アンケート回答情報(Item Array) */
                        qustinnarkitInfo: ArrayOfQustinnarkitInfo;
                        /** 購入者コード */
                        knyshCd: string;
                        /** 期待コメント本文 */
                        kticmmntTxt: string;

                    }

                    interface ArrayOfQustinnarkitInfo {
                        QustinnarkitInfo: Array<QustinnarkitInfo>;
                    }

                    interface QustinnarkitInfo {
                        /** 回答方式区分 */
                        KITHSHK_TYP: string;
                        /** 記述回答本文 */
                        KJTSKIT_TXT: string;
                        /** アンケート設問番号 */
                        QUSTINNARSTSMN_NO: string;
                        /** 選択式アンケート回答情報(itemArray) */
                        SNTKSHKQUSTINNARKIT_INFO: ArrayOfSntkshkqustinnarkitInfo;
                    }

                    interface ArrayOfSntkshkqustinnarkitInfo {
                        SntkshkqustinnarkitInfo: Array<SntkshkqustinnarkitInfo>;
                    }

                    interface SntkshkqustinnarkitInfo {
                        /** 選択肢番号 */
                        SNTKSH_NO: string;
                    }

                    export interface ForwardPurchaseInfoMailIn {
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** 宛先 */
                        mailaddress: string;
                        /** デバイス区分 */
                        dvcTyp?: string;
                        /** QRコードURL */
                        qrcdUrl?: string;
                    }
                }

                export class PurchaseService extends common.Service {
                    /**
                     * 購入日時チェック
                     *
                     * @param {string} skhnCd 作品コード
                     */
                    isPurchaseDatetime(skhnCd: string, cb: (err, responnes, isOnSalse: boolean) => void): void;

                    /**
                     * 代行会社カード参照呼出
                     *
                     * @param {string} kiinCd
                     */
                    getGmoSearchCard(kiinCd: string, cb: (err, response, creditCardInfoResult: models.CreditCardInfoResult) => void): void;

                    /**
                     * 券種情報検索
                     *
                     * @param {string} skhnCd
                     * @param {string} dvcTyp
                     */
                    getTicketTypeList(skhnCd, dvcTyp, cb: (err, response, result: services.Film.models.TicketInfoResult) => void): void;

                    /**
                     * 決済管理番号採番
                     *
                     * 決済エラーの処理はしない。
                     * 決済エラー関係のフィールドはあるが、値は返却されない。
                     *
                     * @return string 決済管理番号
                     */
                    saibanKssiknrNo(cb: (err, response, kssiknrNo: string) => void): void;

                    /**
                     * 代行会社決済実行呼出
                     *
                     * @param {string} kssiknrNo   決済管理番号
                     * @param {string} kssihhTyp  決済方法区分
                     * @param {string} accessId        取引ID
                     * @param {string} accessPwd  取引パスワード
                     * @param Array<string>  params
                     */
                    getGmoExecTran(params: models.GetGmoExecTranIn, cb: (err, response, GetGmoExecTranResult: models.GetGmoExecTranResult) => void): void;

                    /**
                     * 代行会社カード登録更新呼出
                     *
                     * @param {string} kssiknrNo       決済管理番号
                     * @param {string} kiinCd          会員コード
                     * @param {string} mignn  クレジットカード名義人
                     */
                    getGmoSaveCard(kssiknrNo, kiinCd, mignn, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 一時管理テーブル（情報）登録
                     *
                     * @param {RegisterIchjknrInfoIn} args
                     */
                    registerIchjknr(params: models.RegisterIchjknrInfoIn, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 一時管理テーブル（情報）取得
                     *
                     * @param {string} kssihhTyp    決済方法区分
                     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
                     */
                    selectIchjknr(kssihhTyp, accessIdOrkssiknrNo, cb: (err, response, selectIchjknrInfoResults: Array<models.SelectIchjknrInfoResult>) => void): void;

                    /**
                     * 一時管理テーブル（情報）削除
                     *
                     * @param {Array<string>} accessIds
                     */
                    deleteIchjknr(accessIds: Array<string>, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 手数料・消費税情報取得
                     *
                     * @param {string} knshknknrNo 鑑賞券管理番号
                     */
                    getTsuryShhziInfo(knshknknrNo, cb: (err, response, getTsuryShhziInfoResults: Array<models.GetTsuryShhziInfoResult>) => void): void;

                    /**
                     * 支払先情報取得
                     *
                     * @param {string} knshknknrNo 鑑賞券管理番号
                     */
                    getShhriInfoByKey(knshknknrNo, cb: (err, respones, getShhriInfoByKeyResult: models.GetShhriInfoByKeyResult) => void): void;

                    /**
                     * 代行会社決済取消呼出
                     *
                     * @param {GMOCancelIn} args
                     */
                    gMOCancel(params: models.GMOCancelIn, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * アンケート設問検索
                     *
                     * @param {GetQuestionnaireListIn} args
                     */
                    getQuestionnaireList(params: models.GetQuestionnaireListIn, cb: (err, response, getQuestionnaireListResult: models.GetQuestionnaireListResult) => void): void;

                    /**
                     * アンケート設問登録
                     *
                     * @param {RegisterQuestionnaireIn} args
                     */
                    registerQuestionnaire(params: models.RegisterQuestionnaireIn, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 購入管理番号メール転送
                     *
                     * @param {ForwardPurchaseInfoMailIn} args
                     */
                    forwardPurchaseInfoMail(params: models.ForwardPurchaseInfoMailIn, cb: (err, response, isSuccess: boolean) => void): void;
                }

            }

            module RegisterMember {
                module models {
                    export interface RegisterMemberTemporaryIn {
                        /** 会員姓名称 */
                        kiinsiNm: string;
                        /** 会員名名称 */
                        kiimmiNm: string;
                        /** 会員姓カナ名称 */
                        kiinsiKnnm: string;
                        /** 会員名カナ名称 */
                        kiimmiKnnm: string;
                        /** 性別区分 */
                        sibtsTyp: string;
                        /** 会員生年月日(19990101形式) */
                        kiinsiYmd: string;
                        /** 都道府県コード */
                        tdfknCd: string;
                        /** 会員住所緯度 */
                        kiinjshiDo: string;
                        /** 会員住所経度 */
                        kiinjshkiDo: string;
                        /** 会員市外局番号 */
                        kiinshgikykNo: string;
                        /** 会員市内局番号 */
                        kiinshnikykNo: string;
                        /** 会員加入者番号 */
                        kiinknyshNo: string;
                        /** 会員メールアドレス */
                        kiinMladdr: string;
                        /** 会員メールアドレスデバイス区分 */
                        kiinmladdrssdvcTyp: string;
                        /** 会員パスワード */
                        kiinPwd: string;
                        /**  */
                        mlmgkbFlg: string;
                        /** 会員登録デバイス区分 */
                        kiintrkdvcTyp: string;
                    }
                }

                export class RegisterMemberService extends common.Service {
                    /**
                     * 会員情報仮登録
                     *
                     * @param {RegisterMemberTemporaryIn} registerMemberTemporaryIn
                     */
                    registerMemberTemporary(params: models.RegisterMemberTemporaryIn, cb: (err, resonse, kiinCd: string) => void): void;

                    /**
                     * 会員情報仮登録完了メール送信
                     *
                     * @param {string} kiinCd 会員コード
                     */
                    sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 会員情報本登録・代行会社会員登録呼出
                     *
                     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
                     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
                     */
                    registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string, cb: (err, response, kiinCd: string) => void): void;
                }

            }

            module Util {
                module models {
                    export interface EncryptDataListIn {
                        /** 暗号化文字列リスト */
                        list: Array<string>;
                    }

                    export interface GetCodeNameResult {
                        /** 項目区分 */
                        kmkTyp: string;
                        /** 項目区分名称 */
                        kmkkbnNm: string;
                        /** 選択区分 */
                        slcttyp: string;
                        /** 区分情報(itemArray) */
                        typInfo: Array<TypInfo>;
                    }

                    interface TypInfo {
                        TYP: string;
                        KBN_NM: string;
                    }
                }

                export class UtilService extends common.Service {
                    // getPrefectureCode(prefectureCode, addBlank = false): void;
                    // getPrefectureCodeWithMvitckttio(prefectureCode, addBlank = false): void;

                    /**
                     * 会員認証クッキー追加
                     *
                     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
                     *
                     * @param {string} kiinCd ムビチケ会員コード
                     */
                    signIn(kiinCd: string, cb: (err, response, cookieString: string) => void): void;

                    /**
                     * サインアウト
                     *
                     * API側のセッション情報を破棄
                     */
                    signOut(cb: (err, response, isSuccess: boolean) => void): void;

                    /**
                     * 電子券QRコード生成
                     *
                     * @param {string}  knyknrNo 購入管理番号
                     * @param {string}  pinCd    PINコード（購入者電話番号下４桁）
                     */
                    createQrCode(knyknrNo: string, pinCd: string, cb: (err, response, qrcdUrl: string) => void): void;

                    /**
                     * 暗号化
                     *
                     * @param string $value
                     * @return string 暗号化した文字列
                     *
                     * @throws sfMovieticketAPIException
                     */
                    encryptData(value: string): void;

                    /**
                     * 暗号化（配列）
                     *
                     * @param {Object} values
                     */
                    encryptDataList(params: models.EncryptDataListIn, cb: (err, response, encryptedStrings: Array<string>) => void): void;

                    /**
                     * 各種コード検索
                     * 
                     * @param {string} kmkTyp 項目区分
                     * @param {string} typ 区分
                     * @param {string} blnkarFlg ブランク有フラグ
                     */
                    getCodeName(kmkTyp: string, typ: string, blnkarFlg: string, cb: (err, response, getCodeNameResult: models.GetCodeNameResult) => void): void;
                }
            }

            module WebMoney {
                module models {
                    export interface WebMoneyEntryIn {
                        /** 決済管理番号 */
                        kssiknrNo: string;
                        /** 鑑賞券管理番号 */
                        knshknknrNo: string;
                        /** 作品コード */
                        skhnNm: string;
                        /** 購入デバイス区分 */
                        dvcTyp: string;
                        /**  */
                        knshknInfo: {
                            KnshInfoIn: Array<{
                                KNSHKNKNRMISI_NO: string;
                                KNSHKBN_NM: string;
                                KNSHKNHMBI_UNIP: string;
                                KNYMI_NUM: string;
                            }>;
                        };
                    }

                    export interface WebMoneyEntryResult {
                        /** リダイレクトURL */
                        rdirktUrl: string;
                    }

                    export interface DecryptWebMoneyKssiInfoResult {
                        /**  */
                        decryptedkssiinfo: string;
                        /**  */
                        vrsinjh: string;
                        /**  */
                        wbmnysettleCd: string;
                        /** 形式：YYYYMMDDHHmmss */
                        tranDt: string;
                        /**  */
                        wbmnymanagementNo: string;
                        /**  */
                        sinyjshkbtsFlg: string;
                        /**  */
                        shhnNum: string;
                        /**  */
                        shhnCd: string;
                        /**  */
                        hcchCd: string;
                    }
                }

                export class WebMoneyService extends common.Service {
                    /**
                     * WebMoney決済実行
                     *
                     * @param {WebMoneyEntryIn} webMoneyEntryIn
                     */
                    webMoneyEntry(params: models.WebMoneyEntryIn, cb: (err, response, webMoneyEntryResult: models.WebMoneyEntryResult) => void): void;

                    /**
                     * WebMoney決済情報複合化
                     *
                     * @param {string} encryptedKssiInfo
                     */
                    decryptWebMoneyKssiInfo(encryptedKssiInfo, cb: (err, response, decryptWebMoneyKssiInfoResult: models.DecryptWebMoneyKssiInfoResult) => void): void;
                }
            }
        }

        module services2 {

            module GiftCard {
                module models {
                    export interface GiftCardIDAuthIn {
                        /** ギフトカードID情報 */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkGftcrdInfo: Array<{
                                /** ムビチケギフトカードID */
                                MVTKGFTCRD_ID: string;
                                /** ムビチケギフトカードPINコード */
                                MVTKGFTCRDPIN_CD: string;
                                /** ギフトカード決済管理番号 */
                                GFTCRDKSSIKNR_NO: string;
                            }>;
                        };
                        /** 利用金額 */
                        KSSIKNR_NO: string;
                        /** デバイス区分 */
                        RYUKNGK: string;
                        /** ご利用金額 */
                        DVC_TYP: string;
                        /** ロックフラグ */
                        LOCK_FLG: string;
                        /** 併用決済フラグ */
                        HIYKSSI_FLG: string;
                        /** 併用決済区分 */
                        HIYKSSI_TYP: string;
                        /** 購入者コード */
                        KNYSH_CD: string;
                        /** 会員フラグ */
                        KIIN_FLG: string;
                        /** 作品コード */
                        SKHN_CD: string;
                    }

                    export interface GiftCardIDAuthResult {
                        /** 凸版サービス返却値 */
                        tppnsrvcrspns: string;
                        /** ムビチケギフトカードID */
                        mvtkgftcrdId: string;
                        /** 残高 */
                        zndk: string;
                        /** 利用金額 */
                        ryukngk: string;
                        /** ギフトカードステータス */
                        giftcardstatus: string;
                        /** 他決済利用金額 */
                        tkssiryukngk: string;

                    }
                    export interface GiftCardCancelIn {
                        /** ギフトカードID情報 */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkGftcrdCancelInfo: Array<{
                                /** ムビチケギフトカードID */
                                MVTKGFTCRD_ID: string;
                                /** ムビチケギフトカードPINコード */
                                MVTKGFTCRDPIN_CD: string;
                                /** ギフトカード決済管理番号 */
                                GFTCRDKSSIKNR_NO: string;
                                /** ムビチケオンラインギフトカードで決済した金額 */
                                RYUKNGK: string;
                                /** 取消を行う決済処理を要求した日時(取消区分が2の場合は必須) */
                                SYRYKY_DT: string;
                            }>;
                        };
                        /**
                         * 取消区分
                         * 決済取消を行う区分
                         * 0：ロック解除 1：取消 2：障害取消
                         */
                        TRKSH_TYP: string;
                        /**
                         * ギフトカード決済取消を行うデバイスの区分
                         * 1：PC 09：SmartPhone
                         */
                        DVC_TYP: string;
                        /** 取消しする作品のコード */
                        SKHN_CD: string;
                        /** 取消しする決済の管理番号 */
                        KSSIKNR_NO: string;
                    }

                    export interface GiftCardCancelResult {
                        /** 凸版サービス返却値 */
                        tppnsrvcrspns: string;
                        /** ムビチケギフトカードID */
                        mvtkgftcrdId: string;
                        /** 利用前残高 */
                        ryumezndk: string;
                        /** 残高 */
                        zndk: string;
                        /** 承認番号 */
                        synnNo: string;
                        /** 処理要求日時 */
                        syrykyDt: string;
                        /** ギフトカードステータス */
                        giftcardstatus: string;

                    }
                }

                export class GiftCardService extends common.Service {
                    /**
                     * ムビチケギフトカード認証
                     * 
                     * @param {GiftCardIDAuthIn} args
                     */
                    giftCardIDAuth(params: models.GiftCardIDAuthIn, cb: (err, response, giftCardIDAuthResults: Array<models.GiftCardIDAuthResult>) => void): void;

                    /**
                     * ムビチケギフトカード取消
                     * 
                     * @param {Array<GiftCardCancelIn>} args
                     */
                    giftCardCancel(params: models.GiftCardCancelIn, cb: (err, response, giftCardCancelResults: Array<models.GiftCardCancelResult>) => void): void;
                }

                module GiftCardUtilities {
                    /** ムビチケギフトカード認証処理結果(成功) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_SUCCESS: string;
                    /** ムビチケギフトカード認証処理結果(残高不足) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_W00000: string;
                    /** ムビチケギフトカード認証処理結果(システムエラー) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR0: string;
                    /** ムビチケギフトカード認証処理結果(パラメータエラー) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR1: string;
                    /** ムビチケギフトカード認証処理結果(ロック失敗) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR2: string;
                    /** ムビチケギフトカード認証処理結果(エラー情報有り) */
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR3: string;

                    /** ギフトカードステータス(使用可能) */
                    export var GIFT_CARD_STATUS_SUCCESS: string;
                    /** ギフトカードステータス(残高不足?他決済使用中?) */
                    export var GIFT_CARD_STATUS_W00000: string;
                    /** ギフトカードステータス(該当カードなし) */
                    export var GIFT_CARD_STATUS_ERROR1: string;
                    /** ギフトカードステータス(認証番号NG) */
                    export var GIFT_CARD_STATUS_ERROR2: string;
                    /** ギフトカードステータス(有効期限切れ) */
                    export var GIFT_CARD_STATUS_ERROR3: string;
                    /** ギフトカードステータス(未アクティベート) */
                    export var GIFT_CARD_STATUS_ERROR4: string;
                    /** ギフトカードステータス(認証失敗) */
                    export var GIFT_CARD_STATUS_ERROR5: string;
                    /** ギフトカードステータス(同一種類重複不可) */
                    export var GIFT_CARD_STATUS_ERROR6: string;

                    /** 取消区分(ロック解除) */
                    export var TRKSH_TYP_UNLOCK: string;
                    /** 取消区分(取消) */
                    export var TRKSH_TYP_CANCEL: string;
                    /** 取消区分(障害取消) */
                    export var TRKSH_TYP_FAULT: string;
                }

            }

            module Mail {
                module models {
                    export interface DeliveryIn {
                        /** 決済管理番号 */
                        KSSIKNR_NO: string;
                        /** 購入管理番号 */
                        KNYKNR_NO: string;
                        /** 宛先 */
                        MAILADDRESS: string;
                        /** 宛名 */
                        ADDRESS: string;
                        /** 作品名 */
                        SKHN_NM: string;
                        /** 鑑賞券情報(ItemArray) */
                        KNSHKN_INFO: {
                            KNSHKN: Array<{
                                /** 券種区分名称 */
                                KNSHKBN_NM: string;
                                /** 購入枚数 */
                                KNYMI_NUM: string;
                            }>;
                        };
                        /**
                         * QR コード URL
                         */
                        QRCD_URL: string;
                        /**
                         * デジタルインセンティブ URL
                         */
                        DGTLINCNTV_URL: string;
                        /** デバイス区分 */
                        DVC_TYP: string;
                        /** メールテンプレートコード */
                        MLTMPLT_CD: string;
                        /** 合計金額 */
                        TOTALCOST: string;
                        /** 作品コード */
                        SKHN_CD: string;
                    }
                }

                export class MailService extends common.Service {
                    /**
                     * 購入管理番号メール送信
                     *
                     * @param {DeliveryIn} args
                     */
                    delivery(params: models.DeliveryIn, cb: (err, response, isSuccess: boolean) => void): void;
                }

            }

            module Purchase {
                module models {
                    export interface GetGmoEntryTranIn {
                        /** 決済管理番号 */
                        KSSIKNR_NO: string;
                        /** 決済方法区分 */
                        KSSIHH_TYP: string;
                        /** ご利用金額 */
                        GRYKNGK: string;
                        /** 購入者コード */
                        KNYSH_CD: string;
                        /** 会員フラグ */
                        KIIN_FLG: string;
                        /** 併用決済フラグ */
                        HIYKSSI_FLG: string;
                        /** 併用決済区分 */
                        HIYKSSI_TYP: string;
                        /** 作品コード */
                        SKHN_CD: string;
                    }

                    export interface GetGmoEntryTranResult {
                        /** 決済管理番号 */
                        kssiknrNo: string;
                        /** 取引ＩＤ */
                        accessId: string;
                        /** 取引パスワード */
                        accessPwd: string;
                        /** 決済エラー種類区分 */
                        kssierrrshriTyp: string;
                        /** 決済エラーメッセージ本文 */
                        kssierrrmssgTxt: string;
                    }

                    export interface RegisterPurchaseInfoIn {
                        /** 決済管理番号 */
                        KSSIKNR_NO: string;
                        /**
                         * 決済代行会社が取引を識別するために発行する ID
                         */
                        ACCESS_ID: string;
                        /** 決済代行会社が取引を識別するために発行するパスワード */
                        ACCESS_PWD: string;
                        /** 作品コード */
                        SKHN_CD: string;
                        /** 鑑賞券管理番号 */
                        KNSHKNKNR_NO: string;
                        /** 鑑賞券情報 */
                        KNSHKN_INFO: {
                            KnshknInfo: Array<{
                                KNSHKNKNRMISI_NO: string;
                                KNSH_TYP: string;
                                KNYMI_NUM: string;
                                KNSHKNHMBI_UNIP: string;
                            }>;
                        };
                        /**
                         * 会員フラグ(0:非会員 1:会員)
                         */
                        KIIN_FLG: string;
                        /** 決済方法区分 */
                        KSSIHH_TYP: string;
                        /** 購入者姓名称 */
                        KNYSHSI_NM: string;
                        /** 購入者名名称 */
                        KNYSHMI_NM: string;
                        /** 購入者姓カナ名称 */
                        KNYSHSI_KNNM: string;
                        /** 購入者名カナ名称 */
                        KNYSHMI_KNNM: string;
                        /** 購入者ＰＣメールアドレス */
                        KNYSHPC_MLADDR: string;
                        /** 購入者携帯メールアドレス */
                        KNYSHKITI_MLADDR: string;
                        /** 購入者市外局番号 */
                        KNYSHSHGIKYK_NO: string;
                        /** 購入者市内局番号 */
                        KNYSHSHNIKYK_NO: string;
                        /** 購入者加入者番号 */
                        KNYSHKNYSH_NO: string;
                        /** 購入日時（yyyy/mm/ddThh24:mm:ss） */
                        KNY_DT: string;
                        /** チケットの販売チャネル */
                        HMBICHNNL_TYP: string;
                        /** チケット販売会社のコード */
                        HMBGISH_CD: string;
                        /** 決済を行った日時（yyyy/mm/ddThh24:mm:ss） */
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
                        /** 購入チケットの合計金額 */
                        GRYKNGK: string;
                        /** 購入したデバイスの区分 */
                        KNYDVC_TYP: string;
                        /**
                         * au 簡単決済の支払方法
                         */
                        AU_PAYMETHOD: string;
                        /** ギフトカード情報 */
                        GFTCRD_INFO: {
                            GftcrdInfo: Array<{
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
                            }>;
                        };
                        /**
                         * デバイス区分 
                         */
                        DVC_TYP: string;
                        /**
                         * 併用決済フラグ(0:単独決済 1:併用決済)
                         */
                        HIYKSSI_FLG: string;
                        /** 併用決済方法 */
                        HIYKSSIHH_TYP: string;
                        /** 併用決済で使用したムビチケオンラインギフトカードの決済金額合計 */
                        HIYKSSIRYGKI_MNY: string;
                        /** WebMoney決済情報 */
                        WEBMONEYKSSIINFO: WebmoneykssiInfo;
                        /**
                         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
                         */
                        TKTNCDKKH_NO: string[];
                    }

                    interface WebmoneykssiInfo {
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

                    export interface RegisterPurchaseInfoResult {
                        /** 購入管理番号 */
                        knyknrNo: string;
                        /** デジタルインセンティブダウンロード画面ＵＲＬ */
                        dgtlincntvdwnlodgmnUrl: string;
                        /** 決済エラー種類区分 */
                        kssierrrshriTyp: string;
                        /** 決済エラーメッセージ */
                        kssierrrmssgTxt: string;
                    }
                }

                export class PurchaseService extends common.Service {
                    /**
                     * 代行会社取引登録呼出
                     *
                     * @param {GetGmoEntryTranIn} args
                     */
                    getGmoEntryTran(params: models.GetGmoEntryTranIn, cb: (err, response, result: models.GetGmoEntryTranResult) => void): void;

                    /**
                     * 購入情報登録
                     *
                     * @params {RegisterPurchaseInfoIn} args
                     */
                    registerPurchaseInfo(params: models.RegisterPurchaseInfoIn, cb: (err, response, registerPurchaseInfoResult: models.RegisterPurchaseInfoResult) => void): void;
                }

                module PurchaseUtilities {
                    /** 決済方法区分 */
                    export var KSSIHH_TYP_CREDIT_CARD: string;
                    /** 決済方法区分 */
                    export var KSSIHH_TYP_AU: string;
                    /** 決済方法区分 */
                    export var KSSIHH_TYP_DOCOMO: string;
                    /** 決済方法区分(ムビチケオンラインギフトカード) */
                    export var KSSIHH_TYP_GIFT_CARD: string;
                    /** 決済方法区分 */
                    export var KSSIHH_TYP_WEB_MONEY: string;

                    /** 購入デバイス区分(PC) */
                    export var KNYDVC_TYP_PC: string;
                    /** 購入デバイス区分(携帯電話) */
                    export var KNYDVC_TYP_MB: string;
                    /** 購入デバイス区分(SmartPhone) */
                    export var KNYDVC_TYP_SP: string;
                    /** 購入デバイス区分(法人券) */
                    export var KNYDVC_TYP_CT: string;
                    /** 購入デバイス区分(カード券) */
                    export var KNYDVC_TYP_MC: string;
                    /** 購入デバイス区分(マーケットプレイス) */
                    export var KNYDVC_TYP_AMZN: string;

                    /** チケットの販売チャネル(ムビチケサイト) */
                    export var HMBICHNNL_TYP_MVTK_SITE: string;

                    /** 販売会社コード(ムビチケ) */
                    export var HMBGISH_CD_MVTK: string;

                    /** カード情報入力区分(入力された情報を使用) */
                    export var CRDTCRDINPUTKBN_INPUT: string;
                    /** カード情報入力区分(登録済みの情報を使用) */
                    export var CRDTCRDINPUTKBN_REGISTERED: string;

                    /** メール送付フラグ */
                    export var MLSF_FLG_PC: string;
                    /** メール送付フラグ */
                    export var MLSF_FLG_MOBILE: string;
                    /** メール送付フラグ */
                    export var MLSF_FLG_PC_AND_MOBILE: string;

                    /** 本人認証サービス対応区分(対応している) */
                    export var AUTHENTICATION_SERVICE_SUPPORT: string;
                    /** 本人認証サービス対応区分(対応していない) */
                    export var AUTHENTICATION_SERVICE_NOT_SUPPORT: string;

                    /** 決済エラー種類区分(顧客都合によるエラー) */
                    export var CLIENT_ERROR: string;
                    /** 決済エラー種類区分(システムエラー全般) */
                    export var SYSTEM_ERROR: string;

                    /** 回答方式区分(選択式) */
                    export var KITHSHK_TYP_CHOICE: string;
                    /** 回答方式区分(記述式) */
                    export var KITHSHK_TYP_TEXT: string;

                    /**  */
                    export function getMethods(): Object;

                    /**
                     * 対応している決済区分か判定
                     *
                     * @param {string} kssiTyp 決済区分
                     * @return {boolean}
                     */
                    export function isAvailableMethod(kssiTyp: string): boolean;
                }

            }

            module Bonus {
                module models {
                    interface IKnshknInfo {
                        KNSH_TYP: string;
                        KNYMI_NUM: string;
                    }

                    export interface PreserveCodeIn {
                        /**
                         * トークンID (購入フローユニークID)
                         */
                        TKN_ID: string;
                        /**
                         * 作品コード (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済)
                         */
                        SKHN_CD: string;
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

                    export interface PreserveCodeResult {
                        /**
                         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
                         */
                        tktncdkkhNo: string[] = [];
                        /**
                         * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
                         */
                        tktnzikjkymsgTxt: string[] = [];
                    }
                }

                export class BonusGrantingService extends common.Service {
                    /**
                     * 特典コード確保
                     *
                     * @param {PreserveCodeIn} args
                     */
                    preserveCode(params: models.PreserveCodeIn, cb: (err, response, result: models.PreserveCodeResult) => void): void;
                }
            }

            module TicketChange {
                module models {
                }

                export class TicketChangeService extends common.Service {
                }
            }

            module Util {
                module models {
                    export interface CreateQrCodeIn {
                        /** 購入管理番号 */
                        KNYKNR_NO: string;
                        /** PINコード */
                        PIN_CD: string;
                        /** 作品コード */
                        SKHN_CD: string;
                    }
                }

                export class UtilService extends common.Service {
                    /**
                     * 電子券QRコード生成
                     *
                     * @param {CreateQrCodeIn} args
                     */
                    createQrCode(params: models.CreateQrCodeIn, cb: (err, response, qrcdUrl: string) => void): void;
                }
            }
        }


        /**
         * サービスビルダー初期化
         * 
         * @param {string} endpoint
         * @param {string} endpoint2
         */
        export function initialize(endpoint: string, endpoint2: string): void;
        export function createInstance(): typeof mvtkservice;
        export function getCookie(): string;
        export function setCookie(cookie: string): void;

        /**
         * デジタルインセンティブサービスを生成する
         */
        export function createDigitalIncentiveDownloadService(): services.DigitalIncentiveDownload.DigitalIncentiveDownloadService;

        /**
         * 作品サービスを生成する
         */
        export function createFilmService(): services.Film.FilmService;

        /**
         * ギフトカードサービスを生成する
         */
        export function createGiftCardService(): services.GiftCard.GiftCardService;

        /**
         * 新ギフトカードサービスを生成する
         */
        export function createGiftCardService2(): services2.GiftCard.GiftCardService;

        /**
         * 問い合わせサービスを生成する
         */
        export function createInquiryService(): services.Inquiry.InquiryService;

        /**
         * メールサービスを生成する
         */
        export function createMailService(): services2.Mail.MailService;

        /**
         * 会員情報サービスを生成する
         */
        export function createMemberInfoService(): services.MemberInfo.MemberInfoService;

        /**
         * ユーザー作品履歴サービスを生成する
         */
        export function createMovieLogService(): services.MovieLog.MovieLogService;

        /**
         * 購入サービスを生成する
         */
        export function createPurchaseService(): services.Purchase.PurchaseService;

        /**
         * 新購入サービスを生成する
         */
        export function createPurchaseService2(): services2.Purchase.PurchaseService;

        /**
         * 会員登録サービスを生成する
         */
        export function createRegisterMemberService(): services.RegisterMember.RegisterMemberService;

        /**
         * お直りサービスを生成する
         */
        export function createTicketChangeService(): services2.TicketChange.TicketChangeService;

        /**
         * ユーティリティサービスを生成する
         */
        export function createUtilService(): services.Util.UtilService;

        /**
         * 新ユーティリティサービスを生成する
         */
        export function createUtilService2(): services2.Util.UtilService;

        /**
         * ウェブマネーサービスを生成する
         */
        export function createWebMoneyService(): services.WebMoney.WebMoneyService;

        /**
         * 特典コードサービスを生成する
         */
        export function createBonusGrantingService(): services.Bonus.BonusGrantingService;

        export import Constants = common.util.constants;
        export import Util = common.util.util;

        export import DigitalIncentiveDownloadUtilities = services.DigitalIncentiveDownload.DigitalIncentiveDownloadUtilities;
        export import FilmUtilities = services.Film.FilmUtilities;
        export import InquiryUtilities = services.Inquiry.InquiryUtilities;
        export import MemberInfoUtilities = services.MemberInfo.MemberInfoUtilities;
        export import GiftCardUtilities = services2.GiftCard.GiftCardUtilities;
        export import PurchaseUtilities = services2.Purchase.PurchaseUtilities;
    }

    export = mvtkservice;
}
