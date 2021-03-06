"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_components_node_2 = require("pip-services3-components-node");
class PerfMonLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('counters');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    setReferences(references) {
        super.setReferences(references);
        this._logger = new pip_services3_components_node_1.CompositeLogger();
        this._counters = new pip_services3_components_node_2.CompositeCounters();
    }
    readCounters(correlationId, filter, paging, callback) {
        this.callCommand('read_counters', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    writeCounter(correlationId, counter, callback) {
        this.callCommand('write_counter', correlationId, {
            counter: counter
        }, callback);
    }
    writeCounters(correlationId, counters, callback) {
        this.callCommand('write_counters', correlationId, {
            counters: counters
        }, callback);
    }
    clear(correlationId, callback) {
        this.callCommand('clear', correlationId, null, callback);
    }
}
exports.PerfMonLambdaClientV1 = PerfMonLambdaClientV1;
//# sourceMappingURL=PerfMonLambdaClientV1.js.map