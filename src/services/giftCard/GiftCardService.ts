
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { MvtkGiftCardBalanceInquiryResult } from './models/MvtkGiftCardBalanceInquiryResult';
import { MvtkGiftCardEntryIn } from './models/MvtkGiftCardEntryIn';
import { MvtkGiftCardEntryResult } from './models/MvtkGiftCardEntryResult';

/**
 * GiftCardService
 */
export class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param mvtkgftcrdId ギフトカードID
     * @param mvtkgftcrdpinCd ギフトカードPINコード
     */
    public async mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string) {
        const method = 'MvtkGiftCardBalanceInquiry';

        const args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants.DVC_TYP_PC
        };

        return new Promise<{
            response: any;
            result: MvtkGiftCardBalanceInquiryResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult;
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: mvtkGiftCardBalanceInquiryResult
                });
            });
        });
    }

    /**
     * ギフトカード利用
     */
    public async mvtkGiftCardEntry(params: Object) {
        const method = 'MvtkGiftCardEntry';

        const args = new MvtkGiftCardEntryIn(params);

        return new Promise<{
            response: any;
            result: MvtkGiftCardEntryResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                const mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] = [];
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                        for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                            mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(info));
                        }
                    } else {
                        mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: mvtkGiftCardEntryResults
                });
            });
        });
    }
}
