import Service from '../../common/Service';
import { IPreserveCodeIn } from './models/PreserveCodeIn';
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
    preserveCode(params: IPreserveCodeIn): Promise<{
        response: any;
        result: PreserveCodeResult;
    }>;
}
