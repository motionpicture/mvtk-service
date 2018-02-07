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
    public mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string) {
        let method = 'MvtkGiftCardBalanceInquiry';

        let args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants.DVC_TYP_PC
        };

        return new Promise<{
            response: any;
            result: MvtkGiftCardBalanceInquiryResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult = null;
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: mvtkGiftCardBalanceInquiryResult
                });
            });
        });
    }

    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    public mvtkGiftCardEntry(params: Object) {
        let method = 'MvtkGiftCardEntry';

        let args = new MvtkGiftCardEntryIn(params);

        return new Promise<{
            response: any;
            result: MvtkGiftCardEntryResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] = [];
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                            mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(info));
                        }
                    } else {
                        mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: mvtkGiftCardEntryResults
                });
            });
        });
    }
}
