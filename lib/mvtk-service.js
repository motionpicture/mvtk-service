// tslint:disable-next-line:no-reference
/// <reference path='../definitions/main.d.ts' />
"use strict";
const Constants_1 = require("./Common/Util/Constants");
exports.Constants = Constants_1.default;
const Util = require("./Common/Util/Util");
exports.Util = Util;
const PurchaseNumberAuthService_1 = require("./ReserveServices/Auth/PurchaseNumberAuthService");
const PurchaseNumberAuthUtilities = require("./ReserveServices/Auth/PurchaseNumberAuthUtilities");
exports.PurchaseNumberAuthUtilities = PurchaseNumberAuthUtilities;
const SeatInfoSyncService_1 = require("./ReserveServices/Seat/SeatInfoSyncService");
const SeatInfoSyncUtilities = require("./ReserveServices/Seat/SeatInfoSyncUtilities");
exports.SeatInfoSyncUtilities = SeatInfoSyncUtilities;
const DigitalIncentiveDownloadService_1 = require("./Services/DigitalIncentiveDownload/DigitalIncentiveDownloadService");
const FilmService_1 = require("./Services/Film/FilmService");
const FilmUtilities = require("./Services/Film/FilmUtilities");
exports.FilmUtilities = FilmUtilities;
const GiftCardService_1 = require("./Services/GiftCard/GiftCardService");
const InquiryService_1 = require("./Services/Inquiry/InquiryService");
const MemberInfoService_1 = require("./Services/MemberInfo/MemberInfoService");
const MemberInfoUtilities = require("./Services/MemberInfo/MemberInfoUtilities");
exports.MemberInfoUtilities = MemberInfoUtilities;
const MovieLogService_1 = require("./Services/MovieLog/MovieLogService");
const PurchaseService_1 = require("./Services/Purchase/PurchaseService");
const RegisterMemberService_1 = require("./Services/RegisterMember/RegisterMemberService");
const UtilService_1 = require("./Services/Util/UtilService");
const WebMoneyService_1 = require("./Services/WebMoney/WebMoneyService");
const GiftCardService_2 = require("./Services2/GiftCard/GiftCardService");
const GiftCardUtilities = require("./Services2/GiftCard/GiftCardUtilities");
exports.GiftCardUtilities = GiftCardUtilities;
const MailService_1 = require("./Services2/Mail/MailService");
const PurchaseService_2 = require("./Services2/Purchase/PurchaseService");
const PurchaseUtilities = require("./Services2/Purchase/PurchaseUtilities");
exports.PurchaseUtilities = PurchaseUtilities;
const UtilService_2 = require("./Services2/Util/UtilService");
/**
 * ムビチケサービスエンドポイント
 */
let endpoint;
/**
 * 新ムビチケサービスエンドポイント
 * リニューアルでサービスのドメインがひとつ増えたため
 */
let endpoint2;
/**
 * ムビチケ予約サービスエンドポイント
 */
let endpointReserve;
/**
 * クッキー文字列
 * サービス側でユーザーのログイン状態を判別するために用いる
 */
let cookie;
/**
 * サービスビルダー初期化
 * @function
 * @param {string} endpoint
 * @param {string} endpoint2
 */
function initialize(endpointArg, endpoint2Arg, endpointReserveArg) {
    endpoint = endpointArg;
    endpoint2 = endpoint2Arg;
    endpointReserve = endpointReserveArg;
}
exports.initialize = initialize;
function getCookie() {
    return cookie;
}
exports.getCookie = getCookie;
function setCookie(cookieArg) {
    cookie = cookieArg;
}
exports.setCookie = setCookie;
/**
 * デジタルインセンティブサービスを生成する
 * @function
 */
