"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const Constants_1 = require("./common/util/Constants");
const Util_1 = require("./common/util/Util");
const DigitalIncentiveDownloadService_1 = require("./services/digitalIncentiveDownload/DigitalIncentiveDownloadService");
const DigitalIncentiveDownloadUtilities_1 = require("./services/digitalIncentiveDownload/DigitalIncentiveDownloadUtilities");
const FilmService_1 = require("./services/film/FilmService");
const FilmUtilities_1 = require("./services/film/FilmUtilities");
const GiftCardService_1 = require("./services/giftCard/GiftCardService");
const InquiryService_1 = require("./services/inquiry/InquiryService");
const InquiryUtilities_1 = require("./services/inquiry/InquiryUtilities");
const MemberInfoService_1 = require("./services/memberInfo/MemberInfoService");
const MemberInfoUtilities_1 = require("./services/memberInfo/MemberInfoUtilities");
const MovieLogService_1 = require("./services/movieLog/MovieLogService");
const PurchaseService_1 = require("./services/purchase/PurchaseService");
const RegisterMemberService_1 = require("./services/registerMember/RegisterMemberService");
const UtilService_1 = require("./services/util/UtilService");
const WebMoneyService_1 = require("./services/webMoney/WebMoneyService");
const BonusGrantingService_1 = require("./services2/bonus/BonusGrantingService");
const GiftCardService_2 = require("./services2/giftCard/GiftCardService");
const GiftCardUtilities_1 = require("./services2/giftCard/GiftCardUtilities");
const MailService_1 = require("./services2/mail/MailService");
const PurchaseService_2 = require("./services2/purchase/PurchaseService");
const PurchaseUtilities_1 = require("./services2/purchase/PurchaseUtilities");
const TicketChangeService_1 = require("./services2/ticketChange/TicketChangeService");
const UtilService_2 = require("./services2/util/UtilService");
const log = debug('MVTK:index');
/**
 * ムビチケサービス作成クラス
 *
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
class ServicesBuilder {
    constructor() {
        this.Constants = Constants_1.Constants;
        this.Util = Util_1.Util;
        this.DigitalIncentiveDownloadUtilities = DigitalIncentiveDownloadUtilities_1.DigitalIncentiveDownloadUtilities;
        this.FilmUtilities = FilmUtilities_1.FilmUtilities;
        this.InquiryUtilities = InquiryUtilities_1.InquiryUtilities;
        this.MemberInfoUtilities = MemberInfoUtilities_1.MemberInfoUtilities;
        this.GiftCardUtilities = GiftCardUtilities_1.GiftCardUtilities;
        this.PurchaseUtilities = PurchaseUtilities_1.PurchaseUtilities;
    }
    static getInstance() {
        log('getInstance');
        if (ServicesBuilder.instance === undefined) {
            ServicesBuilder.instance = new ServicesBuilder();
        }
        return ServicesBuilder.instance;
    }
    /**
     * サービスビルダー初期化
     */
    initialize(endpoint, endpoint2) {
        log('initialize');
        this.endpoint = endpoint;
        this.endpoint2 = endpoint2;
    }
    /**
     * 新しいインスタンスを複製する
     */
    createInstance() {
        log('createInstance');
        const instance = new ServicesBuilder();
        instance.initialize(this.endpoint, this.endpoint2);
        return instance;
    }
    getCookie() {
        return this.cookie;
    }
    setCookie(cookie) {
        this.cookie = cookie;
    }
    /**
     * デジタルインセンティブサービスを生成する
     */
    createDigitalIncentiveDownloadService() {
        const wsdl = `${this.endpoint}/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl`;
        const service = new DigitalIncentiveDownloadService_1.DigitalIncentiveDownloadService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 作品サービスを生成する
     */
    createFilmService() {
        const wsdl = `${this.endpoint}/services/Film/Filmsvc.svc?singleWsdl`;
        const service = new FilmService_1.FilmService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ギフトカードサービスを生成する
     */
    createGiftCardService() {
        const wsdl = `${this.endpoint}/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl`;
        const service = new GiftCardService_1.GiftCardService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新ギフトカードサービスを生成する
     */
    createGiftCardService2() {
        const wsdl = `${this.endpoint2}/services/giftcard/giftcardsvc.svc?singleWsdl`;
        const service = new GiftCardService_2.GiftCardService2(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 問い合わせサービスを生成する
     */
    createInquiryService() {
        const wsdl = `${this.endpoint}/services/Inquiry/Inquirysvc.svc?singleWsdl`;
        const service = new InquiryService_1.InquiryService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * メールサービスを生成する
     */
    createMailService() {
        const wsdl = `${this.endpoint2}/services/mail/mailsvc.svc?singleWsdl`;
        const service = new MailService_1.MailService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 会員情報サービスを生成する
     */
    createMemberInfoService() {
        const wsdl = `${this.endpoint}/services/Member/MemberInfoSvc.svc?singleWsdl`;
        const service = new MemberInfoService_1.MemberInfoService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ユーザー作品履歴サービスを生成する
     */
    createMovieLogService() {
        const wsdl = `${this.endpoint}/services/MovieLog/MovieLogSvc.svc?singleWsdl`;
        const service = new MovieLogService_1.MovieLogService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 購入サービスを生成する
     */
    createPurchaseService() {
        const wsdl = `${this.endpoint}/services/Purchase/PurchaseSvc.svc?singleWsdl`;
        const service = new PurchaseService_1.PurchaseService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新購入サービスを生成する
     */
    createPurchaseService2() {
        const wsdl = `${this.endpoint2}/services/purchase/purchasesvc.svc?singleWsdl`;
        const service = new PurchaseService_2.PurchaseService2(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 会員登録サービスを生成する
     */
    createRegisterMemberService() {
        const wsdl = `${this.endpoint}/services/Member/RegisterMemberSvc.svc?singleWsdl`;
        const service = new RegisterMemberService_1.RegisterMemberService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * お直りサービスを生成する
     */
    createTicketChangeService() {
        const wsdl = `${this.endpoint}/services/ticketchange/Ticketchangesvc.svc?singleWsdl`;
        const service = new TicketChangeService_1.TicketChangeService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ユーティリティサービスを生成する
     */
    createUtilService() {
        const wsdl = `${this.endpoint}/services/util/Utilsvc.svc?singleWsdl`;
        const service = new UtilService_1.UtilService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新ユーティリティサービスを生成する
     */
    createUtilService2() {
        const wsdl = `${this.endpoint2}/services/util/utilsvc.svc?singleWsdl`;
        const service = new UtilService_2.UtilService2(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ウェブマネーサービスを生成する
     */
    createWebMoneyService() {
        const wsdl = `${this.endpoint}/services/WebMoney/WebMoneySvc.svc?singleWsdl`;
        const service = new WebMoneyService_1.WebMoneyService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 特典コードサービスを生成する
     * @method
     */
    createBonusGrantingService() {
        const wsdl = `${this.endpoint2}/Services/Bonus/BonusGrantingsvc.svc?singleWsdl`;
        const service = new BonusGrantingService_1.BonusGrantingService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
}
exports.ServicesBuilder = ServicesBuilder;
exports.services = ServicesBuilder.getInstance();
