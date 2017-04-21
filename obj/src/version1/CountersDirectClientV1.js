"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class CountersDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-counters", "controller", "*", "*", "*"));
    }
    readCounters(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'counters.read_counters');
        this._controller.readCounters(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    writeCounter(correlationId, counter, callback) {
        let timing = this.instrument(correlationId, 'counters.write_counter');
        this._controller.writeCounter(correlationId, counter, (err, counter) => {
            timing.endTiming();
            if (callback)
                callback(err, counter);
        });
    }
    writeCounters(correlationId, counters, callback) {
        let timing = this.instrument(correlationId, 'counters.write_counters');
        this._controller.writeCounters(correlationId, counters, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    clear(correlationId, callback) {
        let timing = this.instrument(correlationId, 'counters.clear');
        this._controller.clear(correlationId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.CountersDirectClientV1 = CountersDirectClientV1;
//# sourceMappingURL=CountersDirectClientV1.js.map