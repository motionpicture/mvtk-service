/// <reference path='../typings/index.d.ts' />
/// <reference path='../definitions/main.d.ts' />

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

import Constants from './common/util/Constants';
import Util from './common/util/Util';

import DigitalIncentiveDownloadUtilities from './services/MemberInfo/MemberInfoUtilities';
import FilmUtilities from './services/Film/FilmUtilities';
import InquiryUtilities from './services/Inquiry/InquiryUtilities';
import MemberInfoUtilities from './services/MemberInfo/MemberInfoUtilities';
import GiftCardUtilities from './services2/GiftCard/GiftCardUtilities';
import PurchaseUtilities from './services2/Purchase/PurchaseUtilities';

/**
 * ムビチケサービス作成クラス
 * 
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
class ServicesBuilder
{
    private static instance: ServicesBuilder;
    public Constants = Constants;
    public Util = Util;

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

    public static getInstance(): ServicesBuilder {
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
    public initialize(endpoint: string, endpoint2: string): void {
        this.endpoint = endpoint;
        this.endpoint2 = endpoint2;
    }

    /**
     * 新しいインスタンスを複製する
     */
    public createInstance(): ServicesBuilder {
        let instance = new ServicesBuilder();
        instance.initialize(this.endpoint, this.endpoint2);

        return instance;
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
        let wsdl: string = this.endpoint + '/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl';
        let service = new DigitalIncentiveDownloadService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 作品サービスを生成する
     */
    public createFilmService(): FilmService {
        let wsdl: string = this.endpoint + '/services/Film/Filmsvc.svc?singleWsdl';
        let service = new FilmService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ギフトカードサービスを生成する
     */
    public createGiftCardService(): GiftCardService {
        let wsdl: string = this.endpoint + '/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl';
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
        let wsdl: string = this.endpoint + '/services/Member/MemberInfoSvc.svc?singleWsdl';
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
        let wsdl: string = this.endpoint + '/services/Purchase/PurchaseSvc.svc?singleWsdl';
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
        let wsdl: string = this.endpoint + '/services/Member/RegisterMemberSvc.svc?singleWsdl';
        let service = new RegisterMemberService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * お直りサービスを生成する
     */
    public createTicketChangeService(): TicketChangeService {
        let wsdl: string = this.endpoint + '/services/ticketchange/Ticketchangesvc.svc?singleWsdl';
        let service = new TicketChangeService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * ユーティリティサービスを生成する
     */
    public createUtilService(): UtilService {
        let wsdl: string = this.endpoint + '/services/util/Utilsvc.svc?singleWsdl';
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
        let wsdl: string = this.endpoint + '/services/WebMoney/WebMoneySvc.svc?singleWsdl';
        let service = new WebMoneyService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }

    /**
     * 特典コードサービスを生成する
     * @method
     */
    public  createBonusGrantingService(): BonusGrantingService {
        const wsdl: string = this.endpoint2 + '/Services/Bonus/BonusGrantingsvc.svc?singleWsdl';
        console.log(wsdl)
        const service = new BonusGrantingService(wsdl);
        service.setCookie(this.cookie);
        return service;
    }
}

module.exports = ServicesBuilder.getInstance();
