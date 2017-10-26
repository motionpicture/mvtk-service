/// <reference path='../typings/index.d.ts' />
/// <reference path='../definitions/main.d.ts' />
"use strict";
const DigitalIncentiveDownloadService_1 = require("./services/DigitalIncentiveDownload/DigitalIncentiveDownloadService");
const FilmService_1 = require("./services/Film/FilmService");
const GiftCardService_1 = require("./services/GiftCard/GiftCardService");
const GiftCardService_2 = require("./services2/GiftCard/GiftCardService");
const InquiryService_1 = require("./services/Inquiry/InquiryService");
const MailService_1 = require("./services2/Mail/MailService");
const MemberInfoService_1 = require("./services/MemberInfo/MemberInfoService");
const MovieLogService_1 = require("./services/MovieLog/MovieLogService");
const PurchaseService_1 = require("./services/Purchase/PurchaseService");
const PurchaseService_2 = require("./services2/Purchase/PurchaseService");
const RegisterMemberService_1 = require("./services/RegisterMember/RegisterMemberService");
const TicketChangeService_1 = require("./services2/TicketChange/TicketChangeService");
const UtilService_1 = require("./services/util/UtilService");
const UtilService_2 = require("./services2/util/UtilService");
const WebMoneyService_1 = require("./services/WebMoney/WebMoneyService");
const BonusGrantingService_1 = require("./Services2/Bonus/BonusGrantingService");
const Constants_1 = require("./common/util/Constants");
const Util_1 = require("./common/util/Util");
const MemberInfoUtilities_1 = require("./services/MemberInfo/MemberInfoUtilities");
const FilmUtilities_1 = require("./services/Film/FilmUtilities");
const InquiryUtilities_1 = require("./services/Inquiry/InquiryUtilities");
const MemberInfoUtilities_2 = require("./services/MemberInfo/MemberInfoUtilities");
const GiftCardUtilities_1 = require("./services2/GiftCard/GiftCardUtilities");
const PurchaseUtilities_1 = require("./services2/Purchase/PurchaseUtilities");
/**
 * ムビチケサービス作成クラス
 *
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
class ServicesBuilder {
    constructor() {
        this.Constants = Constants_1.default;
        this.Util = Util_1.default;
        this.DigitalIncentiveDownloadUtilities = MemberInfoUtilities_1.default;
        this.FilmUtilities = FilmUtilities_1.default;
        this.InquiryUtilities = InquiryUtilities_1.default;
        this.MemberInfoUtilities = MemberInfoUtilities_2.default;
        this.GiftCardUtilities = GiftCardUtilities_1.default;
        this.PurchaseUtilities = PurchaseUtilities_1.default;
    }
    static getInstance() {
        if (!ServicesBuilder.instance) {
            ServicesBuilder.instance = new ServicesBuilder();
        }
        return ServicesBuilder.instance;
    }
    /**
     * サービスビルダー初期化
     *
     * @param {string} endpoint
     * @param {string} endpoint2
     */
    initialize(endpoint, endpoint2) {
        this.endpoint = endpoint;
        this.endpoint2 = endpoint2;
    }
    /**
     * 新しいインスタンスを複製する
     */
    createInstance() {
        let instance = new ServicesBuilder();
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
        let wsdl = this.endpoint + '/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl';
        let service = new DigitalIncentiveDownloadService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 作品サービスを生成する
     */
    createFilmService() {
        let wsdl = this.endpoint + '/services/Film/Filmsvc.svc?singleWsdl';
        let service = new FilmService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ギフトカードサービスを生成する
     */
    createGiftCardService() {
        let wsdl = this.endpoint + '/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl';
        let service = new GiftCardService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新ギフトカードサービスを生成する
     */
    createGiftCardService2() {
        let wsdl = this.endpoint2 + '/services/giftcard/giftcardsvc.svc?singleWsdl';
        let service = new GiftCardService_2.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 問い合わせサービスを生成する
     */
    createInquiryService() {
        let wsdl = this.endpoint + '/services/Inquiry/Inquirysvc.svc?singleWsdl';
        let service = new InquiryService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * メールサービスを生成する
     */
    createMailService() {
        let wsdl = this.endpoint2 + '/services/mail/mailsvc.svc?singleWsdl';
        let service = new MailService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 会員情報サービスを生成する
     */
    createMemberInfoService() {
        let wsdl = this.endpoint + '/services/Member/MemberInfoSvc.svc?singleWsdl';
        let service = new MemberInfoService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ユーザー作品履歴サービスを生成する
     */
    createMovieLogService() {
        let wsdl = this.endpoint + '/services/MovieLog/MovieLogSvc.svc?singleWsdl';
        let service = new MovieLogService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 購入サービスを生成する
     */
    createPurchaseService() {
        let wsdl = this.endpoint + '/services/Purchase/PurchaseSvc.svc?singleWsdl';
        let service = new PurchaseService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新購入サービスを生成する
     */
    createPurchaseService2() {
        let wsdl = this.endpoint2 + '/services/purchase/purchasesvc.svc?singleWsdl';
        let service = new PurchaseService_2.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 会員登録サービスを生成する
     */
    createRegisterMemberService() {
        let wsdl = this.endpoint + '/services/Member/RegisterMemberSvc.svc?singleWsdl';
        let service = new RegisterMemberService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * お直りサービスを生成する
     */
    createTicketChangeService() {
        let wsdl = this.endpoint + '/services/ticketchange/Ticketchangesvc.svc?singleWsdl';
        let service = new TicketChangeService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ユーティリティサービスを生成する
     */
    createUtilService() {
        let wsdl = this.endpoint + '/services/util/Utilsvc.svc?singleWsdl';
        let service = new UtilService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 新ユーティリティサービスを生成する
     */
    createUtilService2() {
        let wsdl = this.endpoint2 + '/services/util/utilsvc.svc?singleWsdl';
        let service = new UtilService_2.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * ウェブマネーサービスを生成する
     */
    createWebMoneyService() {
        let wsdl = this.endpoint + '/services/WebMoney/WebMoneySvc.svc?singleWsdl';
        let service = new WebMoneyService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
    /**
     * 特典コードサービスを生成する
     * @method
     */
    createBonusGrantingService() {
        const wsdl = this.endpoint2 + 'Services/Bonus/BonusGrantingsvc.svc?singleWsdl';
        const service = new BonusGrantingService_1.default(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
}
module.exports = ServicesBuilder.getInstance();
