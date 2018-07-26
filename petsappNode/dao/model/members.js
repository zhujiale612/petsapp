var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var MemberSchema = new mongoose.Schema({
  //真实姓名
  memberName: {
    type: String
  },
  //昵称
  memberAcount: {
    type: String
  },
  //电话号码
  memberPhone: {
    type: String
  },
  //会员卡
  memberCard: {
    type: String
  },
  //图片
  imageUrl: {
    type: String
  },
  //地址
  memberAdd: {
    type: String
  },
  // 积分
  memberPoint: {
    type: String
  },
  pets: [
    {//宠物名
      petsName: {
        type: String,
      },
      //品类
      petsClass: {
        type: String,
      },
      //种类
      petsType: {
        type: String,
      },
      //破蛋日
      petsBirth: {
        type: String,
      },
      //性格
      petsNature: {
        type: String,
      }
    },]

});

mongoose.model("members", MemberSchema, "members");