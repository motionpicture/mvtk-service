// tslint:disable-next-line:no-reference
/// <reference path='../definitions/main.d.ts' />

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

// import TicketChangeService from './Services2/TicketChange/TicketChangeService';
export {
    Constants,
    Util,
    FilmUtilities,
    // InquiryUtilities,
    MemberInfoUtilities,
    GiftCardUtilities,
    PurchaseUtilities
}

/**
 * ムビチケサービスエンドポイント
 */
let endpoint: string;

/**
 * 新ムビチケサービスエンドポイント
 * リニューアルでサービスのドメインがひとつ増えたため
 */
let endpoint2: string;

/**
 * ムビチケ予約サービスエンドポイント
 */
let endpointReserve: string;

/**
 * クッキー文字列
 * サービス側でユーザーのログイン状態を判別するために用いる
 */
let cookie: string;

/**
 * サービスビルダー初期化
 * @function
 * @param {string} endpoint
 * @param {string} endpoint2
 */
export function initialize(endpointArg: string, endpoint2Arg: string, endpointReserveArg: string): void {
    endpoint = endpointArg;
    endpoint2 = endpoint2Arg;
    endpointReserve = endpointReserveArg;
}

export function getCookie() {
    return cookie;
}

export function setCookie(cookieArg: string) {
    cookie = cookieArg;
}

/**
 * デジタルインセンティブサービスを生成する
 * @function
 */
export function createDigitalIncentiveDownloadService(): DigitalIncentiveDownloadService {
    const wsdl: string = endpoint + '/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl';
    const service = new DigitalIncentiveDownloadService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 作品サービスを生成する
 * @function
 */
export function createFilmService(): FilmService {
    const wsdl: string = endpoint + '/services/Film/Filmsvc.svc?singleWsdl';
    const service = new FilmService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * ギフトカードサービスを生成する
 * @function
 */
export function createGiftCardService(): GiftCardService {
    const wsdl: string = endpoint + '/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl';
    const service = new GiftCardService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 新ギフトカードサービスを生成する
 * @function
 */
export function createGiftCardService2(): GiftCardServiceNew {
    const wsdl: string = endpoint2 + '/services/giftcard/giftcardsvc.svc?singleWsdl';
    const service = new GiftCardServiceNew(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 問い合わせサービスを生成する
 * @function
 */
export function createInquiryService(): InquiryService {
    const wsdl: string = endpoint + '/services/Inquiry/Inquirysvc.svc?singleWsdl';
    const service = new InquiryService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * メールサービスを生成する
 * @function
 */
export function createMailService(): MailService {
    const wsdl: string = endpoint2 + '/services/mail/mailsvc.svc?singleWsdl';
    const service = new MailService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 会員情報サービスを生成する
 * @function
 */
export function createMemberInfoService(): MemberInfoService {
    const wsdl: string = endpoint + '/services/Member/MemberInfoSvc.svc?singleWsdl';
    const service = new MemberInfoService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * ユーザー作品履歴サービスを生成する
 * @function
 */
export function createMovieLogService(): MovieLogService {
    const wsdl: string = endpoint + '/services/MovieLog/MovieLogSvc.svc?singleWsdl';
    const service = new MovieLogService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 購入サービスを生成する
 * @function
 */
export function createPurchaseService(): PurchaseService {
    const wsdl: string = endpoint + '/services/Purchase/PurchaseSvc.svc?singleWsdl';
    const service = new PurchaseService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 新購入サービスを生成する
 * @function
 */
export function createPurchaseService2(): PurchaseServiceNew {
    const wsdl: string = endpoint2 + '/services/purchase/purchasesvc.svc?singleWsdl';
    const service = new PurchaseServiceNew(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 会員登録サービスを生成する
 * @function
 */
export function createRegisterMemberService(): RegisterMemberService {
    const wsdl: string = endpoint + '/services/Member/RegisterMemberSvc.svc?singleWsdl';
    const service = new RegisterMemberService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * お直りサービスを生成する
 */
// export function createTicketChangeService(): TicketChangeService {
//     const wsdl: string = endpoint + '/services/ticketchange/Ticketchangesvc.svc?singleWsdl';
//     const service = new TicketChangeService(wsdl);
//     service.setCookie(cookie);
//     return service;
// }

/**
 * ユーティリティサービスを生成する
 * @function
 */
export function createUtilService(): UtilService {
    const wsdl: string = endpoint + '/services/util/Utilsvc.svc?singleWsdl';
    const service = new UtilService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 新ユーティリティサービスを生成する
 * @function
 */
export function createUtilService2(): UtilServiceNew {
    const wsdl: string = endpoint2 + '/services/util/utilsvc.svc?singleWsdl';
    const service = new UtilServiceNew(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * ウェブマネーサービスを生成する
 * @function
 */
export function createWebMoneyService(): WebMoneyService {
    const wsdl: string = endpoint + '/services/WebMoney/WebMoneySvc.svc?singleWsdl';
    const service = new WebMoneyService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 購入管理番号認証サービスを生成する
 * @function
 */
export function createPurchaseNumberAuthService(): PurchaseNumberAuthService {
    const wsdl: string = endpointReserve + '/Auth/PurchaseNumberAuthSvc.svc?singleWsdl';
    const service = new PurchaseNumberAuthService(wsdl);
    service.setCookie(cookie);
    return service;
}

/**
 * 購入管理番号認証サービスを生成する
 * @function
 */
export function createSeatInfoSyncService(): SeatInfoSyncService {
    const wsdl: string = endpointReserve + '/Seat/SeatInfoSyncSvc.svc?singleWsdl';
    const service = new SeatInfoSyncService(wsdl);
    service.setCookie(cookie);
    return service;
}
