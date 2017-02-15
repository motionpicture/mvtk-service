/// <reference path="../../definitions/main.d.ts" />
import Constants from './Common/Util/Constants';
import DigitalIncentiveDownloadService from './services/DigitalIncentiveDownload/DigitalIncentiveDownloadService';
import * as GiftCardUtilities from './services2/GiftCard/GiftCardUtilities';
import FilmService from './services/Film/FilmService';
import * as FilmUtilities from './services/Film/FilmUtilities';
import GiftCardService from './services/GiftCard/GiftCardService';
import GiftCardServiceNew from './services2/GiftCard/GiftCardService';
import InquiryService from './services/Inquiry/InquiryService';
import MailService from './services2/Mail/MailService';
import MemberInfoService from './services/MemberInfo/MemberInfoService';
import * as MemberInfoUtilities from './services/MemberInfo/MemberInfoUtilities';
import MovieLogService from './services/MovieLog/MovieLogService';
import PurchaseService from './services/Purchase/PurchaseService';
import PurchaseServiceNew from './services2/Purchase/PurchaseService';
import * as PurchaseUtilities from './services2/Purchase/PurchaseUtilities';
import RegisterMemberService from './services/RegisterMember/RegisterMemberService';
import TicketChangeService from './services2/TicketChange/TicketChangeService';
import Util from './Common/Util/Util';
import UtilService from './services/util/UtilService';
import UtilServiceNew from './services2/util/UtilService';
import WebMoneyService from './services/WebMoney/WebMoneyService';
import PurchaseNumberAuthService from './ReserveServices/Auth/PurchaseNumberAuthService';
import SeatInfoSyncService from './ReserveServices/Seat/SeatInfoSyncService';
export { Constants, Util, FilmUtilities, InquiryUtilities, MemberInfoUtilities, GiftCardUtilities, PurchaseUtilities };
/**
 * サービスビルダー初期化
 *
 * @param {string} endpoint
 * @param {string} endpoint2
 */
export declare function initialize(endpointArg: string, endpoint2Arg: string, endpointReserveArg: string): void;
export declare function getCookie(): string;
export declare function setCookie(cookieArg: string): void;
/**
 * デジタルインセンティブサービスを生成する
 */
export declare function createDigitalIncentiveDownloadService(): DigitalIncentiveDownloadService;
/**
 * 作品サービスを生成する
 */
export declare function createFilmService(): FilmService;
/**
 * ギフトカードサービスを生成する
 */
export declare function createGiftCardService(): GiftCardService;
/**
 * 新ギフトカードサービスを生成する
 */
export declare function createGiftCardService2(): GiftCardServiceNew;
/**
 * 問い合わせサービスを生成する
 */
export declare function createInquiryService(): InquiryService;
/**
 * メールサービスを生成する
 */
export declare function createMailService(): MailService;
/**
 * 会員情報サービスを生成する
 */
export declare function createMemberInfoService(): MemberInfoService;
/**
 * ユーザー作品履歴サービスを生成する
 */
export declare function createMovieLogService(): MovieLogService;
/**
 * 購入サービスを生成する
 */
export declare function createPurchaseService(): PurchaseService;
/**
 * 新購入サービスを生成する
 */
export declare function createPurchaseService2(): PurchaseServiceNew;
/**
 * 会員登録サービスを生成する
 */
export declare function createRegisterMemberService(): RegisterMemberService;
/**
 * お直りサービスを生成する
 */
export declare function createTicketChangeService(): TicketChangeService;
/**
 * ユーティリティサービスを生成する
 */
export declare function createUtilService(): UtilService;
/**
 * 新ユーティリティサービスを生成する
 */
export declare function createUtilService2(): UtilServiceNew;
/**
 * ウェブマネーサービスを生成する
 */
export declare function createWebMoneyService(): WebMoneyService;
/**
 * 購入管理番号認証サービスを生成する
 */
export declare function createPurchaseNumberAuthService(): PurchaseNumberAuthService;
/**
 * 購入管理番号認証サービスを生成する
 */
export declare function createSeatInfoSyncService(): SeatInfoSyncService;
