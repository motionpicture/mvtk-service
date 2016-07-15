/// <reference path='../typings/index.d.ts' />
/// <reference path='../definitions/main.d.ts' />

import DigitalIncentiveDownloadService from './Services/DigitalIncentiveDownload/DigitalIncentiveDownloadService';
import FilmService from './Services/Film/FilmService';
import GiftCardService from './Services/GiftCard/GiftCardService';
import GiftCardServiceNew from './Services2/GiftCard/GiftCardService';
import InquiryService from './Services/Inquiry/InquiryService';
import MailService from './Services2/Mail/MailService';
import MemberInfoService from './Services/MemberInfo/MemberInfoService';
import MovieLogService from './Services/MovieLog/MovieLogService';
import PurchaseService from './Services/Purchase/PurchaseService';
import PurchaseServiceNew from './Services2/Purchase/PurchaseService';
import RegisterMemberService from './Services/RegisterMember/RegisterMemberService';
import TicketChangeService from './Services2/TicketChange/TicketChangeService';
import UtilService from './Services/Util/UtilService';
import UtilServiceNew from './Services2/Util/UtilService';
import WebMoneyService from './Services/WebMoney/WebMoneyService';

import Constants from './Common/Util/Constants';
import Util from './Common/Util/Util';

import DigitalIncentiveDownloadUtilities from './Services/MemberInfo/MemberInfoUtilities';
import FilmUtilities from './Services/Film/FilmUtilities';
import InquiryUtilities from './Services/Inquiry/InquiryUtilities';
import MemberInfoUtilities from './Services/MemberInfo/MemberInfoUtilities';
import GiftCardUtilities from './Services2/GiftCard/GiftCardUtilities';
import PurchaseUtilities from './Services2/Purchase/PurchaseUtilities';

/**
 * ムビチケサービス作成クラス
 * 
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
class ServicesBuilder
{
    private static instance: ServicesBuilder;
    public Constants: Object = Constants;
    public Util: Util = Util;

    public DigitalIncentiveDownloadUtilities = DigitalIncentiveDownloadUtilities;
    public FilmUtilities = FilmUtilities;
    public InquiryUtilities = InquiryUtilities;
    public MemberInfoUtilities = MemberInfoUtilities;
    public GiftCardUtilities = GiftCardUtilities;
    public PurchaseUtilities = PurchaseUtilities;

    /**
     * ムビチケサービスエンドポイント
     */
    private endpoint: string;

    /**
     * 新ムビチケサービスエンドポイント
     * リニューアルでサービスのドメインがひとつ増えたため
     */
    private endpoint2: string;

    /**
     * クッキー文字列
     * サービス側でユーザーのログイン状態を判別するために用いる
     */
    private cookie: string;

    public model(serviceName: string, modelName: string): any {
        let model = require(`./Services/${serviceName}/Models/${modelName}`);
        return model;
    }

    public static getInstance() {
        if (!ServicesBuilder.instance) {
            ServicesBuilder.instance = new ServicesBuilder()
        }

        return ServicesBuilder.instance;
    }

    /**
     * サービスビルダー初期化
     * 
     * @param {string} endpoint
     * @param {string} endpoint2
     */
    public initialize(endpoint: string, endpoint2: string, cb: () => any): void {
        this.endpoint = endpoint;
        this.endpoint2 = endpoint2;

        cb();
    }

    public getCookie() {
        return this.cookie;
    }

    public setCookie(cookie: string) {
        this.cookie = cookie;
    }

    /**
     * デジタルインセンティブサービスを生成する
     */
    public createDigitalIncentiveDownloadService(): DigitalIncentiveDownloadService {
        let wsdl: string = this.endpoint + '/Services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl';
        let service = new DigitalIncentiveDownloadService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 作品サービスを生成する
     */
    public createFilmService(): FilmService {
        let wsdl: string = this.endpoint + '/Services/Film/Filmsvc.svc?singleWsdl';
        let service = new FilmService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ギフトカードサービスを生成する
     */
    public createGiftCardService(): GiftCardService {
        let wsdl: string = this.endpoint + '/Services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl';
        let service = new GiftCardService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 新ギフトカードサービスを生成する
     */
    public createGiftCardService2(): GiftCardServiceNew {
        let wsdl: string = this.endpoint2 + '/services/giftcard/giftcardsvc.svc?singleWsdl';
        let service = new GiftCardServiceNew(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 問い合わせサービスを生成する
     */
    public createInquiryService(): InquiryService {
        let wsdl: string = this.endpoint + '/services/Inquiry/Inquirysvc.svc?singleWsdl';
        let service = new InquiryService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * メールサービスを生成する
     */
    public createMailService(): MailService {
        let wsdl: string = this.endpoint2 + '/services/mail/mailsvc.svc?singleWsdl';
        let service = new MailService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 会員情報サービスを生成する
     */
    public createMemberInfoService(): MemberInfoService {
        let wsdl: string = this.endpoint + '/Services/Member/MemberInfoSvc.svc?singleWsdl';
        let service = new MemberInfoService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ユーザー作品履歴サービスを生成する
     */
    public createMovieLogService(): MovieLogService {
        let wsdl: string = this.endpoint + '/services/MovieLog/MovieLogSvc.svc?singleWsdl';
        let service = new MovieLogService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 購入サービスを生成する
     */
    public createPurchaseService(): PurchaseService {
        let wsdl: string = this.endpoint + '/Services/Purchase/PurchaseSvc.svc?singleWsdl';
        let service = new PurchaseService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 新購入サービスを生成する
     */
    public createPurchaseService2(): PurchaseServiceNew {
        let wsdl: string = this.endpoint2 + '/services/purchase/purchasesvc.svc?singleWsdl';
        let service = new PurchaseServiceNew(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 会員登録サービスを生成する
     */
    public createRegisterMemberService(): RegisterMemberService {
        let wsdl: string = this.endpoint + '/Services/Member/RegisterMemberSvc.svc?singleWsdl';
        let service = new RegisterMemberService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * お直りサービスを生成する
     */
    public createTicketChangeService(): TicketChangeService {
        let wsdl: string = this.endpoint + '/Services/ticketchange/Ticketchangesvc.svc?singleWsdl';
        let service = new TicketChangeService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ユーティリティサービスを生成する
     */
    public createUtilService(): UtilService {
        let wsdl: string = this.endpoint + '/Services/util/Utilsvc.svc?singleWsdl';
        let service = new UtilService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 新ユーティリティサービスを生成する
     */
    public createUtilService2(): UtilServiceNew {
        let wsdl: string = this.endpoint2 + '/services/util/utilsvc.svc?singleWsdl';
        let service = new UtilServiceNew(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ウェブマネーサービスを生成する
     */
    public createWebMoneyService(): WebMoneyService {
        let wsdl: string = this.endpoint + '/Services/WebMoney/WebMoneySvc.svc?singleWsdl';
        let service = new WebMoneyService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
}

module.exports = ServicesBuilder.getInstance();