function createDigitalIncentiveDownloadService() {
    const wsdl = endpoint + '/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl';
    const service = new DigitalIncentiveDownloadService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createDigitalIncentiveDownloadService = createDigitalIncentiveDownloadService;
/**
 * 作品サービスを生成する
 * @function
 */
function createFilmService() {
    const wsdl = endpoint + '/services/Film/Filmsvc.svc?singleWsdl';
    const service = new FilmService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createFilmService = createFilmService;
/**
 * ギフトカードサービスを生成する
 * @function
 */
function createGiftCardService() {
    const wsdl = endpoint + '/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl';
    const service = new GiftCardService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createGiftCardService = createGiftCardService;
/**
 * 新ギフトカードサービスを生成する
 * @function
 */
function createGiftCardService2() {
    const wsdl = endpoint2 + '/services/giftcard/giftcardsvc.svc?singleWsdl';
    const service = new GiftCardService_2.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createGiftCardService2 = createGiftCardService2;
/**
 * 問い合わせサービスを生成する
 * @function
 */
function createInquiryService() {
    const wsdl = endpoint + '/services/Inquiry/Inquirysvc.svc?singleWsdl';
    const service = new InquiryService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createInquiryService = createInquiryService;
/**
 * メールサービスを生成する
 * @function
 */
function createMailService() {
    const wsdl = endpoint2 + '/services/mail/mailsvc.svc?singleWsdl';
    const service = new MailService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createMailService = createMailService;
/**
 * 会員情報サービスを生成する
 * @function
 */
function createMemberInfoService() {
    const wsdl = endpoint + '/services/Member/MemberInfoSvc.svc?singleWsdl';
    const service = new MemberInfoService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createMemberInfoService = createMemberInfoService;
/**
 * ユーザー作品履歴サービスを生成する
 * @function
 */
function createMovieLogService() {
    const wsdl = endpoint + '/services/MovieLog/MovieLogSvc.svc?singleWsdl';
    const service = new MovieLogService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createMovieLogService = createMovieLogService;
/**
 * 購入サービスを生成する
 * @function
 */
function createPurchaseService() {
    const wsdl = endpoint + '/services/Purchase/PurchaseSvc.svc?singleWsdl';
    const service = new PurchaseService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createPurchaseService = createPurchaseService;
/**
 * 新購入サービスを生成する
 * @function
 */
function createPurchaseService2() {
    const wsdl = endpoint2 + '/services/purchase/purchasesvc.svc?singleWsdl';
    const service = new PurchaseService_2.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createPurchaseService2 = createPurchaseService2;
/**
 * 会員登録サービスを生成する
 * @function
 */
function createRegisterMemberService() {
    const wsdl = endpoint + '/services/Member/RegisterMemberSvc.svc?singleWsdl';
    const service = new RegisterMemberService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createRegisterMemberService = createRegisterMemberService;
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
function createUtilService() {
    const wsdl = endpoint + '/services/util/Utilsvc.svc?singleWsdl';
    const service = new UtilService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createUtilService = createUtilService;
/**
 * 新ユーティリティサービスを生成する
 * @function
 */
function createUtilService2() {
    const wsdl = endpoint2 + '/services/util/utilsvc.svc?singleWsdl';
    const service = new UtilService_2.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createUtilService2 = createUtilService2;
/**
 * ウェブマネーサービスを生成する
 * @function
 */
function createWebMoneyService() {
    const wsdl = endpoint + '/services/WebMoney/WebMoneySvc.svc?singleWsdl';
    const service = new WebMoneyService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createWebMoneyService = createWebMoneyService;
/**
 * 購入管理番号認証サービスを生成する
 * @function
 */
function createPurchaseNumberAuthService() {
    const wsdl = endpointReserve + '/Auth/PurchaseNumberAuthSvc.svc?singleWsdl';
    const service = new PurchaseNumberAuthService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createPurchaseNumberAuthService = createPurchaseNumberAuthService;
/**
 * 購入管理番号認証サービスを生成する
 * @function
 */
function createSeatInfoSyncService() {
    const wsdl = endpointReserve + '/Seat/SeatInfoSyncSvc.svc?singleWsdl';
    const service = new SeatInfoSyncService_1.default(wsdl);
    service.setCookie(cookie);
    return service;
}
exports.createSeatInfoSyncService = createSeatInfoSyncService;
