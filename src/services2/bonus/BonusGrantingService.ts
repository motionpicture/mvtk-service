import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { IPreserveCodeIn, PreserveCodeIn } from './models/PreserveCodeIn';
import { PreserveCodeResult } from './models/PreserveCodeResult';

/**
 * BonusGrantingService
 * @extends {Service}
 */
export class BonusGrantingService extends Service {
    /**
     * 特典コード確保
     */
    public async preserveCode(params: IPreserveCodeIn) {
        const method = 'PreserveCode';

        const args = new PreserveCodeIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: PreserveCodeResult;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let preserveCodeResult: PreserveCodeResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_REPLICATION_ERROR) {
                    preserveCodeResult = PreserveCodeResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: preserveCodeResult
                });
            });
        });
    }

}
