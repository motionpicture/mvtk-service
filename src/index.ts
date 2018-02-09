import * as debug from 'debug';
import { Constants } from './common/util/Constants';
import { Util } from './common/util/Util';
import { DigitalIncentiveDownloadService } from './services/digitalIncentiveDownload/DigitalIncentiveDownloadService';
import { DigitalIncentiveDownloadUtilities } from './services/digitalIncentiveDownload/DigitalIncentiveDownloadUtilities';
import { FilmService } from './services/film/FilmService';
import { FilmUtilities } from './services/film/FilmUtilities';
import { GiftCardService } from './services/giftCard/GiftCardService';
import { InquiryService } from './services/inquiry/InquiryService';
import { InquiryUtilities } from './services/inquiry/InquiryUtilities';
import { MemberInfoService } from './services/memberInfo/MemberInfoService';
import { MemberInfoUtilities } from './services/memberInfo/MemberInfoUtilities';
import { MovieLogService } from './services/movieLog/MovieLogService';
import { PurchaseService } from './services/purchase/PurchaseService';
import { RegisterMemberService } from './services/registerMember/RegisterMemberService';
import { UtilService } from './services/util/UtilService';
import { WebMoneyService } from './services/webMoney/WebMoneyService';
import { BonusGrantingService } from './services2/bonus/BonusGrantingService';
import { GiftCardService2 } from './services2/giftCard/GiftCardService';
import { GiftCardUtilities } from './services2/giftCard/GiftCardUtilities';
import { MailService } from './services2/mail/MailService';
import { PurchaseService2 } from './services2/purchase/PurchaseService';
import { PurchaseUtilities } from './services2/purchase/PurchaseUtilities';
import { TicketChangeService } from './services2/ticketChange/TicketChangeService';
import { UtilService2 } from './services2/util/UtilService';
const log = debug('MVTK:index');

// tslint:disable:no-console

/**
 * ムビチケサービス作成クラス
 *
 * 特定のムビチケサービスを使う場合、ここからserviceをcreateする
 */
export class ServicesBuilder {
    private static instance: ServicesBuilder;
    public Constants: any = Constants;
    public Util: Util = Util;

    public DigitalIncentiveDownloadUtilities: DigitalIncentiveDownloadUtilities = DigitalIncentiveDownloadUtilities;
    public FilmUtilities: FilmUtilities = FilmUtilities;
    public InquiryUtilities: InquiryUtilities = InquiryUtilities;
    public MemberInfoUtilities: MemberInfoUtilities = MemberInfoUtilities;
    public GiftCardUtilities: GiftCardUtilities = GiftCardUtilities;
    public PurchaseUtilities: PurchaseUtilities = PurchaseUtilities;

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
        log('getInstance');
        if (ServicesBuilder.instance === undefined) {
            ServicesBuilder.instance = new ServicesBuilder();
        }

        return ServicesBuilder.instance;
    }

    /**
     * サービスビルダー初期化
     */
    public initialize(endpoint: string, endpoint2: string): void {
        log('initialize');
        this.endpoint = endpoint;
        this.endpoint2 = endpoint2;
    }

    /**
     * 新しいインスタンスを複製する
     */
    public createInstance(): ServicesBuilder {
        log('createInstance');
        const instance = new ServicesBuilder();
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
        const wsdl: string = `${this.endpoint}/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc?singleWsdl`;
        const service = new DigitalIncentiveDownloadService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 作品サービスを生成する
     */
    public createFilmService(): FilmService {
        const wsdl: string = `${this.endpoint}/services/Film/Filmsvc.svc?singleWsdl`;
        const service = new FilmService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * ギフトカードサービスを生成する
     */
    public createGiftCardService(): GiftCardService {
        const wsdl: string = `${this.endpoint}/services/MvtkGiftCard/MvtkGiftCardSvc.svc?singleWsdl`;
        const service = new GiftCardService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 新ギフトカードサービスを生成する
     */
    public createGiftCardService2(): GiftCardService2 {
        const wsdl: string = `${this.endpoint2}/services/giftcard/giftcardsvc.svc?singleWsdl`;
        const service = new GiftCardService2(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 問い合わせサービスを生成する
     */
    public createInquiryService(): InquiryService {
        const wsdl: string = `${this.endpoint}/services/Inquiry/Inquirysvc.svc?singleWsdl`;
        const service = new InquiryService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * メールサービスを生成する
     */
    public createMailService(): MailService {
        const wsdl: string = `${this.endpoint2}/services/mail/mailsvc.svc?singleWsdl`;
        const service = new MailService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 会員情報サービスを生成する
     */
    public createMemberInfoService(): MemberInfoService {
        const wsdl: string = `${this.endpoint}/services/Member/MemberInfoSvc.svc?singleWsdl`;
        const service = new MemberInfoService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * ユーザー作品履歴サービスを生成する
     */
    public createMovieLogService(): MovieLogService {
        const wsdl: string = `${this.endpoint}/services/MovieLog/MovieLogSvc.svc?singleWsdl`;
        const service = new MovieLogService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 購入サービスを生成する
     */
    public createPurchaseService(): PurchaseService {
        const wsdl: string = `${this.endpoint}/services/Purchase/PurchaseSvc.svc?singleWsdl`;
        const service = new PurchaseService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 新購入サービスを生成する
     */
    public createPurchaseService2(): PurchaseService2 {
        const wsdl: string = `${this.endpoint2}/services/purchase/purchasesvc.svc?singleWsdl`;
        const service = new PurchaseService2(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 会員登録サービスを生成する
     */
    public createRegisterMemberService(): RegisterMemberService {
        const wsdl: string = `${this.endpoint}/services/Member/RegisterMemberSvc.svc?singleWsdl`;
        const service = new RegisterMemberService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * お直りサービスを生成する
     */
    public createTicketChangeService(): TicketChangeService {
        const wsdl: string = `${this.endpoint}/services/ticketchange/Ticketchangesvc.svc?singleWsdl`;
        const service = new TicketChangeService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * ユーティリティサービスを生成する
     */
    public createUtilService(): UtilService {
        const wsdl: string = `${this.endpoint}/services/util/Utilsvc.svc?singleWsdl`;
        const service = new UtilService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 新ユーティリティサービスを生成する
     */
    public createUtilService2(): UtilService2 {
        const wsdl: string = `${this.endpoint2}/services/util/utilsvc.svc?singleWsdl`;
        const service = new UtilService2(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * ウェブマネーサービスを生成する
     */
    public createWebMoneyService(): WebMoneyService {
        const wsdl: string = `${this.endpoint}/services/WebMoney/WebMoneySvc.svc?singleWsdl`;
        const service = new WebMoneyService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }

    /**
     * 特典コードサービスを生成する
     * @method
     */
    public createBonusGrantingService(): BonusGrantingService {
        const wsdl: string = `${this.endpoint2}/Services/Bonus/BonusGrantingsvc.svc?singleWsdl`;
        console.log(wsdl);
        const service = new BonusGrantingService(wsdl);
        service.setCookie(this.cookie);

        return service;
    }
}

export const services = ServicesBuilder.getInstance();
