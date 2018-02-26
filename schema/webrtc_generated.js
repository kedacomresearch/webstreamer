// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var webstreamer = webstreamer || {};

/**
 * @const
 * @namespace
 */
webstreamer.webrtc = webstreamer.webrtc || {};

/**
 * @const
 * @namespace
 */
webstreamer.webrtc.topics = webstreamer.webrtc.topics || {};

/**
 * @enum
 */
webstreamer.webrtc.SdpRole = {
  OFFER: 0,
  ANSWER: 1,
  ANY: 2
};

/**
 * @enum
 */
webstreamer.webrtc.StreamMode = {
  SENDONLY: 0,
  RECVONLY: 1,
  SENDRECV: 2
};

/**
 * @enum
 */
webstreamer.webrtc.topics.TopicCategory = {
  SDP: 0,
  STATUS: 1
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.Endpoint = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.Endpoint}
 */
webstreamer.webrtc.topics.Endpoint.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.Endpoint=} obj
 * @returns {webstreamer.webrtc.topics.Endpoint}
 */
webstreamer.webrtc.topics.Endpoint.getRootAsEndpoint = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.Endpoint).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {webstreamer.webrtc.SdpRole}
 */
webstreamer.webrtc.topics.Endpoint.prototype.sdpRole = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {webstreamer.webrtc.SdpRole} */ (this.bb.readInt8(this.bb_pos + offset)) : webstreamer.webrtc.SdpRole.OFFER;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
webstreamer.webrtc.topics.Endpoint.prototype.connection = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
webstreamer.webrtc.topics.Endpoint.prototype.group = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.Endpoint.startEndpoint = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {webstreamer.webrtc.SdpRole} sdpRole
 */
webstreamer.webrtc.topics.Endpoint.addSdpRole = function(builder, sdpRole) {
  builder.addFieldInt8(0, sdpRole, webstreamer.webrtc.SdpRole.OFFER);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} connectionOffset
 */
webstreamer.webrtc.topics.Endpoint.addConnection = function(builder, connectionOffset) {
  builder.addFieldOffset(1, connectionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupOffset
 */
webstreamer.webrtc.topics.Endpoint.addGroup = function(builder, groupOffset) {
  builder.addFieldOffset(2, groupOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.Endpoint.endEndpoint = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.SubscribeItem = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.SubscribeItem}
 */
webstreamer.webrtc.topics.SubscribeItem.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.SubscribeItem=} obj
 * @returns {webstreamer.webrtc.topics.SubscribeItem}
 */
webstreamer.webrtc.topics.SubscribeItem.getRootAsSubscribeItem = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.SubscribeItem).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {webstreamer.webrtc.topics.Endpoint=} obj
 * @returns {webstreamer.webrtc.topics.Endpoint|null}
 */
webstreamer.webrtc.topics.SubscribeItem.prototype.endpoint = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new webstreamer.webrtc.topics.Endpoint).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {number} index
 * @returns {webstreamer.webrtc.topics.TopicCategory}
 */
webstreamer.webrtc.topics.SubscribeItem.prototype.topics = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {webstreamer.webrtc.topics.TopicCategory} */ (this.bb.readInt8(this.bb.__vector(this.bb_pos + offset) + index)) : /** @type {webstreamer.webrtc.topics.TopicCategory} */ (0);
};

/**
 * @returns {number}
 */
webstreamer.webrtc.topics.SubscribeItem.prototype.topicsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Int8Array}
 */
webstreamer.webrtc.topics.SubscribeItem.prototype.topicsArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Int8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.SubscribeItem.startSubscribeItem = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} endpointOffset
 */
webstreamer.webrtc.topics.SubscribeItem.addEndpoint = function(builder, endpointOffset) {
  builder.addFieldOffset(0, endpointOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} topicsOffset
 */
webstreamer.webrtc.topics.SubscribeItem.addTopics = function(builder, topicsOffset) {
  builder.addFieldOffset(1, topicsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<webstreamer.webrtc.topics.TopicCategory>} data
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.SubscribeItem.createTopicsVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
webstreamer.webrtc.topics.SubscribeItem.startTopicsVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.SubscribeItem.endSubscribeItem = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.Topic = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.Topic}
 */
webstreamer.webrtc.topics.Topic.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.Topic=} obj
 * @returns {webstreamer.webrtc.topics.Topic}
 */
webstreamer.webrtc.topics.Topic.getRootAsTopic = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.Topic).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {webstreamer.webrtc.topics.TopicCategory}
 */
webstreamer.webrtc.topics.Topic.prototype.category = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {webstreamer.webrtc.topics.TopicCategory} */ (this.bb.readInt8(this.bb_pos + offset)) : webstreamer.webrtc.topics.TopicCategory.SDP;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
webstreamer.webrtc.topics.Topic.prototype.sdp = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
webstreamer.webrtc.topics.Topic.prototype.status = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.Topic.startTopic = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {webstreamer.webrtc.topics.TopicCategory} category
 */
