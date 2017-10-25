import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import MvtkGiftCardEntryIn from './Models/MvtkGiftCardEntryIn';
import MvtkGiftCardBalanceInquiryResult from './Models/MvtkGiftCardBalanceInquiryResult';
import MvtkGiftCardEntryResult from './Models/MvtkGiftCardEntryResult';

export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    public mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string, cb: (err, response, mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult) => void): void {
        let method = 'MvtkGiftCardBalanceInquiry';

        let args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants.DVC_TYP_PC
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult = null;

            if (result.RESULT_INFO.STATUS === 'N00000') {
                mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult.parse(result);
            }

            cb(err, response, mvtkGiftCardBalanceInquiryResult);
        });
    }

    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    public mvtkGiftCardEntry(params: Object, cb: (err, response, mvtkGiftCardEntryResults: Array<MvtkGiftCardEntryResult>) => void): void {
        let method = 'MvtkGiftCardEntry';

        let args = new MvtkGiftCardEntryIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let mvtkGiftCardEntryResults: Array<MvtkGiftCardEntryResult> = [];

            if (result.RESULT_INFO.STATUS === 'N00000') {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                    for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                        mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(info));
                    }
                } else {
                    mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                }
            }

            cb(err, response, mvtkGiftCardEntryResults);
        });
    }
}
