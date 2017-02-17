import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import MvtkGiftCardBalanceInquiryResult from './Models/MvtkGiftCardBalanceInquiryResult';
import {IMvtkGiftCardEntryIn, MvtkGiftCardEntryIn} from './Models/MvtkGiftCardEntryIn';
import MvtkGiftCardEntryResult from './Models/MvtkGiftCardEntryResult';

/**
 * GiftCardService
 * @class
 * @extends {Service}
 */
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    public mvtkGiftCardBalanceInquiry(
        mvtkgftcrdId: string,
        mvtkgftcrdpinCd: string,
        cb: (err: any, response: any, mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult | null) => void
    ): void {
        const method = 'MvtkGiftCardBalanceInquiry';

        const args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants.DVC_TYP_PC
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult | null = null;

            if (result.RESULT_INFO.STATUS === 'N00000') {
                mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult.parse(result);
            }

            cb(err, response, mvtkGiftCardBalanceInquiryResult);
        });
    }

    /**
     * ギフトカード利用
     *
     * @param {IMvtkGiftCardEntryIn} args
     */
    public mvtkGiftCardEntry(
        params: IMvtkGiftCardEntryIn,
        cb: (err: any, response: any, mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] | null) => void
    ): void {
        const method = 'MvtkGiftCardEntry';

        const args = new MvtkGiftCardEntryIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            const mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] = [];

            if (result.RESULT_INFO.STATUS === 'N00000') {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
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
