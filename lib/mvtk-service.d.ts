import DigitalIncentiveDownloadService from './services/DigitalIncentiveDownload/DigitalIncentiveDownloadService';
import FilmService from './services/Film/FilmService';
import GiftCardService from './services/GiftCard/GiftCardService';
import GiftCardServiceNew from './services2/GiftCard/GiftCardService';
import InquiryService from './services/Inquiry/InquiryService';
import MailService from './services2/Mail/MailService';
import MemberInfoService from './services/MemberInfo/MemberInfoService';
import MovieLogService from './services/MovieLog/MovieLogService';
import PurchaseService from './services/Purchase/PurchaseService';
import PurchaseServiceNew from './services2/Purchase/PurchaseService';
import RegisterMemberService from './services/RegisterMember/RegisterMemberService';
import TicketChangeService from './services2/TicketChange/TicketChangeService';
import UtilService from './services/util/UtilService';
import UtilServiceNew from './services2/util/UtilService';
import WebMoneyService from './services/WebMoney/WebMoneyService';
import BonusGrantingService from './Services2/Bonus/BonusGrantingService';
import Util from './common/util/Util';
import DigitalIncentiveDownloadUtilities from './services/MemberInfo/MemberInfoUtilities';
import FilmUtilities from './services/Film/FilmUtilities';
import InquiryUtilities from './services/Inquiry/InquiryUtilities';
import GiftCardUtilities from './services2/GiftCard/GiftCardUtilities';
import PurchaseUtilities from './services2/Purchase/PurchaseUtilities';
/**
 * ムビチケサービス作成クラス
 *
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
export declare class ServicesBuilder {
    private static instance;
    Constants: {
        DVC_TYP_PC: string;
        DVC_TYP_MOBILE: string;
        DVC_TYP_SP: string;
        RESULT_INFO_STATUS_SUCCESS: string;
        RESULT_INFO_STATUS_CRITICAL_ERROR: string;
        RESULT_INFO_STATUS_CHECK_ERROR: string;
        RESULT_INFO_STATUS_REPLICATION_ERROR: string;
        RESULT_INFO_STATUS_CLIENT_ERROR: string;
        RESULT_INFO_STATUS_OVERFLOW_ERROR: string;
        AU_RESPONSE_STATUS_REQSUCCESS: string;
        AU_RESPONSE_STATUS_AUTHPROCESS: string;
        AU_RESPONSE_STATUS_AUTH: string;
        AU_RESPONSE_STATUS_CAPTURE: string;
        AU_RESPONSE_STATUS_PAYFAIL: string;
        AU_PAY_METHOD_TOTALING: string;
        AU_PAY_METHOD_CREDIT_CARD: string;
        AU_PAY_METHOD_WEB_MONEY: string;
        DOCOMO_RESPONSE_STATUS_REQSUCCESS: string;
        DOCOMO_RESPONSE_STATUS_AUTHPROCESS: string;
        DOCOMO_RESPONSE_STATUS_AUTH: string;
        DOCOMO_RESPONSE_STATUS_CAPTURE: string;
        DOCOMO_RESPONSE_STATUS_PAYFAIL: string;
        DOCOMO_PAY_METHOD_TOTALING: string;
        DOCOMO_PAY_METHOD_CREDIT_CARD: string;
        DOCOMO_PAY_METHOD_WEB_MONEY: string;
        TDFKN_INFO: {
            CD: string;
            NM: string;
        }[];
        KIIN_MLADDR_MB_DOMAINS: string[];
        MLTMPLT_CD_PURCHASE_COMPLETE: string;
        MLTMPLT_CD_KNYKNR_NO_TRANSFER: string;
        MLTMPLT_CD_PURCHASE_COMPLETE_MOBILE: string;
        MLTMPLT_CD_KNYKNR_NO_TRANSFER_MOBILE: string;
    };
    Util: typeof Util;
    DigitalIncentiveDownloadUtilities: typeof DigitalIncentiveDownloadUtilities;
    FilmUtilities: typeof FilmUtilities;
    InquiryUtilities: typeof InquiryUtilities;
    MemberInfoUtilities: typeof DigitalIncentiveDownloadUtilities;
    GiftCardUtilities: typeof GiftCardUtilities;
    PurchaseUtilities: typeof PurchaseUtilities;
    /**
     * ムビチケサービスエンドポイント
     */
    private endpoint;
    /**
     * 新ムビチケサービスエンドポイント
     * リニューアルでサービスのドメインがひとつ増えたため
     */
    private endpoint2;
    /**
     * クッキー文字列
     * サービス側でユーザーのログイン状態を判別するために用いる
     */
    private cookie;
    static getInstance(): ServicesBuilder;
    /**
     * サービスビルダー初期化
     *
     * @param {string} endpoint
     * @param {string} endpoint2
     */
    initialize(endpoint: string, endpoint2: string): void;
    /**
     * 新しいインスタンスを複製する
     */
    createInstance(): ServicesBuilder;
    getCookie(): string;
    setCookie(cookie: string): void;
    /**
     * デジタルインセンティブサービスを生成する
     */
    createDigitalIncentiveDownloadService(): DigitalIncentiveDownloadService;
    /**
     * 作品サービスを生成する
     */
    createFilmService(): FilmService;
    /**
     * ギフトカードサービスを生成する
     */
    createGiftCardService(): GiftCardService;
    /**
     * 新ギフトカードサービスを生成する
     */
    createGiftCardService2(): GiftCardServiceNew;
    /**
     * 問い合わせサービスを生成する
     */
    createInquiryService(): InquiryService;
    /**
     * メールサービスを生成する
     */
    createMailService(): MailService;
    /**
     * 会員情報サービスを生成する
     */
    createMemberInfoService(): MemberInfoService;
    /**
     * ユーザー作品履歴サービスを生成する
     */
    createMovieLogService(): MovieLogService;
    /**
     * 購入サービスを生成する
     */
    createPurchaseService(): PurchaseService;
    /**
     * 新購入サービスを生成する
     */
    createPurchaseService2(): PurchaseServiceNew;
    /**
     * 会員登録サービスを生成する
     */
    createRegisterMemberService(): RegisterMemberService;
    /**
     * お直りサービスを生成する
     */
    createTicketChangeService(): TicketChangeService;
    /**
     * ユーティリティサービスを生成する
     */
    createUtilService(): UtilService;
    /**
     * 新ユーティリティサービスを生成する
     */
    createUtilService2(): UtilServiceNew;
    /**
     * ウェブマネーサービスを生成する
     */
    createWebMoneyService(): WebMoneyService;
    /**
     * 特典コードサービスを生成する
     * @method
     */
    createBonusGrantingService(): BonusGrantingService;
}
export declare const servicesBuilder: ServicesBuilder;
