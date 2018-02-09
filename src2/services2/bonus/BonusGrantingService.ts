import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import { IPreserveCodeIn, PreserveCodeIn } from './models/PreserveCodeIn';
import PreserveCodeResult from './models/PreserveCodeResult';

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
    public preserveCode(params: IPreserveCodeIn) {
        const method = 'PreserveCode';

        const args = new PreserveCodeIn(params);

        let message = args.toXml();

        return new Promise<{
            response: any;
            result: PreserveCodeResult;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let preserveCodeResult: PreserveCodeResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_REPLICATION_ERROR) {
                    preserveCodeResult = PreserveCodeResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: preserveCodeResult
                });
            });
        });
    }

}
