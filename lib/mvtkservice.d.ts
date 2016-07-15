declare module "mvtkservice" {
    module mvtkservice {
        module common {
            module util {
                module util {
                }

                module constants {
                    export var DVC_TYP_PC: string;
                    export var DVC_TYP_MOBILE: string;
                    export var DVC_TYP_SP: string;

                    export var RESULT_INFO_STATUS_SUCCESS: string;
                    export var RESULT_INFO_STATUS_CRITICAL_ERROR: string;
                    export var RESULT_INFO_STATUS_CHECK_ERROR: string;
                    export var RESULT_INFO_STATUS_REPLICATION_ERROR: string;
                    export var RESULT_INFO_STATUS_CLIENT_ERROR: string;
                    export var RESULT_INFO_STATUS_OVERFLOW_ERROR: string;

                    export var AU_RESPONSE_STATUS_REQSUCCESS: string;
                    export var AU_RESPONSE_STATUS_AUTHPROCESS: string;
                    export var AU_RESPONSE_STATUS_AUTH: string;
                    export var AU_RESPONSE_STATUS_CAPTURE: string;
                    export var AU_RESPONSE_STATUS_PAYFAIL: string;

                    export var AU_PAY_METHOD_TOTALING: string;
                    export var AU_PAY_METHOD_CREDIT_CARD: string;
                    export var AU_PAY_METHOD_WEB_MONEY: string;

                    export var DOCOMO_RESPONSE_STATUS_REQSUCCESS: string;
                    export var DOCOMO_RESPONSE_STATUS_AUTHPROCESS: string;
                    export var DOCOMO_RESPONSE_STATUS_AUTH: string;
                    export var DOCOMO_RESPONSE_STATUS_CAPTURE: string;
                    export var DOCOMO_RESPONSE_STATUS_PAYFAIL: string;

                    export var DOCOMO_PAY_METHOD_TOTALING: string;
                    export var DOCOMO_PAY_METHOD_CREDIT_CARD: string;
                    export var DOCOMO_PAY_METHOD_WEB_MONEY: string;

                    export var TDFKN_INFO: Array<{CD: string, NM: string}>;

                    export var KIIN_MLADDR_MB_DOMAINS: Array<string>;

                    export var MLTMPLT_CD_PURCHASE_COMPLETE: string;
                    export var MLTMPLT_CD_KNYKNR_NO_TRANSFER: string;
                    export var MLTMPLT_CD_PURCHASE_COMPLETE_MOBILE: string;
                    export var MLTMPLT_CD_KNYKNR_NO_TRANSFER_MOBILE: string;                }

            }
        }

        module services {
            module DigitalIncentiveDownload {
                module models {
                    export interface GetDigitalIncentiveDownloadIn {}
                    export interface GetDigitalIncentiveDownloadResult {}
                    export interface GetDigitalIncentiveDownloadLinkListIn {}
                    export interface GetDigitalIncentiveDownloadLinkListResult {}
                }

                export class DigitalIncentiveDownloadService {
                    getDigitalIncentiveDownload(params: models.GetDigitalIncentiveDownloadIn, cb: (err, response, getDigitalIncentiveDownloadResult: any) => any): void;
                    getDigitalIncentiveDownloadLinkList(params: models.GetDigitalIncentiveDownloadLinkListIn, cb: (err, response, getDigitalIncentiveDownloadLinkListResult: any) => any): void;
                }

                module DigitalIncentiveDownloadUtilities {
                }

            }


            module Film {
                module models {
                    export interface FilmResult {
                        /**
                         * 作品コード
                         */
                        skhnCd: string;
                        /**
                         * デバイス区分
                         */
                        dvcTyp: string;
                        /**
                         * 作品名称
                         */
                        skhnNm: string;
                        /**
                         * 全国公開開始年月日(YYYY/MM/DD)
                         */
                        znkkkkikishYmd: string;
                        /**
                         * 全国公開時期記述
                         */
                        znkkkkijkDspt: string;
                        /**
                         * ポスター画像URL
                         */
                        pstrgzUrl: string;
                        /**
                         * 作品コメント本文(解説)
                         */
                        skhncmmntKistsTxt: string;
                        /**
                         * 作品コメント本文(物語)
                         */
                        skhncmmntMngtrTxt: string;
                        /**
                         * 作品コメント本文(注釈-共通)
                         */
                        skhncmmntChshkKytsu: string;
                        /**
                         * 作品コメント本文(注釈-作品詳細)
                         */
                        skhncmmntChshkShsi: string;
                        /**
                         * 作品コメント本文(セールスコピー1)
                         */
                        skhncmmntSlscpy1Txt: string;
                        /**
                         * 作品コメント本文(セールスコピー2)
                         */
                        skhncmmntSlscpy2Txt: string;
                        /**
                         * 作品コメント本文(セールスコピー3)
                         */
                        skhncmmntSlscpy3Txt: string;
                        /**
                         * キャスト情報（itemArray）
                         */
                        cstInfo: Array<FilmCastResult>;
                        /**
                         * スタッフ情報（itemArray）
                         */
                        stffInfo: Array<FilmStaffResult>;
                        /**
                         * フォトギャラリー情報（itemArray）
                         */
                        phtgllryInfo: Array<FilmPhotoGalleryResult>;
                        /**
                         * 作品名オリジナル名称
                         */
                        skhmmiorgnlNm: string;
                        /**
                         * 制作年
                         */
                        siskY: string;
                        /**
                         * 製作国名称
                         */
                        siskkkNm: string;
                        /**
                         * 配給会社名称
                         */
                        hikygishNm: string;
                        /**
                         * 上映時間分
                         */
                        jeiTmm: string;
                        /**
                         * 映倫レイティングコード
                         */
                        eirnrtngCd: string;
                        /**
                         * 公式サイトURL
                         */
                        kshkstUrl: string;
                        /**
                         * 作品著作権記述
                         */
                        skhnchskknDspt: string;
                        /**
                         * ジャンル情報（itemArray）
                         */
                        gnrInfo: Array<FilmGenreResult>;
                        /**
                         *  観たい登録者数
                         */
                        mtitrksyNum: string; //
                        /**
                         * 観たい登録済フラグ
                         */
                        mtitrkzmFlg: string;
                        /**
                         * 鑑賞券販売フラグ
                         */
                        knshknhmbiFlg: string;
                        /**
                         * 鑑賞券販売開始日時
                         */
                        knshknhmbikishYmd: string;
                        /**
                         * 鑑賞券販売終了年月日
                         */
                        knshknhmbishryYmd: string;
                        /**
                         * ECサイト販売承認済みフラグ
                         */
                        ecsthmbishnnzmFlg: string;
                        /**
                         * 座席予約終了フラグ
                         */
                        zskyykshryFlg: string;

                        // 以下は、作品検索APIのOUTにのみ含まれる(詳細APIには含まれない)
                        /**
                         * 予告編URL
                         */
                        ykkhnUrl: string;
                        /**
                         * 予告編番号
                         */
                        ykkhnNo: string;
                        /**
                         * 購入特典フラグ
                         */
                        knytktnFlg: string;
                        /**
                         * 観たいフラグ
                         */
                        mtiFlg: string;
                        /**
                         * 予告編有りフラグ
                         */
                        ykkhnarFlg: string;
                        /**
                         * 売れ筋ランキング
                         */
                        urszrnkngNo: string;
                        /**
                         * 期待度ランキング
                         */
                        ktidrnkngNo: string;
                        /**
                         * 注目度ランキング
                         */
                        chmkdrnkngNo: string;
                        /**
                         * 作品アクセスランキング順位
                         */
                        skhnaccssrnkngNo: string;
                        /**
                         * 予告編アクセスランキング順位
                         */
                        ykkhnaccssrnkngNo: string;
                        /**
                         * 話題・感想数
                         */
                        wdiknsNum: string;
                        /**
                         * 話題性ランキング順位
                         */
                        wdisirnkngNo: string;
                        /**
                         * 興行ランキング順位
                         */
                        kgyrnkngNo: string;
                        /**
                         * 鑑賞券情報(itemArray)
                         */
                        knshknInfo: Array<TicketInfoResult>;

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

                        getCastNames(): string;

                        /**
                         * 監督名リストを取得する
                         */
                        getDirectors(): Array<string>;

                        /**
                         * スタッフデータを生成
                         */
                        getStaffs(): Array<FilmStaffResult>;
                    }

                    export interface FilmCastResult {
                        cstHyjjnNo: string; // キャスト表示順番号
                        cstJmbtsNm: string; // キャスト人物名称
                        cstYkNm: string; // キャスト役名称
                        cstShenFlg: string; // キャスト主演フラグ
                        cstJmbtsCd: string; // キャスト人物コード
                    }
                    export interface FilmGenreResult {
                        gnrTyp: string; // ジャンル区分
                        gnrKbnNm: string; // ジャンル区分名称
                    }
                    export interface FilmPhotoGalleryResult {
                        gzNo: string; // 画像番号
                        gzflUrl: string; // 画像ファイルURL

                    }
                    export interface FilmStaffResult {
                        stffHyjjnNo: string; // スタッフ表示順番号
                        stffJmbtsNm: string; // スタッフ人物名称
                        stffYkwrNm: string; // スタッフ役割名称
                        stffJmbtsCd: string; // スタッフ人物コード
                    }

                    export interface TicketInfoResult {
                        /**
                         * 鑑賞券管理番号
                         */
                        knshknknrNo: string;
                        /**
                         * チケット媒体区分
                         */
                        tcktbitiTyp: string;
                        /**
                         * 鑑賞券オーナー区分
                         */
                        knshknownrTyp: string;
                        /**
                         * 鑑賞券オーナーコード
                         */
                        knshknownrCd: string;
                        /**
                         * 鑑賞券販売開始年月日(20160523)
                         */
                        knshknhmbikishYmd: string;
                        /**
                         * 鑑賞券販売開始時刻 Hi形式(sがないので注意)(0000)
                         */
                        knshknhmbikishHms: string;
                        /**
                         * 鑑賞券販売終了年月日(20160731)
                         */
                        knshknhmbishryYmd: string;
                        /**
                         * チェーンマスタコード
                         */
                        chanmstCd: string;
                        /**
                         * 預り金支払タイミング区分
                         */
                        azkrknshhritmngTyp: string;
                        /**
                         * 預り金支払先区分
                         */
                        azkrknshhriskTyp: string;
                        /**
                         * ３Ｄメガネ代金単価(100.000)
                         */
                        thredmgndiknUnip: string;
                        /**
                         * 販売時３Ｄメガネ代金支払先区分
                         */
                        hmbijthredmgndiknshhriskTyp: string;
                        /**
                         * 未着券精算年月日
                         */
                        mchkknsisnYmd: string;
                        /**
                         * 興行ギフト券フラグ
                         */
                        kgygftknFlg: string;
                        /**
                         * 興行ギフト券有効期間
                         */
                        kgygftknykTm: string;
                        /**
                         * 購入上限枚数
                         */
                        knyjgmmiNum: string;
                        /**
                         * ECサイト販売承認済フラグ
                         */
                        ecsthmbishnnzmFlg: string;
                        /**
                         * ECサイト販売承認者コード
                         */
                        ecsthmbishnnshCd: string;
                        /**
                         * ECサイト販売承認日時(2016-05-23 21:26:33)
                         */
                        ecsthmbishnnDt: string;
                        /**
                         * 登録ステータス区分
                         */
                        trksttsTyp: string;
                        /**
                         * 鑑賞券明細情報(itemArray)
                         */
                        knshkmmisiInfo: Array<TicketInfoTypeResult>;
                        /**
                         * 券種情報(itemArray)
                         */
                        knshInfo: Array<TicketInfoTypeResult>;

                        /**
                         * 販売状態かどうかを取得する
                         *
                         * @return {boolean}
                         */
                        isOnSale(): boolean;
                    }

                    export interface TicketInfoTypeResult {
                        knshknknrmisiNo: string; // 鑑賞券管理明細番号
                        knshTyp: string; // 券種区分
                        shhziTyp: string; // 消費税区分
                        shhziRt: string; // 消費税率
                        shhziUnip: string; // 消費税単価
                        mvitckthikyftntsuryUnip: string; // ムビチケ配給負担手数料単価
                        mvitcktkgyftntsuryUnip: string; // ムビチケ興行負担手数料単価
                        mvitcktusrtsuryUnip: string; // ムビチケユーザ手数料単価
                        sisnjknRmk: string; // 精算条件備考
                        parknFlg: string; // ペア券フラグ
                        knshknhmbiUnip: string; // 鑑賞券販売単価
                        knshkbnNm: string; // 券種区分名称
                        eishhshkTyp: string; // 映写方式区分
                        knshkmmiNum: string; // 鑑賞券枚数
                        parkntntiknshFlg: string; // ペア券単体券種フラグ
                        kmawsskknshTyp: string; // 組合せ先券種区分
                    }

                    export interface BnnrInfoResult {
                        /**
                         * デバイス区分
                         */
                        dvcTyp: string;
                        /**
                         * バナーコード
                         */
                        bnnrCd: string;
                        /**
                         * バナー名称
                         */
                        bnnrNm: string;
                        /**
                         * バナー表示箇所区分
                         */
                        bnnrhyjkshTyp: string;
                        /**
                         * バナー画像URL
                         */
                        bnnrgzUrl: string;
                        /**
                         * バナーリンク先URL
                         */
                        bnnrlnkskUrl: string;
                        /**
                         * バナー説明本文
                         */
                        bnnrstsmiTxt: string;
                        /**
                         * バナー掲載開始年月日
                         */
                        bnnrkisikishYmd: string;
                        /**
                         * バナー掲載終了年月日
                         */
                        bnnrkisishryYmd: string;

                    }
                    export interface GetTrailerDetailResult {}
                    export interface DgtlincntvInfoResult {
                        dvcTyp: string; // デバイス区分
                        dgtlincntvCd: string; // デジタルインセンティブコード
                        dgtlincntvTtl: string; // デジタルインセンティブタイトル
                        dgtlincntvstsmiTxt: string; // デジタルインセンティブ説明本文
                        smplqzUrl: string; // サンプル画像URL
                        dgtlincntvknykishYmd: string; // デジタルインセンティブ購入開始年月日
                        dgtlincntvknyshryYmd: string; // デジタルインセンティブ購入終了年月日
                        dgtlincntvdwnlodykTm: string; // デジタルインセンティブダウンロード有効期間
                        dgtlincntvdwnlodjgnkiNum: string; // デジタルインセンティブダウンロード上限回数
                        skhndgtlincntvRmk: string; // 作品デジタルインセンティブ備考

                    }
                }

                export class FilmService {
                    getFilmDetail(skhnCd: string, dvcTyp: string, cb: (err, response, result: any) => any): void;
                    getFilmTopPage(dvcTyp: string, cb: (err, response, result: Array<any>) => any): void;
                    getTicketInfoList(skhnCd: string, cb: (err, response, result: Array<any>) => any): void;
                    getBannerList(skhnCd: string, dvcTyp: string, cb: (err, response, bnnrInfoResults: Array<any>) => any): void;
                    getTrailerDetail(skhnCd, dvcTyp, cb: (err, response, getTrailerDetailResult: any) => any): void;
                    getDigitalIncentiveList(skhnCd: string, dvcTyp: string, cb: (err, response, dgtlincntvInfoResults: Array<any>) => any): void;
                }

                module FilmUtilities {
                    export var TCKTBITI_TYP_ELECTRON_TICKET: string;
                    export var TCKTBITI_TYP_ELECTRON_VOUCHAER: string;
                    export var TCKTBITI_TYP_CARD_TICKET: string;

                    export var BNNRHYJKSH_TYP_PC_FILM_RIGHT: string;
                    export var BNNRHYJKSH_TYP_PC_FILM_BOTTOM: string;
                    export var BNNRHYJKSH_TYP_PC_PURCHASE: string;

                    export var BNNRHYJKSH_TYP_SP_UNUSED: string;
                    export var BNNRHYJKSH_TYP_SP_FILM: string;
                    export var BNNRHYJKSH_TYP_SP_PURCHASE: string;
                }

            }

            module GiftCard {
                module models {
                    export interface MvtkGiftCardBalanceInquiryResult {
                        /**
                         * 凸版サービス返却値
                         */
                        tppnsrvcrspns: string;
                        /**
                         * ムビチケギフトカードID
                         */
                        mvtkgftcrdId: string;
                        /**
                         * ムビチケギフトカードPINコード
                         */
                        mvtkgftcrdpinCd: string;
                        /**
                         * ムビチケギフトカード券種区分
                         */
                        mvtkgftcrdknshTyp: string;
                        /**
                         * ムビチケギフトカード券種名称
                         */
                        mvtkgftcrdknshNm: string;
                        /**
                         * 有効期限(2017/12/01)
                         */
                        ykkgnYmd: string;
                        /**
                         * 残高
                         */
                        zndk: string;
                        /**
                         * 初回チャージ金額
                         */
                        shkichrgkngk: string;

                        /**
                         * 利用明細情報(itemArray)
                         */
                        rymisiInfo: Array<RymisiInfo>;


                    }

                    interface RymisiInfo {
                        /**
                         * ギフトカード決済管理番号
                         */
                        GFTCRDKSSIKNR_NO: string;
                        /**
                         * 代行決済ステータス区分
                         * 41:減算（売上）/42:取消/43:障害取消
                         */
                        DIKKSSISTTS_TYP: string;
                        /**
                         * 使用日付(2017/12/01)
                         */
                        SHY_YMD: string;
                        /**
                         * 作品コード
                         */
                        SKHN_CD: string;
                        /**
                         * 作品名称
                         */
                        SKHN_NM: string;
                        /**
                         * 使用金額
                         */
                        SHY_MNY: string;
                        /**
                         * 非表示フラグ
                         * 0：画面に表示する
                         * 1：画面に表示しない
                         */
                        HHYJ_FLG: string;
                    }
                    export interface MvtkGiftCardEntryIn {
                        /**
                         * ギフトカードID情報
                         */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkgftcrdInfoIn: Array<{
                                /**
                                 * ギフトカード決済管理番号
                                 */
                                GFTCRDKSSIKNR_NO: string;
                                /**
                                 * ムビチケギフトカードPINコード
                                 */
                                MVTKGFTCRDPIN_CD: string;
                                /**
                                 * ムビチケギフトカードID
                                 */
                                MVTKGFTCRD_ID: string;
                                /**
                                 * 利用金額
                                 */
                                RYUKNGK: string;
                            }>;
                        };
                        /**
                         * ご利用金額
                         */
                        DVC_TYP: string;

                    }
                    export interface MvtkGiftCardEntryResult {
                        tppnsrvcrspns: string; // 凸版サービス返却値
                        mvtkgftcrdId: string; // ムビチケギフトカードID
                        mvtkgftcrdpinCd: string; // ムビチケギフトカード認証番号
                        gftcrdkssiknrNo: string; // ギフト決済管理番号
                        ryukngk: string; // 利用金額
                        ryumezndk: string; // 利用前残高
                        zndk: string; // 残高
                        synnNo: string; // 承認番号
                        syrykyDt: string; // 処理要求日時
                        giftcardstatus: string; // ギフトカードステータス

                    }
                }

                export class GiftCardService {
                    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string, cb: (err, response, mvtkGiftCardBalanceInquiryResult: any) => any): void;
                    mvtkGiftCardEntry(params: models.MvtkGiftCardEntryIn, cb: (err, response, mvtkGiftCardEntryResults: Array<any>) => any): void;
                }

            }

            module Inquiry {
                module models {
                    export interface SendInquiryMailIn {}
                }

                export class InquiryService {
                    sendInquiryMail(params: models.SendInquiryMailIn, cb: (err, resonse, isSuccess: boolean) => any): void;
                }

                module InquiryUtilities {
                }

            }

            module MemberInfo {
                module models {
                    export interface MemberInfoResult {
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
                    }

                    export interface EditMemberInfoIn {
                        nckNm?: string;
                        kiinsiNm: string;
                        kiimmiNm: string;
                        kiinsiKnnm: string;
                        kiimmiKnnm: string;
                        sibtsTyp: string;
                        kiinsiYmd: string;
                        kiinybnNo?: string;
                        tdfknCd: string;
                        kiinshkchsnAddr?: string;
                        kiimbnchAddr?: string;
                        kiinttmnAddr?: string;
                        kiinjshiDo?: string;
                        kiinjshkiDo?: string;
                        kiinshgikykNo: string;
                        kiinshnikykNo: string;
                        kiinknyshNo: string;
                        kiinMladdr: string;
                        kiinmladdrssdvcTyp: string;
                        kiinsbMladdr?: string;
                        kiinsbmladdrssdvcTyp?: string;
                        mlmgkbFlg: string;
                    }
                }

                export class MemberInfoService {
                    getMemberAuthorization(kiinMladdr: string, kiinPwd: string, cb: (err, resonse, kiinCd: string) => any): void;
                    getMemberInfoDetail(cb: (err, response, memberInfoResult: any) => any): void;
                    editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => any): void;
                    editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb: (err, response, isSuccess: boolean) => any): void;
                    sendPasswordResetRequestMail(kiinMladdr, cb: (err, response, isSuccess: boolean) => any): void;
                    getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp, cb: (err, response, kiinCd: string) => any): void;
                    editMemberInfo(params: models.EditMemberInfoIn, cb: (err, response, isSuccess: boolean) => any): void;
                }

                module MemberInfoUtilities {
                    export var KIINMLADDRSSDVC_TYP_PC: string;
                    export var KIINMLADDRSSDVC_TYP_MOBILE: string;

                    export var SIBTS_TYP_MEN: string;
                    export var SIBTS_TYP_WOMEN: string;
                }

            }

            module MovieLog {
                module models {
                    export interface GetFavoriteFilmListResult {
                        /**
                         * 会員コード
                         */
                        kiinCd: string;
                        /**
                         * レコード数
                         */
                        rcdNum: string;
                        /**
                         * 作品詳細情報(itemArray)
                         */
                        skhnInfo: Array<SkhnInfo>;

                    }

                    export interface SkhnInfo {
                        /**
                         * 作品コード
                         */
                        skhnCd: string;
                        /**
                         * 作品名称
                         */
                        skhnNm: string;
                        /**
                         * ポスター画像URL
                         */
                        pstrgzUrl: string;
                        /**
                         * 全国公開開始年月日
                         */
                        znkkkkikishYmd: string;
                        /**
                         * 全国公開時期記述
                         */
                        znkkkkijkDspt: string;
                        /**
                         * ＥＣサイト鑑賞券販売承認済フラグ
                         */
                        ecsthmbishnnzmFlg: string;
                        /**
                         * 鑑賞券販売開始日時(鑑賞券販売開始年月日＋鑑賞券販売開始時刻) YYYY-MM-DD hh:mm:ss
                         */
                        knshknhmbikishDt: string;
                        /**
                         * 鑑賞券販売終了年月日(YYYY/MM/DD)
                         */
                        knshknhmbishryYmd: string;
                        /**
                         * 観たい登録年月日(YYYY/MM/DD)
                         */
                        trkDt: string;
                        /**
                         * 感想ありフラグ
                         */
                        knsFlg: string;
                        /**
                         * 観たフラグ
                         */
                        mtaFlg: string;
                        /**
                         * 観たい登録者数
                         */
                        mtitrksyNum: string;
                        /**
                         * 観た登録者数
                         */
                        mtatrksyNum: string;
                        /**
                         * 購入ボタンフラグ
                         */
                        knyFlg: string;
                        /**
                         * 座席予約終了フラグ
                         */
                        zskyykshryFlg: string;
                    }

                    export interface GetUnusedTicketListResult {}
                    export interface ShyzmtcktInfoListResult {}
                }

                export class MovieLogService {
                    getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp, cb: (err, response, getFavoriteFilmListResult: any) => any): void;
                    getUnusedTicketList(kiinCd, dvcTyp, cb: (err, response, getUnusedTicketListResult: any) => any): void;
                    getSeatReservedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: any) => any): void;
                    getWatchedTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: any) => any): void;
                    getGiftTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: any) => any): void;
                    getExpiredTicketList(kiinCd, dvcTyp, cb: (err, response, shyzmtcktInfoListResult: any) => any): void;
                    registerFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => any): void;
                    deleteFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => any): void;
                    getFilmReviewList(skhnCd, kiinCd, rcdNum, shtkNum, cb: Function): void;
                    deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn, cb: Function): void;
                    getSeatReservationStatusList(mvilgNo, cb: Function): void;
                    getWatchRecordList(mvilgNo, cb: Function): void;
                    getSentGiftStatusList(mvilgNo, cb: Function): void;
                    createQrCodeInMovieLog(knyknrNo, cb: (err, response, qrcdUrl: string) => any): void;
                }

            }

            module Purchase {
                module models {
                    export interface CreditCardInfoResult {}
                    export interface TicketInfoResult {}
                    export interface GetGmoExecTranIn {
                        kssiknrNo: string;
                        kssihhTyp: string;
                        accessId: string;
                        accessPwd: string;
                        crdtcrdinputKbn: string;
                        httpAccept: string;
                        httpUserAgent: string;
                        dvcTyp: string;
                        crdtcrdNo?: string;
                        crdykkgn?: string;
                        scrtyCd?: string;
                        kiinCd?: string;
                        cardseq?: string;
                        knyshNm?: string;
                        shhnTyp?: string;
                    }
                    export interface GetGmoExecTranResult {
                        acsKbn: string; // 本人認証サービス対応区分
                        acsurl: string; // 本人認証パスワード入力画面URL
                        pareq: string; // 本人認証要求電文
                        md: string; // 取引ＩＤ
                        forwardCd: string; // 仕向先会社コード
                        tranDt: string; // 決済日時(形式：20160518133125)
                        approveNo: string; // 決済承認番号
                        tranId: string; // トランザクションＩＤ(形式1605181331111111111111878508：)
                        auaccssId: string; // au取引ID
                        autkn: string; // auトークン
                        austrtUrl: string; // au支払手続きインターフェイスURL
                        docomoaccssId: string; // ドコモ取引ID
                        docomotkn: string; // ドコモトークン
                        docomostrtUrl: string; // ドコモ支払手続きインターフェイスURL
                        kssierrrshriTyp: string; // 決済エラー種類区分
                        kssierrrmssgTxt: string; // 決済エラーメッセージ本文
                    }

                    export interface RegisterIchjknrInfoIn {
                        ACCESS_ID: string; // 取引ID
                        ACCESS_PWD: string; // 取引パスワード
                        TKN_ID: string; // トークンID
                        KSSIKNR_NO: string; // 決済管理番号
                        HYJCRD_NO?: string; // 表示カード番号
                        CRDMIGNN_NM?: string; // カード名義人名称
                        CRDJHHJ_FLG?: string; // カード情報保持フラグ
                        KNYSH_CD: string; // 購入者コード
                        KIIN_FLG: string; // 会員フラグ
                        KNYSHSI_NM: string; // 購入者姓名称
                        KNYSHMI_NM: string; // 購入者名名称
                        KNYSHSI_KNNM: string; // 購入者姓カナ名称
                        KNYSHMI_KNNM: string; // 購入者名カナ名称
                        KNYSHPC_MLADDR: string; // 購入者PCメールアドレス
                        KNYSHKITI_MLADDR: string; // 購入者携帯メールアドレス
                        KNYSHSHGIKYK_NO: string; // 購入者市外局番号
                        KNYSHSHNIKYK_NO: string; // 購入者市内局番号
                        KNYSHKNYSH_NO: string; // 購入者加入者番号
                        MLSF_FLG: string; // メール送付フラグ
                        SKHN_CD: string; // 作品コード
                        KNSHKNKNR_NO: string; // 鑑賞券管理番号
                        AZKRKNSHHRITMNG_TYP: string; // 預り金支払タイミング区分
                        AZKRKNSHHRISK_TYP: string; // 預り金支払先区分
                        THREDMGNDIKN_UNIP: string; // 3Dメガネ代金単価
                        HMBIJTHREDMGNDIKNSHHRISK_TYP: string; // 販売時3Dメガネ代金支払先区分
                        TICKETICHJKNR_LIST: ArrayOfTicketichjknrList; // チケット一時管理リスト
                    }

                    interface ArrayOfTicketichjknrList {
                        TicketichjknrList: Array<Ticketichjknr>;
                    }

                    interface Ticketichjknr {
                        KNSHKNKNR_NO: string; // 鑑賞券管理番号
                        KNSHKNKNRMISI_NO: string; // 鑑賞券管理明細番号
                        KNSHKNHMBI_UNIP: string; // 鑑賞券販売単価
                        MVITCKTHIKYFTNTSURY_UNIP: string; // ムビチケ配給負担手数料単価
                        MVITCKTKGYFTNTSURY_UNIP: string; // ムビチケ興行負担手数料単価
                        MVITCKTUSRTSURY_UNIP: string; // ムビチケユーザー手数料単価
                        SHHZI_RT: string; // 消費税率
                        SHHZI_TYP: string; // 消費税区分
                        SHHZI_UNIP: string; // 消費税単価
                        KNYMI_NUM: string; // 購入枚数
                    }

                    export interface SelectIchjknrInfoResult {}
                    export interface GetTsuryShhziInfoResult {
                        knshknknrmisiNo: string; // 鑑賞券管理明細番号
                        mvitckthikyftntsuryUnip: string; // ムビチケ配給負担手数料単価
                        mvitcktkgyftntsuryUnip: string; // ムビチケ興行負担手数料単価
                        mvitcktusrtsuryUnip: string; // ムビチケユーザー手数料単価
                        shhziRt: string; // 消費税率
                        shhziTyp: string; // 消費税区分
                        shhziUnip: string; // 消費税単価
                    }

                    export interface GetShhriInfoByKeyResult {
                        azkrknshhritmngTyp: string; // 預り金支払タイミング区分
                        azkrknshhriskTyp: string; // 預り金支払先区分
                        hmbijthredmgndiknshhriskTyp: string; // 販売時3Dメガネ代金支払先区分
                    }

                    export interface GMOCancelIn {
                        accessId: string; // 取引ＩＤ(決済代行会社が取引を識別するために発行するＩＤ)
                        accessPwd: string; // 取引パスワード(決済代行会社が取引を識別するために発行するパスワード)
                        kssihhTyp: string; // 決済方法区分
                        hiykssihhTyp: string; // 併用決済方法区分
                        kssiknrNo: string; // 決済管理番号
                        grykngk: string; // ご利用金額
                        tranDt: string; // 決済日時(2016/05/18 13:31:25)
                    }
                    export interface GetQuestionnaireListIn {
                        skhnCd: string; // 作品コード
                    }
                    export interface GetQuestionnaireListResult {
                        /**
                         * アンケート設問情報(itemArray)
                         */
                        qustinnarstsmnInfo: Array<QustinnarstsmnInfo>;

                    }

                    interface QustinnarstsmnInfo {
                        /**
                         * アンケート設問番号
                         */
                        QUSTINNARSTSMN_NO: string;
                        /**
                         * アンケート設問本文
                         */
                        QUSTINNARSTSMN_TXT: string;
                        /**
                         * 回答方式区分
                         */
                        KITHSHK_TYP: string;
                        /**
                         * アンケート表示形式区分
                         */
                        QUSTINNARHYJKISHK_TYP: string;
                        /**
                         * 回答上限数
                         */
                        KITJGN_NUM: string;
                        /**
                         * アンケート選択肢情報(itemArray)
                         */
                        QUSTINNARSNTKSH_INFO: Array<QustinnarsntkshInfo>;
                    }

                    interface QustinnarsntkshInfo {
                        /**
                         * 選択肢番号
                         */
                        SNTKSH_NO: string;
                        /**
                         * 選択肢名称
                         */
                        SNTKSH_NM: string;
                    }

                    export interface RegisterQuestionnaireIn {
                        /**
                         * 作品コード
                         */
                        skhnCd: string;

                        /**
                         * 購入管理番号
                         */
                        knyknrNo: string;

                        /**
                         * アンケート回答情報(Item Array)
                         */
                        qustinnarkitInfo: ArrayOfQustinnarkitInfo;

                        /**
                         * 購入者コード
                         */
                        knyshCd: string;

                        /**
                         * 期待コメント本文
                         */
                        kticmmntTxt: string;

                    }

                    interface ArrayOfQustinnarkitInfo {
                        QustinnarkitInfo: Array<QustinnarkitInfo>;
                    }

                    interface QustinnarkitInfo {
                        /**
                         * 回答方式区分
                         */
                        KITHSHK_TYP: string;
                        /**
                         * 記述回答本文
                         */
                        KJTSKIT_TXT: string;
                        /**
                         * アンケート設問番号
                         */
                        QUSTINNARSTSMN_NO: string;
                        /**
                         * 選択式アンケート回答情報(itemArray)
                         */
                        SNTKSHKQUSTINNARKIT_INFO: ArrayOfSntkshkqustinnarkitInfo;
                    }

                    interface ArrayOfSntkshkqustinnarkitInfo {
                        SntkshkqustinnarkitInfo: Array<SntkshkqustinnarkitInfo>;
                    }

                    interface SntkshkqustinnarkitInfo {
                        /**
                         * 選択肢番号
                         */
                        SNTKSH_NO: string;
                    }
                }

                export class PurchaseService {
                    isPurchaseDatetime(skhnCd: string, cb: (err, responnes, isOnSalse: boolean) => any): void;
                    getGmoSearchCard(kiinCd: string, cb: (err, response, creditCardInfoResult: any) => any): void;
                    getTicketTypeList(skhnCd, dvcTyp, cb: (err, response, result: any) => any): void;
                    saibanKssiknrNo(cb: (err, response, kssiknrNo: string) => any): void;
                    getGmoExecTran(params: models.GetGmoExecTranIn, cb: (err, response, GetGmoExecTranResult: any) => any): void;
                    getGmoSaveCard(kssiknrNo, kiinCd, mignn, cb: (err, response, isSuccess: boolean) => any): void;
                    registerIchjknr(params: models.RegisterIchjknrInfoIn, cb: (err, response, isSuccess: boolean) => any): void;
                    selectIchjknr(kssihhTyp, accessIdOrkssiknrNo, cb: (err, response, selectIchjknrInfoResults: Array<any>) => any): void;
                    deleteIchjknr(accessIds: Array<string>, cb: (err, response, isSuccess: boolean) => any): void;
                    getTsuryShhziInfo(knshknknrNo, cb: (err, response, getTsuryShhziInfoResults: Array<any>) => any): void;
                    getShhriInfoByKey(knshknknrNo, cb: (err, respones, getShhriInfoByKeyResult: any) => any): void;
                    gMOCancel(params: models.GMOCancelIn, cb: (err, response, isSuccess: boolean) => any): void;
                    getQuestionnaireList(params: models.GetQuestionnaireListIn, cb: (err, response, getQuestionnaireListResult: any) => any): void;
                    registerQuestionnaire(params: models.RegisterQuestionnaireIn, cb: (err, response, isSuccess: boolean) => any): void;
                }

            }

            module RegisterMember {
                module models {
                    export interface RegisterMemberTemporaryIn {
                        nckNm: string; // ニックネーム
                        kiinsiNm: string; // 会員姓名称
                        kiimmiNm: string; // 会員名名称
                        kiinsiKnnm: string; // 会員姓カナ名称
                        kiimmiKnnm: string; // 会員名カナ名称
                        sibtsTyp: string; // 性別区分
                        kiinsiYmd: string; // 会員生年月日(1999/01/01形式)
                        kiinybnNo: string; // 会員郵便番号(123-5678形式)
                        tdfknCd: string; // 都道府県コード
                        kiinshkchsnAddr: string; // 会員市区町村住所
                        kiimbnchAddr: string; // 会員番地住所
                        kiinttmnAddr: string; // 会員建物住所
                        kiinjshiDo: string; // 会員住所緯度
                        kiinjshkiDo: string; // 会員住所経度
                        kiinshgikykNo: string; // 会員市外局番号
                        kiinshnikykNo: string; // 会員市内局番号
                        kiinknyshNo: string; // 会員加入者番号
                        kiinMladdr: string; // 会員メールアドレス
                        kiinmladdrssdvcTyp: string; // 会員メールアドレスデバイス区分
                        kiinsbMladdr: string; // 会員サブメールアドレス
                        kiinsbmladdrssdvcTyp: string; // 会員サブメールアドレスデバイス区分
                        kiinPwd: string; // 会員パスワード
                        kiintrkmekssiknrNo: string; // 会員登録前決済管理番号
                        mlmgkbFlg: string; // 
                        kiintrkdvcTyp: string; // 会員登録デバイス区分
                    }
                }

                export class RegisterMemberService {
                    registerMemberTemporary(params: models.RegisterMemberTemporaryIn, cb: (err, resonse, kiinCd: string) => any): void;
                    sendMemberTemporaryCompletionMail(kiinCd: string, cb: (err, response, isSuccess: boolean) => any): void;
                    registerMemberProperly(hmbntrkyUrl: string, kiintrkdvcTyp: string, cb: (err, response, kiinCd: string) => any): void;
                }

            }

            module Util {
                module models {
                    export interface EncryptDataListIn {
                        /**
                         * 暗号化文字列リスト
                         */
                        list: Array<string>;
                    }

                    export interface GetCodeNameResult {}
                }

                export class UtilService {
                    // getPrefectureCode(prefectureCode, addBlank = false): void;
                    // getPrefectureCodeWithMvitckttio(prefectureCode, addBlank = false): void;
                    signIn(kiinCd: string, cb: (err, response, cookieString: string) => any): void;
                    signOut(cb: (err, response, isSuccess: boolean) => any): void;
                    createQrCode(knyknrNo: string, pinCd: string, cb: (err, response, qrcdUrl: string) => any): void;
                    encryptData(value: string): void;
                    encryptDataList(params: models.EncryptDataListIn, cb: (err, response, encryptedStrings: Array<string>) => any): void;
                    getCodeName(kmkTyp: string, typ: string, blnkarFlg: string, cb: (err, response, getCodeNameResult: any) => any): void;
                }

                export class UtilUtilities {
                }

            }

            module WebMoney {
                module models {
                    export interface WebMoneyEntryIn {
                        kssiknrNo: string; // 決済管理番号
                        knshknknrNo: string; // 鑑賞券管理番号
                        skhnNm: string; // 作品コード
                        dvcTyp: string; // 会員フラグ
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
                        rdirktUrl: string; // リダイレクトURL
                    }

                    export interface DecryptWebMoneyKssiInfoResult {
                        decryptedkssiinfo: string; // 
                        vrsinjh: string; // 
                        wbmnysettleCd: string; // 
                        tranDt: string; // 形式：YYYYMMDDHHmmss
                        wbmnymanagementNo: string; // 
                        sinyjshkbtsFlg: string; // 
                        shhnNum: string; // 
                        shhnCd: string; // 
                        hcchCd: string; // 
                    }
                }

                export class WebMoneyService {
                    webMoneyEntry(params: models.WebMoneyEntryIn, cb: (err, response, webMoneyEntryResult: any) => any): void;
                    decryptWebMoneyKssiInfo(encryptedKssiInfo, cb: (err, response, decryptWebMoneyKssiInfoResult: any) => any): void;
                }

            }

        }

        module services2 {

            module GiftCard {
                module models {
                    export interface GiftCardIDAuthIn {
                        /**
                         *  ギフトカードID情報
                         */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkGftcrdInfo: Array<{
                                /**
                                 * ムビチケギフトカードID
                                 */
                                MVTKGFTCRD_ID: string;
                                /**
                                 * ムビチケギフトカードPINコード
                                 */
                                MVTKGFTCRDPIN_CD: string;
                                /**
                                 * ギフトカード決済管理番号
                                 */
                                GFTCRDKSSIKNR_NO: string;
                            }>;
                        };

                        /**
                         * 利用金額
                         */
                        KSSIKNR_NO: string;
                        /**
                         * デバイス区分
                         */
                        RYUKNGK: string;
                        /**
                         * ご利用金額
                         */
                        DVC_TYP: string;
                        /**
                         * ロックフラグ
                         */
                        LOCK_FLG: string;
                        /**
                         * 併用決済フラグ
                         */
                        HIYKSSI_FLG: string;
                        /**
                         * 併用決済区分
                         */
                        HIYKSSI_TYP: string;
                        /**
                         * 購入者コード
                         */
                        KNYSH_CD: string;
                        /**
                         * 会員フラグ
                         */
                        KIIN_FLG: string;
                        /**
                         * 作品コード
                         */
                        SKHN_CD: string;
                    }

                    export interface GiftCardIDAuthResult {
                        /**
                         * 凸版サービス返却値
                         */
                        tppnsrvcrspns: string;
                        /**
                         * ムビチケギフトカードID
                         */
                        mvtkgftcrdId: string;
                        /**
                         * 残高
                         */
                        zndk: string;
                        /**
                         * 利用金額
                         */
                        ryukngk: string;
                        /**
                         * ギフトカードステータス
                         */
                        giftcardstatus: string;
                        /**
                         * 他決済利用金額
                         */
                        tkssiryukngk: string;

                    }
                    export interface GiftCardCancelIn {
                        /**
                         * ギフトカードID情報
                         */
                        MVTKGFTCRD_INFO_IN: {
                            MvtkGftcrdCancelInfo: Array<{
                                MVTKGFTCRD_ID: string; // ムビチケギフトカードID
                                MVTKGFTCRDPIN_CD: string; // ムビチケギフトカードPINコード
                                GFTCRDKSSIKNR_NO: string; // ギフトカード決済管理番号
                                RYUKNGK: string; // ムビチケオンラインギフトカードで決済した金額
                                SYRYKY_DT: string; // 取消を行う決済処理を要求した日時(取消区分が2の場合は必須)
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
                        /**
                         * 取消しする作品のコード
                         */
                        SKHN_CD: string;
                        /**
                         * 取消しする決済の管理番号
                         */
                        KSSIKNR_NO: string;
                    }

                    export interface GiftCardCancelResult {
                        /**
                         * 凸版サービス返却値
                         */
                        tppnsrvcrspns: string;
                        /**
                         * ムビチケギフトカードID
                         */
                        mvtkgftcrdId: string;
                        /**
                         * 利用前残高
                         */
                        ryumezndk: string;
                        /**
                         * 残高
                         */
                        zndk: string;
                        /**
                         * 承認番号
                         */
                        synnNo: string;
                        /**
                         * 処理要求日時
                         */
                        syrykyDt: string;
                        /**
                         * ギフトカードステータス
                         */
                        giftcardstatus: string;

                    }
                }

                export class GiftCardService {
                    giftCardIDAuth(params: models.GiftCardIDAuthIn, cb: (err, response, giftCardIDAuthResults: Array<any>) => any): void;
                    giftCardCancel(params: models.GiftCardCancelIn, cb: (err, response, giftCardCancelResults: Array<any>) => any): void;
                }

                module GiftCardUtilities {
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_SUCCESS: string;
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_W00000: string;
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR0: string;
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR1: string;
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR2: string;
                    export var GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR3: string;

                    export var GIFT_CARD_STATUS_SUCCESS: string;
                    export var GIFT_CARD_STATUS_W00000: string;
                    export var GIFT_CARD_STATUS_ERROR1: string;
                    export var GIFT_CARD_STATUS_ERROR2: string;
                    export var GIFT_CARD_STATUS_ERROR3: string;
                    export var GIFT_CARD_STATUS_ERROR4: string;
                    export var GIFT_CARD_STATUS_ERROR5: string;
                    export var GIFT_CARD_STATUS_ERROR6: string;

                    export var TRKSH_TYP_UNLOCK: string;
                    export var TRKSH_TYP_CANCEL: string;
                    export var TRKSH_TYP_FAULT: string;
                }

            }

            module Mail {
                module models {
                    export interface DeliveryIn {
                        /**
                         * 決済管理番号
                         */
                        KSSIKNR_NO: string;
                        /**
                         * 購入管理番号
                         */
                        KNYKNR_NO: string;
                        /**
                         * 宛先
                         */
                        MAILADDRESS: string;
                        /**
                         * 宛名
                         */
                        ADDRESS: string;
                        /**
                         * 作品名
                         */
                        SKHN_NM: string;
                        /**
                         * 鑑賞券情報(ItemArray)
                         */
                        KNSHKN_INFO: {
                            KNSHKN: Array<{
                                /**
                                 * 券種区分名称
                                 */
                                KNSHKBN_NM: string;
                                /**
                                 * 購入枚数
                                 */
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
                        /**
                         * デバイス区分
                         */
                        DVC_TYP: string;
                        /**
                         * メールテンプレートコード
                         */
                        MLTMPLT_CD: string;
                        /**
                         * 合計金額
                         */
                        TOTALCOST: string;
                        /**
                         * 作品コード
                         */
                        SKHN_CD: string;
                    }

                }

                export class MailService {
                    delivery(params: models.DeliveryIn, cb: (err, response, isSuccess: boolean) => any): void;
                }

            }

            module Purchase {
                module models {
                    export interface GetGmoEntryTranIn {
                        /**
                         * 決済管理番号
                         */
                        KSSIKNR_NO: string;
                        /**
                         * 決済方法区分
                         */
                        KSSIHH_TYP: string;
                        /**
                         * ご利用金額
                         */
                        GRYKNGK: string;
                        /**
                         * 購入者コード
                         */
                        KNYSH_CD: string;
                        /**
                         * 会員フラグ
                         */
                        KIIN_FLG: string;
                        /**
                         * 併用決済フラグ
                         */
                        HIYKSSI_FLG: string;
                        /**
                         * 併用決済区分
                         */
                        HIYKSSI_TYP: string;
                        /**
                         * 作品コード
                         */
                        SKHN_CD: string;
                    }

                    export interface GetGmoEntryTranResult {
                        /**
                         * 決済管理番号
                         */
                        kssiknrNo: string;
                        /**
                         * 取引ＩＤ
                         */
                        accessId: string;
                        /**
                         * 取引パスワード
                         */
                        accessPwd: string;
                        /**
                         * 決済エラー種類区分
                         */
                        kssierrrshriTyp: string;
                        /**
                         * 決済エラーメッセージ本文
                         */
                        kssierrrmssgTxt: string;
                    }

                    export interface RegisterPurchaseInfoIn {
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
                            GftcrdInfo: Array<{
                                GFTCRDKSSIKNR_NO: string; // 
                                GFTCRDPIN_CD: string; // 
                                GFTCRD_ID: string; // 
                                GFTCRD_STTS: string; // 
                                KSSISYNN_NO: string; // 
                                KSSI_DT: string; // 
                                RYG_ZNDK: string; // 
                                RYME_ZNDK: string; // 
                                RY_MNY: string; // 
                                TPPNSRVCRSPNS: string; // 
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
                        /**
                         * 購入管理番号
                         */
                        knyknrNo: string;
                        /**
                         * デジタルインセンティブダウンロード画面ＵＲＬ
                         */
                        dgtlincntvdwnlodgmnUrl: string;
                        /**
                         * 決済エラー種類区分
                         */
                        kssierrrshriTyp: string;
                        /**
                         * 決済エラーメッセージ
                         */
                        kssierrrmssgTxt: string;
                    }

                }

                export class PurchaseService {
                    getGmoEntryTran(params: models.GetGmoEntryTranIn, cb: (err, response, result: any) => any): void;
                    registerPurchaseInfo(params: models.RegisterPurchaseInfoIn, cb: (err, response, registerPurchaseInfoResult: any) => any): void;
                }

                module PurchaseUtilities {
                    export var KSSIHH_TYP_CREDIT_CARD: string;
                    export var KSSIHH_TYP_AU: string;
                    export var KSSIHH_TYP_DOCOMO: string;
                    export var KSSIHH_TYP_GIFT_CARD: string;
                    export var KSSIHH_TYP_WEB_MONEY: string;

                    export var KNYDVC_TYP_PC: string;
                    export var KNYDVC_TYP_MB: string;
                    export var KNYDVC_TYP_SP: string;
                    export var KNYDVC_TYP_CT: string;
                    export var KNYDVC_TYP_MC: string;
                    export var KNYDVC_TYP_AMZN: string;

                    export var HMBICHNNL_TYP_MVTK_SITE: string;

                    export var HMBGISH_CD_MVTK: string;

                    export var CRDTCRDINPUTKBN_INPUT: string;
                    export var CRDTCRDINPUTKBN_REGISTERED: string;

                    export var MLSF_FLG_PC: string;
                    export var MLSF_FLG_MOBILE: string;
                    export var MLSF_FLG_PC_AND_MOBILE: string;

                    export var AUTHENTICATION_SERVICE_SUPPORT: string;
                    export var AUTHENTICATION_SERVICE_NOT_SUPPORT: string;

                    export var CLIENT_ERROR: string;
                    export var SYSTEM_ERROR: string;

                    export var KITHSHK_TYP_CHOICE: string;
                    export var KITHSHK_TYP_TEXT: string;

                    export function getMethods(): Object;
                    export function isAvailableMethod(kssiTyp: string): boolean;
                }

            }

            module TicketChange {
                module models {
                }

                export class TicketChangeService {
                }

            }

            module Util {
                module models {
                    export interface CreateQrCodeIn {
                        /**
                         * 購入管理番号
                         */
                        KNYKNR_NO: string;
                        /**
                         * PIN コード
                         */
                        PIN_CD: string;
                        /**
                         * 作品コード
                         */
                        SKHN_CD: string;
                    }

                }

                export class UtilService {
                    createQrCode(params: models.CreateQrCodeIn, cb: (err, response, qrcdUrl: string) => any): void;
                }

            }
        }


        export function initialize(endpoint: string, endpoint2: string, cb: () => any): void;
        export function getCookie(): string;
        export function setCookie(cookie: string): void;

        export function createDigitalIncentiveDownloadService(): services.DigitalIncentiveDownload.DigitalIncentiveDownloadService;
        export function createFilmService(): services.Film.FilmService;
        export function createGiftCardService(): services.GiftCard.GiftCardService;
        export function createGiftCardService2(): services2.GiftCard.GiftCardService;
        export function createInquiryService(): services.Inquiry.InquiryService;
        export function createMailService(): services2.Mail.MailService;
        export function createMemberInfoService(): services.MemberInfo.MemberInfoService;
        export function createMovieLogService(): services.MovieLog.MovieLogService;
        export function createPurchaseService(): services.Purchase.PurchaseService;
        export function createPurchaseService2(): services2.Purchase.PurchaseService;
        export function createRegisterMemberService(): services.RegisterMember.RegisterMemberService;
        export function createTicketChangeService(): services2.TicketChange.TicketChangeService;
        export function createUtilService(): services.Util.UtilService;
        export function createUtilService2(): services2.Util.UtilService;
        export function createWebMoneyService(): services.WebMoney.WebMoneyService;

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
