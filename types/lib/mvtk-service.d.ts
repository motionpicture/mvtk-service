/// <reference path="../../definitions/main.d.ts" />
import Constants from './Common/Util/Constants';
import * as Util from './Common/Util/Util';
import PurchaseNumberAuthService from './ReserveServices/Auth/PurchaseNumberAuthService';
import SeatInfoSyncService from './ReserveServices/Seat/SeatInfoSyncService';
import DigitalIncentiveDownloadService from './Services/DigitalIncentiveDownload/DigitalIncentiveDownloadService';
import FilmService from './Services/Film/FilmService';
import * as FilmUtilities from './Services/Film/FilmUtilities';
import GiftCardService from './Services/GiftCard/GiftCardService';
import InquiryService from './Services/Inquiry/InquiryService';
import MemberInfoService from './Services/MemberInfo/MemberInfoService';
import * as MemberInfoUtilities from './Services/MemberInfo/MemberInfoUtilities';
import MovieLogService from './Services/MovieLog/MovieLogService';
import PurchaseService from './Services/Purchase/PurchaseService';
import RegisterMemberService from './Services/RegisterMember/RegisterMemberService';
import UtilService from './Services/Util/UtilService';
import WebMoneyService from './Services/WebMoney/WebMoneyService';
import GiftCardServiceNew from './Services2/GiftCard/GiftCardService';
import * as GiftCardUtilities from './Services2/GiftCard/GiftCardUtilities';
import MailService from './Services2/Mail/MailService';
import PurchaseServiceNew from './Services2/Purchase/PurchaseService';
import * as PurchaseUtilities from './Services2/Purchase/PurchaseUtilities';
import UtilServiceNew from './Services2/Util/UtilService';
export { Constants, Util, FilmUtilities, MemberInfoUtilities, GiftCardUtilities, PurchaseUtilities };
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
