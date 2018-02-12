"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index
 */
// tslint:disable:max-line-length
const service_1 = require("./service");
const GetDigitalIncentiveDownloadLinkList = require("./services/digitalIncentiveDownload/models/GetDigitalIncentiveDownloadLinkListResult");
const GetDigitalIncentiveDownload = require("./services/digitalIncentiveDownload/models/GetDigitalIncentiveDownloadResult");
const BnnrInfo = require("./services/film/models/BnnrInfoResult");
const DgtlincntvInfo = require("./services/film/models/DgtlincntvInfoResult");
const FilmCast = require("./services/film/models/FilmCastResult");
const FilmGenre = require("./services/film/models/FilmGenreResult");
const FilmPhotoGallery = require("./services/film/models/FilmPhotoGalleryResult");
const Film = require("./services/film/models/FilmResult");
const FilmStaff = require("./services/film/models/FilmStaffResult");
const GetTrailerDetail = require("./services/film/models/GetTrailerDetailResult");
const TicketInfo = require("./services/film/models/TicketInfoResult");
const TicketInfoType = require("./services/film/models/TicketInfoTypeResult");
const MvtkGiftCardBalanceInquiry = require("./services/giftCard/models/MvtkGiftCardBalanceInquiryResult");
const MvtkGiftCardEntry = require("./services/giftCard/models/MvtkGiftCardEntryResult");
const MemberInfo = require("./services/memberInfo/models/MemberInfoResult");
const GetFavoriteFilmList = require("./services/movieLog/models/GetFavoriteFilmListResult");
const GetUnusedTicketList = require("./services/movieLog/models/GetUnusedTicketListResult");
const SeatReservationStatusList = require("./services/movieLog/models/SeatReservationStatusListResult");
const SentGiftStatusList = require("./services/movieLog/models/SentGiftStatusListResult");
const ShyzmtcktInfoList = require("./services/movieLog/models/ShyzmtcktInfoListResult");
const WatchRecord = require("./services/movieLog/models/WatchRecordResult");
const CreditCardInfo = require("./services/purchase/models/CreditCardInfoResult");
const GetGmoExecTran = require("./services/purchase/models/GetGmoExecTranResult");
const GetQuestionnaireList = require("./services/purchase/models/GetQuestionnaireListResult");
const GetShhriInfoByKey = require("./services/purchase/models/GetShhriInfoByKeyResult");
const GetTsuryShhziInfo = require("./services/purchase/models/GetTsuryShhziInfoResult");
const GetCodeName = require("./services/util/models/GetCodeNameResult");
const DecryptWebMoneyKssiInfo = require("./services/webMoney/models/DecryptWebMoneyKssiInfoResult");
const WebMoneyEntry = require("./services/webMoney/models/WebMoneyEntryResult");
const PreserveCode = require("./services2/bonus/models/PreserveCodeResult");
const GiftCardCancel = require("./services2/giftCard/models/GiftCardCancelResult");
const GiftCardIDAuth = require("./services2/giftCard/models/GiftCardIDAuthResult");
const GetGmoEntryTran = require("./services2/purchase/models/GetGmoEntryTranResult");
const RegisterPurchaseInfo = require("./services2/purchase/models/RegisterPurchaseInfoResult");
exports.service = service_1.ServicesBuilder.getInstance();
var models;
(function (models) {
    let services;
    (function (services) {
        let digitalIncentiveDownload;
        (function (digitalIncentiveDownload) {
            digitalIncentiveDownload.GetDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkList.GetDigitalIncentiveDownloadLinkListResult;
            digitalIncentiveDownload.GetDigitalIncentiveDownloadResult = GetDigitalIncentiveDownload.GetDigitalIncentiveDownloadResult;
        })(digitalIncentiveDownload = services.digitalIncentiveDownload || (services.digitalIncentiveDownload = {}));
        let film;
        (function (film) {
            film.BnnrInfoResult = BnnrInfo.BnnrInfoResult;
            film.DgtlincntvInfoResult = DgtlincntvInfo.DgtlincntvInfoResult;
            film.FilmCastResult = FilmCast.FilmCastResult;
            film.FilmGenreResult = FilmGenre.FilmGenreResult;
            film.FilmPhotoGalleryResult = FilmPhotoGallery.FilmPhotoGalleryResult;
            film.FilmResult = Film.FilmResult;
            film.FilmStaffResult = FilmStaff.FilmStaffResult;
            film.GetTrailerDetailResult = GetTrailerDetail.GetTrailerDetailResult;
            film.TicketInfoResult = TicketInfo.TicketInfoResult;
            film.TicketInfoTypeResult = TicketInfoType.TicketInfoTypeResult;
        })(film = services.film || (services.film = {}));
        let giftCard;
        (function (giftCard) {
            giftCard.MvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiry.MvtkGiftCardBalanceInquiryResult;
            giftCard.MvtkGiftCardEntryResult = MvtkGiftCardEntry.MvtkGiftCardEntryResult;
        })(giftCard = services.giftCard || (services.giftCard = {}));
        let memberInfo;
        (function (memberInfo) {
            memberInfo.MemberInfoResult = MemberInfo.MemberInfoResult;
        })(memberInfo = services.memberInfo || (services.memberInfo = {}));
        let movieLog;
        (function (movieLog) {
            movieLog.GetFavoriteFilmListResult = GetFavoriteFilmList.GetFavoriteFilmListResult;
            movieLog.GetUnusedTicketListResult = GetUnusedTicketList.GetUnusedTicketListResult;
            movieLog.SeatReservationStatusListResult = SeatReservationStatusList.SeatReservationStatusListResult;
            movieLog.SentGiftStatusListResult = SentGiftStatusList.SentGiftStatusListResult;
            movieLog.ShyzmtcktInfoListResult = ShyzmtcktInfoList.ShyzmtcktInfoListResult;
            movieLog.WatchRecordResult = WatchRecord.WatchRecordResult;
        })(movieLog = services.movieLog || (services.movieLog = {}));
        let purchase;
        (function (purchase) {
            purchase.GetFavoriteFilmLisCreditCardInfoResultResult = CreditCardInfo.CreditCardInfoResult;
            purchase.GetGmoExecTranResult = GetGmoExecTran.GetGmoExecTranResult;
            purchase.GetQuestionnaireListResult = GetQuestionnaireList.GetQuestionnaireListResult;
            purchase.GetShhriInfoByKeyResult = GetShhriInfoByKey.GetShhriInfoByKeyResult;
            purchase.GetTsuryShhziInfoResult = GetTsuryShhziInfo.GetTsuryShhziInfoResult;
        })(purchase = services.purchase || (services.purchase = {}));
        let util;
        (function (util) {
            util.GetCodeNameResult = GetCodeName.GetCodeNameResult;
        })(util = services.util || (services.util = {}));
        let webMoney;
        (function (webMoney) {
            webMoney.DecryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfo.DecryptWebMoneyKssiInfoResult;
            webMoney.WebMoneyEntryResult = WebMoneyEntry.WebMoneyEntryResult;
        })(webMoney = services.webMoney || (services.webMoney = {}));
    })(services = models.services || (models.services = {}));
    let services2;
    (function (services2) {
        let bounus;
        (function (bounus) {
            bounus.PreserveCodeResult = PreserveCode.PreserveCodeResult;
        })(bounus = services2.bounus || (services2.bounus = {}));
        let giftCard;
        (function (giftCard) {
            giftCard.GiftCardCancelResult = GiftCardCancel.GiftCardCancelResult;
            giftCard.GiftCardIDAuthResult = GiftCardIDAuth.GiftCardIDAuthResult;
        })(giftCard = services2.giftCard || (services2.giftCard = {}));
        let purchase;
        (function (purchase) {
            purchase.GetGmoEntryTranResult = GetGmoEntryTran.GetGmoEntryTranResult;
            purchase.RegisterPurchaseInfoResult = RegisterPurchaseInfo.RegisterPurchaseInfoResult;
        })(purchase = services2.purchase || (services2.purchase = {}));
    })(services2 = models.services2 || (models.services2 = {}));
})(models = exports.models || (exports.models = {}));
