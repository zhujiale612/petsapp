var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goodSchema = new Schema({
  usersId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
  //商品名称
  GName: {
    type: String
  },
  //商品品类
  variety: {
    type: String
  },
  //材质或制作方法
  material: {
    type: String
  },
  //适用规格
  apply: {
    type: String
  },
  //专属规格
  special: {
    type: String
  },
  //包装规格
  packing: {
    type: String
  },
  //口味
  taste: {
    type: String
  },
  //特殊功用
  function: {
    type: String,
  },
  //产地
  place: {
    type: String,
  },
  //出厂日期
  date: {
    type: String,
  },
  //保质期
  period: {
    type: String,
  },
  //供应商
  supplier: {
    type: String,
  },
  //特色说明
  explain: {
    type: String,
  },
  //价格
  price: {
    type: Number,
  },
  //商品图片
  gimgs: {
    type: Object,
  },
});

mongoose.model("goods", goodSchema, "goods");