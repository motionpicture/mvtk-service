import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import { IPreserveCodeIn, PreserveCodeIn } from './Models/PreserveCodeIn';
import PreserveCodeResult from './Models/PreserveCodeResult';

/**
 * BonusGrantingService
 * @class
 * @extends {Service}
 */
export default class BonusGrantingService extends Service {
    /**
     * 特典コード確保
     *
     * @param {IPreserveCodeIn} args
     */
    public preserveCode(
        params: IPreserveCodeIn,
        cb: (err: any, response: any, preserveCodeResult: PreserveCodeResult | null) => void
    ): void {
        const method = 'PreserveCode';

        const args = new PreserveCodeIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let preserveCodeResult: PreserveCodeResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
             || result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_OVERFLOW_ERROR) {
                preserveCodeResult = PreserveCodeResult.parse(result);
            }

            cb(err, response, preserveCodeResult);
        });
    }

}