webstreamer.webrtc.topics.Topic.addCategory = function(builder, category) {
  builder.addFieldInt8(0, category, webstreamer.webrtc.topics.TopicCategory.SDP);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sdpOffset
 */
webstreamer.webrtc.topics.Topic.addSdp = function(builder, sdpOffset) {
  builder.addFieldOffset(1, sdpOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} statusOffset
 */
webstreamer.webrtc.topics.Topic.addStatus = function(builder, statusOffset) {
  builder.addFieldOffset(2, statusOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.Topic.endTopic = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.TopicSubscribe = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.TopicSubscribe}
 */
webstreamer.webrtc.topics.TopicSubscribe.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.TopicSubscribe=} obj
 * @returns {webstreamer.webrtc.topics.TopicSubscribe}
 */
webstreamer.webrtc.topics.TopicSubscribe.getRootAsTopicSubscribe = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.TopicSubscribe).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {webstreamer.webrtc.topics.SubscribeItem=} obj
 * @returns {webstreamer.webrtc.topics.SubscribeItem}
 */
webstreamer.webrtc.topics.TopicSubscribe.prototype.items = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new webstreamer.webrtc.topics.SubscribeItem).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
webstreamer.webrtc.topics.TopicSubscribe.prototype.itemsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.TopicSubscribe.startTopicSubscribe = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} itemsOffset
 */
webstreamer.webrtc.topics.TopicSubscribe.addItems = function(builder, itemsOffset) {
  builder.addFieldOffset(0, itemsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.TopicSubscribe.createItemsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
webstreamer.webrtc.topics.TopicSubscribe.startItemsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.TopicSubscribe.endTopicSubscribe = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.TopicNotification = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.TopicNotification}
 */
webstreamer.webrtc.topics.TopicNotification.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.TopicNotification=} obj
 * @returns {webstreamer.webrtc.topics.TopicNotification}
 */
webstreamer.webrtc.topics.TopicNotification.getRootAsTopicNotification = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.TopicNotification).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {webstreamer.webrtc.topics.Endpoint=} obj
 * @returns {webstreamer.webrtc.topics.Endpoint|null}
 */
webstreamer.webrtc.topics.TopicNotification.prototype.endpoint = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new webstreamer.webrtc.topics.Endpoint).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {webstreamer.webrtc.topics.Topic=} obj
 * @returns {webstreamer.webrtc.topics.Topic|null}
 */
webstreamer.webrtc.topics.TopicNotification.prototype.topic = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new webstreamer.webrtc.topics.Topic).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.TopicNotification.startTopicNotification = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} endpointOffset
 */
webstreamer.webrtc.topics.TopicNotification.addEndpoint = function(builder, endpointOffset) {
  builder.addFieldOffset(0, endpointOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} topicOffset
 */
webstreamer.webrtc.topics.TopicNotification.addTopic = function(builder, topicOffset) {
  builder.addFieldOffset(1, topicOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.TopicNotification.endTopicNotification = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
webstreamer.webrtc.topics.TopicPush = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {webstreamer.webrtc.topics.TopicPush}
 */
webstreamer.webrtc.topics.TopicPush.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {webstreamer.webrtc.topics.TopicPush=} obj
 * @returns {webstreamer.webrtc.topics.TopicPush}
 */
webstreamer.webrtc.topics.TopicPush.getRootAsTopicPush = function(bb, obj) {
  return (obj || new webstreamer.webrtc.topics.TopicPush).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {webstreamer.webrtc.topics.Endpoint=} obj
 * @returns {webstreamer.webrtc.topics.Endpoint|null}
 */
webstreamer.webrtc.topics.TopicPush.prototype.endpoint = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new webstreamer.webrtc.topics.Endpoint).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {webstreamer.webrtc.topics.Topic=} obj
 * @returns {webstreamer.webrtc.topics.Topic|null}
 */
webstreamer.webrtc.topics.TopicPush.prototype.topic = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new webstreamer.webrtc.topics.Topic).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
webstreamer.webrtc.topics.TopicPush.startTopicPush = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} endpointOffset
 */
webstreamer.webrtc.topics.TopicPush.addEndpoint = function(builder, endpointOffset) {
  builder.addFieldOffset(0, endpointOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} topicOffset
 */
webstreamer.webrtc.topics.TopicPush.addTopic = function(builder, topicOffset) {
  builder.addFieldOffset(1, topicOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
webstreamer.webrtc.topics.TopicPush.endTopicPush = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
webstreamer.webrtc.topics.TopicPush.finishTopicPushBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.webstreamer = webstreamer;
