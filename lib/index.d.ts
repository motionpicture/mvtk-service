/**
 * index
 */
import { ServicesBuilder } from './service';
import * as GetDigitalIncentiveDownloadLinkList from './services/digitalIncentiveDownload/models/GetDigitalIncentiveDownloadLinkListResult';
import * as GetDigitalIncentiveDownload from './services/digitalIncentiveDownload/models/GetDigitalIncentiveDownloadResult';
import * as BnnrInfo from './services/film/models/BnnrInfoResult';
import * as DgtlincntvInfo from './services/film/models/DgtlincntvInfoResult';
import * as FilmCast from './services/film/models/FilmCastResult';
import * as FilmGenre from './services/film/models/FilmGenreResult';
import * as FilmPhotoGallery from './services/film/models/FilmPhotoGalleryResult';
import * as Film from './services/film/models/FilmResult';
import * as FilmStaff from './services/film/models/FilmStaffResult';
import * as GetTrailerDetail from './services/film/models/GetTrailerDetailResult';
import * as TicketInfo from './services/film/models/TicketInfoResult';
import * as TicketInfoType from './services/film/models/TicketInfoTypeResult';
import * as MvtkGiftCardBalanceInquiry from './services/giftCard/models/MvtkGiftCardBalanceInquiryResult';
import * as MvtkGiftCardEntry from './services/giftCard/models/MvtkGiftCardEntryResult';
import * as MemberInfo from './services/memberInfo/models/MemberInfoResult';
import * as GetFavoriteFilmList from './services/movieLog/models/GetFavoriteFilmListResult';
import * as GetUnusedTicketList from './services/movieLog/models/GetUnusedTicketListResult';
import * as SeatReservationStatusList from './services/movieLog/models/SeatReservationStatusListResult';
import * as SentGiftStatusList from './services/movieLog/models/SentGiftStatusListResult';
import * as ShyzmtcktInfoList from './services/movieLog/models/ShyzmtcktInfoListResult';
import * as WatchRecord from './services/movieLog/models/WatchRecordResult';
import * as CreditCardInfo from './services/purchase/models/CreditCardInfoResult';
import * as GetGmoExecTran from './services/purchase/models/GetGmoExecTranResult';
import * as GetQuestionnaireList from './services/purchase/models/GetQuestionnaireListResult';
import * as GetShhriInfoByKey from './services/purchase/models/GetShhriInfoByKeyResult';
import * as GetTsuryShhziInfo from './services/purchase/models/GetTsuryShhziInfoResult';
import * as GetCodeName from './services/util/models/GetCodeNameResult';
import * as PreserveCode from './services2/bonus/models/PreserveCodeResult';
import * as GiftCardCancel from './services2/giftCard/models/GiftCardCancelResult';
import * as GiftCardIDAuth from './services2/giftCard/models/GiftCardIDAuthResult';
import * as GetGmoEntryTran from './services2/purchase/models/GetGmoEntryTranResult';
import * as RegisterPurchaseInfo from './services2/purchase/models/RegisterPurchaseInfoResult';
export declare const service: ServicesBuilder;
export declare namespace models {
    namespace services {
        namespace digitalIncentiveDownload {
            export import GetDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkList.GetDigitalIncentiveDownloadLinkListResult;
            export import GetDigitalIncentiveDownloadResult = GetDigitalIncentiveDownload.GetDigitalIncentiveDownloadResult;
        }
        namespace film {
            export import BnnrInfoResult = BnnrInfo.BnnrInfoResult;
            export import DgtlincntvInfoResult = DgtlincntvInfo.DgtlincntvInfoResult;
            export import FilmCastResult = FilmCast.FilmCastResult;
            export import FilmGenreResult = FilmGenre.FilmGenreResult;
            export import FilmPhotoGalleryResult = FilmPhotoGallery.FilmPhotoGalleryResult;
            export import FilmResult = Film.FilmResult;
            export import FilmStaffResult = FilmStaff.FilmStaffResult;
            export import GetTrailerDetailResult = GetTrailerDetail.GetTrailerDetailResult;
            export import TicketInfoResult = TicketInfo.TicketInfoResult;
            export import TicketInfoTypeResult = TicketInfoType.TicketInfoTypeResult;
        }
        namespace giftCard {
            export import MvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiry.MvtkGiftCardBalanceInquiryResult;
            export import MvtkGiftCardEntryResult = MvtkGiftCardEntry.MvtkGiftCardEntryResult;
        }
        namespace memberInfo {
            export import MemberInfoResult = MemberInfo.MemberInfoResult;
        }
        namespace movieLog {
            export import GetFavoriteFilmListResult = GetFavoriteFilmList.GetFavoriteFilmListResult;
            export import GetUnusedTicketListResult = GetUnusedTicketList.GetUnusedTicketListResult;
            export import SeatReservationStatusListResult = SeatReservationStatusList.SeatReservationStatusListResult;
            export import SentGiftStatusListResult = SentGiftStatusList.SentGiftStatusListResult;
            export import ShyzmtcktInfoListResult = ShyzmtcktInfoList.ShyzmtcktInfoListResult;
            export import WatchRecordResult = WatchRecord.WatchRecordResult;
        }
        namespace purchase {
            export import GetFavoriteFilmLisCreditCardInfoResultResult = CreditCardInfo.CreditCardInfoResult;
            export import GetGmoExecTranResult = GetGmoExecTran.GetGmoExecTranResult;
            export import GetQuestionnaireListResult = GetQuestionnaireList.GetQuestionnaireListResult;
            export import GetShhriInfoByKeyResult = GetShhriInfoByKey.GetShhriInfoByKeyResult;
            export import GetTsuryShhziInfoResult = GetTsuryShhziInfo.GetTsuryShhziInfoResult;
        }
        namespace util {
            export import GetCodeNameResult = GetCodeName.GetCodeNameResult;
        }
    }
    namespace services2 {
        namespace bounus {
            export import PreserveCodeResult = PreserveCode.PreserveCodeResult;
        }
        namespace giftCard {
            export import GiftCardCancelResult = GiftCardCancel.GiftCardCancelResult;
            export import GiftCardIDAuthResult = GiftCardIDAuth.GiftCardIDAuthResult;
        }
        namespace purchase {
            export import GetGmoEntryTranResult = GetGmoEntryTran.GetGmoEntryTranResult;
            export import RegisterPurchaseInfoResult = RegisterPurchaseInfo.RegisterPurchaseInfoResult;
        }
    }
}
