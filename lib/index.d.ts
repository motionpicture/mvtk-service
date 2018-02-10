import { IConstants } from './common/util/Constants';
import { Util } from './common/util/Util';
import { DigitalIncentiveDownloadService } from './services/digitalIncentiveDownload/DigitalIncentiveDownloadService';
import { DigitalIncentiveDownloadUtilities } from './services/digitalIncentiveDownload/DigitalIncentiveDownloadUtilities';
import { FilmService } from './services/film/FilmService';
import { IFilmUtilities } from './services/film/FilmUtilities';
import { GiftCardService } from './services/giftCard/GiftCardService';
import { InquiryService } from './services/inquiry/InquiryService';
import { InquiryUtilities } from './services/inquiry/InquiryUtilities';
import { MemberInfoService } from './services/memberInfo/MemberInfoService';
import { IMemberInfoUtilities } from './services/memberInfo/MemberInfoUtilities';
import { MovieLogService } from './services/movieLog/MovieLogService';
import { PurchaseService } from './services/purchase/PurchaseService';
import { RegisterMemberService } from './services/registerMember/RegisterMemberService';
import { UtilService } from './services/util/UtilService';
import { WebMoneyService } from './services/webMoney/WebMoneyService';
import { BonusGrantingService } from './services2/bonus/BonusGrantingService';
import { GiftCardService2 } from './services2/giftCard/GiftCardService';
import { IGiftCardUtilities } from './services2/giftCard/GiftCardUtilities';
import { MailService } from './services2/mail/MailService';
import { PurchaseService2 } from './services2/purchase/PurchaseService';
import { IPurchaseUtilities } from './services2/purchase/PurchaseUtilities';
import { TicketChangeService } from './services2/ticketChange/TicketChangeService';
import { UtilService2 } from './services2/util/UtilService';
/**
 * ムビチケサービス作成クラス
 *
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
export declare class ServicesBuilder {
    private static instance;
    Constants: IConstants;
    Util: Util;
    DigitalIncentiveDownloadUtilities: DigitalIncentiveDownloadUtilities;
    FilmUtilities: IFilmUtilities;
    InquiryUtilities: InquiryUtilities;
    MemberInfoUtilities: IMemberInfoUtilities;
    GiftCardUtilities: IGiftCardUtilities;
    PurchaseUtilities: IPurchaseUtilities;
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
    createGiftCardService2(): GiftCardService2;
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
    createPurchaseService2(): PurchaseService2;
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
    createUtilService2(): UtilService2;
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
export declare const services: ServicesBuilder;
